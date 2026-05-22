import { motion } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionHeader from './SectionHeader.jsx';
import SectionBackground from './SectionBackground.jsx';

const ease = [0.16, 1, 0.3, 1];

export default function Education() {
  const { education } = data;

  return (
    <section
      id="education"
      className="relative px-6 md:px-12 lg:px-16 py-28 md:py-40 border-b border-border-soft overflow-hidden"
    >
      <SectionBackground variant="ticks" opacity={0.05} />
      <SectionHeader
        index="07"
        label="Education"
        title="Always learning."
        meta="Theory ⇄ Practice"
        accent="Curious, by default"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {education.map((edu, i) => {
          const ongoing = edu.status === 'Ongoing';
          return (
            <motion.article
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease, delay: i * 0.12 }}
              className="group relative border border-border-soft bg-surface/30 hover:bg-surface/60 hover:border-emerald/40 transition-all duration-500"
              data-hover
            >
              <div className="p-6 md:p-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                    {edu.period}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase px-2 py-1 border ${
                      ongoing
                        ? 'border-emerald text-emerald bg-emerald-dim'
                        : 'border-border-soft text-muted'
                    }`}
                  >
                    {ongoing ? (
                      <span className="pulse-dot relative inline-block h-1.5 w-1.5 bg-emerald rounded-full" />
                    ) : (
                      <span className="inline-block h-1.5 w-1.5 border border-muted rounded-full" />
                    )}
                    {edu.status}
                  </span>
                </div>

                <h3
                  className="font-display font-semibold text-ink leading-[0.9] mb-4 group-hover:text-emerald transition-colors"
                  style={{ fontSize: 'clamp(56px, 8vw, 110px)' }}
                >
                  {edu.degree}
                </h3>

                <div className="mt-auto">
                  <div className="h-px w-full bg-border-soft mb-4" />
                  <div className="font-syne text-base text-ink/75">{edu.institute}</div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
