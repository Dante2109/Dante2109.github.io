"use client";

import React from "react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-0 border-t border-brand-line">
      <div className="container-grid">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-brand-line">
          {/* Left Side: Large Title */}
          <div className="md:col-span-4 p-8 md:p-12 md:border-r border-brand-line flex flex-col justify-between italic">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-muted">/ Profile</span>
            <h2 className="text-[12vw] md:text-8xl font-black tracking-[-0.07em] mt-12 md:mt-24 leading-none uppercase">
              WHO<br />I AM
            </h2>
          </div>

          {/* Right Side: Detailed Bio */}
          <div className="md:col-span-8 p-8 md:p-12 space-y-16">
            <div className="space-y-8 max-w-3xl">
              <p className="text-xl md:text-4xl font-light leading-tight tracking-tight text-brand-accent/90">
                A Frontend Engineer based in <span className="text-brand-accent font-medium italic underline decoration-brand-accent/30">New Delhi</span>, specializing in high-performance web systems and AI Agentic architectures.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-4 md:pt-8">
                <div className="space-y-4">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-brand-muted">/ Professional Journey</span>
                  <p className="text-base text-brand-muted leading-relaxed font-medium">
                    With over 2.5 years of experience in the industry, I've transitioned from a dedicated trainee at Masai to a core engineer at Ipsator Analytics. My work revolves around performance, scalability, and creating seamless user experiences for millions.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-brand-muted">/ My Philosophy</span>
                  <p className="text-base text-brand-muted leading-relaxed font-medium">
                    I believe that code shouldn't just work—it should be efficient, maintainable, and elegant. Whether it's orchestrating a massive framework migration or fine-tuning render cycles, I approach every challenge with a surgical mindset.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-brand-line pt-12">
              {[
                { label: "Experience", value: "2.5+ YRS" },
                { label: "Traffic Handled", value: "1CR+" },
                { label: "Projects", value: "15+" },
                { label: "Coffee/Day", value: "∞" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[10px] font-mono uppercase text-brand-muted tracking-tighter mb-1">{stat.label}</p>
                  <p className="text-2xl font-black font-mono">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
