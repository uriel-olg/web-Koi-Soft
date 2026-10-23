import { Link } from "react-router";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Brand from "./Brand";
import { contactEmail, navigation, whatsappUrl } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Brand />
            <p>Soluciones digitales. Soporte humano.</p>
          </div>
          <nav aria-label="Navegación del pie" className="footer-links">
            {navigation.slice(1).map((link) => (
              <Link key={link.id} to={link.path}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="footer-contact">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} aria-hidden="true" /> WhatsApp{" "}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href={`mailto:${contactEmail}`}>
              <Mail size={17} aria-hidden="true" /> {contactEmail}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} KoiBite</span>
          <span>Hecho con intención. Pensado para personas.</span>
          <Link to="/#inicio">Volver arriba ↑</Link>
        </div>
      </div>
    </footer>
  );
}
