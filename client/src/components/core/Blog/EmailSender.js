import React from 'react'
// import puppet from '../../../assets/images/puppet.png'
import logo from '../../../assets/images/puppet.png';


const EmailSender = () => {
    return (
        <div className='container mx-auto px-4 mt-20 w-full max-w-2xl lg:max-w-5xl'>
            <div className='border w-[95%] mx-auto p-10 rounded-lg border-x-richblack-400 flex'>
                <img
                    src={logo}
                    alt="Puppet"
                    width={115}
                    height={24}
                    loading="lazy"
                    className='pt-2 w-full md:w-[29%]' // Adjust width for small and medium screens
                />
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-3xl max-w-xl font-bold text-richblack-300'>Subscribe to our newsletter to get the latest updates and news</div>
                    <div className='w-full'>
                        <div class="flex items-center mt-1 w-full">
                            <input type="email" id="input-9" class="w-full h-14 px-3 text-base text-gray-700 border border-r-0 rounded-r-none border-richblack-400 focus:outline-none rounded-full shadow-sm" placeholder="Enter your email" />
                            <button class="h-14 px-14 text-base bg-orange-200 border border-l-0 rounded-r-full shadow-sm text-white  border-richblack-400">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailSender
