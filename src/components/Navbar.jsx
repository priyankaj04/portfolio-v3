import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import data from '../data/portfolio.json';

const NAV = [
  { id: 'timeline', label: 'Story', n: '02' },
  { id: 'skills', label: 'Skills', n: '03' },
  { id: 'experience', label: 'Work', n: '04' },
  { id: 'projects', label: 'Projects', n: '05' },
  { id: 'education', label: 'Education', n: '06' },
  { id: 'contact', label: 'Contact', n: '07' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.5 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['hero', ...NAV.map((n) => n.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-bg/70 border-b border-border-soft' : 'bg-transparent'
      }`}
    >
      {/* Scroll progress */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px origin-left bg-orange"
        style={{ scaleX: progress }}
      />

      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5">
        {/* Brand */}
        <a href="#hero" className="group flex items-center gap-3" aria-label="Home">
          <span className="relative inline-block h-3 w-3 bg-orange transition-transform duration-500 group-hover:rotate-45" />
          <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-ink">
            Priyanka<span className="text-orange">.</span>J
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group relative px-3 py-2 font-mono text-[11px] tracking-[0.28em] uppercase transition-colors ${
                  isActive ? 'text-orange' : 'text-muted hover:text-ink'
                }`}
              >
                <span className="opacity-50 mr-1">{item.n}</span>
                {item.label}
                <span
                  className={`absolute left-3 right-3 -bottom-px h-px transition-transform duration-500 origin-left bg-orange ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Availability badge */}
        <a
          href="#contact"
          className="group hidden sm:flex items-center gap-2 border border-border-soft hover:border-orange/60 px-3 py-2 transition-colors"
        >
          <span className="pulse-dot inline-block h-2 w-2 bg-emerald-400" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink group-hover:text-orange transition-colors">
            {data.meta.availableForWork ? 'Available' : 'Booked'}
          </span>
        </a>
      </div>
    </header>
  );
}
