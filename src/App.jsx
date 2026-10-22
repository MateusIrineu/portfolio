import { useEffect, useState } from 'react';
import {
  Mail,
  Check,
  ArrowUpRight,
  MapPin,
  Command,
  Globe,
  Filter,
} from 'lucide-react';
import { CONTENT, PROFILE } from './data/portfolioData';
import ProjectCard from './components/ProjectCard';
import CommandPalette from './components/CommandPalette';

function GithubIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState('pt');
  const [activeSection, setActiveSection] = useState('sobre');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const [cmdOpen, setCmdOpen] = useState(false);

  const t = CONTENT[lang];

  // Mouse spotlight tracking (Brittany Chiang style)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll spy for editorial navigation
  useEffect(() => {
    const sections = ['sobre', 'projetos', 'arquitetura', 'trajetoria'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: 0.05 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const scrollToSection = (id, openPalette = false) => {
    if (openPalette) {
      setCmdOpen(true);
      return;
    }
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090d16] bg-editorial-grid text-slate-400 selection:bg-teal-300/20 selection:text-teal-200">
      {/* Dynamic Radial Cursor Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.075), transparent 80%)`,
        }}
      />

      {/* Top Subtle Accent Line */}
      <div className="fixed top-0 left-0 right-0 z-40 h-[2px] bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />

      {/* Main Split-Screen Container */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          {/* LEFT COLUMN — Sticky Editorial Identity & Navigation */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[43%] lg:flex-col lg:justify-between lg:py-20">
            <div>
              {/* Top Utility Controls: Availability + Lang + Cmd+K */}
              <div className="mb-8 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span>{t.status}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-xs font-medium text-slate-300 transition hover:border-teal-400/40 hover:text-teal-300"
                    title="Switch Language / Mudar Idioma"
                  >
                    <Globe className="h-3.5 w-3.5 text-teal-400" />
                    <span>{lang === 'pt' ? 'PT-BR' : 'EN'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCmdOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-xs text-slate-400 transition hover:border-teal-400/40 hover:text-teal-300"
                    title={t.cmdHint}
                  >
                    <Command className="h-3.5 w-3.5 text-teal-400" />
                    <span>Ctrl+K</span>
                  </button>
                </div>
              </div>

              {/* Identity Block */}
              <div className="flex items-center gap-4">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="h-16 w-16 rounded-2xl border border-slate-700/80 object-cover shadow-lg"
                />
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                    <a href="#sobre">{PROFILE.name}</a>
                  </h1>
                  <div className="mt-1 flex items-center gap-2 font-mono text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-teal-400" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>

              <h2 className="mt-5 text-lg font-medium tracking-tight text-teal-300 sm:text-xl">
                {t.role}
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                {t.tagline}
              </p>

              {/* Editorial Scroll-Spy Navigation (Desktop) */}
              <nav
                className="nav hidden lg:block"
                aria-label="Navegação principal"
              >
                <ul className="mt-12 w-max space-y-1">
                  {t.nav.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(item.id)}
                          className="group flex items-center py-2.5 text-left focus:outline-none"
                        >
                          <span
                            className={`mr-4 h-px transition-all duration-300 ${
                              isActive
                                ? 'w-14 bg-teal-300'
                                : 'w-7 bg-slate-600 group-hover:w-12 group-hover:bg-slate-300'
                            }`}
                          />
                          <span
                            className={`mr-2 font-mono text-xs transition-colors ${
                              isActive
                                ? 'text-teal-300 font-semibold'
                                : 'text-slate-500 group-hover:text-slate-300'
                            }`}
                          >
                            {item.number}.
                          </span>
                          <span
                            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                              isActive
                                ? 'text-slate-100'
                                : 'text-slate-500 group-hover:text-slate-200'
                            }`}
                          >
                            {item.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Bottom Social & Direct Contact Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 lg:mt-0 lg:pt-0">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-teal-400/50 hover:text-teal-300"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-teal-400/50 hover:text-teal-300"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-teal-400/30 bg-teal-400/10 px-3.5 py-2 font-mono text-xs font-medium text-teal-300 transition hover:bg-teal-400/20"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>{t.copiedEmail}</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4" />
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </header>

          {/* RIGHT COLUMN — Editorial Content Stream */}
          <main className="pt-16 lg:w-[57%] lg:py-20">
            {/* SECTION 01: ABOUT */}
            <section
              id="sobre"
              className="mb-20 scroll-mt-20 md:mb-28"
              aria-label={t.aboutTitle}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-teal-400">
                  01.
                </span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  {t.aboutTitle}
                </h2>
                <div className="h-px flex-1 bg-slate-800/80" />
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                {t.aboutParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Key Engineering Metrics Strip */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {t.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 transition hover:border-slate-700"
                  >
                    <div className="font-mono text-xl font-bold text-teal-300">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs leading-snug text-slate-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 02: FEATURED PROJECTS */}
            <section
              id="projetos"
              className="mb-20 scroll-mt-20 md:mb-28"
              aria-label={t.projectsTitle}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-teal-400">
                  02.
                </span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  {t.projectsTitle}
                </h2>
                <div className="h-px flex-1 bg-slate-800/80" />
              </div>

              <p className="mb-6 text-sm text-slate-400">
                {t.projectsSubtitle}
              </p>

              {/* Active Tech Filter Pill if selected */}
              {selectedTech && (
                <div className="mb-5 flex items-center justify-between rounded-lg border border-teal-400/30 bg-teal-400/10 px-3.5 py-2 text-xs text-teal-200">
                  <div className="flex items-center gap-2">
                    <Filter className="h-3.5 w-3.5 text-teal-400" />
                    <span>
                      {lang === 'pt'
                        ? `Destacando projetos com:`
                        : `Highlighting projects using:`}{' '}
                      <strong className="font-mono">{selectedTech}</strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTech(null)}
                    className="font-mono text-[11px] underline hover:text-white"
                  >
                    {lang === 'pt' ? 'Limpar filtro' : 'Clear filter'}
                  </button>
                </div>
              )}

              <div className="space-y-6">
                {t.featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    t={t}
                    highlightedTech={selectedTech}
                    isExpandedDefault={index === 0}
                  />
                ))}
              </div>
            </section>

            {/* SECTION 03: TECHNICAL STACK & ARCHITECTURE */}
            <section
              id="arquitetura"
              className="mb-20 scroll-mt-20 md:mb-28"
              aria-label={t.stackTitle}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-teal-400">
                  03.
                </span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  {t.stackTitle}
                </h2>
                <div className="h-px flex-1 bg-slate-800/80" />
              </div>

              <p className="mb-6 text-sm text-slate-400">{t.stackSubtitle}</p>

              <div className="grid gap-4 sm:grid-cols-3">
                {t.stackCategories.map((cat) => (
                  <div
                    key={cat.name}
                    className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5"
                  >
                    <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-teal-400">
                      {cat.name}
                    </h3>
                    <ul className="space-y-2">
                      {cat.items.map((item) => {
                        const isSelected = selectedTech === item.name;
                        return (
                          <li key={item.name}>
                            <button
                              type="button"
                              onClick={() => {
                                const next = isSelected ? null : item.name;
                                setSelectedTech(next);
                                if (next) {
                                  scrollToSection('projetos');
                                }
                              }}
                              onMouseEnter={() => setSelectedTech(item.name)}
                              onMouseLeave={() => setSelectedTech(null)}
                              className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition ${
                                isSelected
                                  ? 'bg-teal-400/20 text-teal-200 border border-teal-400/40'
                                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-slate-100'
                              }`}
                            >
                              <span className="font-medium">{item.name}</span>
                              <span className="font-mono text-[10px] text-slate-500">
                                {item.projects.length} proj
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 04: EDUCATION, JOURNEY & GITHUB ARCHIVE */}
            <section
              id="trajetoria"
              className="mb-16 scroll-mt-20"
              aria-label={t.journeyTitle}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-teal-400">
                  04.
                </span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  {t.journeyTitle}
                </h2>
                <div className="h-px flex-1 bg-slate-800/80" />
              </div>

              {/* Academic & Practical Timeline */}
              <div className="space-y-6">
                {t.journeyItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800/70 bg-slate-900/25 p-5 transition hover:border-slate-700/80"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-teal-400">
                        {item.period}
                      </span>
                      <span className="font-mono text-xs text-slate-500">
                        {item.org}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-base font-semibold text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-800/80 px-2.5 py-0.5 font-mono text-[11px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compact Editorial GitHub Archive Table */}
              <div className="mt-12">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                      {t.archiveTitle}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {t.archiveSubtitle}
                    </p>
                  </div>
                  <a
                    href={`${PROFILE.github}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-teal-400 hover:underline"
                  >
                    <span>55+ repos</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="divide-y divide-slate-800/70 rounded-xl border border-slate-800/80 bg-slate-900/20">
                  {t.archiveProjects.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between gap-2 p-4 transition hover:bg-slate-800/35 sm:flex-row sm:items-center"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-slate-500">
                            {item.year}
                          </span>
                          <span className="font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                            {item.name}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-400" />
                        </div>
                        <p className="mt-1 text-xs text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[11px] text-teal-300/80">
                        {item.tech}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Direct Contact Callout */}
              <div className="mt-12 rounded-2xl border border-teal-400/25 bg-gradient-to-br from-teal-950/30 via-slate-900/60 to-slate-900/30 p-6">
                <h3 className="text-lg font-semibold text-slate-100">
                  {t.ctaTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t.ctaText}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 font-mono text-xs font-semibold text-slate-950 transition hover:bg-teal-300"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>{t.copiedEmail}</span>
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4" />
                        <span>{PROFILE.email}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 font-mono text-xs font-medium text-slate-200 transition hover:border-teal-400/50 hover:text-teal-300"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Editorial Footer */}
            <footer className="border-t border-slate-800/60 pt-8 text-xs leading-relaxed text-slate-500">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <p>{t.footerText}</p>
                <p className="font-mono text-[11px] text-slate-400">
                  © {new Date().getFullYear()} {PROFILE.name}
                </p>
              </div>
            </footer>
          </main>
        </div>
      </div>

      {/* Global Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        lang={lang}
        setLang={setLang}
        t={t}
        onSelectSection={scrollToSection}
      />
    </div>
  );
}
