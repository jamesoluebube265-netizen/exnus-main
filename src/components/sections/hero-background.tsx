'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const SPARKLE_COUNT = 30;

export function HeroBackground() {
  const [sparkles, setSparkles] = useState<{ top: string; left: string; delay: string; duration: string; }[]>([]);
  const [isReady, setIsReady] = useState(false);

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

    const timer = setTimeout(() => {
        setIsReady(true);
    }, 500); // Delay to match content animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
        "absolute inset-0 -z-10 overflow-hidden transition-opacity duration-1000",
        isReady ? "opacity-100" : "opacity-0"
    )}>
        {/* God-ray effect from the top */}
        <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[300px] bg-no-repeat"
            style={{
                backgroundImage: 'radial-gradient(ellipse 50% 100% at 50% 0%, hsl(var(--primary) / 0.15), transparent 60%)',
            }}
        />

      <div className="absolute inset-0 flex items-center justify-center">
        <div 
            className="sphere-animation absolute w-[500px] h-[500px] bg-transparent rounded-full" 
            style={{
                transformStyle: 'preserve-3d',
                backgroundImage: `
                    radial-gradient(circle at center, transparent 65%, hsl(var(--primary) / 0.3)),
                    repeating-conic-gradient(from 0deg, hsl(var(--primary) / 0.5) 0deg 1.5deg, transparent 1.5deg 15deg)
                `,
            }}
        >
            <div className="absolute inset-0 rounded-full border border-primary/30"></div>
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
    </div>
  );
}
