// Decorative SVG thread — not currently used in Timeline.jsx
// (Timeline uses a CSS-driven motion div for the animated thread, which
// achieves the same visual but with better runtime performance.)
// Kept here for reference / future swap.

export default function TimelineThread({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 4 1000"
      preserveAspectRatio="none"
      fill="none"
      stroke="#f45d00"
      strokeWidth="2"
    >
      <line x1="2" y1="0" x2="2" y2="1000" strokeDasharray="1000" strokeDashoffset="0" />
    </svg>
  );
}
