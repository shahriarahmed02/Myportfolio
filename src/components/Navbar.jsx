'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#021526]/80 backdrop-blur-md sticky top-0 z-50 px-6 lg:px-16 py-4 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="text-4xl font-black tracking-tight text-white flex items-center gap-1 group">
          Turjo<span className="text-[#00d2ff] group-hover:scale-110 transition-transform duration-300 inline-block">.dev</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-xs lg:text-xl font-medium text-gray-300">
          <Link href="/" className="relative hover:text-[#00d2ff] transition-colors duration-300 py-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#00d2ff] after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">Home</Link>
          <Link href="#about" className="relative hover:text-[#00d2ff] transition-colors duration-300 py-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#00d2ff] after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">About</Link>
          <Link href="#skills" className="relative hover:text-[#00d2ff] transition-colors duration-300 py-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#00d2ff] after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">Skills</Link>
          <Link href="#projects" className="relative hover:text-[#00d2ff] transition-colors duration-300 py-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#00d2ff] after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">Projects</Link>
          <Link href="#contact" className="relative hover:text-[#00d2ff] transition-colors duration-300 py-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#00d2ff] after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">Contact</Link>
        </div>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#ff499e] hover:bg-[#ff2d88] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(255,73,158,0.4)] hover:shadow-[0_0_25px_rgba(255,73,158,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Download CV <FaDownload className="text-xs transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white text-xl focus:outline-none hover:text-[#00d2ff] transition-colors duration-300"
        >
          {isOpen ? <FaTimes className="rotate-90 transition-transform duration-300" /> : <FaBars className="transition-transform duration-300" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Smooth Animation */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#032030] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-gray-300 text-sm font-medium shadow-2xl transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}`}>
        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#00d2ff] transition-colors duration-200">Home</Link>
        <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#00d2ff] transition-colors duration-200">About</Link>
        <Link href="#skills" onClick={() => setIsOpen(false)} className="hover:text-[#00d2ff] transition-colors duration-200">Skills</Link>
        <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#00d2ff] transition-colors duration-200">Projects</Link>
        <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#00d2ff] transition-colors duration-200">Contact</Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-[#ff499e] text-white py-3 rounded-xl font-bold text-sm shadow-md mt-2 hover:bg-[#ff2d88] transition-all duration-300"
        >
          Download CV <FaDownload className="text-xs" />
        </a>
      </div>
    </nav>
  );
}