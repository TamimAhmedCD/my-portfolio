import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

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

      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />
    </div>
  );
}
