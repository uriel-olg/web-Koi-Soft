# KoiBite · propuesta de diseño para aprobación

Fecha: 22 de octubre de 2026. Alcance: feedback, especificación de diseño, wireframes y propuesta visual. No se modifica la aplicación.

## Cómo leer esta entrega

Esta propuesta parte del código local y de las capturas que ya estaban en `docs/revision-ui-ux`. Se contrastaron decisiones de contenido, rutas, estilos y validación con el código actual. No se volvió a ejecutar la web ni se repitieron las pruebas de la revisión anterior: sus mediciones de altura, recortes y rendimiento son antecedentes, no resultados nuevos.

- [Propuesta visual de escritorio y móvil, SVG](propuesta-visual-v2.svg).
- [Wireframes de escritorio y móvil, PNG](wireframe-propuesto.png).
- [Wireframes editables en SVG](wireframe-propuesto.svg).
- [Revisión anterior y capturas](feedback-y-guia.md).

No se encontró la referencia de Raíces en este repositorio. La dirección elegida es tecnológica, minimalista y cálida; la comparación concreta con esa landing queda pendiente de ver la referencia. Se conserva el nombre KoiBite que usa actualmente la interfaz.

## Feedback: qué conservar y qué mejorar

La combinación de azul noche y naranja ya da identidad. Los CTA tienen presencia y el tono «No hace falta hablar en técnico» acerca el servicio a personas que necesitan resolver un problema sin conocer tecnología. El panel claro de beneficios introduce un descanso útil.

El principal cambio sería hacer más concreta la propuesta comercial. «Tecnología para hacer funcionar y crecer tu negocio» transmite intención, pero obliga a leer más para entender qué vendés. Presentaría desarrollo web y soporte IT desde el H1, y pondría trabajos verificables antes que otra lista de prestaciones.

| Prioridad | Evidencia actual | Propuesta y motivo |
| --- | --- | --- |
| Alta | `Contact.tsx` ofrece ocho servicios; el enum de `api/contacto.ts` coincide textualmente con dos | Compartir identificadores estables entre interfaz y API. Evita rechazar consultas válidas. Revisar también el backend PHP antes de elegir cuál se publicará. |
| Alta | Home dice «soluciones reales», mientras Proyectos presenta casos conceptuales | Separar trabajo entregado, proyecto propio y concepto. La confianza depende de que el visitante entienda qué está viendo. |
| Alta | La navegación completa aparece desde `md`; la revisión previa muestra recorte a 768 px | Mostrarla desde 1024 px y comprobar 1024–1280 px; conservar hamburguesa mientras no quepan marca, enlaces y CTA. |
| Media | Home presenta dos áreas y luego seis tarjetas que vuelven a explicar los servicios | Resumir en dos áreas y dejar el detalle en Servicios. Llevar Proyectos inmediatamente después. |
| Media | `/nosotros` se declara dos veces y Footer enlaza a `/proceso`, sin ruta definida | Una sola ruta para Nosotros, proceso en `/#proceso` y una página 404. |
| Media | El layout y las páginas contienen `main`; `index.html` declara `lang="en"` | Una región principal y `lang="es"`; facilita la navegación asistida. |
| Media | Colores casi iguales y valores arbitrarios se repiten por archivo | Tokens y componentes compartidos para mantener coherencia al crecer. |

No doy una puntuación numérica: falta revisar la versión publicada y el recorrido real de consultas. Esta evaluación permite decidir un diseño y priorizar correcciones.

## 1. Dirección visual

**Objetivo:** conseguir consultas de negocios, emprendedores y profesionales que necesitan una web, mejorar herramientas digitales o resolver soporte IT. Es una hipótesis basada en la oferta actual; falta confirmar cuál de las dos áreas genera más negocio.

**Sensación:** claridad, orden, cercanía y competencia técnica. Mantener azul noche, naranja y una presencia secundaria de azul claro. Reservar degradados para un único visual del hero; usar superficies mayormente planas en el resto.

