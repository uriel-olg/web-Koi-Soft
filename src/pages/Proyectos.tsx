import { useState, useEffect } from "react";
import { useLocation } from "react-router";

type Categoria =
  | "Todos"
  | "Desarrollo web"
  | "Landing pages"
  | "Automatizaciones";

type Proyecto = {
  id: number;
  nombre: string;
  rubro: string;
  descripcion: string;
  categoria: Exclude<Categoria, "Todos">;
  etiquetas: string[];
  fondo: string;
  acento: string;
  url?: string;
};

const categorias: Categoria[] = [
  "Todos",
  "Desarrollo web",
  "Landing pages",
  "Automatizaciones",
];

// Datos de ejemplo: reemplazalos por tus proyectos y sus enlaces.
const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "By Didos",
    rubro: "Pastelería artesanal",
    descripcion:
      "Un catálogo pensado para descubrir productos y facilitar los pedidos.",
    categoria: "Desarrollo web",
    etiquetas: ["React", "Tailwind CSS", "Sanity"],
    fondo: "bg-sky-100",
    acento: "bg-sky-600",
  },
  {
    id: 2,
    nombre: "San Blass",
    rubro: "Ferretería y construcción",
    descripcion:
      "Una experiencia clara para explorar productos y solicitar asesoramiento.",
    categoria: "Desarrollo web",
    etiquetas: ["Catálogo", "WhatsApp", "Responsive"],
    fondo: "bg-slate-200",
    acento: "bg-blue-700",
  },
  {
    id: 3,
    nombre: "Lume",
    rubro: "Cosmética natural",
    descripcion:
      "Una landing que comunica la esencia de la marca y presenta sus productos.",
    categoria: "Landing pages",
    etiquetas: ["Diseño UI", "Landing page", "Identidad"],
    fondo: "bg-emerald-50",
    acento: "bg-emerald-700",
  },
  {
    id: 4,
    nombre: "Nexo",
    rubro: "Finanzas personales",
    descripcion:
      "Ingresos, gastos y estadísticas organizados en una interfaz simple.",
    categoria: "Desarrollo web",
    etiquetas: ["TypeScript", "Dashboard", "Gráficos"],
    fondo: "bg-indigo-100",
    acento: "bg-indigo-600",
  },
  {
    id: 5,
    nombre: "Vitalis",
    rubro: "Bienestar y salud",
    descripcion:
      "Un flujo de consultas y reservas que simplifica la atención del negocio.",
    categoria: "Automatizaciones",
    etiquetas: ["Reservas", "Formularios", "Automatización"],
    fondo: "bg-orange-50",
    acento: "bg-orange-700",
  },
  {
    id: 6,
    nombre: "Aura",
    rubro: "Arquitectura e interiores",
    descripcion:
      "Un portfolio visual donde los espacios y sus detalles son protagonistas.",
    categoria: "Landing pages",
    etiquetas: ["Portfolio", "Diseño UI", "Responsive"],
    fondo: "bg-stone-200",
    acento: "bg-stone-700",
  },
];

const pasos = [
  {
    numero: "01",
    titulo: "Escuchamos",
    descripcion:
      "Conocemos tu negocio, tus objetivos y qué necesitás resolver.",
  },
  {
    numero: "02",
    titulo: "Planificamos",
    descripcion:
      "Definimos la estructura, el diseño y las funciones del proyecto.",
  },
  {
    numero: "03",
    titulo: "Desarrollamos",
    descripcion:
      "Transformamos la propuesta en una experiencia clara y funcional.",
  },
  {
    numero: "04",
    titulo: "Lanzamos",
    descripcion:
      "Revisamos los detalles y te acompañamos en la puesta en marcha.",
  },
];

const container = "w-full m-auto max-w-7xl px-5 sm:px-8 lg:px-12";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-4";

