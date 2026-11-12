import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Bell,
  CalendarClock,
  CalendarDays,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  Fingerprint,
  Hourglass,
  Landmark,
  LayoutGrid,
  Link2,
  MapPin,
  Megaphone,
  Minus,
  Network,
  Receipt,
  Route,
  ScanText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Timer,
  Truck,
  Users,
  Wallet,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Block, CaseStudy, Frame, Lang } from '../data/caseStudy';

const featureIcons: Record<string, LucideIcon> = {
  tree: Network,
  hourglass: Hourglass,
  sparkles: Sparkles,
  target: Target,
  timer: Timer,
  calendar: CalendarDays,
  clipboard: ClipboardCheck,
  widget: LayoutGrid,
  wallet: Wallet,
  receipt: Receipt,
  scan: ScanText,
  truck: Truck,
  route: Route,
  pin: MapPin,
  link: Link2,
  bell: Bell,
  users: Users,
  file: FileText,
  sheet: FileSpreadsheet,
  camera: Camera,
  shield: ShieldCheck,
  clock: CalendarClock,
  finger: Fingerprint,
  bank: Landmark,
  megaphone: Megaphone,
  phone: Smartphone,
};

/** Captura dentro de un marco de teléfono. */
const Phone = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`rounded-[1.6rem] border border-paper/25 bg-coal p-1.5 shadow-[0_20px_50px_-20px_rgba(155,77,255,0.45)] ${className}`}>
    <img src={src} alt={alt} loading="lazy" className="block w-full rounded-[1.25rem] aspect-[390/844] object-cover object-top" />
  </div>
);

/** Captura dentro de una ventana de navegador (16:10). */
const Browser = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`rounded-lg border border-paper/25 bg-coal overflow-hidden shadow-[0_20px_50px_-24px_rgba(155,77,255,0.45)] ${className}`}>
    <div className="flex items-center gap-1.5 px-2.5 h-5 sm:h-6 border-b border-paper/10">
      <i className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-paper/25" />
      <i className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-paper/25" />
      <i className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-paper/25" />
    </div>
    <img src={src} alt={alt} loading="lazy" className="block w-full aspect-[16/10] object-cover object-top" />
  </div>
);

const Shot = ({ frame, ...p }: { frame: Frame; src: string; alt: string; className?: string }) =>
  frame === 'phone' ? <Phone {...p} /> : <Browser {...p} />;

const H = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-display uppercase text-3xl sm:text-4xl leading-none mb-6">{children}</h4>
);

const Dot = () => <span className="mt-2 w-1.5 h-1.5 bg-violet shrink-0" />;

