import ProjectCard from '@/components/Work/ProjectCard'
import React from 'react'
import projects from '../../data/projects.json'

export default function Projects() {
    return (
        <div className='mx-auto max-w-7xl font-figtree mt-28 md:mt-36'>
            <div className='mx-6 lg:mx-8'>
                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-2">
                        Featured{" "}
                        <span className="font-medium text-[#6366f1] font-instrument-serif italic">
                            Projects
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        Showcasing innovative web solutions built with modern
                        technologies, clean architecture, and creative design.
                    </p>
                </div>
                <ProjectCard projects={projects} />
            </div>
        </div>
    )
}
