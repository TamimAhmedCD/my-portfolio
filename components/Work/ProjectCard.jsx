import Image from "next/image";
import React from "react";
import { SecondaryButton } from "../Shared/Button";
import Link from "next/link";

export default function ProjectCard({ projects }) {
    return (
        <div>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="border rounded-md bg-gray-100/90 p-6 grid grid-cols-5 gap-10 mb-6"
                >
                    <div className="col-span-2 flex flex-col justify-between">
                        <div>
                            <Image
                                src={project.icon}
                                alt={project.name}
                                width={40}
                                height={40}
                            />
                            <h2 className="my-4 text-4xl font-bold text-gray-900">
                                {project.subject}
                            </h2>
                            <div className="border px-2 rounded-full py-1 text-gray-500 text-sm inline-flex">
                                {project.category.map((category, index) => (
                                    <span
                                        key={index}
                                        className="after:content-[',\00a0'] last:after:content-['']"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-500 mt-4 font-medium">
                                {project.shortDes}
                            </p>
                        </div>
                        {/* button */}
                        <div className="flex">
                            <Link href={`work/${project.id}`}><SecondaryButton label="View Project" /></Link>
                        </div>

                        {/* <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">{project.name}</h3>
                        </div> */}
                        {/*  */}
                    </div>
                    {/* Description */}
                    {/* <p className="text-gray-700 text-sm">{project.description}</p>
                    <p className="text-gray-500 text-xs">{project.shortDes}</p> */}
                    <div className="col-span-3 place-items-end">
                        <Image
                            src={project.thumbnail}
                            alt={project.name}
                            width={700}
                            height={478}
                            className="rounded-lg object-contain"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
