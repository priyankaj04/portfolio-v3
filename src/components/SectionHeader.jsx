import { motion } from 'framer-motion';

export default function SectionHeader({ index, label, title, meta, accent = 'A life in code' }) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
        <span className="flex items-center gap-3">
          <span className="text-emerald">◼</span>
          <span>{index} / {label}</span>
        </span>
        {meta && <span className="text-muted/70">{meta}</span>}
      </div>
      <div className="h-px w-full bg-border-soft mb-8" />
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-semibold text-ink tracking-tight leading-[0.92]"
        style={{ fontSize: 'clamp(42px, 8vw, 112px)' }}
      >
        {title}
      </motion.h2>
      {accent && (
        <div className="mt-5 flex items-center gap-4">
          <span className="block h-px w-12 bg-emerald" />
          <span className="font-syne text-xs md:text-sm tracking-[0.3em] uppercase text-muted">{accent}</span>
        </div>
      )}
    </div>
  );
}
