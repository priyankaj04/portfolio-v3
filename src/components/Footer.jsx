export default function Footer() {
  return (
    <footer className="relative border-t border-border-soft px-6 md:px-12 lg:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center font-mono text-[11px] tracking-[0.28em] uppercase text-muted">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 bg-peach" />
          <span>© 2026</span>
        </div>
        <div className="md:text-center" />
        <div className="md:text-right">
          Built with React × Framer Motion
        </div>
      </div>
      <div className="mt-8 h-px w-full bg-border-soft" />
    </footer>
  );
}
