// Caso de estudio "Plataforma Civil": plataforma web para coordinar un proyecto de construcción MEP
// entre la contratista principal y sus subcontratistas.
// Las capturas están en /public/images/platform-civil y salen del código actual, corriendo con datos de
// ejemplo inventados (empresas, personas y planos ficticios; el login es simulado).

import type { CaseStudy, L, Screen } from './caseStudy';

const IMG = '/images/platform-civil';

const screens: Screen[] = [
  {
    src: `${IMG}/login.webp`,
    title: { es: 'Inicio de sesión', en: 'Sign in' },
    caption: {
      es: 'Acceso con correo y contraseña. En esta versión de demostración el login es simulado y lista las cuentas de prueba (administradora y subcontratistas).',
      en: 'Email and password sign-in. In this demo version the login is simulated and lists the test accounts (administrator and subcontractors).',
    },
  },
  {
    src: `${IMG}/dashboard.webp`,
    title: { es: 'Dashboard', en: 'Dashboard' },
    caption: {
      es: 'Resumen del proyecto: RFIs pendientes, actividades en progreso, documentos por revisar y mensajes sin leer, con accesos rápidos a las tareas más frecuentes.',
      en: 'Project summary: pending RFIs, activities in progress, documents to review and unread messages, with shortcuts to the most frequent tasks.',
    },
  },
  {
    src: `${IMG}/rfi-bandeja.webp`,
    title: { es: 'Bandeja de RFIs', en: 'RFI inbox' },
    caption: {
      es: 'Las solicitudes de información del proyecto con estado, prioridad, privacidad (pública o privada), responsable y fecha límite con los días que faltan o que lleva vencida. Búsqueda, filtros y acciones por fila.',
      en: 'The project’s requests for information with status, priority, privacy (public or private), assignee and due date with the days left or overdue. Search, filters and per-row actions.',
    },
  },
  {
    src: `${IMG}/rfi-bandeja-sub.webp`,
    title: { es: 'Bandeja de RFIs (subcontratista)', en: 'RFI inbox (subcontractor)' },
    caption: {
      es: 'La misma bandeja vista por un subcontratista: solo aparecen las RFIs de su propia empresa (3 de las 9).',
      en: 'The same inbox seen by a subcontractor: only their own company’s RFIs appear (3 of the 9).',
    },
  },
  {
    src: `${IMG}/rfi-historial.webp`,
    title: { es: 'Historial de RFIs', en: 'RFI history' },
    caption: {
      es: 'Registro de cada RFI con su descripción, descargas, usuarios únicos y último acceso. Se puede ver como lista o como línea de tiempo.',
      en: 'Record of each RFI with its description, downloads, unique users and last access. Viewable as a list or as a timeline.',
    },
  },
  {
    src: `${IMG}/actividades.webp`,
    title: { es: 'Actividades semanales', en: 'Weekly activities' },
    caption: {
      es: 'Desglose del cronograma maestro en tareas de la semana, con subcontratista, ubicación, fechas, horas, equipos y materiales. Plantillas, importación y filtros por disciplina y estado.',
      en: 'Breakdown of the master schedule into the week’s tasks, with subcontractor, location, dates, hours, equipment and materials. Templates, import and filters by discipline and status.',
    },
  },
  {
    src: `${IMG}/seguimiento.webp`,
    title: { es: 'Seguimiento del avance', en: 'Progress tracking' },
    caption: {
      es: 'Navegación por semanas y, por actividad, el progreso planificado frente al real con la diferencia, además de fotos, comentarios y problemas registrados.',
      en: 'Week-by-week navigation and, per activity, planned versus actual progress with the gap, plus photos, comments and logged issues.',
    },
  },
  {
    src: `${IMG}/dependencias.webp`,
    title: { es: 'Dependencias entre actividades', en: 'Activity dependencies' },
    caption: {
      es: 'Qué actividades deben terminar antes de que otra pueda empezar. Muestra el responsable, la duración, el avance de cada predecesora y avisa cuando una actividad espera a otra.',
      en: 'Which activities must finish before another can start. Shows the owner, duration, each predecessor’s progress and warns when an activity is waiting on another.',
    },
  },
  {
    src: `${IMG}/reportes.webp`,
    title: { es: 'Reportes de subcontratistas', en: 'Subcontractor reports' },
    caption: {
      es: 'Vista de la administradora: todos los reportes semanales con su estado (pendiente, enviado, aprobado, rechazado), archivos adjuntos y problemas reportados, y botones para aprobar o rechazar.',
      en: 'Administrator view: every weekly report with its status (pending, submitted, approved, rejected), attached files and reported problems, plus approve and reject buttons.',
    },
  },
  {
    src: `${IMG}/reportes-sub.webp`,
    title: { es: 'Reportes (subcontratista)', en: 'Reports (subcontractor)' },
    caption: {
      es: 'El subcontratista solo ve y edita los reportes de su empresa; no puede aprobarlos ni rechazarlos.',
      en: 'The subcontractor only sees and edits their own company’s reports; they cannot approve or reject them.',
    },
  },
  {
    src: `${IMG}/maestro.webp`,
    title: { es: 'Cronograma maestro', en: 'Master schedule' },
    caption: {
      es: 'Carga de cronogramas (MS Project, Primavera P6, XML, CSV y Excel) con arrastrar y soltar, y la lista de versiones cargadas con sus descargas.',
      en: 'Schedule upload (MS Project, Primavera P6, XML, CSV and Excel) with drag and drop, and the list of uploaded versions with their downloads.',
    },
  },
  {
    src: `${IMG}/gantt.webp`,
    title: { es: 'Vista general (Gantt)', en: 'Project overview (Gantt)' },
    caption: {
      es: 'Progreso general, actividades completadas, en progreso y retrasadas, y el cronograma por actividad con contratista, fechas, barra de avance, estado y marca de ruta crítica. Alterna con vista de calendario.',
      en: 'Overall progress, completed, in-progress and delayed activities, and the schedule per activity with contractor, dates, progress bar, status and critical-path tag. Switches to a calendar view.',
    },
  },
  {
    src: `${IMG}/ruta-critica.webp`,
    title: { es: 'Ruta crítica', en: 'Critical path' },
    caption: {
      es: 'La cadena de actividades críticas por disciplina con su holgura y avance, las que están casi críticas y el nivel de riesgo general. Se puede exportar el reporte.',
      en: 'The chain of critical activities per discipline with their float and progress, the near-critical ones and the overall risk level. The report can be exported.',
    },
  },
  {
    src: `${IMG}/fechas.webp`,
    title: { es: 'Fechas importantes', en: 'Key dates' },
    caption: {
      es: 'Hitos, fechas límite e inspecciones en calendario o línea de tiempo, con prioridad, responsable, lugar y cuántos días antes se avisa.',
      en: 'Milestones, deadlines and inspections as a calendar or a timeline, with priority, owner, place and how many days ahead a reminder goes out.',
    },
  },
  {
    src: `${IMG}/repositorio.webp`,
    title: { es: 'Repositorio de documentos', en: 'Document repository' },
    caption: {
      es: 'Documentos de alcance con tipo, disciplina, versión, etiquetas, descargas y usuarios únicos, con enlace al historial completo de descargas.',
      en: 'Scope documents with type, discipline, version, tags, downloads and unique users, with a link to the full download history.',
    },
  },
  {
    src: `${IMG}/licitaciones.webp`,
    title: { es: 'Paquetes de licitación', en: 'Bid packages' },
    caption: {
      es: 'Paquetes para subcontratistas por etapa (preparación, activo, evaluación, cerrado) con documentos, licitantes, preguntas, valor estimado y días restantes.',
      en: 'Packages for subcontractors by stage (preparation, active, evaluation, closed) with documents, bidders, questions, estimated value and days left.',
    },
  },
  {
    src: `${IMG}/presupuestos.webp`,
    title: { es: 'Presupuestos', en: 'Budgets' },
    caption: {
      es: 'Solicitudes de presupuesto con motivo, valor estimado, prioridad y vencimiento. La contratista principal puede aprobarlas o rechazarlas.',
      en: 'Budget requests with reason, estimated value, priority and due date. The main contractor can approve or reject them.',
    },
  },
  {
    src: `${IMG}/qa.webp`,
    title: { es: 'Preguntas y respuestas', en: 'Questions & answers' },
    caption: {
      es: 'Módulo de preguntas de alcance durante la licitación: públicas o privadas, por categoría y prioridad, con la respuesta de la contratista en el mismo hilo.',
      en: 'Scope questions module during bidding: public or private, by category and priority, with the contractor’s answer in the same thread.',
    },
  },
  {
    src: `${IMG}/planos.webp`,
    title: { es: 'Control de planos', en: 'Drawings control' },
    caption: {
      es: 'Planos por disciplina y subcontrata con su revisión (Rev-01, Rev-02…), estado (borrador, en revisión, aprobado, superado) y autor.',
      en: 'Drawings by discipline and subcontractor with their revision (Rev-01, Rev-02…), status (draft, in review, approved, superseded) and author.',
    },
  },
  {
    src: `${IMG}/entregables.webp`,
    title: { es: 'Submittals', en: 'Submittals' },
    caption: {
      es: 'Entregables MEP con prioridad, fecha límite y fecha de envío; los vencidos se marcan en rojo. Se pueden ver los detalles y revisarlos.',
      en: 'MEP deliverables with priority, due date and sent date; overdue ones are flagged in red. Details can be opened and reviewed.',
    },
  },
  {
    src: `${IMG}/actas.webp`,
    title: { es: 'Actas de reunión', en: 'Meeting minutes' },
    caption: {
      es: 'Reuniones con tipo, fecha, asistentes, organizador y el conteo de decisiones y tareas acordadas. Ver, editar, descargar y eliminar.',
      en: 'Meetings with type, date, attendees, organizer and the count of decisions and tasks agreed. View, edit, download and delete.',
    },
  },
  {
    src: `${IMG}/chat.webp`,
    title: { es: 'Mensajería directa', en: 'Direct messaging' },
    caption: {
      es: 'Grupos por especialidad y conversaciones individuales ligadas al proyecto, con archivos adjuntos.',
      en: 'Groups per specialty and one-to-one conversations tied to the project, with file attachments.',
    },
  },
  {
    src: `${IMG}/notificaciones.webp`,
    title: { es: 'Notificaciones', en: 'Notifications' },
    caption: {
      es: 'Alertas por tipo y prioridad (nueva RFI, RFI respondida, actividad por vencer, documento actualizado, recordatorio de reunión), con filtro de no leídas y marcar todo como leído.',
      en: 'Alerts by type and priority (new RFI, RFI answered, activity due soon, document updated, meeting reminder), with an unread filter and mark-all-as-read.',
    },
  },
];

