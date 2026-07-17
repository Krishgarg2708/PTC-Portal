import { useMemo } from 'react';

// Purely decorative, full-viewport backdrop for a night-sky "power grid":
// a deep void gradient, drifting nebula clouds in the brand's electric
// palette, a faint circuit-like grid, a twinkling starfield, streaking
// shooting stars, and a handful of softly rising embers.
const STAR_COUNT = 90;
const EMBER_COUNT = 12;
const SHOOTING_STAR_COUNT = 16;

export default function AmbientBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }).map((_, i) => {
        const size = Math.random() < 0.82 ? 1 + Math.random() * 1.4 : 2 + Math.random() * 1.6;
        const top = Math.round(Math.random() * 100);
        const left = Math.round(Math.random() * 100);
        const duration = 2.4 + Math.random() * 4.2;
        const delay = Math.round(Math.random() * 60) / 10;
        const min = (0.1 + Math.random() * 0.2).toFixed(2);
        const max = (0.6 + Math.random() * 0.4).toFixed(2);
        return { id: i, size, top, left, duration, delay, min, max };
      }),
    []
  );

  const embers = useMemo(
    () =>
      Array.from({ length: EMBER_COUNT }).map((_, i) => {
        const size = 3 + Math.round(Math.random() * 5);
        const left = Math.round(Math.random() * 100);
        const duration = 16 + Math.round(Math.random() * 14);
        const delay = Math.round(Math.random() * 18);
        const driftX = Math.round((Math.random() - 0.5) * 120);
        const palette = ['text-accent bg-accent/40', 'text-plasma bg-plasma/40', 'text-warning bg-warning/40'];
        const color = palette[i % palette.length];
        return { id: i, size, left, duration, delay, driftX, color };
      }),
    []
  );

  const shootingStars = useMemo(
    () =>
      Array.from({ length: SHOOTING_STAR_COUNT }).map((_, i) => {
        // Alternate between two diagonal "families" so streaks criss-cross
        // the sky instead of all falling the same way.
        const goingLeft = i % 2 === 0;
        const startX = goingLeft
          ? 25 + Math.round(Math.random() * 75)
          : Math.round(Math.random() * 75);
        const startY = Math.round(Math.random() * 65);
        const angle = goingLeft
          ? -22 - Math.round(Math.random() * 20)
          : 200 + Math.round(Math.random() * 20);
        const travelDist = 55 + Math.round(Math.random() * 35);
        const travelX = goingLeft ? -travelDist : travelDist;
        const travelY = 35 + Math.round(Math.random() * 45);

        // Roughly a fifth are big, dramatic streaks; the rest are quicker
        // and smaller, for a natural, layered sense of depth.
        const isBig = Math.random() < 0.22;
        const trailLength = isBig ? 260 + Math.round(Math.random() * 60) : 110 + Math.round(Math.random() * 90);
        const headSize = isBig ? 8 : 4 + Math.round(Math.random() * 2);
        const duration = isBig ? 3.4 + Math.random() * 1.4 : 5 + Math.random() * 4;
        const delay = Math.round(Math.random() * 90) / 10;

        const palette = ['text-accent', 'text-plasma', 'text-warning', 'text-white'];
        const color = palette[i % palette.length];
        return {
          id: i,
          startX,
          startY,
          angle,
          travelX,
          travelY,
          trailLength,
          headSize,
          duration,
          delay,
          color,
        };
      }),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Deep space base */}
      <div className="void-gradient absolute inset-0" />

      {/* Faint drifting circuit grid across the whole viewport */}
      <div className="page-grid animate-mesh-shift absolute inset-0" />

      {/* Large nebula gradient clouds */}
      <div className="aurora-orb animate-float-slower absolute left-[-12rem] top-[-6rem] h-[28rem] w-[28rem] bg-plasma/20" />
      <div className="aurora-orb animate-float-slow absolute right-[-10rem] top-[30%] h-[24rem] w-[24rem] bg-accent/20" />
      <div className="aurora-orb animate-float-slower absolute bottom-[-10rem] left-[18%] h-[26rem] w-[26rem] bg-warning/10" />
      <div className="aurora-orb animate-float-slow absolute bottom-[8%] right-[8%] h-72 w-72 bg-plasma/10" />

      {/* Twinkling starfield */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="star-twinkle"
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              '--star-min': s.min,
              '--star-max': s.max,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Shooting stars streaking across the sky */}
      {shootingStars.map((s) => (
        <span
          key={s.id}
          className={`shooting-star ${s.color}`}
          style={
            {
              '--start-x': `${s.startX}vw`,
              '--start-y': `${s.startY}vh`,
              '--angle': `${s.angle}deg`,
              '--travel-x': `${s.travelX}vw`,
              '--travel-y': `${s.travelY}vh`,
              '--trail-length': `${s.trailLength}px`,
              '--head-size': `${s.headSize}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Softly rising embers for ambient motion */}
      {embers.map((p) => (
        <span
          key={p.id}
          className={`bg-particle ${p.color}`}
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--drift-x': `${p.driftX}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
