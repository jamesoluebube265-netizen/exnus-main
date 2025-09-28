import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <FeaturesSection />
      <div className="p-8 md:p-12 lg:p-20">
        <HowItWorksSection />
      </div>
      <div className="p-8 md:p-12 lg:p-20">
        <CtaSection />
      </div>
    </div>
  );
}
