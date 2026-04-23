"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const socialItems = [
        { name: "GitHub", href: "https://github.com/TamimAhmedCD", icon: <Github size={16} /> },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/tamim-ahmed-dev/", icon: <Linkedin size={16} /> },
        { name: "Facebook", href: "https://www.facebook.com/tamim.ahmed.360496", icon: <Facebook size={16} /> },
        { name: "Instagram", href: "#", icon: <Instagram size={16} /> },
    ];

    return (
        <footer className="relative mx-auto max-w-7xl font-figtree overflow-hidden pb-8 md:pb-12 transition-colors duration-500">
            <div className="px-6 lg:px-8">

                {/* Big Footer CTA - Responsive Typography */}
                <div className="mb-16 md:mb-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-gray-200 dark:border-white/10 pb-12 md:pb-16">
                    <h2 className="text-[12vw] lg:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white leading-none">
                        Let’s <span className="font-instrument-serif italic font-normal text-indigo-600 dark:text-indigo-400">talk.</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-indigo-600 text-white px-8 py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20"
                    >
                        <span className="font-bold uppercase tracking-widest text-sm">Start a Project</span>
                        <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>

                {/* Grid - 1 col on mobile, 2 on tablet, 4 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="flex items-center space-x-3 mb-6 group">
                            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-800 p-1 group-hover:border-indigo-500/50 transition-colors">
                                <Image
                                    src="/tamim.png"
                                    alt="Tamim"
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <span className="text-gray-900 dark:text-white text-2xl font-bold tracking-tighter">Tamim.</span>
                        </Link>
                        <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
                            <p>120 Balichar Street</p>
                            <p>Barlekha, Moulvibazar</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="sm:pl-4 lg:pl-0">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-6 md:mb-8">Navigation</h4>
                        <nav className="flex flex-col gap-3 md:gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-6 md:mb-8">Connect</h4>
                        <nav className="flex flex-col gap-3 md:gap-4">
                            {socialItems.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    className="flex items-center gap-3 text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit group"
                                >
                                    <span className="opacity-50 group-hover:opacity-100 transition-opacity">{social.icon}</span>
                                    {social.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-6 md:mb-8">Reach Out</h4>
                        <div className="space-y-6">
                            <Link href="mailto:tamim20072@gmail.com" className="group flex flex-col w-fit">
                                <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold mb-1">Email</span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white border-b border-transparent group-hover:border-indigo-500 transition-all">
                                    tamim20072@gmail.com
                                </span>
                            </Link>
                            <Link href="tel:+8801742982184" className="group flex flex-col w-fit">
                                <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold mb-1">Phone</span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white border-b border-transparent group-hover:border-indigo-500 transition-all">
                                    +880 174 298 2184
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 md:mt-24 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="text-[9px] md:text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.3em]">
                        © 2026 Tamim Ahmed. Engineered for Perfection.
                    </p>

                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        <span className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            Built with Next.js & Tailwind
                        </span>
                    </div>
                </div>
            </div>

            {/* Giant Watermark - Responsive Fix */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[28vw] lg:text-[15rem] font-black text-gray-500/[0.03] dark:text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none">
                TAMIM
            </div>
        </footer>
    );
}