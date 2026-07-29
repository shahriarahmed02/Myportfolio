'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'typed.js';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

export default function HeroSection() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Full Stack Aspirant", "MERN Learner", "Frontend Developer"],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative bg-[#021526] text-white min-h-[calc(100vh-80px)] flex items-center px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        
        {/* Left Content (Text Area) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 order-2 lg:order-1">
          
          {/* Ready to Work Badge */}
          <div className="flex items-center gap-2 bg-[#032030] border border-slate-700/60 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400">Ready to Work</span>
          </div>

          {/* Heading */}
          <h3 className="text-xl md:text-2xl text-slate-300 font-medium mb-1">
            Hello, I'm
          </h3>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-3">
            Shahriar Ahmed Turjo
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-slate-300 mb-6 flex items-center gap-2">
            I'm a <span className="text-[#00d2ff]" ref={typedElement}></span>
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed mb-8">
            Crafting high-performance MERN stack applications with mathematical precision. Full-stack expertise meets data-driven architecture.
          </p>

          {/* Action Buttons with White Glow Hover Effect on Explore Work */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="#projects"
              className="bg-white text-[#021526] px-8 py-4 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:scale-105 transition-all"
            >
              Explore Work
            </Link>
            <Link
              href="#contact"
              className="bg-[#032030] hover:bg-[#042d44] border border-slate-700 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all"
            >
              Let's Talk
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a 
              href="https://www.linkedin.com/in/shahriarahmedturjo/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#032030] border border-slate-800 flex items-center justify-center hover:text-[#00d2ff] hover:border-[#00d2ff] transition-all"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://github.com/shahriarahmed02" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#032030] border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-600 transition-all"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.facebook.com/share/1GtwgpFQkc/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#032030] border border-slate-800 flex items-center justify-center hover:text-[#00d2ff] hover:border-[#00d2ff] transition-all"
            >
              <FaFacebookF />
            </a>
          </div>

        </div>

        {/* Right Content (Image Area) */}
        <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2">
          
          {/* Background Neon Glow Effect */}
          <div className="absolute w-[350px] h-[350px] md:w-[460px] md:h-[460px] bg-[#00d2ff]/20 rounded-full blur-3xl -z-0"></div>

          {/* Image Container */}
          <div className="relative z-10 w-full max-w-[440px] flex justify-center">
            <div className="relative w-[300px] h-[380px] sm:w-[350px] sm:h-[440px] lg:w-[430px] lg:h-[530px]">
              <Image
                src="/images/Turjo.png" 
                alt="Shahriar Ahmed Turjo"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}