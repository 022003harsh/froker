import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getRecentBlogsUrl } from '../../../utils/api';

const BlogHeroArea = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(getRecentBlogsUrl)
            .then(response => {
                setBlogs(response.data.data);
            })
            .catch(error => {
                setError('There was an error fetching the blogs!');
            });
    }, []);


    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    }

    const truncateTitle = (title, maxLength = 15) => {
        if (title.length <= maxLength) return `Title: ${title}`;
        return `Title: ${title.substring(0, maxLength)}...`;
    }

    return (
        <div className='flex flex-col space-y-10 justify-between items-center'>
            <div className="container mx-auto mt-6 md:mt-24">
                <header className="text-center text-lg md:text-2xl lg:text-5xl font-medium text-richblack-100">
                    <h1 className="text-4xl mb-6 lg:mb-10 text-orange-200">FROKER<span className='text-richblack-100 pl-2'>BLOG</span></h1>
                    <h2 className="lg:mb-6">Articles covering the most recent</h2>
                    <h3 className="">updates and advancements</h3>
                </header>
            </div>

            <div className="container mx-auto px-4 w-full max-w-2xl lg:max-w-5xl">
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {blogs.slice(0, 1).map(blog => (
                        <Link key={blog.id} to={`/blog/${blog.id}`} className="md:col-span-1">
                            <img src={blog.thumbnail} alt={blog.blogTitle} className="mb-4 w-full h-[160px] lg:h-[280px] rounded-2xl object-cover" />
                            <div className='pl-4 lg:pl-0'>
                                <p className="mb-4 text-md text-orange-100">by {blog.author} - {formatDate(blog.createdAt)}</p>
                                <h2 className="text-sm lg:text-base font-medium mb-2">{truncateTitle(blog.blogTitle)}</h2>
                                <p className="mb-4 text-sm lg:text-base text-richblack-200 leading-5">{blog.description[0]?.descContent.substring(0, 50)}...</p>
                                <p className="mb-4 text-md text-orange-100 font-semibold underline">Read More...</p>
                            </div>
                        </Link>
                    ))}
                    <div className="grid grid-cols-1 gap-3">
                        {blogs.slice(1, 3).map(blog => (
                            <Link key={blog.id} to={`/blog/${blog.id}`} className="flex flex-col lg:flex-row gap-3">
                                <img src={blog.thumbnail} alt={blog.blogTitle} className="mb-4 w-full lg:w-[50%] h-[160px] lg:h-full rounded-2xl object-cover" />
                                <div className='flex flex-col justify-center pl-4 lg:pl-0'>
                                    <p className="mb-4 text-md text-orange-100">by {blog.author} - {formatDate(blog.createdAt)}</p>
                                    <h2 className="text-sm lg:text-base font-medium mb-2">{truncateTitle(blog.blogTitle)}</h2>
                                    <p className="mb-4 text-sm lg:text-base text-richblack-200 leading-5">{blog.description[0]?.descContent.substring(0, 40)}...</p>
                                    <p className="mb-4 text-md text-orange-100 font-semibold underline">Read More...</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogHeroArea;
