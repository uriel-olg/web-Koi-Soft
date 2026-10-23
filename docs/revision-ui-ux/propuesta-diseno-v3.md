# KoiBite · dirección editorial cálida

Propuesta v3 para aprobación · 22 de octubre de 2026.

Esta guía adapta el pedido a tu negocio real: **desarrollo web y soporte IT**. La propuesta cambia la apariencia de Koi hacia una estética minimalista, natural y elegante. La implementación v2 queda como punto de partida; esta entrega no modifica `src`, el backend ni la configuración de la aplicación.

## Entregables y alcance

- [Propuesta visual de escritorio y móvil en PNG](propuesta-visual-v3.png).
- [Vista móvil ampliada](propuesta-mobile-v3.png).
- [Wireframes completos de Inicio en PNG](wireframes-v3.png).
- Versiones vectoriales editables: [propuesta](propuesta-visual-v3.svg) y [wireframes](wireframes-v3.svg).
- [Estado de la versión actualmente implementada](implementacion-v2.md).

Referencias principales confirmadas por vos: [Cosmos, UI/UX](https://www.cosmos.so/explore/ui-ux) y [Godly](https://godly.design/). Se consultó también [Inspora](https://www.inspora.design/), pero no se seleccionó una pieza concreta de esa colección. La landing Raíces no está disponible en esta conversación: la relación con ella se interpreta como calidez y sobriedad; no se afirma una reproducción fiel.

Estas plataformas reúnen trabajos variados; no definen una única paleta o tipografía. Las decisiones que siguen son una propuesta propia para Koi. La página de Cosmos expone colecciones y categorías, aunque parte del feed dinámico no quedó disponible en la lectura pública. No se atribuyen a piezas individuales detalles que no se pudieron comprobar.

## 1. Dirección visual: qué cambiar y por qué

### Objetivo y público

El objetivo sigue siendo convertir una necesidad en una consulta. El público son profesionales, comercios y pequeños negocios que necesitan una web o soporte para sus herramientas de trabajo. No se presupone que sepan qué tecnología contratar.

Recorrido propuesto: **entender la oferta → reconocer una necesidad → ver una posibilidad concreta → consultar**.

### Concepto: tecnología con criterio humano

Fondo marfil, texto azul tinta, terracota para acciones y salvia en un bloque secundario. Títulos serif con carácter editorial y texto sans serif para que la información técnica sea fácil de recorrer. Más espacio y separadores finos; menos paneles oscuros y efectos de brillo.

Se conserva el logo KoiBite y la relación naranja/azul de la marca. El naranja brillante actual puede permanecer en el símbolo; el terracota más oscuro permite botones con texto blanco legible. La calidez viene del color, la tipografía y el ritmo: no hace falta convertir la web en una tienda de decoración ni llenarla de plantas.

| Referencia | Qué se puede comprobar | Cómo lo adapto a Koi |
| --- | --- | --- |
| Cosmos UI/UX | Exploración de interfaces organizada en colecciones y temas | Selección visual acotada y composición con una pieza principal. Es una adaptación propuesta, no una copia de un elemento concreto. |
| Godly | Galería de webs y recursos, con categorías de hero, CTA y footer | Tratar cada bloque como una composición deliberada y revisar la consistencia entre apertura y cierre. |
| Inspora | Archivo con categorías como Web, Branding y Product | Separar referencias por función al armar el moodboard, sin mezclar estilos incompatibles. |
| Raíces | Referencia mencionada por vos, todavía sin acceso a la pieza | Interpretación provisional: tonos naturales, aire y un ritmo tranquilo. |

### Diferencia frente a la versión actual

La v2 ya resolvió la estructura, las rutas y el contrato del formulario. No vuelvo a presentar esos problemas anteriores como pendientes. La v3 propone otra dirección de arte: fondo claro, apertura centrada, títulos serif, portfolio editorial y servicios presentados como filas. Se conservarían las interacciones y validaciones existentes.

Texto propuesto para la apertura:

> DESARROLLO WEB + SOPORTE IT
>
> Diseño web y soporte IT.
> Hechos para tu negocio.
>
> Una web que te represente. Equipos que te dejen trabajar. Un mismo lugar para resolverlo.
>
> [Contanos qué necesitás] · Ver propuestas

La primera línea nombra lo que ofrecés. La segunda explica para quién existe. El botón principal incluye tanto proyectos digitales como problemas de soporte.

## 2. Estructura, wireframes y navegación

### Inicio

| Orden | Bloque | Contenido y disposición | Acción |
| --- | --- | --- | --- |
| 1 | Navbar | Logo a la izquierda, cuatro enlaces y CTA a la derecha | Contacto |
| 2 | Hero | Título centrado, bajada de dos líneas y dos acciones | Contanos qué necesitás / Ver propuestas |
| 3 | Muestra visual | Una interfaz principal y dos piezas de apoyo; etiquetas claras de concepto/caso de uso | Explorar la propuesta correspondiente |
| 4 | Servicios | Introducción a la izquierda; filas de Desarrollo web y Soporte IT a la derecha | Servicios por área |
| 5 | Selección de propuestas | Dos casos con tamaños diferentes, captura y alcance breve | Abrir detalle |
| 6 | Forma de trabajar | Banda salvia: claridad, alcance y continuidad | Nosotros |
| 7 | Proceso | Cuatro pasos con números y líneas, sin repetir tarjetas de servicios | Contacto al final |
| 8 | FAQ | Título a la izquierda y cuatro acordeones a la derecha | Hacer otra consulta |
| 9 | CTA + footer | Cierre azul tinta, invitación breve y contacto real | Contanos qué necesitás |

La galería inicial muestra posibilidades; no pretende demostrar trabajos entregados que todavía no estén documentados. Si no hay suficientes casos reales, mantener conceptos identificados y no inventar métricas, clientes ni testimonios.

### Wireframe de escritorio

```text
┌────────────────────────────────────────────────────────────────┐
│ KoiBite      Inicio  Servicios  Proyectos  Nosotros   [Contacto] │
├────────────────────────────────────────────────────────────────┤
│                    Desarrollo web + soporte IT                 │
│                   H1 centrado, máximo 2–3 líneas               │
│                  Bajada de lectura corta                       │
│                 [Contanos qué necesitás]  Ver propuestas       │
│                                                                │
│ [Caso IT pequeño]   [Interfaz principal, más ancha] [Idea visual]│
├──────────────────────┬─────────────────────────────────────────┤
│ Dos formas de ayudar │ 01 Desarrollo web            [Explorar] │
│                      │ 02 Soporte IT                [Explorar] │
├──────────────────────┴─────────────────────────────────────────┤
│ Propuesta destacada: captura grande (7 col) │ Segundo caso (5) │
├────────────────────────────────────────────────────────────────┤
│ Salvia: claridad / alcance / continuidad                        │
│ Proceso: 01 → 02 → 03 → 04                                     │
│ FAQ: título (5 col) │ preguntas y respuestas (7 col)             │
│ Cierre azul tinta: ¿Qué necesitás resolver?           [CTA]     │
│ Footer: marca / navegación / email / WhatsApp                   │
└────────────────────────────────────────────────────────────────┘
```

### Wireframe móvil

```text
┌────────────────────────────┐
│ KoiBite                ☰   │
│ Eyebrow                    │
│ H1 centrado, 3–4 líneas    │
│ Bajada                     │
│ [Contanos qué necesitás]   │
│ Ver propuestas             │
│ [Solo la interfaz central] │
│ Etiqueta y enlace          │
│ Servicios                  │
│ 01 Desarrollo web          │
│ 02 Soporte IT              │
│ Propuesta destacada        │
│ Segunda propuesta          │
│ Banda salvia               │
│ Proceso vertical           │
│ FAQ                        │
│ CTA azul tinta             │
│ Footer                     │
└────────────────────────────┘
```

Las piezas laterales del hero son apoyo visual y desaparecen en móvil; no contienen información comercial exclusiva. Se muestra un visual principal de 350 × 263 px en un viewport de 390 px. No se introduce un carrusel automático.

### Páginas internas

| Página | Escritorio | Móvil |
| --- | --- | --- |
| Servicios | Título editorial; áreas Digital/IT; detalles con entregables y CTA | Una columna, acceso por área y acciones después de cada servicio |
| Proyectos | Filtros existentes; una grilla editorial de dos columnas; detalles expandibles | Filtros con salto de línea; capturas apiladas; detalles debajo |
| Nosotros | Manifiesto + contenido auténtico; criterios y proceso | Mismo orden semántico, sin biografías ni fotos de equipo inventadas |
| Contacto | Formulario 7 columnas + contacto directo 5 columnas | Acceso rápido a WhatsApp, formulario y datos adicionales |

Mantener `/`, `/servicios`, `/proyectos`, `/nosotros` y `/contacto`. Anclas: `/#servicios`, `/#proceso`, `/servicios#digital` y `/servicios#it`. Al implementar, unificar el ID del resumen de servicios sin romper enlaces existentes: hoy Inicio usa `#soluciones`. Los enlaces antiguos deben seguir llegando al bloque correcto.

La navbar usa rutas para páginas y las anclas se reservan para secciones. Aplicar `scroll-margin-top: 104px` en desktop y `88px` en móvil; comprobarlo con la altura final del header. Conservar la gestión de foco y títulos de página que ya existe.

## 3. Paleta, roles y contraste

| Token | HEX | Aplicación |
| --- | --- | --- |
| `canvas` | `#F6F3ED` | Fondo marfil de la página |
| `surface` | `#FFFFFF` | Campos y superficies puntuales |
| `ink` | `#182530` | Títulos, texto principal y cierre oscuro |
| `muted` | `#52616B` | Descripciones y texto secundario |
| `accent` | `#B84E2D` | CTA, enlaces subrayados y énfasis |
| `accent-hover` | `#9E3E23` | Hover del botón principal |
| `accent-active` | `#84321C` | Estado presionado |
| `sage` | `#E3E9E0` | Banda de forma de trabajo y recursos de apoyo |
| `moss` | `#4E6558` | Texto e iconos sobre salvia |
| `line` | `#D3D4CB` | Separadores decorativos |
| `control` | `#7B867D` | Bordes que identifican inputs y controles |
| `focus` | `#28594F` | Anillo de foco sobre fondos claros |
| `focus-inverse` | `#F2C29B` | Foco sobre azul tinta |
| `danger` | `#A9312C` | Error de formulario, texto y borde |
| `success` | `#296448` | Confirmación, texto e icono |
| `disabled` | `#E3E5E0` | Control no disponible, con texto `muted` |

Contrastes calculados en sRGB sobre colores sólidos:

| Combinación | Relación aproximada |
| --- | --- |
| `ink` sobre `canvas` | 14,09:1 |
| `muted` sobre `canvas` | 5,78:1 |
| Blanco sobre `accent` | 5,04:1 |
| `accent` sobre `canvas` | 4,55:1 |
| `moss` sobre `sage` | 5,11:1 |
| Borde `control` contra blanco | 3,78:1 |
| `focus` contra `canvas` | 7,20:1 |
| `focus-inverse` contra `ink` | 9,63:1 |
| `danger` / `success` contra `canvas` | 6,00:1 / 6,30:1 |

Para texto normal, usar al menos 4,5:1; para texto grande, 3:1 según su tamaño y peso. Los elementos visuales necesarios para identificar controles necesitan 3:1 frente a colores adyacentes. El borde `line` es decorativo y no reemplaza `control` en campos. El terracota sobre marfil tiene un margen estrecho: no reducir su opacidad cuando sea texto. [W3C: texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) y [controles](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

## 4. Tipografías y escala

**Títulos:** [Newsreader](https://github.com/productiontype/Newsreader), regular 400 y medium 500; cursiva solo para una frase de énfasis. Aporta calidez y diferencia a Koi de una interfaz técnica genérica. **Textos y controles:** [Inter](https://rsms.me/inter/), 400, 500 y 600. Ambas están disponibles bajo licencia abierta; conservar las licencias de los archivos usados.

Alternativa gratuita para títulos: [Source Serif 4](https://github.com/adobe-fonts/source-serif). Alternativa de cuerpo: la Manrope que ya utiliza el proyecto. Sin descargas: Georgia para títulos y `system-ui` para cuerpo. La lámina SVG usa fuentes de sistema; la comparación tipográfica definitiva deberá hacerse con los archivos reales en Figma.

| Estilo | Desktop px / interlineado | Tablet | Móvil | Peso / tracking |
| --- | --- | --- | --- | --- |
| H1 | 80 / 84 | 64 / 68 | 44 / 48; 38 / 42 a 320 px | 400; -0,025em |
| H2 | 48 / 54 | 40 / 46 | 34 / 40 | 400; -0,02em |
| H3 | 26 / 34 | 24 / 32 | 24 / 32 | 500; -0,015em |
| Bajada hero | 18 / 29 | 18 / 29 | 17 / 27 | 400; 0 |
| Párrafo | 16 / 27 | 16 / 27 | 16 / 27 | 400; 0 |
| Botón | 14 / 20 | 14 / 20 | 16 / 24 | 600; 0 |
| Navbar | 14 / 20 | Menú 16 / 24 | Menú 16 / 24 | 500; 0 |
| Label / pie de captura | 12 / 18 | 12 / 18 | 12 / 18 | 500; 0 |
| Eyebrow en mayúscula | 12 / 18 | 12 / 18 | 12 / 18 | 600; 0,08em |

H1: máximo de 1080 px, sin saltos de línea rígidos en el código móvil. Párrafo: máximo de 60–65 caracteres por línea. Las etiquetas esenciales mantienen 12 px; el microtexto dentro de un mockup decorativo no lleva información indispensable.

Cargar WOFF2, limitar los estilos a los usados y aplicar `font-display: swap`. Usar `font-optical-sizing: auto` si el archivo variable lo soporta. La serif se reserva a títulos: formularios y explicaciones técnicas permanecen en Inter.

## 5. Layout, espacio y preparación de Figma

El ancho interior máximo es **1280 px**. A 1440 px, el contenido queda a 80 px de cada borde. En CSS puede expresarse con un contenedor exterior de 1376 px que incluya 48 px de padding por lado; no confundir ancho interior con caja exterior.

| Pantalla | Margen mínimo | Columnas | Gutter | Padding vertical de sección |
| --- | --- | --- | --- | --- |
| Desktop ≥1200 px | 48 px, centrado al alcanzar el máximo | 12 | 24 px | 96 px |
| Tablet 768–1199 px | 32 px | 8 | 24 px | 72 px |
| Móvil 360–767 px | 20 px | 4 | 16 px | 56 px |
| Móvil 320–359 px | 16 px | 4 | 16 px | 48 px |

Hero: 72 px entre navbar y eyebrow; 20 px hasta H1; 24 px hasta bajada; 28 px hasta acciones; 48 px hasta muestra visual. En móvil: 40 / 16 / 20 / 24 / 32 px. La altura total se ajusta al contenido; no forzar que el hero quepa completo en una pantalla pequeña.

Tarjetas: padding de 32 px en desktop y 24 px en móvil. Formulario: panel 32 / 24 px; entre campos 24 px; label a input 8 px; inputs 12 × 16 px de padding. FAQ: 24 px vertical por pregunta. CTA final: 64 / 32 px de padding.

Escala reutilizable con 1 rem = 16 px como referencia:

| px | rem | px | rem |
| --- | --- | --- | --- |
| 4 | 0,25 | 32 | 2 |
| 8 | 0,5 | 40 | 2,5 |
| 12 | 0,75 | 48 | 3 |
| 16 | 1 | 56 | 3,5 |
| 20 | 1,25 | 64 | 4 |
| 24 | 1,5 | 72 | 4,5 |
| 28 | 1,75 | 96 | 6 |

En Figma, crear páginas `00 Referencias`, `01 Fundamentos`, `02 Componentes`, `03 Desktop` y `04 Móvil`. Frames: 1440, 1024, 768, 390 y 320 px. Variables con nombres de la tabla de color; estilos tipográficos; Auto Layout con hug para textos y fill para contenedores. Variantes de componentes: tipo, tamaño y estado. Importar los SVG sirve como referencia editable, pero no genera automáticamente Auto Layout ni componentes de Figma.

## 6. Imágenes y recursos

La pieza principal debe mostrar diseño web o una captura real, no una fotografía genérica de naturaleza. Para soporte, usar una imagen auténtica del equipo o una ilustración técnica clara. El recurso natural se limita al tratamiento: luz suave, papel, tonos neutros y composiciones ordenadas.

| Recurso | Proporción y archivo maestro | Recorte y uso |
| --- | --- | --- |
| Interfaz principal | 4:3, 1440 × 1080 | Frontal, un solo marco de navegador; en móvil 350 × 263 |
| Captura de proyecto | 16:10, 1280 × 800 | Mismo criterio de encuadre entre casos |
| Foto de soporte | 4:3, 1200 × 900 | Detalle del trabajo; sin rostros o marcas sin permiso |
| Pieza editorial | 1:1, 800 × 800 | Tipografía o diagrama que apoye el relato; decorativo |
| Iconos | SVG 20–24 px | Lucide, trazo de 1,5–1,75 px |

Fotografía: iluminación lateral difusa, contraste moderado, blancos cálidos, fondo despejado. Evitar filtros anaranjados fuertes que hagan perder detalle al hardware.

Prompts, si se decide generar material conceptual:

> Fotografía editorial de una mesa de soporte informático ordenada, manos revisando el interior de una computadora sin marcas visibles, luz natural lateral suave, tonos marfil, grafito y salvia, un pequeño acento terracota, detalle técnico creíble, composición sobria, sin texto, sin logotipos, relación 4:3. Imagen conceptual, no representación del equipo real de KoiBite.

> Ilustración editorial de un flujo de trabajo digital, interfaz abstracta y conexiones simples, composición frontal, fondo marfil #F6F3ED, azul tinta #182530, salvia #E3E9E0 y acentos terracota #B84E2D, bordes finos, profundidad mínima, sin métricas, sin texto ni marcas, relación 4:3.

Mantener paleta, iluminación y encuadre entre variantes. Las capturas de portfolio deben corresponder al trabajo mostrado: no generarlas como prueba de un cliente.

Optimización: AVIF o WebP, variantes de 480/768/1280 px, `srcset` y `sizes`, dimensiones reservadas. Presupuestos iniciales: hero ≤200 KB, captura ≤150 KB, miniatura ≤80 KB; son objetivos a ajustar visualmente. Priorizar solo el recurso que realmente sea LCP y diferir los inferiores.

Registrar autor, URL, licencia y permiso; guardar licencias de fuentes e iconos. `alt=""` en decoración. En captura informativa: «Página de inicio de [nombre], con servicios y acceso al contacto», adaptado al contenido real. Evitar texto esencial incrustado en imágenes.

## 7. Componentes y estados

| Componente | Forma y medidas | Comportamiento |
| --- | --- | --- |
| Navbar | 76 px desktop, 64 px móvil; fondo marfil, borde inferior fino | Sticky; sin bloque flotante ni blur como recurso dominante |
| Primario | Alto mínimo 48 px, padding horizontal 24 px, radio 10 px | Fondo terracota, texto blanco, icono de 18 px |
| Secundario | Mismas medidas; borde `control`; texto `ink` | Hover marfil más oscuro `#EAE6DE` |
| Tarjeta de proyecto | Radio 16 px en imagen; texto debajo sin otra caja | Imagen con escala máxima 1,015 en hover, enlace explícito |
| Fila de servicio | Separador de 1 px; 32 px vertical desktop y 24 móvil | Número, título, descripción y enlace alineados |
| Input | Alto mínimo 48 px, radio 8 px, borde `control` | Label persistente, ayuda y error asociados |
| FAQ | Filas de 24 px de padding vertical | Acordeón nativo; indicador más/menos y foco visible |
| Footer | Fondo `ink`, texto marfil; 3 columnas desktop | Navegación, datos reales y vuelta al inicio |

Estados del botón principal: normal `accent`, hover `accent-hover`, presionado `accent-active`, foco anillo de 2 px `focus` separado 4 px. En fondo oscuro, usar `focus-inverse`. Deshabilitado: `disabled` + texto `muted`, atributo semántico y sin respuesta hover. El estado de envío agrega texto e indicador; no basta cambiar el color.

Estados de campos: normal blanco con borde `control`; hover borde `ink`; foco verde oscuro con separación visible; error borde `danger`, mensaje e icono; confirmación `success` con texto. No depender de verde/rojo como única señal. Conservar datos ante fallo y no mostrar éxito hasta recibir una respuesta válida del backend.

Menú móvil: desplegable debajo del header, `aria-expanded`, `aria-controls`, Escape, cierre al elegir enlace o pulsar fuera, devolución de foco cuando corresponda. Alto máximo `calc(100dvh - 88px)` con scroll interno. Mantener el desplegable no modal actual; si se adopta un diálogo modal en otra iteración, deberá gestionar foco y fondo de forma integral.

Carrito: no aplica a los servicios actuales de Koi. El flujo termina en una consulta; no se agrega una compra o una cuenta sin un alcance comercial específico.

Sombras: una sola elevación suave para el visual principal, `0 16px 40px rgb(24 37 48 / 8%)`. El resto se organiza con espacio y líneas. Radios: 8 px campos, 10 px botones, 16 px visuales y 24 px banda CTA si se separa del footer.

## 8. Responsive y animaciones

**Desktop:** título centrado, galería inicial asimétrica, servicios en composición 4+8 columnas, propuestas en 7+5, proceso horizontal. **Tablet:** una pieza principal y una secundaria si conservan legibilidad; servicios apilados o 3+5; proceso 2 × 2. **Móvil:** título y bajada centrados; un solo visual inicial; todo lo demás en lectura vertical; proceso en lista, no carrusel.

La navegación completa aparece únicamente cuando entra sin compresión. Mantener el umbral de 1100 px que ya usa la implementación y comprobarlo con las fuentes finales; no cambiarlo a 768 px por costumbre.

Animaciones propuestas: hover 160 ms; apertura del menú 180 ms; entrada de contenido 240 ms, opacidad y desplazamiento máximo de 8 px, una vez. Sin parallax, scroll controlado ni animaciones decorativas continuas. Con `prefers-reduced-motion`, quitar desplazamientos y scroll suave. El contenido permanece disponible aunque no corran las animaciones.

Objetivos táctiles de diseño: al menos 44 × 44 px. WCAG 2.2 AA define 24 × 24 px con excepciones; se elige un tamaño mayor para comodidad. [W3C: tamaño de objetivos](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

Revisar 320, 390, 768, 1024 y 1440 px, alturas pequeñas como 390 × 568, orientación horizontal y zoom. No fijar alturas para títulos, tarjetas con texto ni formularios; comprobar el texto largo y el contenido real.

## 9. Implementación después de aprobar

### Organización y reutilización

Conservar React, Vite, React Router y Tailwind v4. Reutilizar `src/components/ui.tsx`, el layout y las cinco páginas. Extraer piezas del nuevo hero a `src/sections/home/` si el tamaño lo justifica. Mantener `src/data/contact.ts` y `src/schemas/contact.ts` como contrato compartido del formulario; la apariencia no requiere rehacer ese comportamiento.

```text
src/
  components/layout/  Navbar, Footer, RouteEffects
  components/ui/      Button, Container, SectionHeading, Field
  sections/home/      EditorialHero, SelectedWork, ServiceRows, Process, FAQ
  pages/              Home, Services, Projects, About, Contact
  data/               site, contact, projects
  schemas/            contact
  styles/             theme.css y composiciones
```

Es una organización sugerida para la siguiente fase; no mover archivos solo por cambiar nombres. El proyecto actual puede evolucionar por partes.

### Tokens para Tailwind CSS v4

Este ejemplo pertenece a la especificación de diseño; no se aplicó al código:

```css
@import "tailwindcss";
@theme {
  --color-canvas: #F6F3ED;
  --color-surface: #FFFFFF;
  --color-ink: #182530;
  --color-muted: #52616B;
  --color-accent: #B84E2D;
  --color-accent-hover: #9E3E23;
  --color-accent-active: #84321C;
  --color-sage: #E3E9E0;
  --color-moss: #4E6558;
  --color-line: #D3D4CB;
  --color-control: #7B867D;
  --color-focus: #28594F;
  --color-focus-inverse: #F2C29B;
  --color-danger: #A9312C;
  --color-success: #296448;
  --font-display: "Newsreader", Georgia, serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --radius-field: .5rem;
  --radius-button: .625rem;
  --radius-media: 1rem;
  --text-hero: clamp(2.375rem, 1rem + 4.45vw, 5rem);
  --text-hero--line-height: 1.05;
  --spacing: .25rem;
}
```

Ejemplos de traducción: `bg-canvas text-ink`, `font-display text-hero`, `bg-accent text-white hover:bg-accent-hover`, `rounded-media`, `gap-6`, `p-6`, `md:p-8`. Las variables de `@theme` generan las utilidades correspondientes en v4. [Tailwind: variables de tema](https://tailwindcss.com/docs/theme).

No alcanza con cambiar el bloque de tokens actual: `src/index.css` todavía contiene colores literales por componente. La implementación debe migrar esos fondos y textos a roles semánticos, además de actualizar `color-scheme: light`, los estados y el foco inverso del footer. Cargar las fuentes es otra tarea: escribir su nombre en `@theme` no descarga los archivos.

### Orden de desarrollo

1. Aprobar paleta clara, títulos serif, hero centrado y composición editorial.
2. Elegir capturas reales y confirmar qué ejemplos seguirán siendo conceptuales.
3. Definir variables y componentes de Figma, con estados y responsive.
4. Migrar colores y tipografía en el sistema compartido, incluyendo formularios y footer.
5. Implementar el nuevo Inicio desde móvil y luego tablet/desktop.
6. Aplicar la misma dirección a las páginas internas conservando rutas y datos.
7. Integrar imágenes, fuentes y movimiento reducido.
8. Verificar la consulta completa y medir el resultado en el entorno final.

### Checklist de aceptación

- [ ] Nueva dirección visual aprobada antes de desarrollar.
- [ ] Oferta comprensible desde la apertura y CTA consistente.
- [ ] Conceptos, casos de uso y trabajos reales distinguidos.
- [ ] Grillas, márgenes, tipos y estados iguales entre Figma y navegador.
- [ ] Sin desbordamiento ni recortes a 320–1440 px y con zoom.
- [ ] Contraste final de texto y controles; foco visible también en cierre oscuro.
- [ ] Navegación completa con teclado y menú accesible a baja altura.
- [ ] Un `main`, un H1 por página, español, labels y errores asociados.
- [ ] Anclas antiguas compatibles, rutas y 404 funcionando.
- [ ] Formulario mantiene preselección, validación y conservación ante error.
- [ ] Fuentes y recursos con licencia; imágenes dimensionadas, comprimidas y con alt adecuado.
- [ ] Movimiento reducido y contenido accesible sin animaciones.
- [ ] Build y verificaciones pertinentes aprobados después de implementar.
- [ ] Medición real de LCP, INP y CLS; sin atribuir una mejora antes de medir.
- [ ] Prueba de envío controlada en el backend correcto; la revisión visual no acredita entrega de correos.

## Qué se aprueba ahora

Esta entrega propone **fondo marfil + azul tinta + terracota, Newsreader/Inter, hero centrado y selección editorial de propuestas**. La aprobación habilitaría adaptar la web existente con esa dirección. No implica aprobar contenido de clientes, promesas comerciales ni una publicación automática.
