"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { PrimaryButton } from "../Shared/Button";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    {
        name: "Products",
        href: "/products",
    },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const mobileMenuVariants = {
        closed: { opacity: 0, height: 0 },
        open: { opacity: 1, height: "auto" },
    };

    return (
        <motion.header
            className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 font-figtree max-w-7xl mx-auto"
            initial="initial"
            transition={{ duration: 0.3, ease: "easeInOut" }}

        >
            <div className="relative mx-6 lg:mx-8 px-2 lg:px-4 border rounded-xl lg:rounded-2xl mt-8 bg-background/30 backdrop-blur-xs">
                {/* Gradient overlays on left and right */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/30 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background/30 to-transparent"></div>

                <div className="flex h-12 items-center justify-between lg:h-16 relative z-10">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link prefetch={false} href="/" className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09090b]/30">
                                <Image src="/tamim.png" alt="tamim" width={60} height={60} />
                            </div>
                            <span className="text-[#09090b] text-xl font-bold">Tamim</span>
                        </Link>
                    </div>

                    {/* Navigation */}
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

                    {/* Buttons */}
                    <div className="hidden items-center space-x-4 lg:flex">
                        <Button variant={"outline"}>Download CV</Button>
                        <PrimaryButton label="Hire Me" />
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
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
                                    <PrimaryButton className="w-full" label="Hire Me" />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </motion.header>
    );
}
