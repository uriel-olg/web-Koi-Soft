import {
  ArrowRight,
  Check,
  Code2,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const valores = [
  {
    icono: Lightbulb,
    titulo: "Pensamos antes de desarrollar",
    descripcion:
      "Primero entendemos el problema, los objetivos y las necesidades del negocio. Después definimos la solución.",
  },
  {
    icono: Code2,
    titulo: "Tecnología con propósito",
    descripcion:
      "Desarrollamos soluciones modernas, funcionales y escalables, buscando que la tecnología realmente aporte valor.",
  },
  {
    icono: Users,
    titulo: "Comunicación clara",
    descripcion:
      "Creemos que un buen proyecto también necesita conversaciones simples, seguimiento constante y objetivos claros.",
  },
  {
    icono: Rocket,
    titulo: "Pensamos en crecimiento",
    descripcion:
      "Construimos pensando en el presente, pero dejando una base preparada para las próximas etapas del proyecto.",
  },
];

const proceso = [
  {
    numero: "01",
    titulo: "Entendemos",
    descripcion:
      "Conocemos tu negocio, tus objetivos y el problema que querés resolver.",
  },
  {
    numero: "02",
    titulo: "Diseñamos",
    descripcion:
      "Convertimos la idea en una propuesta clara, funcional y alineada a tus necesidades.",
  },
  {
    numero: "03",
    titulo: "Desarrollamos",
    descripcion:
      "Construimos la solución cuidando tanto la experiencia como la parte técnica.",
  },
  {
    numero: "04",
    titulo: "Evolucionamos",
    descripcion:
      "Una vez lanzado, el proyecto puede seguir creciendo y adaptándose a nuevas necesidades.",
  },
];

const tecnologias = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "APIs",
];

const container = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12";

