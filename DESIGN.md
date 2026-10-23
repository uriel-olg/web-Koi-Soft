---
name: KoiBite
description: Diseño web y soporte IT con criterio humano.
colors:
  canvas: "#f6f3ed"
  surface: "#ffffff"
  ink: "#182530"
  muted: "#52616b"
  accent: "#b84e2d"
  accent-text: "#9e3e23"
  accent-hover: "#9e3e23"
  accent-active: "#84321c"
  peach: "#f0e3d8"
  paper: "#eeeee7"
  sage: "#e3e9e0"
  moss: "#4e6558"
  line: "#d3d4cb"
  control: "#7b867d"
  focus: "#28594f"
  focus-inverse: "#f2c29b"
  danger: "#a9312c"
  success: "#296448"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3.25rem, 5.65vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.4rem, 3.65vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  field: "6px"
  button: "8px"
  brand: "10px"
  visual: "12px"
  chip: "24px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  panel: "36px"
  wide: "48px"
  section-small: "48px"
  section-mobile: "60px"
  section-tablet: "80px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-primary-active:
    backgroundColor: "{colors.accent-active}"
  text-link:
    textColor: "{colors.accent-text}"
    typography: "{typography.label}"
  button-secondary:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 22px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
    width: "100%"
  nav-link:
    textColor: "{colors.muted}"
    padding: "13px 0"
  nav-link-active:
    textColor: "{colors.accent}"
  filter-chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "9px 18px"
  filter-chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  service-row:
    textColor: "{colors.ink}"
    padding: "30px 0"
  contact-form:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.visual}"
    padding: "36px"
---

# Design System: KoiBite

## Overview

**Creative North Star: "Tecnología con criterio humano"**

Una identidad editorial cálida que acerca diseño web y soporte IT. El marfil deja respirar la información; la tinta estructura la lectura, el terracota identifica las acciones y la salvia acompaña la forma de trabajar.

Newsreader aporta carácter a los títulos y Manrope mantiene claros los párrafos, la navegación y los formularios. El logo koi conserva la continuidad de marca. La composición se apoya en espacio, líneas finas y visuales acotados; los conceptos ilustrativos permanecen identificados.

**Key Characteristics:**

- Marfil, tinta, terracota y salvia con funciones claras.
- Títulos editoriales y controles de lectura directa.
- Filas de servicios y propuestas sin cajas repetidas.
- Profundidad puntual y movimiento breve.
- Contacto visible e ilustraciones honestas.

El frontmatter registra los valores implementados en `src/index.css` y `src/App.css`. El código define los estados y las variantes por ancho. `docs/revision-ui-ux/propuesta-diseno-v3.md` se conserva como propuesta histórica; este documento describe el resultado implementado. La interfaz utiliza un esquema claro.

## Colors

La paleta combina un fondo cálido, texto de alto contraste y dos apoyos naturales contenidos.

### Primary

- **Terracota de acción** (`accent`): botones y énfasis editorial de titulares. `accent-hover` y `accent-active` oscurecen la respuesta del botón.
- **Terracota de lectura** (`accent-text`): enlaces de texto, categorías de propuestas y pie pequeño de la pieza editorial. El tono más oscuro mantiene la legibilidad sobre papel y arcilla pálida.
- **Arcilla pálida** (`peach`): pieza editorial auxiliar y selección de texto.

### Secondary

- **Salvia** (`sage`): bloque sobre la forma de trabajar y confirmaciones.
- **Musgo** (`moss`): texto e iconos sobre salvia y etiquetas secundarias.

### Neutral

- **Marfil** (`canvas`): fondo principal y panel del formulario.
- **Blanco** (`surface`): campos y visual principal.
- **Tinta** (`ink`): texto principal, filtros seleccionados y cierre de contacto.
- **Gris de lectura** (`muted`): descripciones y texto secundario.
- **Papel** (`paper`): fondo de propuestas y respuesta del botón secundario.
- **Línea** (`line`): divisores decorativos.
- **Borde de control** (`control`): campos, filtros y botón de menú.
- **Verde de foco** (`focus`) y **durazno de foco inverso** (`focus-inverse`): navegación por teclado sobre fondos claros y oscuros.
- **Error** (`danger`) y **confirmación** (`success`): mensajes y estados del formulario, acompañados de texto.

