"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "HeliYatra",
    tags: ["Next.js", "Scaling", "1Cr+ Users"],
    image: "https://neon.ipsator.com/c/image/upload/q_90,h_512,w_512,c_fill/v1680515909/heliyatra/images/heli-v1.webp",
  },
  {
    id: "02",
    title: "eCatering Admin",
    tags: ["Migration", "Angular to Next.js", "Performance"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "03",
    title: "Lakshadweep Tourism",
    tags: ["Seat Mapping", "OTP Auth", "React"],
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "04",
    title: "Karnataka Tourism",
    tags: ["GraphQL", "WordPress", "Data Integration"],
    image: "https://plus.unsplash.com/premium_photo-1697730504977-26847b1f1f91?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-0">
      <div className="container-grid">
        <div className="section-padding border-b border-brand-line">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h2 className="text-[18vw] md:text-[8rem] font-black tracking-[-0.07em] leading-none">
              WORKS
            </h2>
            <div className="max-w-xs text-brand-muted">
              <p className="text-[11px] uppercase tracking-widest font-semibold mb-4 italic text-brand-accent">/ Selected Projects</p>
              <p className="text-sm font-medium">
                A selection of digital experiences where I displayed my expertise in building scalable, high-traffic web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <div key={project.id} className={cn(
              "border-b border-brand-line p-8 md:p-12 group hover:bg-brand-accent/[0.02] transition-colors",
              i % 2 === 0 ? "md:border-r" : ""
            )}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="space-y-10"
    >
      <div className="relative aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-8">
          <span className="text-[11px] font-bold px-3 py-1 bg-brand-accent text-brand-bg rounded-sm uppercase tracking-widest">
            {project.id}
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">{project.title}</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-brand-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="w-14 h-14 md:w-16 md:h-16 border border-brand-line rounded-full flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-bg transition-all self-end md:self-auto">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </motion.div>
  );
}

import { cn } from "../lib/utils";
