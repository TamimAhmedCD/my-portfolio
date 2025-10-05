import projects from "../../../data/projects.json";
import TheGoal from "@/components/Project/TheGoal";
import TheChallenge from "@/components/Project/TheChallenge";
import TheResult from "@/components/Project/TheResult";
import DetailsHeader from "@/components/Project/DetailsHeader";
import CTA from "@/components/CTA/CTA";

export default function ProjectDetails({ params }) {
    const { id } = params;
    const project = projects.find((project) => project.id === id);
    console.log(project);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <section className="font-figtree mt-28 md:mt-36">
                <DetailsHeader project={project} />
                {/* Project Details */}
                <div className="mt-20 border rounded-4xl">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-6 lg:mx-8 border-t-2 rounded-2xl p-6 my-14 bg-black/5">
                            <TheGoal project={project} />
                            <TheChallenge project={project} />
                            <TheResult project={project} />
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </>
    );
}
