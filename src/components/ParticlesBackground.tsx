import React from 'react';
import {useRef, useEffect, useCallback} from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  phase: number;
  speed: number;
  isNode: boolean;
  hue: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({x: -1000, y: -1000});
  const frameRef = useRef<number>(0);

  const initParticles = useCallback((w: number, h: number) => {
    const count = Math.min(60, Math.floor((w * h) / 18000));
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const isNode = Math.random() < 0.2;
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.25 + 0.08),
        size: isNode ? Math.random() * 2.5 + 2 : Math.random() * 2 + 1,
        opacity: isNode ? Math.random() * 0.5 + 0.3 : Math.random() * 0.25 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.25 + 0.15,
        isNode,
        hue: Math.random() < 0.15 ? 210 : 35,
      });
    }

    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = (time: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const pts = particlesRef.current;

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const t = time * 0.001;

        p.x += Math.sin(t * p.speed + p.phase) * 0.4;
        p.y += p.vy;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          const force = (140 - dist) / 140;
          p.x += (dx / dist) * force * 2.5;
          p.y += (dy / dist) * force * 2.5;
        }

        if (p.y < -15) {
          p.y = h + 15;
          p.x = Math.random() * w;
        }
        if (p.x < -15) p.x = w + 15;
        if (p.x > w + 15) p.x = -15;

        const hue = p.hue;
        const saturation = hue === 210 ? '60%' : '70%';
        const lightness = hue === 210 ? '85%' : '45%';

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, ${saturation}, ${lightness}, ${p.opacity * 0.7})`;
        ctx.fill();

        if (p.isNode) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, ${saturation}, ${lightness}, ${p.opacity * 0.1})`;
          ctx.fill();
        }
      }

      // Draw network mesh lines between nearby particles
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80 && (pts[i].isNode || pts[j].isNode)) {
            const opacity = (1 - dist / 80) * 0.15;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(234, 179, 8, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{zIndex: 1}}
    />
  );
}
