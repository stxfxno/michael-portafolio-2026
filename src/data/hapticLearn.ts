// Caso de estudio "HapticLearn" (tesis): app móvil para niñas y niños con discapacidad visual + panel web.
// Las capturas están en /public/images/haptic-learn y salen del código actual de la app (Expo, versión web)
// y del panel (Vite), corriendo con datos de ejemplo inventados (personas, colegio y cursos no son reales).

import type { CaseStudy, L, Screen } from './caseStudy';

const IMG = '/images/haptic-learn';

const screens: Screen[] = [
  {
    src: `${IMG}/home.webp`,
    title: { es: 'Mis cursos', en: 'My courses' },
    caption: {
      es: 'Cada curso del aula con su progreso en segmentos (una lección = un segmento), el porcentaje y un botón grande para empezar o continuar.',
      en: 'Each course of the classroom with its progress in segments (one lesson = one segment), the percentage and a big button to start or continue.',
    },
  },
  {
    src: `${IMG}/trazo.webp`,
    title: { es: 'Trazo táctil', en: 'Touch tracing' },
    caption: {
      es: 'Se sigue el contorno de la letra con el dedo. Si va bien el teléfono da un tic corto; si se sale del camino, un zumbido largo. Deja una estela naranja y muestra el porcentaje de precisión.',
      en: 'The finger follows the outline of the letter. On track the phone gives a short tick; off track, a long buzz. It leaves an orange trail and shows the accuracy percentage.',
    },
  },
  {
    src: `${IMG}/curso.webp`,
    title: { es: 'Curso', en: 'Course' },
    caption: {
      es: 'Lecciones en orden, con su tipo (letra, número, braille, quiz) y un ✓ en las completadas. Para entrar hay que tocar dos veces, así no se abre una por accidente.',
      en: 'Lessons in order, with their type (letter, number, braille, quiz) and a ✓ on the completed ones. You tap twice to enter, so none opens by accident.',
    },
  },
  {
    src: `${IMG}/quiz.webp`,
    title: { es: 'Quiz de opción múltiple', en: 'Multiple-choice quiz' },
    caption: {
      es: 'La pregunta y las opciones se leen en voz alta al abrir la lección. Al elegir, la app dice si fue correcta y vibra distinto para acierto y error.',
      en: 'The question and options are read aloud when the lesson opens. After choosing, the app says whether it was right and vibrates differently for hits and misses.',
    },
  },
  {
    src: `${IMG}/historial.webp`,
    title: { es: 'Historial', en: 'History' },
    caption: {
      es: 'Lecciones completadas, puntaje medio y progreso por curso, con la actividad reciente (intentos y fecha).',
      en: 'Completed lessons, average score and progress per course, with recent activity (attempts and date).',
    },
  },
  {
    src: `${IMG}/qr.webp`,
    title: { es: 'Mi QR', en: 'My QR' },
    caption: {
      es: 'Cada estudiante tiene su código QR. El docente lo escanea para sumarlo a su aula.',
      en: 'Each student has a QR code. The teacher scans it to add them to the classroom.',
    },
  },
  {
    src: `${IMG}/perfil.webp`,
    title: { es: 'Perfil y voz guía', en: 'Profile & voice guide' },
    caption: {
      es: 'Estado de la cuenta y el interruptor de “Voz guía (TalkBack)”, que hace que la app lea en voz alta lo que se toca.',
      en: 'Account status and the “Voice guide (TalkBack)” switch, which makes the app read aloud whatever is tapped.',
    },
  },
  {
    src: `${IMG}/login.webp`,
    title: { es: 'Inicio de sesión', en: 'Sign in' },
    caption: {
      es: 'Correo y contraseña. Muestra avisos claros si la cuenta está pendiente de verificar o suspendida.',
      en: 'Email and password. Shows clear notices when the account is pending verification or suspended.',
    },
  },
  {
    src: `${IMG}/docente.webp`,
    title: { es: 'Panel del docente', en: 'Teacher home' },
    caption: {
      es: 'Alumnos, activos hoy y progreso de todas las aulas, acciones rápidas (escanear QR, nuevo curso, crear quiz) y la lista de aulas.',
      en: 'Students, active today and progress across all classrooms, quick actions (scan QR, new course, create quiz) and the classroom list.',
    },
  },
  {
    src: `${IMG}/aulas.webp`,
    title: { es: 'Aulas', en: 'Classrooms' },
    caption: {
      es: 'Cada aula con sus alumnos, activos hoy, asistencia y progreso promedio.',
      en: 'Each classroom with its students, active today, attendance and average progress.',
    },
  },
  {
    src: `${IMG}/aula.webp`,
    title: { es: 'Detalle de aula', en: 'Classroom detail' },
    caption: {
      es: 'Educadores asignados, cursos del aula (publicado o borrador) y alumnos con su nivel inicial y actual.',
      en: 'Assigned educators, the classroom’s courses (published or draft) and students with their initial and current level.',
    },
  },
  {
    src: `${IMG}/alumno.webp`,
    title: { es: 'Detalle del estudiante', en: 'Student detail' },
    caption: {
      es: 'Compara el nivel inicial con el actual (Inicial, En progreso, Avanzado) y muestra el avance por curso.',
      en: 'Compares the initial level with the current one (Beginner, In progress, Advanced) and shows progress per course.',
    },
  },
  {
    src: `${IMG}/curso-docente.webp`,
    title: { es: 'Curso (docente)', en: 'Course (teacher)' },
    caption: {
      es: 'Publicar o dejar en borrador, agregar contenido del catálogo (letras, números, braille) o crear un quiz, y quitar lo que sobre.',
      en: 'Publish or keep as draft, add content from the catalog (letters, numbers, braille) or create a quiz, and remove what is not needed.',
    },
  },
  {
    src: `${IMG}/progreso.webp`,
    title: { es: 'Monitoreo de progreso', en: 'Progress monitoring' },
    caption: {
      es: 'Promedio general, alumnos con buen avance y los que necesitan apoyo, con filtros Todos / Alto / Bajo.',
      en: 'Overall average, students doing well and those who need support, with All / High / Low filters.',
    },
  },
  {
    src: `${IMG}/colegio.webp`,
    title: { es: 'Mi colegio', en: 'My school' },
    caption: {
      es: 'La directora ve su colegio con salones y educadoras, y puede dar de alta nuevas educadoras.',
      en: 'The principal sees their school with classrooms and educators, and can add new educators.',
    },
  },
  {
    src: `${IMG}/admin.webp`,
    title: { es: 'Resumen (admin)', en: 'Overview (admin)' },
    caption: {
      es: 'Totales de usuarios, colegios y patrones, estado de las cuentas y reparto por rol.',
      en: 'Totals of users, schools and patterns, account status and split by role.',
    },
  },
  {
    src: `${IMG}/admin-usuarios.webp`,
    title: { es: 'Usuarios', en: 'Users' },
    caption: {
      es: 'Lista filtrable por rol, alta de usuarios y activar o suspender cuentas.',
      en: 'List filterable by role, user creation and activating or suspending accounts.',
    },
  },
  {
    src: `${IMG}/admin-patrones.webp`,
    title: { es: 'Patrones hápticos', en: 'Haptic patterns' },
    caption: {
      es: 'Catálogo de vibraciones por categoría (braille, letra, número, respuestas, navegación, sistema). Se editan desde el panel web.',
      en: 'Catalog of vibrations by category (braille, letter, number, feedback, navigation, system). They are edited from the web panel.',
    },
  },
  // ── Panel web ─────────────────────────────────────────────
  {
    frame: 'browser',
    src: `${IMG}/panel-landing.webp`,
    title: { es: 'Página de inicio', en: 'Landing page' },
    caption: {
      es: 'Presenta el proyecto a las familias: escribir se siente con vibraciones y voz, compatible con TalkBack. Desde aquí se entra al panel.',
      en: 'Introduces the project to families: writing is felt through vibration and voice, TalkBack compatible. This is the way into the panel.',
    },
  },
  {
    frame: 'browser',
    src: `${IMG}/panel-login.webp`,
    title: { es: 'Acceso al panel', en: 'Panel sign-in' },
    caption: {
      es: 'Correo y contraseña o cuenta de Google. Solo entran administradores y directoras.',
      en: 'Email and password or a Google account. Only administrators and principals get in.',
    },
  },
  {
    frame: 'browser',
    src: `${IMG}/panel-inicio.webp`,
    title: { es: 'Inicio (admin)', en: 'Home (admin)' },
    caption: {
      es: 'Usuarios, colegios, salones y patrones; registros de los últimos 14 días, quién usa la plataforma y patrones por categoría.',
      en: 'Users, schools, classrooms and patterns; sign-ups in the last 14 days, who uses the platform and patterns per category.',
    },
  },
  {
    frame: 'browser',
    src: `${IMG}/panel-usuarios.webp`,
    title: { es: 'Usuarios', en: 'Users' },
    caption: {
      es: 'Búsqueda por nombre o correo, filtro por rol y acciones para suspender o activar cuentas.',
      en: 'Search by name or email, filter by role and actions to suspend or activate accounts.',
    },
  },
  {
    frame: 'browser',
    src: `${IMG}/panel-colegios.webp`,
    title: { es: 'Colegios', en: 'Schools' },
    caption: {
      es: 'Alta y edición de colegios, con sus directoras asignadas y su estado activo o inactivo.',
      en: 'Create and edit schools, with their assigned principals and active or inactive status.',
    },
  },
  {
    frame: 'browser',
    src: `${IMG}/panel-patrones.webp`,
    title: { es: 'Patrones hápticos', en: 'Haptic patterns' },
    caption: {
      es: 'Crear, editar y borrar patrones de vibración (estilo, duración y pausa de cada pulso). La app los descarga y los guarda en el teléfono.',
      en: 'Create, edit and delete vibration patterns (style, duration and gap of each pulse). The app downloads them and stores them on the phone.',
    },
  },
  {
    frame: 'browser',
    src: `${IMG}/panel-director.webp`,
    title: { es: 'Inicio (directora)', en: 'Home (principal)' },
    caption: {
      es: 'Los salones del colegio con su progreso general, estudiantes y cursos, y cuántos salones están en riesgo.',
      en: 'The school’s classrooms with overall progress, students and courses, and how many classrooms are at risk.',
    },
  },
  {
    frame: 'browser',
    src: `${IMG}/panel-aula.webp`,
    title: { es: 'Detalle de salón', en: 'Classroom detail' },
    caption: {
      es: 'Pestañas de educadores, estudiantes inscritos y cursos del salón, con altas y bajas.',
      en: 'Tabs for educators, enrolled students and the classroom’s courses, with add and remove actions.',
    },
  },
  {
    frame: 'browser',
    src: `${IMG}/panel-estadisticas.webp`,
    title: { es: 'Estadísticas del colegio', en: 'School statistics' },
    caption: {
      es: 'Progreso general por salón, por curso y por estudiante, con los niveles Inicial, En progreso y Avanzado.',
      en: 'Overall progress per classroom, per course and per student, with Beginner, In progress and Advanced levels.',
    },
  },
];

