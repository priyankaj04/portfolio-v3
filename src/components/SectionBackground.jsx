const INK = '%23f5f5f5';

const PATTERNS = {
  dots: {
    backgroundImage: `radial-gradient(rgba(245,245,245,1) 1.2px, transparent 1.4px)`,
    backgroundSize: '26px 26px',
  },
  squares: {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><rect x='26' y='26' width='8' height='8' fill='none' stroke='${INK}' stroke-width='1'/></svg>")`,
    backgroundSize: '60px 60px',
  },
  diagonals: {
    backgroundImage: `repeating-linear-gradient(45deg, rgba(245,245,245,1) 0 1px, transparent 1px 48px)`,
  },
  plus: {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'><g stroke='${INK}' stroke-width='1.1' fill='none' stroke-linecap='round'><line x1='22' y1='16' x2='22' y2='28'/><line x1='16' y1='22' x2='28' y2='22'/></g></svg>")`,
    backgroundSize: '44px 44px',
  },
  rings: {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><circle cx='32' cy='32' r='3' fill='none' stroke='${INK}' stroke-width='1'/></svg>")`,
    backgroundSize: '64px 64px',
  },
  ticks: {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'><line x1='26' y1='20' x2='26' y2='32' stroke='${INK}' stroke-width='1.1' stroke-linecap='round'/></svg>")`,
    backgroundSize: '52px 52px',
  },
};

const MASKS = {
  none: null,
  fade: 'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)',
  center:
    'radial-gradient(ellipse at center, black 70%, transparent 100%)',
  top: 'linear-gradient(to bottom, transparent 0%, black 30%, black 100%)',
  bottom: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
};

export default function SectionBackground({
  variant = 'dots',
  opacity = 0.12,
  mask = 'fade',
  className = '',
}) {
  const pattern = PATTERNS[variant] || PATTERNS.dots;
  const maskImage = MASKS[mask];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        ...pattern,
        opacity,
        ...(maskImage
          ? { maskImage, WebkitMaskImage: maskImage }
          : {}),
      }}
    />
  );
}
