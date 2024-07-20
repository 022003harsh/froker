import React from 'react';
import logo from '../../assets/images/black-logo-frokerr-copy-10_pwpomg.jpg.png';
import footerimage from '../../assets/images/footerimage.png';
import scanner from '../../assets/images/scanner.png'
import { FaAngleRight, FaFacebook } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-gray-900 pt-10'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                    <div className='flex justify-center w-full'>
                        <img src={logo} alt="Logo" className='w-42 h-20 mb-4' />
                    </div>

                    <div>
                        <h3 className='text-2xl text-orange-100 font-bold mb-4'>Quick Links</h3>
                        <ul className='space-y-2 text-richblack-300 text-xl'>
                            <li className='flex items-center'>
                                <FaAngleRight className='w-6 h-6' />
                                <a href="/">Home</a>
                            </li>
                            <li className='flex items-center'>
                                <FaAngleRight className='w-6 h-6' />
                                <a href="/">About Us</a>
                            </li>
                            <li className='flex items-center'>
                                <FaAngleRight className='w-6 h-6' />
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li className='flex items-center'>
                                <FaAngleRight className='w-6 h-6' />
                                <a href="/">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-2xl text-orange-100 font-bold mb-4'>Contacts</h3>
                        <ul className='space-y-2 text-richblack-300 text-lg mb-4'>
                            <li className='flex items-center gap-3'>
                                <IoLocationSharp className='w-6 h-6 text-orange-100 cursor-pointer' />
                                <p>Whitefield, Bengaluru, 560066</p>
                            </li>

                            <li className='flex items-center gap-3'>
                                <MdEmail className='w-6 h-6 text-orange-100 cursor-pointer' />
                                <p><a href="mailto:www.support@froker.in">support@froker.in</a></p>
                            </li>
                        </ul>
                        <div className='text-lg text-orange-100 flex gap-2'>
                            <a href="https://x.com/FrokerSocial"><FaTwitter className='w-6 h-6 cursor-pointer' /></a>
                            <a href="https://www.instagram.com/frokerofficial/"><FaInstagram className='w-6 h-6 cursor-pointer' /></a>
                            <a href="https://www.linkedin.com/company/froker/"><FaLinkedin className='w-6 h-6 cursor-pointer' /></a>
                            <a href="https://www.facebook.com/people/Froker/100090044834703/?mibextid=YMEMSu"><FaFacebook className='w-6 h-6 cursor-pointer' /></a>
                            <a href="https://www.youtube.com/@frokerofficial"><FaYoutube className='w-6 h-6 cursor-pointer' /></a>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:items-start'>
                        <h3 className='text-2xl text-orange-100 font-bold mb-4'>Scan To Download</h3>
                        <img src={scanner} alt="QR Code" className='w-32 h-32' />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img
                    src={footerimage}
                    alt="Footer"
                    width={115}
                    height={24}
                    loading="lazy"
                    className='pt-2 w-full'
                />
                <p className='absolute bottom-4 left-0 w-full text-center text-sm text-white'>
                    &copy;  2024 Arroz Technology. All rights reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
