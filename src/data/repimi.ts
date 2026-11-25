// Caso de estudio "Repimi": startup propia de tiendas con pedidos por WhatsApp (repimi.com).
// Capturas en /public/images/repimi, sacadas del código actual corriendo en local con las tiendas
// de demostración (negocios ficticios). Los pedidos y clientes del panel son de ejemplo y lo dicen.

import type { CaseStudy } from './caseStudy';

const IMG = '/images/repimi';

export const repimi: CaseStudy = {
  id: 'repimi',
  name: 'Repimi',
  kicker: { es: 'Caso de estudio · Startup propia', en: 'Case study · My own startup' },
  icon: `${IMG}/icon.webp`,
  cover: `${IMG}/cover.webp`,
  frame: 'phone',
  stack: 'Next.js · React · TypeScript · Tailwind · Supabase · Gemini API · Vercel',

  overview: {
    tagline: {
      es: 'Tienda propia con pedidos por WhatsApp para pequeños negocios de Perú: el cliente arma su pedido y le llega al negocio en un solo mensaje, completo y sin comisión.',
      en: 'An online store with WhatsApp ordering for small businesses in Peru: customers build their order and the business gets it in a single, complete message, with no commission.',
    },
    problem: {
      es: 'Pollerías, bodegas y emprendimientos de Instagram venden por WhatsApp a punta de “pásame la carta”, audios con medio pedido y sumas a mano. Las apps de delivery cobran 20–30% por venta y el catálogo de WhatsApp Business no tiene buscador, zonas de reparto ni total.',
      en: 'Chicken shops, corner stores and Instagram brands sell over WhatsApp with “send me the menu”, voice notes with half an order and sums done by hand. Delivery apps take 20–30% per sale and the WhatsApp Business catalog has no search, delivery zones or total.',
    },
    solution: {
      es: 'Cada negocio tiene su tienda en su propio subdominio (negocio.repimi.com) con sus colores. El cliente busca, elige opciones, escoge delivery o recojo y método de pago, y el pedido sale a WhatsApp ya armado con total, dirección y pago. El dueño lo atiende desde un panel pensado para el celular, que también sirve para vender en el local, incluso sin internet.',
      en: 'Each business gets a store on its own subdomain (business.repimi.com) with its colors. Customers search, pick options, choose delivery or pickup and a payment method, and the order goes to WhatsApp already built with total, address and payment. The owner handles it from a phone-first panel that also works for counter sales, even offline.',
    },
    facts: [
      { k: { es: 'Plataforma', en: 'Platform' }, v: { es: 'Web · celular primero (instalable)', en: 'Web · phone first (installable)' } },
      { k: { es: 'Usuarios', en: 'Users' }, v: { es: 'Dueños de negocios y sus clientes', en: 'Business owners and their customers' } },
      { k: { es: 'Rol', en: 'Role' }, v: { es: 'Fundador · producto, diseño y desarrollo', en: 'Founder · product, design & development' } },
      { k: { es: 'Estado', en: 'Status' }, v: { es: 'En producción · repimi.com', en: 'In production · repimi.com' } },
    ],
    numbers: [
      { n: '3', l: { es: 'sitios en un solo deploy', en: 'sites in a single deploy' } },
      { n: '0%', l: { es: 'comisión por venta', en: 'commission per sale' } },
      { n: '1,000', l: { es: 'productos por tienda', en: 'products per store' } },
      { n: '22', l: { es: 'migraciones de base de datos', en: 'database migrations' } },
    ],
  },

  screens: [
    {
      src: `${IMG}/tienda.webp`,
      title: { es: 'La tienda', en: 'The store' },
      caption: {
        es: 'Portada con el logo, colores y horario del negocio, buscador y secciones. Avisa si está abierto y recibiendo pedidos.',
        en: 'Header with the business logo, colors and opening hours, search and sections. It shows whether the store is open and taking orders.',
      },
    },
    {
      src: `${IMG}/producto.webp`,
      title: { es: 'Producto con opciones', en: 'Product with options' },
      caption: {
        es: 'Opciones obligatorias o de varias a la vez (parte, cremas, término, tamaño), cada una con su precio extra, y una nota para el negocio.',
        en: 'Required or multi-choice options (cut, sauces, doneness, size), each with its extra price, plus a note for the business.',
      },
    },
    {
      src: `${IMG}/carrito.webp`,
      title: { es: 'Tu pedido', en: 'Your order' },
      caption: {
        es: 'Delivery por distrito con su costo y pedido mínimo, o recojo en tienda. El total se actualiza al momento.',
        en: 'Delivery by district with its fee and minimum order, or store pickup. The total updates instantly.',
      },
    },
    {
      src: `${IMG}/pago.webp`,
      title: { es: 'Datos y pago', en: 'Details & payment' },
      caption: {
        es: 'Nombre, celular y método de pago: Yape, Plin, transferencia o efectivo. Con Yape o Plin se muestra el número al que pagar.',
        en: 'Name, phone and payment method: Yape, Plin, bank transfer or cash. With Yape or Plin it shows the number to pay to.',
      },
    },
    {
      src: `${IMG}/mensaje.webp`,
      title: { es: 'Así llega tu mensaje', en: 'How your message arrives' },
      caption: {
        es: 'Antes de enviar, el cliente ve el mensaje tal como le llegará al negocio por WhatsApp: productos, total, dirección y pago.',
        en: 'Before sending, the customer sees the message exactly as the business will get it on WhatsApp: items, total, address and payment.',
      },
    },
    {
      src: `${IMG}/demo-dulces.webp`,
      title: { es: 'Cada negocio, su estilo', en: 'Each business, its own style' },
      caption: {
        es: 'Demo de pastelería: otra letra, otros colores y productos por encargo con fecha de entrega.',
        en: 'Bakery demo: different font, different colors and made-to-order products with a delivery date.',
      },
    },
    {
      src: `${IMG}/demo-bodega.webp`,
      title: { es: 'Demo de bodega', en: 'Corner store demo' },
      caption: {
        es: 'Para bodegas: letras grandes, stock visible, precio por unidad o paquete y “repetir mi último pedido”.',
        en: 'For corner stores: big type, visible stock, price per unit or pack and “repeat my last order”.',
      },
    },
    {
      src: `${IMG}/panel-inicio.webp`,
      title: { es: 'Panel · Inicio', en: 'Panel · Home' },
      caption: {
        es: 'Lo cobrado hoy, ayer, en 7 días o en el mes, separado por método de pago, y accesos a vender y a los pedidos nuevos. (Datos de ejemplo.)',
        en: 'What was collected today, yesterday, in 7 days or this month, split by payment method, with shortcuts to sell and to new orders. (Sample data.)',
      },
    },
    {
      src: `${IMG}/panel-pedidos.webp`,
      title: { es: 'Panel · Pedidos', en: 'Panel · Orders' },
      caption: {
        es: 'Los pedidos llegan en tiempo real con aviso. Se aceptan, se marcan en camino y entregados, o se escribe al cliente por WhatsApp.',
        en: 'Orders arrive in real time with a notification. The owner accepts them, marks them out for delivery and delivered, or messages the customer on WhatsApp.',
      },
    },
    {
      src: `${IMG}/panel-vender.webp`,
      title: { es: 'Panel · Vender', en: 'Panel · Sell' },
      caption: {
        es: 'Venta en mostrador con un toque por producto. Funciona sin internet y se puede vender algo que no está registrado.',
        en: 'Counter sales with one tap per product. It works offline and can sell items that are not in the catalog.',
      },
    },
    {
      src: `${IMG}/panel-productos.webp`,
      title: { es: 'Panel · Productos', en: 'Panel · Products' },
      caption: {
        es: 'Precio y disponibilidad se cambian tocando el producto. Desde aquí se sube la carta con IA o se pega una lista de Excel.',
        en: 'Price and availability change by tapping the product. From here the owner uploads the menu with AI or pastes an Excel list.',
      },
    },
    {
      src: `${IMG}/carta-subir.webp`,
      title: { es: 'Subir mi carta · 1', en: 'Upload my menu · 1' },
      caption: {
        es: 'El dueño sube fotos o el PDF de su carta (hasta 10 páginas). Tiene 3 lecturas con IA.',
        en: 'The owner uploads photos or the PDF of their menu (up to 10 pages). They get 3 AI readings.',
      },
    },
    {
      src: `${IMG}/carta-fotos.webp`,
      title: { es: 'Subir mi carta · 2', en: 'Upload my menu · 2' },
      caption: {
        es: 'La IA encontró los productos, las secciones y las fotos que ya trae la carta, y ofrece mejorar esas fotos o crear las que faltan.',
        en: 'The AI found the products, the sections and the photos already in the menu, and offers to improve them or create the missing ones.',
      },
    },
    {
      src: `${IMG}/carta-revisar.webp`,
      title: { es: 'Subir mi carta · 3', en: 'Upload my menu · 3' },
      caption: {
        es: 'Sugiere un diseño según el tipo de negocio y el color de la carta. Nada se guarda hasta que el dueño toca «Aprobar».',
        en: 'It suggests a design from the business type and the menu color. Nothing is saved until the owner taps “Approve”.',
      },
    },
    {
      src: `${IMG}/carta-vista.webp`,
      title: { es: 'Vista previa', en: 'Preview' },
      caption: {
        es: 'Así verán la tienda los clientes, con las fotos recortadas de la propia carta.',
        en: 'How customers will see the store, with the photos cropped from the menu itself.',
      },
    },
    {
      src: `${IMG}/carta-editar.webp`,
      title: { es: 'Corregir antes de aprobar', en: 'Fix before approving' },
      caption: {
        es: 'Cada producto se puede renombrar, cambiar de precio, quitar la foto o desmarcar.',
        en: 'Each product can be renamed, repriced, have its photo removed or be unchecked.',
      },
    },
    {
      src: `${IMG}/panel-configurar.webp`,
      title: { es: 'Configurar tienda', en: 'Store settings' },
      caption: {
        es: 'Colores, letra y estilo; datos, pagos y horario; zonas de reparto; secciones; y sedes nuevas.',
        en: 'Colors, font and style; details, payments and hours; delivery zones; sections; and new branches.',
      },
    },
    {
      src: `${IMG}/landing.webp`,
      frame: 'browser',
      title: { es: 'Landing', en: 'Landing page' },
      caption: {
        es: 'Abre directo en el precio, sin frases de venta: el número y las demos hacen el trabajo.',
        en: 'It opens straight on the price, with no sales copy: the number and the demos do the work.',
      },
    },
    {
      src: `${IMG}/landing-demos.webp`,
      frame: 'browser',
      title: { es: 'Demos por rubro', en: 'Demos by industry' },
      caption: {
        es: 'Una tienda de prueba por tipo de negocio, para abrir en el celular y hacer un pedido de prueba.',
        en: 'One test store per type of business, to open on a phone and place a test order.',
      },
    },
    {
      src: `${IMG}/landing-planes.webp`,
      frame: 'browser',
      title: { es: 'Planes', en: 'Plans' },
      caption: {
        es: 'Una sola mensualidad sin permanencia: el dueño arma su tienda solo, o se la armamos nosotros.',
        en: 'One monthly fee with no lock-in: owners build their store themselves, or we build it for them.',
      },
    },
    {
      src: `${IMG}/tienda-escritorio.webp`,
      frame: 'browser',
      title: { es: 'Tienda en computadora', en: 'Store on desktop' },
      caption: {
        es: 'La misma tienda se adapta a pantallas grandes.',
        en: 'The same store adapts to large screens.',
      },
    },
    {
      src: `${IMG}/pedidos-escritorio.webp`,
      frame: 'browser',
      title: { es: 'Pedidos en computadora', en: 'Orders on desktop' },
      caption: {
        es: 'En pantalla grande los pedidos se ordenan en columnas: nuevos, aceptados y listos. (Datos de ejemplo.)',
        en: 'On a large screen orders are laid out in columns: new, accepted and ready. (Sample data.)',
      },
    },
  ],
  screenGroups: {
    phone: { es: 'Tienda y panel en el celular', en: 'Store and panel on a phone' },
    browser: { es: 'En computadora', en: 'On desktop' },
  },

  features: [
    {
      icon: 'chat',
      title: { es: 'El pedido completo en un mensaje', en: 'The whole order in one message' },
      body: {
        es: 'Productos con sus opciones, subtotal, delivery, total, cliente, dirección y forma de pago, con el número de pedido y el link de la tienda para volver a pedir.',
        en: 'Items with their options, subtotal, delivery, total, customer, address and payment method, with the order number and the store link to order again.',
      },
    },
    {
      icon: 'sparkles',
      title: { es: 'Subir mi carta con IA', en: 'Upload my menu with AI' },
      body: {
        es: 'Google Gemini lee la carta en foto o PDF: secciones, productos, precios, tamaños y extras. Las fotos de la carta se recortan en el mismo celular y la IA puede crear las que faltan.',
        en: 'Google Gemini reads the menu from a photo or PDF: sections, products, prices, sizes and extras. Menu photos are cropped on the phone itself and the AI can create the missing ones.',
      },
    },
    {
      icon: 'pin',
      title: { es: 'Zonas de reparto', en: 'Delivery zones' },
      body: {
        es: 'Delivery por distrito con su costo y pedido mínimo, o recojo en tienda. Horario de atención: fuera de hora se ve la carta pero no se reciben pedidos.',
        en: 'Delivery by district with its fee and minimum order, or store pickup. Opening hours: outside them the menu is visible but orders are not taken.',
      },
    },
    {
      icon: 'wallet',
      title: { es: 'Pagos de Perú', en: 'Peruvian payments' },
      body: {
        es: 'Yape, Plin, transferencia, efectivo y otros métodos propios. El cliente ve a qué número pagar y el resumen del panel separa lo cobrado por método.',
        en: 'Yape, Plin, bank transfer, cash and custom methods. Customers see the number to pay to and the panel summary splits what was collected by method.',
      },
    },
    {
      icon: 'receipt',
      title: { es: 'Venta en mostrador sin internet', en: 'Offline counter sales' },
      body: {
        es: 'Cada cambio se guarda primero en el celular con un id propio y se envía solo cuando vuelve la señal, sin duplicar ventas. Se puede vender algo que no está registrado.',
        en: 'Every change is saved on the phone first with its own id and sent automatically when the signal returns, without duplicating sales. Unregistered items can be sold too.',
      },
    },
    {
      icon: 'clipboard',
      title: { es: 'Stock que no se pasa', en: 'Stock that never oversells' },
      body: {
        es: 'Al abrir el carrito y antes de enviar se revisa qué ya no alcanza (“Solo quedan 2”). El descuento real es atómico en la base de datos, así dos clientes no compran la última unidad.',
        en: 'When the cart opens and before sending it checks what is no longer available (“Only 2 left”). The real decrement is atomic in the database, so two customers can’t buy the last unit.',
      },
    },
    {
      icon: 'users',
      title: { es: 'Varias sedes por marca', en: 'Multiple branches per brand' },
      body: {
        es: 'Una marca puede tener varios locales con su propio WhatsApp, horario, zonas, stock y pedidos. La página de la marca pregunta “¿a qué sede quieres pedir?” según el distrito.',
        en: 'A brand can run several locations with their own WhatsApp, hours, zones, stock and orders. The brand page asks “which branch do you want to order from?” based on the district.',
      },
    },
    {
      icon: 'widget',
      title: { es: 'Diseño propio en minutos', en: 'Own design in minutes' },
      body: {
        es: 'Estilos listos por rubro (pollería, bodega, dulcería…) y ajustes de color, letra, fondo, forma y vista en lista o cuadritos. Cada tienda mantiene el color de su negocio.',
        en: 'Ready-made styles per industry (chicken shop, corner store, bakery…) and settings for color, font, background, shape and list or grid view. Each store keeps its business color.',
      },
    },
    {
      icon: 'sheet',
      title: { es: 'Carga masiva desde Excel', en: 'Bulk upload from Excel' },
      body: {
        es: 'Se pega la lista de productos copiada de Excel y se crean de una vez, con su sección, precio y stock.',
        en: 'Paste the product list copied from Excel and they are all created at once, with their section, price and stock.',
      },
    },
    {
      icon: 'bell',
      title: { es: 'Pedidos en tiempo real', en: 'Real-time orders' },
      body: {
        es: 'Supabase Realtime avisa cada pedido nuevo con notificación, y el panel se puede instalar en el celular como app.',
        en: 'Supabase Realtime announces each new order with a notification, and the panel can be installed on the phone as an app.',
      },
    },
  ],

  sections: [
    {
      id: 'flow',
      label: { es: 'Cómo funciona', en: 'How it works' },
      intro: {
        es: 'Del registro del negocio al pedido en WhatsApp, sin que nadie tenga que copiar datos a mano.',
        en: 'From signing up the business to the order on WhatsApp, without anyone copying data by hand.',
      },
      blocks: [
        {
          kind: 'numbered',
          items: [
            {
              title: { es: 'El dueño crea su tienda', en: 'The owner creates their store' },
              body: {
                es: 'Se registra en app.repimi.com, elige el nombre de su subdominio y su rubro, y prueba 14 días gratis.',
                en: 'They sign up at app.repimi.com, pick their subdomain name and industry, and try it free for 14 days.',
              },
            },
            {
              title: { es: 'Carga sus productos', en: 'Loads their products' },
              body: {
                es: 'Sube su carta y la IA arma los productos, pega su lista de Excel o los agrega a mano. Luego ajusta zonas, pagos y horario.',
                en: 'They upload their menu and the AI builds the products, paste their Excel list or add them by hand. Then they set zones, payments and hours.',
              },
            },
            {
              title: { es: 'Comparte su link', en: 'Shares their link' },
              body: {
                es: 'negocio.repimi.com va en su bio de Instagram, su estado de WhatsApp o un QR en la mesa. El link se ve con su logo al compartirlo.',
                en: 'business.repimi.com goes in their Instagram bio, WhatsApp status or a QR on the table. The link shows their logo when shared.',
              },
            },
            {
              title: { es: 'El cliente pide', en: 'The customer orders' },
              body: {
                es: 'Arma el carrito, elige entrega y pago, y toca «Enviar por WhatsApp». El pedido se guarda y se abre WhatsApp con el mensaje listo.',
                en: 'They build the cart, choose delivery and payment, and tap “Send via WhatsApp”. The order is saved and WhatsApp opens with the message ready.',
              },
            },
            {
              title: { es: 'El negocio atiende', en: 'The business handles it' },
              body: {
                es: 'Le llega el mensaje y el pedido aparece en su panel. Lo acepta, lo despacha, lo marca entregado y ve lo cobrado del día.',
                en: 'They get the message and the order shows up in their panel. They accept it, dispatch it, mark it delivered and see the day’s takings.',
              },
            },
          ],
        },
      ],
      aside: [`${IMG}/mensaje.webp`, `${IMG}/panel-pedidos.webp`],
    },
    {
      id: 'business',
      label: { es: 'Modelo de negocio', en: 'Business model' },
      intro: {
        es: 'Precios pensados para un negocio pequeño de Perú: una mensualidad fija en soles y nada por venta.',
        en: 'Pricing designed for a small Peruvian business: a flat monthly fee in soles and nothing per sale.',
      },
      blocks: [
        {
          kind: 'rules',
          rows: [
            { what: { es: 'Mensualidad', en: 'Monthly fee' }, value: 'S/ 89', good: true },
            { what: { es: 'Pago inicial si el dueño la arma', en: 'Upfront if the owner builds it' }, value: 'S/ 0', good: true },
            { what: { es: 'Comisión por venta', en: 'Commission per sale' }, value: '0%', good: true },
            { what: { es: 'Prueba gratis', en: 'Free trial' }, value: '14 días', good: true },
            { what: { es: '«Lo armamos por ti» (pago único)', en: '“We build it for you” (one-time)' }, value: 'S/ 490', good: false },
            { what: { es: 'Sede adicional', en: 'Additional branch' }, value: 'S/ 59 / mes', good: false },
          ],
        },
        {
          kind: 'cards',
          items: [
            {
              icon: 'bank',
              title: { es: 'Cobro sin pasarela', en: 'Billing without a gateway' },
              body: {
                es: 'El dueño paga por Yape o transferencia. El panel le avisa 3 días antes, y una tarea diaria en la base de datos pausa las tiendas con más de 5 días de atraso.',
                en: 'Owners pay by Yape or bank transfer. The panel warns them 3 days before, and a daily database job pauses stores more than 5 days overdue.',
              },
            },
            {
              icon: 'shield',
              title: { es: 'Panel de administración', en: 'Admin panel' },
              body: {
                es: 'Lista todas las tiendas con su estado (al día, en prueba, vencida, pausada), pedidos y ventas de 30 días, y un botón para recordar el pago por WhatsApp. Nunca muestra datos de los clientes finales.',
                en: 'Lists every store with its status (paid, trial, overdue, paused), orders and 30-day sales, and a button to send a payment reminder on WhatsApp. It never shows end customers’ data.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'security',
      label: { es: 'Datos y seguridad', en: 'Data & security' },
      intro: {
        es: 'Una sola base de datos para todos los negocios: cada dueño ve solo lo suyo y lo importante lo decide la base de datos, no el navegador.',
        en: 'One database for every business: each owner sees only their own data, and the important rules live in the database, not the browser.',
      },
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              icon: 'shield',
              title: { es: 'Row Level Security', en: 'Row Level Security' },
              body: {
                es: 'Todas las tablas tienen RLS. Un visitante solo puede leer las columnas públicas de una tienda; nunca el dueño, el plan ni los pedidos de otros.',
                en: 'Every table has RLS. A visitor can only read a store’s public columns; never its owner, plan or other people’s orders.',
              },
            },
            {
              icon: 'finger',
              title: { es: 'Lo que el dueño no puede cambiar', en: 'What owners can’t change' },
              body: {
                es: 'Un trigger impide que el dueño cambie su estado, plan, subdominio o el dueño de la tienda. Los pedidos se crean con una función que recalcula precios y descuenta stock en una sola transacción.',
                en: 'A trigger stops owners from changing their status, plan, subdomain or the store’s owner. Orders are created by a function that recalculates prices and decrements stock in one transaction.',
              },
            },
            {
              icon: 'help',
              title: { es: 'Límites de IA por cuenta', en: 'AI limits per account' },
              body: {
                es: '3 lecturas de carta de por vida (una que falla no cuenta), 12 intentos al día y 150 fotos creadas. La clave de Gemini vive solo en el servidor.',
                en: '3 menu readings for life (a failed one doesn’t count), 12 attempts per day and 150 generated photos. The Gemini key lives only on the server.',
              },
            },
            {
              icon: 'clock',
              title: { es: 'Hora de Lima', en: 'Lima time' },
              body: {
                es: '“Abierto ahora”, los resúmenes de ventas y las pausas por atraso se calculan en hora de Perú, igual en el navegador y en la base de datos.',
                en: '“Open now”, sales summaries and overdue pauses are computed in Peru time, the same in the browser and in the database.',
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
            { group: { es: 'Frontend', en: 'Frontend' }, items: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'lucide-react', 'PWA'] },
            { group: { es: 'Backend', en: 'Backend' }, items: ['Supabase', 'PostgreSQL · RLS', 'Funciones SQL (RPC)', 'Realtime', 'Storage', 'pg_cron'] },
            { group: { es: 'IA y archivos', en: 'AI & files' }, items: ['Google Gemini', 'pdf.js', 'Canvas (recortes)'] },
            { group: { es: 'Infra y pruebas', en: 'Infra & tests' }, items: ['Vercel', 'Middleware por host', 'node:test', 'Pruebas SQL'] },
          ],
        },
        {
          kind: 'cards',
          items: [
            {
              title: { es: 'Un deploy, tres sitios', en: 'One deploy, three sites' },
              body: {
                es: 'El middleware de Next lee el dominio: repimi.com muestra la landing, app.repimi.com el panel y cualquier otro subdominio la tienda de ese negocio. Las tiendas se pintan en el servidor para que el link se vea bien al compartirlo.',
                en: 'Next’s middleware reads the host: repimi.com shows the landing, app.repimi.com the panel and any other subdomain that business’s store. Stores are rendered on the server so the link previews well when shared.',
              },
            },
            {
              title: { es: 'Panel que funciona sin señal', en: 'A panel that works offline' },
              body: {
                es: 'El panel guarda lo último que vio y una cola de cambios en el celular. Lo que se ve es el servidor más los cambios pendientes, y cada cambio tiene unos segundos para «Deshacer» antes de enviarse.',
                en: 'The panel keeps the last data it saw and a queue of changes on the phone. What you see is the server plus pending changes, and each change has a few seconds to “Undo” before it is sent.',
              },
            },
            {
              title: { es: 'Catálogos copiables entre sedes', en: 'Catalogs copied between branches' },
              body: {
                es: 'Copiar la carta a otra sede hace match por el producto original (no por nombre), así nunca duplica y sobrevive a los cambios de nombre.',
                en: 'Copying the menu to another branch matches by the original product (not by name), so it never duplicates and survives renames.',
              },
            },
            {
              title: { es: 'Fotos livianas', en: 'Lightweight photos' },
              body: {
                es: 'Las fotos se recortan y comprimen en el propio celular antes de subirlas, para que la tienda cargue rápido con datos móviles.',
                en: 'Photos are cropped and compressed on the phone itself before uploading, so the store loads fast on mobile data.',
              },
            },
          ],
        },
        {
          kind: 'table',
          label: { es: 'Algunas tablas y funciones (Supabase)', en: 'Some tables and functions (Supabase)' },
          rows: [
            { name: 'tm_stores', what: { es: 'tienda o sede: subdominio, colores, horario, pagos y marca', en: 'store or branch: subdomain, colors, hours, payments and brand' } },
            { name: 'tm_products · tm_product_variants', what: { es: 'productos, opciones, variantes con stock y precio de oferta', en: 'products, options, variants with stock and sale price' } },
            { name: 'tm_orders · tm_order_items', what: { es: 'pedidos de la tienda y ventas en mostrador', en: 'store orders and counter sales' } },
            { name: 'tm_delivery_zones', what: { es: 'distritos con costo de delivery y pedido mínimo', en: 'districts with delivery fee and minimum order' } },
            { name: 'tm_create_order()', what: { es: 'crea el pedido, recalcula precios y descuenta stock en una transacción', en: 'creates the order, recalculates prices and decrements stock in one transaction' } },
            { name: 'tm_check_stock()', what: { es: 'revisa qué del carrito ya no alcanza', en: 'checks what in the cart is no longer available' } },
            { name: 'tm_copy_catalog()', what: { es: 'copia la carta entre sedes del mismo dueño', en: 'copies the menu between branches of the same owner' } },
            { name: 'tm_pause_overdue()', what: { es: 'pausa diaria de tiendas con pago vencido (pg_cron)', en: 'daily pause of overdue stores (pg_cron)' } },
          ],
        },
      ],
    },
  ],
};
