import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionHeader from './SectionHeader.jsx';
import SectionBackground from './SectionBackground.jsx';

const ease = [0.16, 1, 0.3, 1];

const TYPE_LABEL = {
  education: 'Education',
  work: 'Work',
  startup: 'Startup',
  opensource: 'Open Source',
  current: 'Now',
};

function highlightStats(text) {
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

export default function Timeline() {
  const { timeline } = data;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  });
  const threadHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="timeline"
      className="relative px-6 md:px-12 lg:px-16 py-28 md:py-40 border-b border-border-soft overflow-hidden"
    >
      <SectionBackground variant="plus" opacity={0.05} />
      <SectionHeader
        index="02"
        label="The Story"
        title="A life, in code."
        meta={`${timeline.length} chapters · 2020 — Now`}
        accent="Where I've been, what I've shipped"
      />

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* Static thread */}
        <div className="absolute top-0 bottom-0 left-5 md:left-8 w-px bg-border-soft" />
        {/* Animated thread */}
        <motion.div
          className="absolute top-0 left-5 md:left-8 w-px"
          style={{
            height: threadHeight,
            background:
              'linear-gradient(to bottom, rgba(244,93,0,0) 0%, #f45d00 12%, #f45d00 88%, rgba(244,93,0,0) 100%)',
            boxShadow: '0 0 12px rgba(244,93,0,0.45)',
          }}
        />

        <ol className="relative space-y-14 md:space-y-20">
          {timeline.map((item, i) => (
            <Chapter key={item.id} item={item} index={i} />
          ))}
        </ol>
      </div>

      {/* End marker */}
      <div className="mt-12 max-w-5xl mx-auto flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
        <span className="block h-px flex-1 bg-border-soft" />
        <span>End of thread · story continues</span>
        <span className="text-orange">◼</span>
      </div>
    </section>
  );
}

function Chapter({ item, index }) {
  const isCurrent = item.type === 'current';
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease }}
      className="relative"
    >
      {/* Node marker */}
      <div className="absolute left-5 md:left-8 -translate-x-1/2 top-1 z-10">
        <div
          className={`relative h-3 w-3 rotate-45 ring-[6px] ring-bg ${
            isCurrent ? 'bg-orange shadow-[0_0_18px_rgba(244,93,0,0.7)]' : 'bg-ink'
          }`}
        >
          {isCurrent && <span className="absolute inset-0 animate-ping bg-orange" />}
        </div>
      </div>

      <div className="pl-14 md:pl-20">
        <article
          className={`group relative border ${
            isCurrent
              ? 'border-orange/50 bg-orange-dim'
              : 'border-border-soft bg-surface/30 hover:bg-surface/60 hover:border-orange/40'
          } transition-all duration-500`}
        >
          <span
            className={`absolute top-0 left-0 h-full w-px bg-orange ${
              isCurrent ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
            } transition-transform duration-700 origin-top`}
          />

          <div className="relative p-6 md:p-10">
            {/* Header row */}
            <div className="flex items-start justify-between gap-6 mb-6">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-[10px] tracking-[0.3em] uppercase">
                  <span className={isCurrent ? 'text-orange' : 'text-muted'}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-orange">◆</span>
                  <span className={isCurrent ? 'text-orange' : 'text-muted'}>{item.year}</span>
                  <span
                    className={`px-2 py-1 border text-[9px] ${
                      isCurrent
                        ? 'border-orange text-orange'
                        : 'border-border-soft text-muted'
                    }`}
                  >
                    {TYPE_LABEL[item.type] || item.type}
                  </span>
                </div>
                <h3
                  className="font-display font-semibold text-ink leading-[0.95] group-hover:text-orange transition-colors"
                  style={{ fontSize: 'clamp(28px, 4.2vw, 52px)' }}
                >
                  {item.title}
                </h3>
              </div>
              <ChapterGlyph type={item.type} />
            </div>

            {item.details && item.details.brand && (
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border-soft">
                <div className="flex items-center gap-4">
                  <span className="block h-px w-10 bg-orange" />
                  <span
                    className="font-display font-semibold text-orange tracking-[0.3em] md:tracking-[0.4em]"
                    style={{ fontSize: 'clamp(22px, 2.6vw, 32px)' }}
                  >
                    {item.details.brand}
                  </span>
                </div>
                {item.details.url && (
                  <a
                    href={item.details.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/u inline-flex items-center gap-3 px-3 py-2 border border-border-soft hover:border-orange/60 transition-colors"
                  >
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink group-hover/u:text-orange transition-colors">
                      {displayUrl(item.details.url)}
                    </span>
                    <span className="font-mono text-muted group-hover/u:text-orange group-hover/u:translate-x-0.5 transition-all">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            )}

            {item.details && item.details.tagline && (
              <p
                className="font-display font-semibold text-ink leading-tight mb-5 max-w-3xl"
                style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}
              >
                {item.details.tagline}
              </p>
            )}

            <p className="font-sans text-base md:text-lg text-ink/75 leading-relaxed max-w-3xl">
              {item.description}
            </p>

            {item.details && <ChapterDetails type={item.type} details={item.details} />}
          </div>
        </article>
      </div>
    </motion.li>
  );
}

