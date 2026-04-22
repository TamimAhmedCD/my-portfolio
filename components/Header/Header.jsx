"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Sun, Moon, Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { PrimaryButton } from "../Shared/Button";
import { useTheme } from "next-themes"; // Assumes you use next-themes

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
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <motion.header
            className="fixed top-0 right-0 left-0 z-50 font-figtree"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Reading Progress Bar */}
            <motion.div className="h-[2px] bg-[#6366f1] origin-left" style={{ scaleX }} />

            <div className={`
                mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-500
                ${scrolled ? "mt-4" : "mt-8"}
            `}>
                <div className={`
                    relative px-4 lg:px-6 py-2 rounded-2xl transition-all duration-500 border
                    ${scrolled
                        ? "bg-background/70 backdrop-blur-md shadow-lg border-border/50"
                        : "bg-transparent border-transparent"}
                `}>
                    <div className="flex h-12 lg:h-14 items-center justify-between">

                        {/* Logo Area */}
                        <Link href="/" className="group flex items-center space-x-3">
                            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-indigo-500/10 p-0.5 transition-transform group-hover:scale-105">
                                <Image
                                    src="/tamim.png"
                                    alt="Tamim Logo"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-foreground text-lg font-bold tracking-tight">
                                Tamim <span className="text-[#6366f1] font-instrument-serif italic font-medium">.</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation - Glass Pill Aesthetic */}
                        <nav className="hidden lg:flex items-center bg-muted/50 rounded-full px-1 py-1 border border-border/40">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                                >
                                    {item.name}
                                    <motion.span
                                        className="absolute inset-x-4 bottom-1 h-px bg-[#6366f1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                    />
                                </Link>
                            ))}
                        </nav>

                        {/* Actions Area */}
                        <div className="flex items-center space-x-3">
                            {/* Theme Toggle */}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="rounded-xl bg-muted/30 hover:bg-[#6366f1]/10 group transition-all"
                            >
                                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#6366f1]" />
                                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-400" />
                            </Button>

                            <div className="hidden lg:flex items-center space-x-3">
                                <Button variant="outline" className="rounded-xl border-border/60 hover:bg-muted group">
                                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                                    CV
                                </Button>
                                <PrimaryButton label="Hire Me" />
                            </div>

                            {/* Mobile Toggle */}
                            <motion.button
                                className="lg:hidden p-2 rounded-xl bg-muted/50"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute left-6 right-6 mt-4 lg:hidden z-50"
                        >
                            <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-6 shadow-2xl">
                                <div className="flex flex-col space-y-4">
                                    {navItems.map((item, i) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className="text-2xl font-bold hover:text-[#6366f1] flex items-center justify-between group"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                                <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <hr className="border-border/60" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <Button variant="outline" className="rounded-2xl h-12">CV</Button>
                                        <PrimaryButton className="h-12" label="Hire" />
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