"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-brand-bg flex flex-col items-center justify-center"
    >
      <div className="container-grid h-full flex flex-col justify-center">
        <div className="flex items-end justify-between border-b border-brand-line pb-10">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold tracking-[0.5em] uppercase opacity-40 italic">/ Portfolio 26 Edition</p>
            <h2 className="text-5xl md:text-8xl font-black tracking-[-0.07em]">AKSHAY</h2>
          </div>
          <div className="text-right">
            <span className="text-[15vw] md:text-[10vw] font-black leading-none tabular-nums tracking-[-0.07em]">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </div>
        
        <div className="mt-12 flex gap-10 overflow-hidden">
          {["SYSTEMS", "CRAFT", "MOTION", "CODE"].map((text, i) => (
            <motion.span 
              key={text}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.4 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] font-bold tracking-[0.2em] uppercase"
            >
              {text}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-brand-accent"
        style={{ width: `${progress}%` }}
      />
    </motion.div>
  );
}
