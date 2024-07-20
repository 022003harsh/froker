import React, { useState, useEffect } from 'react';
import EmailSender from '../components/core/Blog/EmailSender';
import RecentBlogs from '../components/core/Blog/RecentBlogs';
import BlogFullDescription from '../components/core/BlogDetail/BlogFullDescription';
import Popup from '../components/Popup';
import ShareBar from '../components/core/BlogDetail/ShareBar';

const BlogDetail = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition > pageHeight / 2 && !showPopup) {
                setShowPopup(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showPopup]);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="flex flex-col items-center justify-between w-11/12 max-w-maxContent mx-auto">
            <div className='flex flex-col items-center justify-between w-full h-full'>
                <BlogFullDescription />
                <RecentBlogs />
                <EmailSender />
            </div>

            {showPopup && <Popup onClose={closePopup} />}

            <ShareBar />
        </div>
    );
};

export default BlogDetail;
