import {
  Code2,
  Layers3,
  Workflow,
  Gauge,
  Cpu,
  Settings2,
  Wrench,
  MessageCircle,
  ScanSearch,
  PenTool,
  HeartHandshake,
} from "lucide-react";

export const navigation = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Nosotros", to: "/nosotros" },
];
export const contact = {
  email: "olguriel@gmail.com",
  // Celular de la versión anterior, con prefijo internacional argentino.
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "5492604230590",
};
export const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("¡Hola, KoiBite! Me gustaría consultar por un proyecto o soporte técnico.")}`;

export const services = [
  {
    id: "web",
    title: "Desarrollo web",
    area: "Digital",
    icon: Code2,
    description:
      "Una web que explique lo que hacés y ayude a tus clientes a dar el próximo paso.",
    includes: [
      "Sitios institucionales y landing pages",
      "Diseño adaptable a cada pantalla",
      "Formularios y canales de contacto",
    ],
  },
  {
    id: "catalogo",
    title: "Catálogos y contenido",
    area: "Digital",
    icon: Layers3,
    description:
      "Tus productos y servicios, ordenados y fáciles de encontrar. Con contenido que puedas actualizar.",
    includes: [
      "Catálogos digitales",
      "Contenido administrable con CMS",
      "Consultas directas por producto",
    ],
  },
  {
    id: "automatizacion",
    title: "Integraciones y automatización",
    area: "Digital",
    icon: Workflow,
    description:
      "Conectamos herramientas para simplificar tareas que hoy te llevan tiempo.",
    includes: [
      "Conexión entre servicios y formularios",
      "Flujos de trabajo a medida",
      "Evaluación de herramientas existentes",
    ],
  },
  {
    id: "mantenimiento-web",
    title: "Optimización y mantenimiento web",
    area: "Digital",
    icon: Gauge,
    description:
      "Revisamos lo que ya tenés y mejoramos su rendimiento, claridad y funcionamiento.",
    includes: [
      "Revisión técnica y visual",
      "Ajustes de rendimiento y responsive",
      "Actualizaciones y correcciones",
    ],
  },
  {
    id: "pc",
    title: "Armado y actualización de PC",
    area: "IT",
    icon: Cpu,
    description:
      "Un equipo pensado para lo que necesitás hacer, con una elección de componentes que tenga sentido.",
    includes: [
      "Selección de hardware según el uso",
      "Armado y actualización de componentes",
      "Puesta a punto y pruebas",
    ],
  },
  {
    id: "software",
    title: "Software y configuración",
    area: "IT",
    icon: Settings2,
    description:
      "Dejamos tus herramientas listas para que puedas concentrarte en tu trabajo.",
    includes: [
      "Instalación y configuración de software",
      "Drivers, periféricos y herramientas",
      "Organización del entorno de trabajo",
    ],
  },
  {
    id: "soporte",
    title: "Diagnóstico y mantenimiento IT",
    area: "IT",
    icon: Wrench,
    description:
      "Entendemos qué está fallando y te proponemos una solución proporcional al problema.",
    includes: [
      "Diagnóstico de equipos",
      "Mantenimiento y puesta a punto",
      "Asesoramiento y soporte puntual",
    ],
  },
] as const;

export { contactServices } from "./contact";
export const process = [
  {
    number: "01",
    title: "Te escuchamos",
    icon: MessageCircle,
    description:
      "Nos contás qué necesitás y cómo trabajás hoy. Sin tecnicismos de por medio.",
  },
  {
    number: "02",
    title: "Definimos el camino",
    icon: ScanSearch,
    description:
      "Acordamos una solución, su alcance y los pasos antes de empezar.",
  },
  {
    number: "03",
    title: "Lo hacemos realidad",
    icon: PenTool,
    description:
      "Diseñamos, desarrollamos o configuramos. Probamos y ajustamos con vos.",
  },
  {
    number: "04",
    title: "Te acompañamos",
    icon: HeartHandshake,
    description:
      "Te explicamos cómo usarlo y coordinamos el soporte que necesites.",
  },
];
export type Project = {
  id: string;
  title: string;
  area: "Digital" | "IT";
  type: "Concepto" | "Caso de uso";
  visual: "catalog" | "studio" | "workstation";
  description: string;
  problem: string;
  solution: string;
  tags: string[];
};
export const projects: Project[] = [
  {
    id: "catalogo-digital",
    title: "Un catálogo que invita a explorar.",
    area: "Digital",
    type: "Concepto",
    visual: "catalog",
    description:
      "Una propuesta de catálogo para un comercio: productos organizados y un camino claro hacia la consulta.",
    problem:
      "Mostrar una colección de productos sin depender de enviar fotos y precios uno por uno.",
    solution:
      "Un catálogo adaptable a móvil, con categorías y acceso a consultas. Esta interfaz es conceptual: no representa un trabajo entregado a un cliente.",
    tags: ["Catálogo digital", "Diseño responsive", "Consulta directa"],
  },
  {
    id: "web-profesional",
    title: "Tu trabajo, bien presentado.",
    area: "Digital",
    type: "Concepto",
    visual: "studio",
    description:
      "Una web de servicios para profesionales que necesitan explicar su propuesta y facilitar el contacto.",
    problem:
      "Presentar servicios, forma de trabajo y una propuesta de valor en un mismo lugar.",
    solution:
      "Una estructura breve con introducción, servicios y contacto. El ejemplo muestra una dirección de diseño, sin atribuir clientes ni resultados.",
    tags: ["Sitio de servicios", "Identidad visual", "Formulario"],
  },
  {
    id: "equipo-trabajo",
    title: "Un equipo listo para trabajar.",
    area: "IT",
    type: "Caso de uso",
    visual: "workstation",
    description:
      "Un ejemplo de cómo abordamos la configuración y puesta a punto de una PC de trabajo.",
    problem:
      "Un equipo que necesita una revisión para adaptarse a las tareas de todos los días.",
    solution:
      "Diagnóstico, elección de mejoras, configuración y pruebas según el caso. Es un ejemplo del servicio; no es un caso documentado de un cliente.",
    tags: ["Diagnóstico", "Configuración", "Mantenimiento"],
  },
];
export const faqs = [
  {
    question: "¿Tengo que saber exactamente qué necesito?",
    answer:
      "No. Podés empezar contándonos qué te gustaría mejorar o qué problema tenés. Te ayudamos a identificar la solución y a definir por dónde empezar.",
  },
  {
    question: "¿Pueden mejorar una web que ya existe?",
    answer:
      "Sí. Primero revisamos su estado, las herramientas que usa y tu objetivo. A partir de eso proponemos ajustes, mantenimiento o una nueva versión cuando tenga sentido.",
  },
  {
    question: "¿Cómo se define el presupuesto?",
    answer:
      "Según el alcance, las funcionalidades y el estado actual de tu web o equipo. Antes de avanzar, acordamos qué incluye el trabajo y cuáles son los próximos pasos.",
  },
  {
    question: "¿Puedo consultar solo por soporte técnico?",
    answer:
      "Sí. También atendemos consultas puntuales de configuración, diagnóstico, mantenimiento y actualización de equipos. La modalidad se coordina según el trabajo.",
  },
];
