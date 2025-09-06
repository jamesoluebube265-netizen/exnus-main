import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import ProtocolSection from '@/components/sections/protocol-section';
import TokenomicsSection from '@/components/sections/tokenomics-section';
import TeamSection from '@/components/sections/team-section';
import RoadmapSection from '@/components/sections/roadmap-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ProtocolSection />
        <TokenomicsSection />
        <RoadmapSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