const features: { icon: string; title: L; body: L }[] = [
  {
    icon: 'help',
    title: { es: 'RFIs de punta a punta', en: 'End-to-end RFIs' },
    body: {
      es: 'Se crean con disciplina, especialidad, categoría, prioridad, ubicación, plano de referencia y adjuntos (PDF, Office, imágenes y DWG); se asignan a un responsable, se responden y quedan en un historial con descargas y usuarios únicos.',
      en: 'Created with discipline, specialty, category, priority, location, drawing reference and attachments (PDF, Office, images and DWG); assigned to an owner, answered and kept in a history with downloads and unique users.',
    },
  },
  {
    icon: 'calendar',
    title: { es: 'Programación semanal', en: 'Weekly scheduling' },
    body: {
      es: 'Actividades con equipos y materiales, plantillas e importación; seguimiento semanal del avance real frente al planificado; dependencias entre actividades y reportes de cada subcontratista.',
      en: 'Activities with equipment and materials, templates and import; weekly tracking of actual versus planned progress; dependencies between activities and a report from each subcontractor.',
    },
  },
  {
    icon: 'route',
    title: { es: 'Cronogramas y ruta crítica', en: 'Schedules & critical path' },
    body: {
      es: 'Carga de cronogramas de MS Project, Primavera P6, XML, CSV y Excel, vista Gantt y calendario, ruta crítica con holgura y riesgo, y seguimiento de fechas importantes con aviso previo.',
      en: 'Upload of MS Project, Primavera P6, XML, CSV and Excel schedules, Gantt and calendar views, critical path with float and risk, and tracking of key dates with advance notice.',
    },
  },
  {
    icon: 'target',
    title: { es: 'Alcance y licitaciones', en: 'Scope & bidding' },
    body: {
      es: 'Repositorio de documentos de alcance con versiones, paquetes de licitación por etapa, solicitudes de presupuesto con aprobación y un módulo de preguntas y respuestas con visibilidad pública o privada.',
      en: 'Scope document repository with versions, bid packages by stage, budget requests with approval and a questions-and-answers module with public or private visibility.',
    },
  },
  {
    icon: 'file',
    title: { es: 'Documentación técnica', en: 'Technical documentation' },
    body: {
      es: 'Control de planos por revisión y estado, especificaciones técnicas, submittals con fechas límite y un historial de descargas de todos los documentos generales.',
      en: 'Drawings control by revision and status, technical specifications, submittals with deadlines and a download history of all general documents.',
    },
  },
  {
    icon: 'chat',
    title: { es: 'Comunicaciones', en: 'Communications' },
    body: {
      es: 'Actas de reunión con decisiones y tareas, comunicaciones formales con respuesta esperada, mensajería directa y grupal, y notificaciones por tipo y prioridad.',
      en: 'Meeting minutes with decisions and tasks, formal communications with an expected reply, direct and group messaging, and notifications by type and priority.',
    },
  },
  {
    icon: 'shield',
    title: { es: 'Cada empresa ve lo suyo', en: 'Each company sees its own' },
    body: {
      es: 'La administradora ve todo el proyecto; un subcontratista solo ve las RFIs y los reportes de su empresa, y solo borra lo que subió él mismo.',
      en: 'The administrator sees the whole project; a subcontractor only sees their company’s RFIs and reports, and only deletes what they uploaded themselves.',
    },
  },
  {
    icon: 'widget',
    title: { es: 'Pensada para trabajar', en: 'Built for daily work' },
    body: {
      es: 'Menú lateral por módulo, tarjetas de resumen en cada pantalla, búsqueda y filtros, y un recordatorio visual de lo vencido o por vencer con colores consistentes.',
      en: 'Sidebar by module, summary cards on every screen, search and filters, and a visual reminder of what is overdue or about to be, with consistent colors.',
    },
  },
];

