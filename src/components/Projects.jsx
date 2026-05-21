import { motion } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionHeader from './SectionHeader.jsx';

const ease = [0.16, 1, 0.3, 1];

export default function Projects() {
  const { projects } = data;
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 lg:px-16 py-28 md:py-40 border-b border-border-soft"
    >
      <SectionHeader
        index="06"
        label="Selected Work"
        title="Things I've built."
        meta={`${projects.length} projects`}
        accent="From zero to production"
      />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Featured */}
        <FeaturedCard project={featured} index={0} />
        {/* Smaller cards */}
        {rest.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i + 1} variant={i === 2 ? 'wide' : 'small'} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease }}
      className="group relative col-span-12 lg:col-span-8 lg:row-span-2 border border-border-soft bg-surface/30 hover:bg-surface/60 hover:border-orange/40 hover:shadow-[0_0_60px_rgba(244,93,0,0.18)] transition-all duration-500 overflow-hidden"
      data-hover
    >
      {/* Background illustration */}
      <ProjectBgSvg className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700" />

      <div className="relative p-6 md:p-10 lg:p-12 h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange">
            ◼ Featured · 01
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
            CASE STUDY
          </span>
        </div>

        <h3
          className="font-display font-semibold text-ink leading-[0.95] mb-6 group-hover:translate-x-1 transition-transform duration-500"
          style={{ fontSize: 'clamp(38px, 5.2vw, 72px)' }}
        >
          {project.name}
        </h3>

        <p className="font-sans text-base md:text-xl text-ink/75 leading-relaxed max-w-2xl mb-8">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border border-line text-muted rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-end justify-between gap-4 border-t border-border-soft pt-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-2">
                Impact
              </div>
              <div className="font-syne text-lg md:text-2xl text-orange">{project.impact}</div>
            </div>
            <span className="font-mono text-2xl text-muted group-hover:text-orange group-hover:translate-x-1 transition-all">
              ↗
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index, variant }) {
  const isWide = variant === 'wide';
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay: index * 0.08 }}
      className={`group relative ${
        isWide ? 'col-span-12' : 'col-span-12 lg:col-span-4'
      } border border-border-soft bg-surface/30 hover:bg-surface/60 hover:border-orange/40 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(244,93,0,0.12)] transition-all duration-500`}
      data-hover
    >
      <div className="p-6 md:p-8 h-full flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
            0{index + 1} / Project
          </span>
          <span className="font-mono text-[10px] text-muted group-hover:text-orange transition-colors">
            ↗
          </span>
        </div>

        <h3 className="font-display font-semibold text-ink text-2xl md:text-3xl leading-tight mb-3 group-hover:text-orange transition-colors">
          {project.name}
        </h3>

        <p className="font-sans text-sm md:text-base text-ink/70 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border border-line text-muted rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="border-t border-border-soft pt-4">
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted mb-1.5">
              Impact
            </div>
            <div className="font-syne text-base text-orange leading-snug">{project.impact}</div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectBgSvg({ className }) {
  return (
    <svg viewBox="0 0 600 600" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="projGlow" cx="80%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#f45d00" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#f45d00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="600" fill="url(#projGlow)" />
      <g stroke="#1f1f1f" strokeWidth="1" fill="none">
        <circle cx="500" cy="100" r="80" />
        <circle cx="500" cy="100" r="140" strokeDasharray="3 6" />
        <circle cx="500" cy="100" r="200" strokeDasharray="2 10" />
      </g>
      <circle cx="500" cy="100" r="12" fill="#f45d00" />
      <g stroke="#2a2a2a" strokeWidth="1">
        <line x1="0" y1="550" x2="600" y2="550" />
        <line x1="0" y1="540" x2="600" y2="540" strokeDasharray="2 6" />
      </g>
    </svg>
  );
}
