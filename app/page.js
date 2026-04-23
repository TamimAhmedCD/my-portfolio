import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe/ContactMe";
import CTA from "@/components/CTA/CTA";
import Hero from "@/components/Hero/Hero";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative font-sans">
      {/* Hero */}
      <Hero />
      <AboutMe />
      <Work />
      <ContactMe />
      <CTA />
    </div>
  );
}
