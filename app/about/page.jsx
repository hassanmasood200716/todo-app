'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaReact, FaPalette, FaLock, FaRocket } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      icon: <FaRocket className="w-8 h-8 text-cyan-400" />,
      title: "Blazing Fast Performance",
      desc: "Built with Next.js 15 for optimal speed and SEO-friendly structure"
    },
    {
      icon: <FaPalette className="w-8 h-8 text-cyan-400" />,
      title: "Modern UI/UX",
      desc: "Sleek design with Tailwind CSS and Framer Motion animations"
    },
    {
      icon: <FaLock className="w-8 h-8 text-cyan-400" />,
      title: "Secure Storage",
      desc: "Local data encryption and secure browser storage"
    },
    {
      icon: <FaReact className="w-8 h-8 text-cyan-400" />,
      title: "React Powered",
      desc: "Built using the latest React 18 features and TypeScript"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            About iTask
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Revolutionizing task management with cutting-edge technology and elegant design
          </p>
        </motion.div>

        {/* Creator Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-700/30 backdrop-blur-lg rounded-3xl p-8 mb-20 shadow-2xl border border-slate-600/30"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity" />
              <img 
                src="/hassan.jpg.jpg" // Add your image path
                alt="M. Hassan Masood"
                className="relative w-48 h-48 rounded-2xl object-cover border-2 border-cyan-400/30 z-10"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">
                Created by M. Hassan Masood
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                Full-stack developer passionate about creating intuitive user experiences 
                and performant web applications. With 2+ years of experience in modern 
                web development technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-700/30 backdrop-blur-lg p-6 rounded-xl border border-slate-600/30 hover:border-cyan-400/20 transition-all group hover:-translate-y-2 shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Boost Your Productivity?
          </h2>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;