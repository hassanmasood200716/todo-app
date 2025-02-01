import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-slate-700/95 backdrop-blur-md border-b border-slate-600/30 shadow-xl">
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="relative px-3 py-2 text-lg font-medium text-white/90 hover:text-white transition-all
                         group"
            >
              <span>Home</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="relative px-3 py-2 text-lg font-medium text-white/90 hover:text-white transition-all
                         group"
            >
              <span>About</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </Link>

            {/* Add more links as needed */}
          </div>

          {/* Mobile Menu Button (Optional) */}
          <div className="md:hidden">
            <button className="text-white hover:text-cyan-400 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;