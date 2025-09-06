import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';
import ScrollReveal from '../scroll-reveal';
import Link from 'next/link';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Founder & CEO', image: 'https://picsum.photos/400/400', dataAiHint: 'professional man', socials: { twitter: '#', linkedin: '#', github: '#' } },
  { name: 'Maria Garcia', role: 'Lead Protocol Engineer', image: 'https://picsum.photos/401/401', dataAiHint: 'professional woman', socials: { twitter: '#', linkedin: '#', github: '#' } },
  { name: 'Chen Wei', role: 'Head of Cryptography', image: 'https://picsum.photos/402/402', dataAiHint: 'professional man tech', socials: { twitter: '#', linkedin: '#', github: '#' } },
  { name: 'Emily Carter', role: 'Director of Ecosystem', image: 'https://picsum.photos/403/403', dataAiHint: 'professional woman smiling', socials: { twitter: '#', linkedin: '#', github: '#' } },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28">
      <div className="px-4 md:px-6">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the Team</h2>
          <p className="max-w-2xl mx-auto text-white/70 mt-4">
            The brilliant minds behind the Exnus Protocol, dedicated to building a decentralized future.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 150}>
              <div className="text-center">
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    data-ai-hint={member.dataAiHint}
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                   <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                   </div>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <Link href={member.socials.twitter}><Twitter className="w-5 h-5 text-white/60 hover:text-white" /></Link>
                  <Link href={member.socials.linkedin}><Linkedin className="w-5 h-5 text-white/60 hover:text-white" /></Link>
                  <Link href={member.socials.github}><Github className="w-5 h-5 text-white/60 hover:text-white" /></Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
