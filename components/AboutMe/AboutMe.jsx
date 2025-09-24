import React from "react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { StackMarquee } from "./StackMarquee";
import Link from "next/link";
import PrimaryButton from "../Shared/Button";

export default function AboutMe() {
    const skills = [
        "Frontend Development",
        "Backend Development",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
    ];
    const socials = [
        {
            name: "Github",
            icon: "./icon/social/GitHub.svg",
            link: "https://github.com/TamimAhmedCD",
        },
        {
            name: "LinkedIn",
            icon: "./icon/social/LinkedIn.svg",
            link: "https://www.linkedin.com/in/tamim-ahmed-dev",
        },
        {
            name: "WhatsApp",
            icon: "./icon/social/WhatsApp.svg",
            link: "https://wa.link/or65v8",
        },
    ];
    return (
        <section className="mx-auto max-w-7xl font-figtree">
            <div className="mx-6 lg:mx-8">
                {" "}
                <div className="flex items-center justify-center">
                    <div
                        className={cn(
                            "group rounded-full border border-[#6366f1]/40 bg-[#6366f1]/10 text-sm sm:text-base transition-all ease-in hover:cursor-pointer hover:bg-[#6366f1]/20 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                        )}
                    >
                        <AnimatedShinyText className="inline-flex items-center text-xs sm:text-base text-[#6366f1]/80 justify-center px-3 sm:px-4 py-1 transition ease-out hover:duration-300 hover:dark:text-neutral-400">
                            <span>✨ About Me</span>{" "}
                        </AnimatedShinyText>
                    </div>
                </div>
                {/* Heading */}
                <div className="mt-6 mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-2">
                        Tamim Ahmed,{" "}
                        <span className="font-medium text-[#6366f1] font-instrument-serif italic">
                            Your Developer
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 text-center">
                        Crafting modern web applications with clean code and creative
                        design.
                    </p>
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-3 sm:gap-6">
                    {/* Left Side (Image + Intro) */}
                    <div className="bg-gray-100/90 p-5 rounded-lg shadow-2xl 
                  col-span-1 sm:col-span-1 lg:col-span-4">
                        <Image
                            src="https://i.ibb.co.com/NnN0hMCW/10003514303.jpg"
                            alt="tamim"
                            width={1000}
                            height={1000}
                            className="w-full h-96 sm:h-60 lg:h-[350px] object-cover rounded-md shadow-xl"
                        />
                        <h3 className="text-gray-900 text-xl sm:text-2xl mt-3 font-bold">
                            Hello I am Tamim Ahmed
                        </h3>
                        <p className="text-md text-gray-800">
                            Frontend & Backend Developer based in Bangladesh.
                        </p>
                        {/* Links */}
                        <div className="flex items-center gap-3 mt-5 mb-5">
                            {socials.map((social, index) => (
                                <React.Fragment key={index}>
                                    <Link
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-500 hover:text-gray-700"
                                    >
                                        <Image
                                            src={social.icon}
                                            alt={social.name}
                                            width={20}
                                            height={20}
                                            className="rounded-md h-12 w-12 p-2 border bg-white"
                                        />
                                    </Link>

                                    {/* Add separator unless it's the last icon */}
                                    {index < socials.length - 1 && (
                                        <Separator orientation="vertical" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <Separator />
                        <Link href='tel:+8801742982184'><PrimaryButton label="Contact Me" className="mt-5" /></Link>
                    </div>

                    {/* Right Side (Details + Skills) */}
                    <div className="bg-gray-100/90 p-5 rounded-lg shadow-2xl 
                  col-span-1 sm:col-span-1 lg:col-span-6 text-gray-700">
                        <p className="text-lg">
                            I'm Tamim Ahmed, a dedicated Frontend & Backend Developer based in
                            Sylhet, Bangladesh. I specialize in building modern web
                            applications with clean code, creative design, and seamless
                            functionality to deliver exceptional digital experiences.
                        </p>

                        <Separator className="my-6 data-[orientation=horizontal]:h-[2px]" />

                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-white px-2 rounded-md py-2 font-semibold text-gray-500 text-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <Separator className="my-6 data-[orientation=horizontal]:h-[2px]" />

                        <div>
                            <h5 className="font-semibold text-gray-500 text-xl mb-3">Stack</h5>
                            <StackMarquee />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