/** Pinta un bloque de contenido de una sección. */
const BlockView = ({ block, lang, frame }: { block: Block; lang: Lang; frame: Frame }) => {
  const es = lang === 'es';
  switch (block.kind) {
    case 'text':
      return <p className={`${block.muted ? 'text-sm text-paper/50' : 'text-paper/70'} leading-relaxed mb-8 max-w-2xl`}>{block.body[lang]}</p>;

    case 'cards':
      return (
        <ul className="grid sm:grid-cols-2 gap-px bg-paper/15 border border-paper/15 mb-10">
          {block.items.map((f) => {
            const Icon = f.icon ? featureIcons[f.icon] ?? Smartphone : null;
            return (
              <li key={f.title.en} className="bg-ink p-5">
                {Icon && <Icon size={20} className="text-violet mb-3" />}
                <p className="font-medium mb-1.5">{f.title[lang]}</p>
                <p className="text-sm text-paper/65 leading-relaxed">{f.body[lang]}</p>
              </li>
            );
          })}
        </ul>
      );

    case 'numbered':
      return (
        <ol className="grid sm:grid-cols-2 gap-6 mb-10">
          {block.items.map((f, i) => (
            <li key={f.title.en} className="border-t border-paper/25 pt-4">
              <span className="font-display text-4xl outline-violet leading-none">{String(i + 1).padStart(2, '0')}.</span>
              <p className="font-medium mt-2 mb-1.5">{f.title[lang]}</p>
              <p className="text-sm text-paper/65 leading-relaxed">{f.body[lang]}</p>
            </li>
          ))}
        </ol>
      );

    case 'rules':
      return (
        <table className="w-full text-sm border border-paper/15 mb-8">
          <tbody>
            {block.rows.map((r) => (
              <tr key={r.what.en} className="border-b border-paper/10 last:border-0">
                <td className="p-3 text-paper/80">{r.what[lang]}</td>
                <td className={`p-3 text-right font-mono whitespace-nowrap ${r.good ? 'text-violet' : 'text-[#ff5a5a]'}`}>{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );

    case 'bullets': {
      const list = (
        <ul className="space-y-3">
          {block.items.map((n) => (
            <li key={n.en} className="flex gap-3 text-sm text-paper/65 leading-relaxed">
              <Dot />
              {n[lang]}
            </li>
          ))}
        </ul>
      );
      if (!block.image) return <div className="mb-10">{list}</div>;
      return (
        <div className="grid sm:grid-cols-[200px_1fr] gap-8 items-center mb-10">
          <Shot frame={frame} src={block.image} alt="" className="max-w-[200px]" />
          {list}
        </div>
      );
    }

    case 'table':
      return (
        <div className="mb-10">
          {block.label && <p className="tag text-paper/45 mb-3">{block.label[lang]}</p>}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-paper/15">
              <tbody>
                {block.rows.map((t) => (
                  <tr key={t.name} className="border-b border-paper/10 last:border-0">
                    <td className="p-3 font-mono text-xs text-violet whitespace-nowrap align-top">{t.name}</td>
                    <td className="p-3 text-paper/70">{t.what[lang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'chips':
      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {block.groups.map((g) => (
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
      );

    case 'pairs':
      return (
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {block.pairs.map((p) => (
            <li key={p.a}>
              <div className="grid grid-cols-2 gap-2">
                <Phone src={p.a} alt={`${p.label[lang]} · ${block.alt[0][lang]}`} className="p-1 rounded-2xl" />
                <Phone src={p.b} alt={`${p.label[lang]} · ${block.alt[1][lang]}`} className="p-1 rounded-2xl" />
              </div>
              <p className="tag text-paper/55 mt-3">
                {p.label[lang]} · {block.suffix[lang]}
              </p>
            </li>
          ))}
        </ul>
      );

    case 'steps':
      return (
        <div className="mb-10">
          {block.label && <p className="tag text-paper/45 mb-3">{block.label[lang]}</p>}
          <ol className="border-l border-paper/20 ml-2">
            {block.items.map((s, i) => (
              <li key={s.title.en + i} className="relative pl-6 pb-3 last:pb-0">
                <span className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${s.strong ? 'bg-violet' : 'bg-ink border border-paper/40'}`} />
                <span className="font-mono text-[0.65rem] text-paper/40 mr-2">{String(i + 1).padStart(2, '0')}</span>
                <span className={`text-sm ${s.strong ? 'text-paper' : 'text-paper/70'}`}>{s.title[lang]}</span>
                {s.tag && <span className="tag text-violet ml-2 text-[0.6rem]">{s.tag[lang]}</span>}
              </li>
            ))}
          </ol>
        </div>
      );

    case 'matrix':
      return (
        <div className="mb-10">
          {block.label && <p className="tag text-paper/45 mb-3">{block.label[lang]}</p>}
          <div className="overflow-x-auto border border-paper/15">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-paper/15">
                  <th className="p-3 text-left tag text-paper/45 font-normal">{es ? 'Rol' : 'Role'}</th>
                  {block.columns.map((c) => (
                    <th key={c.en} className="p-3 text-center tag text-paper/45 font-normal">{c[lang]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((r) => (
                  <tr key={r.label.en} className="border-b border-paper/10 last:border-0 align-top">
                    <td className="p-3">
                      <p className="font-medium">{r.label[lang]}</p>
                      {r.sub && <p className="text-xs text-paper/50 mt-0.5 leading-snug">{r.sub[lang]}</p>}
                    </td>
                    {r.cells.map((c, i) =>
                      typeof c === 'boolean' ? (
                        <td key={i} className="p-3 text-center">
                          {c ? <Check size={16} className="inline text-violet" /> : <Minus size={16} className="inline text-paper/25" />}
                        </td>
                      ) : (
                        <td key={i} className="p-3 text-center text-xs text-paper/65 leading-snug">{c[lang]}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
};

interface Props {
  study: CaseStudy | null;
  onClose: () => void;
}

// Vista completa de un proyecto: menú lateral con resumen, pantallas, funciones y secciones propias.
const AppCaseStudy = ({ study, onClose }: Props) => {
  const { language } = useLanguage();
  const lang: Lang = language === 'es' ? 'es' : 'en';
  const es = lang === 'es';
  const [section, setSection] = useState('overview');
  const [shot, setShot] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = study !== null;
  const count = study?.screens.length ?? 0;

  const go = useCallback((id: string) => {
    setSection(id);
    setShot(null);
    contentRef.current?.scrollTo({ top: 0 });
  }, []);

  // Al abrir o cambiar de captura en el visor se vuelve arriba.
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [shot]);

  // Al abrir otro proyecto se vuelve al resumen.
  useEffect(() => {
    setSection('overview');
    setShot(null);
  }, [study?.id]);

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
      if (shot !== null && e.key === 'ArrowRight') setShot((shot + 1) % count);
      if (shot !== null && e.key === 'ArrowLeft') setShot((shot - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, shot, onClose, count]);

  if (!study) return null;

  const { frame, screens, overview } = study;
  const phone = frame === 'phone';
  const menu = [
    { id: 'overview', label: { es: 'Resumen', en: 'Overview' } },
    { id: 'screens', label: { es: 'Pantallas', en: 'Screens' } },
    { id: 'features', label: { es: 'Funciones', en: 'Features' } },
    ...study.sections.map((s) => ({ id: s.id, label: s.label })),
  ];
  const idx = menu.findIndex((m) => m.id === section);
  const next = menu[(idx + 1) % menu.length];
  const custom = study.sections.find((s) => s.id === section);

  return (
    <div className="fixed inset-0 z-[70] bg-ink/85 backdrop-blur-sm sm:p-6 flex items-stretch justify-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={study.name}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl bg-ink border border-paper/25 flex flex-col overflow-hidden"
      >
        {/* Encabezado */}
        <header className="flex items-center gap-4 px-5 sm:px-8 py-4 border-b border-paper/20">
          <img src={study.icon} alt="" className="w-10 h-10 rounded-xl border border-paper/20" />
          <div className="min-w-0 flex-1">
            <p className="tag text-violet">{study.kicker[lang]}</p>
            <h3 className="font-display uppercase text-2xl sm:text-3xl leading-none">{study.name}</h3>
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
              {menu.map((m, i) => {
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
              <p className="text-xs text-paper/60 leading-relaxed">{study.stack}</p>
            </div>
          </nav>

          {/* Contenido */}
          <div ref={contentRef} className="flex-1 min-w-0 overflow-y-auto px-5 sm:px-8 py-8">
            {section === 'overview' && (
              <div>
                <div className="relative aspect-[16/10] overflow-hidden border border-paper/15 mb-8">
                  <img src={study.cover} alt={es ? `Pantallas de ${study.name}` : `${study.name} screens`} className="w-full h-full object-cover" />
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
                    <ul className={`grid gap-x-5 gap-y-8 ${phone ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}>
                      {screens.map((s, i) => (
                        <li key={s.src}>
                          <button onClick={() => setShot(i)} className="group block w-full text-left">
                            <Shot frame={frame} src={s.src} alt={s.title[lang]} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-violet" />
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
                  <div className={phone ? '' : 'max-w-3xl mx-auto'}>
                    <button onClick={() => setShot(null)} className="link-arrow mb-6">
                      <ChevronLeft size={14} /> {es ? 'Todas las pantallas' : 'All screens'}
                    </button>
                    <div className={`grid gap-8 items-center ${phone ? 'md:grid-cols-[minmax(0,320px)_1fr]' : 'grid-cols-1'}`}>
                      <Shot frame={frame} src={screens[shot].src} alt={screens[shot].title[lang]} className={phone ? 'max-w-[300px] w-full mx-auto' : 'w-full'} />
                      <div className={phone ? '' : 'flex flex-col sm:flex-row sm:items-end gap-6 sm:justify-between'}>
                        <div>
                          <p className="tag text-violet mb-2">
                            {String(shot + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}
                          </p>
                          <h5 className="font-display uppercase text-4xl leading-none mb-4">{screens[shot].title[lang]}</h5>
                          <p className={`text-paper/75 leading-relaxed max-w-xl ${phone ? 'mb-8' : ''}`}>{screens[shot].caption[lang]}</p>
                        </div>
                        <div className="flex gap-3 shrink-0">
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
                        <li key={s.src} className={`shrink-0 ${phone ? 'w-16' : 'w-28'}`}>
                          <button
                            onClick={() => setShot(i)}
                            aria-label={s.title[lang]}
                            className={`block w-full border-2 rounded-lg overflow-hidden transition-colors ${i === shot ? 'border-violet' : 'border-transparent opacity-50 hover:opacity-100'}`}
                          >
                            <img src={s.src} alt="" loading="lazy" className={`block w-full object-cover object-top ${phone ? 'aspect-[390/844]' : 'aspect-[16/10]'}`} />
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
                <BlockView block={{ kind: 'cards', items: study.features }} lang={lang} frame={frame} />
              </div>
            )}

            {custom && (
              <div>
                <H>{custom.label[lang]}</H>
                {custom.aside ? (
                  <div className={`grid gap-8 items-start ${phone ? 'lg:grid-cols-[1fr_260px]' : 'xl:grid-cols-[1fr_340px]'}`}>
                    <div>
                      {custom.intro && <p className="text-paper/70 leading-relaxed mb-6">{custom.intro[lang]}</p>}
                      {custom.blocks.map((b, i) => (
                        <BlockView key={i} block={b} lang={lang} frame={frame} />
                      ))}
                    </div>
                    <div className={`grid gap-4 ${phone ? 'grid-cols-2 lg:grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-1'}`}>
                      {custom.aside.map((src) => (
                        <Shot key={src} frame={frame} src={src} alt="" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {custom.intro && <p className="text-paper/70 leading-relaxed mb-8 max-w-2xl">{custom.intro[lang]}</p>}
                    {custom.blocks.map((b, i) => (
                      <BlockView key={i} block={b} lang={lang} frame={frame} />
                    ))}
                  </>
                )}
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
