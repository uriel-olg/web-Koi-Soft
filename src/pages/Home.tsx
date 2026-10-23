import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  MonitorCog,
} from "lucide-react";
import { Link } from "react-router";
import { projects } from "../data/site";
import {
  ButtonLink,
  CheckList,
  ClosingCTA,
  FAQSection,
  ProcessSection,
  ProjectArtwork,
  ProjectCard,
  SectionHeading,
} from "../components/ui";
export default function Home() {
  return (
    <>
      <section className="hero container" id="inicio">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            DIGITAL + IT, SIN COMPLICACIONES
          </p>
          <h1>
            Desarrollo web
            <br />y soporte IT para
            <br />
            <span className="accent">tu negocio.</span>
          </h1>
          <p className="hero-description">
            Creamos tu presencia online y resolvemos los problemas técnicos que
            frenan tu trabajo.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/contacto">Solicitar presupuesto</ButtonLink>
            <Link className="hero-secondary" to="/proyectos">
              Ver proyectos <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-reassurance">
            <span className="status-dot" />
            No hace falta hablar en técnico.
          </p>
        </div>
        <div className="hero-showcase">
          <div className="showcase-caption">
            <span>DE LA IDEA A LA PANTALLA</span>
            <span>01 / DIGITAL</span>
          </div>
          <div className="browser-frame">
            <div className="browser-bar">
              <div className="browser-dots">
                <i />
                <i />
                <i />
              </div>
              <span>Una posibilidad para tu próxima web</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </div>
            <ProjectArtwork hero />
          </div>
          <div className="showcase-bottom">
            <span className="concept-label">Concepto de interfaz</span>
            <Link to="/proyectos#catalogo-digital">
              Diseño que se entiende{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="showcase-sticker" aria-hidden="true">
            <Code2 size={19} />
            <span>
              Pensado para personas.
              <br />
              <strong>Construido para funcionar.</strong>
            </span>
          </div>
        </div>
        <a className="hero-scroll" href="#soluciones">
          EXPLORÁ LO QUE PODEMOS HACER{" "}
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </section>
      <section className="section services-overview" id="soluciones">
        <div className="container">
          <SectionHeading
            eyebrow="DOS ÁREAS. UNA MISMA FORMA DE TRABAJAR."
            title={
              <>
                Tu web y tus equipos.
                <br />
                Todo tiene que funcionar.
              </>
            }
          />
          <div className="service-area-grid">
            <article className="service-area">
              <div className="service-area-top">
                <span className="area-icon area-digital">
                  <Code2 size={26} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="area-number">01 / DIGITAL</span>
              </div>
              <h3>
                Tu negocio,
                <br />
                también online.
              </h3>
              <p>
                Una presencia digital clara, útil y a la altura de lo que hacés.
              </p>
              <CheckList
                items={[
                  "Sitios web y landing pages",
                  "Catálogos y contenido administrable",
                  "Integraciones y optimización",
                ]}
              />
              <Link to="/servicios#digital" className="area-link">
                Soluciones digitales{" "}
                <ArrowUpRight size={23} aria-hidden="true" />
              </Link>
            </article>
            <article className="service-area service-area-it">
              <div className="service-area-top">
                <span className="area-icon area-it">
                  <MonitorCog size={26} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="area-number">02 / SOPORTE IT</span>
              </div>
              <h3>
                Equipos listos.
                <br />
                Menos obstáculos.
              </h3>
              <p>
                El soporte que necesitás para seguir trabajando con
                tranquilidad.
              </p>
              <CheckList
                items={[
                  "Armado y actualización de PC",
                  "Software y configuración",
                  "Diagnóstico y mantenimiento",
                ]}
              />
              <Link to="/servicios#it" className="area-link">
                Encontrar una solución{" "}
                <ArrowUpRight size={23} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="section featured-section">
        <div className="container">
          <SectionHeading
            eyebrow="DEL CONCEPTO A LO CONCRETO"
            title={
              <>
                Así pueden verse
                <br />
                tus próximas ideas.
              </>
            }
            action={
              <Link to="/proyectos" className="text-link">
                Explorar propuestas{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            }
          >
            Ejemplos de diseño para mostrar posibilidades. Son conceptos, no
            casos de clientes.
          </SectionHeading>
          <div className="project-grid">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section className="benefits-section">
        <div className="container benefits-layout">
          <div>
            <p className="eyebrow">MENOS VUELTAS. MÁS CLARIDAD.</p>
            <h2>
              La tecnología
              <br />
              debería hacerte
              <br />
              <span>las cosas más fáciles.</span>
            </h2>
            <Link to="/nosotros" className="text-link">
              Conocé cómo pensamos <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="benefits-list">
            {[
              {
                number: "01",
                title: "Una solución para tu realidad.",
                text: "Escuchamos primero. Elegimos herramientas según tu necesidad, no al revés.",
              },
              {
                number: "02",
                title: "Hablamos el mismo idioma.",
                text: "Alcance definido, decisiones explicadas y un próximo paso claro. Sin palabras de más.",
              },
              {
                number: "03",
                title: "El trabajo no termina al entregar.",
                text: "Te mostramos cómo usarlo y acordamos el acompañamiento que necesites.",
              },
            ].map((benefit) => (
              <article key={benefit.number}>
                <span>{benefit.number}</span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      <FAQSection />
      <ClosingCTA />
    </>
  );
}