function ChapterDetails({ type, details }) {
  return (
    <div className="mt-8 space-y-8">
      {/* Education institute */}
      {type === 'education' && (
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border-soft">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
            // institute
          </span>
          <span className="block h-px w-6 bg-border-soft" />
          <span className="font-syne text-base md:text-lg text-ink">{details.institute}</span>
          {details.status && (
            <span
              className={`ml-auto inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase px-2 py-1 border ${
                details.status === 'Ongoing'
                  ? 'border-orange text-orange bg-orange-dim'
                  : 'border-border-soft text-muted'
              }`}
            >
              {details.status === 'Ongoing' ? (
                <span className="pulse-dot relative inline-block h-1.5 w-1.5 bg-orange rounded-full" />
              ) : (
                <span className="inline-block h-1.5 w-1.5 border border-muted rounded-full" />
              )}
              {details.status}
            </span>
          )}
        </div>
      )}

      {/* Stack pills (intern-era) */}
      {details.stack && (
        <div className="pt-6 border-t border-border-soft">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
            // stack
          </div>
          <div className="flex flex-wrap gap-2">
            {details.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border border-line text-muted rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      {details.highlights && details.highlights.length > 0 && (
        <div className="pt-6 border-t border-border-soft">
          <div className="flex items-center gap-3 mb-5 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
            <span>// highlights</span>
            <span className="block h-px flex-1 max-w-12 bg-border-soft" />
            <span>{String(details.highlights.length).padStart(2, '0')} items</span>
          </div>
          <ul className="space-y-3">
            {details.highlights.map((h, hi) => (
              <motion.li
                key={hi}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.05 + hi * 0.05 }}
                className="flex gap-4"
              >
                <span className="font-mono text-orange flex-shrink-0 pt-1 text-sm">→</span>
                <span className="font-sans text-ink/85 text-base leading-relaxed">
                  {highlightStats(h)}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Stats trio (case-study) */}
      {details.stats && details.stats.length > 0 && (
        <div className="pt-6 border-t border-border-soft">
          <StatsTrio stats={details.stats} />
        </div>
      )}

      {/* Features (case-study, /01 numbered) */}
      {details.features && details.features.length > 0 && (
        <div className="pt-6 border-t border-border-soft">
          <div className="flex items-center gap-3 mb-6 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
            <span>// features</span>
            <span className="block h-px flex-1 max-w-12 bg-border-soft" />
            <span>{String(details.features.length).padStart(2, '0')} of {String(details.features.length).padStart(2, '0')}</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {details.features.map((f, fi) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.05 + fi * 0.06 }}
                className="group/f relative border border-border-soft bg-bg/40 hover:border-orange/40 hover:bg-bg/70 transition-all duration-500 p-6"
              >
                <div className="font-mono text-[12px] tracking-[0.3em] text-orange mb-3">
                  /{String(fi + 1).padStart(2, '0')}
                </div>
                <h4 className="font-syne text-xl md:text-2xl font-semibold text-ink group-hover/f:text-orange transition-colors leading-tight mb-3">
                  {f.name}
                </h4>
                <p className="font-sans text-sm md:text-base text-ink/70 leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Terminal demo (case-study) */}
      {details.terminal && details.terminal.length > 0 && (
        <div className="pt-6 border-t border-border-soft">
          <div className="flex items-center gap-3 mb-5 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
            <span>// live ros2 console</span>
            <span className="block h-px flex-1 max-w-12 bg-border-soft" />
            <span>local — fleet</span>
          </div>
          <TerminalDemo lines={details.terminal} />
        </div>
      )}

      {/* Projects */}
      {details.projects && details.projects.length > 0 && (
        <div className="pt-6 border-t border-border-soft">
          <div className="flex items-center gap-3 mb-5 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
            <span>// shipped</span>
            <span className="block h-px flex-1 max-w-12 bg-border-soft" />
            <span>{String(details.projects.length).padStart(2, '0')} projects</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {details.projects.map((p) => (
              <ProjectMini key={p.name} project={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function displayUrl(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function StatsTrio({ stats }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.05 + i * 0.08 }}
          className="group/s relative border border-border-soft bg-bg/40 hover:border-orange/40 hover:bg-bg/70 transition-all duration-500 p-6"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-4">
            <span className="text-orange">{String(i + 1).padStart(2, '0')}</span>
            <span className="mx-2 text-border-soft">/</span>
            <span>{s.label}</span>
          </div>
          <div
            className="font-display font-semibold text-ink group-hover/s:text-orange transition-colors leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(24px, 3.2vw, 38px)' }}
          >
            {s.value}
          </div>
          <div className="h-px w-8 bg-orange mb-3" />
          <p className="font-sans text-sm text-ink/70 leading-relaxed">
            {s.detail}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function TerminalDemo({ lines }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
      className="border border-border-soft bg-bg/90 overflow-hidden font-mono"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border-soft bg-surface/60">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-[10px] tracking-[0.3em] uppercase text-muted">
          ferronyx ~ ros2
        </span>
      </div>
      {/* Body */}
      <div className="px-5 py-5 text-[12.5px] md:text-[13.5px] leading-[1.75]">
        {lines.map((line, i) => (
          <div key={i} className="grid grid-cols-[12px_1fr] gap-3">
            <span
              className={`select-none ${
                line.type === 'command' ? 'text-orange' : 'text-transparent'
              }`}
            >
              $
            </span>
            <span className={line.type === 'command' ? 'text-ink' : 'text-ink/70'}>
              {line.text}
              {line.cursor && (
                <span className="inline-block w-[7px] h-[14px] bg-orange ml-1 align-middle animate-blink" />
              )}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectMini({ project }) {
  const Wrapper = project.url ? motion.a : motion.div;
  const linkProps = project.url
    ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <Wrapper
      {...linkProps}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
      className="group/p relative block border border-border-soft bg-bg/40 hover:border-orange/40 hover:bg-bg/70 transition-all duration-500 p-5 overflow-hidden"
    >
      <ProjectBg />
      <div className="relative">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4 className="font-syne text-lg md:text-xl font-semibold text-ink group-hover/p:text-orange transition-colors leading-tight">
            {project.name}
          </h4>
          <span className="font-mono text-base text-muted group-hover/p:text-orange group-hover/p:translate-x-0.5 transition-all flex-shrink-0">
            {project.url ? '↗' : '◆'}
          </span>
        </div>
        <p className="font-sans text-sm text-ink/70 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border border-line text-muted rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="pt-3 border-t border-border-soft">
          <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted mb-1">
            Impact
          </div>
          <div className="font-syne text-sm md:text-base text-orange leading-snug">
            {project.impact}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

function ProjectBg() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 opacity-20 group-hover/p:opacity-60 transition-opacity duration-700"
      viewBox="0 0 100 100"
      fill="none"
      stroke="#f45d00"
      strokeWidth="0.6"
    >
      <circle cx="70" cy="30" r="22" />
      <circle cx="70" cy="30" r="34" strokeDasharray="2 4" />
      <circle cx="70" cy="30" r="3" fill="#f45d00" />
    </svg>
  );
}

function ChapterGlyph({ type }) {
  const cls =
    'shrink-0 w-14 h-14 md:w-20 md:h-20 text-muted group-hover:text-orange transition-colors duration-500';

  if (type === 'education') {
    return (
      <svg className={cls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M6 24 L32 12 L58 24 L32 36 Z" />
        <path d="M16 30 V44 Q32 52 48 44 V30" />
        <line x1="56" y1="24" x2="56" y2="40" />
        <circle cx="56" cy="42" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'work') {
    return (
      <svg className={cls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
        <rect x="6" y="14" width="52" height="38" rx="2" />
        <line x1="6" y1="22" x2="58" y2="22" />
        <circle cx="11" cy="18" r="0.9" fill="currentColor" />
        <circle cx="15" cy="18" r="0.9" fill="currentColor" />
        <circle cx="19" cy="18" r="0.9" fill="currentColor" />
        <path d="M14 32 L20 38 L14 44" />
        <line x1="26" y1="44" x2="40" y2="44" />
      </svg>
    );
  }

  if (type === 'startup') {
    return (
      <svg className={cls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
        {/* Antenna */}
        <line x1="32" y1="4" x2="32" y2="12" />
        <circle cx="32" cy="3.5" r="1.6" fill="currentColor" stroke="none" />
        {/* Head */}
        <rect x="18" y="12" width="28" height="20" rx="3" />
        <circle cx="26" cy="22" r="2" fill="currentColor" stroke="none" />
        <circle cx="38" cy="22" r="2" fill="currentColor" stroke="none" />
        <line x1="28" y1="28" x2="36" y2="28" />
        {/* Neck */}
        <line x1="29" y1="32" x2="29" y2="36" />
        <line x1="35" y1="32" x2="35" y2="36" />
        {/* Body */}
        <rect x="14" y="36" width="36" height="20" rx="2" />
        <circle cx="32" cy="46" r="3" />
        <circle cx="32" cy="46" r="0.9" fill="currentColor" stroke="none" />
        {/* Arms */}
        <path d="M14 42 L8 48 L8 55" />
        <path d="M50 42 L56 48 L56 55" />
      </svg>
    );
  }

  if (type === 'opensource') {
    return (
      <svg className={cls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="16" cy="16" r="5" />
        <circle cx="48" cy="16" r="5" />
        <circle cx="32" cy="48" r="5" />
        <path d="M16 21 V32 H48 V21" />
        <path d="M32 32 V43" />
        <path d="M22 52 L18 56" />
        <path d="M42 52 L46 56" />
      </svg>
    );
  }

  if (type === 'current') {
    return (
      <svg className={cls} viewBox="0 0 64 64" fill="none" stroke="#f45d00" strokeWidth="1.4">
        <circle cx="32" cy="32" r="5" fill="#f45d00" />
        <circle cx="32" cy="32" r="13" strokeDasharray="3 4" />
        <circle cx="32" cy="32" r="21" strokeDasharray="2 6" opacity="0.55" />
        <circle cx="32" cy="32" r="28" strokeDasharray="1 8" opacity="0.3" />
      </svg>
    );
  }

  return null;
}
