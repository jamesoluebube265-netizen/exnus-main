import { Zap, Twitter, Github, Linkedin } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-headline text-lg font-bold">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-white">Exnus Protocol</span>
          </div>
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Exnus Protocol. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter"><Twitter className="w-5 h-5 text-white/60 hover:text-white" /></Link>
            <Link href="#" aria-label="GitHub"><Github className="w-5 h-5 text-white/60 hover:text-white" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-white/60 hover:text-white" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
