# KoiBite · implementación de la propuesta

Versión local del 22 de octubre de 2026. Implementada tras la aprobación del diseño. No se publicó ni se subió un commit.

## Resultado

- Inicio con oferta explícita, dos áreas de servicio, conceptos visuales, beneficios, proceso, FAQ y cierre.
- Servicios, Proyectos, Nosotros y Contacto con el mismo sistema visual.
- Paleta azul noche/naranja, tipografías Manrope e Inter, superficies simplificadas y textos principales de 16 px.
- Visuales de ejemplo construidos con HTML/CSS, identificados como conceptos o casos de uso.
- Navbar adaptable, menú con Escape y devolución de foco, anclas, filtros y detalles de proyectos.
- Una región principal por página, idioma español, acceso directo al contenido y página 404.
- Páginas internas con carga diferida.
- Servicios de contacto con identificadores compartidos entre React y Express y mapa equivalente en PHP. Presupuesto y empresa opcionales.
- Estados de formulario con validación, envío, confirmación y error con conservación de datos.

## Verificación realizada

- `pnpm.cmd build`: aprobado, incluyendo TypeScript para frontend y backend.
- `pnpm.cmd exec eslint src api/contacto.ts vite.config.ts`: aprobado.
- Navegador Chrome: Inicio a 320, 390, 768 y 1440 px; las cinco páginas internas/404 a 390 y 1440 px. Total: 14 combinaciones, sin desbordamiento horizontal, una región `main` y un H1 por página.
- Menú comprobado a 390 × 568 px: alto limitado al viewport, Escape, devolución de foco y cierre al pulsar fuera.
- Filtro de Soporte IT y apertura de detalle de un caso: aprobados.
- Formulario: preselección desde un servicio, bloqueo por datos inválidos, respuesta de éxito simulada y respuesta 502 simulada conservando los datos. No se enviaron correos reales.
- Contrato: las ocho opciones aceptadas por el esquema y presentes en PHP; servicios desconocidos y email inválido rechazados.
- Sin excepciones de JavaScript durante la revisión de navegador.

## Vista y capturas

Iniciar con `pnpm.cmd dev --host 127.0.0.1 --port 5173` en PowerShell, o `pnpm dev` en una terminal configurada para ejecutar el script correspondiente. La vista local está en http://127.0.0.1:5173/ mientras el proceso permanezca activo.

- [Inicio de escritorio](nueva-inicio.png).
- [Página completa de escritorio](nueva-desktop.png).
- [Página completa móvil](nueva-mobile.png).
- [Página completa tablet](nueva-tablet.png).

El envío real depende del backend y de su configuración. `pnpm.cmd dev:api` inicia Express con las variables existentes; para hosting PHP se puede usar `VITE_CONTACT_ENDPOINT=/api/contacto.php`. La aceptación por el proveedor no garantiza entrega a la bandeja. No se probaron correos reales, titularidad de WhatsApp ni despliegue en producción.

Las fuentes se solicitan a Google Fonts; si no hay conexión, la interfaz utiliza las fuentes de sistema. El número de WhatsApp anterior se conserva con el prefijo internacional argentino y puede configurarse con `VITE_WHATSAPP_NUMBER`.
