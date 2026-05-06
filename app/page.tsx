"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Experience from "../components/Experience";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import dynamic from 'next/dynamic';

const GithubActivity = dynamic(() => import('@/components/GithubActivity'), {
  ssr: false,
});

import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative selection:bg-brand-accent selection:text-brand-bg transition-colors duration-300">
        <AnimatePresence mode="wait">
          {loading && <Loader key="loader" />}
        </AnimatePresence>

        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Experience theme={theme} />

        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <GithubActivity theme={theme} />
          <Contact />

          {/* Bento Grid Section for Skills/Info */}
          <section id="skills" className="py-0 border-t border-brand-line">
            <div className="container-grid">
              <div className="grid grid-cols-1 md:grid-cols-12 border-b border-brand-line">
                <div className="md:col-span-8 p-8 md:p-12 md:border-r border-brand-line space-y-12">
                  <h2 className="text-[12vw] md:text-8xl font-black tracking-[-0.07em] uppercase leading-tight">STRENGTHS</h2>
                  <p className="text-xl md:text-2xl text-brand-muted leading-relaxed max-w-2xl font-light">
                    Proven track record at Ipsator Analytics, orchestrating migrations to Next.js 14 and managing platforms reaching over 1 Crore users. I specialize in performance tuning and accessible, modern frontend architecture.
                  </p>
                </div>
                <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-between">
                  <span className="text-[11px] font-semibold tracking-widest text-brand-muted uppercase italic">/ Core Skills</span>
                  <ul className="space-y-4 text-sm font-bold uppercase tracking-wider mt-12">
                    <li>&rarr; React / Next.js / TypeScript</li>
                    <li>&rarr; Antigravity Agent Framework</li>
                    <li>&rarr; TanStack Query / GraphQL</li>
                    <li>&rarr; Node.js / MongoDB / Express</li>
                    <li>&rarr; Performance Optimization</li>
                    <li>&rarr; System Architecture</li>
                    {/* <li>&rarr; Gemini AI / LLM Integration</li> */}
                    {/* <li>&rarr; Three.js / Framer Motion</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <footer className="py-0">
            <div className="container-grid">
              <div className="section-padding flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-16">
                <div className="space-y-4 md:space-y-8">
                  <h2 className="text-[18vw] md:text-[10rem] font-black leading-none tracking-[-0.07em] mb-4">AKSHAY<br />VERMA</h2>
                  <p className="text-lg md:text-xl text-brand-muted max-w-sm">Open for selective creative partnerships and full-time engineering roles.</p>
                </div>
                <div className="text-left md:text-right w-full md:w-auto">
                  <a href="mailto:Akshayverma4299@gmail.com" className="text-lg sm:text-2xl md:text-5xl font-black underline underline-offset-10 decoration-brand-accent/20 hover:decoration-brand-accent transition-all tracking-tighter block md:inline uppercase">
                    SEND AN EMAIL
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-t border-brand-line md:h-40">
                <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-brand-line p-8 md:p-10 flex items-center">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-muted">
                    {/* © {new Date().getFullYear()} Akshay Verma Portfolio — All rights reserved */}
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-brand-line p-8 md:p-10 flex items-center justify-center">
                  <a href="https://github.com/AkshayVerma-Ipsator" target="_blank" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-brand-accent text-brand-muted transition-colors">GitHub</a>
                </div>
                <div className="p-8 md:p-10 flex items-center justify-center">
                  <a href="https://linkedin.com/in/akshayverma21" target="_blank" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-brand-accent text-brand-muted transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </footer>
        </main>

        {/* Visible grid overlays */}
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="container-grid h-full" />
        </div>
      </div>
    </SmoothScroll>
  );
}
