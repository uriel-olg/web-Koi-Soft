---
name: KoiBite
description: Tecnología cercana, soluciones claras y soporte humano.
colors:
  ink: "#162b3e"
  navy: "#17334f"
  muted: "#536778"
  accent: "#bd4c10"
  accent-hover: "#9d3d0a"
  orange: "#d85b1b"
  peach: "#ffeddf"
  paper: "#f5f8fa"
  line: "#dce4e9"
  white: "#ffffff"
  focus: "#3269a0"
  field-border: "#c9d4dd"
typography:
  display:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.65rem, 4.5vw, 4.05rem)"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.3vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.5
rounded:
  field: "7px"
  button: "10px"
  icon: "12px"
  card: "14px"
  form: "16px"
  chip: "24px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  gap: "18px"
  lg: "24px"
  xl: "32px"
  section-mobile: "62px"
  section-tablet: "72px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "11px 12px"
    width: "100%"
  nav-link:
    textColor: "{colors.ink}"
    padding: "12px 0"
  nav-link-active:
    textColor: "{colors.accent}"
  filter-chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "8px 18px"
  filter-chip-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  project-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  service-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px 23px 21px"
  contact-form:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.form}"
    padding: "31px"
---

# Design System: KoiBite

## Overview

**Creative North Star: "Tecnología de tu lado"**

Una identidad clara y cercana que presenta capacidad técnica sin dificultar la lectura. El blanco y las superficies suaves dejan respirar el contenido; el azul marino aporta estructura y el naranja cálido guía acciones y detalles de marca.

El logo koi existente mantiene la continuidad de KoiBite. Manrope, las esquinas suavizadas y los iconos de línea dan un carácter práctico y amable. Las imágenes y las miniaturas explican posibilidades: su condición ilustrativa debe permanecer explícita.

**Key Characteristics:**

- Espacio generoso y jerarquía directa.
- Azul marino estructural y naranja cálido contenido.
- Tipografía única, legible y cercana.
- Superficies suaves con profundidad puntual.
- Ilustraciones honestas y contacto visible.

Los valores de color y la familia tipográfica se extraen de `src/index.css`; dimensiones y estados, de `src/App.css`. El frontmatter registra esos valores y el código sigue siendo la fuente de implementación. No existe un modo oscuro alternativo.

## Colors

La paleta combina blancos frescos, azules profundos y un acento cálido con dos funciones diferenciadas.

### Primary

- **Naranja de acción** (`accent`): botones principales y enlaces destacados. Su variante `accent-hover` oscurece la respuesta al puntero.
- **Naranja de marca** (`orange`): énfasis del titular, punto del logotipo e iconos. No sustituir automáticamente el tono más oscuro de los botones.
- **Durazno suave** (`peach`): fondos de iconos y números del proceso.

### Neutral

- **Tinta azul** (`ink`): texto principal y base del emblema.
- **Azul marino** (`navy`): bloque de contacto y filtros seleccionados.
- **Azul gris de lectura** (`muted`): párrafos secundarios.
- **Papel frío** (`paper`) y **blanco** (`white`): alternancia de secciones y tarjetas.
- **Línea suave** (`line`): divisores y contornos secundarios.
- **Azul de foco** (`focus`): contorno de navegación con teclado.
- **Borde de campo** (`field-border`): separación de campos sobre el formulario blanco.

**The Accent Role Rule.** Usar el naranja de acción para controles con texto blanco y el naranja de marca para énfasis visual; conservar la diferencia implementada.

Los estados de validación conservan sus colores específicos en CSS. Las miniaturas ilustrativas admiten sus propios azules, verdes y tonos tierra; no forman una paleta adicional de interfaz.

## Typography

**Display Font:** Manrope, con respaldo de sistema sans serif.
**Body Font:** Manrope, con el mismo respaldo.

La familia está autoalojada en `public/fonts/`, con archivos para los pesos 400, 600 y 700 y licencia SIL OFL incluida. La jerarquía depende del tamaño, peso y espacio, sin introducir otra familia.

### Hierarchy

- **Display:** titular del hero, con el tamaño fluido del frontmatter, interlineado compacto y énfasis naranja. En tablet se ajusta a 42 px; en móvil usa `clamp(35px, 10.4vw, 46px)`.
- **Headline:** títulos de sección equilibrados, con el tamaño fluido del frontmatter. En móvil se ajustan a 32 px. El bloque de contacto tiene una escala propia acorde con su mayor presencia.
- **Title:** títulos de tarjetas y subsecciones; las variantes observadas van de 17 a 22 px según componente y ancho.
- **Body:** base de 16 px. Las descripciones de secciones y tarjetas usan 13–14 px e interlineados amplios; el texto principal del hero conserva 16 px en escritorio.
- **Label:** acciones de 13 px y peso 700; navegación de 13 px y peso 600. Los campos usan etiquetas visibles; su texto sube a 16 px en móvil.

Mantener títulos breves, con espaciado negativo y balance de líneas. Los párrafos del hero se limitan a 475 px; los de presentación, a 530 px.

## Layout

El contenedor de escritorio tiene un máximo de 1240 px y deja 40 px por lado. Hasta 1150 px deja 32 px; hasta 639 px deja 20 px. Las secciones usan la separación vertical del frontmatter, reducida en tablet y móvil.

El encabezado es adhesivo: 88 px en escritorio, 78 px hasta 899 px y 74 px hasta 639 px. El desplazamiento a anclas reserva espacio para él. El hero divide texto e imagen en dos columnas y los apila en móvil; la ilustración conserva su espacio y sus notas flotantes.

