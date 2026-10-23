import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
const titles: Record<string, string> = {
  "/": "Desarrollo web y soporte IT",
  "/servicios": "Servicios",
  "/proyectos": "Proyectos y conceptos",
  "/nosotros": "Nosotros",
  "/contacto": "Contacto",
};
export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    document.title = `${titles[pathname] || "Página no encontrada"} · KoiBite`;
    const frame = requestAnimationFrame(() => {
      let target: HTMLElement | null = null;
      if (hash) {
        try {
          target = document.getElementById(decodeURIComponent(hash.slice(1)));
        } catch {
          /* Mantener utilizable una URL mal formada. */
        }
      }
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "instant" });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.getElementById("contenido")?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
