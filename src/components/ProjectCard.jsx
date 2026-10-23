import { useState } from 'react';
import {
  ArrowUpRight,
  Cpu,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  AlertCircle,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';

export default function ProjectCard({
  project,
  t,
  highlightedTech,
  isExpandedDefault = false,
}) {
  const [showArch, setShowArch] = useState(isExpandedDefault);
  const [simIndex, setSimIndex] = useState(0);

  const isHighlightedByTech =
    highlightedTech &&
    project.tech.some((item) =>
      item.toLowerCase().includes(highlightedTech.toLowerCase())
    );

  return (
    <article
      id={`project-${project.id}`}
      className={`group relative rounded-xl border p-5 transition-all duration-300 sm:p-6 ${
        isHighlightedByTech
          ? 'border-teal-400/50 bg-teal-950/20 shadow-[0_0_30px_-10px_rgba(45,212,191,0.25)]'
          : 'border-slate-800/80 bg-slate-900/30 hover:border-slate-700/80 hover:bg-slate-800/40'
      }`}
    >
      {/* Top Meta Header */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-teal-400">
            {project.year}
          </span>
          <span className="text-slate-700">•</span>
          <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-teal-300">
            {project.badge}
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/90 px-2.5 py-1 font-mono text-[11px] text-slate-300">
          <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
          {project.highlightMetric}
        </span>
      </div>

      {/* Project Title with External Link */}
      <h3 className="text-lg font-semibold leading-snug text-slate-100 group-hover:text-teal-300 transition-colors">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 focus:outline-none"
        >
          <span>{project.title}</span>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-teal-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </h3>

      {/* Problem vs Solution Grid (High Signal / Objective) */}
      <div className="mt-4 space-y-2.5">
        <div className="flex items-start gap-2.5 rounded-lg border border-red-500/15 bg-red-950/10 p-3 text-xs leading-relaxed text-slate-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
          <div>
            <strong className="font-mono uppercase tracking-wider text-rose-300">
              {t.problemLabel}:{' '}
            </strong>
            <span>{project.problemStatement}</span>
          </div>
        </div>

        <div className="flex items-start gap-2.5 rounded-lg border border-teal-500/20 bg-teal-950/15 p-3 text-xs leading-relaxed text-slate-300">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
          <div>
            <strong className="font-mono uppercase tracking-wider text-teal-300">
              {t.solutionLabel}:{' '}
            </strong>
            <span>{project.solutionStatement}</span>
          </div>
        </div>
      </div>

      {/* Engineering Challenges & Mitigations */}
      <div className="mt-4 rounded-lg border border-slate-800/80 bg-slate-950/40 p-3.5">
        <div className="mb-2 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-300">
          <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
          <span>{t.challengesLabel}</span>
        </div>
        <ul className="space-y-1.5 text-xs text-slate-400">
          {project.engineeringMitigations.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 leading-relaxed">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Pills */}
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologias utilizadas">
        {project.tech.map((techItem) => {
          const isMatch =
            highlightedTech &&
            techItem.toLowerCase().includes(highlightedTech.toLowerCase());
          return (
            <li key={techItem}>
              <span
                className={`inline-block rounded-full px-2.5 py-1 font-mono text-[11px] transition-colors ${
                  isMatch
                    ? 'bg-teal-400 text-slate-950 font-semibold'
                    : 'border border-teal-400/15 bg-teal-400/10 text-teal-300/90'
                }`}
              >
                {techItem}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Action Footer */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/70 pt-4">
        <button
          type="button"
          onClick={() => setShowArch(!showArch)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 font-mono text-xs font-medium text-slate-200 transition hover:border-teal-400/50 hover:text-teal-300"
        >
          <Cpu className="h-3.5 w-3.5 text-teal-400" />
          <span>{showArch ? t.hideArch : t.viewArch}</span>
          {showArch ? (
            <ChevronUp className="h-3.5 w-3.5" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" />
          )}
        </button>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-slate-300 hover:text-teal-300 transition-colors"
        >
          <span>{t.sourceCode} (GitHub)</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Expandable Architecture & Pipeline Drawer */}
      {showArch && (
        <div className="mt-4 space-y-4 rounded-xl border border-slate-800 bg-[#070b12] p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-400">
              Pipeline de Engenharia & Fluxo de Dados
            </span>
            <span className="font-mono text-[10px] text-slate-500">
              ARCHITECTURE_FLOW
            </span>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            {project.architecture.pipeline.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-slate-800/90 bg-slate-900/50 p-3"
              >
                <div className="font-mono text-xs font-semibold text-slate-200">
                  {item.step}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800/80 pt-3">
            <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-300">
              Decisões de Projeto
            </div>
            <ul className="space-y-1.5">
              {project.architecture.decisions.map((dec, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs leading-relaxed text-slate-400"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                  <span>{dec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Simulator (ex: Kofrim) */}
          {project.simulator && (
            <div className="border-t border-slate-800/80 pt-3">
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-300">
                  <Sparkles className="h-3.5 w-3.5 text-teal-400" />
                  {t.trySimulator}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.simulator.map((sc, i) => (
                    <button
                      key={sc.label}
                      type="button"
                      onClick={() => setSimIndex(i)}
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition ${
                        simIndex === i
                          ? 'bg-teal-400 text-slate-950 font-semibold'
                          : 'border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 rounded-lg border border-slate-800/90 bg-slate-950 p-3 font-mono text-xs">
                <div className="flex items-start gap-2">
                  <span className="shrink-0 rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] text-emerald-300">
                    Input WhatsApp
                  </span>
                  <span className="text-slate-200">
                    &ldquo;{project.simulator[simIndex].userMsg}&rdquo;
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 rounded bg-blue-500/15 px-1.5 py-0.5 text-[10px] text-blue-300">
                    Gemini 3.8
                  </span>
                  <code className="break-all text-[11px] text-teal-300">
                    {project.simulator[simIndex].aiParsed}
                  </code>
                </div>
                <div className="flex items-start gap-2 border-t border-slate-900 pt-2">
                  <span className="shrink-0 rounded bg-purple-500/15 px-1.5 py-0.5 text-[10px] text-purple-300">
                    Resposta & DB
                  </span>
                  <p className="whitespace-pre-line text-[11px] leading-relaxed text-slate-300">
                    {project.simulator[simIndex].botReply}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
