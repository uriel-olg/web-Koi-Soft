import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../data/site";
import { ClosingCTA, PageIntro, ProjectCard } from "../components/ui";

const filters = ["Todos", "Digital", "IT"] as const;
export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const visible = projects.filter(
    (project) => filter === "Todos" || project.area === filter,
  );
  return (
    <>
      <PageIntro
        eyebrow="IDEAS QUE SE PUEDEN EXPLORAR"
        title={
          <>
            Menos imaginar.
            <br />
            <span className="accent">Más visualizar.</span>
          </>
        }
      >
        Un vistazo a cómo abordamos distintas necesidades. Cada ejemplo está
        identificado para que sepas qué estás viendo.
      </PageIntro>
      <section className="container projects-page">
        <div className="projects-toolbar">
          <div
            className="filter-list"
            role="group"
            aria-label="Filtrar propuestas por área"
          >
            {filters.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item === "IT" ? "Soporte IT" : item}
              </button>
            ))}
          </div>
          <p aria-live="polite">
            {visible.length} {visible.length === 1 ? "propuesta" : "propuestas"}
          </p>
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} detail />
          ))}
        </div>
        <aside className="concept-note">
          <span className="eyebrow">UN POCO DE CONTEXTO</span>
          <p>
            Los conceptos muestran direcciones de diseño. Los casos de uso
            explican un servicio posible. Estos ejemplos no representan
            proyectos entregados ni resultados de clientes.
          </p>
          <Link to="/contacto" className="text-link">
            Hablemos de tu caso <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </aside>
      </section>
      <ClosingCTA />
    </>
  );
}
