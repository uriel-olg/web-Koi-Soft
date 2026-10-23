// Contrato de servicios compartido por la interfaz y el backend Express.
export const contactServices = [
  { value: "web", label: "Desarrollo web" },
  { value: "catalogo", label: "Catálogos y contenido" },
  { value: "automatizacion", label: "Integraciones y automatización" },
  { value: "mantenimiento-web", label: "Optimización y mantenimiento web" },
  { value: "pc", label: "Armado y actualización de PC" },
  { value: "software", label: "Software y configuración" },
  { value: "soporte", label: "Diagnóstico y mantenimiento IT" },
  { value: "asesoramiento", label: "Necesito asesoramiento" },
] as const;

export const serviceLabels: Record<string, string> = Object.fromEntries(
  contactServices.map(({ value, label }) => [value, label]),
);
