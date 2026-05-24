import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import data from '../data/portfolio.json';
import SectionBackground from './SectionBackground.jsx';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { meta, about } = data;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden border-b border-border-soft"
    >
      {/* Dot pattern background */}
      <SectionBackground variant="dots" opacity={0.08} mask="center" />

      {/* Background grid (parallax) */}
      <Parallax speed={-12} className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
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
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(244,93,0,0.10) 0%, rgba(244,93,0,0.02) 50%, transparent 75%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen px-6 md:px-12 lg:px-16 pt-32 md:pt-36 pb-28 flex items-center">
        <div className="w-full grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* LEFT — Identity */}
          <div className="col-span-12 lg:col-span-7">
            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="block h-px w-8 bg-orange" />
              <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-muted">
                <span className="text-ink">01</span> / Introducing
              </span>
            </motion.div>

            {/* Display name */}
            <h1
              className="font-display font-semibold text-ink tracking-tight leading-[0.86]"
              style={{ fontSize: 'clamp(56px, 9.5vw, 152px)' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.15 }}
                className="block"
              >
                Priyanka<span className="text-orange">.</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.3 }}
                className="block"
              >
                J
              </motion.span>
            </h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="block h-px w-10 bg-orange" />
              <span className="font-syne text-xs md:text-sm tracking-[0.32em] uppercase text-ink">
                {meta.title}
              </span>
            </motion.div>

            {/* Positioning */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.6 }}
              className="mt-8 max-w-2xl font-display font-semibold text-ink leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(22px, 2.6vw, 32px)' }}
            >
              {meta.subtitle}
            </motion.p>

            {/* Credentials strip */}
            {meta.credentials && meta.credentials.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.7 }}
                className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[0.28em] uppercase text-muted"
              >
                {meta.credentials.map((c, i) => (
                  <span key={c} className="flex items-center gap-3">
                    {i > 0 && <span className="text-border-soft">·</span>}
                    <span className={i === 0 ? 'text-orange' : 'text-ink/85'}>{c}</span>
                  </span>
                ))}
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.75 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#timeline"
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
              {meta.resume && (
                <a
                  href={meta.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-4 border border-border-soft text-ink font-syne text-xs md:text-sm tracking-[0.28em] uppercase font-semibold transition-all hover:border-orange hover:text-orange"
                >
                  Resume
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* RIGHT — Current focus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: 0.55 }}
            className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l lg:border-border-soft"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                <span className="text-orange">//</span> current_focus
              </div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                {about.currentFocus.length.toString().padStart(2, '0')} areas
              </div>
            </div>

            <ul className="space-y-2">
              {about.currentFocus.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.7 + i * 0.1 }}
                  className="group relative flex items-center gap-5 py-5 border-b border-border-soft hover:border-orange/40 transition-colors cursor-default"
                >
                  <span className="font-mono text-[11px] text-muted">
                    0{i + 1}
                  </span>
                  <span className="flex-1 font-syne text-xl md:text-2xl text-ink group-hover:text-orange transition-colors">
                    {item}
                  </span>
                  <span className="font-mono text-orange opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                    →
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-3 px-3 py-2 border border-orange/40 bg-orange-dim">
              <span className="pulse-dot relative inline-flex h-2 w-2 bg-orange" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange">
                Currently shipping
              </span>
            </div>
          </motion.div>
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
        <div className="hidden md:flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
          <span className="text-orange">→</span>
          Based in {meta.location}
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase">
          <span className="pulse-dot relative inline-flex h-2 w-2 bg-emerald-400" />
          <span className="text-ink">Open to opportunities</span>
        </div>
      </div>
    </section>
  );
}
