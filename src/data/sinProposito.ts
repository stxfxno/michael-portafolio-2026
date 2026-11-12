// Contenido del caso de estudio de "Sin Propósito" (app móvil), en español e inglés.
// Las capturas están en /public/images/sin-proposito y salen del código actual de la app (Expo, versión web).

type Lang = 'es' | 'en';
type L = Record<Lang, string>;

export type CaseSectionId = 'overview' | 'screens' | 'features' | 'points' | 'tech' | 'design' | 'friends';

export const IMG = '/images/sin-proposito';

export const caseMenu: { id: CaseSectionId; label: L }[] = [
  { id: 'overview', label: { es: 'Resumen', en: 'Overview' } },
  { id: 'screens', label: { es: 'Pantallas', en: 'Screens' } },
  { id: 'features', label: { es: 'Funciones', en: 'Features' } },
  { id: 'points', label: { es: 'Puntos y hábitos', en: 'Points & habits' } },
  { id: 'friends', label: { es: 'Amigos y privacidad', en: 'Friends & privacy' } },
  { id: 'design', label: { es: 'Diseño y colores', en: 'Design & colors' } },
  { id: 'tech', label: { es: 'Arquitectura', en: 'Architecture' } },
];

export const overview = {
  tagline: {
    es: 'Cumple tus metas de vida dividiéndolas en pasos pequeños, limita las apps que te distraen y aprovecha tus ratos libres.',
    en: 'Reach your life goals by breaking them into small steps, limit the apps that distract you and make the most of your free time.',
  },
  problem: {
    es: 'Las metas grandes (“comprarme un carro”, “terminar la tesis”) se sienten lejanas, y el tiempo libre se va en Instagram o TikTok sin darte cuenta. Las apps de tareas no saben cuándo estás libre ni cuánto usas el teléfono.',
    en: 'Big goals (“buy a car”, “finish my thesis”) feel far away, and free time disappears into Instagram or TikTok without noticing. To-do apps don’t know when you are free or how much you use your phone.',
  },
  solution: {
    es: 'Sin Propósito une las tres cosas: un árbol de metas → tareas → subtareas, tu horario semanal y el uso real de tus apps en Android. Cuando estás libre y ya pasaste tu límite, te sugiere el próximo paso de tus metas y te lo recuerda con tu propio “por qué”.',
    en: 'Sin Propósito brings the three together: a goals → tasks → subtasks tree, your weekly schedule and your real app usage on Android. When you are free and already over your limit, it suggests the next step of your goals and reminds you of your own “why”.',
  },
  facts: [
    { k: { es: 'Plataforma', en: 'Platform' }, v: { es: 'Android (nativa) · iPhone vía web', en: 'Android (native) · iPhone via web' } },
    { k: { es: 'Rol', en: 'Role' }, v: { es: 'Diseño y desarrollo completo', en: 'Full design & development' } },
    { k: { es: 'Fecha', en: 'Date' }, v: { es: 'Noviembre 2026', en: 'November 2026' } },
    { k: { es: 'Estado', en: 'Status' }, v: { es: 'En uso personal · build con EAS', en: 'In personal use · built with EAS' } },
  ],
  numbers: [
    { n: '19', l: { es: 'pantallas', en: 'screens' } },
    { n: '15', l: { es: 'tablas con RLS', en: 'tables with RLS' } },
    { n: '100%', l: { es: 'funciona sin conexión', en: 'works offline' } },
    { n: '∞', l: { es: 'niveles de subtareas', en: 'levels of subtasks' } },
  ],
};

export type Screen = { src: string; title: L; caption: L };

