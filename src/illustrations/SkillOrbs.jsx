import { motion } from 'framer-motion';

export default function SkillOrbs() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full max-w-[360px]"
    >
      <svg viewBox="0 0 320 320" className="w-full h-auto">
        <defs>
          <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f45d00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f45d00" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="160" cy="160" r="150" fill="url(#orbGlow)" />

        {/* Connection lines */}
        <g stroke="#1f1f1f" strokeWidth="1">
          <line x1="100" y1="80" x2="220" y2="120" />
          <line x1="220" y1="120" x2="160" y2="220" />
          <line x1="160" y1="220" x2="80" y2="180" />
          <line x1="80" y1="180" x2="100" y2="80" />
          <line x1="240" y1="220" x2="220" y2="120" />
          <line x1="240" y1="220" x2="160" y2="220" />
        </g>

        {/* Orbs */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '160px 160px' }}
        >
          <circle cx="100" cy="80" r="22" stroke="#2a2a2a" strokeWidth="1" fill="#111111" />
          <circle cx="220" cy="120" r="34" stroke="#f45d00" strokeWidth="1" fill="#f45d0011" />
          <circle cx="160" cy="220" r="18" fill="#f45d00" />
          <circle cx="80" cy="180" r="14" stroke="#2a2a2a" strokeWidth="1" fill="#111111" />
          <circle cx="240" cy="220" r="10" fill="#f5f5f5" opacity="0.5" />
          <circle cx="60" cy="100" r="4" fill="#f45d00" />
          <circle cx="260" cy="80" r="3" fill="#6b6b6b" />
          <circle cx="200" cy="280" r="3" fill="#f5f5f5" opacity="0.5" />
        </motion.g>

        {/* Corner crosshairs */}
        <g stroke="#2a2a2a" strokeWidth="1">
          <line x1="10" y1="10" x2="26" y2="10" />
          <line x1="10" y1="10" x2="10" y2="26" />
          <line x1="310" y1="310" x2="294" y2="310" />
          <line x1="310" y1="310" x2="310" y2="294" />
        </g>
      </svg>
    </motion.div>
  );
}
