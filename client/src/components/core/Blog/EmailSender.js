import React from 'react';
import logo from '../../../assets/images/puppet.png';

const EmailSender = () => {
    return (
        <div className='container mx-auto px-4 mt-20 w-full max-w-2xl lg:max-w-5xl'>
            <div className='border w-[95%] mx-auto p-10 rounded-lg border-richblack-400 flex flex-col lg:flex-row-reverse items-center'>
                <div className='flex flex-col items-center lg:items-start justify-center w-full lg:w-[69%]'>
                    <div className='text-base lg:text-3xl font-bold text-richblack-300 text-center lg:text-left mb-4 lg:mb-6'>
                        Subscribe to our newsletter to get the latest updates and news
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
                                className='h-9 lg:h-14 px-7 lg:px-14 text-base bg-orange-200 border lg:border-l-0 rounded-r-full rounded-l-full lg:rounded-l-none shadow-sm text-white border-richblack-400'
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
                    className='lg:w-[29%] mb-4 lg:mb-0 w-full'
                />
            </div>
        </div>
    );
}

export default EmailSender;
