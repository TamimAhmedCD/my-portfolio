'use client'
import AboutMe from '@/components/AboutMe/AboutMe'
import CTA from '@/components/CTA/CTA'
import React from 'react'
import { motion } from "framer-motion"
import { Code2, Cpu, Heart, Rocket, Target } from 'lucide-react'

const skills = {
    frontend: ["React.js", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "Mongoose"],
    tools: ["Git", "VS Code", "Figma", "Adobe Photoshop"],
}

export default function page() {

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    }

    const slideUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    }

    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }
    return (
        <section className='mt-28 md:mt-36'>
            <AboutMe />
            {/* Developer Journey */}
            <section className='mx-auto max-w-7xl font-figtree py-20 px-6 lg:px-8'>
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideUp}
                    className="mb-12 text-center lg:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                        Behind the <span className='text-[#6366f1] font-instrument-serif italic font-medium'>Craft</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
                        A glimpse into my journey, philosophy, and the tools I use to build the future.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                    {/* 1. Developer Journey (Big Feature) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-8 bg-card border border-border rounded-3xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Code2 size={120} className="text-[#6366f1]" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#6366f1]/10 rounded-lg">
                                    <Code2 className="w-6 h-6 text-[#6366f1]" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">Origins</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Developer <span className="font-instrument-serif italic">Journey</span></h3>
                            <p className="text-muted-foreground leading-relaxed text-lg max-w-prose">
                                I began experimenting with <span className="text-foreground font-medium">HTML & CSS</span> back in school. What started as curiosity evolved into a deep-seated passion for the <span className="text-foreground font-medium">JavaScript ecosystem</span>, where I now architect full-stack solutions using the MERN stack.
                            </p>
                        </div>
                    </motion.div>

                    {/* 2. Philosophy (Tall Column) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 bg-[#6366f1] rounded-3xl p-8 text-white flex flex-col justify-between"
                    >
                        <Target className="w-10 h-10 mb-8 opacity-80" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2 font-instrument-serif italic">Clean Code.</h3>
                            <p className="text-indigo-100 leading-snug">
                                I believe code is for humans first, and machines second. Maintainability isn't a luxury—it's the standard.
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. Skills (Wide Grid) */}
                    <motion.div
                        className="md:col-span-7 bg-card border border-border rounded-3xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Cpu className="w-5 h-5 text-[#6366f1]" />
                            <h3 className="font-bold uppercase text-xs tracking-widest text-muted-foreground">Tech Stack</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                    <h4 className="text-sm font-semibold mb-4 text-foreground/70">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-muted rounded-full text-xs font-medium border border-border/50">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. Future Goals (Small Square) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-5 bg-muted/30 border border-border rounded-3xl p-8 flex flex-col justify-center text-center items-center"
                    >
                        <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center border border-border mb-4 shadow-sm">
                            <Rocket className="w-6 h-6 text-[#6366f1]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Future Goals</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Mastering Distributed Systems and contributing to the global Open Source community.
                        </p>
                    </motion.div>

                    {/* 5. Interests (Bottom Bar) */}
                    <motion.div
                        className="md:col-span-12 bg-card border border-border rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-red-500/10 rounded-full">
                                <Heart className="w-5 h-5 text-red-500" />
                            </div>
                            <p className="text-muted-foreground">
                                When I'm not coding, you'll find me <span className="text-foreground font-semibold italic font-instrument-serif">designing graphics</span> or playing strategy games.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            {['Gaming', 'Design', 'Strategy', 'AI'].map(tag => (
                                <span key={tag} className="text-[10px] uppercase font-bold tracking-tighter px-2 py-1 bg-muted rounded">#{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>
            <CTA />
        </section>
    )
}
