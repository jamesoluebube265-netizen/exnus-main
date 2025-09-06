import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import RoadmapSection from "@/components/sections/roadmap-section";

export default function RoadmapPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
}