**Jerarquía:** servicio → beneficio → muestra del trabajo → consulta. Un CTA principal consistente: «Solicitar presupuesto». CTA secundario: «Ver proyectos». En soporte IT puede adaptarse a «Consultar por soporte» sin cambiar su aspecto.

**Texto propuesto del hero:**

> Desarrollo web y soporte IT para tu negocio.
>
> Creamos tu presencia online y resolvemos los problemas técnicos que frenan tu trabajo.
>
> Solicitar presupuesto · Ver proyectos

No sumar clientes, métricas, tiempos de respuesta o garantías que todavía no puedan sostenerse. El visual propuesto es ilustrativo y se reemplazará por un trabajo propio o de cliente autorizado.

## 2. Estructura, contenido y wireframes

| Orden en Inicio | Contenido y distribución | Acción / destino |
| --- | --- | --- |
| 1. Navbar | Marca; Inicio, Servicios, Proyectos, Nosotros; CTA a Contacto | `/contacto` |
| 2. Hero | Texto 6 columnas + visual 6 columnas; en móvil texto y acciones antes de imagen | Presupuesto a `/contacto`; proyectos a `/proyectos` |
| 3. Áreas | Dos tarjetas: Desarrollo web y Soporte IT. Tres ejemplos concretos por área | `/servicios#digital` y `/servicios#it` |
| 4. Trabajos | Dos casos destacados, con captura, tipo y alcance | `/proyectos`; detalle propio si existe |
| 5. Beneficios | Panel claro con tres razones: alcance definido, comunicación clara, continuidad | Enlace discreto a `/nosotros` |
| 6. Proceso | Entendemos → proponemos → implementamos → acompañamos | `/contacto` |
| 7. FAQ | Cuatro dudas: alcance, soporte, presupuesto y mantenimiento | Consultar si la duda continúa |
| 8. Cierre | «¿Qué necesitás resolver?» y una acción | `/contacto` |
| 9. Footer | Navegación, contacto y enlaces con contenido real | Contacto, email, WhatsApp confirmado |

Cada sección debe aportar una razón distinta para continuar. No repetir seis servicios, tecnologías y beneficios con el mismo contenido. La lista de herramientas puede aparecer dentro de un caso, donde explica una decisión.

### Wireframe de escritorio

```text
┌───────────────────────────────────────────────────────────┐
│ KOIBITE  Inicio Servicios Proyectos Nosotros  [Presupuesto]│
├─────────────────────────────┬─────────────────────────────┤
│ H1: qué hacemos             │ Trabajo destacado /         │
│ Bajada: qué problema resuelve│ visual ilustrativo          │
│ [Presupuesto] [Proyectos]    │ 4:3                         │
├─────────────────────────────┼─────────────────────────────┤
│ Desarrollo web              │ Soporte IT                  │
│ 3 ejemplos + enlace         │ 3 ejemplos + enlace         │
├─────────────────────────────┼─────────────────────────────┤
│ Trabajo 1: captura + alcance │ Trabajo 2: captura + alcance│
├─────────────────────────────┴─────────────────────────────┤
│ Panel claro: 3 motivos para trabajar con KoiBite           │
│ Proceso: 01 → 02 → 03 → 04                                │
│ FAQ: título a la izquierda, acordeones a la derecha        │
│ ¿Qué necesitás resolver?                    [Presupuesto] │
│ Footer: marca / navegación / contacto                     │
└───────────────────────────────────────────────────────────┘
```

### Wireframe móvil

```text
┌────────────────────────────┐
│ Símbolo + KoiBite       ☰   │
│ H1                         │
│ Bajada                     │
│ [Solicitar presupuesto]    │
│ [Ver proyectos]            │
│ Visual de 240–280 px       │
│ Desarrollo web             │
│ Soporte IT                 │
│ Trabajo 1                  │
│ Trabajo 2                  │
│ Beneficios                 │
│ Proceso vertical           │
│ FAQ                        │
│ CTA final                  │
│ Footer                     │
└────────────────────────────┘
```

### Páginas internas

