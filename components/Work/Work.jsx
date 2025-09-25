'use client'
import React from "react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import projects from "../../app/projects.json"
import { usePathname } from "next/navigation";

export default function Work() {
    const pathname = usePathname();

    // If on home page, show only 3 projects; else show all
    const displayedProjects = pathname === "/" ? projects.slice(0, 3) : projects;

    return (
        <div className="mx-auto max-w-7xl font-figtree my-8 md:my-12 lg:my-16">

            <div className="mx-6 lg:mx-8">
                <div className="flex items-center justify-center">
                    <div
                        className={cn(
                            "group rounded-full border border-[#6366f1]/40 bg-[#6366f1]/10 text-sm sm:text-base transition-all ease-in hover:cursor-pointer hover:bg-[#6366f1]/20 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                        )}
                    >
                        <AnimatedShinyText className="inline-flex items-center text-xs sm:text-base text-[#6366f1]/80 justify-center px-3 sm:px-4 py-1 transition ease-out hover:duration-300 hover:dark:text-neutral-400">
                            <span>✨ Selected Work</span>{" "}
                        </AnimatedShinyText>
                    </div>
                </div>
                {/* Heading */}
                <div className="mt-6 mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-2">
                        Featured{" "}
                        <span className="font-medium text-[#6366f1] font-instrument-serif italic">
                            Projects
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        Showcasing innovative web solutions built with modern
                        technologies, clean architecture, and creative design.
                    </p>
                </div>
                <ProjectCard projects={displayedProjects} />
            </div>
        </div>
    );
}
