"use client"

import { Mail, Phone, ArrowUpRight, Globe, Sparkles, Zap } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Silk from "../Silk"

export default function VibrantCTA() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

    return (
        <section ref={containerRef} className="relative py-24 font-figtree">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Main Card with Primary Color Background */}
                <div className="relative group overflow-hidden rounded-[3.5rem] bg-[#6366f1] shadow-[0_40px_80px_-15px_rgba(99,102,241,0.35)]">

                    {/* Background Layer: Animated Silk for Texture */}
                    <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
                        <Silk speed={2} scale={1.4} color="#ffffff" noiseIntensity={0.4} />
                    </motion.div>

                    {/* Gradient Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] via-transparent to-[#4f46e5] z-0" />

                    <div className="relative z-10 px-8 py-20 lg:py-32 flex flex-col items-center text-center">

                        {/* Glass Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
                        >
                            <Zap className="w-4 h-4 text-white fill-white/20" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">Let's work together</span>
                        </motion.div>

                        {/* Bold White Typography */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-12"
                        >
                            Dream it. <br />
                            <span className="font-instrument-serif italic font-light opacity-90">I'll build it.</span>
                        </motion.h2>

                        {/* White Floating Hub */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center justify-center gap-3 p-3 bg-white rounded-[2.5rem] shadow-2xl"
                        >
                            <Link href="mailto:tamim20072@gmail.com">
                                <motion.div
                                    whileHover={{ scale: 1.03, backgroundColor: "#4f46e5" }}
                                    className="flex items-center gap-3 px-10 py-5 bg-[#6366f1] text-white rounded-[1.75rem] font-bold transition-all shadow-md"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span className="text-lg">Drop a Mail</span>
                                    <ArrowUpRight className="w-5 h-5 opacity-60" />
                                </motion.div>
                            </Link>

                            <div className="flex items-center gap-1 pr-4">
                                <div className="h-10 w-[1px] bg-slate-100 mx-4" />
                                <Link
                                    href="tel:+8801742982184"
                                    className="p-4 text-slate-400 hover:text-[#6366f1] transition-colors rounded-full hover:bg-slate-50"
                                >
                                    <Phone className="w-6 h-6" />
                                </Link>
                                <span className="hidden sm:block text-sm font-bold text-slate-300 uppercase tracking-widest ml-2">
                                    Quick Call
                                </span>
                            </div>
                        </motion.div>

                        {/* Bottom Metadata */}
                        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                            <span className="flex items-center gap-2 tracking-widest">
                                <Globe className="w-4 h-4" /> Available Worldwide
                            </span>
                            <span className="flex items-center gap-2 tracking-widest">
                                <Sparkles className="w-4 h-4" /> Seamless UI/UX
                            </span>
                        </div>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
                </div>
            </div>
        </section>
    );
}