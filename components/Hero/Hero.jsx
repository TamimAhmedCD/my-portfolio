import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="mx-6 lg:mx-8 max-w-7xl mt-48 font-figtree">
            <div className="flex items-center justify-center">
                <div
                    className={cn(
                        "group rounded-full border border-[#6366f1]/40 bg-[#6366f1]/10  text-base transition-all ease-in hover:cursor-pointer hover:bg-[#6366f1]/20 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center text-[#6366f1]/80 justify-center px-4 py-1 transition ease-out hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ Crafting modern web experiences</span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>
            <div className="mx-auto max-w-4xl text-center mt-3">
                <h1 className="text-6xl font-medium leading-20 text-gray-900">
                    Empowering Businesses With Smart{" "}
                    <span className="font-instrument-serif italic text-[#6366f1]">
                        Web Development
                    </span>
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    I build responsive, user-friendly web applications from front-end to
                    back-end, turning ideas into seamless digital experiences.
                </p>
            </div>
            <div className="flex justify-center gap-5 mt-5">
                {" "}
                <button class="relative text-white bg-gray-800 shadow-2xl cursor-pointer group rounded-lg">
                    <span class="absolute inset-0 overflow-hidden rounded-lg">
                        <span class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_120%_at_50%_60%,#6366f1_25%,rgba(56,189,248,0)_90%)] opacity-40 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div class="relative z-10 flex items-center px-8 py-2 space-x-2 rounded-lg bg-gray-950/50 ring-1 ring-white/10">
                        <span>Get Started</span>
                    </div>
                    <span class="absolute -bottom-0 bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>

                <Button variant={"outline"} className={"py-2 px-8"}>
                    Download CV
                </Button>
            </div>
        </div>
    );
}
