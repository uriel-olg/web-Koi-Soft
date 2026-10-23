import {
  Code2,
  Database,
  Workflow,
  Headphones,
  Cpu,
  Wrench,
  Settings2,
  ShoppingBag,
  CalendarDays,
  ChartNoAxesCombined,
  Network,
  ShieldCheck,
  Gauge,
  MessageCircle,
  Layers3,
  Clock3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const contactEmail = "olguriel@gmail.com";
// Número internacional y configuración conservados de la versión actual de main.
const whatsappNumber = (
  import.meta.env?.VITE_WHATSAPP_NUMBER || "5492604230590"
).replace(/\D/g, "");
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola! Me gustaría consultar por un proyecto o soporte técnico.")}`;
export const navigation = [
  { label: "Inicio", id: "inicio", path: "/" },
  { label: "Servicios", id: "servicios", path: "/servicios" },
  { label: "Proyectos", id: "proyectos", path: "/proyectos" },
  { label: "Nosotros", id: "nosotros", path: "/nosotros" },
  { label: "Contacto", id: "contacto", path: "/contacto" },
];

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  contactService: string;
}
export const services: Service[] = [
  {
    title: "Desarrollo web",
    description:
      "Una presencia digital que represente tu marca y convierta visitas en conversaciones.",
    icon: Code2,
    items: [
      "Landing pages y sitios institucionales",
      "Tiendas online y catálogos con CMS",
      "Diseño responsive y optimización",
    ],
    contactService: "Desarrollo web",
  },
  {
    title: "Sistemas a medida",
    description:
      "Herramientas que se adaptan a tu forma de trabajar, y no al revés.",
    icon: Database,
    items: [
      "Gestión de ventas e inventario",
      "Reservas y turnos",
      "Paneles de información",
    ],
    contactService: "Sistemas a medida",
  },
  {
    title: "Automatizaciones",
    description:
      "Conectamos tus herramientas para que dejes de repetir las mismas tareas.",
    icon: Workflow,
    items: [
      "Formularios, correo e integraciones",
      "Procesos y tareas automáticas",
      "Conexión entre servicios",
    ],
    contactService: "Automatizaciones",
  },
  {
    title: "Soporte IT",
    description:
      "Del otro lado de la pantalla, también estamos. Cuidamos los equipos que usás cada día.",
    icon: Headphones,
    items: [
      "Armado y actualización de PC",
      "Limpieza, diagnóstico y mantenimiento",
      "Windows, drivers y programas",
    ],
    contactService: "Diagnóstico / mantenimiento IT",
  },
];
export const benefits = [
  {
    title: "Trato directo",
    description: "Hablamos en tu idioma.",
    icon: MessageCircle,
  },
  {
    title: "Una mirada completa",
    description: "Tu web y tus equipos, conectados.",
    icon: Layers3,
  },
  {
    title: "Tiempos claros",
    description: "Acordamos cada etapa.",
    icon: Clock3,
  },
  {
    title: "Criterio y cuidado",
    description: "Tu información importa.",
    icon: ShieldCheck,
  },
];
export type ProjectCategory = "software" | "it";
export type ProjectVisual =
  | "website"
  | "shop"
  | "management"
  | "calendar"
  | "workflow"
  | "analytics"
  | "build"
  | "maintenance"
  | "upgrade"
  | "software"
  | "backup"
  | "network";
