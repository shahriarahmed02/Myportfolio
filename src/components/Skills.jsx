'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaNodeJs, 
  FaCheck, 
  FaRotate 
} from 'react-icons/fa6';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si';

const orbitPairs = [
  {
    radiusDesktop: 130,
    radiusMobile: 80,
    duration: 25,
    direction: 1,
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-base sm:text-2xl" />, status: 'learned', angle: 0 },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-base sm:text-2xl" />, status: 'learned', angle: 180 },
    ]
  },
  {
    radiusDesktop: 185,
    radiusMobile: 110,
    duration: 35,
    direction: -1,
    skills: [
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-base sm:text-2xl" />, status: 'learned', angle: 45 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-base sm:text-2xl" />, status: 'learned', angle: 225 },
    ]
  },
  {
    radiusDesktop: 240,
    radiusMobile: 140,
    duration: 45,
    direction: 1,
    skills: [
      { name: 'React.js', icon: <FaReact className="text-[#00d2ff] text-base sm:text-2xl" />, status: 'learned', angle: 90 },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white text-base sm:text-2xl" />, status: 'learned', angle: 270 },
    ]
  },
  {
    radiusDesktop: 295,
    radiusMobile: 170,
    duration: 55,
    direction: -1,
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-600 text-base sm:text-2xl" />, status: 'learned', angle: 135 },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-base sm:text-2xl" />, status: 'ongoing', angle: 315 },
    ]
  },
  {
    radiusDesktop: 350,
    radiusMobile: 200,
    duration: 65,
    direction: 1,
    skills: [
      { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-base sm:text-2xl" />, status: 'ongoing', angle: 20 },
      { name: 'MongoDB', icon: <SiMongodb className="text-emerald-400 text-base sm:text-2xl" />, status: 'ongoing', angle: 200 },
    ]
  }
];

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section 
      id="skills" 
      className="py-16 bg-[#021526] text-white relative overflow-visible flex flex-col items-center justify-center min-h-screen"
    >
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute w-[350px] h-[350px] bg-[#00d2ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* মেইন কন্টেইনার */}
      <div className="relative w-[340px] h-[340px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px] flex items-center justify-center my-4 overflow-visible">
        
        {/* সেন্টারে আপনার ছবি এবং ফিক্সড সোজা টুলটিপ বক্স */}
        <div className="absolute z-50 flex flex-col items-center justify-center pointer-events-none">
          
          {/* সেন্ট্রাল টুলটিপ (যখন কোনো স্কিলে হোভার বা ক্লিক করা হবে, তখন ছবির ঠিক উপরে বা নিচে এটি একদম সোজাভাবে শো করবে) */}
          {activeSkill && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute -top-24 sm:-top-32 px-4 py-2 rounded-2xl bg-[#032030]/95 border-2 border-[#00d2ff] text-center shadow-[0_0_30px_rgba(0,210,255,0.4)] backdrop-blur-md z-[99999] whitespace-nowrap"
            >
              <p className="text-sm sm:text-base font-extrabold text-white tracking-wide">{activeSkill.name}</p>
              <p className={`text-[10px] sm:text-xs uppercase font-mono font-bold mt-0.5 ${
                activeSkill.status === 'learned' ? 'text-green-400' : 'text-amber-400'
              }`}>
                {activeSkill.status === 'learned' ? '✓ Learned Skill' : '⚡ Ongoing Learning'}
              </p>
            </motion.div>
          )}

          {/* সেন্ট্রাল প্রোফাইল ছবি */}
          <div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-[#00d2ff] to-[#ff499e] shadow-[0_0_30px_rgba(0,210,255,0.5)] pointer-events-auto">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-[#021526]">
              <Image 
                src="/images/myselfcartoon.jpeg" 
                alt="Shahriar Ahmed Turjo" 
                fill
                sizes="(max-width: 768px) 80px, 160px"
                priority
                className="object-cover object-top scale-110 hover:scale-125 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* অরবিট পেয়ারগুলো রেন্ডার করা হচ্ছে */}
        {orbitPairs.map((orbit, index) => {
          const isHoveredInThisOrbit = orbit.skills.some(s => activeSkill?.name === s.name);
          const targetRotate = orbit.direction === 1 ? 360 : -360;
          const counterRotate = orbit.direction === 1 ? -360 : 360;

          return (
            <div key={index} className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
              
              {/* স্ট্যাটিক ব্যাকগ্রাউন্ড অরবিট রিং */}
              <div 
                className="absolute rounded-full border border-white/10 hidden sm:block pointer-events-none" 
                style={{ width: `${orbit.radiusDesktop * 2}px`, height: `${orbit.radiusDesktop * 2}px` }} 
              />
              <div 
                className="absolute rounded-full border border-white/10 sm:hidden pointer-events-none" 
                style={{ width: `${orbit.radiusMobile * 2}px`, height: `${orbit.radiusMobile * 2}px` }} 
              />

              {/* পুরো অরবিট ট্র্যাক */}
              <motion.div
                className="absolute w-full h-full flex items-center justify-center pointer-events-none overflow-visible"
                animate={{ rotate: targetRotate }}
                transition={{
                  duration: orbit.duration,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  animationPlayState: isHoveredInThisOrbit ? 'paused' : 'running',
                }}
              >
                {orbit.skills.map((skill, sIndex) => {
                  return (
                    <div
                      key={sIndex}
                      className="absolute w-full h-full flex items-center justify-center pointer-events-none overflow-visible"
                      style={{
                        transform: `rotate(${skill.angle}deg)`,
                      }}
                    >
                      <div
                        className="absolute pointer-events-auto overflow-visible"
                        ref={(node) => {
                          if (node) {
                            const r = window.innerWidth < 640 ? orbit.radiusMobile : orbit.radiusDesktop;
                            node.style.transform = `translate(${r}px, 0px)`;
                          }
                        }}
                      >
                        {/* কাউন্টার-রোটেট যাতে আইকন সোজা থাকে */}
                        <motion.div
                          animate={{ rotate: counterRotate }}
                          transition={{
                            duration: orbit.duration,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          style={{
                            animationPlayState: isHoveredInThisOrbit ? 'paused' : 'running',
                          }}
                          className="overflow-visible"
                        >
                          <div 
                            className="relative cursor-pointer -ml-4 -mt-4 sm:-ml-6 sm:-mt-6 z-30 group"
                            onMouseEnter={() => setActiveSkill(skill)}
                            onMouseLeave={() => setActiveSkill(null)}
                            onClick={() => setActiveSkill(activeSkill?.name === skill.name ? null : skill)}
                          >
                            {/* আইকন সার্কেল ফ্রেম */}
                            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-[#032030] border-2 border-amber-400/80 backdrop-blur-md flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-125 hover:border-[#00d2ff]">
                              {skill.icon}
                            </div>

                            {/* স্ট্যাটাস ব্যাজ */}
                            <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[8px] sm:text-[10px] border border-[#021526] z-40 ${
                              skill.status === 'learned' ? 'bg-green-500 text-black' : 'bg-amber-400 text-black animate-spin'
                            }`}>
                              {skill.status === 'learned' ? <FaCheck /> : <FaRotate />}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          );
        })}

      </div>

      {/* নিচের লেজেন্ড বা স্ট্যাটাস ইন্ডিকেটর */}
      <div className="flex items-center gap-6 mt-16 z-20 bg-[#032030]/90 border border-white/10 px-6 py-2.5 rounded-2xl backdrop-blur-md shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center text-[9px] text-black">
            <FaCheck />
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-300">Learned</span>
        </div>
        <div className="w-px h-4 bg-white/20" />
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-amber-400 flex items-center justify-center text-[9px] text-black">
            <FaRotate className="animate-spin" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-300">Ongoing</span>
        </div>
      </div>

    </section>
  );
}