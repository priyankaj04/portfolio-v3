import { motion } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionHeader from './SectionHeader.jsx';
import SectionBackground from './SectionBackground.jsx';
import SkillOrbs from '../illustrations/SkillOrbs.jsx';

const ease = [0.16, 1, 0.3, 1];

const GROUPS = [
  { key: 'fullstack', n: '01', label: 'Full Stack' },
  { key: 'ai', n: '02', label: 'AI / ML' },
  { key: 'tools', n: '03', label: 'Tools & Frameworks' },
];

export default function Skills() {
  const { skills } = data;

  return (
    <section
      id="skills"
      className="relative px-6 md:px-12 lg:px-16 py-28 md:py-40 border-b border-border-soft overflow-hidden"
    >
      <SectionBackground variant="rings" opacity={0.05} />
      <SectionHeader
        index="04"
        label="Stack"
        title="Tools of the trade."
        meta="3 groups · 17 weapons"
        accent="What I reach for"
      />

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        {/* Skill groups */}
        <div className="col-span-12 lg:col-span-8 space-y-12">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease, delay: gi * 0.1 }}
            >
              {/* Group header */}
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-orange">
                  {group.n}
                </span>
                <span className="font-syne text-sm tracking-[0.28em] uppercase text-ink">
                  {group.label}
                </span>
                <span className="block h-px flex-1 bg-border-soft" />
                <span className="font-mono text-[10px] tracking-widest text-muted">
                  {skills[group.key].length} items
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {skills[group.key].map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: 0.1 + si * 0.04 }}
                    className="group inline-flex items-center gap-2 px-4 py-2 border border-line hover:border-orange hover:bg-orange-dim transition-all duration-300 rounded-full"
                    data-hover
                  >
                    <span className="font-mono text-[10px] text-muted group-hover:text-orange transition-colors">
                      [
                    </span>
                    <span className="font-syne text-sm text-ink/85 group-hover:text-orange transition-colors">
                      {skill}
                    </span>
                    <span className="font-mono text-[10px] text-muted group-hover:text-orange transition-colors">
                      ]
                    </span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Illustration */}
        <div className="hidden lg:flex col-span-12 lg:col-span-4 items-start justify-center pt-4">
          <SkillOrbs />
        </div>
      </div>
    </section>
  );
}