const rolesNotes: L[] = [
  {
    es: 'El acceso está protegido: sin sesión, cualquier ruta redirige al login; con sesión, el login redirige al dashboard.',
    en: 'Access is protected: without a session any route redirects to the login; with a session, the login redirects to the dashboard.',
  },
  {
    es: 'La sesión se guarda en el navegador y el login es simulado con cuentas de prueba, así que la demostración corre sin servidor.',
    en: 'The session is kept in the browser and the login is simulated with test accounts, so the demo runs without a server.',
  },
  {
    es: 'El modelo de usuario contempla cuatro roles (admin, ingeniero, contratista y subcontratista); en la demo se usan administradora y subcontratista.',
    en: 'The user model defines four roles (admin, engineer, contractor and subcontractor); the demo uses administrator and subcontractor.',
  },
];

const flows: { label: L; items: { title: L; tag?: L; strong?: boolean }[] }[] = [
  {
    label: { es: 'RFI', en: 'RFI' },
    items: [
      { title: { es: 'Se crea con disciplina, prioridad, ubicación y adjuntos', en: 'Created with discipline, priority, location and attachments' } },
      { title: { es: 'Abierta, asignada a un responsable con fecha límite', en: 'Open, assigned to an owner with a due date' }, tag: { es: 'Abierta', en: 'Open' } },
      { title: { es: 'El responsable la revisa', en: 'The owner reviews it' }, tag: { es: 'En revisión', en: 'In review' } },
      { title: { es: 'Se responde y se notifica', en: 'Answered and notified' }, tag: { es: 'Respondida', en: 'Answered' }, strong: true },
      { title: { es: 'Queda archivada con su historial', en: 'Archived with its history' }, tag: { es: 'Cerrada', en: 'Closed' } },
    ],
  },
  {
    label: { es: 'Reporte semanal de subcontratista', en: 'Subcontractor weekly report' },
    items: [
      { title: { es: 'El reporte queda a la espera', en: 'The report is waiting' }, tag: { es: 'Pendiente', en: 'Pending' } },
      { title: { es: 'El subcontratista lo completa y lo envía con adjuntos', en: 'The subcontractor completes and sends it with attachments' }, tag: { es: 'Enviado', en: 'Submitted' } },
      { title: { es: 'La administradora lo aprueba o lo rechaza', en: 'The administrator approves or rejects it' }, tag: { es: 'Aprobado / Rechazado', en: 'Approved / Rejected' }, strong: true },
    ],
  },
  {
    label: { es: 'Paquete de licitación', en: 'Bid package' },
    items: [
      { title: { es: 'Se arma con documentos y valor estimado', en: 'Built with documents and estimated value' }, tag: { es: 'Preparación', en: 'Preparation' } },
      { title: { es: 'Se publica y los licitantes hacen preguntas (Q&A)', en: 'Published and bidders ask questions (Q&A)' }, tag: { es: 'Activo', en: 'Active' } },
      { title: { es: 'Se comparan las propuestas', en: 'Proposals are compared' }, tag: { es: 'Evaluación', en: 'Evaluation' } },
      { title: { es: 'Se cierra', en: 'Closed' }, tag: { es: 'Cerrado', en: 'Closed' }, strong: true },
    ],
  },
  {
    label: { es: 'Revisión de un plano', en: 'Drawing review' },
    items: [
      { title: { es: 'Se sube una revisión', en: 'A revision is uploaded' }, tag: { es: 'Borrador', en: 'Draft' } },
      { title: { es: 'Se revisa', en: 'It is reviewed' }, tag: { es: 'En revisión', en: 'In review' } },
      { title: { es: 'Se aprueba', en: 'It is approved' }, tag: { es: 'Aprobado', en: 'Approved' }, strong: true },
      { title: { es: 'Una nueva revisión la reemplaza', en: 'A new revision replaces it' }, tag: { es: 'Superado', en: 'Superseded' } },
    ],
  },
];

