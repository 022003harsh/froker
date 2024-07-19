import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/blog/getBlog/${id}`)
      .then(response => {
        setBlog(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blog details!', error);
      });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.blogTitle}</h1>
      <img src={blog.thumbnail} alt={blog.blogTitle} />
      <p>{blog.author}</p>
      <p>{blog.readTime}</p>
      <p>{blog.likes}</p>
      <div>
        {blog.description.map((desc, index) => (
          <div key={index}>
            <h2>{desc.descTitle}</h2>
            <p>{desc.descContent}</p>
            {desc.descImage && <img src={desc.descImage} alt={desc.descTitle} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
