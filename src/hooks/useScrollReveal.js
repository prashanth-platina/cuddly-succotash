import { useEffect, useRef } from 'react';

export default function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    // Observe the element itself and any children with .anim-reveal
    const targets = el.querySelectorAll('.anim-reveal');
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains('anim-reveal')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