export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  icon: LucideIcon;
  visual: ProjectVisual;
  tags: string[];
  contactService: string;
}
export const projects: Project[] = [
  {
    id: "web",
    category: "software",
    title: "Web institucional",
    description:
      "Tu negocio, bien presentado. Una web clara para mostrar lo que hacés y recibir consultas.",
    icon: Code2,
    visual: "website",
    tags: ["Diseño responsive", "Contacto"],
    contactService: "Desarrollo web",
  },
  {
    id: "tienda",
    category: "software",
    title: "Tienda online",
    description:
      "Tus productos, a un clic. Un catálogo organizado con carrito y una experiencia de compra simple.",
    icon: ShoppingBag,
    visual: "shop",
    tags: ["E-commerce", "Catálogo"],
    contactService: "E-commerce",
  },
  {
    id: "gestion",
    category: "software",
    title: "Sistema de gestión",
    description:
      "Ventas, stock y tareas en un mismo lugar. Menos planillas sueltas, más orden.",
    icon: Database,
    visual: "management",
    tags: ["Inventario", "Administración"],
    contactService: "Sistemas a medida",
  },
  {
    id: "turnos",
    category: "software",
    title: "Reservas y turnos",
    description:
      "Una agenda digital para profesionales y negocios que necesitan organizar su atención.",
    icon: CalendarDays,
    visual: "calendar",
    tags: ["Agenda", "Reservas"],
    contactService: "Sistemas a medida",
  },
  {
    id: "automatizacion",
    category: "software",
    title: "Procesos automáticos",
    description:
      "Formularios, correo y servicios que se comunican entre sí para ahorrarte pasos.",
    icon: Workflow,
    visual: "workflow",
    tags: ["Integraciones", "Procesos"],
    contactService: "Automatizaciones",
  },
  {
    id: "panel",
    category: "software",
    title: "Panel de control",
    description:
      "Información ordenada y fácil de leer para entender qué pasa en tu negocio.",
    icon: ChartNoAxesCombined,
    visual: "analytics",
    tags: ["Datos", "Visualización"],
    contactService: "Sistemas a medida",
  },
  {
    id: "pc",
    category: "it",
    title: "PC a tu medida",
    description:
      "Selección y armado de componentes para oficina, estudio, creación o gaming. Según tu uso real.",
    icon: Cpu,
    visual: "build",
    tags: ["Hardware", "PC build"],
    contactService: "Armado o actualización de PC",
  },
  {
    id: "mantenimiento",
    category: "it",
    title: "Limpieza y mantenimiento",
    description:
      "Revisión del equipo, limpieza interna y cuidado preventivo para seguir trabajando.",
    icon: Wrench,
    visual: "maintenance",
    tags: ["Limpieza", "Diagnóstico"],
    contactService: "Diagnóstico / mantenimiento IT",
  },
  {
    id: "actualizacion",
    category: "it",
    title: "Actualización de equipos",
    description:
      "Evaluamos memoria y almacenamiento para mejorar tu PC antes de pensar en reemplazarla.",
    icon: Gauge,
    visual: "upgrade",
    tags: ["Memoria RAM", "SSD"],
    contactService: "Armado o actualización de PC",
  },
  {
    id: "programas",
    category: "it",
    title: "Drivers y programas",
    description:
      "Instalación y configuración de sistemas, periféricos y software con tus licencias.",
    icon: Settings2,
    visual: "software",
    tags: ["Windows", "Configuración"],
    contactService: "Windows / software / configuración",
  },
  {
    id: "respaldo",
    category: "it",
    title: "Respaldo y recuperación",
    description:
      "Planificamos copias de seguridad y evaluamos las posibilidades de recuperar tus archivos.",
    icon: ShieldCheck,
    visual: "backup",
    tags: ["Backups", "Archivos"],
    contactService: "Diagnóstico / mantenimiento IT",
  },
  {
    id: "redes",
    category: "it",
    title: "Redes y conectividad",
    description:
      "Diagnóstico y configuración de la conexión de tu casa, oficina o emprendimiento.",
    icon: Network,
    visual: "network",
    tags: ["Wi-Fi", "Red local"],
    contactService: "Redes y conectividad",
  },
];
export const processSteps = [
  {
    title: "Entendemos",
    description: "Nos contás qué necesitás y cómo trabajás hoy.",
  },
  {
    title: "Proponemos",
    description: "Definimos una solución, su alcance y los plazos.",
  },
  {
    title: "Implementamos",
    description: "Desarrollamos o ponemos a punto lo acordado.",
  },
  {
    title: "Acompañamos",
    description: "Verificamos el resultado y seguimos en contacto.",
  },
];
export const contactPath = (service: string) =>
  `/contacto?servicio=${encodeURIComponent(service)}#contacto`;
