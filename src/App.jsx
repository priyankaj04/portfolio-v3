import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Timeline from './components/Timeline.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const ProjectPage = lazy(() => import('./components/ProjectPage.jsx'));

function Home() {
  return (
    <main className="relative">
      <Hero />
      <Timeline />
      <Skills />
      <Contact />
    </main>
  );
}

function ProjectFallback() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
        // loading case study…
      </div>
    </main>
  );
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<ProjectFallback />}>
              <ProjectPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
