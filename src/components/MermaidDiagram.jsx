import { useEffect, useRef, useState } from 'react';

let mermaidPromise = null;
function loadMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then((mod) => {
      const mermaid = mod.default;
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'loose',
        fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace',
        themeVariables: {
          background: '#0a0a0a',
          primaryColor: '#111111',
          primaryTextColor: '#f5f5f5',
          primaryBorderColor: '#2a2a2a',
          lineColor: '#6b6b6b',
          secondaryColor: '#111111',
          tertiaryColor: '#0a0a0a',
          nodeBorder: '#2a2a2a',
          clusterBkg: 'transparent',
          clusterBorder: '#2a2a2a',
          titleColor: '#f5f5f5',
          edgeLabelBackground: '#0a0a0a',
          fontSize: '13px',
        },
      });
      return mermaid;
    });
  }
  return mermaidPromise;
}

let idCounter = 0;

export default function MermaidDiagram({ chart, className = '' }) {
  const ref = useRef(null);
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const id = `mermaid-${++idCounter}-${Date.now()}`;
    loadMermaid()
      .then((mermaid) => mermaid.render(id, chart))
      .then(({ svg }) => {
        if (!cancelled) setSvg(svg);
      })
      .catch((e) => {
        if (!cancelled) setError(e.message || String(e));
      });
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="font-mono text-[11px] text-orange/80 border border-orange/40 bg-orange-dim p-4">
        // diagram failed: {error}
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="font-mono text-[11px] text-muted border border-border-soft bg-bg/40 p-6">
        // rendering diagram…
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`mermaid-host overflow-x-auto p-6 border border-border-soft bg-bg/60 ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
