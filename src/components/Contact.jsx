'use client';

import { useState } from 'react';
import { HiMail, HiLocationMarker, HiPaperAirplane, HiCheck, HiX } from 'react-icons/hi';
import { FaLinkedinIn, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xeepalvw', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: false });
        form.reset();
        alert("Thanks for your message! I'll get back to you soon.");
      } else {
        throw new Error();
      }
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section id="contact" className="bg-[#021526] text-white py-16 px-4 relative overflow-hidden font-['Poppins',sans-serif]">
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#00d2ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#ff499e]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* সেকশন হেডার */}
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Get In <span className="text-[#ff499e]">Touch</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm italic">
            Available for new opportunities and collaborations.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* বাম পাশের ইনফো কার্ডগুলো */}
          <div className="lg:col-span-1 space-y-6">

            {/* ইমেইল কার্ড */}
            <div className="bg-[#032030] border border-white/5 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#00d2ff] hover:shadow-[0_10px_30px_rgba(0,210,255,0.1)]">
              <div className="w-12 h-12 bg-[#00d2ff]/10 text-[#00d2ff] rounded-xl flex items-center justify-center text-2xl shrink-0">
                <HiMail />
              </div>
              <div>
                <h3 className="font-bold text-sm">Email Me</h3>
                <p className="text-gray-400 text-xs mt-0.5 break-all">shahriarahmed32198@gmail.com</p>
              </div>
            </div>

            {/* লিঙ্কডইন কার্ড (অ্যানিমেটেড ফিড সহ) */}
            <div className="bg-[#032030] border border-white/5 rounded-2xl overflow-hidden flex h-[280px] transition-all duration-300 hover:-translate-y-2 hover:border-[#00d2ff] hover:shadow-[0_10px_30px_rgba(0,210,255,0.1)]">
              <div className="relative w-1/2 h-full bg-[#010c15] overflow-hidden border-r border-white/5">
                <div className="space-y-3 p-3 animate-[scrollVertical_12s_linear_infinite] hover:[animation-play-state:paused]">
                  <div className="bg-white/5 p-2 rounded-md text-[9px] border border-white/10">
                    <p className="text-[#00d2ff] font-bold">New Post 🚀</p>
                    <p className="text-gray-400">Building a MERN Stack Dream-11 app...</p>
                  </div>
                  <div className="bg-white/5 p-2 rounded-md text-[9px] border border-white/10">
                    <p className="text-[#00d2ff] font-bold">Web Dev 💻</p>
                    <p className="text-gray-400">Tailwind CSS v4 is a game changer!</p>
                  </div>
                  <div className="bg-white/5 p-2 rounded-md text-[9px] border border-white/10">
                    <p className="text-[#00d2ff] font-bold">Milestone 🏆</p>
                    <p className="text-gray-400">5+ Professional Projects completed.</p>
                  </div>
                  <div className="bg-white/5 p-2 rounded-md text-[9px] border border-white/10">
                    <p className="text-[#00d2ff] font-bold">Shahriar Ahmed</p>
                    <p className="text-gray-400">Day 8 of #100DaysOfCode Building with Real Data! 🚀</p>
                  </div>
                  <div className="bg-white/5 p-2 rounded-md text-[9px] border border-white/10">
                    <p className="text-[#00d2ff] font-bold">Shahriar Ahmed</p>
                    <p className="text-gray-400">Learning react....</p>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#032030] via-transparent to-[#032030]" />
              </div>
              <div className="w-1/2 flex flex-col items-center justify-center p-4 bg-[#032030] text-center">
                <div className="w-12 h-12 bg-[#00d2ff]/10 text-[#00d2ff] rounded-xl flex items-center justify-center text-xl mb-2">
                  <FaLinkedinIn />
                </div>
                <h3 className="font-bold text-sm">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/shahriarahmedturjo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#00d2ff] mt-2 flex items-center gap-1 hover:underline"
                >
                  View Profile <FaExternalLinkAlt className="text-[8px]" />
                </a>
              </div>
            </div>

            {/* লোকেশন কার্ড */}
            <div className="bg-[#032030] border border-white/5 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#00d2ff] hover:shadow-[0_10px_30px_rgba(0,210,255,0.1)]">
              <div className="w-12 h-12 bg-[#00d2ff]/10 text-[#00d2ff] rounded-xl flex items-center justify-center text-2xl shrink-0">
                <HiLocationMarker />
              </div>
              <div>
                <h3 className="font-bold text-sm">Location</h3>
                <p className="text-gray-400 text-xs mt-0.5">Dhaka, Bangladesh</p>
              </div>
            </div>

          </div>

          {/* ডান পাশের ফর্ম সেকশন */}
          <div className="lg:col-span-2 bg-[#032030] p-8 sm:p-10 rounded-[30px] border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white outline-none transition-all focus:border-[#00d2ff] focus:bg-white/[0.07]" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white outline-none transition-all focus:border-[#00d2ff] focus:bg-white/[0.07]" 
                    placeholder="example@gmail.com" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white outline-none transition-all focus:border-[#00d2ff] focus:bg-white/[0.07]" 
                  placeholder="Project Inquiry" 
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 ml-1">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows="5" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white outline-none transition-all focus:border-[#00d2ff] focus:bg-white/[0.07] resize-none" 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus.submitting}
                className={`w-full font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  formStatus.submitted 
                    ? 'bg-[#00ff88] text-black shadow-lg shadow-[#00ff88]/20' 
                    : 'bg-[#00d2ff] text-black hover:bg-[#ff499e] hover:text-white hover:shadow-[0_0_20px_#ff499e]'
                }`}
              >
                {formStatus.submitting && <>Sending... <FaSpinner className="animate-spin text-lg" /></>}
                {formStatus.submitted && <>Sent! <HiCheck className="text-lg" /></>}
                {formStatus.error && <>Error! <HiX className="text-lg" /></>}
                {!formStatus.submitting && !formStatus.submitted && !formStatus.error && <>Send Message <HiPaperAirplane className="text-lg rotate-90" /></>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}