"use client";

import React from "react";
import projects from "../../../data/projects.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowUpRight, Globe, Github, Zap, ShieldCheck,
    Layout, Cpu, MousePointer2, BarChart3, Palette
} from "lucide-react";
import CTA from "@/components/CTA/CTA";

export default function ProjectDetails({ params }) {
    const { id } = params;
    const project = projects.find((p) => p.id === id);

    if (!project) return <div className="h-screen flex items-center justify-center">Project not found</div>;

    return (
        <>
            <section className="bg-[#fafafa] dark:bg-[#050505] font-figtree pt-32 pb-40">

                {/* 1. Hero Header */}
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
                        <div className="flex flex-wrap gap-3">
                            {project.category.map((cat, i) => (
                                <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-full">
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground leading-[0.85]">
                            {project.subject}
                        </h1>
                    </motion.div>
                </div>

                {/* 2. Hero Image */}
                <div className="w-full px-6 md:px-12 mb-32">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-border">
                        <Image src={project.thumbnail} alt={project.subject} fill className="object-cover" priority />
                    </motion.div>
                </div>

                {/* 3. The Dual-Column Case Study */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">

                    <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">Project Overview</h3>
                                <p className="text-lg leading-relaxed text-foreground font-medium italic">"{project.shortDes}"</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-2">Role</h4>
                                    <p className="text-sm font-bold text-foreground">Lead Dev & Designer</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-2">Timeline</h4>
                                    <p className="text-sm font-bold text-foreground">2026 — 4 Months</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 pt-8">

                                <Link href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-border hover:border-indigo-500 transition-all group">

                                    <div className="flex items-center gap-3">

                                        <Globe size={18} className="text-indigo-600" />

                                        <span className="text-xs font-bold uppercase tracking-widest">Live Site</span>

                                    </div>

                                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />

                                </Link>

                                <Link href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-border hover:border-indigo-500 transition-all group">

                                    <div className="flex items-center gap-3">

                                        <Github size={18} className="text-indigo-600" />

                                        <span className="text-xs font-bold uppercase tracking-widest">Source Code</span>

                                    </div>

                                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />

                                </Link>

                            </div>

                        </div>
                    </aside>

                    <main className="lg:col-span-8 space-y-40">

                        {/* Section: The Objective */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"><Zap size={20} /></div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">The Objective</h2>
                            </div>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                                To revolutionize the user interaction model by implementing a high-performance SaaS architecture. We focused on reducing cognitive load through luxury minimalist UI patterns.
                            </p>
                        </section>

                        {/* Section: Design System (NEW) */}
                        <section className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"><Palette size={20} /></div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Design Language</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">A monochromatic base with Indigo accents provides a professional yet energetic atmosphere. We utilized a strict 4px grid system.</p>
                                    <div className="flex gap-4">
                                        <div className="h-14 w-14 rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-500/20" />
                                        <div className="h-14 w-14 rounded-2xl bg-black dark:bg-white" />
                                        <div className="h-14 w-14 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
                                    </div>
                                </div>
                                <div className="p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-border">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-4">Typography</h4>
                                    <div className="space-y-2">
                                        <p className="text-3xl font-bold tracking-tighter italic font-instrument-serif">Instrument Serif</p>
                                        <p className="text-xl font-medium tracking-tight">Figtree Sans</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Feature Bento Grid (NEW) */}
                        <section className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"><Layout size={20} /></div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Key Features</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-10 rounded-[2.5rem] border border-border bg-white dark:bg-neutral-900 space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600"><Cpu size={24} /></div>
                                    <h3 className="text-2xl font-bold tracking-tighter">AI Integration</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">Leveraging Gemini API for real-time image analysis and automated metadata generation.</p>
                                </div>
                                <div className="p-10 rounded-[2.5rem] border border-border bg-white dark:bg-neutral-900 space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600"><MousePointer2 size={24} /></div>
                                    <h3 className="text-2xl font-bold tracking-tighter">Fluid UX</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">Micro-interactions built with Framer Motion to guide user focus seamlessly.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section: Technical Framework */}
                        <section className="p-12 rounded-[3.5rem] bg-indigo-600 text-white space-y-8 shadow-2xl shadow-indigo-500/20">
                            <ShieldCheck size={48} className="text-indigo-300" />
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">The Technical Framework</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <p className="text-indigo-100 leading-relaxed font-medium">Utilizing Next.js 15 for server-side excellence and Tailwind for architectural styling.</p>
                                <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-indigo-200">
                                    <li>• Server-Side Rendering</li>
                                    <li>• Custom UI Design System</li>
                                    <li>• API Architecture</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section: Outcome & Results (NEW) */}
                        <section className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"><BarChart3 size={20} /></div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">The Outcome</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-8 rounded-3xl border border-border text-center space-y-2">
                                    <p className="text-4xl font-bold tracking-tighter text-indigo-600">99.9%</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Uptime Performance</p>
                                </div>
                                <div className="p-8 rounded-3xl border border-border text-center space-y-2">
                                    <p className="text-4xl font-bold tracking-tighter text-indigo-600">&lt; 100ms</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Interaction Latency</p>
                                </div>
                                <div className="p-8 rounded-3xl border border-border text-center space-y-2">
                                    <p className="text-4xl font-bold tracking-tighter text-indigo-600">2x</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">User Retention</p>
                                </div>
                            </div>
                        </section>

                    </main>
                </div>
            </section>
            <CTA />
        </>
    );
}