export default function Nosotros() {
  return (
    <main
      id="Nosotros"
      className="min-h-screen overflow-hidden bg-[#080F1E] text-white"
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden">
        {/* Decoraciones */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[#FA713A]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -left-32 top-72 h-80 w-80 rounded-full bg-[#FA713A]/5 blur-3xl"
        />

        <div className={`${container} relative py-20 sm:py-24 lg:py-32`}>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* TEXTO */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FA713A]/30 bg-[#FA713A]/10 px-4 py-2 text-xs font-semibold text-[#FA713A]">
                <Sparkles size={14} aria-hidden="true" />
                Conocé quiénes somos
              </span>

              <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Creamos soluciones
                <span className="block bg-gradient-to-r from-[#FA713A] to-[#FFB297] bg-clip-text text-transparent">
                  digitales con propósito.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Somos un equipo enfocado en transformar ideas, necesidades y
                desafíos en experiencias digitales útiles, modernas y
                pensadas para crecer.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#historia"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#FA713A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E85F2D] hover:shadow-[#FA713A]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA713A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080F1E]"
                >
                  Conocé nuestra historia

                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#valores"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#26344A] bg-[#101A2B] px-6 py-3.5 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-[#FA713A]/40 hover:bg-[#162338] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA713A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080F1E]"
                >
                  Lo que nos representa
                </a>
              </div>
            </div>

            {/* CARD VISUAL */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2rem] bg-[#FA713A]/5 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#26344A] bg-[#101A2B] p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="flex items-center justify-between border-b border-[#26344A] pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
                      Nuestra forma de pensar
                    </p>

                    <h2 className="mt-2 text-xl font-semibold text-white">
                      Tecnología + estrategia
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-[#FA713A]">
                    <Target size={20} />
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    "Entender antes de construir",
                    "Diseñar pensando en las personas",
                    "Desarrollar con una base sólida",
                    "Mejorar continuamente",
                  ].map((texto) => (
                    <div
                      key={texto}
                      className="flex items-center gap-3 rounded-xl border border-[#26344A] bg-[#0B1424] px-4 py-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FA713A]/10 text-[#FA713A]">
                        <Check size={16} />
                      </span>

                      <span className="text-sm text-slate-300">
                        {texto}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-[#FA713A]/20 bg-gradient-to-br from-[#FA713A]/10 to-transparent p-5">
                  <p className="text-sm leading-7 text-slate-300">
                    No se trata solamente de hacer una página o desarrollar
                    una aplicación. Se trata de encontrar una solución que
                    tenga sentido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HISTORIA
      ========================================================= */}
      <section
        id="historia"
        className="border-y border-[#26344A] bg-[#071024]"
      >
        <div className={`${container} py-16 lg:py-24`}>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
                Nuestra historia
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Una idea empieza pequeña.
                <span className="block text-slate-400">
                  Después empieza a crecer.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
              <p>
                Nacimos con una idea simple: ayudar a negocios y proyectos a
                aprovechar la tecnología sin hacer que el proceso sea
                complicado.
              </p>

              <p>
                Creemos que cada proyecto tiene necesidades diferentes. Por
                eso buscamos evitar soluciones genéricas y trabajar sobre
                objetivos concretos, priorizando lo que realmente importa.
              </p>

              <p>
                Desde una landing page hasta una aplicación web o una
                automatización, nuestro objetivo es construir herramientas
                digitales que sean útiles hoy y que puedan seguir evolucionando
                mañana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALORES
      ========================================================= */}
      <section
        id="valores"
        className={`${container} py-16 lg:py-24`}
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
            Lo que nos representa
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            La tecnología es una herramienta.
            <span className="block text-slate-400">
              La forma de usarla hace la diferencia.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            Estos son algunos de los principios que buscamos mantener en cada
            proyecto.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor) => {
            const Icono = valor.icono;

            return (
              <article
                key={valor.titulo}
                className="group rounded-2xl border border-[#26344A] bg-[#101A2B] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FA713A]/40 hover:bg-[#121F33]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-[#FA713A] transition duration-300 group-hover:bg-[#FA713A]/15">
                  <Icono size={21} />
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                  {valor.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {valor.descripcion}
                </p>

                <div className="mt-6 h-px w-0 bg-[#FA713A] transition-all duration-300 group-hover:w-10" />
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          MANERA DE TRABAJAR
      ========================================================= */}
      <section className="border-y border-[#26344A] bg-[#071024]">
        <div className={`${container} py-16 lg:py-24`}>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* INTRO */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
                Nuestra forma de trabajar
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                De una idea
                <span className="block text-[#FFB297]">
                  a una solución.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                Buscamos que el proceso sea claro desde el primer contacto
                hasta el lanzamiento.
              </p>
            </div>

            {/* PASOS */}
            <div className="space-y-4">
              {proceso.map((item) => (
                <article
                  key={item.numero}
                  className="group flex gap-5 rounded-2xl border border-[#26344A] bg-[#101A2B] p-6 transition duration-300 hover:border-[#FA713A]/40 hover:bg-[#121F33]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-sm font-semibold text-[#FA713A]">
                    {item.numero}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {item.descripcion}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="ml-auto mt-1 hidden shrink-0 text-[#FA713A] transition-transform duration-300 group-hover:translate-x-1 sm:block"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECNOLOGÍAS
      ========================================================= */}
      <section className={`${container} py-16 lg:py-24`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
              Nuestro stack
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Herramientas modernas para construir.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Trabajamos con tecnologías actuales para crear interfaces
              rápidas, mantenibles y preparadas para crecer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tecnologias.map((tecnologia) => (
              <div
                key={tecnologia}
                className="flex items-center justify-center rounded-2xl border border-[#26344A] bg-[#101A2B] px-4 py-5 text-sm font-medium text-slate-300 transition duration-300 hover:border-[#FA713A]/40 hover:bg-[#121F33] hover:text-white"
              >
                {tecnologia}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-[#26344A] bg-[#101A2B] px-7 py-12 text-center sm:px-10 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-[#FA713A]/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#FA713A]/5 blur-3xl"
            />

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-[#FA713A]">
              <Rocket size={24} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
              ¿Tenés una idea?
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Hagamos que empiece
              <span className="block bg-gradient-to-r from-[#FA713A] to-[#FFB297] bg-clip-text text-transparent">
                a tomar forma.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              No necesitás tener todo definido. Contanos qué estás pensando y
              vemos juntos cuál puede ser el próximo paso.
            </p>

            <a
              href="#Contacto"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#FA713A] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E85F2D] hover:shadow-[#FA713A]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA713A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101A2B]"
            >
              Hablemos de tu proyecto

              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
