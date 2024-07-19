import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/blog/getAllBlogs')
      .then(response => {
        setBlogs(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs!', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <Link to={`/blog/${blog._id}`}>{blog.blogTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
