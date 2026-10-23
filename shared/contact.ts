import { z } from "zod";

export const contactServices = [
  "Desarrollo web",
  "Landing page",
  "Catálogo digital",
  "E-commerce",
  "Sistemas a medida",
  "Automatizaciones",
  "Optimización / mantenimiento web",
  "Armado o actualización de PC",
  "Windows / software / configuración",
  "Diagnóstico / mantenimiento IT",
  "Redes y conectividad",
  "Otro / Necesito asesoramiento",
] as const;

// Compatibilidad con enlaces y formularios de la versión anterior.
export const legacyContactServices: Record<string, string> = {
  web: "Desarrollo web",
  catalogo: "Catálogo digital",
  automatizacion: "Automatizaciones",
  "mantenimiento-web": "Optimización / mantenimiento web",
  pc: "Armado o actualización de PC",
  software: "Windows / software / configuración",
  soporte: "Diagnóstico / mantenimiento IT",
  asesoramiento: "Otro / Necesito asesoramiento",
};
export const normalizeContactService = (value: string): string =>
  Object.hasOwn(legacyContactServices, value)
    ? legacyContactServices[value]
    : value;

export const contactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "Ingresá al menos 2 caracteres.")
    .max(100, "Máximo 100 caracteres."),
  email: z
    .string()
    .trim()
    .email("Ingresá un email válido.")
    .max(254, "Máximo 254 caracteres."),
  empresa: z.string().trim().max(150, "Máximo 150 caracteres."),
  servicio: z
    .string()
    .transform(normalizeContactService)
    .refine(
      (value) => contactServices.some((service) => service === value),
      "Elegí un servicio.",
    ),
  presupuesto: z.enum(["", "menos-500", "500-1500", "mas-1500"]),
  mensaje: z
    .string()
    .trim()
    .min(10, "Contanos un poco más: al menos 10 caracteres.")
    .max(5000, "Máximo 5000 caracteres."),
});

export type ContactData = z.infer<typeof contactSchema>;
