import { motion } from 'framer-motion';

export default function ContactWave({ className = '' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 1440 220" className="w-full h-auto block" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="35%" stopColor="#10b981" stopOpacity="0.65" />
            <stop offset="65%" stopColor="#10b981" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveLine2" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f5f5f5" stopOpacity="0" />
            <stop offset="50%" stopColor="#f5f5f5" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#f5f5f5" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          d="M0,110 C240,30 480,190 720,110 C960,30 1200,190 1440,110"
          stroke="url(#waveLine)"
          strokeWidth="1.5"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          d="M0,140 C240,60 480,220 720,140 C960,60 1200,220 1440,140"
          stroke="url(#waveLine2)"
          strokeWidth="1"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          d="M0,80 C240,0 480,160 720,80 C960,0 1200,160 1440,80"
          stroke="#1f1f1f"
          strokeWidth="1"
          fill="none"
        />

        {/* Tick marks */}
        <g stroke="#2a2a2a" strokeWidth="1">
          {Array.from({ length: 24 }).map((_, i) => (
            <line key={i} x1={60 * i} y1="200" x2={60 * i} y2="210" />
          ))}
        </g>
      </svg>
    </div>
  );
}
