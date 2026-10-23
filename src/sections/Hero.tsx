import { Link } from "react-router";
import { m } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Headphones,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <m.div
          className="hero-copy"
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 id="hero-title">
            Tu próximo paso,
            <br />
            con la{" "}
            <span>
              tecnología
              <br className="desktop-break" /> de tu lado.
            </span>
          </h1>
          <p>
            Desarrollamos webs, sistemas y automatizaciones. Cuidamos tus
            equipos para que vos te enfoques en lo que importa.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/#contacto">
              Contanos tu idea <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" to="/#servicios">
              Explorar servicios <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-caption">
            <span aria-hidden="true" />
            Soluciones digitales + soporte IT. Un mismo equipo.
          </div>
        </m.div>
        <div className="hero-visual">
          <img
            className="hero-image"
            src="/images/koi-workspace.webp"
            alt="Notebook con una interfaz de gestión sobre un escritorio luminoso"
            width="1200"
            height="800"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-note hero-note-top">
            <Headphones aria-hidden="true" />
            <div>
              <strong>Personas detrás de la tecnología</strong>
              <span>Te acompañamos en cada paso.</span>
            </div>
          </div>
          <div className="hero-note hero-note-bottom">
            <CheckCircle2 aria-hidden="true" />
            <div>
              <strong>De la idea a la solución</strong>
              <span>Desarrollo y soporte, conectados.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