const features: { icon: string; title: L; body: L }[] = [
  {
    icon: 'finger',
    title: { es: 'Trazo guiado por vibración', en: 'Vibration-guided tracing' },
    body: {
      es: 'Cada letra o número es un camino de puntos. El teléfono da un tic de 20 ms al avanzar, un zumbido largo de 250 ms si el dedo se sale, y calcula el porcentaje de precisión.',
      en: 'Each letter or number is a path of points. The phone gives a 20 ms tick when advancing, a long 250 ms buzz when the finger strays, and computes the accuracy percentage.',
    },
  },
  {
    icon: 'vibrate',
    title: { es: 'Patrones de vibración editables', en: 'Editable vibration patterns' },
    body: {
      es: '12 patrones base (braille, letra, número, acierto, error, inicio y fin de lección…). Los administradores los editan en el panel; la app los descarga, los guarda en el teléfono y siguen funcionando sin conexión.',
      en: '12 base patterns (braille, letter, number, hit, miss, lesson start and end…). Admins edit them in the panel; the app downloads them, stores them on the phone and they keep working offline.',
    },
  },
  {
    icon: 'volume',
    title: { es: 'Voz propia, sin depender de TalkBack', en: 'Own voice, no TalkBack needed' },
    body: {
      es: 'Usa síntesis de voz en español de Perú (es-PE) para leer pantallas, botones y preguntas. Se activa desde el perfil y funciona aunque no esté encendido el TalkBack del sistema.',
      en: 'Uses Peruvian Spanish speech synthesis (es-PE) to read screens, buttons and questions. It is switched on from the profile and works even when the system TalkBack is off.',
    },
  },
  {
    icon: 'hand',
    title: { es: 'Doble toque para evitar errores', en: 'Double tap to avoid mistakes' },
    body: {
      es: 'Entrar a una lección o salir de una pantalla pide tocar dos veces: el primer toque vibra y dice en voz alta lo que va a pasar; el segundo lo confirma.',
      en: 'Entering a lesson or leaving a screen takes two taps: the first one vibrates and says aloud what will happen; the second confirms it.',
    },
  },
  {
    icon: 'mic',
    title: { es: 'Quiz por voz y de opción múltiple', en: 'Voice and multiple-choice quizzes' },
    body: {
      es: 'Las preguntas se leen solas. En el quiz por voz se responde hablando (reconocimiento de voz es-PE) o escribiendo, y la respuesta se compara sin importar tildes ni mayúsculas.',
      en: 'Questions are read out automatically. In the voice quiz you answer by speaking (es-PE speech recognition) or typing, and answers are compared ignoring accents and capitalization.',
    },
  },
  {
    icon: 'qr',
    title: { es: 'QR para inscribir y pasar lista', en: 'QR to enroll and take attendance' },
    body: {
      es: 'El docente escanea el QR del alumno con la cámara para inscribirlo en el aula y ver la asistencia de hoy.',
      en: 'The teacher scans the student’s QR with the camera to enroll them in the classroom and see today’s attendance.',
    },
  },
  {
    icon: 'chart',
    title: { es: 'Seguimiento por nivel', en: 'Level-based tracking' },
    body: {
      es: 'Niveles Inicial, En progreso y Avanzado según el puntaje, comparación entre el nivel inicial y el actual, historial con intentos y progreso por curso.',
      en: 'Beginner, In progress and Advanced levels based on the score, comparison between initial and current level, history with attempts and progress per course.',
    },
  },
  {
    icon: 'school',
    title: { es: 'Colegios, aulas y cursos', en: 'Schools, classrooms and courses' },
    body: {
      es: 'Las directoras dan de alta educadoras; los docentes crean aulas y cursos, los publican o los dejan en borrador y arman el contenido desde un catálogo compartido.',
      en: 'Principals add educators; teachers create classrooms and courses, publish them or keep them as drafts and build the content from a shared catalog.',
    },
  },
];

