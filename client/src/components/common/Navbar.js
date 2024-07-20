import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/black-logo-frokerr-copy-10_pwpomg.jpg.png';
import { HiX } from 'react-icons/hi';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Discover Froker', path: '/discover' }
  ];

  return (
    <div className='sticky top-0 z-50 bg-white flex h-16 items-center justify-between w-full mx-auto'>
      <div className='flex items-center justify-between w-[95%] mx-auto h-full'>
        <Link to="/" className='flex items-center'>
          <img 
            src={logo} 
            alt="Logo" 
            width={115} 
            height={24} 
            loading="lazy" 
            className='pt-2 w-20 md:w-28' // Adjust width for small and medium screens
          />
        </Link>
        <div className='hidden md:flex space-x-4 mr-8 h-full'>
          {links.map((link) => (
            <Link key={link.name} to={link.path} className='flex text-[19px] text-orange-100 font-medium nav-link items-center justify-center px-4'>
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Hamburger Button */}
        <button
          className='md:hidden flex items-center'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className='text-3xl text-black' />
          ) : (
            <GiHamburgerMenu className='text-3xl text-black' />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-16 left-0 w-full bg-white shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className='flex flex-col items-center p-8 space-y-10 justify-center'>
          {links.map((link) => (
            <Link key={link.name} to={link.path} className='text-[19px] text-orange-100 font-medium py-2' onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
