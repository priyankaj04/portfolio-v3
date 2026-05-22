import { motion } from 'framer-motion';

const LINES = [
  { tag: 'const', name: ' stack ', op: '= {', muted: false },
  { indent: 2, key: 'frontend:', val: "['React', 'Next.js']," },
  { indent: 2, key: 'backend:', val: "['Node', 'Flask']," },
  { indent: 2, key: 'data:', val: "['Postgres', 'Redis']," },
  { indent: 2, key: 'ai:', val: "['Claude', 'LangGraph']," },
  { indent: 2, key: 'infra:', val: "['AWS', 'Docker'],", highlight: true },
  { tag: '}', plain: true },
  { empty: true },
  { tag: 'export', name: ' default', op: ' stack', muted: true },
];

export default function SkillOrbs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[400px]"
    >
      {/* Ambient emerald glow */}
      <div className="relative">
        <div
          className="pointer-events-none absolute -inset-8 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(16, 185, 129,0.18) 0%, transparent 60%)',
          }}
        />

        {/* Terminal window */}
        <div className="relative border border-border-soft bg-surface/70 backdrop-blur-sm shadow-[0_0_60px_rgba(16, 185, 129,0.08)]">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border-soft">
            <div className="flex items-center gap-1.5">
              <span className="block h-2 w-2 rounded-full bg-emerald" />
              <span className="block h-2 w-2 rounded-full bg-line" />
              <span className="block h-2 w-2 rounded-full bg-line" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
              ~/stack.ts
            </span>
            <span className="font-mono text-[10px] text-muted">×</span>
          </div>

          {/* Code body */}
          <div className="relative px-5 py-5 font-mono text-[12px] leading-[1.85]">
            {LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15 + i * 0.07,
                }}
                className="flex items-baseline gap-3"
              >
                <span className="select-none text-muted/50 w-4 text-right">
                  {i + 1}
                </span>
                <span className="flex-1 whitespace-pre">
                  {line.empty ? (
                    ' '
                  ) : line.plain ? (
                    <span className="text-ink/80">{line.tag}</span>
                  ) : line.key ? (
                    <>
                      <span>{'  '.repeat(line.indent || 0)}</span>
                      <span className={line.highlight ? 'text-emerald' : 'text-ink/85'}>
                        {line.key}
                      </span>{' '}
                      <span className={line.highlight ? 'text-emerald/80' : 'text-muted'}>
                        {line.val}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-emerald">{line.tag}</span>
                      <span className={line.muted ? 'text-muted' : 'text-ink'}>
                        {line.name}
                      </span>
                      <span className="text-ink/70">{line.op}</span>
                    </>
                  )}
                </span>
              </motion.div>
            ))}

            {/* Blinking cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="flex items-baseline gap-3 mt-1"
            >
              <span className="select-none text-muted/50 w-4 text-right">
                {LINES.length + 1}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block h-3 w-[7px] bg-emerald align-baseline"
              />
            </motion.div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-border-soft font-mono text-[9px] tracking-[0.3em] uppercase text-muted">
            <span className="flex items-center gap-2">
              <span className="pulse-dot relative inline-flex h-1.5 w-1.5 bg-emerald" />
              <span>Live</span>
            </span>
            <span>typescript</span>
            <span>UTF-8</span>
          </div>
        </div>

        {/* Corner crosshairs */}
        <svg
          className="absolute -top-2 -left-2 h-4 w-4 text-emerald"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <line x1="0" y1="0" x2="6" y2="0" />
          <line x1="0" y1="0" x2="0" y2="6" />
        </svg>
        <svg
          className="absolute -bottom-2 -right-2 h-4 w-4 text-emerald"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <line x1="16" y1="16" x2="10" y2="16" />
          <line x1="16" y1="16" x2="16" y2="10" />
        </svg>
      </div>
    </motion.div>
  );
}
