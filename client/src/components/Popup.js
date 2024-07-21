import React from 'react';
import logo from '../assets/images/puppet.png';
import { IoMdClose } from "react-icons/io";

const Popup = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            style={{ zIndex: 9999 }} 
        >
            <div className="bg-white px-6 py-10 rounded-lg shadow-lg relative lg:flex lg:flex-row lg:items-start">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    <IoMdClose className='text-orange-100 h-8 w-8' />
                </button>

                <div className="lg:flex-1 flex flex-col items-center lg:items-start lg:pr-4 lg:order-2">
                    <div className='text-base lg:text-5xl font-bold text-richblack-300 text-center lg:text-left mb-4 lg:mb-6'>
                        Stay tuned!
                    </div>
                    <div className='text-base font-semibold text-richblack-400 text-center lg:text-left mb-4 lg:mb-6 max-w-[400px]'>
                        Subscribe to our Newsletter for Exclusive Updates, Tips, and More.
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-col lg:flex-row items-center w-full'>
                            <input
                                type="email"
                                id="input-9"
                                className='w-full h-9 lg:h-14 px-3 text-base text-gray-700 border lg:border-r-0 lg:rounded-r-none border-richblack-400 focus:outline-none rounded-full shadow-sm mb-2 lg:mb-0'
                                placeholder="Enter your email"
                            />
                            <button
                                className='h-9 lg:h-14 px-7 lg:px-10 text-base bg-orange-200 border lg:border-l-0 rounded-r-full rounded-l-full lg:rounded-l-none shadow-sm text-white border-richblack-400'
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <img
                    src={logo}
                    alt="Puppet"
                    loading="lazy"
                    className='w-full lg:w-[39%] lg:h-auto lg:ml-4 lg:order-1'
                />
            </div>
        </div>
    );
};

export default Popup;
