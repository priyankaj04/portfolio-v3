import { motion } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionHeader from './SectionHeader.jsx';
import SectionBackground from './SectionBackground.jsx';

const ease = [0.16, 1, 0.3, 1];

export default function About() {
  const { about } = data;

  return (
    <section id="about" className="relative px-6 md:px-12 lg:px-16 py-28 md:py-40 border-b border-border-soft overflow-hidden">
      <SectionBackground variant="dots" opacity={0.05} />
      {/* decorative blob */}
      <div
        className="pointer-events-none absolute -right-40 top-1/3 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(16, 185, 129,0.10) 0%, rgba(16, 185, 129,0.02) 50%, transparent 75%)',
        }}
      />

      <SectionHeader
        index="02"
        label="About"
        title="Builder. Tinkerer. Curious."
        meta="Who / What / Why"
        accent="A snapshot"
      />

      <div className="relative grid grid-cols-12 gap-6 md:gap-14">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
          className="col-span-12 lg:col-span-7"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-6">
            <span className="text-emerald">//</span> bio.md
          </div>
          <p className="font-sans text-xl md:text-3xl leading-[1.5] text-ink/85">
            Passionate, curious developer constantly looking for problems to solve. I work at the intersection of <span className="text-emerald">full stack engineering</span> and <span className="text-emerald">AI</span> — building systems that scale, agents that think, and products that <span className="text-emerald">matter</span>.
          </p>

          <div className="mt-12 flex items-center gap-4 font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
            <span className="text-emerald">→</span>
            <span>Based in {data.meta.location}</span>
            <span className="block h-px flex-1 bg-border-soft" />
            <span>{new Date().getFullYear()}</span>
          </div>
        </motion.div>

        {/* Current focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l lg:border-border-soft"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-8">
            <span className="text-emerald">//</span> current_focus
          </div>
          <ul className="space-y-3">
            {about.currentFocus.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.1 }}
                className="group flex items-start gap-4 py-4 border-b border-border-soft hover:border-emerald/40 transition-colors"
              >
                <span className="font-mono text-xs text-muted pt-2">0{i + 1}</span>
                <div className="flex-1">
                  <span className="font-syne text-xl md:text-2xl text-ink group-hover:text-emerald transition-colors">
                    {item}
                  </span>
                </div>
                <span className="font-mono text-emerald opacity-0 group-hover:opacity-100 transition-opacity pt-2">→</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 inline-flex items-center gap-3 px-3 py-2 border border-emerald/40 bg-emerald-dim">
            <span className="pulse-dot relative inline-flex h-2 w-2 bg-emerald" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald">
              Currently shipping
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
