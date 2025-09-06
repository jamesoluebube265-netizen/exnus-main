import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const pageLinks = [
    { href: '/protocol', title: 'Protocol Details', description: 'Dive deep into the technical architecture and smart contracts.' },
    { href: '/tokenomics', title: 'Tokenomics', description: 'Explore our token allocation and economic model.' },
    { href: '/roadmap', title: 'Roadmap', description: 'Follow our journey and upcoming milestones.' },
    { href: '/team', title: 'The Team', description: 'Meet the minds building the Exnus Protocol.' },
]

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Explore the Exnus Ecosystem</h2>
            <p className="max-w-2xl mx-auto text-center text-white/70 mb-12">
                Learn more about the core components of our protocol and what makes Exnus a revolutionary platform.
            </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pageLinks.map((link, index) => (
                <ScrollReveal key={link.href} delay={index * 150}>
                    <Link href={link.href}>
                        <div className="h-full border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 p-6 flex items-center gap-6 rounded-lg">
                            <BookOpen className="w-8 h-8 text-accent"/>
                            <div>
                                <h3 className="text-xl font-bold text-white">{link.title}</h3>
                                <p className="text-white/70">{link.description}</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-white/50 ml-auto"/>
                        </div>
                    </Link>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
}
