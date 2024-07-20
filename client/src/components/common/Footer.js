import React from 'react';
import logo from '../../assets/images/black-logo-frokerr-copy-10_pwpomg.jpg.png';
// import quicklinkImg from '../../../assets/images/quicklink.png'; // Example image for quick links
// import qrCode from '../../../assets/images/qr-code.png'; // Example QR code image
// import footerImg from '../../../assets/images/footer-image.png'; // Example footer image

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white py-10 border'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Column 1: Logo */}
                    <div className='flex flex-col items-center md:items-start'>
                        <img src={logo} alt="Logo" className='w-32 mb-4' />
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li className='flex items-center'>
                                <img src={logo} alt="Home" className='w-4 h-4 mr-2' />
                                <a href="#" className='hover:underline'>Home</a>
                            </li>
                            <li className='flex items-center'>
                                <img src={logo} alt="About Us" className='w-4 h-4 mr-2' />
                                <a href="#" className='hover:underline'>About Us</a>
                            </li>
                            <li className='flex items-center'>
                                <img src={logo} alt="Privacy Policy" className='w-4 h-4 mr-2' />
                                <a href="#" className='hover:underline'>Privacy Policy</a>
                            </li>
                            <li className='flex items-center'>
                                <img src={logo} alt="Terms & Conditions" className='w-4 h-4 mr-2' />
                                <a href="#" className='hover:underline'>Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contacts */}
                    <div>
                        <h3 className='text-lg font-bold mb-4'>Contacts</h3>
                        <p>Whitefield, Bengaluru, 560066</p>
                        <p><a href="mailto:support@froker.in" className='hover:underline'>support@froker.in</a></p>
                    </div>

                    {/* Column 4: QR Code and Image */}
                    <div className='flex flex-col items-center md:items-end'>
                        <div className='mb-4'>
                            <img src={logo} alt="QR Code" className='w-32 h-32' />
                        </div>
                        <img src={logo} alt="Footer Image" className='w-32' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
