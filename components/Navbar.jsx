"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-700/95 backdrop-blur-md border-b border-slate-600/30 shadow-xl fixed w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                iTask
              </span>
              <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-ping transition-all" />
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-slate-800/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
                About
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="relative px-3 py-2 text-lg font-medium text-white/90 hover:text-white transition-all group"
  >
    <span>{children}</span>
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
  </Link>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-2 text-lg text-white/90 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;