"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Please include a message";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Thanks for reaching out! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-0 border-t border-brand-line bg-brand-bg relative z-10">
      <div className="container-grid">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-brand-line">
          {/* Left Side: Title */}
          <div className="md:col-span-4 p-8 md:p-12 md:border-r border-brand-line flex flex-col justify-between italic bg-brand-bg/50 backdrop-blur-sm">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-muted">/ Connect</span>
            <h2 className="text-[12vw] md:text-8xl font-black tracking-[-0.07em] mt-12 md:mt-24 leading-none uppercase">
              WORK<br />WITH ME
            </h2>
          </div>

          {/* Right Side: Form */}
          <div className="md:col-span-8 p-8 md:p-12">
            <form onSubmit={handleSubmit} noValidate className="space-y-12 max-w-2xl">
              {/* Name field */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="name" className="text-[11px] font-bold tracking-widest uppercase text-brand-muted block">01 / Full Name</label>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.span 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-[10px] font-mono text-red-400 uppercase tracking-tighter flex items-center gap-1"
                      >
                        <AlertCircle size={10} /> {errors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={`w-full bg-transparent border-b ${errors.name ? 'border-red-400' : 'border-brand-line'} py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-brand-accent transition-colors placeholder:opacity-20`}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                  }}
                />
              </div>

              {/* Email field */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="email" className="text-[11px] font-bold tracking-widest uppercase text-brand-muted block">02 / Email Address</label>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.span 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-[10px] font-mono text-red-400 uppercase tracking-tighter flex items-center gap-1"
                      >
                        <AlertCircle size={10} /> {errors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full bg-transparent border-b ${errors.email ? 'border-red-400' : 'border-brand-line'} py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-brand-accent transition-colors placeholder:opacity-20`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                  }}
                />
              </div>

              {/* Message field */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="message" className="text-[11px] font-bold tracking-widest uppercase text-brand-muted block">03 / Your Message</label>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.span 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-[10px] font-mono text-red-400 uppercase tracking-tighter flex items-center gap-1"
                      >
                        <AlertCircle size={10} /> {errors.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hello, I'm interested in..."
                  className={`w-full bg-transparent border-b ${errors.message ? 'border-red-400' : 'border-brand-line'} py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-brand-accent transition-colors resize-none placeholder:opacity-20`}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors(prev => ({ ...prev, message: "" }));
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center gap-4 text-2xl md:text-3xl font-black bg-brand-accent text-brand-bg px-8 md:px-10 py-5 md:py-6 transition-all hover:opacity-90 disabled:opacity-50 overflow-hidden"
              >
                <span className="relative z-10">{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                {!isSubmitting && <Send size={24} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
