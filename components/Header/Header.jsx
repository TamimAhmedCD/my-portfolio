"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ShimmerButton } from "../magicui/shimmer-button";
import { Button } from "../ui/button";
import Image from "next/image";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    {
        name: "Products",
        href: "/products",
    },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerVariants = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        scrolled: {
            backdropFilter: "blur(20px)",
            backgroundColor:
                theme === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        },
    };

    const mobileMenuVariants = {
        closed: { opacity: 0, height: 0 },
        open: { opacity: 1, height: "auto" },
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <motion.header
            className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 font-figtree"
            variants={headerVariants}
            initial="initial"
            animate={isScrolled ? "scrolled" : "animate"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
                backdropFilter: isScrolled ? "blur(20px)" : "none",
                backgroundColor: isScrolled
                    ? theme === "dark"
                        ? "rgba(0, 0, 0, 0.8)"
                        : "rgba(255, 255, 255, 0.8)"
                    : "transparent",
                boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
            }}
        >
            <div className="mx-6 lg:mx-8 max-w-7xl px-2 lg:px-4 border rounded-xl lg:rounded-2xl mt-8">
                <div className="flex h-12 items-center justify-between lg:h-16">
                    <div className="flex items-center space-x-2">
                        <Link
                            prefetch={false}
                            href="/"
                            className="flex items-center space-x-2"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09090b]/30">
                                <Image src="/tamim.png" alt="tamim" width={60} height={60} />
                            </div>
                            <span className="text-[##09090b] text-xl font-bold">Tamim</span>
                        </Link>
                    </div>
                    <nav className="hidden items-center space-x-10 lg:flex">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    prefetch={false}
                                    href={item.href}
                                    className="text-foreground/70 font-sans hover:text-foreground transition-all duration-300"
                                >
                                    <span>{item.name}</span>
                                </Link>
                            </div>
                        ))}
                    </nav>

                    <div className="hidden items-center space-x-4 lg:flex">
                        <Button variant={"outline"}>Download CV</Button>
                        <ShimmerButton>Get Started</ShimmerButton>
                    </div>

                    <motion.button
                        className="hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </motion.button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="overflow-hidden lg:hidden"
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="border-border bg-background/95 mt-4 space-y-2 rounded-xl border py-4 shadow-xl backdrop-blur-lg">
                                {navItems.map((item) => (
                                    <Link
                                        prefetch={false}
                                        key={item.name}
                                        href={item.href}
                                        className="text-foreground hover:bg-muted block px-4 py-3 font-medium transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="space-y-2 px-4 py-2">
                                    <Button variant={"outline"} className="w-full">
                                        Download CV
                                    </Button>
                                    <ShimmerButton className="w-full">Get Started</ShimmerButton>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
