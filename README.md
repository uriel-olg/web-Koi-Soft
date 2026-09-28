# KoiBite · Servicios digitales

Sitio web de servicios digitales orientado a presentar soluciones de desarrollo web, catálogos, e-commerce y automatizaciones, mostrar proyectos y facilitar el contacto con potenciales clientes.

Desarrollado con **React, TypeScript y Tailwind CSS**, con un formulario validado mediante **React Hook Form y Zod** y un backend de **Node.js + Express** para enviar consultas por correo con **Resend**.

> Esta guía describe la configuración con Express en `api/contacto.ts`. Los comandos presuponen las dependencias indicadas y los scripts habituales de Vite en `package.json`.

## Tecnologías

| Área | Tecnologías |
| --- | --- |
| Interfaz | React, TypeScript, Vite |
| Estilos e iconos | Tailwind CSS, Lucide React |
| Navegación | React Router |
| Formularios | React Hook Form, Zod |
| Backend | Node.js, Express, CORS, dotenv |
| Envío de correos | Resend |
| Desarrollo del backend | tsx |
| Gestión de paquetes | pnpm |

## Formulario de contacto

El formulario recopila nombre, email, empresa, servicio, presupuesto estimado y mensaje.

1. React Hook Form administra los campos y Zod valida los datos en el navegador.
2. El frontend envía una petición `POST /api/contacto` al backend.
3. Express valida nuevamente los datos y solicita el envío a Resend.
4. El frontend muestra el resultado y limpia los campos si la solicitud fue aceptada.

El destinatario y el remitente se configuran en el servidor. El email del visitante se utiliza como `replyTo`, para responderle desde la casilla que recibe las consultas. La confirmación de la API indica que el servicio aceptó el envío, no que el correo ya llegó a la bandeja de entrada.

## Requisitos

- Node.js en una versión compatible con las dependencias del proyecto.
- pnpm y Git.
- Una cuenta de Resend y una API key de envío.
- Un dominio verificado en Resend para utilizar un remitente propio.

## Instalación

```bash
git clone https://github.com/uriel-olg/web-Koi-Soft.git
cd web-Koi-Soft
pnpm install
```

Si el backend todavía no tiene sus dependencias registradas:

```bash
pnpm add express cors dotenv resend zod
pnpm add -D tsx @types/express @types/cors @types/node
```

## Variables de entorno

Creá un archivo `.env` en la raíz, junto a `package.json`:

```dotenv
RESEND_API_KEY=re_REEMPLAZAR_CON_TU_CLAVE
CONTACT_EMAIL=tu-correo@example.com
RESEND_FROM="KoiBite <onboarding@resend.dev>"
FRONTEND_URL=http://localhost:5173
PORT=3001
VITE_API_URL=http://localhost:3001
```

| Variable | Uso |
| --- | --- |
| `RESEND_API_KEY` | Credencial privada de Resend. Solo se utiliza en el backend. |
| `CONTACT_EMAIL` | Dirección que recibe las consultas. |
| `RESEND_FROM` | Nombre y dirección del remitente. |
| `FRONTEND_URL` | Origen del frontend permitido por CORS, sin barra final. |
| `PORT` | Puerto del servidor Express. |
| `VITE_API_URL` | URL pública del backend utilizada por React. |

Para las pruebas con `onboarding@resend.dev`, el destinatario debe ser el correo asociado a tu cuenta de Resend. Para usar un remitente propio, verificá su dominio y actualizá `RESEND_FROM`, por ejemplo:

```dotenv
RESEND_FROM="KoiBite <contacto@tudominio.com>"
```

Reiniciá los procesos de desarrollo después de modificar `.env`.

### Credenciales y Git

Las variables con prefijo `VITE_` pueden quedar incluidas en el frontend. No utilices ese prefijo para claves privadas.

Incluí estas reglas en `.gitignore`:

```gitignore
node_modules/
dist/
.env
.env.*
!.env.example
```

Podés publicar un `.env.example` con nombres de variables y valores de ejemplo, sin credenciales reales. Si una clave ya fue incluida en un commit, agregar `.gitignore` no la elimina del historial: revocala y quitá el secreto de los commits afectados.

## Desarrollo local

Ejecutá ambos procesos desde la raíz, en terminales separadas.

**Frontend:**

```bash
pnpm dev
```

**Backend:**

```bash
pnpm exec tsx watch api/contacto.ts
```

El frontend normalmente se abre en `http://localhost:5173` y la API en `http://localhost:3001/api/contacto`. Si Vite utiliza otro puerto, actualizá `FRONTEND_URL`.

Vite ejecuta el frontend; no inicia automáticamente el backend Express.

## Compilación y despliegue

Para generar el frontend:

```bash
pnpm build
```

Los archivos resultantes se generan en `dist/`. Este proceso no publica ni mantiene ejecutándose el backend.

Para desplegar la aplicación completa:

1. Publicá `dist/` en un servidor de archivos estáticos.
2. Ejecutá el backend en un entorno compatible con Node.js, instalando sus dependencias y configurando un comando de arranque y un supervisor de procesos.
3. Configurá las variables privadas en el servidor y utilizá un remitente autorizado en Resend.
4. Establecé `FRONTEND_URL` con el origen público de la web y `VITE_API_URL` con la URL HTTPS pública del backend.
5. Volvé a compilar el frontend después de cambiar `VITE_API_URL`.
6. Configurá el servidor para que las rutas de React Router devuelvan `index.html`, sin interceptar las rutas de la API.

El frontend y el backend pueden alojarse juntos o en servicios diferentes. No requiere Vercel. Un hosting que solo sirve archivos estáticos no ejecuta Express.

Antes de abrir el formulario al público, incorporá límites de solicitudes y protección antispam. CORS configura el acceso desde navegadores; no reemplaza esas protecciones.

## Problemas frecuentes

| Problema | Qué revisar |
| --- | --- |
| `404` al enviar | El destino debe coincidir con la URL del backend y la ruta `POST /api/contacto`. |
| Error de CORS | `FRONTEND_URL` debe coincidir exactamente con el origen del navegador, sin `/` final. |
| `403` de Resend por dominio | Revisá el dominio del remitente o utilizá el remitente de prueba con el destinatario permitido. |
| `Cannot find name 'process'` | Instalá `@types/node` e incluí `api/**/*.ts` en la configuración TypeScript que tenga `types: ["node"]`. |
| Error de conexión | Confirmá que el backend está ejecutándose y que el puerto es correcto. |
| GitHub bloquea el push por secretos | Quitá las credenciales de los commits afectados y revocá las claves expuestas. |

## Autor

Desarrollado por **Uriel Olguin**.

[GitHub](https://github.com/uriel-olg) · [Repositorio](https://github.com/uriel-olg/web-Koi-Soft)