export const screens: Screen[] = [
  {
    src: `${IMG}/hoy.webp`,
    title: { es: 'Hoy', en: 'Today' },
    caption: {
      es: 'Tu día de un vistazo: aviso si ya pasaste el límite de una app (con tu “por qué”), el siguiente paso sugerido y los hábitos de hoy con su racha.',
      en: 'Your day at a glance: a warning when you go over an app limit (with your “why”), the suggested next step and today’s habits with their streak.',
    },
  },
  {
    src: `${IMG}/metas.webp`,
    title: { es: 'Metas', en: 'Goals' },
    caption: {
      es: 'Cada meta de vida con su progreso calculado solo a partir de sus tareas y subtareas, y el próximo paso pendiente.',
      en: 'Each life goal with progress computed automatically from its tasks and subtasks, plus the next pending step.',
    },
  },
  {
    src: `${IMG}/meta.webp`,
    title: { es: 'Detalle de meta', en: 'Goal detail' },
    caption: {
      es: 'Objetivo numérico (7 400 / 20 000 USD), fecha límite, próximo paso con botón para enfocarte y el árbol de tareas.',
      en: 'Numeric target (7,400 / 20,000 USD), deadline, next step with a focus button and the task tree.',
    },
  },
  {
    src: `${IMG}/enfoque-run.webp`,
    title: { es: 'Modo enfoque', en: 'Focus mode' },
    caption: {
      es: 'Temporizador a pantalla completa. Si abres una app con límite mientras corre, pierdes puntos. El tiempo se suma a la meta.',
      en: 'Full-screen timer. Opening a limited app while it runs costs points. The time is added to the goal.',
    },
  },
  {
    src: `${IMG}/apps.webp`,
    title: { es: 'Límites de apps', en: 'App limits' },
    caption: {
      es: 'Minutos al día por app. En Android lee el uso real con UsageStatsManager y bloquea la app al pasarte.',
      en: 'Daily minutes per app. On Android it reads real usage with UsageStatsManager and blocks the app once you go over.',
    },
  },
  {
    src: `${IMG}/horario.webp`,
    title: { es: 'Horario', en: 'Schedule' },
    caption: {
      es: 'Bloques semanales (clases, trabajo, gimnasio) + calendario del teléfono. Lo que queda libre entre despertar y dormir es “tiempo libre”.',
      en: 'Weekly blocks (classes, work, gym) + the phone calendar. Whatever is left between waking up and sleeping counts as “free time”.',
    },
  },
  {
    src: `${IMG}/perfil.webp`,
    title: { es: 'Perfil', en: 'Profile' },
    caption: {
      es: 'Puntos, racha, horas de enfoque y gráfico de puntos ganados vs. perdidos por semana o por mes.',
      en: 'Points, streak, focus hours and a chart of points earned vs. lost per week or month.',
    },
  },
  {
    src: `${IMG}/actividades.webp`,
    title: { es: 'Actividades y hábitos', en: 'Activities & habits' },
    caption: {
      es: 'Actividades para ratos libres que pueden repetirse ciertos días (piano lun/mié/vie) y llevan su propia racha.',
      en: 'Free-time activities that can repeat on certain days (piano Mon/Wed/Fri) and keep their own streak.',
    },
  },
  {
    src: `${IMG}/recompensas.webp`,
    title: { es: 'Premios', en: 'Rewards' },
    caption: {
      es: 'Canjea tus puntos por gustos que tú defines (“Pedir comida = 300 pts”).',
      en: 'Redeem your points for treats you define (“Order food = 300 pts”).',
    },
  },
  {
    src: `${IMG}/colores.webp`,
    title: { es: 'Colores', en: 'Colors' },
    caption: {
      es: 'Elige color principal, secundario y fondo, con vista previa en vivo.',
      en: 'Pick primary, secondary and background colors with a live preview.',
    },
  },
  {
    src: `${IMG}/login.webp`,
    title: { es: 'Inicio de sesión', en: 'Sign in' },
    caption: {
      es: 'Cuenta con Supabase Auth: tus metas, límites y horario viajan contigo entre dispositivos.',
      en: 'Supabase Auth account: your goals, limits and schedule follow you across devices.',
    },
  },
];

