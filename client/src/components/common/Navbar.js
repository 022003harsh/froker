import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/black-logo-frokerr-copy-10_pwpomg.jpg.png';

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Discover Froker', path: '/discover' }
  ];

  return (
    <div className='flex h-16 items-center justify-between w-[95%] max-w-maxContent mx-auto'>
      <div className='flex items-center justify-between w-full h-full'>
        <Link to="/">
          <img src={logo} alt="Logo" width={115} height={24} loading="lazy" className='pt-2'/>
        </Link>
        <div className='flex space-x-4 mr-8 h-full'>
          {links.map((link) => (
            <Link key={link.name} to={link.path} className='flex text-[19px] text-orange-100 font-medium nav-link items-center justify-center px-4'>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