const stack: { group: L; items: string[] }[] = [
  { group: { es: 'Interfaz', en: 'Interface' }, items: ['React 19', 'TypeScript 5.8', 'Tailwind CSS 3', 'Lucide Icons'] },
  { group: { es: 'Navegación y herramientas', en: 'Routing & tooling' }, items: ['React Router 7', 'Vite 6', 'ESLint'] },
  { group: { es: 'Datos de demostración', en: 'Demo data' }, items: ['JSON de ejemplo', 'localStorage', 'Autenticación simulada'] },
  { group: { es: 'Despliegue', en: 'Delivery' }, items: ['Netlify'] },
];

const architecture: { title: L; body: L }[] = [
  {
    title: { es: 'Una sola aplicación, módulo por carpeta', en: 'One app, one folder per module' },
    body: {
      es: 'Seis módulos (RFIs, programación semanal, alcance, cronogramas, documentación y comunicaciones) con 23 pantallas de trabajo, cada módulo con su menú de entrada, bajo un mismo layout con menú lateral y barra superior.',
      en: 'Six modules (RFIs, weekly scheduling, scope, schedules, documentation and communications) with 23 work screens, each module with its own landing menu, under one shared layout with a sidebar and top bar.',
    },
  },
  {
    title: { es: 'Rutas protegidas', en: 'Protected routes' },
    body: {
      es: 'React Router define las rutas por módulo y un componente raíz decide: sin sesión redirige al login, con sesión pinta el layout. Un contexto de autenticación entrega el usuario y su rol a todas las pantallas.',
      en: 'React Router defines the routes per module and a root component decides: without a session it redirects to the login, with one it renders the layout. An auth context gives every screen the user and their role.',
    },
  },
  {
    title: { es: 'Permisos por rol en la interfaz', en: 'Role permissions in the UI' },
    body: {
      es: 'Cada pantalla consulta el rol del usuario para filtrar lo que ve (por empresa) y habilitar o esconder acciones como aprobar, rechazar o eliminar.',
      en: 'Each screen checks the user’s role to filter what they see (by company) and to enable or hide actions such as approve, reject or delete.',
    },
  },
  {
    title: { es: 'Datos de ejemplo y persistencia local', en: 'Sample data and local persistence' },
    body: {
      es: 'No hay servidor: los datos de partida son JSON y objetos de ejemplo, y lo que el usuario crea o edita (por ejemplo una RFI nueva) se guarda en el navegador. La estructura de tipos está lista para conectarse a una API.',
      en: 'There is no server: the starting data is sample JSON and objects, and what the user creates or edits (for example a new RFI) is kept in the browser. The type structure is ready to be wired to an API.',
    },
  },
  {
    title: { es: 'Tipos compartidos', en: 'Shared types' },
    body: {
      es: 'Modelos TypeScript por dominio (RFIs, cronogramas, alcance, documentación y mensajes) con estados, prioridades y archivos adjuntos, para que las pantallas hablen el mismo lenguaje.',
      en: 'TypeScript models per domain (RFIs, schedules, scope, documentation and messages) with statuses, priorities and attachments, so every screen speaks the same language.',
    },
  },
];

