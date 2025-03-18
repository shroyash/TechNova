'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Headers = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLink = [
    { id: 1, path: '/', display: 'Home' },
    { id: 2, path: '/about', display: 'About' },
    { id: 3, path: '/courses', display: 'Courses' },
    { id: 4, path: '/freesessions', display: 'Free Sessions' },
    { id: 5, path: '/resources', display: 'Resources' },
    { id: 6, path: '/contact', display: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 text-white shadow-lg z-50 bg-gradient-to-r from-black via-blue-900/90 to-purple-900/90 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex text-center">
            <Image src="/img/logo.png" alt="Logo" width={55} height={40} />
            <span className='mt-4 font-bold'>TechNova</span>
          </div>

          {/* Right Side: Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            {navLink.map(({ id, path, display }) => (
              <a key={id} href={path} className="hover:text-gray-300">
                {display}
              </a>
            ))}
          </div>

          {/* Sign In / Login Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" className=' bg-blue-600 hover:bg-blue-400'>
              <Link href="/signup" className="text-white">Sign Up</Link>
            </Button>
            <Link href="/login" className="text-white">Login</Link>
          </div>

          
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {/* If menu is open, show "X", else show hamburger */}
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 space-y-4 text-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {navLink.map(({ id, path, display }) => (
            <a key={id} href={path} className="block py-2 hover:text-gray-300">
              {display}
            </a>
          ))}

          {/* Mobile Sign In / Login Button */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <Button variant="secondary">
              <Link href="/signup" className="text-white bg-blue-500 hover:bg-blue-400">Sign Up</Link>
            </Button>
            <Link href="/login" className="text-white">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
