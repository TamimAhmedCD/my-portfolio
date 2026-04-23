"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Sun, Moon, Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { PrimaryButton } from "../Shared/Button";
import { useTheme } from "next-themes";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        // Prevent body scroll when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobileMenuOpen]);

    if (!mounted) return null;

    return (
        <motion.header
            className="fixed top-0 right-0 left-0 z-[100] font-figtree"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.div className="h-[2px] bg-[#6366f1] origin-left" style={{ scaleX }} />

            <div className={`
                mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500
                ${scrolled ? "mt-2 sm:mt-4" : "mt-4 sm:mt-8"}
            `}>
                <div className={`
                    relative px-3 sm:px-6 py-2 rounded-2xl transition-all duration-500 border
                    ${scrolled
                        ? "bg-background/80 backdrop-blur-xl shadow-lg border-border/50"
                        : "bg-transparent border-transparent"}
                `}>
                    <div className="flex h-12 lg:h-14 items-center justify-between">

                        {/* Logo Area - Responsive Text */}
                        <Link href="/" className="group flex items-center space-x-2 sm:space-x-3 shrink-0">
                            <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-xl bg-indigo-500/10 p-0.5 transition-transform group-hover:scale-105">
                                <Image
                                    src="/tamim.png"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-foreground text-base sm:text-lg font-bold tracking-tight">
                                Tamim<span className="text-[#6366f1] font-instrument-serif italic font-extrabold">.</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center bg-muted/30 rounded-full px-1 py-1 border border-border/20 backdrop-blur-sm">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                                >
                                    {item.name}
                                    <motion.span
                                        className="absolute inset-x-4 bottom-1.5 h-px bg-[#6366f1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                    />
                                </Link>
                            ))}
                        </nav>

                        {/* Actions Area */}
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="rounded-xl bg-muted/20 hover:bg-[#6366f1]/10 group shrink-0"
                            >
                                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#6366f1]" />
                                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-400" />
                            </Button>

                            {/* Desktop specific buttons */}
                            <div className="hidden sm:flex items-center space-x-2">
                                <Button variant="outline" size="sm" className="hidden md:flex rounded-xl border-border/60 hover:bg-muted group">
                                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                                    CV
                                </Button>
                                <PrimaryButton label="Hire Me" />
                            </div>

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                className="lg:hidden p-2 rounded-xl bg-muted/40 text-foreground"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown - Improved positioning and blur */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute left-4 right-4 mt-3 lg:hidden z-[101]"
                        >
                            <div className="bg-background/95 backdrop-blur-2xl border border-border/80 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative">
                                {/* Design Accent for Mobile Menu */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[80px] rounded-full" />

                                <div className="flex flex-col space-y-6 relative z-10">
                                    <div className="flex flex-col space-y-4">
                                        {navItems.map((item, i) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="text-3xl font-bold hover:text-[#6366f1] flex items-center justify-between group transition-colors"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                    <ArrowUpRight className="h-6 w-6 text-[#6366f1] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="h-px bg-border/50 w-full" />

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button variant="outline" className="rounded-2xl h-14 text-lg font-semibold flex-1">
                                            Download CV
                                        </Button>
                                        <PrimaryButton className="h-14 text-lg font-semibold flex-1" label="Hire Me" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}