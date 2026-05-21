import { motion } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionHeader from './SectionHeader.jsx';
import ContactWave from '../illustrations/ContactWave.jsx';

const ease = [0.16, 1, 0.3, 1];

const ROWS = (meta) => [
  {
    label: 'Email',
    value: meta.email,
    display: meta.email,
    href: `mailto:${meta.email}`,
    icon: '@',
  },
  {
    label: 'GitHub',
    value: '@priyankaj04',
    display: '@priyankaj04',
    href: meta.github,
    icon: '↳',
  },
  {
    label: 'LinkedIn',
    value: 'in/priyankaj04',
    display: 'in/priyankaj04',
    href: meta.linkedin,
    icon: '↳',
  },
];

export default function Contact() {
  const { meta } = data;
  const rows = ROWS(meta);

  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-16 pt-28 md:pt-40 pb-0 overflow-hidden"
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(244,93,0,0.10) 0%, rgba(244,93,0,0.02) 50%, transparent 75%)',
        }}
      />

      <SectionHeader
        index="08"
        label="Contact"
        title="Let's build something."
        meta="Open inbox"
        accent="One commit away"
      />

      <div className="relative grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
            className="font-sans text-xl md:text-2xl text-ink/80 leading-relaxed max-w-2xl mb-12"
          >
            Open to new opportunities, side projects, or a good chat about engineering. Pick a way to reach me — I read everything.
          </motion.p>

          <div className="border-y border-border-soft">
            {rows.map((row, i) => (
              <motion.a
                key={row.label}
                href={row.href}
                target={row.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                className="group grid grid-cols-12 gap-3 items-center py-5 md:py-7 border-b border-border-soft last:border-0 hover:bg-orange-dim transition-colors px-2 -mx-2"
                data-hover
              >
                <div className="col-span-1 font-mono text-orange text-lg">{row.icon}</div>
                <div className="col-span-3 md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                  {row.label}
                </div>
                <div className="col-span-7 md:col-span-8 font-syne text-base md:text-2xl text-ink group-hover:text-orange transition-colors truncate">
                  {row.display}
                </div>
                <div className="col-span-1 text-right font-mono text-muted group-hover:text-orange group-hover:translate-x-1 transition-all">
                  ↗
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability */}
          {meta.availableForWork && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="mt-12 inline-flex items-center gap-4 px-5 py-4 border border-emerald-500/30 bg-emerald-500/[0.04]"
            >
              <span className="pulse-dot relative inline-flex h-2.5 w-2.5 bg-emerald-400 rounded-full text-emerald-400" />
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink">
                <div className="text-emerald-400 mb-0.5">Open to opportunities</div>
                <div className="text-muted">IND timezone · async-friendly</div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right column: stamp / signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
          className="hidden lg:flex col-span-12 lg:col-span-5 items-center justify-center"
        >
          <ContactStamp />
        </motion.div>
      </div>

      {/* Wave */}
      <div className="relative mt-20 md:mt-28">
        <ContactWave />
      </div>
    </section>
  );
}

function ContactStamp() {
  return (
    <div className="relative w-[320px] h-[320px]">
      <svg viewBox="0 0 320 320" className="w-full h-full">
        <defs>
          <path id="stampPath" d="M 160,160 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
        </defs>
        {/* outer ring */}
        <circle cx="160" cy="160" r="150" stroke="#1f1f1f" strokeWidth="1" fill="none" />
        <circle cx="160" cy="160" r="140" stroke="#1f1f1f" strokeWidth="1" fill="none" strokeDasharray="2 6" />

        {/* text orbiting */}
        <text fill="#6b6b6b" fontSize="11" fontFamily="JetBrains Mono" letterSpacing="6">
          <textPath href="#stampPath" startOffset="0">
            DARK · SHARP · ALIVE — PORTFOLIO V1.0 — DARK · SHARP · ALIVE —
          </textPath>
        </text>

        {/* inner brand */}
        <g transform="translate(160 160)">
          <rect x="-28" y="-28" width="56" height="56" fill="#f45d00" />
          <rect x="-14" y="-14" width="28" height="28" fill="#0a0a0a" />
          <rect x="-6" y="-6" width="12" height="12" fill="#f45d00" />
        </g>

        {/* corner ticks */}
        <g stroke="#2a2a2a" strokeWidth="1">
          <line x1="160" y1="0" x2="160" y2="10" />
          <line x1="160" y1="310" x2="160" y2="320" />
          <line x1="0" y1="160" x2="10" y2="160" />
          <line x1="310" y1="160" x2="320" y2="160" />
        </g>
      </svg>
    </div>
  );
}
