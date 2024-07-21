// ShareBar.js
import React from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter } from 'react-icons/fa';

const ShareBar = () => {
    return (
        <div className="fixed bottom-28 right-0 flex flex-col items-center bg-white text-richblack-100 space-y-3 z-50">
            <p>Share</p>
            <a
                href="https://twitter.me/"
                target="_blank"
                rel="noreferrer"
                className="p-1 md:p-2 rounded-full text-white shadow-md transition"
            >
                <FaTwitter className='h-4 w-4 md:h-6 md:w-6 text-[#3c40c4]'/>
            </a>
            <a
                href="https://www.facebook.com/sharer/sharer.php?u="
                target="_blank"
                rel="noreferrer"
                className=" p-1 md:p-2 rounded-full text-white shadow-md transition"
            >
                <FaFacebookF className='h-4 w-4 md:h-6 md:w-6 text-[#2529b1] '/>
            </a>
            <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="p-1 md:p-2 rounded-full text-white shadow-md  transition"
            >
                <FaWhatsapp className='h-4 w-4 md:h-6 md:w-6 text-[#36e836]'/>
            </a>
        </div>
    );
};

export default ShareBar;
