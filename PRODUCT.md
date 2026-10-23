# KoiBite

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Código existente: React 19, TypeScript, Vite 8, React Router, Tailwind CSS 4 y CSS propio. Lucide React aporta iconos; Motion respeta la preferencia de movimiento reducido. React Hook Form y un esquema Zod compartido validan el contacto. Express y Resend gestionan el envío; existe una alternativa PHP en `api/contacto.php`.

## Users

Personas, profesionales, emprendimientos y pequeños negocios que necesitan una presencia digital, herramientas para trabajar o ayuda con sus equipos. El sitio debe permitir entender la oferta y explicar una necesidad sin conocimientos técnicos.

## Product Purpose

Presentar los servicios de KoiBite y facilitar una conversación sobre un proyecto o un problema técnico. La oferta combina desarrollo web, sistemas a medida y automatizaciones con armado, actualización, mantenimiento y soporte de PC, software y redes.

## Operating Context

La portada reúne servicios, propuestas ilustrativas, nosotros, proceso y contacto. También se conservan `/servicios`, `/proyectos`, `/nosotros` y `/contacto`. Los enlaces de servicios y propuestas pueden preseleccionar el servicio en el formulario mediante la URL. El visitante también puede contactar por WhatsApp o email.

## Capabilities and Constraints

- Hay 12 propuestas filtrables: 6 de software y 6 de soporte IT. Son conceptos ilustrativos, no trabajos realizados ni resultados de clientes.
- El formulario solicita nombre, email, servicio y mensaje; empresa y presupuesto son opcionales. Conserva los datos si falla el envío y solo confirma aceptación con una respuesta `{ ok: true }`.
- El envío real requiere un backend y una configuración válida de Resend. La aceptación del servicio no acredita entrega en la bandeja de entrada.
- Los datos públicos conservados son `olguriel@gmail.com` y el enlace de WhatsApp con el número `5492604230590` (configurable con `VITE_WHATSAPP_NUMBER`), centralizados en `src/data/site.ts`. No sustituirlos ni completar datos comerciales sin confirmación.
- No hay perfiles sociales configurados para publicar. Tampoco hay testimonios, clientes, métricas de éxito o casos verificados que deban inferirse de las ilustraciones.

## Brand Commitments

Conservar el nombre KoiBite y el logo koi existente (`public/KoiBite-log.svg`). La voz es cercana, clara y en español con voseo: tecnología práctica y acompañamiento humano. La dirección visual implementada es editorial, cálida, espaciosa y mínima: marfil, tinta, terracota y salvia, con títulos Newsreader y cuerpo Manrope autoalojados. Sus reglas y estados accesibles viven en `DESIGN.md`.

## Evidence on Hand

- `src/data/site.ts`: oferta, propuestas y datos públicos de contacto.
- `src/sections/`: implementación compartida de las secciones del sitio.
- `public/images/koi-workspace.webp`: imagen generada e ilustrativa del hero; procedencia en `public/images/README.md`. No muestra un proyecto real.
- `public/fonts/`: Manrope autoalojada; procedencia en `README.md` de esa carpeta y licencia SIL OFL en `OFL.txt`.
- `docs/revision-ui-ux/`: revisión y propuesta histórica, conservadas como referencia; el código actual define el resultado implementado.

## Product Principles

- Explicar servicios mediante necesidades concretas y lenguaje cotidiano.
- Dar el mismo lugar a las soluciones digitales y al cuidado de los equipos.
- Diferenciar con claridad propuestas ilustrativas y evidencia real.
- Mantener vías de contacto directas y estados de envío honestos.

## Accessibility & Inclusion

Conservar navegación por teclado, enlace para saltar al contenido, foco visible, etiquetas asociadas a campos, mensajes de error vinculados y estados anunciados. Mantener la adaptación desde 320 px y el respeto a movimiento reducido. Estas son características implementadas, no una declaración de certificación de accesibilidad.
