"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, MoveRight, Layers, Sparkles } from "lucide-react";
import projectsData from "../../data/projects.json";

export default function Work() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const displayedProjects = isHome ? projectsData.slice(0, 6) : projectsData;

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Smoothen the scroll movement
    const xRange = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
    const x = useSpring(xRange, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section ref={targetRef} className="relative h-[400vh] font-figtree">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-white dark:bg-[#050505]">

                {/* Modern Floating Header - Solves Overlap */}
                <div className="absolute top-0 left-0 w-full z-30 px-6 lg:px-12 pt-16 pb-32 bg-gradient-to-b from-white via-white/80 dark:from-[#050505] dark:via-[#050505]/80 to-transparent pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
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
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground hidden md:block">
                            Scroll to navigate — 01 // 0{displayedProjects.length}
                        </p>
                    </motion.div>
                </div>

                {/* The Horizontal Moving Track */}
                <motion.div style={{ x }} className="flex gap-16 lg:gap-32 pl-[5%] lg:pl-[10%] items-center pt-24">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard key={project.id || index} project={project} index={index} />
                    ))}

                    {/* Final Archive Slide */}
                    {isHome && (
                        <div className="flex h-[50vh] items-center justify-center pr-32 lg:pr-64">
                            <Link href="/projects" className="group flex flex-col items-center gap-8">
                                <div className="relative h-40 w-40 rounded-full border border-indigo-500/20 flex items-center justify-center group-hover:border-indigo-600 transition-all duration-700">
                                    <div className="absolute inset-0 rounded-full border border-indigo-600 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-10 transition-all duration-700" />
                                    <MoveRight size={48} className="text-indigo-600 group-hover:translate-x-4 transition-transform duration-500" />
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
            className="group relative h-[50vh] w-[85vw] md:w-[65vw] lg:w-[50vw] flex-shrink-0"
        >
            {/* Project Frame */}
            <Link
                href={`/projects/${project.id}`}
                className="block relative h-full w-full overflow-hidden rounded-[3rem] lg:rounded-[4.5rem] bg-neutral-100 dark:bg-neutral-900 shadow-[0_0_50px_-12px_rgba(0,0,0,0.12)] group-hover:shadow-indigo-500/10 transition-all duration-700"
            >
                <Image
                    src={project.thumbnail}
                    alt={project.subject}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />

                {/* Floating Meta Label */}
                <div className="absolute top-8 left-8 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white/90 dark:bg-black/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                        <Image src={project.icon} alt="" width={20} height={20} className="object-contain" />
                    </div>
                    <span className="px-4 py-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-foreground shadow-lg">
                        {project.category[0]}
                    </span>
                </div>

                {/* Bottom Title Bar (Visible on Hover) */}
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="flex justify-between items-end">
                        <div className="max-w-md">
                            <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tighter mb-4">
                                {project.subject}
                            </h3>
                            <p className="text-white/70 text-sm font-medium line-clamp-2">
                                {project.shortDes}
                            </p>
                        </div>
                        <div className="h-16 w-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                            <ArrowUpRight size={28} />
                        </div>
                    </div>
                </div>
            </Link>

            {/* Vertical Index Number */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-9xl font-black text-gray-950/[0.03] dark:text-white/[0.03] pointer-events-none select-none">
                0{index + 1}
            </div>
        </motion.div>
    );
}