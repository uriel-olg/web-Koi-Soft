import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { navigation } from "../data/site";
import { Brand } from "./ui";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function onOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="navbar container">
        <div onClick={() => setOpen(false)}>
          <Brand />
        </div>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="button button-primary nav-cta" to="/contacto">
          Hablemos <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </div>
      {open && (
        <nav
          id="menu-movil"
          className="mobile-nav"
          aria-label="Navegación móvil"
        >
          {navigation.map(({ to, label }, index) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
            >
              <span className="nav-index">0{index + 1}</span>
              {label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </NavLink>
          ))}
          <Link
            to="/contacto"
            className="button button-primary"
            onClick={() => setOpen(false)}
          >
            Hablemos de tu proyecto{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <p>No hace falta hablar en técnico.</p>
        </nav>
      )}
    </header>
  );
};
