import { Twitter, Linkedin, Send } from "lucide-react";

const DiscordIcon = () => (
    <svg
      role="img"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8245-.6662 1.285-.01.023-.021.04-.03.0645a17.933 17.933 0 00-3.4147 0 .058.058 0 00-.031-.0645c-.2208-.4604-.4552-.9097-.6662-1.285a.075.075 0 00-.0785-.037 19.7913 19.7913 0 00-4.8851 1.5152.067.067 0 00-.037.0785c.3416 1.7342.9461 3.321 1.7453 4.7437-.152.12-.294.24-.442.36-.02.015-.04.03-.06.045-.211.1652-.412.3304-.602.4957a.075.075 0 00-.01.1055c.19.27.38.54.57.81a.075.075 0 00.105.01c.2-.15.4-.3.6-.45.02-.015.04-.03.06-.045.18-.12.35-.24.52-.36.26-.18.52-.36.78-.51a14.22 14.22 0 00-1.6152 4.4176.075.075 0 00.045.085c.29.12.58.24.87.36a.075.075 0 00.085-.01c.36-.24.71-.51 1.05-.78a.075.075 0 00.01-.105c-.18-.24-.36-.48-.54-.72a.075.075 0 00-.105-.015c-.21.15-.42.3-.63.45a5.531 5.531 0 01-1.92-1.26.075.075 0 01-.01-.105c.12-.15.24-.3.36-.45.015-.02.03-.04.045-.06a1.18 1.18 0 00.015-.015l.09-.075c.03-.03.06-.06.09-.09a15.201 15.201 0 015.19 0c.03.03.06.06.09.09l.09.075a1.18 1.18 0 00.015.015c.015.02.03.04.045.06.12.15.24.3.36.45a.075.075 0 01-.01.105c-.64.84-1.28 1.68-1.92 2.52a.075.075 0 00.045.105c.21.15.42.3.63.45.21.15.42.3.63.45a.075.075 0 00.105-.01c.18-.27.36-.54.54-.81a.075.075 0 00.01-.105c-.18-.15-.39-.33-.6-.495-.02-.015-.04-.03-.06-.045-.15-.12-.3-.24-.44-.36.79-1.42 1.4-3 1.74-4.74a.067.067 0 00-.037-.0785zm-4.75 6.27a2.91 2.91 0 01-2.91-2.91 2.91 2.91 0 012.91-2.91 2.91 2.91 0 012.91 2.91 2.91 2.91 0 01-2.91 2.91zm-6.18 0a2.91 2.91 0 01-2.91-2.91 2.91 2.91 0 012.91-2.91 2.91 2.91 0 012.91 2.91 2.91 2.91 0 01-2.91 2.91z" />
    </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground theme-gold">
      <div 
        className="px-6 py-4"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Exnus Protocol. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://x.com/exnusprotocol?t=erRcFQecZLsl-pW3MGFC9g&s=09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/90 hover:text-white">
              <Twitter className="w-5 h-5" />
              <span>X</span>
            </a>
            <a href="https://t.me/exnusprotocolchat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/90 hover:text-white">
              <Send className="w-5 h-5" />
              <span>Telegram</span>
            </a>
            <a href="https://discord.gg/v8MpYYFdP8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/90 hover:text-white">
                <DiscordIcon />
                <span>Discord</span>
            </a>
            <a href="https://www.linkedin.com/in/exnus-protocol-248a85277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/90 hover:text-white">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
