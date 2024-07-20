import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);
    const [hasLiked, setHasLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/blog/getBlog/${id}`)
            .then(response => {
                const fetchedBlog = response.data.data;
                setBlog(fetchedBlog);
                setLikeCount(fetchedBlog.likes);
                setHasLiked(fetchedBlog.likedBy.includes('user1')); // Assuming user ID is 'user1' for demo purposes
            })
            .catch(error => {
                setError('There was an error fetching the blog details!');
                console.error(error);
            });
    }, [id]);

    const toggleLike = () => {
        axios.post(`http://localhost:4000/api/v1/blog/like/${id}`, { userId: 'user1' })
            .then(response => {
                const updatedBlog = response.data.data;
                setLikeCount(updatedBlog.likes);
                setHasLiked(!hasLiked);
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
        <div>
            <h1>{blog.blogTitle}</h1>
            <img src={blog.thumbnail} alt={blog.blogTitle} />
            <p>{blog.author}</p>
            <p>{blog.readTime}</p>
            <p>{likeCount} Likes</p>
            <button onClick={toggleLike}>
                {hasLiked ? 'Unlike' : 'Like'}
            </button>
            <div>
                {blog.description && blog.description.length > 0 ? (
                    blog.description.map((desc, index) => (
                        <div key={index}>
                            <h2>{desc.descTitle}</h2>
                            <p>{desc.descContent}</p>
                            {desc.descImage && <img src={desc.descImage} alt={desc.descTitle} />}
                        </div>
                    ))
                ) : (
                    <p>No description available.</p>
                )}
            </div>
        </div>
    );
};

export default BlogDetail;
