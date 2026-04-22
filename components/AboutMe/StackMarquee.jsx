"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

// Asset Imports
import html from "../../public/Icon/Stack/HTML.svg";
import css from "../../public/Icon/Stack/CSS.svg";
import react from "../../public/Icon/Stack/React.js.svg";
import js from "../../public/Icon/Stack/Javascript.svg";
import next from "../../public/Icon/Stack/Next.js.svg";
import MongoDB from "../../public/Icon/Stack/MongoDB.svg";
import node from "../../public/Icon/Stack/Node.js.svg";
import express from "../../public/Icon/Stack/Express.js.svg";

const stacks = [
    { name: "HTML", category: "Markup", img: html },
    { name: "CSS", category: "Styling", img: css },
    { name: "JavaScript", category: "Logic", img: js },
    { name: "React.js", category: "Library", img: react },
    { name: "Next.js", category: "Framework", img: next },
    { name: "MongoDB", category: "Database", img: MongoDB },
    { name: "Node.js", category: "Runtime", img: node },
    { name: "Express.js", category: "Backend", img: express },
];

const firstRow = stacks.slice(0, stacks.length / 2);
const secondRow = stacks.slice(stacks.length / 2);

const TechCard = ({ img, name, category }) => {
    return (
        <figure
            className={cn(
                "relative w-56 cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300",
                // Light Mode: Soft border and white glass
                "border-black/[0.08] bg-white/[0.4] hover:bg-white hover:border-indigo-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                // Dark Mode: Muted glass and indigo glow
                "dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:bg-white/[0.05] dark:hover:border-indigo-500/50"
            )}
        >
            <div className="flex flex-row items-center gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm border border-black/[0.05]">
                    <Image
                        className="object-contain"
                        width={32}
                        height={32}
                        alt={name}
                        src={img}
                    />
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="text-sm font-bold text-foreground truncate">
                        {name}
                    </figcaption>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                        {category}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function StackMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
            {/* First Row */}
            <Marquee pauseOnHover className="[--duration:30s]">
                {firstRow.map((stack) => (
                    <TechCard key={stack.name} {...stack} />
                ))}
            </Marquee>

            {/* Second Row */}
            <Marquee reverse pauseOnHover className="[--duration:30s] mt-4">
                {secondRow.map((stack) => (
                    <TechCard key={stack.name} {...stack} />
                ))}
            </Marquee>

            {/* Premium Gradient Masks (Fade to Background) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/50 to-transparent"></div>
        </div>
    );
}