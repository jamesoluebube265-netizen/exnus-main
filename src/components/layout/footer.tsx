import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-headline text-lg font-bold">
            <span className="text-foreground">Exnus Protocol</span>
          </div>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Exnus Protocol. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 text-foreground/60 hover:text-foreground" /></a>
            <a href="#" aria-label="GitHub"><Github className="w-5 h-5 text-foreground/60 hover:text-foreground" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-foreground/60 hover:text-foreground" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
