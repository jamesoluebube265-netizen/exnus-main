

import { Twitter, Linkedin, Send, GitMerge } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div 
        className="px-4 md:px-6 py-8"
        style={{
            background: 'linear-gradient(135deg, hsl(0 0% 10%) 0%, hsl(45 90% 20% / 0.3) 100%), hsl(0 0% 5%)'
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-headline text-lg font-bold">
            <span className="text-accent">Exnus Protocol</span>
          </div>
          <p className="text-sm text-accent/70">
            &copy; {new Date().getFullYear()} Exnus Protocol. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://x.com/exnusprotocol?t=erRcFQecZLsl-pW3MGFC9g&s=09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent/80 hover:text-accent">
              <Image src="/x.jpg" alt="X" width={20} height={20} />
              <span>X</span>
            </a>
            <a href="https://t.me/exnusprotocolchat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent/80 hover:text-accent">
              <Image src="/tg.jpg" alt="Telegram" width={20} height={20} />
              <span>Telegram</span>
            </a>
            <a href="httpss://discord.gg/v8MpYYFdP8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent/80 hover:text-accent">
                <Image src="/discord.jpg" alt="Discord" width={20} height={20} />
                <span>Discord</span>
            </a>
            <a href="https://www.linkedin.com/in/exnus-protocol-248a85277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent/80 hover:text-accent">
              <Image src="/link.jpg" alt="LinkedIn" width={20} height={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
