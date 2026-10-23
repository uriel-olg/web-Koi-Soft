import { z } from "zod";
import { serviceLabels } from "../data/contact.js";
export { serviceLabels } from "../data/contact.js";

export const contactoSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre (al menos 2 caracteres).")
    .max(100, "Usá hasta 100 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "Ingresá tu email.")
    .email("Revisá el formato del email.")
    .max(254),
  empresa: z.string().trim().max(150, "Usá hasta 150 caracteres."),
  servicio: z
    .string()
    .refine(
      (value) => Object.hasOwn(serviceLabels, value),
      "Elegí un servicio o la opción de asesoramiento.",
    ),
  presupuesto: z
    .string()
    .refine(
      (value) => ["", "menos-500", "500-1500", "mas-1500"].includes(value),
      "Elegí una opción válida.",
    ),
  mensaje: z
    .string()
    .trim()
    .min(10, "Contanos un poco más (al menos 10 caracteres).")
    .max(5000, "Usá hasta 5000 caracteres."),
});
export type DatosContacto = z.infer<typeof contactoSchema>;
