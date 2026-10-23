import { Link } from "react-router";
import { ArrowUpRight, Check, Code2, Headphones } from "lucide-react";
import { benefits, contactPath, services } from "../data/site";
import SectionHeading from "../components/SectionHeading";

export default function Services({
  standalone = false
}: {
  standalone?: boolean
}) {
  return (
    <section
      className={`section services-section ${standalone ? "page-section" : ""}`}
      id="servicios"
      aria-label="Nuestros servicios"
    >
      <div className="container">
        <div className="services-layout">
          <SectionHeading
            standalone={standalone}
            title={
              <>
                Lo que necesitás,<br /><em>con un camino claro.</em>
              </>
            }
            description="Una presencia digital que te represente. La tranquilidad de que tus equipos funcionen. Te ayudamos con las dos."
          />
          {standalone ? (
            <div className="services-list">
              {services.map(({ icon: Icon, ...service }, index) => (
                <article
                  className="service-row service-detail"
                  key={service.title}
                  id={index === 0 ? "digital" : index === 3 ? "it" : undefined}
                >
                  <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <ul>
                      {service.items.map(item =>
                        <li key={item}>
                          <Check size={15} aria-hidden="true" />{item}
                        </li>
                      )}
                    </ul>
                    <Link
                      className="text-link"
                      to={contactPath(service.contactService)}
                    >
                      Consultar por este servicio <ArrowUpRight size={17} aria-hidden="true" />
                      <span className="sr-only">: {service.title}</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="services-list">
              <Link className="service-row" to="/servicios#digital">
                <Code2 size={24} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>Soluciones digitales</h3>
                  <p>
                    Sitios web, tiendas online, sistemas a medida y automatizaciones. Tu próximo paso, bien pensado.
                  </p>
                  <span>Desarrollo web · Sistemas · Integraciones</span>
                </div>
                <ArrowUpRight size={23} strokeWidth={1.4} aria-hidden="true" />
              </Link>
              <Link className="service-row" to="/servicios#it">
                <Headphones size={24} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>Soporte IT</h3>
                  <p>
                    Diagnóstico, armado, mantenimiento y actualización. Cuidamos las herramientas con las que trabajás.
                  </p>
                  <span>Equipos · Software · Redes</span>
                </div>
                <ArrowUpRight size={23} strokeWidth={1.4} aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, title, description }) =>
            <div key={title}>
              <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              <p>
                <strong>{title}</strong>
                <span>{description}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
