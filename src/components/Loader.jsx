'use client';

import { useEffect, useState } from 'react';
import { FaCog } from 'react-icons/fa';
import '../app/loader.css';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => clearTimeout(removeTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="project-loader" className={fadeOut ? 'loader-finish' : ''}>
      <div className="loader-wrapper">
        
        {/* রিয়ালিস্টিক চিপ ডিজাইন */}
        <div className="mern-chip">
          <div className="chip-pins">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="chip-content">
            <div className="chip-scan"></div>
            <div className="gears-container">
              {/* দুটিই গিয়ার (একটি পিংক বড় গিয়ার, অন্যটি সায়ান ছোট গিয়ার) */}
              <FaCog className="gear-one" />
              <FaCog className="gear-two" />
            </div>
          </div>
        </div>

        {/* টেক্সট এবং প্রোগ্রেস */}
        <h1 className="load-title">
          TURJO<span>.DEV</span>
        </h1>
        <p className="progress-text">
          INITIALIZING<span className="dot-ani"></span>
        </p>

      </div>
    </div>
  );
}