import { useState } from 'react';
import { ArrowUpRight, LayoutGrid } from 'lucide-react';
import AppCaseStudy from './AppCaseStudy';
import ProjectArchive from './ProjectArchive';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

interface Project {
  title: string;
  description: string;
  period: string;
  technologies: string[];
  primaryLanguage?: string;
  image: string;
  viewnow?: boolean;
  fullColor?: boolean; // sin filtro en blanco y negro
  caseStudy?: boolean; // abre la vista completa con menú al hacer clic
  badge?: string;
  links: {
    live?: string;
    github?: string;
    figma?: string;
    resources?: string;
  };
}

const ProjectRow = ({ project, index, onOpen }: { project: Project; index: number; onOpen?: () => void }) => {
  const { t, language } = useLanguage();
  const flip = index % 2 === 1;

  return (
    <article className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-t border-paper/20 items-center">
      {/* Imagen */}
      <div className={`lg:col-span-6 relative ${flip ? 'lg:order-2' : ''}`}>
        <div
          className={`relative aspect-[16/10] overflow-hidden border border-paper/15 ${onOpen ? 'cursor-pointer' : ''}`}
          onClick={onOpen}
        >
          {onOpen && (
            <span className="absolute bottom-3 left-3 z-10 tag bg-ink/80 border border-paper/30 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {language === 'es' ? 'Ver detalles' : 'View details'}
            </span>
          )}
          <img
            src={project.image}
            alt={`Captura de ${project.title}`}
            loading="lazy"
            className={`${project.fullColor ? '' : 'photo'} w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}
          />
        </div>
        <div className={`absolute -bottom-3 ${flip ? '-left-3' : '-right-3'} w-1/2 h-5 bg-violet origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
        <span className={`absolute -top-5 ${flip ? 'right-3' : 'left-3'} tag bg-paper text-ink px-2 py-1`}>{project.period}</span>
      </div>

      {/* Texto */}
      <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-start gap-5 mb-4">
          <span className="font-display text-6xl sm:text-7xl leading-none outline-violet group-hover:text-violet transition-colors duration-500">
            {String(index + 1).padStart(2, '0')}.
          </span>
          <h3 className="font-display uppercase text-4xl sm:text-5xl leading-[0.95] pt-1">
            <span className="group-hover:hl">{project.title}</span>
          </h3>
        </div>

        {project.badge && <p className="tag text-violet mb-3">{project.badge}</p>}
        <p className="text-paper/70 leading-relaxed mb-5 max-w-xl">{project.description}</p>

        <p className="tag text-paper/50 mb-6">
          {project.technologies.join('  /  ')}
        </p>

        <div className="flex flex-wrap items-center gap-6">
          {onOpen && (
            <button onClick={onOpen} className="btn-ink">
              <LayoutGrid size={14} /> {language === 'es' ? 'Ver detalles' : 'View details'}
            </button>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {project.viewnow ? t('projects.viewnow') : t('projects.demo')} <ArrowUpRight size={14} />
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {t('projects.repository')} <ArrowUpRight size={14} />
            </a>
          )}
          {project.links.figma && (
            <a href={project.links.figma} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {t('projects.figma')} <ArrowUpRight size={14} />
            </a>
          )}
          {project.links.resources && (
            <a href={project.links.resources} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {t('projects.resources')} <ArrowUpRight size={14} />
            </a>
          )}
          {!onOpen && !project.links.live && !project.links.github && !project.links.resources && !project.links.figma && (
            <span className="font-hand text-cobalt text-lg">{t('projects.private')}</span>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { t, language } = useLanguage();
  const [caseOpen, setCaseOpen] = useState(false);

  // Datos de proyectos con traducción condicional
  const projects: Project[] = language === 'es' ? [
    {
      title: "Sin Propósito",
      badge: "App móvil · Android + iPhone (web)",
      description: "App móvil para cumplir tus metas de vida dividiéndolas en tareas y subtareas, limitar el tiempo en las apps que te distraen y aprovechar tus ratos libres. Lee el uso real de apps en Android con un módulo nativo en Kotlin, bloquea apps al pasar el límite, sugiere el próximo paso cuando estás libre y premia el avance con puntos, rachas y amigos. Funciona sin conexión.",
      period: "Noviembre 2026",
      technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Kotlin"],
      image: "/images/sin-proposito/cover.webp",
      fullColor: true,
      caseStudy: true,
      links: {}
    },
    {
      title: "Gestión Documental BIM",
      description: "Plataforma web para equipos de construcción que centraliza el flujo de aprobación de archivos técnicos (planos, modelos, documentos). Ciclo de vida de 5 etapas con control de acceso por roles especializados (Coordinador BIM, Aprobador, Residente de obra). Modo offline-first con sincronización automática vía IndexedDB.",
      period: "Abril 2026",
      technologies: ["React", "TypeScript", "Tailwind", "Supabase", "IndexedDB"],
      image: "/images/gestion_documental.webp",
      links: {}
    },
    {
      title: "Sprinta AI",
      description: "Plataforma web con agente de IA para ventas por WhatsApp. Permite a emprendedores y negocios automatizar respuestas a leads, gestionarlos desde un CRM integrado y optimizar su proceso de ventas de forma inteligente.",
      period: "Marzo 2026",
      technologies: ["React", "TypeScript", "Tailwind", "Supabase"],
      image: "/images/sprinta.png",
      viewnow: true,
      links: {
        live: "https://sprinta.ai/landing"
      }
    },
    {
      title: "Plataforma — Eemerson SAC",
      description: "Plataforma web de gestión operativa para empresa de transporte de carga. Centraliza pagos a conductores (exportable a Excel), flota GPS vía Navitel, integración SUNAT OAuth para GRE, alertas de vencimientos sincronizadas con Odoo ERP, y un portal móvil-first para conductores con OCR y registro de gastos.",
      period: "Nov 2025 - Feb 2026",
      technologies: ["Next.js 14", "TypeScript", "Supabase", "Tailwind", "shadcn/ui"],
      image: "/images/eemersonsac_plataforma.webp",
      links: {}
    },
    {
      title: "Renaceris Plataforma",
      description: "Plataforma para la gestión de citas médicas de Renaceris, con roles diferenciados para recepcionistas y médicos, facilitando el control y seguimiento de pacientes en las 3 sedes.",
      period: "Ene - Abr 2026",
      technologies: ["React", "NestJS", "TypeScript", "Tailwind", "Supabase"],
      image: "/images/renaceris_plataforma.webp",
      fullColor: true,
      links: {}
    },
  ] : [
    {
      title: "Sin Propósito",
      badge: "Mobile app · Android + iPhone (web)",
      description: "Mobile app to reach your life goals by breaking them into tasks and subtasks, limit time on distracting apps and make the most of your free time. It reads real app usage on Android through a native Kotlin module, blocks apps once you go over the limit, suggests the next step when you are free and rewards progress with points, streaks and friends. Works offline.",
      period: "November 2026",
      technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Kotlin"],
      image: "/images/sin-proposito/cover.webp",
      fullColor: true,
      caseStudy: true,
      links: {}
    },
    {
      title: "BIM Document Management",
      description: "Web platform for construction teams that centralizes the approval workflow for technical files (plans, models, documents). 5-stage lifecycle with role-based access control (BIM Coordinator, Approver, Site Resident). Offline-first mode with automatic sync via IndexedDB.",
      period: "April 2026",
      technologies: ["React", "TypeScript", "Tailwind", "Supabase", "IndexedDB"],
      image: "/images/gestion_documental.webp",
      links: {}
    },
    {
      title: "Sprinta AI",
      description: "Web platform featuring an AI sales agent for WhatsApp. Enables entrepreneurs and businesses to automate lead responses, manage them through an integrated CRM, and streamline their sales process intelligently.",
      period: "March 2026",
      technologies: ["React", "TypeScript", "Tailwind", "Supabase"],
      image: "/images/sprinta.png",
      viewnow: true,
      links: {
        live: "https://sprinta.ai/landing"
      }
    },
    {
      title: "Platform — Eemerson SAC",
      description: "Operational management web platform for a freight transport company. Centralizes driver payments (exportable to Excel), GPS fleet tracking via Navitel, SUNAT OAuth integration for e-invoices, document expiry alerts synced with Odoo ERP, and a mobile-first driver portal with OCR and expense tracking.",
      period: "Nov 2025 - Feb 2026",
      technologies: ["Next.js 14", "TypeScript", "Supabase", "Tailwind", "shadcn/ui"],
      image: "/images/eemersonsac_plataforma.webp",
      links: {}
    },
    {
      title: "Renaceris Plataforma",
      description: "Platform for managing Renaceris medical appointments, with distinct roles for receptionists and doctors, streamlining patient control and follow-up across all 3 locations.",
      period: "Jan - Apr 2026",
      technologies: ["React", "NestJS", "TypeScript", "Tailwind", "Supabase"],
      image: "/images/renaceris_plataforma.webp",
      fullColor: true,
      links: {}
    },
  ];

  return (
    <section id="projects" className="py-24 scroll-mt-10">
      <SectionTitle
        number="02."
        title={t('projects.bigtitle')}
        subtitle={t('projects.description')}
      />

      <div>
        {projects.map((project, index) => (
          <Reveal key={project.title}>
            <ProjectRow project={project} index={index} onOpen={project.caseStudy ? () => setCaseOpen(true) : undefined} />
          </Reveal>
        ))}
      </div>

      <ProjectArchive />
      <AppCaseStudy open={caseOpen} onClose={() => setCaseOpen(false)} />
    </section>
  );
};

export default Projects;
