import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ projects }) {
    return (
        <div className="flex flex-col gap-12 lg:gap-20">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                >
                    {/* Visual Section (Image) - Occupies 7 columns */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <Link href={`/projects/${project.id}`} className="block relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-sm">
                            <Image
                                src={project.thumbnail}
                                alt={project.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </div>

                    {/* Content Section - Occupies 5 columns */}
                    <div className="lg:col-span-5 flex flex-col order-2 lg:order-1 space-y-6">
                        {/* Project Icon & Meta */}
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-card border border-border p-2.5 shadow-sm">
                                <Image
                                    src={project.icon}
                                    alt={project.name}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.category.map((cat, i) => (
                                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-indigo-600/60 bg-indigo-500/5 px-2 py-1 rounded-md">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-4">
                            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight group-hover:text-indigo-600 transition-colors">
                                {project.subject}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {project.shortDes}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4 pt-4">
                            <Link
                                href={`/projects/${project.id}`}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-bold text-sm transition-transform active:scale-95"
                            >
                                View Case Study <ArrowUpRight size={16} />
                            </Link>

                            {/* Secondary Link (Demo or GitHub if exists) */}
                            <button className="h-12 w-12 flex items-center justify-center rounded-xl border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                <ExternalLink size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}