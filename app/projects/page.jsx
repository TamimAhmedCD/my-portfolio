"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projects from "../../data/projects.json";
import { ArrowUpRight, Plus, Command } from "lucide-react";
import CTA from "@/components/CTA/CTA";

export default function Projects() {
    return (
        <>
            <section className="font-figtree transition-colors duration-500">
                {/* Header: Minimal & Architectural */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-48 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 mb-6"
                            >
                                <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                                    Available for Projects — 2026
                                </span>
                            </motion.div>
                            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] text-gray-900 dark:text-white">
                                Selected <br />
                                <span className="font-instrument-serif italic font-normal text-indigo-600">Works.</span>
                            </h1>
                        </div>
                        <div className="lg:col-span-4 lg:border-l border-gray-200 dark:border-white/10 lg:pl-8 pb-2">
                            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                A curation of high-end web applications, focusing on architectural code and luxury minimalist UI/UX design.
                            </p>
                        </div>
                    </div>
                </div>

                {/* The Grid: Alternating Modern Layout */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-40">
                    <div className="flex flex-col gap-32 md:gap-56">
                        {projects.map((project, index) => (
                            <ProjectBlock key={project.id || index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </>
    );
}

function ProjectBlock({ project, index }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                {/* Content Side */}
                <div className={`lg:col-span-5 space-y-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-5xl font-black text-gray-900/5 dark:text-white/5">0{index + 1}</span>
                            <div className="h-[1px] flex-grow bg-gray-100 dark:bg-white/5" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.category.map((cat, i) => (
                                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-md">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-5xl lg:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white leading-none group-hover:text-indigo-600 transition-colors">
                                {project.subject}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md">
                                {project.shortDes}
                            </p>
                        </div>
                    </div>

                    <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-4 py-4 pr-8 border-b-2 border-transparent hover:border-indigo-600 transition-all group/btn"
                    >
                        <div className="h-12 w-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover/btn:bg-indigo-600 group-hover/btn:text-white transition-all">
                            <Plus className="group-hover/btn:rotate-90 transition-transform" size={20} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">View Case Study</span>
                    </Link>
                </div>

                {/* Visual Side */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <Link href={`/projects/${project.id}`} className="block relative aspect-[4/5] md:aspect-[16/11] overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-white/5 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                        <Image
                            src={project.thumbnail}
                            alt={project.subject}
                            fill
                            className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"
                        />

                        {/* The Glass Meta-Tag (Minimalist SaaS Style) */}
                        <div className="absolute top-8 right-8 flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 p-2 pr-6 rounded-2xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                            <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                <Command size={18} className="text-black" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">UX Insight</span>
                        </div>
                    </Link>
                </div>

            </div>
        </motion.div>
    );
}