import { CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import { processSteps } from "../data/site";

export default function About({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section
      className="section about-section"
      id="nosotros"
      aria-label="Sobre KoiBite"
    >
      <div className="container">
        <div className="about-grid">
          <div>
            <Heading>
              La tecnología cambia.
              <br />
              El compromiso queda.
            </Heading>
            <p>
              En KoiBite unimos desarrollo y soporte para acompañar a personas,
              emprendimientos y negocios. Una web es parte de tu tecnología; los
              equipos que usás todos los días, también.
            </p>
            <p>
              Escuchamos primero. Después buscamos una solución que tenga
              sentido para vos, con una mirada completa y un mismo punto de
              contacto.
            </p>
            <div className="about-signature">
              <img src="/KoiBite-log.svg" alt="" width="40" height="40" />
              <span>Tecnología que fluye con vos.</span>
            </div>
          </div>
          <div className="about-values">
            {[
              {
                icon: CheckCircle2,
                title: "Calidad en los detalles",
                copy: "Soluciones claras, útiles y fáciles de mantener. Cuidamos lo que se ve y lo que hay detrás.",
              },
              {
                icon: Clock3,
                title: "Comunicación y tiempos claros",
                copy: "Definimos el alcance y los plazos desde el principio. Sabés en qué estamos y cuál es el siguiente paso.",
              },
              {
                icon: ShieldCheck,
                title: "Honestidad, siempre",
                copy: "Recomendamos lo que necesitás y explicamos por qué. Sin tecnicismos innecesarios ni promesas vacías.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon size={25} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="process">
          <div className="process-heading">
            <h2>
              Primero, entender.
              <br />
              Después, resolver.
            </h2>
            <p>Una forma de trabajar simple, de principio a fin.</p>
          </div>
          <ol>
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <span className="step-number">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