**The Action Accent Rule.** Usar el terracota de acción en botones y titulares; los enlaces de texto, las categorías y el pie editorial pequeño usan el terracota de lectura más oscuro. Mantener ambos opacos y conservar sus roles.

Los alias de compatibilidad `navy` y `orange` del CSS resuelven a tinta y terracota; no son colores adicionales. Las miniaturas conservan colores propios de ilustración, sin convertirlos en nuevos roles de interfaz.

## Typography

**Display Font:** Newsreader, con Georgia como respaldo.
**Body Font:** Manrope, con respaldo sans serif del sistema.

Ambas familias están autoalojadas en `public/fonts/` con `font-display: swap`. Newsreader cuenta con archivos variables normal y cursiva, eje de peso 200–800; la interfaz usa principalmente 400 y el wordmark ilustrativo usa 500. Manrope dispone de 400, 600 y 700. Procedencia y licencias están en esa carpeta. Se aplica ajuste óptico automático.

### Hierarchy

- **Display:** hero centrado, escala fluida del frontmatter y una frase cursiva terracota. Cambia a una escala compacta en tablet y móvil; a menos de 360 px usa 36 px.
- **Headline:** títulos de sección en Newsreader regular. Contacto, proceso y páginas internas tienen tamaños propios según su jerarquía.
- **Title:** títulos de propuestas en Newsreader; los de servicios usan 31 px en escritorio. Valores, pasos y título del formulario usan Manrope de peso 600.
- **Body:** base de 16 px; bajada del hero de 16 px, reducida a 15 px en móvil. Las descripciones suelen usar 14–15 px con interlineado amplio.
- **Label:** acciones de 14 px y peso 600; navegación de 13 px en escritorio y 16 px en el menú desplegado. Campos de 16 px y etiquetas visibles de 13 px.

Los títulos equilibran líneas y usan espaciado negativo. La bajada del hero se limita a 630 px; las respuestas de FAQ, a 65 caracteres aproximados por línea. El microtexto dentro de una maqueta es decorativo y su descripción legible permanece fuera de ella.

**The Two Voices Rule.** Usar Newsreader para títulos editoriales y Manrope para lectura, navegación y controles.

## Layout

El contenedor tiene un máximo interior de 1280 px y márgenes de 48 px por lado. Hasta 1199 px usa 32 px; hasta 767 px, 20 px; por debajo de 360 px, 16 px. Las secciones usan las separaciones de escritorio, tablet, móvil y móvil pequeño del frontmatter.

La navegación es adhesiva: 88 px en escritorio, 78 px hasta 1099 px y 74 px hasta 767 px. El desplazamiento reserva 104 px en escritorio y 88 px en móvil. El menú completo aparece desde 1100 px; por debajo se usa un desplegable con altura máxima ajustada a la pantalla y desplazamiento interno.

Las composiciones combinan columnas amplias con contenido más acotado. Servicios y FAQ usan introducción lateral y filas a la derecha; nosotros y contacto, dos columnas. Se apilan hasta 767 px. Las propuestas usan dos columnas; la selección de Inicio tiene columnas asimétricas y desfase vertical de la segunda pieza. En móvil se presenta una sola columna.

El hero centra texto y acciones sobre un visual principal con dos apoyos. La imagen lateral desaparece hasta 1099 px y la pieza editorial auxiliar hasta 767 px. El contenido necesario permanece en el texto principal. Los campos pasan de dos columnas a una hasta 479 px. El proceso pasa de cuatro columnas a dos hasta 767 px y a lista vertical hasta 479 px.

Los límites observados son 1199, 1099, 767, 479 y 359 px. No fijar alturas a bloques de texto o formularios; las dimensiones fijas de las miniaturas pertenecen a ilustraciones recortadas.

## Elevation & Depth

El espacio, las líneas finas y la alternancia tonal construyen la mayor parte de la profundidad. Las filas de servicios y los cuerpos de propuestas permanecen planos. Las sombras se reservan para los visuales enmarcados y el menú móvil abierto.

### Shadow Vocabulary

- **Visual principal:** `0 16px 40px rgb(24 37 48 / 8%)`.
- **Navegador de propuesta:** `0 12px 28px rgb(24 37 48 / 10%)`.
- **Menú móvil:** `0 20px 35px rgb(24 37 48 / 8%)`.

