import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/blog/getAllBlogs')
      .then(response => {
        setBlogs(response.data.data);
      })
      .catch(error => {
        setError('There was an error fetching the blogs!');
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      {error && <p>{error}</p>}
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.blogTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
