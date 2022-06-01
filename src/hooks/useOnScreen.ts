import { useState, useEffect, MutableRefObject } from 'react';

export function useOnScreen(
  ref: MutableRefObject<HTMLElement | null>,
  threshold: number | undefined = 0.6
) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    setObserver(
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { threshold }
      )
    );
  }, [threshold]);

  useEffect(() => {
    if (ref.current && observer) observer.observe(ref.current);

    return () => observer?.disconnect();
  }, [observer, ref]);

  return isIntersecting;
}
