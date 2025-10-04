import Link from 'next/link';
import React from 'react';
import { SecondaryButton } from '../Shared/Button';
import Image from 'next/image';
import github from "../../public/Icon/Social/GitHub.svg";

// Component to display the project header details including title, description, links, client info, and thumbnail
export default function DetailsHeader({ project }) {
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mx-auto max-w-7xl items-center"
        >
            {/* Left section: Project info and links */}
            <div className="mx-6 lg:mx-8">
                {/* Project name */}
                <h1 className="font-medium text-4xl text-gray-900">
                    {project.name}
                </h1>

                {/* Project description */}
                <p className="my-4 text-gray-500 text-base font-medium">
                    {project.description}
                </p>

                {/* Action buttons: Live site preview and GitHub link */}
                <div className="flex gap-3">
                    {/* Live site link */}
                    <Link href={project.url} target="_blank">
                        <SecondaryButton label="Live Site Preview" />
                    </Link>

                    {/* GitHub icon link */}
                    <div className="flex items-center gap-3">
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={github} // GitHub icon
                                alt={"Github"}
                                width={20}
                                height={20}
                                className="rounded-md h-10 w-10 p-[10px] border bg-gray-100"
                            />
                        </Link>
                    </div>
                </div>

                {/* Project metadata: client and service/category */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-8 border bg-gray-100 rounded-md p-5">
                    {/* Client info */}
                    <div>
                        <p className="text-sm text-gray-500">Client</p>
                        <h2 className="font-semibold text-gray-700">
                            {project.client}
                        </h2>
                    </div>

                    {/* Services / categories provided */}
                    <div>
                        <p className="text-sm text-gray-500">Service Provided</p>
                        <h2 className="font-semibold text-gray-700">
                            {project.category.join(", ")}
                        </h2>
                    </div>
                </div>
            </div>

            {/* Right section: Project thumbnail */}
            <div className="mx-6 lg:mx-8">
                <img
                    src={project.thumbnail} // Project image
                    alt={project.name}
                    className="rounded-lg w-full h-auto object-cover"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
