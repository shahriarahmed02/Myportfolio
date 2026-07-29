'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaHome, FaCode, FaImages } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiHtml5 } from 'react-icons/si';

const getTechIcon = (tech) => {
  switch (tech?.toLowerCase()) {
    case 'next.js': return <SiNextdotjs className="w-5 h-5 text-white" />;
    case 'react': return <SiReact className="w-5 h-5 text-[#00d2ff]" />;
    case 'javascript': return <SiJavascript className="w-5 h-5 text-yellow-400" />;
    case 'tailwind css': return <SiTailwindcss className="w-5 h-5 text-cyan-400" />;
    case 'express.js': return <SiExpress className="w-5 h-5 text-white" />;
    case 'mongodb': return <SiMongodb className="w-5 h-5 text-emerald-400" />;
    case 'html': return <SiHtml5 className="w-5 h-5 text-orange-500" />;
    default: return <FaCode className="w-5 h-5 text-gray-300" />;
  }
};

export default function ProjectDetails({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  
  // প্রজেক্ট ডাটা থেকে আইডি মিলিয়ে প্রজেক্ট খুঁজে বের করা
  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#021526] text-white flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-[#032030] p-8 rounded-2xl border-2 border-amber-400 shadow-[0_0_30px_rgba(255,215,0,0.3)]"
        >
          <h2 className="text-3xl font-bold mb-4 text-amber-400">Project Not Found</h2>
          <p className="text-slate-400 mb-6">The project you are looking for does not exist or has been removed.</p>
          <Link href="/#projects" className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-6 py-3 rounded-xl transition-all shadow-lg">
            Back to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  // সব ছবি একসাথে করার জন্য (যদি coverImage এবং images অ্যারে আলাদা থাকে)
  const allImages = [
    project.coverImage,
    ...(project.images || [])
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-[#021526] text-white py-16 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation Actions (Back & Home) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 bg-[#032030] hover:bg-amber-400 hover:text-black text-slate-300 border border-amber-400/30 px-4 py-2 rounded-xl transition-all text-sm font-semibold shadow-md"
          >
            <FaArrowLeft /> Back to Projects
          </Link>

          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-[#032030] hover:bg-amber-400 hover:text-black text-slate-300 border border-amber-400/30 px-4 py-2 rounded-xl transition-all text-sm font-semibold shadow-md"
          >
            <FaHome /> Home
          </Link>
        </motion.div>

        {/* Project Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-wide">
            {project.title}
          </h1>
          <p className="text-slate-400 text-sm md:text-base tracking-wider uppercase">
            Comprehensive overview, features, and visual previews
          </p>
        </motion.div>

        {/* Main Cover Image / Showcase */}
        {project.coverImage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[350px] md:h-[520px] rounded-2xl overflow-hidden border-2 border-amber-400 shadow-[0_0_30px_rgba(255,215,0,0.2)] mb-12 group"
          >
            <Image 
              src={project.coverImage} 
              alt={project.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-amber-400 text-black font-bold px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider shadow-lg">
                Featured Cover
              </span>
            </div>
          </motion.div>
        )}

        {/* Grid Layout for Content & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Left 2 Cols: Description & Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-[#032030]/80 border-2 border-amber-400/40 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                Project Overview
              </h3>
              <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-6">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  {project.longDescription}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-amber-400/20">
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-[#00d2ff] hover:bg-[#00b3e6] text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-all hover:scale-105"
                >
                  Live Preview <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-black/60 hover:bg-black border border-amber-400/30 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-all hover:scale-105"
                >
                  <FaGithub className="text-lg" /> GitHub Repository
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Col: Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#032030]/80 border-2 border-amber-400/40 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col"
          >
            <h3 className="text-xl font-bold text-amber-400 mb-4">Technologies</h3>
            <p className="text-xs text-slate-400 mb-6">Tools and frameworks implemented in this build.</p>
            
            <div className="flex flex-col gap-3">
              {project.techStack?.map((tech, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 bg-black/50 border border-amber-400/20 rounded-xl text-sm font-semibold text-white shadow transition-all hover:border-amber-400">
                  <span className="p-2 bg-[#021526] rounded-lg border border-amber-400/30">
                    {getTechIcon(tech)}
                  </span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Gallery / All Project Photos Section */}
        {allImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaImages className="text-2xl text-amber-400" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Project Gallery</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allImages.map((imgUrl, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-xl group"
                >
                  <Image 
                    src={imgUrl} 
                    alt={`${project.title} screenshot ${index + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-amber-400 text-black font-bold px-4 py-2 rounded-xl text-xs shadow-lg">
                      Screenshot {index + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </main>
  );
}