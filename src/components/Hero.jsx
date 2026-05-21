import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import data from '../data/portfolio.json';
import HeroBlob from '../illustrations/HeroBlob.jsx';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { meta } = data;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden border-b border-border-soft"
    >
      {/* Background grid (parallax) */}
      <Parallax speed={-12} className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }}
        />
      </Parallax>

      {/* Ambient orange glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(244,93,0,0.18) 0%, rgba(244,93,0,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Top metadata strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-24 left-0 right-0 px-6 md:px-12 lg:px-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-[10px] tracking-[0.32em] uppercase text-muted">
          <span className="flex items-center gap-2">
            <span className="text-orange">◼</span> 2026.05.21
          </span>
          <span className="hidden md:block text-center">LAT 12.97° N · LON 77.59° E</span>
          <span className="text-right">v 1.0 — Portfolio</span>
        </div>
      </motion.div>

      {/* Main content grid */}
      <div className="relative z-10 min-h-screen px-6 md:px-12 lg:px-16 pt-36 md:pt-40 pb-32 flex items-center">
        <div className="w-full grid grid-cols-12 gap-6 md:gap-10 items-center">
          {/* Left: Name + intro */}
          <div className="col-span-12 lg:col-span-8">
            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block h-px w-8 bg-orange" />
              <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-muted">
                Introducing <span className="text-ink">/ {meta.location}</span>
              </span>
            </motion.div>

            {/* Display name */}
            <h1
              className="font-display font-semibold text-ink tracking-tight leading-[0.84]"
              style={{ fontSize: 'clamp(64px, 13vw, 200px)' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.15 }}
                className="block"
              >
                Priyanka<span className="text-orange">.</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.3 }}
                className="block"
              >
                J{' '}
                <span className="text-muted font-mono text-[0.18em] align-top tracking-widest">
                  /01
                </span>
              </motion.span>
            </h1>

            {/* Title + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.5 }}
              className="mt-10 max-w-2xl"
            >
              <div className="flex items-center gap-4">
                <span className="block h-px w-10 bg-orange" />
                <span className="font-syne text-xs md:text-sm tracking-[0.32em] uppercase text-ink">
                  {meta.title}
                </span>
              </div>
              <p className="mt-6 font-sans text-lg md:text-2xl text-ink/80 leading-relaxed">
                <span className="text-orange align-top">&ldquo;</span>
                {meta.tagline}
                <span className="text-orange align-bottom">&rdquo;</span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.65 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-orange text-bg font-syne text-xs md:text-sm tracking-[0.28em] uppercase font-semibold transition-all hover:bg-ink hover:shadow-[0_0_40px_rgba(244,93,0,0.35)]"
              >
                View work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-4 border border-border-soft text-ink font-syne text-xs md:text-sm tracking-[0.28em] uppercase font-semibold transition-all hover:border-orange hover:text-orange"
              >
                Get in touch
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:flex col-span-12 lg:col-span-4 items-center justify-center">
            <Parallax speed={6} className="w-full">
              <HeroBlob />
            </Parallax>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-6 left-0 right-0 px-6 md:px-12 lg:px-16 flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-orange"
          >
            ↓
          </motion.span>
          Scroll to begin
        </div>
        <div className="hidden md:block font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
          07 sections / 4 yrs shipped / ∞ commits
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase">
          <span className="pulse-dot relative inline-flex h-2 w-2 bg-emerald-400" />
          <span className="text-ink">Open to opportunities</span>
        </div>
      </div>
    </section>
  );
}
