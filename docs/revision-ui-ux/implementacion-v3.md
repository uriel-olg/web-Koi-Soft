# KoiBite · implementación v3

Rediseño local basado en la dirección editorial cálida de [la propuesta v3](propuesta-diseno-v3.md). La propuesta histórica se conserva; este archivo registra la implementación.

## Cambios

- Paleta compartida: marfil, tinta, terracota y salvia, con colores específicos para controles, foco y estados del formulario.
- Newsreader normal y cursiva autoalojadas para títulos; Manrope se conserva en lectura y controles. Procedencia y licencias en `public/fonts/`.
- Apertura centrada, interfaz conceptual principal y apoyos visuales que se simplifican según el ancho.
- Servicios presentados en filas; dos propuestas seleccionadas en Inicio y doce filtrables en la página dedicada.
- Bloque salvia para nosotros y proceso, preguntas frecuentes nativas y cierre tinta para contacto.
- Dirección aplicada al encabezado, pie, páginas internas, campos y estados compartidos. Se conservan las rutas, las consultas por servicio, los datos reales de contacto y el contrato del formulario.
- `DESIGN.md` y `.impeccable/design.json` describen los tokens, componentes y estados efectivos. `PRODUCT.md` actualiza solo el compromiso visual de marca.

## Decisiones de implementación

Se utiliza Manrope como cuerpo, alternativa ya autoalojada prevista en la propuesta. Los valores efectivos del CSS prevalecen sobre las medidas orientativas: radios de 6 px en campos, 8 px en botones y 12 px en visuales; navegación colapsada por debajo de 1100 px. Las propuestas siguen siendo conceptos ilustrativos, sin atribución a clientes ni resultados.

## Comprobaciones

Verificación realizada en Chrome headless sobre el build de producción, con movimiento reducido activado:

- `pnpm build`: TypeScript y build de Vite aprobados. `pnpm test`: seis pruebas existentes del contrato de contacto aprobadas.
- Las cinco rutas revisadas a 320, 390, 768, 1024 y 1440 px: 25 combinaciones sin desbordamiento horizontal, con un H1 por página, fuentes cargadas e imágenes disponibles. Sin excepciones JavaScript registradas.
- Filtros: 12 propuestas totales, seis de software y seis de IT. Menú móvil: apertura, cierre con Escape y devolución del foco comprobados. Ancla histórica `/#soluciones` compatible.
- Formulario: preselección desde la URL y validación comprobadas. Respuestas locales simuladas: un error conserva los datos y una aceptación `{ ok: true }` limpia el formulario. No se enviaron consultas reales.
- Preguntas frecuentes y página 404 comprobadas.
- La revisión visual independiente detectó contraste insuficiente del acento original sobre fondos secundarios. Los enlaces, categorías y la etiqueta del manifiesto usan ahora `accent-text: #9e3e23`: 5,69:1 sobre papel y 5,27:1 sobre durazno. El terracota de botones y títulos permanece en `#b84e2d`.
- Veredicto final de revisión: `ship` para el único ajuste de contraste solicitado, confirmado con las capturas actualizadas; sin pendientes de ese hallazgo.
- [Portada de escritorio](../../.impeccable/review/desktop-inicio.png) y [portada móvil](../../.impeccable/review/mobile-inicio.png). Las capturas completas y de páginas internas están en `.impeccable/review/`; [reporte de comprobaciones](../../.impeccable/review/report.json).

Esta comprobación no mide rendimiento de campo, no acredita una certificación de accesibilidad y no demuestra entrega real de correos.

## Alcance

Implementación local. No se publica ni se modifica la configuración de envío. La revisión del formulario no demuestra que un correo llegue a la bandeja de entrada.
