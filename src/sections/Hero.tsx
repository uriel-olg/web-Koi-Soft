import { Link } from "react-router";
import { m } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container">
        <m.div
          className="hero-copy"
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 id="hero-title">
            Diseño web y soporte IT.
            <em>Hechos para tu negocio.</em>
          </h1>
          <p>
            Una web que te represente. Equipos que te dejen trabajar.
            <br className="desktop-break" /> Un mismo lugar para resolverlo.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/contacto">
              Contanos qué necesitás <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="text-link hero-secondary" to="/proyectos">
              Ver propuestas <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </m.div>
        <div className="hero-showcase">
          <div className="showcase-workspace" aria-hidden="true">
            <img
              src="/images/koi-workspace.webp"
              alt=""
              width="1200"
              height="800"
              decoding="async"
            />
            <div>
              <span>Tu espacio de trabajo</span>
              <strong>Listo para lo que viene.</strong>
            </div>
          </div>
          <Link
            to="/proyectos"
            className="showcase-main"
            aria-label="Explorar propuestas de desarrollo web. Vista de una interfaz conceptual."
          >
            <div className="showcase-browser" aria-hidden="true">
              <div className="showcase-toolbar">
                <span className="browser-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>Una posibilidad para tu próxima web</span>
                <ArrowUpRight size={13} />
              </div>
              <div className="showcase-site">
                <div className="showcase-nav">
                  <span className="showcase-wordmark">
                    estudio<span>.</span>
                  </span>
                  <span>Servicios &nbsp; Propuestas &nbsp; Contacto</span>
                </div>
                <div className="showcase-content">
                  <div>
                    <strong>
                      Tu negocio,<br />en primer plano.
                    </strong>
                    <p>
                      Una web para contar lo que hacés<br />y facilitar el próximo paso.
                    </p>
                    <span className="showcase-button">
                      Conocer servicios <ArrowUpRight size={13} />
                    </span>
                  </div>
                  <div className="type-specimen">
                    <span>
                      Aa<span>.</span>
                    </span>
                    <span>Diseño con intención</span>
                    <div className="specimen-swatches">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
                <div className="showcase-site-footer">
                  <span>Diseño claro</span>
                  <span>Contenido útil</span>
                  <span>Contacto simple</span>
                </div>
              </div>
            </div>
            <span className="showcase-caption">
              Concepto de interfaz <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          </Link>
          <div className="showcase-manifesto" aria-hidden="true">
            <ArrowUpRight size={27} strokeWidth={1.3} />
            <p>
              Menos vueltas.<br /><em>Más claridad.</em>
            </p>
            <span>La forma Koi.</span>
          </div>
        </div>
        <div className="hero-bottom">
          <p>Diseño y tecnología, con un trato cercano.</p>
          <Link to="/#servicios">
            Conocé lo que hacemos <ArrowDown size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
