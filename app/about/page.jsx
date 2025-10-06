'use client'
import AboutMe from '@/components/AboutMe/AboutMe'
import CTA from '@/components/CTA/CTA'
import React from 'react'
import { motion } from "framer-motion"
import { Code2, Heart, Rocket, Target } from 'lucide-react'

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
            <div className='mx-auto max-w-7xl font-figtree'>
                <div className='mx-6 lg:mx-8'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-card rounded-2xl p-8 border border-border my-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-[#6366f1] rounded-xl">
                                <Code2 className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-foreground mb-3">Developer <span className='text-[#6366f1] font-instrument-serif italic font-medium'>Journey</span></h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    I began my coding journey during my school days, experimenting with HTML and CSS just out of curiosity.
                                    Over time, I discovered my love for JavaScript and started building real projects using React, Node.js,
                                    and MongoDB.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills & Tech Stack */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="space-y-4"
                    >
                        <motion.div variants={slideUp}>
                            <h2 className="text-3xl font-bold text-foreground mb-2">Skills & <span className='text-[#6366f1] font-instrument-serif italic font-medium'>Tech Stacks</span></h2>
                            <p className="text-muted-foreground">Technologies I work with</p>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {Object.entries(skills).map(([category, items]) => (
                                <motion.div key={category} variants={slideUp} className="bg-card rounded-2xl p-6 border border-border">
                                    <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <motion.span
                                                key={skill}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1.5 bg-muted text-foreground rounded-lg text-sm font-medium"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Work Philosophy */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                        className="bg-card rounded-2xl p-8 border border-border my-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-[#6366f1] rounded-xl">
                                <Target className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-foreground mb-3">Work <span className='text-[#6366f1] font-instrument-serif italic font-medium'>Philosophy</span></h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    I believe in writing clean, maintainable code and creating intuitive user experiences. My goal is to
                                    turn ideas into impactful digital solutions.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    {/* Future Goals */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                        className="bg-card rounded-2xl p-8 border border-border mb-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-[#6366f1] rounded-xl">
                                <Rocket className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-foreground mb-3">Future <span className='text-[#6366f1] font-instrument-serif italic font-medium'>Goals</span></h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    I aim to become a skilled software engineer and contribute to open-source projects while continuously
                                    learning new technologies.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Personal Interests */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                        className="bg-card rounded-2xl p-8 border border-border"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-[#6366f1] rounded-xl">
                                <Heart className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-foreground mb-3">Personal <span className='text-[#6366f1] font-instrument-serif italic font-medium'>Interests</span></h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Outside of coding, I enjoy designing graphics, learning about new tech trends, and playing strategy
                                    games.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <CTA />
        </section>
    )
}
