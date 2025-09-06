
import { Twitter, Github, Linkedin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-headline text-lg font-bold">
            <span className="text-foreground">Exnus Protocol</span>
          </div>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Exnus Protocol. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://x.com/exnusprotocol?t=erRcFQecZLsl-pW3MGFC9g&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="w-5 h-5 text-foreground/60 hover:text-foreground" /></a>
            <a href="https://t.me/exnusprotocolchat" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><Send className="w-5 h-5 text-foreground/60 hover:text-foreground" /></a>
            <a href="#" aria-label="GitHub"><Github className="w-5 h-5 text-foreground/60 hover:text-foreground" /></a>
            <a href="https://www.linkedin.com/in/exnus-protocol-248a85277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-foreground/60 hover:text-foreground" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
