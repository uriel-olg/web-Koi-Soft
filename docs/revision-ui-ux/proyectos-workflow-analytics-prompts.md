# Conceptos de automatización y análisis

Dos imágenes independientes generadas con la herramienta integrada `image_gen`, conservando el texto de cada bloque y sin representar el código.

Codificación local WebP con calidad 1,0 (máximo del codificador), sin reescalado; dimensiones y cabecera RIFF/WEBP comprobadas. Son conceptos ilustrativos, no sistemas entregados ni datos reales de clientes.

| Concepto | Archivo | Dimensiones | Bytes |
| --- | --- | --- | ---: |
| Automatización de procesos | `public/images/proyecto-workflow.webp` | 1586 × 992 | 919022 |
| Panel de análisis | `public/images/proyecto-analytics.webp` | 1585 × 992 | 836620 |

En el panel de análisis se conserva la secuencia de ocho barras del ejemplo: 28, 43, 36, 60, 51, 72, 83 y 92. Los valores controlan la representación visual y no se añaden como etiquetas numéricas.

## Prompts exactos

Cada prompt enviado es el bloque común seguido por dos saltos de línea y el bloque específico correspondiente.

### Bloque común

```text
Use case: ui-mockup.
Create exactly ONE finished software application concept screenshot for the KoiBite Projects section. This belongs to the same warm modern minimalist family as the inventory dashboard and weekly agenda concepts. Landscape 16:10, ideally 1586 x 992 pixels at highest native image quality. Flat frontal UI screenshot edge to edge, no laptop, photo scene, browser frame, external border or surrounding canvas.
Palette: ivory #F6F3ED canvas, white #FFFFFF main content, ink #182530, terracotta #B84E2D, pale sage #E3E9E0, moss #4E6558 and fine #D3D4CB lines. Elegant Newsreader-like regular serif main heading with restrained terracotta italic emphasis, crisp Manrope-like sans UI. Abundant whitespace, precise spacing and alignment, mature professional product design, naturally antialiased typography and clean consistent thin-line icons. A very narrow icon-only left navigation rail and a slim quiet app toolbar can frame the functional workspace, with no extra words.
Do not display programming code or markup: no JSX, HTML tags, arrays, brackets, className, variable names or code syntax. Only the exact text specified for this particular image is allowed. No invented business claims, sales metrics, descriptions, extra labels, charts unrelated to the subject, giant pills, decorative gradients, glass effects, watermarks or fake logos with lettering.
```

### Automatización de procesos

```text
Subject: a clear three-step automated workflow.
Exact main heading: 'Una tarea, menos pasos.' Keep the words and period, with 'menos pasos.' optionally in terracotta italic.
Below the heading, the primary content is a large open workflow canvas showing THREE equal stages arranged horizontally, connected clearly from left to right by fine terracotta connectors with simple right chevrons.
Stage 1: a crisp thin-line monitor/form icon, suggesting a small clean form with two blank input fields. Exact label 'Formulario'.
Stage 2: a crisp thin-line database cylinder icon. Exact label 'Tu sistema'.
Stage 3: a crisp thin-line envelope icon with a small success check. Exact label 'Confirmación', including the ó accent.
Each stage can sit on a quiet pale-sage or pale-peach flat rectangular surface with a modest corner radius; these have a real role as workflow steps. Keep labels large and clear, icons substantial, connectors visible, without nested cards, drop shadows or clutter.
Below the workflow, place one small moss checkmark followed by the exact caption 'Las herramientas, conectadas.'.
These five supplied text phrases are the ONLY readable text in the image. Do not add numbered steps, times, extra statuses or placeholder lettering. A coherent automation-editor appearance with the diagram clearly readable at portfolio thumbnail size.
```

### Panel de análisis

```text
Subject: a clean analytics overview using explicitly illustrative data.
Slim app header shows exactly 'Tu negocio' at upper left and the smaller quiet context label 'Datos de ejemplo' toward the right. No other brand words.
Main title below: 'Una mirada más clara.' in a large refined serif, with optional terracotta italic emphasis on 'más clara.'.
The dominant content is one large flat white chart surface with a subtle horizontal grid and exactly EIGHT broad vertical bars with equal width and regular gaps. Preserve their exact left-to-right relative heights from the provided example: 28%, 43%, 36%, 60%, 51%, 72%, 83%, 92%. Do not sort the values or add/remove bars. Use restrained sage tones for the first seven bars and terracotta for the final 92% bar. Corners very gently rounded, no gradients or 3D effects.
Keep all eight bars fully visible, rising from a shared baseline. To match the supplied concept, the percentages control visual bar heights only: do NOT print percentages, axes numbers, dates, month labels, revenue figures or additional words.
Only the three supplied phrases 'Tu negocio', 'Datos de ejemplo' and 'Una mirada más clara.' may appear as readable text. No metric tiles, fake profit numbers, trend claims, pie charts, legends or extra dashboards. Make it a credible restrained analytics product screenshot with the clear eight-bar chart as the focus.
```