**The Quiet Surface Rule.** Mantener planas las superficies de contenido; las sombras separan visuales y navegación superpuestos.

Los controles responden en 160 ms. El visual principal asciende 4 px en 220 ms al pasar el puntero; las flechas avanzan ligeramente. La entrada del texto del hero dura 600 ms y recorre 8 px. CSS y Motion respetan movimiento reducido; el contenido no depende de animaciones para estar disponible.

## Shapes

Las formas son contenidas: campos de radio pequeño, botones y menú suavizados, visuales más abiertos y filtros en cápsula, según el frontmatter. El emblema koi conserva su forma y se aloja en una marca redondeada; muestras de color y otros detalles ilustrativos pueden ser circulares.

Los contornos son finos (1 px). La línea decorativa separa secciones; el borde de control identifica campos e interacciones. Las propuestas usan visual redondeado y texto debajo, sin otra caja exterior.

## Components

### Buttons

Acciones de texto directo, con iconos de línea cuando aclaran el destino.

- **Primary:** terracota con texto blanco, altura mínima de 52 px y espacio de 24 px entre texto e icono. La variante pequeña tiene un mínimo de 46 px.
- **Secondary:** fondo transparente, texto tinta y borde de control; el hover usa papel.
- **Hover / Active / Focus:** el primario oscurece en dos pasos. El foco global usa contorno de 3 px separado 5 px; los enlaces sobre cierre oscuro usan foco inverso.
- **Disabled:** el botón usa fondo gris de lectura; los campos se deshabilitan y reducen opacidad mientras se envía. El texto y el indicador explican ese estado.
- **Text link:** terracota de lectura, peso 600, mínimo de 44 px y subrayado al pasar el puntero.

### Chips

Filtros de propuestas con borde de control, contador y altura mínima de 44 px. La selección usa tinta y texto blanco, y se expresa mediante `aria-pressed`. Las etiquetas de tecnologías son texto musgo separado por barras; no son controles ni cápsulas.

### Cards / Containers

Servicios presentados como filas con icono, título editorial, descripción y enlace o lista. Las propuestas presentan visual ilustrativo redondeado, categoría, título, descripción, tecnologías y enlace explícito. En Inicio se muestran dos propuestas; la página dedicada conserva las doce y sus filtros. El aviso de concepto permanece junto a la sección.

### Inputs / Fields

Panel marfil sobre cierre tinta; campos blancos, borde de control, radio de campo y relleno del frontmatter. Input y select tienen altura mínima de 48 px; textarea permite redimensionado vertical. El error añade contorno y mensaje asociado. Los datos se conservan si falla el envío y la confirmación requiere una respuesta válida del servicio.

### Navigation

Encabezado marfil con línea inferior, marca, rutas y acceso a WhatsApp. El enlace actual usa terracota y una línea inferior en escritorio. El menú móvil no modal incluye `aria-expanded` y `aria-controls`, cierra por Escape, enlace o pulsación exterior, y devuelve el foco al botón al cerrar por Escape.

### FAQ

Acordeón nativo con `details` y `summary`, separadores y un indicador que gira al abrir. La pregunta mantiene un área interactiva amplia; la respuesta se lee en Manrope con interlineado generoso.

### Illustrative previews

El visual principal es una interfaz conceptual con pie explícito. La imagen de espacio de trabajo es generada y decorativa, no un caso real. Las miniaturas de propuestas representan posibilidades de software y soporte: la categoría, título, explicación y contacto permanecen como texto fuera de la ilustración.

## Do's and Don'ts

### Do:

- **Do** conservar el logo koi y la voz cercana en español con voseo.
- **Do** usar marfil como base, tinta para lectura y terracota para acciones.
- **Do** mantener las familias y los estados definidos por el código compartido.
- **Do** conservar foco visible, etiquetas persistentes y mensajes de error asociados.
- **Do** identificar las propuestas y las imágenes generadas como ilustrativas.

### Don't:

- **Don't** presentar conceptos como clientes, trabajos realizados o resultados medidos.
- **Don't** convertir los servicios y las propuestas en una colección de paneles con sombra.
- **Don't** usar la serif para campos, navegación o explicaciones técnicas.
- **Don't** reemplazar datos reales de contacto ni inventar enlaces sociales.
- **Don't** anunciar entrega de correo sin evidencia ni borrar datos después de un fallo.
