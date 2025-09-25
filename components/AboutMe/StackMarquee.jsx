import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

import html from "../../public/Icon/Stack/HTML.svg";
import css from "../../public/Icon/Stack/CSS.svg";
import react from "../../public/Icon/Stack/React.js.svg";
import js from "../../public/Icon/Stack/Javascript.svg";
import next from "../../public/Icon/Stack/Next.js.svg";
import MongoDB from "../../public/Icon/Stack/MongoDB.svg";
import node from "../../public/Icon/Stack/Node.js.svg";
import express from "../../public/Icon/Stack/Express.js.svg";

const reviews = [
    {
        name: "HTML",
        work: "Markup Language",
        img: html,
    },
    {
        name: "CSS",
        work: "Styling Language",
        img: css,
    },
    {
        name: "JavaScript",
        work: "Programming Language",
        img: js,
    },
    {
        name: "React.js",
        work: "JavaScript library",
        img: react,
    },
    {
        name: "Next.js",
        work: "React Framework",
        img: next,
    },
    {
        name: "MongoDB",
        work: "NoSQL Database",
        img: MongoDB,
    },
    {
        name: "Node.js",
        work: "JavaScript Runtime",
        img: node,
    },
    {
        name: "Express.js",
        work: "Backend Framework",
        img: express,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    work,
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-4">
                <Image className="p-2 bg-white rounded-md border h-13 w-13" width="45" height="45" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="dark:text-white font-bold">
                        {name}
                    </figcaption>
                    <p className="text-sm font-medium dark:text-white/40 text-gray-400">{work}</p>
                </div>
            </div>
        </figure>
    );
};

export function StackMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100/90"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100/90"></div>
        </div>
    );
}
