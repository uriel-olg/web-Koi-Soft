import { useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProjectVisual from "../components/ProjectVisual";
import { contactPath, projects } from "../data/site";
import type { ProjectCategory } from "../data/site";

const filters: { id: "all" | ProjectCategory; label: string; count: number }[] =
  [
    { id: "all", label: "Todos", count: 12 },
    { id: "software", label: "Software", count: 6 },
    { id: "it", label: "Soporte IT", count: 6 },
  ];
export default function Projects({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const visible = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );
  return (
    <section
      className="section projects-section"
      id="proyectos"
      aria-label="Ideas de proyectos"
    >
      <div className="container">
        <SectionHeading
          standalone={standalone}
          title={
            <>
              Ideas que podemos
              <br />
              hacer realidad.
            </>
          }
          description="12 posibilidades para tu negocio y tus equipos. Son ejemplos ilustrativos de lo que podemos crear; no trabajos realizados ni resultados de clientes."
        />
        <div className="project-controls">
          <div
            className="project-filters"
            role="group"
            aria-label="Filtrar proyectos"
          >
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
                <span>{item.count}</span>
              </button>
            ))}
          </div>
          <p role="status" className="project-count">
            {visible.length} propuestas para explorar
          </p>
        </div>
        <div className="projects-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.id}>
              <ProjectVisual project={project} />
              <div className="project-body">
                <div className="project-category">
                  <project.icon size={14} aria-hidden="true" />
                  {project.category === "software" ? "Software" : "Soporte IT"}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link
                  className="text-link"
                  to={contactPath(project.contactService)}
                >
                  Quiero algo así <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only">: {project.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
