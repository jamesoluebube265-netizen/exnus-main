
'use client';

import { Twitter, Linkedin, Send } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <footer className="bg-purple-700 text-white">
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80">
            &copy; 2025 Exnus Protocol. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://x.com/exnusprotocol?t=erRcFQecZLsl-pW3MGFC9g&s=09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 hover:text-white">
              <Twitter className="w-5 h-5" />
              <span>X</span>
            </a>
            <a href="https://t.me/exnusprotocolchat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 hover:text-white">
              <Send className="w-5 h-5" />
              <span>Telegram</span>
            </a>
            <a href="https://www.linkedin.com/in/exnus-protocol-248a85277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 hover:text-white">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