Los servicios pasan de cuatro a dos columnas hasta 899 px; por debajo de 360 px usan una. Las propuestas pasan de tres a dos columnas hasta 899 px y a una hasta 639 px. Nosotros y contacto se apilan hasta 639 px. El formulario pasa de dos columnas de campos a una hasta 899 px. El proceso mantiene cuatro pasos y usa dos columnas en móvil.

Los cambios responden a límites observados de 1150, 899, 639 y 359 px; una regla desde 1500 px ajusta el encuadre del hero. No imponer una cuadrícula nueva al añadir contenido equivalente.

## Elevation & Depth

La profundidad procede sobre todo de la alternancia de superficies, los contornos y el contraste del bloque de contacto. Las tarjetas de servicios y propuestas permanecen planas. Las sombras se reservan para notas sobre la imagen, miniaturas de navegador y menú desplegado.

### Shadow Vocabulary

- **Nota del hero:** `0 14px 40px #152d4212`; separa las etiquetas blancas de la imagen.
- **Miniatura de navegador:** `0 10px 25px #25456212`; sitúa el ejemplo dentro de su marco ilustrativo.
- **Menú móvil:** `0 20px 35px #162b3e12`; separa la navegación abierta del contenido.

**The Quiet Surface Rule.** Mantener planas las tarjetas de contenido; reservar las sombras para capas que se superponen de verdad.

Las respuestas de controles duran 0.2 s; el botón asciende 2 px al pasar el puntero y vuelve al pulsarlo. La entrada del texto del hero dura 0.65 s y recorre 12 px. La preferencia de movimiento reducido desactiva animaciones, transiciones y desplazamiento suave.

## Shapes

Las esquinas son suaves y funcionales: campos pequeños, botones contenidos, tarjetas más abiertas y formulario ligeramente más redondeado, según los roles del frontmatter. Los filtros son cápsulas; el emblema koi, los indicadores y los números del proceso son circulares.

Los contornos son finos, de 1 px. No convertir cada superficie en una cápsula ni añadir bordes gruesos. Las miniaturas pueden contener formas propias porque representan objetos y pantallas, no controles nuevos.

## Components

### Buttons

Acciones claras, con texto en caja normal e iconos de línea cuando ayudan a indicar destino.

- **Primary:** naranja de acción, texto blanco, altura mínima de 52 px y separación de 18 px entre etiqueta e icono. La versión pequeña tiene 46 px de altura mínima.
- **Secondary:** blanco, texto tinta y borde suave; al pasar el puntero usa un fondo azul gris muy claro.
- **Hover / Focus:** el principal oscurece y asciende; el foco visible usa un contorno azul de 3 px separado 5 px. El estado deshabilitado reduce opacidad y evita desplazamiento.
- **Text link:** naranja de acción, peso fuerte, subrayado al pasar el puntero y avance leve de la flecha.

### Chips

Los filtros llevan contorno azul gris y contador secundario. El seleccionado cambia a azul marino con texto blanco, expresado con `aria-pressed`. Conservan una altura mínima de 43 px. Las etiquetas de tecnologías dentro de tarjetas son más pequeñas, con fondo suave y radio de 5 px; no funcionan como filtros.

### Cards / Containers

Los servicios usan papel frío, icono sobre durazno, título, descripción, lista y enlace. Las propuestas usan tarjeta blanca, visual ilustrativo superior y cuerpo de 24 px de relleno en escritorio. Ambas comparten el radio de tarjeta y mantienen los enlaces al final del contenido sin convertir el artículo entero en un control.

### Inputs / Fields

Campos blancos con borde fino, radio de campo y etiquetas encima. Input y select tienen al menos 44 px de altura; textarea permite redimensionado vertical. El foco global debe mantenerse visible. Un error cambia el contorno y añade una explicación asociada mediante `aria-describedby`; no depender solo del color. El formulario deshabilita los campos mientras envía, muestra el estado y conserva los datos ante un fallo.

### Navigation

Encabezado blanco con marca a la izquierda, enlaces al centro y contacto a la derecha. El enlace actual usa naranja y una línea inferior en escritorio. Hasta 899 px aparece el botón de menú; el panel abierto apila enlaces y añade contacto por WhatsApp. Escape lo cierra y devuelve el foco al botón. En móvil se oculta el botón externo de contacto para dejar espacio a la marca y el menú.

### Illustrative previews

Las propuestas combinan pequeños navegadores, diagramas y objetos de hardware para explicar una posibilidad. Su detalle puede ser pequeño porque es ilustración, pero la categoría, el título y la explicación deben permanecer como texto legible fuera de la miniatura. Mantener el aviso de que son conceptos, no resultados de clientes.

## Do's and Don'ts

### Do:

- **Do** mantener el logo koi existente y la voz cercana en español.
- **Do** usar los colores y la tipografía extraídos del código como referencia compartida.
- **Do** conservar espacio entre secciones, jerarquía clara y adaptación a móvil.
- **Do** mantener foco visible, etiquetas reales y estados de selección y envío comprensibles.
- **Do** identificar las propuestas y las imágenes generadas como ilustrativas.

### Don't:

- **Don't** presentar conceptos como clientes, proyectos realizados o resultados medidos.
- **Don't** intercambiar el naranja de marca y el de acción sin comprobar su función y legibilidad.
- **Don't** añadir sombras a todas las tarjetas ni introducir otra familia tipográfica.
- **Don't** reemplazar datos reales de contacto ni inventar enlaces sociales.
- **Don't** ocultar errores, anunciar entrega de correo sin evidencia o borrar datos tras un fallo.
