'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  FaGraduationCap, 
  FaLanguage, 
  FaPlane, 
  FaBullseye, 
  FaBoltLightning, 
  FaArrowRightLong,
  FaCodeBranch,
  FaLeaf,
  FaWandSparkles,
  FaCheck,
  FaXmark,
  FaArrowUpRightFromSquare
} from 'react-icons/fa6';

export default function AboutSection() {
  const [activeModal, setActiveModal] = useState(null);
  const [showMoreText, setShowMoreText] = useState(false);

  const treeBranches = {
    education: {
      title: 'Academic Roots',
      subtitle: 'Foundation of logic & systematic problem solving',
      icon: <FaGraduationCap className="text-amber-400 text-xl" />,
      badge: 'Academic Core',
      themeBorder: 'hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(255,215,0,0.15)]',
      iconBg: 'bg-amber-400/10 border-amber-400/30 text-amber-400',
      gridCols: 'grid-cols-1 md:grid-cols-3',
      content: [
        { title: 'B.Sc. in Statistics', timeline: '2023 - Present', place: 'Dhaka Central University', desc: 'Applying statistical models and advanced data logic to build scalable architectures.' },
        { title: 'H.S.C (Science)', timeline: '2022', place: 'Udayan Higher Secondary School', desc: 'Focused on core scientific principles and quantitative analytical skills.' },
        { title: 'S.S.C (Science)', timeline: '2020', place: 'Government Science High School', desc: 'Built a rock-solid foundation in core mathematics and general sciences.' }
      ]
    },
    language: {
      title: 'Communication Canopy',
      subtitle: 'Borders crossed through linguistic versatility',
      icon: <FaLanguage className="text-[#00d2ff] text-xl" />,
      badge: 'Global Reach',
      themeBorder: 'hover:border-[#00d2ff]/50 hover:shadow-[0_0_25px_rgba(0,210,255,0.15)]',
      iconBg: 'bg-[#00d2ff]/10 border-[#00d2ff]/30 text-[#00d2ff]',
      gridCols: 'grid-cols-2 sm:grid-cols-2',
      content: [
        { title: 'Bengali', timeline: 'Native / Fluent', place: 'Mother Tongue', desc: 'Complete professional and conversational mastery.', flag: 'https://flagcdn.com/w40/bd.png' },
        { title: 'English', timeline: 'Professional', place: 'Global Collaboration', desc: 'Fluent in documentation, technical chats, and remote teams.', flag: 'https://flagcdn.com/w40/gb.png' },
        { title: 'German', timeline: 'A1 Learning', place: 'Future Preparation', desc: 'Expanding linguistic reach for European career opportunities.', flag: 'https://flagcdn.com/w40/de.png' },
        { title: 'Hindi & Urdu', timeline: 'Conversational', place: 'Multilingual', desc: 'Seamless cross-border communication without barriers.', flag: 'https://flagcdn.com/w40/in.png' }
      ]
    },
    hobby: {
      title: 'Creative Branches',
      subtitle: 'Passions that keep the strategic mind sharp',
      icon: <FaPlane className="text-[#ff499e] text-xl" />,
      badge: 'Mind & Lifestyle',
      themeBorder: 'hover:border-[#ff499e]/50 hover:shadow-[0_0_25px_rgba(255,73,158,0.15)]',
      iconBg: 'bg-[#ff499e]/10 border-[#ff499e]/30 text-[#ff499e]',
      gridCols: 'grid-cols-1 sm:grid-cols-3',
      content: [
        { title: 'Chess Strategy', timeline: 'TacticalPlay ', place: 'Mind Game', desc: 'Sharpens tactical thinking, foresight, and algorithmic planning.' },
        { title: 'Travelling', timeline: 'Exploration', place: 'Nature & Culture', desc: 'Discovering diverse aesthetics, environments, and inspiration.' },
        { title: 'Shopping', timeline: 'Lifestyle ', place: 'Modern Trends', desc: 'Keeping track of futuristic UI aesthetics, style, and tech gear.' }
      ]
    },
    goal: {
      title: 'Future Blossoms',
      subtitle: 'The ultimate professional vision & milestones',
      icon: <FaBullseye className="text-green-400 text-xl" />,
      badge: 'Ambition Target',
      themeBorder: 'hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]',
      iconBg: 'bg-green-400/10 border-green-400/30 text-green-400',
      gridCols: 'grid-cols-1 sm:grid-cols-2',
      content: [
        { title: 'Full-Stack Mastery', timeline: 'Core Milestone', place: 'MERN & Next.js Ecosystem', desc: 'Crafting ultra-fast, highly scalable web solutions used by global clients.' },
        { title: 'Financial Freedom', timeline: 'Long-term Goal', place: 'Independent Scale', desc: 'Building high-value digital products and independent software businesses.' }
      ]
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[#021526] text-white px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background Ambience Glow Effects */}
      <div className="absolute top-10 left-10 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#00d2ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#ff499e]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Top Header & Intro Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
            >
              Grow Through <span className="text-[#00d2ff] drop-shadow-[0_0_20px_rgba(0,210,255,0.3)]">My Journey.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed"
            >
            </motion.p>
          </div>

          {/* Live Status Widget Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#032030]/90 backdrop-blur-md border border-amber-400/30 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 text-left self-center lg:self-auto w-full sm:w-auto"
          >
            <div className="p-2.5 bg-amber-400/10 border border-amber-400/30 rounded-xl text-amber-400 shrink-0">
              <FaBoltLightning className="text-lg animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-green-400">Available for Work</span>
              </div>
              <p className="text-xs font-bold text-white mt-0.5">Advanced Next.js Architect</p>
            </div>
          </motion.div>
        </div>

        {/* Developer Core Narrative Box */}
        <div className="bg-[#032030]/60 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xl shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-400/10 border border-amber-400/30 rounded-xl text-amber-400 shrink-0">
                <FaCodeBranch className="text-base" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">The Developer&apos;s Core Narrative</h3>
                <p className="text-xs text-slate-400">A short glimpse into Shahriar Ahmed&apos;s passion & vision.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowMoreText(!showMoreText)}
              className="text-xs font-bold text-[#00d2ff] hover:text-white transition-all cursor-pointer inline-flex items-center justify-center gap-2 uppercase tracking-wider bg-[#021526] px-4 py-2 rounded-xl border border-[#00d2ff]/30 shadow-sm hover:scale-[1.02]"
            >
              <span>{showMoreText ? 'Hide Story' : 'Read Short Bio'}</span>
              <FaArrowRightLong className={`transition-transform duration-300 ${showMoreText ? 'rotate-90' : ''}`} />
            </button>
          </div>

          <AnimatePresence>
            {showMoreText && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-slate-300 space-y-2 text-xs sm:text-sm leading-relaxed pt-3 mt-3 border-t border-white/10 overflow-hidden"
              >
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  I bridge the gap between creative UI aesthetics and robust backend performance, building modular web applications using React, Next.js, and Tailwind CSS.
                </motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  Outside of coding, I sharpen my analytical foresight through tactical chess and modern tech exploration.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4 Interactive Root Cards Grid (2x2 on mobile, 4 columns on large screens) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {Object.keys(treeBranches).map((key, index) => {
            const branch = treeBranches[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveModal(key)}
                className={`bg-[#032030]/80 backdrop-blur-xl border border-amber-400/40 rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:border-amber-400 hover:shadow-[0_0_25px_rgba(255,215,0,0.2)]`}
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 sm:p-3 rounded-xl border ${branch.iconBg} transition-transform group-hover:scale-110 shadow-inner`}>
                      {branch.icon}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {branch.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-xs sm:text-base text-white group-hover:text-amber-300 transition-colors">{branch.title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2 leading-relaxed">{branch.subtitle}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-400/20 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Explore Node</span>
                  <div className="w-8 h-8 rounded-xl bg-[#021526] border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all shadow-md group-hover:scale-110">
                    <FaArrowUpRightFromSquare className="text-xs transition-transform group-hover:rotate-12" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Pop-up Modal Component */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#032030] border border-amber-400/40 rounded-3xl max-w-4xl w-full p-5 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-amber-400/20 pb-4 mb-5 shrink-0">
                <div className="flex items-center gap-3.5">
                  <div className={`p-3 rounded-2xl border ${treeBranches[activeModal].iconBg}`}>
                    {treeBranches[activeModal].icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400">Expanded Node Window</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-amber-300 font-mono">
                        {treeBranches[activeModal].badge}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black text-white">{treeBranches[activeModal].title}</h3>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveModal(null)}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                >
                  <FaXmark className="text-base" />
                </button>
              </div>

              {/* Modal Grid Content */}
              <div className="overflow-y-auto pr-1 space-y-4 custom-scrollbar">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 }
                    }
                  }}
                  className={`grid ${treeBranches[activeModal].gridCols} gap-4`}
                >
                  {treeBranches[activeModal].content.map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 15, scale: 0.95 },
                        visible: { opacity: 1, y: 0, scale: 1 }
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="p-4 sm:p-5 rounded-2xl bg-[#021526]/90 border border-amber-400/30 hover:border-amber-400 transition-all shadow-md group relative flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                            {item.flag ? (
                              <div className="relative w-6 h-4 rounded overflow-hidden shadow border border-white/20 shrink-0">
                                <Image src={item.flag} alt={item.title} fill className="object-cover" />
                              </div>
                            ) : (
                              <FaCheck className="text-xs text-amber-400" />
                            )}
                            <span>{item.title}</span>
                          </h4>
                          <span className="text-[10px] font-mono px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-amber-300 self-start sm:self-auto">
                            {item.timeline}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-amber-400/90">{item.place}</p>
                        <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}