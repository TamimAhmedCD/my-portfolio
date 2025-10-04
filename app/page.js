import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe/ContactMe";
import CTA from "@/components/CTA/CTA";
import Hero from "@/components/Hero/Hero";
import ProjectMarquee from "@/components/ProjectMarquee/ProjectMarquee";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative font-sans">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(125% 125% at 60% 10%, #fff 50%, #6366f1 100%)",
        }}
      />

      {/* Hero */}
      <Hero />
      <ProjectMarquee />
      <AboutMe />
      <Work />
      <ContactMe />
      <CTA />
    </div>
  );
}
