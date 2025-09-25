import Image from "next/image";
import React from "react";
import { SecondaryButton } from "../Shared/Button";
import Link from "next/link";

export default function ProjectCard({ projects }) {
    return (
        <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="border rounded-md bg-gray-100/90 p-6 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10"
                >
                    {/* Left Section */}
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-between order-1 md:order-1">
                        <div>
                            <Image
                                src={project.icon}
                                alt={project.name}
                                width={40}
                                height={40}
                                className="mb-2"
                            />
                            <h2 className="my-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                {project.subject}
                            </h2>
                            <div className="border px-2 rounded-full py-1 text-gray-500 text-sm inline-flex flex-wrap gap-1">
                                {project.category.map((category, i) => (
                                    <span
                                        key={i}
                                        className="after:content-[',\00a0'] last:after:content-['']"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-500 mt-4 font-medium text-sm sm:text-base">
                                {project.shortDes}
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-2">
                        <Image
                            src={project.thumbnail}
                            alt={project.name}
                            width={700}
                            height={478}
                            className="rounded-lg object-contain w-full h-auto max-w-full mb-4 md:mb-0"
                        />

                        {/* Button: shown below image on mobile, stays in left on desktop */}
                        <div className="md:hidden flex">
                            <Link href={`work/${project.id}`}>
                                <SecondaryButton label="View Project" />
                            </Link>
                        </div>
                    </div>

                    {/* Button for desktop: stays in left section */}
                    <div className="hidden md:flex col-span-2 mt-4">
                        <Link href={`work/${project.id}`}>
                            <SecondaryButton label="View Project" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
