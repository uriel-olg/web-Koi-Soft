import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { services } from "../data/site";
import {
  CheckList,
  ClosingCTA,
  FAQSection,
  PageIntro,
  ProcessSection,
} from "../components/ui";

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="LO QUE PODEMOS HACER POR VOS"
        title={
          <>
            Una solución para cada
            <br />
            <span className="accent">próximo paso.</span>
          </>
        }
      >
        Desde tu primera web hasta el equipo con el que trabajás. Elegimos el
        camino que tiene sentido para tu necesidad.
      </PageIntro>
      <div className="container service-jump-links">
        <a href="#digital">
          01 / Soluciones digitales{" "}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <a href="#it">
          02 / Soporte IT <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      {(["Digital", "IT"] as const).map((area) => (
        <section
          key={area}
          id={area === "Digital" ? "digital" : "it"}
          className={`section service-category ${area === "IT" ? "service-category-it" : ""}`}
        >
          <div className="container">
            <div className="category-intro">
              <div>
                <p className="eyebrow">
                  {area === "Digital"
                    ? "01 / SOLUCIONES DIGITALES"
                    : "02 / SOPORTE IT"}
                </p>
                <h2>
                  {area === "Digital" ? (
                    <>
                      Tu presencia online,
                      <br />
                      con una intención clara.
                    </>
                  ) : (
                    <>
                      Herramientas listas.
                      <br />
                      Vos, a lo tuyo.
                    </>
                  )}
                </h2>
              </div>
              <p>
                {area === "Digital"
                  ? "Diseño y desarrollo para presentar tu negocio, organizar contenido y conectar tus herramientas."
                  : "Configuración, mantenimiento y asesoramiento para que tus equipos acompañen tu forma de trabajar."}
              </p>
            </div>
            <div className="service-detail-grid">
              {services
                .filter((service) => service.area === area)
                .map((service) => (
                  <article className="service-detail-card" key={service.id}>
                    <service.icon
                      size={28}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <CheckList items={service.includes} />
                    <Link
                      to={`/contacto?servicio=${service.id}`}
                      className="text-link"
                    >
                      Consultar por este servicio{" "}
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}
      <div className="container service-note">
        <span className="status-dot" />
        <p>
          ¿Tu necesidad combina las dos áreas?{" "}
          <Link to="/contacto?servicio=asesoramiento">
            Contanos qué querés resolver.
          </Link>
        </p>
      </div>
      <ProcessSection />
      <FAQSection />
      <ClosingCTA />
    </>
  );
}
