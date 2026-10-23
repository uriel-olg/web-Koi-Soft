import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToLocation() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const aliases: Record<string, string> = {
      hero: "inicio",
      soluciones: "servicios",
      digital: "servicios",
      it: "servicios",
    };
    let id = "";
    try {
      id = decodeURIComponent(hash.slice(1)).toLowerCase();
    } catch {
      /* Una URL mal formada no debe romper la navegación. */
    }
    const frame = requestAnimationFrame(() => {
      const target = id
        ? document.getElementById(id) ||
          document.getElementById(aliases[id] || id)
        : null;
      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.getElementById("contenido")?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Soluciones digitales y soporte IT",
      "/servicios": "Servicios digitales y soporte IT",
      "/proyectos": "Propuestas y proyectos",
      "/nosotros": "Sobre nosotros",
      "/contacto": "Hablemos de tu proyecto",
    };
    document.title = `${titles[pathname] || "Página no encontrada"} · KoiBite`;
  }, [pathname]);
  return null;
}
