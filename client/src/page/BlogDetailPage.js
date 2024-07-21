import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmailSender from '../components/core/Blog/EmailSender';
import RecentBlogs from '../components/core/Blog/RecentBlogs';
import BlogFullDescription from '../components/core/BlogDetail/BlogFullDescription';
import Popup from '../components/Popup';
import ShareBar from '../components/core/BlogDetail/ShareBar';

const BlogDetail = () => {
    const { id } = useParams(); // Get the blog ID from the route parameters
    const [showPopup, setShowPopup] = useState(false);
    const [popupCount, setPopupCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition > pageHeight / 2 && popupCount < 1) {
                setShowPopup(true);
                setPopupCount(popupCount + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [popupCount]);

    useEffect(() => {
        // Reset the popup count when the route changes
        setPopupCount(0);
    }, [id]);

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
