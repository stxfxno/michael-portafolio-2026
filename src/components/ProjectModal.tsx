import { useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { MoreProject } from '../data/moreProjects';

interface ProjectModalProps {
  project: MoreProject | null;
  onClose: () => void;
}

// Vista de detalle de un proyecto: captura, estado, descripción, stack y enlaces.
const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t, language } = useLanguage();
  const es = language === 'es';
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { links } = project;
  const status = project.inactive
    ? project.inactiveNote ?? (es ? 'Inactivo' : 'Inactive')
    : es ? 'Activo' : 'Live';

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-ink/80 backdrop-blur-sm p-0 sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-ink border border-paper/25"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label={es ? 'Cerrar' : 'Close'}
          className="absolute top-3 right-3 z-10 p-2 bg-ink/80 border border-paper/30 hover:bg-violet hover:text-ink transition-colors"
        >
          <X size={18} />
        </button>

        <div className="aspect-[21/9] overflow-hidden border-b border-paper/20 bg-coal">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag bg-paper text-ink px-2 py-1">{project.period}</span>
            <span className={`tag border px-2 py-1 ${project.inactive ? 'border-paper/40' : 'border-violet text-violet'}`}>
              {status}
            </span>
          </div>

          <h3 className="font-display uppercase text-4xl sm:text-5xl leading-[0.95] mb-5">{project.title}</h3>
          <p className="text-paper/75 leading-relaxed whitespace-pre-line mb-6">{project.description}</p>

          <p className="tag text-paper/50 mb-2">{es ? 'Tecnologías' : 'Tech stack'}</p>
          <ul className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <li key={tech} className="tag border border-paper/30 px-2 py-1">
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer" className="btn-ink">
                {project.viewnow ? t('projects.viewnow') : t('projects.demo')} <ArrowUpRight size={14} />
              </a>
            )}
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-line">
                {t('projects.repository')} <ArrowUpRight size={14} />
              </a>
            )}
            {links.resources && (
              <a href={links.resources} target="_blank" rel="noopener noreferrer" className="btn-line">
                {t('projects.resources')} <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
