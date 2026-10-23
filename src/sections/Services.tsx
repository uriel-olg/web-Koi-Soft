import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { benefits, contactPath, services } from "../data/site";
import SectionHeading from "../components/SectionHeading";

export default function Services({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  return (
    <section
      className="section services-section"
      id="servicios"
      aria-label="Nuestros servicios"
    >
      <div className="container">
        <SectionHeading
          standalone={standalone}
          title={
            <>
              Todo lo que necesitás.
              <br />
              Sin complicarte.
            </>
          }
          description="Una web que te represente. Procesos que fluyan. Equipos que respondan. Encontrá tu próximo paso."
        />
        <div className="services-grid">
          {services.map(({ icon: Icon, ...service }) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon">
                <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <Check size={14} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                className="text-link"
                to={contactPath(service.contactService)}
              >
                Hablemos <ArrowRight size={16} aria-hidden="true" />
                <span className="sr-only"> sobre {service.title}</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
              <p>
                <strong>{title}</strong>
                <span>{description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
