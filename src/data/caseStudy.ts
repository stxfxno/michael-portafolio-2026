// Tipos compartidos por los casos de estudio que se abren con AppCaseStudy.
// Cada proyecto describe su contenido como datos (ES/EN) y el componente lo pinta.

export type Lang = 'es' | 'en';
export type L = Record<Lang, string>;

/** Marco de las capturas: teléfono (apps móviles) o navegador (web, 16:10). */
export type Frame = 'phone' | 'browser';

/** `frame` solo hace falta cuando un proyecto mezcla marcos (app móvil + panel web); si falta se usa el del proyecto. */
export type Screen = { src: string; title: L; caption: L; frame?: Frame };

export type Block =
  | { kind: 'text'; body: L; muted?: boolean }
  | { kind: 'cards'; items: { icon?: string; title: L; body: L }[] }
  | { kind: 'numbered'; items: { title: L; body: L }[] }
  | { kind: 'rules'; rows: { what: L; value: string; good: boolean }[] }
  | { kind: 'bullets'; items: L[]; image?: string }
  | { kind: 'table'; label?: L; rows: { name: string; what: L }[] }
  | { kind: 'chips'; groups: { group: L; items: string[] }[] }
  | { kind: 'pairs'; pairs: { a: string; b: string; label: L }[]; suffix: L; alt: [L, L] }
  | { kind: 'steps'; label?: L; items: { title: L; tag?: L; strong?: boolean }[] }
  | { kind: 'matrix'; label?: L; columns: L[]; rows: { label: L; sub?: L; cells: (boolean | L)[] }[] };

export type Section = {
  id: string;
  label: L;
  intro?: L;
  blocks: Block[];
  /** Capturas que acompañan la sección en una columna lateral. */
  aside?: string[];
  /** Marco de las capturas laterales; por defecto el del proyecto. */
  asideFrame?: Frame;
};

export type CaseStudy = {
  id: string;
  name: string;
  kicker: L;
  icon: string;
  cover: string;
  frame: Frame;
  stack: string;
  overview: {
    tagline: L;
    problem: L;
    solution: L;
    facts: { k: L; v: L }[];
    numbers: { n: string; l: L }[];
  };
  screens: Screen[];
  /** Títulos de grupo en la galería cuando las pantallas mezclan marcos (teléfono y navegador). */
  screenGroups?: { phone: L; browser: L };
  features: { icon: string; title: L; body: L }[];
  /** Secciones propias del proyecto; van después de Resumen, Pantallas y Funciones. */
  sections: Section[];
};
