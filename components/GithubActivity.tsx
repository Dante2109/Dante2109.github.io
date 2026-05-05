"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

export default function GithubActivity({ theme }: { theme: "dark" | "light" }) {
  const username = "AkshayVerma-Ipsator";

  return (
    <section className="py-0 border-t border-brand-line overflow-hidden bg-brand-bg/20">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-12 border-b border-brand-line"
        >
          {/* Left Side: Title and Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 p-8 md:p-12 md:border-r border-brand-line flex flex-col justify-between italic"
          >
            <div className="space-y-4">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-muted">/ Activity</span>
              <h2 className="text-[12vw] md:text-8xl font-black tracking-[-0.07em] mt-12 md:mt-24 leading-none uppercase">
                CODE<br />LAB
              </h2>
            </div>

            <div className="mt-12 md:mt-0">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="no-referrer"
                className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-brand-muted transition-colors"
              >
                <Github size={18} />
                <span>View GitHub Profile</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center bg-brand-bg/30"
          >
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-brand-muted leading-relaxed max-w-xl font-light">
                Continuous integration and open-source contributions. Tracking the evolution of systems through daily commits.
              </p>

              <div className="github-calendar-wrapper overflow-x-auto pb-4 custom-scrollbar min-h-[160px]">
                <style>{`
                  .github-calendar-wrapper {
                    mask-image: linear-gradient(to right, black 80%, transparent 100%);
                  }
                  .custom-scrollbar::-webkit-scrollbar {
                    height: 4px;
                  }
                  .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: var(--brand-line);
                    border-radius: 2px;
                  }
                `}</style>
                <GitHubCalendar
                  username={username}
                  fontSize={12}
                  blockSize={12}
                  blockMargin={4}
                  colorScheme="dark"
                  theme={{
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-brand-line">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted block mb-1">Status</span>
                  <span className="text-sm font-black uppercase tracking-tighter flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Active Committer
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted block mb-1">Ecosystems</span>
                  <span className="text-sm font-black uppercase tracking-tighter">React / Node / AI</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted block mb-1">Open Source</span>
                  <span className="text-sm font-black uppercase tracking-tighter">15+ Repositories</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