export const features: { icon: string; title: L; body: L }[] = [
  {
    icon: 'tree',
    title: { es: 'Metas en árbol', en: 'Goal trees' },
    body: {
      es: 'Meta → tareas → subtareas, sin límite de niveles. El progreso se calcula solo y una meta puede tener un objetivo numérico (USD, km, libros).',
      en: 'Goal → tasks → subtasks with unlimited depth. Progress is computed automatically and a goal can have a numeric target (USD, km, books).',
    },
  },
  {
    icon: 'hourglass',
    title: { es: 'Límites de apps', en: 'App limits' },
    body: {
      es: 'Eliges apps del teléfono y cuántos minutos al día. Un servicio de accesibilidad abre una pantalla de bloqueo si ya pasaste el límite (puedes comprar 5 min más con puntos).',
      en: 'Pick apps on your phone and how many minutes per day. An accessibility service opens a block screen once you go over (you can buy 5 more minutes with points).',
    },
  },
  {
    icon: 'sparkles',
    title: { es: 'Sugerencias en ratos libres', en: 'Free-time suggestions' },
    body: {
      es: 'Una tarea en segundo plano revisa cada ~15 min: si estás libre y ya pasaste tu límite, te notifica con una actividad o tarea “sugerible” que entra en el hueco.',
      en: 'A background task checks every ~15 min: if you are free and already over your limit, it notifies you with an activity or “suggestable” task that fits the gap.',
    },
  },
  {
    icon: 'target',
    title: { es: 'Fecha objetivo y pronóstico', en: 'Deadlines & forecast' },
    body: {
      es: 'Según tu ritmo, la app te dice si vas atrasado: “A este ritmo llegas en mayo 2028, 5 meses tarde”.',
      en: 'Based on your pace, the app tells you if you are behind: “At this pace you’ll get there in May 2028, 5 months late”.',
    },
  },
  {
    icon: 'timer',
    title: { es: 'Modo enfoque', en: 'Focus mode' },
    body: {
      es: 'Temporizador a pantalla completa que detecta si abres apps con límite. Las horas se suman a la meta (“Tesis: 14 h este mes”).',
      en: 'Full-screen timer that detects when you open limited apps. Hours add up per goal (“Thesis: 14 h this month”).',
    },
  },
  {
    icon: 'calendar',
    title: { es: 'Horario + calendario', en: 'Schedule + calendar' },
    body: {
      es: 'Bloques semanales y calendarios del sistema (Samsung, Google). Aviso de sueño 30 min antes, aunque duermas después de medianoche.',
      en: 'Weekly blocks and system calendars (Samsung, Google). Sleep reminder 30 min before, even if you go to bed after midnight.',
    },
  },
  {
    icon: 'clipboard',
    title: { es: 'Revisión semanal', en: 'Weekly review' },
    body: {
      es: 'Cada domingo: horas libres vs. usadas en metas, apps vs. límites, tareas completadas, y eliges 1 a 3 prioridades para la semana.',
      en: 'Every Sunday: free hours vs. hours on goals, apps vs. limits, completed tasks, and you pick 1 to 3 priorities for the week.',
    },
  },
  {
    icon: 'widget',
    title: { es: 'Widget de Android', en: 'Android widget' },
    body: {
      es: 'Widget en la pantalla de inicio con tu próximo paso y tu tiempo libre, hecho con Jetpack Compose desde React (expo-widgets).',
      en: 'Home-screen widget with your next step and free time, built with Jetpack Compose from React (expo-widgets).',
    },
  },
];

