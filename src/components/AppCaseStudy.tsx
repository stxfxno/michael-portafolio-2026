import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Hourglass,
  LayoutGrid,
  Network,
  Smartphone,
  Sparkles,
  Target,
  Timer,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  IMG,
  architecture,
  caseMenu,
  design,
  features,
  friends,
  overview,
  pointsNotes,
  pointsRules,
  screens,
  stack,
  tables,
} from '../data/sinProposito';
import type { CaseSectionId } from '../data/sinProposito';

const featureIcons: Record<string, LucideIcon> = {
  tree: Network,
  hourglass: Hourglass,
  sparkles: Sparkles,
  target: Target,
  timer: Timer,
  calendar: CalendarDays,
  clipboard: ClipboardCheck,
  widget: LayoutGrid,
};

/** Captura dentro de un marco de teléfono. */
const Phone = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`rounded-[1.6rem] border border-paper/25 bg-coal p-1.5 shadow-[0_20px_50px_-20px_rgba(155,77,255,0.45)] ${className}`}>
    <img src={src} alt={alt} loading="lazy" className="block w-full rounded-[1.25rem] aspect-[390/844] object-cover object-top" />
  </div>
);

const H = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-display uppercase text-3xl sm:text-4xl leading-none mb-6">{children}</h4>
);

interface Props {
  open: boolean;
  onClose: () => void;
}

