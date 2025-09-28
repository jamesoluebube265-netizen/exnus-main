import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <div 
        className="space-y-20 rounded-lg p-8"
        style={{
          backgroundImage: `url(/2.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
      </div>
    </div>
  );
}
