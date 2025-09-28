
import RoadmapSection from "@/components/sections/roadmap-section";
import ScrollReveal from "@/components/scroll-reveal";

export default function RoadmapPage() {
  return (
    <div className="space-y-12">
      <RoadmapSection />
      <section>
        <div className="container px-4 md:px-6 py-12">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Beyond the Roadmap: Our Vision for the Future
              </h2>
              <p className="mt-4 text-foreground/70">
                The milestones outlined above represent the foundational steps in our journey to build a more equitable and decentralized digital future. However, our vision extends far beyond these initial phases. We are committed to continuous innovation, ecosystem growth, and empowering our community to shape the future of Web3.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8 text-left">
              <div className="relative p-6 border rounded-lg bg-card overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(/2.jpeg)` }}
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="relative z-10 theme-gold">
                  <h3 className="font-bold text-xl text-primary">Ecosystem Expansion</h3>
                  <p className="mt-2 text-white/80">
                    We plan to forge strategic partnerships with other innovative projects and platforms to broaden the utility of the Exnus protocol. Our goal is to create a seamless, interconnected network of dApps that leverage our unique incentive models to foster vibrant and engaged communities across the Web3 space.
                  </p>
                </div>
              </div>
              <div className="relative p-6 border rounded-lg bg-card overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(/2.jpeg)` }}
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="relative z-10 theme-gold">
                  <h3 className="font-bold text-xl text-primary">Decentralization & Autonomy</h3>
                  <p className="mt-2 text-white/80">
                    True decentralization is our ultimate objective. As the protocol matures, we will progressively hand over more control to the Exnus DAO. We envision a future where all protocol upgrades, treasury management, and strategic decisions are governed entirely by our community of token holders, creating a self-sustaining and autonomous organization.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
           <p className="text-center text-foreground/60 mt-12 max-w-2xl mx-auto">
              Join us as we build the next generation of decentralized infrastructure. The future is collaborative, transparent, and community-owned.
            </p>
        </div>
      </section>
    </div>
  );
}
