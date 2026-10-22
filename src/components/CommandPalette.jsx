import { useEffect, useState } from 'react';
import {
  Search,
  ArrowUpRight,
  Code2,
  User,
  Layers,
  GraduationCap,
  Copy,
  Check,
  Globe,
  X,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function CommandPalette({
  isOpen,
  onClose,
  lang,
  setLang,
  t,
  onSelectSection,
}) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onSelectSection(null, true);
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectSection]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'sec-sobre',
      group: lang === 'pt' ? 'Navegação' : 'Navigation',
      label: lang === 'pt' ? 'Ir para 01. Sobre Mim' : 'Go to 01. About',
      icon: User,
      run: () => {
        onSelectSection('sobre');
        onClose();
      },
    },
    {
      id: 'sec-projetos',
      group: lang === 'pt' ? 'Navegação' : 'Navigation',
      label: lang === 'pt' ? 'Ir para 02. Projetos em Destaque' : 'Go to 02. Featured Projects',
      icon: Code2,
      run: () => {
        onSelectSection('projetos');
        onClose();
      },
    },
    {
      id: 'sec-arquitetura',
      group: lang === 'pt' ? 'Navegação' : 'Navigation',
      label: lang === 'pt' ? 'Ir para 03. Stack & Engenharia' : 'Go to 03. Stack & Engineering',
      icon: Layers,
      run: () => {
        onSelectSection('arquitetura');
        onClose();
      },
    },
    {
      id: 'sec-trajetoria',
      group: lang === 'pt' ? 'Navegação' : 'Navigation',
      label: lang === 'pt' ? 'Ir para 04. Formação & Arquivo' : 'Go to 04. Education & Archive',
      icon: GraduationCap,
      run: () => {
        onSelectSection('trajetoria');
        onClose();
      },
    },
    ...t.featuredProjects.map((proj) => ({
      id: `proj-${proj.id}`,
      group: lang === 'pt' ? 'Projetos' : 'Projects',
      label: proj.title,
      icon: ArrowUpRight,
      run: () => {
        const el = document.getElementById(`project-${proj.id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        onClose();
      },
    })),
    {
      id: 'act-lang',
      group: lang === 'pt' ? 'Ações Rápidas' : 'Quick Actions',
      label:
        lang === 'pt'
          ? 'Switch language to English (EN)'
          : 'Mudar idioma para Português (PT-BR)',
      icon: Globe,
      run: () => {
        setLang(lang === 'pt' ? 'en' : 'pt');
        onClose();
      },
    },
    {
      id: 'act-email',
      group: lang === 'pt' ? 'Ações Rápidas' : 'Quick Actions',
      label: `${t.copyEmail} (${PROFILE.email})`,
      icon: copied ? Check : Copy,
      run: () => {
        navigator.clipboard.writeText(PROFILE.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 700);
      },
    },
    {
      id: 'act-github',
      group: 'Links',
      label: 'GitHub — @MateusIrineu',
      icon: ArrowUpRight,
      run: () => {
        window.open(PROFILE.github, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'act-linkedin',
      group: 'Links',
      label: 'LinkedIn — Mateus Irineu',
      icon: ArrowUpRight,
      run: () => {
        window.open(PROFILE.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.group.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/75 px-4 pt-20 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-slate-800 bg-[#0d1322] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-slate-800/80 px-4 py-3">
          <Search className="mr-3 h-4 w-4 text-teal-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'pt'
                ? 'Buscar projetos, seções ou ações...'
                : 'Search projects, sections, or actions...'
            }
            className="w-full bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="rounded p-1 text-slate-500 hover:bg-slate-800 hover:text-slate-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="py-6 text-center text-xs text-slate-500">
              {lang === 'pt' ? 'Nenhum resultado encontrado.' : 'No results found.'}
            </p>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.run}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-slate-300 transition hover:bg-teal-400/10 hover:text-teal-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-slate-500" />
                    <span>{item.label}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    {item.group}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-900/40 px-4 py-2 text-[11px] text-slate-500">
          <span>ESC {lang === 'pt' ? 'para fechar' : 'to close'}</span>
          <span className="font-mono">Mateus Irineu • Portfolio</span>
        </div>
      </div>
    </div>
  );
}
