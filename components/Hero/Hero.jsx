"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight, Github, Mail, MousePointer2, Terminal } from "lucide-react";
import Link from "next/link";

// Magnetic Component for the "Hire" Interaction
const MagneticTarget = ({ children, href }) => {
    const ref = useRef(null);
    const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
    const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        x.set((clientX - (left + width / 2)) * 0.35);
        y.set((clientY - (top + height / 2)) * 0.35);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ x, y }}
        >
            <Link href={href}>{children}</Link>
        </motion.div>
    );
};

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 mt-15 overflow-hidden bg-background font-figtree">

            {/* 1. Subtle Developer Grid (Works in Both Themes) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-[grid-black/[0.2]] dark:bg-[grid-white/[0.2]] bg-[size:32px_32px]" />

            <div className="relative z-10 w-full max-w-6xl">

                {/* 2. Personalized Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 mb-10 w-fit mx-auto px-4 py-1.5 rounded-full border border-border bg-muted/30 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Developing in Dhaka, BD
                    </span>
                </motion.div>

                {/* 3. The "Elite IC" Typography */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[14vw] sm:text-8xl md:text-9xl font-bold tracking-tighter text-foreground leading-[0.8]"
                    >
                        Design <br />
                        <span className="font-instrument-serif italic font-normal text-indigo-600 dark:text-indigo-400">meets logic.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Hey, I&apos;m <span className="text-foreground font-bold underline decoration-indigo-500/30">Tamim</span>.
                        I build full-stack applications with a focus on luxury UI and scalable architecture.
                    </motion.p>
                </div>

                {/* 4. Action Hub (Dual-Mode Responsive) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">

                    <MagneticTarget href="/projects">
                        <div className="group relative px-10 py-5 bg-foreground text-background rounded-2xl font-bold text-lg transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
                            <span className="flex items-center gap-2">
                                View Projects <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </div>
                    </MagneticTarget>

                    <div className="flex items-center gap-2">
                        <Link href="/contact" className="p-5 rounded-2xl border border-border bg-background hover:bg-muted transition-colors">
                            <Mail className="w-6 h-6 text-muted-foreground" />
                        </Link>
                        <Link href="https://github.com" target="_blank" className="p-5 rounded-2xl border border-border bg-background hover:bg-muted transition-colors">
                            <Github className="w-6 h-6 text-muted-foreground" />
                        </Link>
                    </div>
                </div>

                {/* 5. The "Developer Signature" - Floating Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground"
                >
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <Terminal className="w-4 h-4 text-indigo-500" /> Web Specialist
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <MousePointer2 className="w-4 h-4 text-indigo-500" /> UI/UX Focused
                        </div>
                    </div>
                    <div className="font-mono text-[10px] font-bold tracking-tighter opacity-50 uppercase">
                        React • Next.js • Tailwind • Node.js
                    </div>
                </motion.div>

            </div>

            {/* Background Glow (Light Mode: Indigo Soft / Dark Mode: Deep Violet) */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}