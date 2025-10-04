import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { TrophyIcon } from "lucide-react";

export default function TheResult({ project }) {
    return (
        <>
            {/* Header section with icon and title */}
            <div className="flex justify-between items-center">
                <div>
                    {/* icon */}
                    <TrophyIcon className="h-7 w-7 text-gray-800 mb-2" />
                    {/* title */}
                    <h2 className="text-2xl font-bold text-gray-900">The Result:</h2>
                </div>
                {/* Step indicator or number badge */}

                <div className="rounded-full border-t-2 border-black/20 bg-white h-10 w-8 flex justify-center items-center font-bold">
                    {" "}
                    <span>3</span>
                </div>
            </div>
            {/* Description */}
            <p className="max-w-5xl mt-3 mb-6 font-medium text-gray-800">
                {project.result.text}
            </p>
            {project.result.images.map((img, index) => (
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
