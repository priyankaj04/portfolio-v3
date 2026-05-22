import { motion } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionHeader from './SectionHeader.jsx';
import ContactWave from '../illustrations/ContactWave.jsx';

const ease = [0.16, 1, 0.3, 1];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.12 3.07.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.17v3.22c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

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
    icon: <GitHubIcon />,
  },
  {
    label: 'LinkedIn',
    value: 'in/priyankaj04',
    display: 'in/priyankaj04',
    href: meta.linkedin,
    icon: <LinkedInIcon />,
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
            'radial-gradient(circle, rgba(16, 185, 129,0.10) 0%, rgba(16, 185, 129,0.02) 50%, transparent 75%)',
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
                className="group grid grid-cols-12 gap-3 items-center py-5 md:py-7 border-b border-border-soft last:border-0 hover:bg-emerald-dim transition-colors px-2 -mx-2"
                data-hover
              >
                <div className="col-span-1 font-mono text-emerald text-lg">{row.icon}</div>
                <div className="col-span-3 md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                  {row.label}
                </div>
                <div className="col-span-7 md:col-span-8 font-syne text-base md:text-2xl text-ink group-hover:text-emerald transition-colors truncate">
                  {row.display}
                </div>
                <div className="col-span-1 text-right font-mono text-muted group-hover:text-emerald group-hover:translate-x-1 transition-all">
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
  const nodes = [
    { x: 80, y: 70, r: 4, color: '#6b6b6b', delay: 0 },
    { x: 280, y: 90, r: 6, color: '#10b981', delay: 0.4 },
    { x: 60, y: 240, r: 5, color: '#f5f5f5', delay: 0.8 },
    { x: 270, y: 260, r: 4, color: '#6b6b6b', delay: 0.2 },
    { x: 200, y: 50, r: 3, color: '#f5f5f5', delay: 1.0 },
    { x: 40, y: 160, r: 3, color: '#10b981', delay: 0.6 },
  ];

  return (
    <div className="relative w-full max-w-[400px] aspect-square">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(16, 185, 129,0.20) 0%, transparent 65%)',
        }}
      />

      <svg viewBox="0 0 360 360" className="relative w-full h-full">
        <defs>
          <radialGradient id="beaconCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Background grid */}
        <g stroke="#1f1f1f" strokeWidth="0.5" opacity="0.6">
          {[60, 120, 180, 240, 300].map((p) => (
            <g key={p}>
              <line x1={p} y1="20" x2={p} y2="340" />
              <line x1="20" y1={p} x2="340" y2={p} />
            </g>
          ))}
        </g>

        {/* Pulsing rings */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="180"
            cy="180"
            r="40"
            fill="none"
            stroke="#10b981"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: [0.6, 0],
              scale: [0.4, 2.6],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              delay: i * 1.13,
              ease: 'easeOut',
            }}
            style={{ transformOrigin: '180px 180px' }}
          />
        ))}

        {/* Static guide rings */}
        <circle
          cx="180"
          cy="180"
          r="70"
          fill="none"
          stroke="#2a2a2a"
          strokeDasharray="2 4"
        />
        <circle
          cx="180"
          cy="180"
          r="110"
          fill="none"
          stroke="#1f1f1f"
          strokeDasharray="1 6"
        />

        {/* Lines from core to nodes */}
        <g stroke="#2a2a2a" strokeWidth="0.8" opacity="0.5">
          {nodes.map((n) => (
            <line key={`l-${n.x}-${n.y}`} x1="180" y1="180" x2={n.x} y2={n.y} />
          ))}
        </g>

        {/* Receiver nodes */}
        {nodes.map((n) => (
          <g key={`n-${n.x}-${n.y}`}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r + 6}
              fill="none"
              stroke={n.color}
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0.6, 1.4, 1.4] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: n.delay,
                ease: 'easeOut',
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} />
          </g>
        ))}

        {/* Core beacon */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '180px 180px' }}
        >
          <rect x="160" y="160" width="40" height="40" fill="url(#beaconCore)" />
          <rect
            x="166"
            y="166"
            width="28"
            height="28"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="2"
          />
        </motion.g>
        <motion.circle
          cx="180"
          cy="180"
          r="6"
          fill="#0a0a0a"
          stroke="#10b981"
          strokeWidth="1.5"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Corner crosshairs */}
        <g stroke="#10b981" strokeWidth="1.2">
          <line x1="14" y1="14" x2="26" y2="14" />
          <line x1="14" y1="14" x2="14" y2="26" />
          <line x1="346" y1="14" x2="334" y2="14" />
          <line x1="346" y1="14" x2="346" y2="26" />
          <line x1="14" y1="346" x2="26" y2="346" />
          <line x1="14" y1="346" x2="14" y2="334" />
          <line x1="346" y1="346" x2="334" y2="346" />
          <line x1="346" y1="346" x2="346" y2="334" />
        </g>

        {/* Telemetry labels */}
        <text
          x="20"
          y="354"
          fill="#6b6b6b"
          fontSize="9"
          fontFamily="JetBrains Mono"
          letterSpacing="2.5"
        >
          BROADCAST · 01
        </text>
        <text
          x="340"
          y="354"
          textAnchor="end"
          fill="#10b981"
          fontSize="9"
          fontFamily="JetBrains Mono"
          letterSpacing="2.5"
        >
          SIGNAL ON
        </text>
      </svg>
    </div>
  );
}