const accessibility: { title: L; body: L }[] = [
  {
    title: { es: 'Vibraciones que se distinguen por ritmo', en: 'Vibrations told apart by rhythm' },
    body: {
      es: 'Cada patrón cambia en cantidad de pulsos, duración y pausas, no solo en intensidad, porque en Android los estilos suave, medio y fuerte se sienten casi igual. En Android se envía un solo patrón temporizado con duraciones exactas.',
      en: 'Each pattern differs in number of pulses, duration and gaps, not just intensity, because on Android light, medium and heavy feel almost the same. On Android a single timed pattern is sent with exact durations.',
    },
  },
  {
    title: { es: 'Los patrones nunca fallan', en: 'Patterns never fail' },
    body: {
      es: 'Prioridad: patrón sincronizado desde la API, luego la copia guardada en el teléfono y al final los patrones base del código. Un registro mal formado en la base se descarta y no rompe la vibración.',
      en: 'Priority: pattern synced from the API, then the copy stored on the phone and finally the base patterns in the code. A malformed database row is dropped and never breaks vibration.',
    },
  },
  {
    title: { es: 'Voz y confirmación en todo', en: 'Voice and confirmation everywhere' },
    body: {
      es: 'Los botones anuncian su etiqueta al tocarlos, las pestañas dicen su nombre y las acciones de entrada o salida piden un segundo toque con aviso hablado.',
      en: 'Buttons announce their label when tapped, tabs say their name and entry or exit actions ask for a second tap with a spoken notice.',
    },
  },
  {
    title: { es: 'Auditoría WCAG 2.2', en: 'WCAG 2.2 audit' },
    body: {
      es: 'Se revisó el contraste del texto, los mensajes de estado anunciados, el propósito de los campos de formulario, los encabezados con rol, el tamaño mínimo de los objetivos de toque (44 px) y la excepción esencial del trazo por arrastre.',
      en: 'Reviewed text contrast, announced status messages, form input purpose, headings with roles, minimum touch target size (44 px) and the essential exception for drag tracing.',
    },
  },
];

