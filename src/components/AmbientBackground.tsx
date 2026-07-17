import { useMemo } from 'react';

// Purely decorative, full-viewport backdrop: a faint drifting grid, two large
// slow-moving gradient meshes, and a handful of softly rising particles.
// Keeps the page from ever feeling like flat, static white space.
const PARTICLES = 14;

export default function AmbientBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLES }).map((_, i) => {
        const size = 3 + Math.round(Math.random() * 5);
        const left = Math.round(Math.random() * 100);
        const duration = 16 + Math.round(Math.random() * 14);
        const delay = Math.round(Math.random() * 18);
        const driftX = Math.round((Math.random() - 0.5) * 120);
        const palette = ['bg-accent/25', 'bg-success/20', 'bg-warning/25', 'bg-primary/10'];
        const color = palette[i % palette.length];
        return { id: i, size, left, duration, delay, driftX, color };
      }),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Faint drifting blueprint grid across the whole viewport */}
      <div className="page-grid animate-mesh-shift absolute inset-0" />

      {/* Large ambient gradient meshes */}
      <div className="aurora-orb animate-float-slower absolute left-[-12rem] top-[-6rem] h-[26rem] w-[26rem] bg-accent/10" />
      <div className="aurora-orb animate-float-slow absolute right-[-10rem] top-[35%] h-[22rem] w-[22rem] bg-success/10" />
      <div className="aurora-orb animate-float-slower absolute bottom-[-10rem] left-[20%] h-[24rem] w-[24rem] bg-warning/10" />
      <div className="aurora-orb animate-float-slow absolute bottom-[10%] right-[10%] h-64 w-64 bg-primary/5" />

      {/* Softly rising particles for ambient motion */}
      {particles.map((p) => (
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
