import React from 'react';
import RecentBlogs from '../components/core/Blog/RecentBlogs'
import BlogHeroArea from '../components/core/Blog/BlogHeroArea';
import EmailSender from '../components/core/Blog/EmailSender';

const BlogList = () => {
  return (
    <div className='flex-row items-center justify-between w-11/12 max-w-maxContent mx-auto'>
      <div className='flex-row items-center justify-between w-full h-full'>
          <BlogHeroArea />
          <RecentBlogs />
          <EmailSender />
      </div>
    </div>
  );
};

export default BlogList;
