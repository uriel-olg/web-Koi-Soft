import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router";
import { faqs, process } from "../data/site";
import type { Project } from "../data/site";

export function ButtonLink({
  to,
  children,
  secondary = false,
  className = "",
}: {
  to: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="KoiBite, inicio">
      <img src="/KoiBite-log.svg" alt="" width="36" height="36" />
      <span>
        KoiBite<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {children && <p className="section-description">{children}</p>}
      </div>
      {action}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-description">{children}</p>
    </section>
  );
}
export function ProjectArtwork({
  variant = "catalog",
  hero = false,
}: {
  variant?: Project["visual"];
  hero?: boolean;
}) {
  if (variant === "workstation")
    return (
      <div className="artwork artwork-workstation" aria-hidden="true">
        <div className="computer-monitor">
          <span className="monitor-mark">
            k<span>.</span>
          </span>
          <div className="monitor-line" />
          <div className="monitor-stand" />
        </div>
        <div className="computer-tower">
          <span />
          <span />
          <span />
        </div>
        <span className="artwork-note">CONFIGURAR. PROBAR. TRABAJAR.</span>
      </div>
    );
  if (variant === "studio")
    return (
      <div className="artwork artwork-studio" aria-hidden="true">
        <div className="studio-top">
          <span>estudio / independiente</span>
          <ArrowUpRight size={18} />
        </div>
        <div className="studio-title">
          Ideas claras.
          <br />
          Diseño con
          <br />
          <em>intención.</em>
        </div>
        <span className="studio-star">✳</span>
        <div className="studio-bottom">
          <span>ESTRATEGIA · DISEÑO · DESARROLLO</span>
          <span>01—03</span>
        </div>
      </div>
    );
  return (
    <div
      className={`artwork artwork-catalog ${hero ? "artwork-hero" : ""}`}
      aria-hidden="true"
    >
      <div className="catalog-nav">
        <span className="catalog-brand">
          casa<span>.</span>
        </span>
        <span>Objetos para habitar</span>
        <ArrowUpRight size={16} />
      </div>
      <div className="catalog-content">
        <div className="catalog-copy">
          <span className="catalog-eyebrow">LO SIMPLE, BIEN HECHO.</span>
          <span className="catalog-title">
            Un espacio.
            <br />
            Tu forma
            <br />
            de vivir.
          </span>
          <span className="catalog-link">
            Explorar colección <ArrowRight size={12} />
          </span>
        </div>
        <div className="still-life">
          <div className="still-life-arch" />
          <div className="vase">
            <i />
          </div>
          <div className="bowl" />
          <div className="still-life-floor" />
        </div>
      </div>
      <div className="catalog-bottom">
        <span>Diseño cotidiano</span>
        <span>Materiales con carácter</span>
        <span>Hecho para durar</span>
      </div>
    </div>
  );
}
export function ProjectCard({
  project,
  detail = false,
}: {
  project: Project;
  detail?: boolean;
}) {
  return (
    <article className="project-card" id={project.id}>
      <div className="project-visual">
        <ProjectArtwork variant={project.visual} />
        <span className="project-type">{project.type}</span>
      </div>
      <div className="project-copy">
        <div className="project-category">
          <span>
            {project.area === "IT" ? "SOPORTE IT" : "DISEÑO + DESARROLLO"}
          </span>
          <span>
            /
            {project.visual === "catalog"
              ? "01"
              : project.visual === "studio"
                ? "02"
                : "03"}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {detail ? (
          <details className="project-detail">
            <summary>
              Conocer la propuesta <ArrowDown size={16} aria-hidden="true" />
            </summary>
            <div>
              <h4>La necesidad</h4>
              <p>{project.problem}</p>
              <h4>La propuesta</h4>
              <p>{project.solution}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link
                className="text-link"
                to={`/contacto?servicio=${project.area === "IT" ? "soporte" : "web"}`}
              >
                Consultar por algo similar{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </details>
        ) : (
          <Link to={`/proyectos#${project.id}`} className="text-link">
            Explorar concepto <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
export function ProcessSection() {
  return (
    <section id="proceso" className="section process-section">
      <div className="container">
        <SectionHeading
          eyebrow="UN CAMINO SIMPLE"
          title={
            <>
              Del primer mensaje
              <br />a una solución concreta.
            </>
          }
        >
          Sabés qué estamos haciendo y cuál es el próximo paso.
        </SectionHeading>
        <ol className="process-grid">
          {process.map((step) => (
            <li key={step.number}>
              <div className="process-step-top">
                <span className="step-number">{step.number}</span>
                <step.icon size={22} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function FAQSection() {
  return (
    <section className="section">
      <div className="container faq-layout">
        <div>
          <p className="eyebrow">ANTES DE EMPEZAR</p>
          <h2>
            Algunas dudas.
            <br />
            <span className="muted">Respuestas simples.</span>
          </h2>
          <Link to="/contacto" className="text-link">
            Hacer otra consulta <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ClosingCTA() {
  return (
    <section className="closing-section container">
      <div className="closing-card">
        <div>
          <p className="eyebrow">EL PRIMER PASO ES UNA CHARLA</p>
          <h2>
            ¿Qué necesitás
            <br />
            resolver?
          </h2>
          <p>Una idea, una web o un equipo. Empecemos por ahí.</p>
        </div>
        <ButtonLink to="/contacto">Contanos tu proyecto</ButtonLink>
        <span className="closing-symbol" aria-hidden="true">
          ↗
        </span>
      </div>
    </section>
  );
}
export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
