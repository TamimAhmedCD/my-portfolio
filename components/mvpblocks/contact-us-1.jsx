"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Earth from "@/components/ui/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { Label } from "@/components/ui/label";
import { PrimaryButton } from "../Shared/Button";
import { Mail, Globe2, Sparkles } from "lucide-react";

export default function ContactUs1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = { name, email, message };
      const response = await fetch("api/send-email", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send email");

      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-4 sm:px-6 lg:px-8"
    >
      {/* Dynamic Background Accent - Scaled for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[300px] w-[300px] md:h-[600px] md:w-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />

      {/* Header Area - Responsive Typography */}
      <div className="flex flex-col items-center mb-12 lg:mb-24">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-6">
          <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Open for Collaboration
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white text-center tracking-tighter leading-[1.1] md:leading-none">
          Ready to start a <br className="hidden sm:block" />
          <span className="font-instrument-serif italic font-normal text-indigo-600 dark:text-indigo-400 text-5xl sm:text-6xl lg:text-8xl">
            new project?
          </span>
        </h2>
      </div>

      {/* Main Contact Card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[2rem] md:rounded-[3rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden max-w-7xl mx-auto">

        {/* Left Side: The Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-white/5">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-8 md:mb-10 font-medium leading-relaxed">
              Have a specific inquiry or just want to say hi? Fill out the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="name" className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 dark:text-gray-500 ml-1">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border-gray-200 dark:border-white/5 focus:border-indigo-500 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="email" className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 dark:text-gray-500 ml-1">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@example.com"
                    className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border-gray-200 dark:border-white/5 focus:border-indigo-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="message" className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 dark:text-gray-500 ml-1">Your Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project goals..."
                  className="min-h-[150px] md:min-h-[180px] rounded-2xl md:rounded-[2rem] bg-gray-50 dark:bg-neutral-800/50 border-gray-200 dark:border-white/5 focus:border-indigo-500 transition-all resize-none p-5 md:p-6"
                  required
                />
              </div>

              <div className="pt-2 md:pt-4">
                <PrimaryButton
                  isSubmitting={isSubmitting}
                  isSubmitted={isSubmitted}
                  label="Send Inquiry"
                  className="w-full lg:w-fit px-8 md:px-12 h-14 md:h-16 rounded-xl md:rounded-2xl shadow-xl shadow-indigo-500/20 font-bold"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: The Info/Globe */}
        <div className="lg:col-span-5 relative bg-neutral-950 p-8 sm:p-12 lg:p-16 flex flex-col min-h-[450px] sm:min-h-[550px] lg:min-h-full overflow-hidden group">

          {/* Sparkles */}
          <div className="absolute inset-0 z-0">
            <SparklesCore
              id="contact-sparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={80}
              className="w-full h-full opacity-50"
              particleColor="#6366f1"
            />
          </div>

          <div className="relative z-10">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-[1.2rem] bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center mb-6 md:mb-10 group-hover:border-indigo-500/50 transition-colors duration-500">
              <Globe2 className="text-indigo-400 w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-[1.1] lg:leading-[0.9]">
              Let’s build something <br className="hidden sm:block" />
              <span className="text-indigo-400">extraordinary</span> together.
            </h4>

            <div className="mt-8 md:mt-12 flex items-center gap-4">
              <div className="flex h-9 sm:h-10 px-4 items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-black text-green-500 uppercase tracking-widest">Available Now</span>
              </div>
            </div>
          </div>

          {/* The Globe Section - Critical Fix for Responsiveness */}
          <div className="relative z-10 w-full aspect-square mt-auto translate-y-1/4 sm:translate-y-1/3 scale-[1.3] sm:scale-150 transition-transform duration-1000 group-hover:scale-[1.35] sm:group-hover:scale-[1.55]">
            <Earth
              scale={1}
              baseColor={[0.39, 0.40, 0.95]}
              markerColor={[1, 1, 1]}
              glowColor={[0.7, 0.72, 1]}
            />
          </div>

          {/* Floating Branding - Responsive Text */}
          <div className="absolute -bottom-6 -right-4 sm:-bottom-12 sm:-right-8 text-7xl sm:text-[12rem] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-indigo-500/[0.05] transition-colors duration-700">
            TM
          </div>
        </div>
      </div>
    </section>
  );
}