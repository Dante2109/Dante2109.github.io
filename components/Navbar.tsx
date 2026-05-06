"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Sun, Moon, X } from "lucide-react";

export default function Navbar({ toggleTheme, theme }: { toggleTheme: () => void; theme: "dark" | "light" }) {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // const formatTime = (date: Date) => {
  //   const hours = date.getHours().toString().padStart(2, '0');
  //   const minutes = date.getMinutes().toString().padStart(2, '0');
  //   return `${hours}:${minutes}`;
  // };

  const navItems = ["Projects", "Skills", "About", "Contact"];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-100 bg-brand-bg/80 backdrop-blur-md transition-colors duration-300"
      >
        <div className="container-grid h-20 md:h-24 flex items-center justify-between border-b border-brand-line px-6 md:px-12">
          <div className="flex items-center gap-10">
            <div className="font-black text-xl tracking-tighter">
              AV<span className="text-brand-muted"> / 27</span>
            </div>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase hidden lg:block text-brand-muted">
              Frontend Developer &bull; available for hire
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-muted hover:text-brand-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-brand-line rounded-full transition-colors text-brand-accent"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="text-[11px] font-medium tracking-[0.2em] uppercase hidden sm:block text-brand-muted">
              {/* {formatTime(time)} IST */}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-brand-accent p-2"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-brand-bg flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="font-black text-xl tracking-tighter">
                AV<span className="text-brand-muted"> / 24</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-brand-accent"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-black tracking-tighter hover:text-brand-muted transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto border-t border-brand-line pt-8">
              <p className="text-[11px] font-bold tracking-widest uppercase text-brand-muted mb-4">/ Connect</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:Akshayverma4299@gmail.com" className="text-lg font-medium">Akshayverma4299@gmail.com</a>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-sm font-bold uppercase tracking-wider">LinkedIn</a>
                  <a href="#" className="text-sm font-bold uppercase tracking-wider">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
