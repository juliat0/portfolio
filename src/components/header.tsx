import React, { useState } from 'react';
import { Link } from 'gatsby';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute w-full h-auto bg-zinc-800 scroll-smooth">
      <button onClick={toggleMenu} className="block md:hidden">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.25 24.0833H29.75M4.25 17H29.75M4.25 9.91667H29.75" stroke="#F8F8F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:space-x-4 p-4 md:p-5 md:justify-end md:gap-x-3`}>
      <Link to="/" className="text-white text-[32px] uppercase transform scale-60 hover:opacity-50 ease-in-out duration-300">Home</Link>
        <Link to="/about" className="scroll-smooth text-white text-[32px] uppercase hover:opacity-50 ease-in-out duration-300">About</Link>
        <Link to="/projects" className="text-white text-[32px] uppercase hover:opacity-50 ease-in-out duration-300">Projects</Link>
        <Link to="/contact" className="text-white text-[32px] uppercase hover:opacity-50 ease-in-out duration-300">Contact</Link>
      </div>
    </div>
  );
};

export default Header;

{/* <Link to="/" className="text-white text-[32px] uppercase transform scale-60 hover:opacity-50 ease-in-out duration-300">Home</Link>
<Link to="/#about" className="scroll-smooth text-white text-[32px] uppercase hover:opacity-50 ease-in-out duration-300">About</Link>
<Link to="/#projects" className="text-white text-[32px] uppercase hover:opacity-50 ease-in-out duration-300">Projects</Link>
<Link to="/#contact" className="text-white text-[32px] uppercase hover:opacity-50 ease-in-out duration-300">Contact</Link> */}