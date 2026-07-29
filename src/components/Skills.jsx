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

// সাইজ ও স্পেস বাড়িয়ে দেওয়া হয়েছে যাতে পুরো স্ক্রিন জুড়ে সুন্দরভাবে ছড়িয়ে থাকে
const orbitPairs = [
  {
    radiusDesktop: 130,
    radiusMobile: 85,
    duration: 22,
    direction: 1, // Clockwise
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-base sm:text-2xl" />, status: 'learned', angle: 0 },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-base sm:text-2xl" />, status: 'learned', angle: 180 },
    ]
  },
  {
    radiusDesktop: 185,
    radiusMobile: 120,
    duration: 32,
    direction: -1, // Reverse (Counter-Clockwise)
    skills: [
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-base sm:text-2xl" />, status: 'learned', angle: 45 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-base sm:text-2xl" />, status: 'learned', angle: 225 },
    ]
  },
  {
    radiusDesktop: 240,
    radiusMobile: 155,
    duration: 42,
    direction: 1, // Clockwise
    skills: [
      { name: 'React.js', icon: <FaReact className="text-[#00d2ff] text-base sm:text-2xl" />, status: 'learned', angle: 90 },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white text-base sm:text-2xl" />, status: 'learned', angle: 270 },
    ]
  },
  {
    radiusDesktop: 295,
    radiusMobile: 190,
    duration: 52,
    direction: -1, // Reverse (Counter-Clockwise)
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-600 text-base sm:text-2xl" />, status: 'learned', angle: 135 },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-base sm:text-2xl" />, status: 'ongoing', angle: 315 },
    ]
  },
  {
    radiusDesktop: 350,
    radiusMobile: 225,
    duration: 62,
    direction: 1, // Clockwise
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
      className="py-16 bg-[#021526] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
      onClick={() => setActiveSkill(null)}
    >
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute w-[350px] h-[350px] bg-[#00d2ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* সেকশন টাইটেল */}
      
      {/* মেইন কন্টেইনার (বড় সাইজ করা হয়েছে) */}
      <div className="relative w-[340px] h-[340px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px] flex items-center justify-center my-4">
        
        {/* সেন্টারে আপনার ছবি */}
        <div className="absolute z-40 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-[#00d2ff] to-[#ff499e] shadow-[0_0_30px_rgba(0,210,255,0.5)]">
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

        {/* অরবিট পেয়ারগুলো রেন্ডার করা হচ্ছে */}
        {orbitPairs.map((orbit, index) => {
          const isHoveredInThisOrbit = orbit.skills.some(s => activeSkill === s.name);
          const targetRotate = orbit.direction === 1 ? 360 : -360;
          const counterRotate = orbit.direction === 1 ? -360 : 360;

          return (
            <div key={index} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* স্ট্যাটিক ব্যাকগ্রাউন্ড অরবিট রিং */}
              <div 
                className="absolute rounded-full border border-white/10 hidden sm:block" 
                style={{ width: `${orbit.radiusDesktop * 2}px`, height: `${orbit.radiusDesktop * 2}px` }} 
              />
              <div 
                className="absolute rounded-full border border-white/10 sm:hidden" 
                style={{ width: `${orbit.radiusMobile * 2}px`, height: `${orbit.radiusMobile * 2}px` }} 
              />

              {/* পুরো অরবিট ট্র্যাকের স্বাধীন ও রিভার্স রোটেশন */}
              <motion.div
                className="absolute w-full h-full flex items-center justify-center pointer-events-auto"
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
                      className="absolute w-full h-full flex items-center justify-center"
                      style={{
                        transform: `rotate(${skill.angle}deg)`,
                      }}
                    >
                      <div
                        className="absolute"
                        ref={(node) => {
                          if (node) {
                            const r = window.innerWidth < 640 ? orbit.radiusMobile : orbit.radiusDesktop;
                            node.style.transform = `translate(${r}px, 0px)`;
                          }
                        }}
                      >
                        {/* কাউন্টার-রোটেট যাতে আইকন এবং টুলটিপ সোজা থাকে */}
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
                        >
                          <div 
                            className="relative group cursor-pointer -ml-4 -mt-4 sm:-ml-6 sm:-mt-6 z-30"
                            onMouseEnter={() => setActiveSkill(skill.name)}
                            onMouseLeave={() => setActiveSkill(null)}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveSkill(activeSkill === skill.name ? null : skill.name);
                            }}
                          >
                            {/* আইকন সার্কেল ফ্রেম */}
                            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-[#032030]/95 border-2 border-amber-400/70 backdrop-blur-md flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-125 group-hover:border-[#00d2ff] group-hover:shadow-[0_0_25px_rgba(0,210,255,0.8)]">
                              {skill.icon}
                            </div>

                            {/* স্ট্যাটাস ব্যাজ */}
                            <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[8px] sm:text-[10px] border border-[#021526] z-40 ${
                              skill.status === 'learned' ? 'bg-green-500 text-black' : 'bg-amber-400 text-black animate-spin'
                            }`}>
                              {skill.status === 'learned' ? <FaCheck /> : <FaRotate />}
                            </div>

                            {/* সোজা এবং শার্প টুলটিপ বক্স */}
                            {activeSkill === skill.name && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-1.5 rounded-xl bg-[#032030] border border-amber-400 text-center shadow-2xl z-50 pointer-events-none whitespace-nowrap">
                                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">{skill.name}</p>
                                <p className={`text-[9px] sm:text-[10px] uppercase font-mono font-bold mt-0.5 ${
                                  skill.status === 'learned' ? 'text-green-400' : 'text-amber-400'
                                }`}>
                                  {skill.status === 'learned' ? '✓ Learned' : '⚡ Ongoing'}
                                </p>
                              </div>
                            )}
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
      <div className="flex items-center gap-6 mt-16 z-10 bg-[#032030]/80 border border-white/10 px-6 py-2.5 rounded-2xl backdrop-blur-md shadow-2xl">
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