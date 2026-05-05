"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex flex-col justify-center overflow-x-hidden">
      <div className="container-grid flex flex-col justify-center flex-1 py-20 px-6 md:section-padding border-b border-brand-line">
        <div className="relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="text-[14px] font-medium tracking-[0.5em] opacity-50 uppercase block">
              Advanced Web Architecture
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1
              style={{ y: y1 }}
              className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10rem] font-black leading-[0.85] md:leading-[0.8] tracking-[-0.07em] -ml-[0.03em] md:-ml-[0.05em]"
            >
              FRONTEND<br />
              ENGINEER
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container-grid grid grid-cols-1 md:grid-cols-4 border-b border-brand-line md:h-60">
        <div className="border-b md:border-b-0 md:border-r border-brand-line p-6 md:p-8 flex flex-col justify-between">
          <span className="text-[11px] text-brand-muted uppercase tracking-widest font-semibold flex items-center gap-2 mb-6 md:mb-0">
            <span className="w-4 h-[1px] bg-brand-muted" /> 01 / Recent Projects
          </span>
          <div className="text-xl font-light leading-snug">
            Lakshadweep Tourism — 2026<br />
            HeliYatra — 2024<br />
            eCatering — 2023
          </div>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-brand-line p-6 md:p-8 flex flex-col justify-between">
          <span className="text-[11px] text-brand-muted uppercase tracking-widest font-semibold flex items-center gap-2 mb-6 md:mb-0">
            <span className="w-4 h-[1px] bg-brand-muted" /> 02 / Expertise
          </span>
          <div className="text-[13px] leading-relaxed text-brand-muted md:max-w-[200px] font-medium">
            Frontend Engineer specializing in high-traffic applications, AI-agent integrations (Antigravity), and performance.
          </div>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-brand-line p-6 md:p-8 flex flex-col justify-between">
          <span className="text-[11px] text-brand-muted uppercase tracking-widest font-semibold flex items-center gap-2 mb-6 md:mb-0">
            <span className="w-4 h-[1px] bg-brand-muted" /> 03 / Socials
          </span>
          <div className="flex flex-col gap-2 text-[12px] font-bold uppercase tracking-wider">
            <a href="https://linkedin.com/in/akshayverma" target="_blank" className="hover:text-brand-muted transition-colors">&rarr; LinkedIn</a>
            <a href="https://github.com/akshayverma" target="_blank" className="hover:text-brand-muted transition-colors">&rarr; GitHub</a>
            <a href="https://dante2109.github.io" target="_blank" className="hover:text-brand-muted transition-colors">&rarr; Portfolio</a>
          </div>
        </div>
        <a href="#contact" className="p-6 md:p-8 flex flex-col justify-between bg-brand-accent text-brand-bg transition-colors hover:opacity-90 cursor-pointer group min-h-[160px] md:min-h-0">
          <span className="text-[11px] text-brand-muted uppercase tracking-widest font-semibold mb-8 md:mb-0">
            04 / Collaboration
          </span>
          <div className="text-3xl font-black leading-[0.9] flex items-center justify-between">
            LET'S<br />BUILD
            <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
}
