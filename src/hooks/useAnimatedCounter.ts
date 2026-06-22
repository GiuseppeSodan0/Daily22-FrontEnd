import {useState, useEffect, useRef} from 'react';

interface AnimatedCounterOptions {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  liveFluctuation?: boolean;
}

export function useAnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  liveFluctuation = false,
}: AnimatedCounterOptions) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {threshold: 0.3}
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setDisplayValue(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(end);
      }
    }

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [hasAnimated, end, duration]);

  useEffect(() => {
    if (!hasAnimated || !liveFluctuation) return;

    const interval = setInterval(() => {
      const variance = end * 0.02;
      const fluctuation = (Math.random() - 0.5) * variance;
      setDisplayValue(end + fluctuation);
    }, 2000);

    return () => clearInterval(interval);
  }, [hasAnimated, liveFluctuation, end]);

  const formatted = displayValue.toFixed(decimals) + suffix;

  return {ref, value: formatted, hasAnimated};
}
