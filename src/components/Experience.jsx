import { motion } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionHeader from './SectionHeader.jsx';

const ease = [0.16, 1, 0.3, 1];

function renderHighlight(text) {
  const parts = text.split(/(\b\d+%|\b\d+x\b|\b1 hr\/user\/month\b)/g);
  return parts.map((part, i) => {
    if (/^\d+%|\d+x|1 hr\/user\/month$/.test(part)) {
      return (
        <span
          key={i}
          className="font-mono text-orange font-medium border border-orange/40 bg-orange-dim px-1.5 py-0.5 mx-0.5 align-middle text-[0.9em]"
        >
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function Experience() {
  const { experience } = data;

  return (
    <section
      id="experience"
      className="relative px-6 md:px-12 lg:px-16 py-28 md:py-40 border-b border-border-soft"
    >
      <SectionHeader
        index="05"
        label="Experience"
        title="Shipped in production."
        meta={`${experience.length} chapters`}
        accent="Where I've fought fires"
      />

      <div className="space-y-6 md:space-y-8">
        {experience.map((exp, i) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease, delay: i * 0.1 }}
            className="group relative border border-border-soft bg-surface/30 hover:bg-surface/60 hover:border-orange/40 transition-all duration-500"
            data-hover
          >
            {/* Orange edge on hover */}
            <span className="absolute top-0 left-0 h-full w-px bg-orange scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />

            <div className="grid grid-cols-12 gap-6 md:gap-12 p-6 md:p-10">
              {/* Left: Company + Role */}
              <div className="col-span-12 lg:col-span-5">
                <div className="flex items-center gap-3 mb-4 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                  <span className="text-orange">◆</span>
                  <span>{exp.type}</span>
                  <span className="block h-px flex-1 bg-border-soft max-w-16" />
                </div>
                <h3
                  className="font-display font-semibold text-ink leading-[0.95] mb-3 group-hover:text-orange transition-colors"
                  style={{ fontSize: 'clamp(34px, 4.6vw, 60px)' }}
                >
                  {exp.company}
                </h3>
                <div className="font-syne text-base md:text-lg text-orange tracking-wide mb-2">
                  {exp.role}
                </div>
                <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-muted">
                  {exp.period}
                </div>
              </div>

              {/* Right: Highlights */}
              <div className="col-span-12 lg:col-span-7">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-5">
                  <span className="text-orange">//</span> highlights
                </div>
                <ul className="space-y-4">
                  {exp.highlights.map((h, hi) => (
                    <motion.li
                      key={hi}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease, delay: 0.15 + hi * 0.06 }}
                      className="flex gap-4"
                    >
                      <span className="font-mono text-orange flex-shrink-0 pt-1 text-sm">→</span>
                      <span className="font-sans text-ink/85 text-base leading-relaxed">
                        {renderHighlight(h)}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