export const platformCivil: CaseStudy = {
  id: 'platform-civil',
  name: 'Plataforma Civil',
  kicker: { es: 'Caso de estudio · Plataforma web', en: 'Case study · Web platform' },
  icon: `${IMG}/icon.webp`,
  cover: `${IMG}/cover.webp`,
  frame: 'browser',
  stack: 'React · TypeScript · Vite · Tailwind CSS · React Router',
  overview: {
    tagline: {
      es: 'Una plataforma web para coordinar un proyecto de construcción MEP: la contratista principal y sus subcontratistas llevan RFIs, programación, alcance, documentación y comunicaciones en un solo lugar.',
      en: 'A web platform to coordinate an MEP construction project: the main contractor and its subcontractors manage RFIs, scheduling, scope, documentation and communications in one place.',
    },
    problem: {
      es: 'En una obra MEP (mecánica, eléctrica y plomería) la información se reparte entre correos, hojas de cálculo, planos sueltos y mensajes. Cuesta saber qué consulta sigue abierta, qué actividad va atrasada, qué versión de un plano es la vigente o qué subcontratista ya reportó.',
      en: 'On an MEP job (mechanical, electrical and plumbing) information is scattered across emails, spreadsheets, loose drawings and messages. It is hard to know which query is still open, which activity is behind, which drawing version is current or which subcontractor has already reported.',
    },
    solution: {
      es: 'Plataforma Civil junta todo en seis módulos con un menú lateral. Las RFIs tienen responsable y fecha límite; la programación semanal compara el avance real con el planificado y enlaza las dependencias; los cronogramas muestran Gantt, calendario y ruta crítica; el alcance cubre licitaciones, presupuestos y preguntas; la documentación controla planos por revisión; y las comunicaciones reúnen actas, mensajes y notificaciones. Cada empresa solo ve lo suyo.',
      en: 'Plataforma Civil brings everything together in six modules with a sidebar. RFIs have an owner and a due date; weekly scheduling compares actual with planned progress and links dependencies; schedules show Gantt, calendar and critical path; scope covers bidding, budgets and questions; documentation controls drawings by revision; and communications gathers minutes, messages and notifications. Each company only sees its own.',
    },
    facts: [
      { k: { es: 'Plataforma', en: 'Platform' }, v: { es: 'Aplicación web (escritorio)', en: 'Web application (desktop)' } },
      { k: { es: 'Usuarios', en: 'Users' }, v: { es: 'Contratista principal y subcontratistas', en: 'Main contractor and subcontractors' } },
      { k: { es: 'Rol', en: 'Role' }, v: { es: 'Desarrollo del frontend', en: 'Frontend development' } },
      { k: { es: 'Periodo', en: 'Period' }, v: { es: 'Mayo - junio 2025', en: 'May - June 2025' } },
    ],
    numbers: [
      { n: '6', l: { es: 'módulos de gestión', en: 'management modules' } },
      { n: '23', l: { es: 'pantallas de trabajo', en: 'work screens' } },
      { n: '2', l: { es: 'vistas por rol (administradora y subcontratista)', en: 'role views (administrator and subcontractor)' } },
      { n: '5', l: { es: 'formatos de cronograma', en: 'schedule formats' } },
    ],
  },
  screens,
  features,
  sections: [
    {
      id: 'roles',
      label: { es: 'Roles y permisos', en: 'Roles & permissions' },
      intro: {
        es: 'Lo que cada persona ve depende de su empresa y su rol. La administradora de la contratista principal tiene el panorama completo; cada subcontratista trabaja solo con lo suyo.',
        en: 'What each person sees depends on their company and role. The main contractor’s administrator has the full picture; each subcontractor works only with their own.',
      },
      blocks: [
        {
          kind: 'matrix',
          columns: [
            { es: 'Qué ve', en: 'What they see' },
            { es: 'Qué puede hacer', en: 'What they can do' },
          ],
          rows: [
            {
              label: { es: 'Administradora', en: 'Administrator' },
              sub: { es: 'Contratista principal', en: 'Main contractor' },
              cells: [
                { es: 'Todas las RFIs, todos los reportes y todo el proyecto', en: 'All RFIs, all reports and the whole project' },
                { es: 'Solicitar reportes, aprobarlos o rechazarlos; aprobar presupuestos; responder preguntas; cambiar el acceso a documentos y eliminar cualquiera', en: 'Request reports, approve or reject them; approve budgets; answer questions; change document access and delete any' },
              ],
            },
            {
              label: { es: 'Subcontratista', en: 'Subcontractor' },
              sub: { es: 'Mecánicas, plomería, eléctricas…', en: 'Mechanical, plumbing, electrical…' },
              cells: [
                { es: 'Solo las RFIs y los reportes de su propia empresa', en: 'Only their own company’s RFIs and reports' },
                { es: 'Crear RFIs, completar y enviar sus reportes, pedir presupuestos, hacer preguntas y eliminar solo lo que subió', en: 'Create RFIs, complete and send their reports, request budgets, ask questions and delete only what they uploaded' },
              ],
            },
          ],
        },
        { kind: 'bullets', items: rolesNotes },
      ],
    },
    {
      id: 'flows',
      label: { es: 'Flujos de estado', en: 'Status flows' },
      intro: {
        es: 'Cada elemento importante pasa por estados claros, con colores y etiquetas que se repiten en todas las pantallas.',
        en: 'Every important item goes through clear statuses, with colors and labels repeated across all screens.',
      },
      blocks: flows.map((f) => ({ kind: 'steps' as const, label: f.label, items: f.items })),
    },
    {
      id: 'tech',
      label: { es: 'Arquitectura', en: 'Architecture' },
      blocks: [
        { kind: 'chips', groups: stack },
        { kind: 'cards', items: architecture },
      ],
    },
  ],
};
