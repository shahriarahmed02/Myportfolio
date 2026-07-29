'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiHtml5 } from 'react-icons/si';
import { projectsData } from '@/data/projectsData';

const getTechIcon = (tech) => {
  switch (tech?.toLowerCase()) {
    case 'next.js': return <SiNextdotjs className="w-4 h-4 text-white" />;
    case 'react': return <SiReact className="w-4 h-4 text-[#00d2ff]" />;
    case 'javascript': return <SiJavascript className="w-4 h-4 text-yellow-400" />;
    case 'tailwind css': return <SiTailwindcss className="w-4 h-4 text-cyan-400" />;
    case 'express.js': return <SiExpress className="w-4 h-4 text-white" />;
    case 'mongodb': return <SiMongodb className="w-4 h-4 text-emerald-400" />;
    case 'html': return <SiHtml5 className="w-4 h-4 text-orange-500" />;
    default: return <FaCode className="w-4 h-4 text-gray-300" />;
  }
};

export default function ProjectSection() {
  const [showArchive, setShowArchive] = useState(false);

  const featuredProjects = projectsData.slice(0, 6);
  const archivedProjects = projectsData.slice(6);

  return (
    <section id="projects" className="py-16 bg-[#021526] text-white w-full overflow-hidden">
      <div className="w-full m-0 p-0">
        
        {/* Section Title */}
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-3">
            Featured <span className="text-[#00d2ff]">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm tracking-widest uppercase">
            Explore my latest work and applications
          </p>
        </div>

        {/* --- News Channel Style Infinite Ticker --- */}
        <div className="relative w-full py-10 m-0 p-0 overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...featuredProjects, ...featuredProjects].map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                whileHover={{ scale: 1.05, zIndex: 50, y: -5 }} 
                // কার্ডের সাইজ বড় করা হয়েছে (w-[380px] md:w-[440px] এবং h-[500px]) এবং সব সময় সোনালী বর্ডার (border-amber-400) রাখা হয়েছে
                className="w-[380px] md:w-[440px] h-[500px] rounded-2xl relative overflow-hidden group border-2 border-amber-400 shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all duration-300 flex flex-col justify-end shrink-0"
              >
                {/* Full Card Background Image */}
                {project.coverImage && (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700"
                  />
                )}

                {/* কন্টেন্ট বক্স */}
                <div className="relative z-10 mx-6 mb-6 bg-[#021526]/85 backdrop-blur-md p-5 rounded-xl border border-amber-400/40 shadow-2xl flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-300 transition-colors truncate">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-200 text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* SVG Tech Stack Icons (No Text) */}
                    <div className="flex flex-wrap gap-2.5 mb-4">
                      {project.techStack?.map((tech, i) => (
                        <span key={i} className="flex items-center justify-center w-9 h-9 bg-black/60 border border-amber-400/30 rounded-lg">
                          {getTechIcon(tech)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/15">
                    <Link 
                      href={`/projects/${project.id}`}
                      className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-4 py-2 rounded-lg text-xs shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      See Details
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[#00d2ff] text-xs hover:underline flex items-center gap-1 font-semibold"
                        >
                          Live <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-white hover:text-amber-300 text-base"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- EXPLORE THE ARCHIVE BUTTON --- */}
        {archivedProjects.length > 0 && (
          <div className="mt-8 text-center px-6">
            <button
              onClick={() => setShowArchive(!showArchive)}
              className="group inline-flex flex-col items-center gap-2 bg-[#032030] border border-slate-700 px-8 py-4 rounded-2xl hover:border-[#ff499e] transition-all duration-300 shadow-xl cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg md:text-xl font-black tracking-widest text-white group-hover:text-[#ff499e] transition-colors uppercase">
                  Explore the <span className="text-[#ff499e]">Archive</span>
                </span>
                <FaChevronDown className={`text-white transition-transform duration-500 ${showArchive ? 'rotate-180 text-[#ff499e]' : ''}`} />
              </div>
             
            </button>
          </div>
        )}

        {/* --- POP-DOWN ARCHIVE SECTION --- */}
        <AnimatePresence>
          {showArchive && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden px-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-slate-800/80 mt-12 max-w-7xl mx-auto">
                {archivedProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="h-[480px] rounded-2xl relative overflow-hidden border-2 border-amber-400 shadow-xl transition-all flex flex-col justify-end"
                  >
                    {project.coverImage && (
                      <Image src={project.coverImage} alt={project.title} fill className="object-cover absolute inset-0" />
                    )}

                    <div className="relative z-10 mx-6 mb-6 bg-[#021526]/85 backdrop-blur-md p-5 rounded-xl border border-amber-400/40 flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-white">{project.title}</h4>
                        <p className="text-slate-200 text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2.5 mb-4">
                          {project.techStack?.map((tech, i) => (
                            <span key={i} className="flex items-center justify-center w-9 h-9 bg-black/60 border border-amber-400/30 rounded-lg">
                              {getTechIcon(tech)}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/15">
                        <Link 
                          href={`/projects/${project.id}`}
                          className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-4 py-2 rounded-lg text-xs transition-all"
                        >
                          See Details
                        </Link>
                        <div className="flex items-center gap-3">
                          {project.liveDemo && (
                            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-xs text-[#ff499e] hover:underline flex items-center gap-1 font-semibold">
                              Live <FaExternalLinkAlt className="text-[9px]" />
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="text-white hover:text-amber-300">
                              <FaGithub className="text-base" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}