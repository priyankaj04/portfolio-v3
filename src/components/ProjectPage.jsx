import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionBackground from './SectionBackground.jsx';
import MermaidDiagram from './MermaidDiagram.jsx';

const ease = [0.16, 1, 0.3, 1];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = data.projects[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return <NotFound slug={slug} />;
  }

  const otherSlugs = Object.keys(data.projects).filter((s) => s !== slug);

  return (
    <main className="relative pb-28">
      <SectionBackground variant="dots" opacity={0.06} mask="fade" />

      {/* Top band — back link + hero */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16 border-b border-border-soft overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(244,93,0,0.12) 0%, rgba(244,93,0,0.02) 50%, transparent 75%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <Link
            to="/#timeline"
            className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted hover:text-orange transition-colors mb-10"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-[10px] tracking-[0.3em] uppercase">
            <span className="text-orange">◆</span>
            <span className="text-muted">{project.company}</span>
            <span className="text-border-soft">/</span>
            <span className="text-muted">{project.role}</span>
            {project.year && (
              <>
                <span className="text-border-soft">/</span>
                <span className="text-muted">{project.year}</span>
              </>
            )}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="font-display font-semibold text-ink tracking-tight leading-[0.92]"
            style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}
          >
            {project.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="mt-6 max-w-3xl font-sans text-lg md:text-xl text-ink/80 leading-[1.55]"
          >
            {project.oneLiner}
          </motion.p>

          {/* Impact tiles */}
          {project.impact && project.impact.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
              className="mt-10 grid gap-3 grid-cols-1 md:grid-cols-3"
            >
              {project.impact.map((tile, i) => (
                <div
                  key={i}
                  className="border border-border-soft bg-bg/40 p-5 hover:border-orange/40 hover:bg-bg/70 transition-all duration-500"
                >
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                    <span className="text-orange">{String(i + 1).padStart(2, '0')}</span>
                    <span className="mx-2 text-border-soft">/</span>
                    <span>{tile.label}</span>
                  </div>
                  <div
                    className="font-display font-semibold text-orange leading-[1.05]"
                    style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}
                  >
                    {tile.metric}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Body sections */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-24 space-y-16 md:space-y-24">
        <Section index="01" label="Problem">
          <p className="font-sans text-base md:text-lg text-ink/80 leading-relaxed whitespace-pre-line">
            {project.problem}
          </p>
        </Section>

        {project.architecture && (
          <Section index="02" label="Architecture">
            <p className="font-sans text-base md:text-lg text-ink/80 leading-relaxed mb-8">
              {project.architecture.description}
            </p>
            {project.architecture.mermaid && (
              <MermaidDiagram chart={project.architecture.mermaid} />
            )}
          </Section>
        )}

        {project.stack && project.stack.length > 0 && (
          <Section index="03" label="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-line hover:border-orange hover:bg-orange-dim transition-all duration-300 rounded-full"
                >
                  <span className="font-mono text-[10px] text-muted">[</span>
                  <span className="font-syne text-sm text-ink/85">{t}</span>
                  <span className="font-mono text-[10px] text-muted">]</span>
                </span>
              ))}
            </div>
          </Section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <Section index="04" label="Challenges">
            <div className="grid gap-4 md:grid-cols-2">
              {project.challenges.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.05 + i * 0.06 }}
                  className="group border border-border-soft bg-bg/40 hover:border-orange/40 hover:bg-bg/70 transition-all duration-500 p-6"
                >
                  <div className="font-mono text-[11px] tracking-[0.3em] text-orange mb-3">
                    /{String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 className="font-syne text-lg md:text-xl font-semibold text-ink group-hover:text-orange transition-colors leading-tight mb-3">
                    {c.title}
                  </h4>
                  <p className="font-sans text-sm md:text-base text-ink/70 leading-relaxed">
                    {c.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {project.decisions && project.decisions.length > 0 && (
          <Section index="05" label="Key Decisions">
            <ul className="space-y-4">
              {project.decisions.map((d, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.05 + i * 0.06 }}
                  className="flex gap-5 border-b border-border-soft pb-4"
                >
                  <span className="font-mono text-orange flex-shrink-0 pt-1 text-sm">→</span>
                  <div className="flex-1">
                    <div className="font-syne text-base md:text-lg text-ink mb-1">{d.title}</div>
                    <p className="font-sans text-sm md:text-base text-ink/70 leading-relaxed">
                      {d.rationale}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </Section>
        )}

        {project.impactStory && (
          <Section index="06" label="Impact">
            <p className="font-sans text-base md:text-lg text-ink/80 leading-relaxed">
              {project.impactStory}
            </p>
          </Section>
        )}
      </div>

      {/* Footer — other case studies */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-16 mt-24 md:mt-32 pt-12 border-t border-border-soft">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-6">
          // other case studies
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {otherSlugs.map((s) => {
            const p = data.projects[s];
            return (
              <Link
                key={s}
                to={`/projects/${s}`}
                className="group block border border-border-soft bg-bg/40 hover:border-orange/40 hover:bg-bg/70 transition-all duration-500 p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-syne text-base md:text-lg font-semibold text-ink group-hover:text-orange transition-colors leading-tight">
                    {p.name}
                  </h4>
                  <span className="font-mono text-muted group-hover:text-orange group-hover:translate-x-0.5 transition-all flex-shrink-0">
                    →
                  </span>
                </div>
                <p className="font-sans text-sm text-ink/65 leading-relaxed">{p.oneLiner}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function Section({ index, label, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="flex items-center gap-3 mb-6 font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
        <span className="text-orange">{index}</span>
        <span className="block h-px w-8 bg-orange" />
        <span className="text-ink">{label}</span>
        <span className="block h-px flex-1 bg-border-soft" />
      </div>
      {children}
    </motion.section>
  );
}

function NotFound({ slug }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-orange mb-4">
          // 404
        </div>
        <h1 className="font-display font-semibold text-ink text-4xl mb-4">
          Case study not found
        </h1>
        <p className="font-sans text-ink/70 mb-8">
          No project matches the slug <code className="font-mono text-orange">{slug}</code>.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 border border-orange/60 text-orange font-syne text-sm tracking-[0.28em] uppercase hover:bg-orange hover:text-bg transition-colors"
        >
          ← Back to portfolio
        </Link>
      </div>
    </main>
  );
}
