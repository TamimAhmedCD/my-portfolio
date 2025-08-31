import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 60% 10%, #fff 50%, #6366f1 100%)",
        }}
      />
      {/* Your Content/Components */}
      <Header />
    </div>
  );
}
