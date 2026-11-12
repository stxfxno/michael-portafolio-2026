// Caso de estudio "App móvil Eemerson SAC Conductores": el portal móvil (PWA) que usan los conductores.
// Capturas en /public/images/eemerson-conductores, sacadas del código actual corriendo con datos
// de ejemplo inventados (conductores, placas, clientes y contenedores no son reales).

import type { CaseStudy } from './caseStudy';

const IMG = '/images/eemerson-conductores';

const foto = { es: 'foto obligatoria', en: 'photo required' };

export const eemersonConductores: CaseStudy = {
  id: 'eemerson-conductores',
  name: 'App Conductores Eemerson SAC',
  kicker: { es: 'Caso de estudio · App móvil', en: 'Case study · Mobile app' },
  icon: `${IMG}/icon.webp`,
  cover: `${IMG}/cover.webp`,
  frame: 'phone',
  stack: 'Next.js · React · TypeScript · Supabase · PWA · Odoo',

  overview: {
    tagline: {
      es: 'La app que usan los conductores en ruta: ven sus servicios, marcan cada hito con hora, GPS y foto, registran sus gastos y revisan sus documentos y vacaciones.',
      en: 'The app drivers use on the road: they see their services, mark every milestone with time, GPS and photo, log their expenses and check their documents and vacations.',
    },
    problem: {
      es: 'Las horas de cada parte del servicio (llegada al almacén, inicio de descarga, devolución del contenedor vacío) se avisaban por llamada o WhatsApp y alguien las pasaba a Odoo a mano. Los tickets de gastos se perdían y el conductor no sabía cuándo se le vencía un documento.',
      en: 'The times for each part of a service (arriving at the warehouse, starting to unload, returning the empty container) were reported by phone or WhatsApp and someone typed them into Odoo by hand. Expense tickets got lost and drivers did not know when a document would expire.',
    },
    solution: {
      es: 'Un portal pensado para el celular, que se instala como app (PWA) y donde el conductor entra con su DNI. Cada servicio muestra solo los hitos que le tocan según su tipo; al marcarlos se guarda la hora en Odoo, la ubicación y, en los puntos críticos, una foto obligatoria.',
      en: 'A phone-first portal that installs like an app (PWA), where drivers sign in with their ID number. Each service shows only the milestones that apply to its type; marking them saves the time in Odoo, the location and, at critical points, a required photo.',
    },
    facts: [
      { k: { es: 'Plataforma', en: 'Platform' }, v: { es: 'Web móvil · instalable (PWA)', en: 'Mobile web · installable (PWA)' } },
      { k: { es: 'Usuarios', en: 'Users' }, v: { es: 'Conductores de la flota', en: 'Fleet drivers' } },
      { k: { es: 'Rol', en: 'Role' }, v: { es: 'Diseño y desarrollo completo', en: 'Full design & development' } },
      { k: { es: 'Estado', en: 'Status' }, v: { es: 'En producción · uso diario', en: 'In production · daily use' } },
    ],
    numbers: [
      { n: '7', l: { es: 'tipos de servicio', en: 'service types' } },
      { n: '41', l: { es: 'hitos en el catálogo', en: 'milestones in the catalog' } },
      { n: '31', l: { es: 'documentos con vencimiento', en: 'documents with expiry' } },
      { n: '4', l: { es: 'secciones del portal', en: 'portal sections' } },
    ],
  },

  screens: [
    {
      src: `${IMG}/servicios.webp`,
      title: { es: 'Mis servicios', en: 'My services' },
      caption: {
        es: 'Servicios del mes con su etapa en Odoo, un resumen por etapa y un acceso directo al servicio en curso.',
        en: 'The month’s services with their Odoo stage, a summary per stage and a shortcut to the service in progress.',
      },
    },
    {
      src: `${IMG}/servicio-en-curso.webp`,
      title: { es: 'Servicio en curso', en: 'Service in progress' },
      caption: {
        es: 'Contenedor, tracto, carreta, almacenes y la lista de hitos con la hora de cada uno. Abajo, el botón del siguiente hito.',
        en: 'Container, truck, trailer, warehouses and the list of milestones with each one’s time. At the bottom, the button for the next milestone.',
      },
    },
    {
      src: `${IMG}/hito-foto.webp`,
      title: { es: 'Hito con foto', en: 'Milestone with photo' },
      caption: {
        es: 'En los puntos críticos la foto es obligatoria y se explica qué debe verse (precinto, número de contenedor…). Se comprime en el celular antes de subirla.',
        en: 'At critical points the photo is required and the app explains what must be visible (seal, container number…). It is compressed on the phone before upload.',
      },
    },
    {
      src: `${IMG}/modalidad.webp`,
      title: { es: '¿Quién devuelve el vacío?', en: 'Who returns the empty?' },
      caption: {
        es: 'Al salir del cliente en una importación, el conductor elige si devuelve él mismo el contenedor vacío o lo deja en la cochera para otro conductor.',
        en: 'When leaving the client on an import, the driver chooses whether to return the empty container or leave it at the yard for another driver.',
      },
    },
    {
      src: `${IMG}/completado.webp`,
      title: { es: 'Servicio completado', en: 'Service completed' },
      caption: {
        es: 'Con el último hito el servicio queda finalizado en Odoo y se invita a registrar los gastos del viaje.',
        en: 'With the last milestone the service is marked as finished in Odoo and the driver is prompted to log the trip’s expenses.',
      },
    },
    {
      src: `${IMG}/gasto-form.webp`,
      title: { es: 'Nuevo gasto', en: 'New expense' },
      caption: {
        es: 'Foto del comprobante (hasta 2), descripción, monto y moneda.',
        en: 'Receipt photo (up to 2), description, amount and currency.',
      },
    },
    {
      src: `${IMG}/gastos.webp`,
      title: { es: 'Gastos del servicio', en: 'Service expenses' },
      caption: {
        es: 'Los gastos quedan ligados al servicio y le aparecen a finanzas como reembolsos pendientes en su calendario.',
        en: 'Expenses are tied to the service and show up for finance as pending reimbursements in their calendar.',
      },
    },
    {
      src: `${IMG}/asistencia.webp`,
      title: { es: 'Asistencia', en: 'Attendance' },
      caption: {
        es: 'Entrada y salida con ubicación, solo dentro de las zonas permitidas (por ejemplo, el patio). Historial con enlace al mapa.',
        en: 'Check-in and check-out with location, only inside allowed zones (for example, the yard). History with a map link.',
      },
    },
    {
      src: `${IMG}/documentos.webp`,
      title: { es: 'Mis documentos', en: 'My documents' },
      caption: {
        es: 'Vencidos, por vencer en 30 días y vigentes, leídos de su ficha de empleado en Odoo.',
        en: 'Expired, expiring within 30 days and valid, read from their employee record in Odoo.',
      },
    },
    {
      src: `${IMG}/vacaciones.webp`,
      title: { es: 'Vacaciones', en: 'Vacations' },
      caption: {
        es: 'Días disponibles del récord vigente, días gozados y salidas programadas por RRHH.',
        en: 'Available days in the current record, days taken and leaves scheduled by HR.',
      },
    },
    {
      src: `${IMG}/login.webp`,
      title: { es: 'Inicio de sesión', en: 'Sign in' },
      caption: {
        es: 'El conductor entra con su número de DNI y contraseña; la cuenta la crea la oficina.',
        en: 'Drivers sign in with their ID number and password; the office creates the account.',
      },
    },
  ],

  features: [
    {
      icon: 'route',
      title: { es: 'Hitos según el tipo de servicio', en: 'Milestones by service type' },
      body: {
        es: 'Importación, exportación, despacho, traslado interno, isotanque lleno o vacío y devolución de vacío: cada uno tiene su propia secuencia, así no se piden pasos que no aplican.',
        en: 'Import, export, dispatch, internal transfer, full or empty isotank and empty return: each one has its own sequence, so no irrelevant steps are asked.',
      },
    },
    {
      icon: 'camera',
      title: { es: 'Evidencia en los puntos críticos', en: 'Evidence at critical points' },
      body: {
        es: 'Foto obligatoria al retirar, cargar, descargar, entregar y devolver; opcional en el resto por si hay una incidencia. Cada foto queda guardada con su hito.',
        en: 'Required photo when picking up, loading, unloading, delivering and returning; optional elsewhere in case of an incident. Each photo is stored with its milestone.',
      },
    },
    {
      icon: 'pin',
      title: { es: 'Hora y GPS en cada marca', en: 'Time & GPS on every mark' },
      body: {
        es: 'Al marcar un hito se escribe la hora en Odoo y se guarda la ubicación del celular, que la oficina ve en un mapa dentro del detalle del servicio.',
        en: 'Marking a milestone writes the time to Odoo and saves the phone’s location, which the office sees on a map in the service detail.',
      },
    },
    {
      icon: 'truck',
      title: { es: 'Devolución por otro conductor', en: 'Return by another driver' },
      body: {
        es: 'Si el vacío lo devuelve otra persona, el servicio termina en la cochera y Odoo crea una subtarea de devolución para el siguiente conductor, que aparece junto al servicio original.',
        en: 'If someone else returns the empty container, the service ends at the yard and Odoo creates a return subtask for the next driver, shown next to the original service.',
      },
    },
    {
      icon: 'receipt',
      title: { es: 'Gastos con foto', en: 'Expenses with photo' },
      body: {
        es: 'Peajes, balanza o estacionamiento se registran al terminar el servicio con la foto del ticket; finanzas los ve al instante para reembolsarlos.',
        en: 'Tolls, weighbridge or parking are logged when the service ends with a photo of the ticket; finance sees them instantly to reimburse them.',
      },
    },
    {
      icon: 'finger',
      title: { es: 'Asistencia por ubicación', en: 'Location-based attendance' },
      body: {
        es: 'Entrada y salida solo dentro del radio de las zonas permitidas. Se puede cancelar una marca del día si fue un error.',
        en: 'Check-in and check-out only within the radius of the allowed zones. A mark from today can be cancelled if it was a mistake.',
      },
    },
    {
      icon: 'bell',
      title: { es: 'Documentos por vencer', en: 'Expiring documents' },
      body: {
        es: 'Licencias, SCTR, antecedentes, cursos y accesos a clientes ordenados por urgencia, con aviso de lo vencido.',
        en: 'Licenses, insurance, records, training and client access badges sorted by urgency, flagging what has expired.',
      },
    },
    {
      icon: 'phone',
      title: { es: 'Se instala como app', en: 'Installs like an app' },
      body: {
        es: 'Manifest y service worker para agregarla a la pantalla de inicio; la sesión dura hasta 400 días para que no se cierre al cerrar la app.',
        en: 'Manifest and service worker to add it to the home screen; the session lasts up to 400 days so it does not log out when the app is closed.',
      },
    },
  ],

  sections: [
    {
      id: 'milestones',
      label: { es: 'Hitos y evidencia', en: 'Milestones & evidence' },
      intro: {
        es: 'El catálogo de hitos se definió con operaciones a partir del flujo real de cada tipo de servicio. Así se ve una importación de contenedor, paso a paso:',
        en: 'The milestone catalog was defined with operations from the real flow of each service type. This is how a container import looks, step by step:',
      },
      blocks: [
        {
          kind: 'steps',
          label: { es: 'Importación contenedor · 13 hitos', en: 'Container import · 13 milestones' },
          items: [
            { title: { es: 'Inicio de ruta', en: 'Route start' } },
            { title: { es: 'Llegada/cola en almacén de retiro', en: 'Arrival/queue at pickup warehouse' } },
            { title: { es: 'Ingreso almacén de retiro', en: 'Enter pickup warehouse' } },
            { title: { es: 'Salida almacén de retiro', en: 'Leave pickup warehouse' }, tag: foto, strong: true },
            { title: { es: 'Llegada a cliente', en: 'Arrival at client' } },
            { title: { es: 'Ingreso a cliente', en: 'Enter client' } },
            { title: { es: 'Inicio descarga', en: 'Start unloading' }, tag: foto, strong: true },
            { title: { es: 'Fin descarga', en: 'Finish unloading' }, tag: foto, strong: true },
            { title: { es: 'Salida de cliente', en: 'Leave client' } },
            { title: { es: 'Llegada a almacén/depósito de devolución', en: 'Arrival at return depot' } },
            { title: { es: 'Ingreso a almacén/depósito de devolución', en: 'Enter return depot' } },
            { title: { es: 'Contenedor vacío devuelto', en: 'Empty container returned' }, tag: foto, strong: true },
            { title: { es: 'Servicio finalizado', en: 'Service finished' } },
          ],
        },
        {
          kind: 'table',
          label: { es: 'Hitos por tipo de servicio', en: 'Milestones per service type' },
          rows: [
            { name: '13', what: { es: 'Importación contenedor', en: 'Container import' } },
            { name: '13', what: { es: 'Exportación contenedor', en: 'Container export' } },
            { name: '12', what: { es: 'Despacho / recojo / carga suelta', en: 'Dispatch / pickup / loose cargo' } },
            { name: '11', what: { es: 'Traslado interno · Isotanque lleno', en: 'Internal transfer · Full isotank' } },
            { name: '9', what: { es: 'Isotanque vacío', en: 'Empty isotank' } },
            { name: '5', what: { es: 'Solo devolución de contenedor vacío', en: 'Empty container return only' } },
          ],
        },
        {
          kind: 'bullets',
          items: [
            {
              es: 'Todos los hitos guardan hora y GPS. Si Odoo trae 00:00 por defecto, la app no lo toma como una hora real: el avance se lleva aparte en la base de datos.',
              en: 'Every milestone stores time and GPS. If Odoo has 00:00 by default, the app does not treat it as a real time: progress is tracked separately in the database.',
            },
            {
              es: 'Al marcar “Inicio descarga” en una importación, el servicio pasa solo a la etapa “En cliente” en Odoo.',
              en: 'Marking “Start unloading” on an import moves the service to the “At client” stage in Odoo automatically.',
            },
            {
              es: 'Solo puede haber un servicio en curso a la vez, y un hito marcado por error se puede saltar o corregir desde la oficina.',
              en: 'Only one service can be in progress at a time, and a milestone marked by mistake can be skipped or fixed from the office.',
            },
          ],
        },
      ],
      aside: [`${IMG}/hito-foto.webp`, `${IMG}/modalidad.webp`],
    },
    {
      id: 'security',
      label: { es: 'Acceso y privacidad', en: 'Access & privacy' },
      intro: {
        es: 'El conductor usa la misma plataforma que la oficina, pero con un rol propio que solo le abre su portal.',
        en: 'Drivers use the same platform as the office, but with their own role that only opens their portal.',
      },
      blocks: [
        {
          kind: 'numbered',
          items: [
            {
              title: { es: 'Cuenta creada por la oficina', en: 'Account created by the office' },
              body: {
                es: 'Desde Administración > Conductores se crea el acceso con el DNI y se vincula al empleado de Odoo.',
                en: 'From Admin > Drivers the office creates the login with the ID number and links it to the Odoo employee.',
              },
            },
            {
              title: { es: 'Solo sus servicios', en: 'Only their services' },
              body: {
                es: 'La API filtra por el empleado vinculado y rechaza leer o editar servicios de otros conductores.',
                en: 'The API filters by the linked employee and refuses to read or edit other drivers’ services.',
              },
            },
            {
              title: { es: 'Solo lo que le toca escribir', en: 'Only what they may write' },
              body: {
                es: 'Desde el portal solo se pueden escribir horas de hitos y la modalidad de devolución; el resto del servicio queda en manos de la oficina.',
                en: 'From the portal only milestone times and the return mode can be written; the rest of the service stays with the office.',
              },
            },
            {
              title: { es: 'Fotos privadas', en: 'Private photos' },
              body: {
                es: 'Las fotos de hitos y gastos se sirven a través de una ruta que exige sesión, no con un enlace público.',
                en: 'Milestone and expense photos are served through a route that requires a session, not via a public link.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'tech',
      label: { es: 'Arquitectura', en: 'Architecture' },
      blocks: [
        {
          kind: 'chips',
          groups: [
            { group: { es: 'App', en: 'App' }, items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'PWA'] },
            { group: { es: 'Celular', en: 'Phone' }, items: ['Geolocation API', 'Cámara (input capture)', 'Compresión de imágenes'] },
            { group: { es: 'Backend', en: 'Backend' }, items: ['Rutas de API de Next.js', 'Supabase Auth', 'PostgreSQL · RLS', 'Storage'] },
            { group: { es: 'Integraciones', en: 'Integrations' }, items: ['Odoo (JSON-RPC)', 'Navitel GPS'] },
          ],
        },
        {
          kind: 'cards',
          items: [
            {
              title: { es: 'Odoo alimenta la app', en: 'Odoo feeds the app' },
              body: {
                es: 'Los servicios, sus datos y los documentos del conductor se leen de Odoo en cada carga; las horas marcadas se escriben de vuelta en los mismos campos que usa la oficina.',
                en: 'Services, their data and the driver’s documents are read from Odoo on every load; marked times are written back into the same fields the office uses.',
              },
            },
            {
              title: { es: 'Avance guardado aparte', en: 'Progress stored separately' },
              body: {
                es: 'En Supabase se guarda en qué hito va cada servicio, las fotos y la ubicación de cada marca, para no depender de los valores por defecto de Odoo.',
                en: 'Supabase stores which milestone each service is at, the photos and each mark’s location, so it does not depend on Odoo’s default values.',
              },
            },
            {
              title: { es: 'Fechas sin desfase', en: 'No date drift' },
              body: {
                es: 'Las fechas de programación de Odoo se leen ancladas a UTC para que en Perú no aparezcan un día antes.',
                en: 'Odoo scheduling dates are read anchored to UTC so they do not show a day early in Peru.',
              },
            },
            {
              title: { es: 'Subtareas junto a su servicio', en: 'Subtasks next to their service' },
              body: {
                es: 'Las subtareas de devolución heredan contenedor, booking y agencia del servicio padre y se ordenan junto a él en la lista.',
                en: 'Return subtasks inherit container, booking and agency from the parent service and are listed right next to it.',
              },
            },
          ],
        },
      ],
    },
  ],
};
