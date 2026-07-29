'use client';

import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaArrowUp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#010c15] border-t border-white/10 text-gray-400 py-12 px-4 relative overflow-hidden font-['Poppins',sans-serif]">
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00d2ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* ব্র্যান্ড এবং স্ট্যাটাস */}
        <div className="text-center md:text-left">
          <Link href="/" className="font-extrabold text-2xl tracking-tight text-white flex items-center justify-center md:justify-start gap-1">
            Shahriar Ahmed <span className="text-[#00d2ff]">Turjo</span>
          </Link>
          <p className="text-xs text-gray-400 mt-2 max-w-xs">
            Building modern, scalable, and user-friendly web experiences with passion and code.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] text-gray-400 font-medium">Available for freelance & full-time roles</span>
          </div>
        </div>

        {/* কুইক নেভিগেশন লিঙ্কস */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#00d2ff] transition-all hover:-translate-y-0.5">Home</Link>
          <Link href="/projects" className="hover:text-[#00d2ff] transition-all hover:-translate-y-0.5">Projects</Link>
          <Link href="/skills" className="hover:text-[#00d2ff] transition-all hover:-translate-y-0.5">Skills</Link>
          <Link href="/contact" className="hover:text-[#00d2ff] transition-all hover:-translate-y-0.5">Contact</Link>
        </div>

        {/* সোশ্যাল আইকন এবং ব্যাক টু টপ বাটন */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/shahriarahmedturjo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-white hover:text-[#00d2ff] hover:border-[#00d2ff] hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://github.com/shahriarahmed02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-white hover:text-[#00d2ff] hover:border-[#00d2ff] hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all duration-300"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:shahriarahmed32198@gmail.com" 
              className="w-10 h-10 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-white hover:text-[#00d2ff] hover:border-[#00d2ff] hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all duration-300"
              title="Email"
            >
              <HiMail />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group mt-1"
          >
            <span>Back to top</span>
            <span className="w-6 h-6 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-[#00d2ff] group-hover:text-[#00d2ff] transition-all">
              <FaArrowUp className="text-[10px]" />
            </span>
          </button>
        </div>

      </div>

      {/* কপিরাইট বটম বার */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
        <p>© {new Date().getFullYear()} Shahriar Ahmed Turjo. All rights reserved.</p>
        <p>Designed & Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}