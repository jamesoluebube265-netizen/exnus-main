'use client';

import { useEffect, useState } from 'react';

const SPARKLE_COUNT = 30;

export function HeroBackground() {
  const [sparkles, setSparkles] = useState<{ top: string; left: string; delay: string; duration: string; }[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: SPARKLE_COUNT }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${2 + Math.random() * 3}s`,
      }));
    };
    setSparkles(generateSparkles());
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
            className="sphere-animation absolute w-[500px] h-[500px] bg-transparent rounded-full" 
            style={{
                transformStyle: 'preserve-3d',
                backgroundImage: `
                    radial-gradient(circle at center, transparent 60%, hsl(var(--primary) / 0.3)),
                    repeating-conic-gradient(from 0deg, hsl(var(--primary) / 0.5) 0deg 2deg, transparent 2deg 20deg)
                `,
            }}
        >
            <div className="absolute inset-0 rounded-full border-2 border-primary/40"></div>
        </div>
      </div>
      <div className="absolute inset-0">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary sparkle-animation"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