const panelCards: { icon: string; title: L; body: L }[] = [
  {
    icon: 'users',
    title: { es: 'Usuarios', en: 'Users' },
    body: {
      es: 'Alta de usuarios con rol, búsqueda y filtros, y activar o suspender cuentas.',
      en: 'Create users with a role, search and filters, and activate or suspend accounts.',
    },
  },
  {
    icon: 'school',
    title: { es: 'Colegios y salones', en: 'Schools and classrooms' },
    body: {
      es: 'Colegios con directoras y educadoras; salones con código, educadores, estudiantes y cursos.',
      en: 'Schools with principals and educators; classrooms with a code, educators, students and courses.',
    },
  },
  {
    icon: 'vibrate',
    title: { es: 'Patrones hápticos', en: 'Haptic patterns' },
    body: {
      es: 'Catálogo por categoría y editor de pulsos (estilo, duración y pausa). Lo que se guarda llega a la app en la siguiente sincronización.',
      en: 'Catalog by category and a pulse editor (style, duration and gap). What is saved reaches the app on its next sync.',
    },
  },
  {
    icon: 'chart',
    title: { es: 'Estadísticas', en: 'Statistics' },
    body: {
      es: 'Progreso por colegio, salón, curso y estudiante, con niveles y los salones que necesitan atención.',
      en: 'Progress per school, classroom, course and student, with levels and the classrooms that need attention.',
    },
  },
];

