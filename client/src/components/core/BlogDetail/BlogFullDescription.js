import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaRegClock } from "react-icons/fa6";
import { IoHeartCircle } from "react-icons/io5";
import { getBlogUrl, likeBlogUrl } from '../../../utils/api';

const BlogFullDescription = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);
    const [hasLiked, setHasLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);


    const currentUserId = 'user1'; 

    useEffect(() => {
        axios.get(getBlogUrl(id))
            .then(response => {
                const fetchedBlog = response.data.data;
                setBlog(fetchedBlog);
                setLikeCount(fetchedBlog.likes);
                const userLikes = JSON.parse(localStorage.getItem('userLikes')) || {};
                setHasLiked(userLikes[id] === true);
            })
            .catch(error => {
                setError('There was an error fetching the blog details!');
                console.error(error);
            });
    }, [id, currentUserId]);

    const toggleLike = () => {
        axios.post(likeBlogUrl(id), { userId: currentUserId })
            .then(response => {
                const updatedBlog = response.data.data;
                setLikeCount(updatedBlog.likes);
                setHasLiked(!hasLiked);
                const userLikes = JSON.parse(localStorage.getItem('userLikes')) || {};
                userLikes[id] = !hasLiked;
                localStorage.setItem('userLikes', JSON.stringify(userLikes));
            })
            .catch(error => {
                setError('There was an error toggling the like!');
                console.error(error);
            });
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 lg:px-0 w-full max-w-2xl lg:max-w-6xl mt-10">
            <h1 className="text-sm mb-4 text-richblack-100">Blog &gt; {blog.blogTitle}</h1>
            <div className="relative mb-6">
                <img src={blog.thumbnail} alt={blog.blogTitle} className="w-full h-[550px] rounded-3xl object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex items-end p-4">
                    <h2 className="text-base lg:text-3xl font-semibold text-white max-w-[90%]">{blog.blogTitle}</h2>
                </div>
            </div>
            <div className='flex items-center justify-between text-sm lg:text-base gap-x-4 mb-4'>
                <div className='flex flex-col lg:flex-row items-center gap-x-8 text-md text-orange-100'>
                    <p>by {blog.author}</p>
                    <div className='flex items-center gap-x-3'>
                        <FaRegClock />
                        <p>{blog.readTime} Read</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2 text-md'>
                    <button
                        onClick={toggleLike}
                        className={`rounded flex items-center`}
                    >
                        {hasLiked ? <IoHeartCircle className='text-orange-100 h-10 md:h-16 w-10 md:w-16' /> : <IoHeartCircle className='text-richblack-200 h-10 md:h-16 w-10 md:w-16' />}
                    </button>

                    <div>{likeCount} Likes </div>
                </div>
            </div>

            <h2 className="text-base font-semibold mb-4 text-richblack-200">{blog.blogTitle}</h2>

            <div className="mt-4">
                {blog.description && blog.description.length > 0 ? (
                    blog.description.map((desc, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-base font-semibold mb-1 text-richblack-200">{desc.descTitle}</h3>
                            <p className="text-sm lg:text-base text-richblack-200 mb-2">{desc.descContent}</p>
                            {desc.descImage && <div className='px-4 lg:px-16'><img src={desc.descImage} alt={desc.descTitle} className="w-full h-[360px] rounded-3xl object-cover my-10" /></div>}
                        </div>
                    ))
                ) : (
                    <p className="text-md lg:text-lg text-gray-700">No description available.</p>
                )}
            </div>
        </div>
    );
};

export default BlogFullDescription;