// Vista completa del proyecto "Sin Propósito": menú lateral con resumen, pantallas, funciones, etc.
const AppCaseStudy = ({ open, onClose }: Props) => {
  const { language } = useLanguage();
  const lang = language === 'es' ? 'es' : 'en';
  const es = lang === 'es';
  const [section, setSection] = useState<CaseSectionId>('overview');
  const [shot, setShot] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const go = useCallback((id: CaseSectionId) => {
    setSection(id);
    setShot(null);
    contentRef.current?.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (shot !== null) setShot(null);
        else onClose();
      }
      if (shot !== null && e.key === 'ArrowRight') setShot((shot + 1) % screens.length);
      if (shot !== null && e.key === 'ArrowLeft') setShot((shot - 1 + screens.length) % screens.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, shot, onClose]);

  if (!open) return null;

  const idx = caseMenu.findIndex((m) => m.id === section);
  const next = caseMenu[(idx + 1) % caseMenu.length];

  return (
    <div className="fixed inset-0 z-[70] bg-ink/85 backdrop-blur-sm sm:p-6 flex items-stretch justify-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sin Propósito"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl bg-ink border border-paper/25 flex flex-col overflow-hidden"
      >
        {/* Encabezado */}
        <header className="flex items-center gap-4 px-5 sm:px-8 py-4 border-b border-paper/20">
          <img src="/images/sin-proposito/icon.webp" alt="" className="w-10 h-10 rounded-xl border border-paper/20" />
          <div className="min-w-0 flex-1">
            <p className="tag text-violet">{es ? 'Caso de estudio · App móvil' : 'Case study · Mobile app'}</p>
            <h3 className="font-display uppercase text-2xl sm:text-3xl leading-none truncate">Sin Propósito</h3>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label={es ? 'Cerrar' : 'Close'}
            className="p-2 border border-paper/30 hover:bg-violet hover:text-ink transition-colors"
          >
            <X size={18} />
          </button>
        </header>

        <div className="flex-1 min-h-0 flex flex-col md:flex-row">
          {/* Menú */}
          <nav
            aria-label={es ? 'Secciones' : 'Sections'}
            className="md:w-60 shrink-0 border-b md:border-b-0 md:border-r border-paper/20 overflow-x-auto md:overflow-y-auto"
          >
            <ul className="flex md:flex-col gap-1 p-3 md:p-4 min-w-max md:min-w-0">
              {caseMenu.map((m, i) => {
                const active = m.id === section;
                return (
                  <li key={m.id}>
                    <button
                      onClick={() => go(m.id)}
                      aria-current={active ? 'page' : undefined}
                      className={`w-full flex items-center gap-3 px-3 py-2 md:py-2.5 text-left transition-colors ${
                        active ? 'bg-violet text-ink' : 'text-paper/70 hover:text-paper hover:bg-paper/5'
                      }`}
                    >
                      <span className="font-mono text-[0.65rem]">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-sm font-medium whitespace-nowrap">{m.label[lang]}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="hidden md:block px-4 pb-4 pt-2">
              <p className="tag text-paper/40 mb-2">Stack</p>
              <p className="text-xs text-paper/60 leading-relaxed">React Native · Expo · TypeScript · Supabase · Kotlin</p>
            </div>
          </nav>

          {/* Contenido */}
          <div ref={contentRef} className="flex-1 min-w-0 overflow-y-auto px-5 sm:px-8 py-8">
            {section === 'overview' && (
              <div>
                <div className="relative aspect-[16/10] overflow-hidden border border-paper/15 mb-8">
                  <img src={`${IMG}/cover.webp`} alt={es ? 'Pantallas de Sin Propósito' : 'Sin Propósito screens'} className="w-full h-full object-cover" />
                </div>
                <p className="font-serif italic text-2xl sm:text-3xl leading-snug mb-8 max-w-3xl">{overview.tagline[lang]}</p>
                <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15 border border-paper/15 mb-10">
                  {overview.facts.map((f) => (
                    <div key={f.k.en} className="bg-ink p-4">
                      <dt className="tag text-paper/45 mb-1">{f.k[lang]}</dt>
                      <dd className="text-sm">{f.v[lang]}</dd>
                    </div>
                  ))}
                </dl>
                <div className="grid lg:grid-cols-2 gap-8 mb-10">
                  <div>
                    <p className="tag text-violet mb-2">{es ? 'El problema' : 'The problem'}</p>
                    <p className="text-paper/75 leading-relaxed">{overview.problem[lang]}</p>
                  </div>
                  <div>
                    <p className="tag text-violet mb-2">{es ? 'La solución' : 'The solution'}</p>
                    <p className="text-paper/75 leading-relaxed">{overview.solution[lang]}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {overview.numbers.map((n) => (
                    <li key={n.l.en} className="border-t border-paper/25 pt-3">
                      <span className="font-display text-5xl text-violet leading-none">{n.n}</span>
                      <p className="tag text-paper/60 mt-2">{n.l[lang]}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section === 'screens' && (
              <div>
                <H>{es ? 'Pantallas' : 'Screens'}</H>
                {shot === null ? (
                  <>
                    <p className="text-paper/60 mb-6 text-sm">
                      {es ? 'Toca una pantalla para verla en grande.' : 'Tap a screen to see it larger.'}
                    </p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
                      {screens.map((s, i) => (
                        <li key={s.src}>
                          <button onClick={() => setShot(i)} className="group block w-full text-left">
                            <Phone src={s.src} alt={s.title[lang]} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-violet" />
                            <p className="mt-3 text-sm font-medium group-hover:text-violet transition-colors">
                              <span className="font-mono text-[0.65rem] text-paper/40 mr-2">{String(i + 1).padStart(2, '0')}</span>
                              {s.title[lang]}
                            </p>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div>
                    <button onClick={() => setShot(null)} className="link-arrow mb-6">
                      <ChevronLeft size={14} /> {es ? 'Todas las pantallas' : 'All screens'}
                    </button>
                    <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-8 items-center">
                      <Phone src={screens[shot].src} alt={screens[shot].title[lang]} className="max-w-[300px] w-full mx-auto" />
                      <div>
                        <p className="tag text-violet mb-2">
                          {String(shot + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}
                        </p>
                        <h5 className="font-display uppercase text-4xl leading-none mb-4">{screens[shot].title[lang]}</h5>
                        <p className="text-paper/75 leading-relaxed mb-8 max-w-md">{screens[shot].caption[lang]}</p>
                        <div className="flex gap-3">
                          <button
                            onClick={() => setShot((shot - 1 + screens.length) % screens.length)}
                            aria-label={es ? 'Anterior' : 'Previous'}
                            className="p-3 border border-paper/40 hover:bg-paper hover:text-ink transition-colors"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            onClick={() => setShot((shot + 1) % screens.length)}
                            aria-label={es ? 'Siguiente' : 'Next'}
                            className="p-3 border border-paper/40 hover:bg-paper hover:text-ink transition-colors"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <ul className="flex gap-3 overflow-x-auto mt-10 pb-2">
                      {screens.map((s, i) => (
                        <li key={s.src} className="shrink-0 w-16">
                          <button
                            onClick={() => setShot(i)}
                            aria-label={s.title[lang]}
                            className={`block w-full border-2 rounded-lg overflow-hidden transition-colors ${i === shot ? 'border-violet' : 'border-transparent opacity-50 hover:opacity-100'}`}
                          >
                            <img src={s.src} alt="" loading="lazy" className="block w-full aspect-[390/844] object-cover object-top" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {section === 'features' && (
              <div>
                <H>{es ? 'Funciones' : 'Features'}</H>
                <ul className="grid sm:grid-cols-2 gap-px bg-paper/15 border border-paper/15">
                  {features.map((f) => {
                    const Icon = featureIcons[f.icon] ?? Smartphone;
                    return (
                      <li key={f.title.en} className="bg-ink p-5">
                        <Icon size={20} className="text-violet mb-3" />
                        <p className="font-medium mb-1.5">{f.title[lang]}</p>
                        <p className="text-sm text-paper/65 leading-relaxed">{f.body[lang]}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {section === 'points' && (
              <div>
                <H>{es ? 'Puntos y hábitos' : 'Points & habits'}</H>
                <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
                  <div>
                    <p className="text-paper/70 leading-relaxed mb-6">
                      {es
                        ? 'Todo lo que te acerca a tus metas suma; distraerte resta. Los puntos se canjean por premios que tú defines.'
                        : 'Everything that moves you toward your goals adds up; getting distracted takes points away. Points are redeemed for rewards you define.'}
                    </p>
                    <table className="w-full text-sm border border-paper/15 mb-8">
                      <tbody>
                        {pointsRules.map((r) => (
                          <tr key={r.what.en} className="border-b border-paper/10 last:border-0">
                            <td className="p-3 text-paper/80">{r.what[lang]}</td>
                            <td className={`p-3 text-right font-mono whitespace-nowrap ${r.good ? 'text-violet' : 'text-[#ff5a5a]'}`}>{r.pts}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <ul className="space-y-3">
                      {pointsNotes.map((n) => (
                        <li key={n.en} className="flex gap-3 text-sm text-paper/65 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 bg-violet shrink-0" />
                          {n[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                    <Phone src={`${IMG}/actividades.webp`} alt={es ? 'Hábitos' : 'Habits'} />
                    <Phone src={`${IMG}/recompensas.webp`} alt={es ? 'Premios' : 'Rewards'} />
                  </div>
                </div>
              </div>
            )}

            {section === 'friends' && (
              <div>
                <H>{es ? 'Amigos y privacidad' : 'Friends & privacy'}</H>
                <p className="text-paper/70 leading-relaxed mb-8 max-w-2xl">
                  {es
                    ? 'Tener a alguien viendo tu progreso ayuda a no rendirse, pero el uso del teléfono es privado. Por eso los amigos solo ven lo que tú decides.'
                    : 'Having someone see your progress helps you not give up, but phone usage is private. That is why friends only see what you decide.'}
                </p>
                <ol className="grid sm:grid-cols-2 gap-6">
                  {friends.map((f, i) => (
                    <li key={f.title.en} className="border-t border-paper/25 pt-4">
                      <span className="font-display text-4xl outline-violet leading-none">{String(i + 1).padStart(2, '0')}.</span>
                      <p className="font-medium mt-2 mb-1.5">{f.title[lang]}</p>
                      <p className="text-sm text-paper/65 leading-relaxed">{f.body[lang]}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {section === 'design' && (
              <div>
                <H>{es ? 'Diseño y colores' : 'Design & colors'}</H>
                <p className="text-paper/70 leading-relaxed mb-3 max-w-2xl">{design.intro[lang]}</p>
                <p className="text-sm text-paper/50 mb-8 max-w-2xl">
                  {es
                    ? 'Izquierda: el tema por defecto (negro y blanco). Derecha: la misma pantalla con un tema violeta elegido desde Colores.'
                    : 'Left: the default theme (black and white). Right: the same screen with a violet theme picked in Colors.'}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  {design.pairs.map((p) => (
                    <li key={p.a}>
                      <div className="grid grid-cols-2 gap-2">
                        <Phone src={p.a} alt={`${p.label[lang]} · ${es ? 'monocromo' : 'monochrome'}`} className="p-1 rounded-2xl" />
                        <Phone src={p.b} alt={`${p.label[lang]} · ${es ? 'violeta' : 'violet'}`} className="p-1 rounded-2xl" />
                      </div>
                      <p className="tag text-paper/55 mt-3">
                        {p.label[lang]} · {es ? 'por defecto / tema violeta' : 'default / violet theme'}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="grid sm:grid-cols-[200px_1fr] gap-8 items-center">
                  <Phone src={`${IMG}/colores.webp`} alt={es ? 'Selector de colores' : 'Color picker'} className="max-w-[200px]" />
                  <ul className="space-y-3">
                    {design.details.map((d) => (
                      <li key={d.en} className="flex gap-3 text-sm text-paper/70 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-violet shrink-0" />
                        {d[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {section === 'tech' && (
              <div>
                <H>{es ? 'Arquitectura' : 'Architecture'}</H>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {stack.map((g) => (
                    <div key={g.group.en}>
                      <p className="tag text-violet mb-3">{g.group[lang]}</p>
                      <ul className="flex flex-wrap gap-2">
                        {g.items.map((t) => (
                          <li key={t} className="tag border border-paper/30 px-2 py-1 normal-case tracking-normal text-[0.72rem]">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <ul className="grid sm:grid-cols-2 gap-px bg-paper/15 border border-paper/15 mb-10">
                  {architecture.map((a) => (
                    <li key={a.title.en} className="bg-ink p-5">
                      <p className="font-medium mb-1.5">{a.title[lang]}</p>
                      <p className="text-sm text-paper/65 leading-relaxed">{a.body[lang]}</p>
                    </li>
                  ))}
                </ul>
                <p className="tag text-paper/45 mb-3">{es ? 'Algunas tablas (Supabase)' : 'Some tables (Supabase)'}</p>
                <table className="w-full text-sm border border-paper/15">
                  <tbody>
                    {tables.map((t) => (
                      <tr key={t.name} className="border-b border-paper/10 last:border-0">
                        <td className="p-3 font-mono text-xs text-violet whitespace-nowrap align-top">{t.name}</td>
                        <td className="p-3 text-paper/70">{t.what[lang]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Siguiente sección */}
            <div className="mt-12 pt-6 border-t border-paper/15 flex justify-end">
              <button onClick={() => go(next.id)} className="link-arrow">
                {es ? 'Siguiente' : 'Next'}: {next.label[lang]} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCaseStudy;
