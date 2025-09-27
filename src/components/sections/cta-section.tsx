import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { ArrowRight, BookOpen } from "lucide-react";

const pageLinks = [
    { href: '/documents', title: 'Protocol Details', description: 'Dive deep into the technical architecture and smart contracts.' },
]

export default function CtaSection() {
  return (
    <section>
      <div className="text-center">
        <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Explore the Exnus Ecosystem</h2>
            <p className="max-w-2xl mx-auto text-center text-foreground/70 mb-12">
                Learn more about the core components of our protocol and what makes Exnus a revolutionary platform.
            </p>
        </ScrollReveal>
      </div>
      <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
          {pageLinks.map((link, index) => (
              <ScrollReveal key={link.href} delay={index * 150}>
                  <a href={link.href}>
                      <div className="h-full border hover:border-primary/50 transition-all duration-300 hover:shadow-lg p-6 flex items-center gap-6 rounded-lg bg-card">
                          <BookOpen className="w-8 h-8 text-primary"/>
                          <div>
                              <h3 className="text-xl font-bold text-foreground">{link.title}</h3>
                              <p className="text-foreground/70">{link.description}</p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-foreground/50 ml-auto"/>
                      </div>
                  </a>
              </ScrollReveal>
          ))}
      </div>
    </section>
  );
}
