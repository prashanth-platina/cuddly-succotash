import { useCallback } from 'react';

export default function useMagneticButton() {
  const onMouseMove = useCallback((e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    btn.style.transform = `translate(${deltaX * 6}px, ${deltaY * 4}px)`;
  }, []);

  const onMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = '';
  }, []);

  const onClick = useCallback((e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.classList.add('btn-ripple');
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }, []);

  return { onMouseMove, onMouseLeave, onClick };
}
