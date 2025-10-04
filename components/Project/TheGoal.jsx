import { Goal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'

export default function TheGoal({ project }) {
    return (
        <div><div className="flex justify-between items-center">
            <div>
                {/* icon */}
                <Goal className="h-6 w-6 text-gray-500 mb-2" />
                {/* title */}
                <h2 className="text-2xl font-bold text-gray-900">
                    The Goal:
                </h2>
            </div>
            <div className="rounded-full border-t-2 border-black/20 bg-white h-10 w-8 flex justify-center items-center font-bold"> <span>1</span></div>
        </div>
            <p className="max-w-5xl mt-3 mb-6 font-medium text-gray-800">{project.goal.text}</p>
            {project.goal.images.map((img, index) => (
                <Image
                    key={index}
                    src={img}
                    alt={`${project.name} - image ${index + 1}`}
                    width={700}
                    height={478}
                    className="rounded-lg object-contain w-full h-auto mb-4"
                />
            ))}
            <Separator className={"my-6"} /></div>
    )
}