export const pointsRules: { what: L; pts: string; good: boolean }[] = [
  { what: { es: 'Completar una tarea', en: 'Complete a task' }, pts: '+10', good: true },
  { what: { es: 'Cumplir un hábito (más con racha)', en: 'Do a habit (more with a streak)' }, pts: '+5', good: true },
  { what: { es: 'Cada 5 min de enfoque', en: 'Every 5 min of focus' }, pts: '+1', good: true },
  { what: { es: 'Terminar un bloque de enfoque', en: 'Finish a focus block' }, pts: '+5', good: true },
  { what: { es: 'Hacer la revisión semanal', en: 'Do the weekly review' }, pts: '+20', good: true },
  { what: { es: 'Recibir un ánimo de un amigo', en: 'Get a cheer from a friend' }, pts: '+2', good: true },
  { what: { es: 'Cada 15 min sobre el límite de una app', en: 'Every 15 min over an app limit' }, pts: '−5', good: false },
  { what: { es: 'Abrir una app con límite durante el enfoque', en: 'Open a limited app during focus' }, pts: '−10', good: false },
];

export const pointsNotes: L[] = [
  {
    es: 'Los puntos no se editan directo: cada suma o resta es una fila en el historial y un trigger de Postgres mantiene el total.',
    en: 'Points are never edited directly: every change is a history row and a Postgres trigger keeps the total.',
  },
  {
    es: 'Canjear un premio exige saldo suficiente, validado en la base de datos (no solo en la app).',
    en: 'Redeeming a reward requires enough balance, validated in the database (not only in the app).',
  },
  {
    es: 'La penalización por 15 min es configurable y nunca se cobra dos veces el mismo bloque, aunque se sincronice desde varios dispositivos.',
    en: 'The per-15-min penalty is configurable and the same block is never charged twice, even when syncing from several devices.',
  },
];

export const friends: { title: L; body: L }[] = [
  {
    title: { es: 'Invitar', en: 'Invite' },
    body: {
      es: 'Con un enlace (abre la app directo gracias a Android App Links), un código QR o un código de 6 letras. Vence en 7 días y sirve hasta 5 veces.',
      en: 'With a link (opens the app directly thanks to Android App Links), a QR code or a 6-letter code. Expires in 7 days, up to 5 uses.',
    },
  },
  {
    title: { es: 'Qué ven', en: 'What they see' },
    body: {
      es: 'Solo las metas que marcas como compartidas, tus rachas y horas de enfoque. Nunca tu uso de apps ni tu horario.',
      en: 'Only the goals you mark as shared, your streaks and focus hours. Never your app usage or schedule.',
    },
  },
  {
    title: { es: 'Ánimos', en: 'Cheers' },
    body: {
      es: 'Pueden mandarse ánimos (+2 pts, máx. 3 por amigo al día). Puedes eliminar o bloquear a cualquiera.',
      en: 'Friends can send cheers (+2 pts, max 3 per friend per day). You can remove or block anyone.',
    },
  },
  {
    title: { es: 'Seguridad', en: 'Security' },
    body: {
      es: 'Row Level Security en cada tabla: un usuario solo lee y edita sus filas, y los amigos solo ven lo compartido.',
      en: 'Row Level Security on every table: users only read and edit their own rows, and friends only see what is shared.',
    },
  },
];

export const design = {
  intro: {
    es: 'Estilo monocromo inspirado en apps de respiración: fondo negro, contornos finos, anillos y tipografía ligera. Cada persona puede elegir su color principal, secundario y de fondo.',
    en: 'Monochrome style inspired by breathwork apps: black background, thin outlines, rings and light type. Each person can pick their own primary, secondary and background colors.',
  },
  pairs: [
    { a: `${IMG}/hoy.webp`, b: `${IMG}/hoy-color.webp`, label: { es: 'Hoy', en: 'Today' } },
    { a: `${IMG}/perfil.webp`, b: `${IMG}/perfil-color.webp`, label: { es: 'Perfil', en: 'Profile' } },
    { a: `${IMG}/metas.webp`, b: `${IMG}/metas-color.webp`, label: { es: 'Metas', en: 'Goals' } },
  ],
  details: [
    { es: 'Animaciones con Reanimated: entradas escalonadas, toques con rebote, barras y anillos que se llenan.', en: 'Reanimated animations: staggered entrances, springy taps, filling bars and rings.' },
    { es: 'Iconos de Ionicons con selector propio para metas y actividades.', en: 'Ionicons with a custom picker for goals and activities.' },
    { es: 'Respeta las áreas seguras y la barra de navegación de Android.', en: 'Respects safe areas and the Android navigation bar.' },
  ] as L[],
};

