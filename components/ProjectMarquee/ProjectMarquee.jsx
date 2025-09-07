import React from "react";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

export default function ProjectMarquee() {
    const imgs = [
        "https://i.ibb.co.com/ycXgH5k8/Product3.png",
        "https://i.ibb.co/Y9KM7Nd/Product.png",
        "https://i.ibb.co.com/v670yhpF/Product4.png",
        "https://i.ibb.co.com/v6p21wzp/Product2.png",
        "https://i.ibb.co.com/ZRwsQ8V4/Product5.png",
    ];

    return (
        <div className="my-8 md:12 lg:16">
            <Marquee className={"[--duration:40s]"}>
                {imgs.map((src, index) => (
                    <div key={index} className="py-2 px-2 border border-[#6366f1]/20 bg-gray-100 rounded-lg">
                        <Image
                            src={src}
                            alt={`product-${index}`}
                            width={800}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
