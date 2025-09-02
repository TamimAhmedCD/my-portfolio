import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import PrimaryButton from "../Shared/Button";

export default function Hero() {
    return (
        <div className="mx-auto max-w-7xl mt-32 sm:mt-40 lg:mt-48 font-figtree">
            {/* Shiny Text */}
            <div className="flex items-center justify-center">
                <div
                    className={cn(
                        "group rounded-full border border-[#6366f1]/40 bg-[#6366f1]/10 text-sm sm:text-base transition-all ease-in hover:cursor-pointer hover:bg-[#6366f1]/20 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center text-xs sm:text-base text-[#6366f1]/80 justify-center px-3 sm:px-4 py-1 transition ease-out hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ Crafting modern web experiences</span>
                        <ArrowRightIcon className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>

            {/* Heading */}
            <div className="mx-auto max-w-4xl text-center mt-3 px-2 sm:px-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug md:leading-tight lg:leading-[5rem] text-gray-900">
                    Empowering Businesses With Smart{" "}
                    <span className="font-instrument-serif italic text-[#6366f1]">
                        Web Development
                    </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto mt-4">
                    I build responsive, user-friendly web applications from front-end to
                    back-end, turning ideas into seamless digital experiences.
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-6">
                <PrimaryButton label="Hire Me" />
                <Button variant={"outline"} className={"py-2 px-8"}>
                    Download CV
                </Button>
            </div>
        </div>
    );
}
