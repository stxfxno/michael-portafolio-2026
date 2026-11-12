// Caso de estudio "Software Eemerson SAC": la plataforma web (PayBox) que usa el equipo de oficina.
// Capturas en /public/images/eemerson-software, sacadas del código actual corriendo con datos
// de ejemplo inventados (personas, placas, clientes y montos no son reales).

import type { CaseStudy } from './caseStudy';

const IMG = '/images/eemerson-software';

export const eemersonSoftware: CaseStudy = {
  id: 'eemerson-software',
  name: 'Software Eemerson SAC',
  kicker: { es: 'Caso de estudio · Plataforma web', en: 'Case study · Web platform' },
  icon: `${IMG}/icon.webp`,
  cover: `${IMG}/cover.webp`,
  frame: 'browser',
  stack: 'Next.js · React · TypeScript · Supabase · Tailwind · shadcn/ui',

  overview: {
    tagline: {
      es: 'Plataforma interna de una empresa de transporte de contenedores: pagos, servicios en ruta, flota GPS, vencimientos de documentos y personal, en un solo lugar.',
      en: 'Internal platform for a container transport company: payments, services on the road, GPS fleet, document expiries and staff, all in one place.',
    },
    problem: {
      es: 'La operación estaba repartida entre Odoo, el panel del GPS, el portal de SUNAT, hojas de Excel y WhatsApp. Registrar un gasto, saber en qué parte de la ruta iba cada servicio o enterarse de que a un conductor se le vencía la licencia obligaba a revisar cada sistema por separado.',
      en: 'Operations were split across Odoo, the GPS panel, the SUNAT portal, Excel sheets and WhatsApp. Recording an expense, knowing where each service was on its route or finding out a driver’s license was about to expire meant checking every system separately.',
    },
    solution: {
      es: 'PayBox se conecta a esos sistemas y los muestra juntos: los servicios y empleados vienen de Odoo, la ubicación de los vehículos de Navitel y las guías de remisión de SUNAT. Encima suma lo que faltaba: pagos con lectura automática del comprobante, alertas de vencimiento por correo, vacaciones y asistencia, con permisos por rol y por módulo.',
      en: 'PayBox connects to those systems and shows them together: services and employees come from Odoo, vehicle locations from Navitel and shipping guides from SUNAT. On top of that it adds what was missing: payments with automatic receipt reading, expiry alerts by email, vacations and attendance, with permissions per role and per module.',
    },
    facts: [
      { k: { es: 'Plataforma', en: 'Platform' }, v: { es: 'Web · escritorio y celular', en: 'Web · desktop and mobile' } },
      { k: { es: 'Usuarios', en: 'Users' }, v: { es: 'Administración, finanzas, operaciones y RRHH', en: 'Admin, finance, operations and HR' } },
      { k: { es: 'Rol', en: 'Role' }, v: { es: 'Desarrollo full-stack', en: 'Full-stack development' } },
      { k: { es: 'Estado', en: 'Status' }, v: { es: 'En producción · uso diario', en: 'In production · daily use' } },
    ],
    numbers: [
      { n: '35', l: { es: 'pantallas', en: 'screens' } },
      { n: '48', l: { es: 'endpoints de API', en: 'API endpoints' } },
      { n: '5', l: { es: 'roles de usuario', en: 'user roles' } },
      { n: '4', l: { es: 'sistemas externos integrados', en: 'external systems integrated' } },
    ],
  },

  screens: [
    {
      src: `${IMG}/inicio.webp`,
      title: { es: 'Inicio', en: 'Home' },
      caption: {
        es: 'Menú lateral con los módulos y accesos directos. Cada usuario ve solo los módulos que tiene habilitados.',
        en: 'Side menu with the modules and shortcuts. Each user only sees the modules enabled for them.',
      },
    },
    {
      src: `${IMG}/resumen.webp`,
      title: { es: 'Resumen de pagos', en: 'Payments overview' },
      caption: {
        es: 'Total del mes contra el mismo tramo del mes anterior, en soles y dólares, con el reparto por método de pago, por categoría y los últimos 7 días.',
        en: 'Month total against the same stretch of the previous month, in soles and dollars, split by payment method, by category and for the last 7 days.',
      },
    },
    {
      src: `${IMG}/pagos.webp`,
      title: { es: 'Pagos', en: 'Payments' },
      caption: {
        es: 'Historial de pagos con filtros por fecha, monto, categoría, moneda y método, y exportación a Excel.',
        en: 'Payment history with filters by date, amount, category, currency and method, plus Excel export.',
      },
    },
    {
      src: `${IMG}/nuevo-pago.webp`,
      title: { es: 'Nuevo pago', en: 'New payment' },
      caption: {
        es: 'Se sube la foto o PDF del comprobante y la IA lee tipo, número, RUC y monto. Se puede vincular a un gasto de conductor para marcarlo como pagado.',
        en: 'Upload the receipt photo or PDF and AI reads its type, number, tax ID and amount. It can be linked to a driver expense to mark it as paid.',
      },
    },
    {
      src: `${IMG}/calendario.webp`,
      title: { es: 'Calendario de pagos', en: 'Payment calendar' },
      caption: {
        es: 'Pagos programados y recurrentes (único, semanal, quincenal, mensual o anual) y los reembolsos pendientes a conductores.',
        en: 'Scheduled and recurring payments (one-off, weekly, biweekly, monthly or yearly) and pending driver reimbursements.',
      },
    },
    {
      src: `${IMG}/gastos.webp`,
      title: { es: 'Gastos de conductores', en: 'Driver expenses' },
      caption: {
        es: 'Lo que los conductores registran desde su celular (peajes, balanza, estacionamiento) con su foto, el servicio, la placa y el contenedor.',
        en: 'What drivers record from their phone (tolls, weighbridge, parking) with its photo, the service, the plate and the container.',
      },
    },
    {
      src: `${IMG}/servicios.webp`,
      title: { es: 'Servicios de transporte', en: 'Transport services' },
      caption: {
        es: 'Los servicios de Odoo de los últimos 45 días con su etapa, tipo, avance de hitos y la fase en la que está el conductor. Filtros, columnas configurables y exportación.',
        en: 'Odoo services from the last 45 days with their stage, type, milestone progress and the phase the driver is in. Filters, configurable columns and export.',
      },
    },
    {
      src: `${IMG}/detalle.webp`,
      title: { es: 'Detalle del servicio', en: 'Service detail' },
      caption: {
        es: 'Barra de etapas de Odoo, datos generales, cliente, conductor y el geoenlace GPS del servicio.',
        en: 'Odoo stage bar, general data, client, driver and the service’s GPS share link.',
      },
    },
    {
      src: `${IMG}/detalle-hitos.webp`,
      title: { es: 'Tiempos operativos', en: 'Operational times' },
      caption: {
        es: 'Cada hito con la hora en que el conductor lo marcó y un mapa con el lugar exacto donde estaba.',
        en: 'Every milestone with the time the driver marked it and a map of exactly where they were.',
      },
    },
    {
      src: `${IMG}/geoenlaces.webp`,
      title: { es: 'Geoenlaces', en: 'GPS share links' },
      caption: {
        es: 'Flota GPS de Navitel: se eligen uno o varios vehículos y se crea un enlace de seguimiento con fecha de vencimiento para compartir con el cliente.',
        en: 'Navitel GPS fleet: pick one or more vehicles and create a tracking link with an expiry date to share with the client.',
      },
    },
    {
      src: `${IMG}/automatizacion.webp`,
      title: { es: 'Vencimientos', en: 'Expiries' },
      caption: {
        es: 'Documentos de cada conductor (DNI, licencias, antecedentes, SCTR…) leídos de Odoo, con colores según los días que faltan y alertas por correo.',
        en: 'Each driver’s documents (ID, licenses, records, insurance…) read from Odoo, colored by days left and with email alerts.',
      },
    },
    {
      src: `${IMG}/vacaciones.webp`,
      title: { es: 'Vacaciones', en: 'Vacations' },
      caption: {
        es: 'Récord vacacional de cada trabajador por empresa: días que le tocan, gozados, saldo y próximo aviso.',
        en: 'Each worker’s vacation record per company: days earned, taken, balance and next reminder.',
      },
    },
    {
      src: `${IMG}/asistencia.webp`,
      title: { es: 'Asistencia de conductores', en: 'Driver attendance' },
      caption: {
        es: 'Entradas y salidas marcadas por ubicación, quién no marcó hoy y el enlace al mapa de cada marca.',
        en: 'Check-ins and check-outs marked by location, who has not checked in today and a map link for each mark.',
      },
    },
    {
      src: `${IMG}/usuarios.webp`,
      title: { es: 'Usuarios y permisos', en: 'Users & permissions' },
      caption: {
        es: 'Cada usuario tiene un rol y, si no es administrador, permisos por módulo: ver, crear, editar y eliminar.',
        en: 'Each user has a role and, if not an admin, per-module permissions: view, create, edit and delete.',
      },
    },
    {
      src: `${IMG}/updates.webp`,
      title: { es: 'Novedades', en: 'What’s new' },
      caption: {
        es: 'Las mejoras del sistema se publican aquí en lenguaje simple, con aviso de las que el usuario aún no leyó.',
        en: 'System improvements are published here in plain language, flagging the ones the user has not read yet.',
      },
    },
    {
      src: `${IMG}/login.webp`,
      title: { es: 'Inicio de sesión', en: 'Sign in' },
      caption: {
        es: 'Acceso con correo para el equipo de oficina y un acceso aparte para conductores.',
        en: 'Email sign-in for the office team and a separate entrance for drivers.',
      },
    },
  ],

  features: [
    {
      icon: 'scan',
      title: { es: 'Pagos con lectura de comprobante', en: 'Payments with receipt reading' },
      body: {
        es: 'Al subir la factura o el voucher, GPT-4o extrae tipo de documento, número, RUC y monto. El formulario cambia según la categoría y exige los datos que pide la matriz de imputación (servicio, placa, conductor…).',
        en: 'When an invoice or voucher is uploaded, GPT-4o extracts document type, number, tax ID and amount. The form changes by category and asks for the data the cost-allocation matrix requires (service, plate, driver…).',
      },
    },
    {
      icon: 'wallet',
      title: { es: 'Resumen y calendario', en: 'Overview & calendar' },
      body: {
        es: 'Totales del mes comparados con el mes anterior a la misma fecha, reparto por categoría y método, y un calendario de pagos recurrentes que se marcan como pagados al registrarlos.',
        en: 'Monthly totals compared with the previous month to the same date, split by category and method, and a calendar of recurring payments that get marked as paid when recorded.',
      },
    },
    {
      icon: 'truck',
      title: { es: 'Servicios en vivo desde Odoo', en: 'Live services from Odoo' },
      body: {
        es: 'La tabla de servicios lee Odoo directamente y muestra el avance de cada conductor. Se puede editar, cambiar de etapa, reiniciar o finalizar un servicio (pidiendo escribir su código para confirmar).',
        en: 'The services table reads Odoo directly and shows each driver’s progress. A service can be edited, moved to another stage, reset or finished (typing its code to confirm).',
      },
    },
    {
      icon: 'pin',
      title: { es: 'Hitos con hora, GPS y foto', en: 'Milestones with time, GPS & photo' },
      body: {
        es: 'En el detalle se ve cada hito con la hora, un mapa del lugar donde se marcó y las fotos de evidencia (contenedor, precinto, EIR, conformidad).',
        en: 'The detail shows every milestone with its time, a map of where it was marked and the evidence photos (container, seal, EIR, delivery proof).',
      },
    },
    {
      icon: 'link',
      title: { es: 'Geoenlaces GPS', en: 'GPS share links' },
      body: {
        es: 'Enlaces de seguimiento de Navitel para uno o varios vehículos. Además se crean solos por servicio: 3 horas antes de la cita (o cuando el conductor arranca) y duran como máximo 12 horas.',
        en: 'Navitel tracking links for one or several vehicles. They are also created automatically per service: 3 hours before the appointment (or when the driver starts) and last 12 hours at most.',
      },
    },
    {
      icon: 'bell',
      title: { es: 'Alertas de vencimiento', en: 'Expiry alerts' },
      body: {
        es: 'Documentos de conductores, tractos y carretas con semáforo de días. Correos automáticos con umbrales configurables por documento y un flyer en imagen listo para compartir.',
        en: 'Driver, truck and trailer documents with a days-left traffic light. Automatic emails with thresholds configurable per document and an image flyer ready to share.',
      },
    },
    {
      icon: 'users',
      title: { es: 'Recursos humanos', en: 'Human resources' },
      body: {
        es: 'Vacaciones por récord anual, asistencia de conductores dentro de zonas permitidas y asistencia de oficina con sticker y selfie.',
        en: 'Vacations by yearly record, driver attendance inside allowed zones and office attendance with a sticker and selfie.',
      },
    },
    {
      icon: 'file',
      title: { es: 'SUNAT y detracciones', en: 'SUNAT & withholdings' },
      body: {
        es: 'Consulta masiva de guías de remisión electrónicas (transportista y bienes fiscalizables) con descarga de XML y PDF, y conciliación de detracciones contra el estado de cuenta del Banco de la Nación.',
        en: 'Bulk lookup of electronic shipping guides (carrier and controlled goods) with XML and PDF download, and reconciliation of tax withholdings against the Banco de la Nación statement.',
      },
    },
    {
      icon: 'clock',
      title: { es: 'Sobrecostos por estadía', en: 'Waiting-time surcharges' },
      body: {
        es: 'Mide cuánto esperó el camión en el cliente usando las horas de los hitos. Las primeras 5 horas son libres; desde ahí se marca la alerta y se exporta a Excel para cobrar.',
        en: 'Measures how long the truck waited at the client using milestone times. The first 5 hours are free; after that it is flagged and exported to Excel for billing.',
      },
    },
    {
      icon: 'megaphone',
      title: { es: 'Novedades del sistema', en: 'System updates' },
      body: {
        es: 'Cada mejora se publica con el módulo, a quién afecta y qué cambió, en lenguaje no técnico. Los usuarios ven un aviso hasta leerla.',
        en: 'Each improvement is published with the module, who it affects and what changed, in non-technical language. Users see a notice until they read it.',
      },
    },
  ],

  sections: [
    {
      id: 'roles',
      label: { es: 'Roles y permisos', en: 'Roles & permissions' },
      intro: {
        es: 'Cada persona entra con su propia cuenta. El rol define lo general y, para los usuarios normales, se elige módulo por módulo qué pueden hacer.',
        en: 'Everyone signs in with their own account. The role sets the general access and, for regular users, what they can do is chosen module by module.',
      },
      blocks: [
        {
          kind: 'matrix',
          label: { es: 'Qué puede hacer cada rol', en: 'What each role can do' },
          columns: [
            { es: 'Ver', en: 'View' },
            { es: 'Crear / editar', en: 'Create / edit' },
            { es: 'Eliminar', en: 'Delete' },
            { es: 'Usuarios', en: 'Users' },
          ],
          rows: [
            { label: { es: 'Administrador', en: 'Admin' }, sub: { es: 'Todo el sistema', en: 'The whole system' }, cells: [true, true, true, true] },
            { label: { es: 'Developer', en: 'Developer' }, sub: { es: 'Como admin + publica novedades', en: 'Like admin + publishes updates' }, cells: [true, true, true, true] },
            {
              label: { es: 'Usuario', en: 'User' },
              sub: { es: 'Según los módulos asignados', en: 'Per assigned modules' },
              cells: [{ es: 'Por módulo', en: 'Per module' }, { es: 'Por módulo', en: 'Per module' }, { es: 'Por módulo', en: 'Per module' }, false],
            },
            { label: { es: 'Visualizador', en: 'Viewer' }, sub: { es: 'Solo lectura', en: 'Read only' }, cells: [{ es: 'Por módulo', en: 'Per module' }, false, false, false] },
            {
              label: { es: 'Conductor', en: 'Driver' },
              sub: { es: 'Solo el portal del conductor', en: 'Driver portal only' },
              cells: [{ es: 'Sus servicios', en: 'Own services' }, { es: 'Hitos y gastos', en: 'Milestones & expenses' }, false, false],
            },
          ],
        },
        {
          kind: 'cards',
          items: [
            {
              icon: 'shield',
              title: { es: 'Permisos por módulo', en: 'Per-module permissions' },
              body: {
                es: 'Pagos, Servicios, Automatización y Recursos Humanos tienen cada uno su propio “habilitado / crear / editar / eliminar”. El menú solo muestra lo habilitado.',
                en: 'Payments, Services, Automation and HR each have their own “enabled / create / edit / delete”. The menu only shows what is enabled.',
              },
            },
            {
              icon: 'finger',
              title: { es: 'Tres capas de control', en: 'Three layers of control' },
              body: {
                es: 'El proxy exige sesión, cada ruta de la API revisa el rol y el módulo, y la base de datos repite la regla con Row Level Security. Un conductor nunca puede leer la lista completa de servicios.',
                en: 'The proxy requires a session, every API route checks role and module, and the database repeats the rule with Row Level Security. A driver can never read the full list of services.',
              },
            },
            {
              icon: 'camera',
              title: { es: 'Archivos solo con sesión', en: 'Files only with a session' },
              body: {
                es: 'Comprobantes y fotos de hitos se muestran a través de una ruta propia que verifica la sesión, aunque estén guardados en Storage.',
                en: 'Receipts and milestone photos are served through a dedicated route that checks the session, even though they live in Storage.',
              },
            },
            {
              icon: 'users',
              title: { es: 'Vinculado a Odoo', en: 'Linked to Odoo' },
              body: {
                es: 'Cada conductor se enlaza a su empleado de Odoo; así la app sabe qué servicios son suyos y qué documentos mostrarle.',
                en: 'Each driver is linked to their Odoo employee, so the app knows which services are theirs and which documents to show.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'integrations',
      label: { es: 'Integraciones', en: 'Integrations' },
      intro: {
        es: 'PayBox no reemplaza a los sistemas que la empresa ya usaba: los lee y escribe donde corresponde, para que nadie tenga que pasar datos a mano.',
        en: 'PayBox does not replace the systems the company already used: it reads and writes to them where it makes sense, so nobody has to copy data by hand.',
      },
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              icon: 'route',
              title: { es: 'Odoo ERP (JSON-RPC)', en: 'Odoo ERP (JSON-RPC)' },
              body: {
                es: 'Servicios (tareas del proyecto “Servicio de Transporte” con sus campos de Odoo Studio), empleados, flota y facturas. La app escribe en Odoo la hora de cada hito y cambia la etapa del servicio.',
                en: 'Services (tasks of the “Transport Service” project with their Odoo Studio fields), employees, fleet and invoices. The app writes each milestone time to Odoo and moves the service stage.',
              },
            },
            {
              icon: 'pin',
              title: { es: 'Navitel GPS', en: 'Navitel GPS' },
              body: {
                es: 'Lista de vehículos, creación y borrado de enlaces de seguimiento, zonas y verificación de llegada a destino.',
                en: 'Vehicle list, creating and deleting tracking links, zones and arrival checks.',
              },
            },
            {
              icon: 'file',
              title: { es: 'SUNAT', en: 'SUNAT' },
              body: {
                es: 'Consulta de guías de remisión electrónicas (GRE) con token de acceso, y descarga de su XML y PDF.',
                en: 'Lookup of electronic shipping guides (GRE) with an access token, and download of their XML and PDF.',
              },
            },
            {
              icon: 'scan',
              title: { es: 'OpenAI', en: 'OpenAI' },
              body: {
                es: 'Lectura de comprobantes (facturas y vouchers de transferencia) para llenar el formulario de pago.',
                en: 'Reading receipts (invoices and transfer vouchers) to fill in the payment form.',
              },
            },
            {
              icon: 'bell',
              title: { es: 'Correo (SMTP)', en: 'Email (SMTP)' },
              body: {
                es: 'Envío de alertas de vencimiento. Una función programada en Netlify las manda todos los días para tractos, carretas y conductores.',
                en: 'Sending expiry alerts. A scheduled Netlify function sends them every day for trucks, trailers and drivers.',
              },
            },
            {
              icon: 'sheet',
              title: { es: 'Excel', en: 'Excel' },
              body: {
                es: 'Exportación de pagos, gastos, servicios, vencimientos y sobrecostos con ExcelJS; lectura de los reportes de detracciones y del banco.',
                en: 'Export of payments, expenses, services, expiries and surcharges with ExcelJS; reading the withholding and bank reports.',
              },
            },
          ],
        },
      ],
      aside: [`${IMG}/detalle-hitos.webp`, `${IMG}/geoenlaces.webp`],
    },
    {
      id: 'tech',
      label: { es: 'Arquitectura', en: 'Architecture' },
      blocks: [
        {
          kind: 'chips',
          groups: [
            { group: { es: 'Frontend', en: 'Frontend' }, items: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui · Radix', 'SWR'] },
            { group: { es: 'Formularios', en: 'Forms' }, items: ['React Hook Form', 'Zod', 'Sonner'] },
            { group: { es: 'Backend', en: 'Backend' }, items: ['Rutas de API de Next.js', 'Supabase', 'PostgreSQL · RLS', 'Storage', 'Netlify Functions'] },
            { group: { es: 'Archivos', en: 'Files' }, items: ['ExcelJS', 'satori + resvg', 'pdf-parse', 'Vitest'] },
          ],
        },
        {
          kind: 'cards',
          items: [
            {
              title: { es: 'Odoo como fuente de verdad', en: 'Odoo as the source of truth' },
              body: {
                es: 'Los servicios no se copian: se leen de Odoo en cada carga. Supabase guarda solo lo que PayBox agrega (avance del conductor, fotos, ubicaciones, gastos y pagos).',
                en: 'Services are not copied: they are read from Odoo on every load. Supabase only stores what PayBox adds (driver progress, photos, locations, expenses and payments).',
              },
            },
            {
              title: { es: 'Listas rápidas con caché', en: 'Fast lists with caching' },
              body: {
                es: 'Con SWR, al volver a una pantalla la tabla aparece al instante con lo último cargado y se actualiza sola en segundo plano.',
                en: 'With SWR, returning to a screen shows the table instantly with the last data and refreshes it in the background.',
              },
            },
            {
              title: { es: 'Un solo cliente de Odoo', en: 'A single Odoo client' },
              body: {
                es: 'Todas las rutas comparten un cliente JSON-RPC que recuerda la autenticación unos minutos y junta las peticiones simultáneas en un solo viaje.',
                en: 'All routes share a JSON-RPC client that caches authentication for a few minutes and merges simultaneous requests into a single trip.',
              },
            },
            {
              title: { es: 'Hora de Lima', en: 'Lima time' },
              body: {
                es: 'Fechas y horas se calculan siempre en hora de Perú, para que un servicio programado no aparezca un día antes según el navegador.',
                en: 'Dates and times are always computed in Peru time, so a scheduled service never shows up a day early depending on the browser.',
              },
            },
          ],
        },
        {
          kind: 'table',
          label: { es: 'Algunas tablas (Supabase)', en: 'Some tables (Supabase)' },
          rows: [
            { name: 'user_profiles', what: { es: 'rol, permisos por módulo y empleado de Odoo vinculado', en: 'role, per-module permissions and linked Odoo employee' } },
            { name: 'registros · categorias', what: { es: 'pagos y categorías con su regla de imputación', en: 'payments and categories with their allocation rule' } },
            { name: 'calendario_pagos', what: { es: 'pagos programados y recurrentes', en: 'scheduled and recurring payments' } },
            { name: 'gastos_conductor', what: { es: 'gastos registrados por conductores, con fotos', en: 'driver expenses, with photos' } },
            { name: 'conductor_servicios_progreso', what: { es: 'hito en el que va cada servicio', en: 'milestone each service is at' } },
            { name: 'conductor_servicio_hito_fotos', what: { es: 'fotos de evidencia por hito', en: 'evidence photos per milestone' } },
            { name: 'service_locations', what: { es: 'ubicación GPS de cada hito marcado', en: 'GPS location of each marked milestone' } },
            { name: 'vacaciones_* · asistencias_*', what: { es: 'récords vacacionales y marcas de asistencia', en: 'vacation records and attendance marks' } },
          ],
        },
      ],
    },
  ],
};