function Flecha({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function VistaProyecto({
  proyecto,
  grande = false,
}: {
  proyecto: Proyecto;
  grande?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative isolate overflow-hidden bg-slate-100 ${
        grande ? "p-7 sm:p-12" : "p-7"
      }`}
    >
      <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-white/45 blur-2xl" />

      <div className="relative rotate-[-3deg] rounded-xl border border-white/80 bg-gray-50 shadow-xl shadow-slate-900/10 transition-transform duration-500 motion-safe:group-hover:rotate-0 motion-safe:group-hover:scale-[1.03]">
        <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />

          <span className="ml-auto text-[9px] tracking-wide text-slate-600">
            {proyecto.nombre.toLowerCase().replace(/\s/g, "")} · preview
          </span>
        </div>

        <div className={grande ? "p-6 sm:p-9" : "p-5"}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-tight text-slate-800">
              {proyecto.nombre}
            </span>

            <div className="flex gap-2">
              <span className="h-1 w-5 rounded-full bg-slate-200" />
              <span className="h-1 w-5 rounded-full bg-slate-200" />
            </div>
          </div>

          <div className="mt-7 grid grid-cols-5 items-center gap-4">
            <div className="col-span-3">
              <div
                className={`mb-3 h-1.5 w-8 rounded-full ${proyecto.acento}`}
              />

              <p
                className={`font-semibold leading-tight tracking-tight text-slate-900 ${
                  grande ? "text-2xl sm:text-3xl" : "text-xl"
                }`}
              >
                {proyecto.rubro}
              </p>

              <div className="mt-4 space-y-1.5">
                <div className="h-1 w-full rounded-full bg-slate-100" />
                <div className="h-1 w-3/4 rounded-full bg-slate-100" />
              </div>

              <div className={`mt-5 h-6 w-20 rounded-md ${proyecto.acento}`} />
            </div>

            <div
              className={`col-span-2 flex aspect-[3/4] items-center justify-center rounded-t-full rounded-b-xl ${proyecto.fondo}`}
            >
              <span className="text-4xl font-semibold tracking-tighter text-slate-900/20">
                {proyecto.nombre.slice(0, 1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition duration-300 motion-safe:hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-950/5">
      <VistaProyecto proyecto={proyecto} />

      <div className="p-6">
        <p className="text-xs font-semibold text-orange-700">
          {proyecto.categoria}
        </p>

        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
          {proyecto.nombre}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-700">
          {proyecto.descripcion}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Características">
          {proyecto.etiquetas.map((etiqueta) => (
            <li
              key={etiqueta}
              className="rounded-lg bg-orange-50 border border-orange-100 px-2.5 py-1 text-[11px] font-medium text-slate-800"
            >
              {etiqueta}
            </li>
          ))}
        </ul>

        {proyecto.url && (
          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto ${proyecto.nombre} en otra pestaña`}
            className={`mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-orange-800 ${focus}`}
          >
            Ver proyecto
            <Flecha className="transition-transform motion-safe:group-hover:translate-x-1" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Proyectos() {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>("Todos");

  const proyectosFiltrados =
    categoriaActiva === "Todos"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.categoria === categoriaActiva);

  const destacado = proyectos[0]!;
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      const elemento = document.getElementById(
        decodeURIComponent(hash.slice(1)),
      );

      elemento?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, key]);


  return (


    <main id="Proyectos" className="overflow-hidden text-white">
      {/* HERO */}
      <section className="relative " >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl"
        />

        <div
          className={`${container} relative grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28`}
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500/10 px-3.5 py-2 text-xs font-semibold text-orange-500">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Diseño y desarrollo digital
            </span>

            <h1 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-white">
              Ideas que toman forma.
              <span className="mt-2 block text-orange-500">
                Proyectos que conectan.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
              Creamos sitios y experiencias digitales que combinan diseño,
              tecnología y una forma más simple de acercarte a tus clientes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className={`group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-800 ${focus}`}
              >
                Explorar proyectos
                <Flecha className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" />
              </a>

              <a
                href="/contacto"
                className={`inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 ${focus}`}
              >
                Hablemos de tu idea
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/70 pt-6">
              {["Diseño a medida", "Responsive", "Atención cercana"].map(
                (texto) => (
                  <span
                    key={texto}
                    className="flex items-center gap-2 text-xs font-medium text-slate-400"
                  >
                    <span className="text-orange-500" aria-hidden="true">
                      ✓
                    </span>
                    {texto}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-slate-950/10">
              <VistaProyecto proyecto={destacado} grande />
            </div>

            <div className="relative mx-5 -mt-5 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg shadow-slate-900/5 sm:ml-10 sm:mr-0">
              <div
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-700"
              >
                <Flecha className="-rotate-45" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Una experiencia a medida
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  By Didos · Catálogo digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS Y FILTROS */}
      <section
        id="proyectos"
        aria-labelledby="proyectos-titulo"
        className="bg-[#071024] scroll-mt-24 py-20 lg:py-28  md:px-40"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
              Portfolio
            </p>
            <h2
              id="proyectos-titulo"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl "
            >
              Cada proyecto, una nueva idea.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-600">
            Una selección de propuestas para distintos negocios, necesidades y
            formas de conectar.
          </p>
        </div>

        <div className="mb-8 mt-10 flex flex-col justify-between gap-5 border-b border-slate-100 pb-6 lg:flex-row lg:items-center">
          <div
            role="group"
            aria-label="Filtrar proyectos por categoría"
            className="flex flex-wrap gap-2"
          >
            {categorias.map((categoria) => {
              const activa = categoriaActiva === categoria;

              return (
                <button
                  key={categoria}
                  type="button"
                  aria-pressed={activa}
                  onClick={() => setCategoriaActiva(categoria)}
                  className={`cursor-pointer rounded-full px-4 py-2.5 text-xs font-semibold transition ${focus} ${
                    activa
                      ? "bg-orange-700 text-white shadow-md shadow-orange-900/15"
                      : "bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-orange-800"
                  }`}
                >
                  {categoria}
                </button>
              );
            })}
          </div>

          <p
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="shrink-0 text-xs text-slate-600"
          >
            {proyectosFiltrados.length}{" "}
            {proyectosFiltrados.length === 1 ? "proyecto" : "proyectos"}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyectosFiltrados.map((proyecto) => (
            <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </section>

      {/* CASO DESTACADO */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div
          className={`${container} grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20`}
        >
          <div className="overflow-hidden rounded-3xl border border-white shadow-xl shadow-slate-900/5">
            <VistaProyecto proyecto={destacado} grande />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
              Proyecto en detalle
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Una identidad dulce.
              <span className="block text-orange-600">
                Una experiencia simple.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-700">
              La propuesta para By Didos combina una estética delicada con un
              catálogo fácil de recorrer. Cada detalle busca dar protagonismo a
              los productos y simplificar las consultas.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Productos organizados por categorías.",
                "Una experiencia adaptada a cada pantalla.",
                "Contenido administrable desde un CMS.",
              ].map((texto) => (
                <div key={texto} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-800 "
                  >
                    ✓
                  </span>
                  <p className="text-sm leading-6 text-slate-600">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className={` py-20 lg:py-28 bg-[#071024] px-40 `}>
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Cómo trabajamos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
            Un proceso claro, de principio a fin.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso) => (
            <div
              key={paso.numero}
              className="relative border-t border-orange-500 pt-6"
            >
              <span className="text-sm font-semibold text-orange-700">
                {paso.numero}
              </span>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                {paso.titulo}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={`px-30 py-30`}>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#0B1730] border border-orange-500/20 px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
          />

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                Tu próximo proyecto
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Tu idea puede ser
                <br />
                nuestro próximo proyecto.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                Contanos qué tenés en mente y veamos cómo podemos ayudarte a
                hacerlo realidad.
              </p>
            </div>

            <a
              href="/contacto"
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-xl bg-orange-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1730]"
            >
              Solicitar presupuesto
              <Flecha className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
