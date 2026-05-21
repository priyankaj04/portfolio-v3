import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(${hovering ? 1.6 : 1})`;
      }
    };

    const onOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, [role="button"], [data-hover]');
      setHovering(Boolean(interactive));
    };

    const onLeave = () => setVisible(false);

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) scale(${hovering ? 2.2 : 1})`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [hovering, visible]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: visible ? 1 : 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: visible ? 0.55 : 0 }} />
    </>
  );
}
