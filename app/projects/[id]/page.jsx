import { SecondaryButton } from "@/components/Shared/Button";
import projects from "../../../data/projects.json";
import Link from "next/link";
import github from "../../../public/Icon/Social/GitHub.svg";
import Image from "next/image";
import TheGoal from "@/components/Project/TheGoal";
import TheChallenge from "@/components/Project/TheChallenge";

export default function ProjectDetails({ params }) {
    const { id } = params;
    const project = projects.find((project) => project.id === id);
    console.log(project);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <section className="font-figtree mt-28 md:mt-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mx-auto max-w-7xl">
                <div className="mx-6 lg:mx-8">
                    <h1 className="font-medium text-4xl text-gray-900">
                        {project.name}
                    </h1>
                    <p className="my-4 text-gray-500 text-base font-medium">
                        {project.description}
                    </p>
                    <div className="flex gap-3">
                        <Link href={project.url} target="_blank">
                            <SecondaryButton label="Live Site Preview" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={github}
                                    alt={"Github"}
                                    width={20}
                                    height={20}
                                    className="rounded-md h-10 w-10 p-[10px] border bg-gray-100"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-8 mt-8 border bg-gray-100 rounded-md p-5">
                        <div>
                            <p className="text-sm text-gray-500">Client</p>
                            <h2 className="font-semibold text-gray-700">
                                {project.client}
                            </h2>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Service Provided</p>
                            <h2 className="font-semibold text-gray-700">
                                {project.category.join(", ")}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="mx-6 lg:mx-8">
                    <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="rounded-lg"
                        loading="lazy"
                    />
                </div>
            </div>
            {/* Project Details */}
            <div className="mt-20 border rounded-4xl">
                <div className="mx-auto max-w-7xl">

                    <div className="mx-6 lg:mx-8 border-t-2 rounded-2xl p-6 my-14 bg-black/5">
                        <TheGoal project={project} />
                        <TheChallenge project={project} />
                    </div>
                </div>
            </div>
        </section>
    );
}
