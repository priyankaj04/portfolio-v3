import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import data from '../data/portfolio.json';
import SectionHeader from './SectionHeader.jsx';

const ease = [0.16, 1, 0.3, 1];

const TYPE_LABEL = {
  education: 'Education',
  work: 'Work',
  startup: 'Startup',
  current: 'Now',
};

export default function Timeline() {
  const { timeline } = data;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 30%'],
  });
  const threadHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="timeline"
      className="relative px-6 md:px-12 lg:px-16 py-28 md:py-40 border-b border-border-soft"
    >
      <SectionHeader
        index="03"
        label="The Story"
        title="A life, in code."
        meta="2020 — Now"
        accent="Scroll to unfurl"
      />

      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {/* Static thread */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-px bg-border-soft" />
        {/* Animated thread */}
        <motion.div
          className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 w-px"
          style={{
            height: threadHeight,
            background:
              'linear-gradient(to bottom, rgba(244,93,0,0) 0%, #f45d00 18%, #f45d00 82%, rgba(244,93,0,0) 100%)',
            boxShadow: '0 0 12px rgba(244,93,0,0.45)',
          }}
        />

        <ol className="relative space-y-16 md:space-y-24">
          {timeline.map((item, i) => {
            const isRight = i % 2 === 1;
            return (
              <li key={item.id} className="relative">
                {/* Node marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1 z-10 flex items-center justify-center">
                  <div
                    className={`relative h-3 w-3 rotate-45 ring-[6px] ring-bg ${
                      item.type === 'current' ? 'bg-orange shadow-[0_0_18px_rgba(244,93,0,0.7)]' : 'bg-ink'
                    }`}
                  >
                    {item.type === 'current' && (
                      <span className="absolute inset-0 animate-ping bg-orange" />
                    )}
                  </div>
                </div>

                {/* Grid layout — alternate sides on desktop */}
                <div className="md:grid md:grid-cols-2 md:gap-16">
                  {!isRight && (
                    <>
                      <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                        <TimelineCard item={item} align="right" />
                      </div>
                      <div className="hidden md:block" />
                    </>
                  )}
                  {isRight && (
                    <>
                      <div className="hidden md:block" />
                      <div className="pl-12 md:pl-12">
                        <TimelineCard item={item} align="left" />
                      </div>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* End marker */}
      <div className="mt-10 max-w-6xl mx-auto flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
        <span className="block h-px flex-1 bg-border-soft" />
        <span>End of thread · story continues</span>
        <span className="text-orange">◼</span>
      </div>
    </section>
  );
}

function TimelineCard({ item, align }) {
  const isCurrent = item.type === 'current';
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'right' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease }}
      className={`group relative inline-block w-full ${
        align === 'right' ? 'md:text-right' : 'md:text-left'
      }`}
    >
      <div
        className={`relative p-6 md:p-8 border ${
          isCurrent
            ? 'border-orange/50 bg-orange-dim'
            : 'border-border-soft bg-surface/40 hover:border-orange/40'
        } transition-all duration-500 hover:bg-surface/70`}
      >
        {/* Header row */}
        <div
          className={`flex items-center gap-3 mb-4 font-mono text-[10px] tracking-[0.3em] uppercase ${
            align === 'right' ? 'md:flex-row-reverse' : ''
          }`}
        >
          <span className={isCurrent ? 'text-orange' : 'text-muted'}>{item.year}</span>
          <span className="block h-px flex-1 max-w-12 bg-border-soft" />
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

        {/* Title */}
        <h3 className="font-syne text-2xl md:text-3xl font-semibold text-ink leading-tight mb-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-base text-ink/70 leading-relaxed">
          {item.description}
        </p>

        {/* Hover indicator */}
        <span
          className={`absolute top-0 ${
            align === 'right' ? 'right-0' : 'left-0'
          } h-full w-px bg-orange scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}
        />
      </div>
    </motion.div>
  );
}