export const stack: { group: L; items: string[] }[] = [
  { group: { es: 'App', en: 'App' }, items: ['React Native 0.88', 'Expo SDK 58', 'Expo Router', 'TypeScript', 'Zustand', 'Reanimated 4'] },
  { group: { es: 'Nativo (Android)', en: 'Native (Android)' }, items: ['Kotlin · Expo Modules', 'UsageStatsManager', 'AccessibilityService', 'Jetpack Compose widget'] },
  { group: { es: 'Backend', en: 'Backend' }, items: ['Supabase', 'PostgreSQL', 'Row Level Security', 'Triggers', 'Auth'] },
  { group: { es: 'Entrega', en: 'Delivery' }, items: ['EAS Build', 'Vercel (web + App Links)', 'PWA para iPhone'] },
];

export const architecture: { title: L; body: L }[] = [
  {
    title: { es: 'Offline-first', en: 'Offline-first' },
    body: {
      es: 'Todo se guarda primero en el teléfono (Zustand + AsyncStorage). Cada cambio entra a una cola que se sube en orden a Supabase cuando hay red, y al iniciar sesión se descarga todo.',
      en: 'Everything is saved on the phone first (Zustand + AsyncStorage). Each change goes into a queue that is pushed to Supabase in order when online, and everything is pulled on sign-in.',
    },
  },
  {
    title: { es: 'Módulo nativo de uso', en: 'Native usage module' },
    body: {
      es: 'Módulo Expo en Kotlin que lee el uso diario por app y un servicio de accesibilidad que detecta la app abierta y muestra la pantalla de bloqueo, incluso con la app cerrada.',
      en: 'Kotlin Expo module that reads daily usage per app, plus an accessibility service that detects the foreground app and shows the block screen, even when the app is closed.',
    },
  },
  {
    title: { es: 'Tareas en segundo plano', en: 'Background tasks' },
    body: {
      es: 'expo-background-task revisa cada ~15 min tu horario y uso para mandar sugerencias (máx. una cada 45 min) y cobra penalizaciones.',
      en: 'expo-background-task checks your schedule and usage every ~15 min to send suggestions (max one every 45 min) and charge penalties.',
    },
  },
  {
    title: { es: 'Base compartida, datos aislados', en: 'Shared database, isolated data' },
    body: {
      es: 'Vive en un proyecto Supabase compartido con otras apps: todas sus tablas usan el prefijo sp_ y un trigger crea el perfil solo para usuarios de esta app.',
      en: 'It lives in a Supabase project shared with other apps: all its tables use the sp_ prefix and a trigger creates the profile only for this app’s users.',
    },
  },
];

export const tables: { name: string; what: L }[] = [
  { name: 'sp_goals', what: { es: 'árbol de metas (parent_id, borrado en cascada)', en: 'goal tree (parent_id, cascade delete)' } },
  { name: 'sp_app_limits', what: { es: 'límites diarios por app', en: 'daily limits per app' } },
  { name: 'sp_app_usage_daily', what: { es: 'uso diario y penalizaciones cobradas', en: 'daily usage and charged penalties' } },
  { name: 'sp_points_history', what: { es: 'cada suma/resta de puntos', en: 'every point change' } },
  { name: 'sp_focus_sessions', what: { es: 'bloques de enfoque', en: 'focus blocks' } },
  { name: 'sp_habit_logs', what: { es: 'hábitos cumplidos por día', en: 'habits done per day' } },
  { name: 'sp_weekly_reviews', what: { es: 'revisión semanal y prioridades', en: 'weekly review and priorities' } },
  { name: 'sp_friendships · sp_cheers', what: { es: 'amistades y ánimos', en: 'friendships and cheers' } },
];