| Página | Escritorio | Móvil |
| --- | --- | --- |
| Servicios | Introducción; Digital e IT; grilla 2 columnas; entregables, proceso y FAQ | Introducción breve; áreas apiladas; una tarjeta por fila; CTA por área |
| Proyectos | Introducción; filtros solo si hay volumen; grilla de 2 columnas; caso con contexto, solución y captura | Filtros con wrap; una columna; captura antes del texto |
| Nosotros | Quiénes somos + foto auténtica; modo de trabajo; capacidades y CTA | Mismo orden, bloques apilados; sin biografías o fotos ficticias |
| Contacto | Formulario 7 columnas + contacto directo 5 columnas | Introducción; enlace rápido a WhatsApp; formulario; información adicional |

El menú usa rutas para cambiar de página y anclas para ir a secciones. Definir IDs en minúscula de forma consistente; reservar `scroll-margin-top: 112px` en escritorio y `96px` en móvil. Al cambiar de ruta, actualizar título de documento y ubicar el foco en el contenido principal cuando corresponda.

## 3. Paleta y contraste

| Token | HEX | Uso |
| --- | --- | --- |
| `night` | `#080F1E` | Fondo principal |
| `surface` | `#0C1627` | Navbar y paneles |
| `card` | `#101A2B` | Tarjetas y campos |
| `accent` | `#FA713A` | CTA y pequeños indicadores |
| `accent-hover` | `#FF9064` | Hover del CTA |
| `accent-active` | `#ED6027` | CTA presionado |
| `ink` | `#14131B` | Texto sobre naranja |
| `copy` | `#F3F5FA` | Títulos y texto principal |
| `muted` | `#A1AEC3` | Texto secundario |
| `digital` | `#7DB3FF` | Enlaces y detalles digitales |
| `line` | `#293850` | Separadores decorativos |
| `control` | `#71839C` | Borde identificable de campos |
| `focus` | `#FFB297` | Foco visible sobre superficies oscuras |
| `paper` / `paper-ink` | `#E8E5DC` / `#152136` | Panel claro y su texto |
| `success` | `#6EE7B7` | Confirmación con texto e icono |
| `danger` | `#FCA5A5` | Error con mensaje e icono |

Contrastes calculados sobre colores sólidos: `ink/accent` **6,58:1**; `muted/card` **7,77:1**; `paper-ink/paper` **12,80:1**. Blanco puro sobre naranja resulta **2,80:1**: usar texto oscuro. El gris actual `#66758D` sobre `card` da **3,73:1**: no usarlo para información pequeña esencial.

