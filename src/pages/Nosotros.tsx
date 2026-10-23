import { ArrowUpRight, Code2, MonitorCog } from "lucide-react";
import { Link } from "react-router";
import { ClosingCTA, PageIntro, ProcessSection } from "../components/ui";

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="LA FORMA KOIBITE"
        title={
          <>
            Primero las personas.
            <br />
            <span className="accent">Después, la tecnología.</span>
          </>
        }
      >
        Creemos en soluciones que se entienden, se pueden usar y tienen sentido
        para quien las necesita.
      </PageIntro>
      <section className="container about-story">
        <div className="about-manifesto">
          <span className="eyebrow">NUESTRO PUNTO DE PARTIDA</span>
          <p>
            Una buena solución
            <br />
            empieza con una
            <br />
            <em>buena pregunta.</em>
          </p>
          <span className="manifesto-mark" aria-hidden="true">
            k.
          </span>
        </div>
        <div className="about-story-copy">
          <p className="eyebrow">DE QUÉ SE TRATA</p>
          <h2>
            Entender lo que necesitás.
            <br />
            Resolverlo con criterio.
          </h2>
          <p>
            KoiBite conecta desarrollo web y soporte IT. Trabajamos sobre la
            presencia digital de tu negocio y sobre las herramientas que usás
            todos los días.
          </p>
          <p>
            Antes de elegir una tecnología, buscamos entender el problema. Qué
            hacés, qué te está frenando y qué querés lograr. A partir de ahí,
            definimos una solución y una forma clara de avanzar.
          </p>
          <p>
            No hace falta que llegues con un pedido técnico. Una idea o una
            dificultad concreta son un buen comienzo.
          </p>
          <Link to="/contacto" className="text-link">
            Empecemos por una charla{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="section about-principles">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CRITERIOS QUE NOS GUÍAN</p>
              <h2>
                La forma de hacer
                <br />
                también importa.
              </h2>
            </div>
          </div>
          <div className="principles-grid">
            {[
              {
                n: "01",
                title: "Entender antes de proponer.",
                text: "La solución tiene que responder a tu contexto, no a una lista de herramientas de moda.",
              },
              {
                n: "02",
                title: "Claridad en cada paso.",
                text: "Qué incluye el trabajo, por qué tomamos una decisión y qué sigue. Todo explicado de forma simple.",
              },
              {
                n: "03",
                title: "Pensar en lo que viene.",
                text: "Buscamos que puedas mantener, usar y mejorar lo que construimos. La entrega es parte del camino.",
              },
            ].map((item) => (
              <article key={item.n}>
                <span className="step-number">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container about-areas">
        <div>
          <Code2 size={28} aria-hidden="true" />
          <h3>La parte digital.</h3>
          <p>
            Webs, catálogos, contenido e integraciones que presentan lo que
            hacés y simplifican tareas.
          </p>
        </div>
        <div>
          <MonitorCog size={28} aria-hidden="true" />
          <h3>La base para trabajar.</h3>
          <p>
            Equipos, software y soporte técnico para que las herramientas estén
            de tu lado.
          </p>
        </div>
      </section>
      <ProcessSection />
      <ClosingCTA />
    </>
  );
}
