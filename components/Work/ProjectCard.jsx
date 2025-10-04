import Image from "next/image";
import React from "react";
import { SecondaryButton } from "../Shared/Button";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ProjectCard({ projects }) {
    return (
        <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="border rounded-md bg-gray-100/90 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10"
                >
                    {/* Left section */}
                    <div className="col-span-2 flex flex-col justify-between order-1">
                        <div>
                            <Image
                                src={project.icon}
                                alt={project.name}
                                width={40}
                                height={40}
                                className="mb-2"
                            />
                            <h2 className="my-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
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

                        {/* Desktop button */}
                        <div className="hidden md:flex mt-6">
                            <Link href={`/projects/${project.id}`}>
                                <SecondaryButton label="View Project" />
                            </Link>
                        </div>
                    </div>

                    {/* Right section (image + mobile button) */}
                    <div className="col-span-3 flex flex-col order-2">
                        <Image
                            src={project.thumbnail}
                            alt={project.name}
                            width={700}
                            height={478}
                            className="rounded-lg object-contain w-full h-auto"
                        />
                        {/* Mobile button (below image) */}
                        <div className="flex md:hidden justify-center mt-6">
                            <Link href={`/projects/${project.id}`} className="w-full">
                                <Button variant={"outline"} className={"text-gray-800 font-medium w-full"}>View Project</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