Para texto normal, WCAG AA exige 4,5:1; para texto grande, 3:1. Recalcular sobre los fondos finales si hay transparencias, fotografía o estados de interacción. [W3C: contraste](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

## 4. Tipografía

Propuesta: [Manrope](https://fonts.google.com/specimen/Manrope) para títulos y [Inter](https://rsms.me/inter/) para cuerpo y controles. Alternativa sin descargas: `system-ui, sans-serif`; alternativa para reducir recursos: Inter en toda la web. Usar archivos WOFF2 y conservar las licencias de las versiones descargadas. El SVG de propuesta usa fuentes de sistema para poder abrirlo sin instalación: representa composición, color y jerarquía, no una prueba tipográfica final.

| Estilo | Escritorio px / line-height | Móvil px / line-height | Peso | Tracking |
| --- | --- | --- | --- | --- |
| H1 | 64 / 68 | 40 / 44 | 600 | -0,03em |
| H2 | 44 / 51 | 32 / 38 | 600 | -0,025em |
| H3 | 24 / 31 | 22 / 29 | 600 | -0,015em |
| Bajada hero | 18 / 29 | 17 / 27 | 400 | 0 |
| Párrafo | 16 / 26 | 16 / 26 | 400 | 0 |
| Navegación | 14 / 20 | 16 / 24 | 500 | 0 |
| Botón | 14 / 20 | 16 / 24 | 600 | 0 |
| Etiqueta | 12 / 18 | 12 / 18 | 600 | 0,08em |

Evitar títulos más angostos mediante tracking excesivo. Medida de lectura: aproximadamente 60 caracteres en párrafos. H1 máximo de 3–4 líneas según ancho; comprobar a 320 px y con texto ampliado sin recortar. No aplicar altura fija a títulos o texto traducible.

## 5. Layout y espaciados

Configurar en Figma variables de color, estilos tipográficos y Auto Layout. Frames de 1440, 1024, 768, 390 y 320 px; componentes con variantes de estado. Los frames son puntos de revisión: el comportamiento entre ellos también cuenta.

| Medida | Escritorio ≥1024 px | Tablet 640–1023 px | Móvil <640 px |
| --- | --- | --- | --- |
| Ancho interior máximo | 1280 px | Fluido | Fluido |
| Margen lateral mínimo | 48 px | 32 px | 20 px; 16 px a 320 |
| Columnas / gutter | 12 / 24 px | 8 / 24 px | 4 / 16 px |
| Padding vertical de sección | 80 px; 96 en hero | 64 px | 48 px; 56 en hero |
| Gap entre tarjetas | 24 px | 24 px | 16 px |
| Padding tarjeta | 32 px | 24 px | 24 px |

En desktop de 1440 px el interior de 1280 queda centrado con 80 px por lado. En código, el contenedor puede tener máximo de 1376 px incluyendo 48 px de padding por lado, de modo que los 1280 interiores no se reduzcan accidentalmente. Acordar este criterio en Figma y CSS.

Escala: **4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 px** → **0,25 / 0,5 / 0,75 / 1 / 1,25 / 1,5 / 2 / 2,5 / 3 / 4 / 5 / 6 rem**, tomando 16 px como referencia y respetando las preferencias del navegador.

Título a bajada: 20 px. Bajada a CTA: 32 px. Cabecera a grilla: 32 px. Icono a título: 16 px. Label a campo: 8 px; entre campos: 24 px. Botones: mínimo 48 px de alto y padding horizontal de 24 px. Inputs: mínimo 48 px, padding 12 × 16 px; textarea inicial de 144 px, ampliable.

## 6. Imágenes y recursos

Priorizar una captura real y dos casos con contexto. Usar una perspectiva frontal, recortes consistentes y un único marco de navegador. Evitar superponer tres pantallas que compitan con el H1.

| Recurso | Fuente / proporción | Tamaño y presupuesto inicial |
| --- | --- | --- |
| Hero | Captura o ilustración; 4:3 | 1200 × 900; objetivo ≤200 KB |
| Proyectos | Captura autorizada; 16:10 | 1200 × 750; objetivo ≤150 KB |
| Soporte IT | Foto propia con luz lateral suave; 4:3 | 1200 × 900; objetivo ≤180 KB |
| Logo e iconos | SVG existente y Lucide | Iconos 20–24 px, trazo 1,75 px |

Estos pesos son presupuestos de diseño; ajustar según calidad y complejidad. Generar variantes de 480, 768 y 1200 px; WebP o AVIF con `srcset` y `sizes`. Reservar dimensiones para evitar saltos. Priorizar solo el recurso que realmente sea LCP; diferir imágenes fuera de pantalla. Evaluar reemplazar el fondo fotográfico global por color y un motivo SVG liviano.

Fotografías: fondo ordenado, tonos neutros, luz suave, presencia naranja o azul muy discreta. Mantener blancos naturales. No oscurecer tanto que se pierda el servicio mostrado.

Prompts coherentes, si se necesitan recursos conceptuales:

> Ilustración editorial de una interfaz web en un único marco de navegador, composición frontal y limpia, azul noche #080F1E, paneles #101A2B, acentos naranja #FA713A y azul #7DB3FF, luz suave, profundidad mínima, espacio libre alrededor, sin texto, sin logos, sin estadísticas, formato 4:3.

> Fotografía editorial de herramientas de mantenimiento informático sobre una mesa ordenada, detalle de manos trabajando en una computadora sin marcas, luz lateral difusa, neutros fríos con un pequeño acento naranja, mismo tratamiento sobrio y profesional, sin texto, formato 4:3. Recurso conceptual, no representación de instalaciones o equipo reales.

Guardar autor, fuente, licencia y permiso cuando haya clientes o personas. Decoración: `alt=""`. Caso real: «Página de inicio de [proyecto], con catálogo y acceso a consultas», adaptado a lo que efectivamente se vea. El texto comercial debe permanecer como HTML, no incrustado en la imagen.

## 7. Componentes, estados e interacción

| Componente | Especificación |
| --- | --- |
| Navbar | 68 px de alto; 16 px de radio; borde 1 px; margen superior 20 px; nombre visible también en móvil. Fondo suficientemente opaco para leer al hacer scroll. |
| Primario | Naranja + texto oscuro; radio 12 px; mínimo 48 px. Hover `accent-hover`; presionado `accent-active`, sin saltos de layout. |
| Secundario | Fondo transparente; borde `control`; texto `copy`; hover `card`; presionado `surface`. |
| Link | Subrayado en texto corrido; color `digital`; hover `copy`; foco visible. Activo en navbar con forma y `aria-current`. |
| Tarjeta | Radio 20 px, borde `line`; padding 24–32 px. Hover solo si es interactiva; enlace con nombre claro. |
| Campo | Label persistente; fondo `card`, borde `control`; hover borde `muted`; foco `focus`; error borde `danger` + explicación asociada. |
| Footer | Tres columnas en desktop; apilado en móvil; enlaces reales; sin destinos provisionales con apariencia funcional. |

Foco oscuro: anillo de 2 px con separación de 4 px en `focus`. Sobre el panel claro, usar `paper-ink`. Sombra opcional y única: `0 12px 32px rgb(0 0 0 / 16%)`; evitar que cada tarjeta produzca un halo.

Deshabilitado: fondo `#243147`, texto `muted`, atributo `disabled` y sin hover. No hacer que el formulario permanezca inexplicablemente deshabilitado: validar al enviar y mostrar qué corregir. Durante envío, deshabilitar para evitar duplicados y anunciar «Enviando consulta…». Confirmación y error con texto, icono y región de estado; conservar los datos si falla.

Menú móvil: panel debajo del header, ancho disponible, alto máximo según `100dvh` y scroll interno. `aria-expanded` y `aria-controls`; cierre por Escape, selección de enlace y pulsación fuera; devolver foco al disparador. Mantenerlo como navegación desplegable no modal: el orden de Tab debe ser natural. Si se convierte en diálogo modal, deberá gestionar foco y fondo inerte de forma consistente.

Formulario: Nombre, Email, Servicio y Mensaje obligatorios; Empresa y Presupuesto opcionales. Permitir «Necesito asesoramiento». Desde un CTA de servicio, preseleccionar el área sin impedir que el usuario la cambie. No prometer respuesta en 24 horas si ese compromiso no está confirmado.

Koi ofrece consultas: no se propone carrito. Un checkout correspondería a otro alcance si después se venden servicios con precios y contratación directa.

## 8. Responsive y movimiento

- **320–639 px:** una columna, botones apilados a ancho disponible, hero visual de 240–280 px, proyectos apilados y proceso vertical. El logo mantiene su nombre.
- **640–1023 px:** menú hamburguesa; áreas en dos columnas si caben títulos y ejemplos; hero conserva texto primero y visual después. Contacto permanece en una columna.
- **Desde 1024 px:** hero 6+6, áreas y proyectos de dos columnas, contacto 7+5. Si la navbar completa no cabe, mantener hamburguesa hasta el siguiente ancho comprobado.
- **Desde 1440 px:** contenedor centrado; el contenido no aumenta indefinidamente.

No fijar altura de secciones que contienen texto. Verificar 320, 390, 568 de alto, 768, 1024 y 1440 px, además de zoom, teclado y orientación horizontal. Preferir 44 × 44 px como objetivo táctil de diseño; WCAG 2.2 AA establece un mínimo de 24 × 24 px con excepciones de separación y contexto. [W3C: tamaño de objetivo](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

Hover de 160 ms; apertura de menú de 180 ms; entrada de sección de 240 ms con opacidad y desplazamiento máximo de 8 px, una sola vez. Nada de animación continua en texto o CTA. Con movimiento reducido: sin traslaciones, stagger ni scroll suave; cambios instantáneos o de opacidad discretos. El contenido debe ser accesible aunque la animación no se ejecute.

## 9. Implementación después de aprobar

Conservar React, Vite y Tailwind v4 ya presentes. No hace falta migrar de framework para esta mejora.

```text
src/
  components/ui/       Button, Container, SectionHeading, Field
  components/layout/   Navbar, Footer, RouteEffects
  sections/home/       Hero, ServiceAreas, FeaturedWork, Benefits, Process, FAQ, CTA
  pages/               Home, Services, Projects, About, Contact, NotFound
  data/                navigation, services, projects, contact
  schemas/             contact
  styles/              theme.css
```

Ejemplo de especificación de tokens para la fase de desarrollo; no está aplicado a la app:

```css
@import "tailwindcss";
@theme {
  --color-night: #080F1E;
  --color-surface: #0C1627;
  --color-card: #101A2B;
  --color-accent: #FA713A;
  --color-accent-hover: #FF9064;
  --color-ink: #14131B;
  --color-copy: #F3F5FA;
  --color-muted: #A1AEC3;
  --color-control: #71839C;
  --color-focus: #FFB297;
  --font-display: "Manrope", system-ui, sans-serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --radius-control: 0.75rem;
  --radius-card: 1.25rem;
  --text-hero: clamp(2.5rem, 1.5rem + 3vw, 4rem);
  --text-hero--line-height: 1.0625;
  --spacing: 0.25rem;
}
```

Se traduce a clases como `bg-night`, `text-copy`, `font-display`, `text-hero`, `rounded-card` y `hover:bg-accent-hover`. Las fuentes deben cargarse aparte con WOFF2 y `font-display: swap`; declarar el token no las descarga. Tailwind v4 define estas utilidades a partir de variables de tema. [Documentación oficial](https://tailwindcss.com/docs/theme).

**Orden de trabajo:**

1. Aprobar esta dirección, jerarquía de secciones y texto principal; confirmar casos y datos de contacto.
2. Corregir servicios de formulario/API, rutas, semántica y navegación.
3. Crear tokens, tipografía, contenedor y estados de componentes.
4. Implementar Inicio desde móvil; luego adaptar a tablet y escritorio.
5. Aplicar el sistema a Servicios, Proyectos, Nosotros y Contacto.
6. Integrar capturas autorizadas y optimizar recursos.
7. Validar el recorrido completo de consulta y el rendimiento del despliegue.

**Checklist de aceptación:**

- [ ] Dirección visual, H1 y wireframes aprobados.
- [ ] Casos reales y conceptos identificados sin ambigüedad.
- [ ] Sin recortes de navbar ni scroll horizontal a los anchos indicados.
- [ ] Teclado completo, foco visible, Escape y navegación móvil comprobados.
- [ ] Una región `main`, idioma español, H1 único por página y labels asociados.
- [ ] Contraste de textos, controles y estados sobre fondos finales.
- [ ] Formulario y backend comparten valores; errores comprensibles y datos conservados.
- [ ] Rutas, anclas, recarga directa y 404 verificadas en el hosting elegido.
- [ ] Motion reducido, ampliación de texto y zoom revisados.
- [ ] Capturas con dimensiones, formatos adecuados y alt útil; licencias registradas.
- [ ] Build y comprobaciones pertinentes aprobados; prueba controlada de contacto en el entorno correcto.
- [ ] Medir LCP, INP y CLS en el sitio publicado y comparar antes/después; no prometer resultados sin medición.

Estado: propuesta entregada para revisión. La implementación completa queda pendiente de tu aprobación.
