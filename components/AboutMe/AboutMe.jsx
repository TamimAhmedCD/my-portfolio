"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
    Github,
    Linkedin,
    Phone as WhatsApp,
    ArrowRight,
    User2,
    ShieldCheck,
    Cpu,
    Globe
} from "lucide-react";

const techStack = [
    { name: "React", level: "Expert", color: "bg-blue-500" },
    { name: "Next.js", level: "Senior", color: "bg-black dark:bg-white" },
    { name: "TypeScript", level: "Advanced", color: "bg-blue-600" },
    { name: "Tailwind", level: "Expert", color: "bg-cyan-500" },
    { name: "Node.js", level: "Advanced", color: "bg-green-600" },
    { name: "MongoDB", level: "Advanced", color: "bg-emerald-500" },
];

const MagneticWrapper = ({ children }) => {
    const ref = useRef(null);
    const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
    const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        x.set((clientX - (left + width / 2)) * 0.25);
        y.set((clientY - (top + height / 2)) * 0.25);
    };

    return (
        <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ x, y }}>
            {children}
        </motion.div>
    );
};

export default function AboutMe() {
    return (
        <section className="relative mx-auto max-w-7xl px-6 lg:px-8 lg:mt-24 md:mt-18 mt-12 lg:mb-12 md:mb-6 font-figtree overflow-hidden">

            {/* Subtle Corporate Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* Section Header */}
            <div className="flex flex-col items-center mb-20 relative z-10">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-md mb-6 shadow-sm">
                    <User2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/70">
                        Professional Profile
                    </span>
                </div>
                <h2 className="text-5xl lg:text-7xl font-bold text-foreground text-center tracking-tight">
                    Engineering for <br />
                    <span className="font-instrument-serif italic font-normal text-indigo-600 dark:text-indigo-400">Enterprise Excellence.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                {/* Profile Identity Column (Left) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="group relative rounded-[2.5rem] border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">

                        {/* Top Floating Glass Bar */}
                        <div className="absolute top-6 inset-x-6 z-30 flex justify-between items-center">
                            <div className="px-4 py-2 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Now</span>
                            </div>
                            <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white">
                                <ShieldCheck size={20} />
                            </div>
                        </div>

                        {/* Image Container with targeted scaling */}
                        <div className="relative h-[480px] w-full overflow-hidden">
                            <Image
                                src="https://i.ibb.co.com/NnN0hMCW/10003514303.jpg"
                                alt="Tamim Ahmed"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 z-0"
                                priority
                            />
                            {/* Static Gradient Overlays (Stay put while image scales) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60 z-10" />

                            {/* Text Content over Image */}
                            <div className="absolute bottom-10 left-10 right-10 z-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="space-y-2"
                                >
                                    <h3 className="text-4xl font-bold text-foreground tracking-tighter">Tamim Ahmed</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                            Full-Stack Engineer
                                        </span>
                                        <span className="text-muted-foreground/60 text-xs font-medium">• 3+ Years Exp.</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Stats & Links Footer */}
                        <div className="p-10 bg-muted/20 border-t border-border/50 relative z-20">
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-foreground">40+</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Projects</p>
                                </div>
                                <div className="w-[1px] h-8 bg-border mx-auto self-center" />
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-foreground">12</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Clients</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Link href="https://github.com/TamimAhmedCD" className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl border border-border bg-background hover:bg-muted transition-all font-bold text-sm">
                                    <Github size={18} /> GitHub
                                </Link>
                                <Link href="https://www.linkedin.com/in/tamim-ahmed-dev" className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl border border-border bg-background hover:bg-muted transition-all font-bold text-sm">
                                    <Linkedin size={18} /> LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Meta Info Widget */}
                    <div className="rounded-[2rem] border border-border bg-card p-6 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                                <Globe className="text-indigo-600" size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/50">Timezone</p>
                                <p className="text-sm font-bold text-foreground">Dhaka, GMT +6</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/50">Status</p>
                            <p className="text-sm font-bold text-indigo-500">Open to Remote</p>
                        </div>
                    </div>
                </div>

                {/* Narrative & Skills Column (Right) */}
                <div className="lg:col-span-7 space-y-8">

                    {/* Executive Summary Card */}
                    <div className="rounded-[2.5rem] border border-border bg-card p-10 shadow-sm relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                        <Globe className="absolute -top-10 -right-10 w-40 h-40 text-indigo-500/[0.03] rotate-12" />

                        <p className="text-2xl md:text-3xl font-medium text-foreground leading-tight mb-8">
                            I build <span className="text-indigo-600 italic font-instrument-serif">robust systems</span> that don&apos;t just work, but scale. My focus is on delivering corporate-grade performance with luxury design.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-y border-border/50">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
                                    <ShieldCheck size={14} /> Reliability
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">Clean, modular architecture optimized for long-term maintenance.</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
                                    <Cpu size={14} /> Performance
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">Sub-second load times and enterprise-level SEO standards.</p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 items-center justify-between">
                            <p className="text-xs text-muted-foreground/60 font-medium">Based in Bangladesh • Serving Globally</p>
                            <MagneticWrapper>
                                <Link href="tel:+8801742982184" className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-2xl font-bold transition-transform active:scale-95 shadow-lg">
                                    Contact for Projects <ArrowRight size={18} />
                                </Link>
                            </MagneticWrapper>
                        </div>
                    </div>

                    {/* Technical Ecosystem Dock */}
                    <div className="rounded-[2.5rem] border border-border bg-muted/20 p-8 lg:p-10">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-[1px] w-8 bg-indigo-500/30" />
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                                Tech Stack
                            </h5>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {techStack.map((tech, i) => (
                                <div key={i} className="group p-4 rounded-2xl border border-border bg-background transition-all hover:border-indigo-500/50 hover:bg-muted/30">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={cn("h-1.5 w-1.5 rounded-full", tech.color)} />
                                        <span className="text-sm font-bold text-foreground">{tech.name}</span>
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40">{tech.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}