const panelNotes: L[] = [
  {
    es: 'Entrada con correo y contraseña o con Google (Supabase Auth); si el usuario no existe o su rol no es admin ni directora, se le niega el acceso.',
    en: 'Sign-in with email and password or Google (Supabase Auth); if the user does not exist or their role is not admin or principal, access is denied.',
  },
  {
    es: 'Rutas protegidas por rol y sesión guardada en el navegador (Zustand); si la API responde 401 se cierra la sesión.',
    en: 'Routes protected by role and session kept in the browser (Zustand); if the API answers 401 the session is closed.',
  },
  {
    es: 'Comparte el lenguaje visual de la app (colores, tipografía y mascota), con animaciones de Framer Motion y GSAP en la página de inicio.',
    en: 'Shares the app’s visual language (colors, typography and mascot), with Framer Motion and GSAP animations on the landing page.',
  },
];

const rolesNotes: L[] = [
  {
    es: 'Al iniciar sesión, un guardián global envía a cada rol a su propio grupo de pantallas (estudiante, docente o admin).',
    en: 'After sign-in, a global guard sends each role to its own group of screens (student, teacher or admin).',
  },
  {
    es: 'El registro permite crear cuenta de estudiante o de docente; el docente puede indicar el código de su colegio.',
    en: 'Sign-up lets you create a student or teacher account; teachers can enter their school code.',
  },
  {
    es: 'Las cuentas pendientes de verificar o suspendidas no entran y ven un aviso que lo explica.',
    en: 'Accounts pending verification or suspended cannot get in and see a notice explaining why.',
  },
];

