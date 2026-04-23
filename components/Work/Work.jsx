"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, MoveRight, Sparkles } from "lucide-react";
import projectsData from "../../data/projects.json";

export default function Work() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const displayedProjects = isHome ? projectsData.slice(0, 6) : projectsData;

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Adjusting the range to -80% to ensure all cards pass through
    const xRange = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    const x = useSpring(xRange, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section ref={targetRef} className="relative h-[400vh] font-figtree">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Header Container - Fixed & Aligned */}
                <div className="absolute top-16 md:top-24 left-0 w-full z-30 px-6 lg:px-8 pointer-events-none">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-auto"
                        >
                            <div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 w-fit mb-4">
                                    <Sparkles className="w-3 h-3 text-indigo-600" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                                        Digital Craft
                                    </span>
                                </div>
                                <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.8]">
                                    The <span className="font-instrument-serif italic font-normal text-indigo-600">Showcase.</span>
                                </h2>
                            </div>

                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hidden md:block">
                                Scroll to navigate — 01 // 0{displayedProjects.length}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* The Horizontal Moving Track */}
                {/* Removed pt-24 and used flex items-center to keep it perfectly centered */}
                <motion.div style={{ x }} className="flex gap-12 lg:gap-24 pl-[6%] md:pl-[10%] items-center mt-4 md:mt-40 lg:mt-60">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard key={project.id || index} project={project} index={index} />
                    ))}

                    {/* Final Archive Slide */}
                    {isHome && (
                        <div className="flex h-[40vh] md:h-[50vh] items-center justify-center pr-32 lg:pr-64">
                            <Link href="/projects" className="group flex flex-col items-center gap-8">
                                <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border border-indigo-500/20 flex items-center justify-center group-hover:border-indigo-600 transition-all duration-700">
                                    <div className="absolute inset-0 rounded-full border border-indigo-600 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-10 transition-all duration-700" />
                                    <MoveRight size={40} className="text-indigo-600 group-hover:translate-x-4 transition-transform duration-500" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground group-hover:text-foreground transition-colors">
                                    Explore Full Archive
                                </span>
                            </Link>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative h-[45vh] md:h-[52vh] w-[85vw] md:w-[60vw] lg:w-[48vw] flex-shrink-0"
        >
            <Link
                href={`/projects/${project.id}`}
                className="block relative h-full w-full overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] bg-neutral-100 dark:bg-neutral-900 shadow-2xl transition-all duration-700"
            >
                <Image
                    src={project.thumbnail}
                    alt={project.subject}
                    fill
                    priority={index < 2}
                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                />

                {/* Floating Meta Label */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-white/90 dark:bg-black/90 backdrop-blur-md flex items-center justify-center shadow-sm">
                        <Image src={project.icon} alt="" width={18} height={18} className="object-contain" />
                    </div>
                    <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-[9px] md:text-[10px] font-black uppercase tracking-widest text-foreground shadow-sm">
                        {project.category[0]}
                    </span>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                    <div className="flex justify-between items-end">
                        <div className="max-w-[75%]">
                            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter mb-2">
                                {project.subject}
                            </h3>
                            <p className="text-white/70 text-[10px] md:text-xs font-medium line-clamp-1">
                                {project.shortDes}
                            </p>
                        </div>
                        <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                            <ArrowUpRight size={22} />
                        </div>
                    </div>
                </div>
            </Link>

            {/* Vertical Index Number */}
            <div className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-7xl md:text-[10rem] font-black text-gray-950/[0.03] dark:text-white/[0.03] pointer-events-none select-none italic">
                0{index + 1}
            </div>
        </motion.div>
    );
}