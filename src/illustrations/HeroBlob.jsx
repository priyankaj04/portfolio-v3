import { motion } from 'framer-motion';

export default function HeroBlob() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative w-full max-w-[460px] mx-auto"
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 440 440" className="w-full h-auto block">
          <defs>
            <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.55" />
              <stop offset="40%" stopColor="#fb923c" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="threadGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
              <stop offset="50%" stopColor="#fb923c" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Ambient glow */}
          <circle cx="220" cy="220" r="200" fill="url(#heroGlow)" />

          {/* Corner crosshairs */}
          <g stroke="#2a2a2a" strokeWidth="1">
            <line x1="14" y1="14" x2="36" y2="14" />
            <line x1="14" y1="14" x2="14" y2="36" />
            <line x1="426" y1="14" x2="404" y2="14" />
            <line x1="426" y1="14" x2="426" y2="36" />
            <line x1="14" y1="426" x2="36" y2="426" />
            <line x1="14" y1="426" x2="14" y2="404" />
            <line x1="426" y1="426" x2="404" y2="426" />
            <line x1="426" y1="426" x2="426" y2="404" />
          </g>

          {/* Outer dashed orbit */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '220px 220px' }}
          >
            <circle cx="220" cy="220" r="180" stroke="#1f1f1f" strokeWidth="1" fill="none" strokeDasharray="2 8" />
            <circle cx="40" cy="220" r="4" fill="#fb923c" />
            <circle cx="368" cy="100" r="3" fill="#f5f5f5" />
            <circle cx="320" cy="360" r="2.5" fill="#6b6b6b" />
          </motion.g>

          {/* Mid orbit */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '220px 220px' }}
          >
            <circle cx="220" cy="220" r="130" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <circle cx="350" cy="220" r="3" fill="#6b6b6b" />
            <circle cx="220" cy="90" r="4.5" fill="#fb923c" />
            <circle cx="135" cy="305" r="3" fill="#f5f5f5" />
          </motion.g>

          {/* Inner orbit */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '220px 220px' }}
          >
            <circle cx="220" cy="220" r="80" stroke="#1f1f1f" strokeWidth="1" fill="none" strokeDasharray="4 4" />
            <circle cx="140" cy="220" r="3" fill="#f5f5f5" />
            <circle cx="300" cy="220" r="3.5" fill="#fb923c" />
          </motion.g>

          {/* Core */}
          <circle cx="220" cy="220" r="32" stroke="#fb923c" strokeWidth="1" fill="none" opacity="0.4" />
          <circle cx="220" cy="220" r="22" stroke="#fb923c" strokeWidth="1" fill="none" opacity="0.6" />
          <motion.circle
            cx="220"
            cy="220"
            r="10"
            fill="#fb923c"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '220px 220px' }}
          />

          {/* Vertical thread */}
          <rect x="219" y="0" width="2" height="440" fill="url(#threadGrad)" />

          {/* Tick marks on outer */}
          <g stroke="#2a2a2a" strokeWidth="1">
            <line x1="220" y1="0" x2="220" y2="10" />
            <line x1="220" y1="430" x2="220" y2="440" />
            <line x1="0" y1="220" x2="10" y2="220" />
            <line x1="430" y1="220" x2="440" y2="220" />
          </g>

          {/* Labels */}
          <text
            x="220"
            y="420"
            textAnchor="middle"
            fill="#6b6b6b"
            fontSize="9"
            fontFamily="JetBrains Mono"
            letterSpacing="3"
          >
            CORE.SYS
          </text>
          <text
            x="20"
            y="220"
            fill="#6b6b6b"
            fontSize="9"
            fontFamily="JetBrains Mono"
            letterSpacing="2"
            transform="rotate(-90 20 220)"
          >
            v 1.0
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
}