const stack: { group: L; items: string[] }[] = [
  { group: { es: 'App móvil', en: 'Mobile app' }, items: ['React Native 0.86', 'Expo SDK 57', 'Expo Router', 'TypeScript', 'React Compiler', 'Reanimated'] },
  { group: { es: 'Háptico, voz y cámara', en: 'Haptics, voice & camera' }, items: ['expo-haptics', 'Vibration (Android)', 'expo-speech', 'expo-speech-recognition', 'expo-audio', 'expo-camera'] },
  { group: { es: 'Panel web', en: 'Web panel' }, items: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Framer Motion', 'GSAP'] },
  { group: { es: 'Backend y entrega', en: 'Backend & delivery' }, items: ['API REST (NestJS)', 'Supabase', 'Google OAuth', 'EAS Build', 'Vercel'] },
];

const architecture: { title: L; body: L }[] = [
  {
    title: { es: 'Un backend, dos clientes', en: 'One backend, two clients' },
    body: {
      es: 'La app y el panel hablan con la misma API REST usando tokens Bearer. En la app el token vive en el almacén seguro del teléfono (Keychain/Keystore) y un 401 lo renueva solo y reintenta la petición; en el panel un 401 cierra la sesión.',
      en: 'The app and the panel talk to the same REST API with Bearer tokens. In the app the token lives in the phone’s secure store (Keychain/Keystore) and a 401 refreshes it and retries the request; in the panel a 401 closes the session.',
    },
  },
  {
    title: { es: 'Caché por pantalla', en: 'Per-screen cache' },
    body: {
      es: 'Un hook muestra al instante los datos guardados y los revalida en segundo plano pasados 30 s, así las listas no parpadean con un spinner en cada visita.',
      en: 'A hook shows stored data instantly and revalidates it in the background after 30 s, so lists do not flash a spinner on every visit.',
    },
  },
  {
    title: { es: 'Servidor lento al despertar', en: 'Slow server on wake-up' },
    body: {
      es: 'La API vive en un plan gratuito que puede tardar cerca de 50 s en arrancar: la app espera hasta 60 s y, si no responde, muestra un mensaje claro en lugar de quedarse colgada.',
      en: 'The API lives on a free plan that can take around 50 s to start: the app waits up to 60 s and, if there is no answer, shows a clear message instead of hanging.',
    },
  },
  {
    title: { es: 'Datos normalizados', en: 'Normalized data' },
    body: {
      es: 'Una capa de servicios adapta las respuestas (patrones anidados, puntos del trazo que llegan como texto JSON, preguntas del quiz) a la forma que esperan las pantallas.',
      en: 'A services layer adapts the responses (nested patterns, tracing points arriving as JSON text, quiz questions) to the shape the screens expect.',
    },
  },
];

const endpoints: { name: string; what: L }[] = [
  { name: '/auth/login · /auth/me · /auth/refresh', what: { es: 'sesión y renovación de tokens', en: 'session and token refresh' } },
  { name: '/classrooms · /classrooms/:id/students', what: { es: 'aulas y alumnos inscritos', en: 'classrooms and enrolled students' } },
  { name: '/courses/classroom/:id · /courses/:id/publish', what: { es: 'cursos de un aula y publicar o dejar en borrador', en: 'a classroom’s courses and publish or draft' } },
  { name: '/content-items/course/:id · /content-items/catalog', what: { es: 'contenido de un curso y catálogo compartido', en: 'a course’s content and the shared catalog' } },
  { name: '/progress/me/course/:id · /progress/classroom/:id/summary', what: { es: 'progreso del estudiante y resumen del aula', en: 'student progress and classroom summary' } },
  { name: '/haptic-patterns', what: { es: 'catálogo de vibraciones', en: 'vibration catalog' } },
  { name: '/users/qr/:code', what: { es: 'busca a un estudiante por su QR', en: 'finds a student by their QR' } },
  { name: '/schools · /schools/:id/educators', what: { es: 'colegios y educadoras', en: 'schools and educators' } },
];

export const hapticLearn: CaseStudy = {
  id: 'haptic-learn',
  name: 'HapticLearn',
  kicker: { es: 'Caso de estudio · App móvil + panel web', en: 'Case study · Mobile app + web panel' },
  icon: `${IMG}/icon.webp`,
  cover: `${IMG}/cover.webp`,
  frame: 'phone',
  stack: 'React Native · Expo · TypeScript · React · Vite · NestJS · Supabase',
  screenGroups: {
    phone: { es: 'App móvil', en: 'Mobile app' },
    browser: { es: 'Panel web', en: 'Web panel' },
  },
  overview: {
    tagline: {
      es: 'Una app para que niñas y niños con discapacidad visual aprendan a trazar letras y números con el dedo, guiados por vibraciones y voz, con un panel web para que colegios y docentes sigan su avance.',
      en: 'An app that helps children with visual impairments learn to trace letters and numbers with their finger, guided by vibration and voice, with a web panel so schools and teachers can follow their progress.',
    },
    problem: {
      es: 'Aprender a escribir suele apoyarse en ver el trazo. Para un niño con discapacidad visual una letra en la pantalla no dice nada, y al docente le cuesta saber quién practicó, cómo le fue y quién necesita apoyo.',
      en: 'Learning to write usually relies on seeing the stroke. For a child with a visual impairment a letter on the screen says nothing, and teachers struggle to know who practiced, how it went and who needs support.',
    },
    solution: {
      es: 'HapticLearn convierte el teléfono en algo que se siente: al seguir el contorno de una letra vibra distinto si el dedo va bien o se sale, y la app lee en voz alta lo que hay en pantalla. Los docentes crean aulas y cursos, inscriben alumnos con un QR y ven el nivel de cada uno. El panel web deja a directoras y administradores gestionar colegios, usuarios, salones y los propios patrones de vibración.',
      en: 'HapticLearn turns the phone into something you can feel: when following the outline of a letter it vibrates differently if the finger is on track or strays, and the app reads the screen aloud. Teachers create classrooms and courses, enroll students with a QR and see each one’s level. The web panel lets principals and administrators manage schools, users, classrooms and the vibration patterns themselves.',
    },
    facts: [
      { k: { es: 'Plataforma', en: 'Platform' }, v: { es: 'App Android (Expo) · panel web', en: 'Android app (Expo) · web panel' } },
      { k: { es: 'Usuarios', en: 'Users' }, v: { es: 'Estudiantes, docentes, directoras y administración', en: 'Students, teachers, principals and admins' } },
      { k: { es: 'Rol', en: 'Role' }, v: { es: 'Desarrollo de la app móvil y del panel web', en: 'Development of the mobile app and the web panel' } },
      { k: { es: 'Contexto', en: 'Context' }, v: { es: 'Tesis universitaria · 2026', en: 'University thesis · 2026' } },
    ],
    numbers: [
      { n: '2', l: { es: 'aplicaciones (móvil y web)', en: 'applications (mobile and web)' } },
      { n: '4', l: { es: 'roles de usuario', en: 'user roles' } },
      { n: '5', l: { es: 'tipos de ejercicio', en: 'exercise types' } },
      { n: '12', l: { es: 'patrones hápticos base', en: 'base haptic patterns' } },
    ],
  },
  screens,
  features,
  sections: [
    {
      id: 'roles',
      label: { es: 'Roles y permisos', en: 'Roles & permissions' },
      intro: {
        es: 'Cuatro roles, cada uno con su propio conjunto de pantallas. El panel web solo está abierto a administradores y directoras.',
        en: 'Four roles, each with its own set of screens. The web panel is only open to administrators and principals.',
      },
      blocks: [
        {
          kind: 'matrix',
          columns: [
            { es: 'App móvil', en: 'Mobile app' },
            { es: 'Panel web', en: 'Web panel' },
          ],
          rows: [
            {
              label: { es: 'Estudiante', en: 'Student' },
              cells: [
                { es: 'Cursos, trazos, quizzes, historial y su QR', en: 'Courses, tracing, quizzes, history and their QR' },
                false,
              ],
            },
            {
              label: { es: 'Educador/a', en: 'Educator' },
              cells: [
                { es: 'Aulas, cursos, quizzes, escáner QR y progreso', en: 'Classrooms, courses, quizzes, QR scanner and progress' },
                false,
              ],
            },
            {
              label: { es: 'Directora', en: 'Principal' },
              sub: { es: 'Lead educator', en: 'Lead educator' },
              cells: [
                { es: 'Todo lo del docente, más su colegio y el alta de educadoras', en: 'Everything a teacher has, plus their school and adding educators' },
                { es: 'Inicio, su colegio, salones y estadísticas', en: 'Home, their school, classrooms and statistics' },
              ],
            },
            {
              label: { es: 'Administrador', en: 'Administrator' },
              cells: [
                { es: 'Resumen, usuarios, colegios y patrones', en: 'Overview, users, schools and patterns' },
                { es: 'Todo: usuarios, colegios, salones y patrones hápticos', en: 'Everything: users, schools, classrooms and haptic patterns' },
              ],
            },
          ],
        },
        { kind: 'bullets', items: rolesNotes },
      ],
    },
    {
      id: 'a11y',
      label: { es: 'Accesibilidad y háptica', en: 'Accessibility & haptics' },
      intro: {
        es: 'El producto es para niños que no pueden apoyarse en la vista, así que la vibración y la voz son la interfaz principal, no un extra.',
        en: 'The product is for children who cannot rely on sight, so vibration and voice are the main interface, not an extra.',
      },
      blocks: [{ kind: 'numbered', items: accessibility }],
      aside: [`${IMG}/trazo.webp`, `${IMG}/quiz.webp`],
    },
    {
      id: 'panel',
      label: { es: 'Panel web', en: 'Web panel' },
      intro: {
        es: 'Para quien administra: directoras y administradores gestionan el sistema desde el computador, con la misma identidad visual de la app.',
        en: 'For those who administer: principals and administrators manage the system from a computer, with the same visual identity as the app.',
      },
      blocks: [
        { kind: 'cards', items: panelCards },
        { kind: 'bullets', items: panelNotes },
      ],
      aside: [`${IMG}/panel-inicio.webp`, `${IMG}/panel-patrones.webp`],
      asideFrame: 'browser',
    },
    {
      id: 'tech',
      label: { es: 'Arquitectura', en: 'Architecture' },
      blocks: [
        { kind: 'chips', groups: stack },
        { kind: 'cards', items: architecture },
        { kind: 'table', label: { es: 'Algunas rutas de la API que usan la app y el panel', en: 'Some API routes used by the app and the panel' }, rows: endpoints },
      ],
    },
  ],
};
