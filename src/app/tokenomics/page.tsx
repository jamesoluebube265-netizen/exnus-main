import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import TokenomicsSection from "@/components/sections/tokenomics-section";

export default function TokenomicsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <TokenomicsSection />
      </main>
      <Footer />
    </div>
  );
}
