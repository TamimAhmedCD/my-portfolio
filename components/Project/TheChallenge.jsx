import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

export default function TheChallenge({ project }) {
    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    {/* icon */}
                    <IoExtensionPuzzleOutline className="h-7 w-7 text-gray-800 mb-2" />
                    {/* title */}
                    <h2 className="text-2xl font-bold text-gray-900">The Challenge:</h2>
                </div>
                <div className="rounded-full border-t-2 border-black/20 bg-white h-10 w-8 flex justify-center items-center font-bold">
                    {" "}
                    <span>2</span>
                </div>
            </div>
            {/* Description */}
            <p className="max-w-5xl mt-3 mb-6 font-medium text-gray-800">
                {project.challenge.text}
            </p>
            {project.challenge.images.map((img, index) => (
                <Image
                    key={index}
                    src={img}
                    alt={`${project.name} - image ${index + 1}`}
                    width={1600}
                    height={1200}
                    className="rounded-lg object-contain w-full h-auto mb-4"
                />
            ))}
            {/* Horizontal separator line */}
            <Separator className={"my-6"} />
        </>
    );
}
