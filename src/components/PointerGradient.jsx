import { useEffect, useRef } from 'react';

const PointerGradient = () => {
  const ref = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (event) => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${event.clientX}px`);
        el.style.setProperty('--my', `${event.clientY}px`);
        rafId.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-gradient"
      style={{
        '--mx': '0px',
        '--my': '0px',
        background: 'radial-gradient(600px at var(--mx) var(--my), rgba(148, 174, 247, 0.09), transparent 80%)',
      }}
    />
  );
};

export default PointerGradient;
