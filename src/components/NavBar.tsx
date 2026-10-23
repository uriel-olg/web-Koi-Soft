import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
import { navigation, whatsappUrl } from "../data/site";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const location = useLocation();
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    const media = matchMedia("(min-width: 1100px)");
    const resize = () => {
      if (media.matches) setMenuOpen(false);
    };
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [menuOpen]);
  return (
    <header className="site-header" ref={header}>
      <nav className="container nav-bar" aria-label="Navegación principal">
        <div onClick={() => setMenuOpen(false)}>
          <Brand />
        </div>
        <div
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          id="main-navigation"
        >
          {navigation.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.id}
                to={link.path}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            className="mobile-contact"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos por WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <a
          className="button button-small nav-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablemos de tu idea <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}
