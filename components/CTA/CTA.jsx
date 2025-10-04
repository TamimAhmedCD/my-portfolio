"use client"

import { Mail, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Silk from "../Silk"

export default function CTA() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="mx-auto max-w-7xl font-figtree my-8">
            <div className="mx-6 lg:mx-8">
                <div className="relative w-full min-h-96 flex justify-items-start items-center overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 z-0">
                        <Silk speed={5} scale={1} color="#6366f1" noiseIntensity={1} rotation={0} />
                    </div>

                    {/* Content */}
                    <div className="z-10 text-white p-10 lg:p-16 max-w-3xl">
                        <div
                            className={`inline-flex px-4 py-2 bg-white/10 text-white rounded-full uppercase text-sm font-medium tracking-wider transition-all duration-700 backdrop-blur-sm border border-white/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: "100ms" }}
                        >
                            <span>Let's Connect</span>
                        </div>

                        <h2
                            className={`text-5xl lg:text-7xl font-bold leading-tight mt-6 mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: "200ms" }}
                        >
                            Ready to Start <br />
                            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                                Something Great?
                            </span>
                        </h2>

                        <p
                            className={`text-white/80 text-lg lg:text-xl leading-relaxed max-w-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: "300ms" }}
                        >
                            Whether you have a project in mind or just want to chat about possibilities, I'm here to help bring your
                            ideas to life.
                        </p>

                        <div
                            className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: "400ms" }}
                        >
                            <Link
                                href="mailto:tamim20072@gmail.com"
                                className="group flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                            >
                                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                <span className="font-medium">tamim20072@gmail.com</span>
                                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                            </Link>

                            <Link
                                href="tel:+8801742982184"
                                className="group flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                            >
                                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                <span className="font-medium">+880 (174) 298-2184</span>
                                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
