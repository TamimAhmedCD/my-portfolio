"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { ArrowUpRight, MoveRight, Layers, Sparkles } from "lucide-react";
import projectsData from "../../data/projects.json";

export default function Work() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const displayedProjects = isHome ? projectsData.slice(0, 3) : projectsData;

    return (
        <section className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 font-figtree overflow-hidden">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 left-1/4 -z-10 h-[400px] w-[400px] bg-indigo-500/5 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {/* Header with Offset Typography */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 lg:mb-32 relative z-10 gap-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 w-fit mb-6">
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                            Curated Works
                        </span>
                    </div>
                    <h2 className="text-6xl lg:text-8xl font-bold text-foreground tracking-tighter leading-[0.85]">
                        Visual <br />
                        <span className="font-instrument-serif italic font-normal text-indigo-600 dark:text-indigo-400">Excellence.</span>
                    </h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-xs border-l border-border pl-6 leading-relaxed">
                    Transforming complex business logic into seamless, high-end digital interfaces.
                </p>
            </div>

            {/* The "Beautiful" Project Grid */}
            <div className="relative z-10 flex flex-col gap-24 lg:gap-40">
                {displayedProjects.map((project, index) => (
                    <motion.div
                        key={project.id || index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group relative"
                    >
                        {/* Project Number (Floating Aesthetic) */}
                        <div className="hidden lg:block absolute -left-16 top-0 text-sm font-black text-indigo-600/20 tracking-widest [writing-mode:vertical-lr] rotate-180">
                            PROJECT — 0{index + 1}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Visual Asset (7 Columns) */}
                            <div className="lg:col-span-7 relative order-1 group-hover:px-4 transition-all duration-700">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] border-[12px] border-card bg-card shadow-2xl">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Interaction Overlay */}
                                    <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="h-20 w-20 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 font-bold text-sm tracking-tighter uppercase shadow-2xl">
                                            View
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Block (5 Columns) */}
                            <div className="lg:col-span-5 order-2 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                                            <Image src={project.icon} alt="" width={24} height={24} />
                                        </div>
                                        <div className="h-[1px] w-12 bg-border" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                                            {project.category[0]}
                                        </span>
                                    </div>

                                    <h3 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tighter leading-none">
                                        {project.subject}
                                    </h3>

                                    <p className="text-muted-foreground text-lg leading-relaxed font-medium line-clamp-3">
                                        {project.shortDes}
                                    </p>
                                </div>

                                {/* Modern Action Link */}
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="inline-flex items-center gap-4 group/link"
                                >
                                    <div className="h-14 w-14 rounded-full border border-border flex items-center justify-center group-hover/link:bg-foreground group-hover/link:text-background transition-all duration-500">
                                        <ArrowUpRight size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-black uppercase tracking-widest text-foreground">Explore Case Study</span>
                                        <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">Full Project Breakdown</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Luxury Footer Archive Link */}
            {isHome && (
                <div className="mt-32 flex justify-center">
                    <Link
                        href="/projects"
                        className="relative px-12 py-6 group overflow-hidden rounded-2xl bg-card border border-border shadow-sm"
                    >
                        <div className="absolute inset-0 bg-indigo-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                        <div className="relative flex items-center gap-4 text-foreground group-hover:text-white transition-colors duration-500 font-black uppercase tracking-widest text-sm">
                            <Layers size={18} />
                            View Full Archive
                            <MoveRight size={18} className="transition-transform group-hover:translate-x-2" />
                        </div>
                    </Link>
                </div>
            )}
        </section>
    );
}