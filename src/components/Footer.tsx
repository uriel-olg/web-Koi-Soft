import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { contact, navigation, whatsappUrl } from "../data/site";
import { Brand } from "./ui";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
            <p>
              Desarrollo web y soporte IT.
              <br />
              Tecnología con sentido, de principio a fin.
            </p>
          </div>
          <nav aria-label="Navegación del pie de página">
            <span className="footer-label">EXPLORAR</span>
            {navigation.slice(1).map(({ to, label }) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
            <Link to="/#proceso">Cómo trabajamos</Link>
          </nav>
          <div className="footer-contact">
            <span className="footer-label">EMPECEMOS UNA CONVERSACIÓN</span>
            <a href={`mailto:${contact.email}`}>
              {contact.email}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Escribinos por WhatsApp
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <Link to="/contacto">
              Ir al formulario
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} KoiBite. Todos los derechos reservados.
          </span>
          <span>Ideas claras. Soluciones que funcionan.</span>
          <a href="#contenido">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}
