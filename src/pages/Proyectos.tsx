
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ArrowRight, Check, Sparkles, Code2, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

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

const container =
  "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB297]";

function Flecha({ className = "" }: { className?: string }) {
  return (
    <ArrowRight
      aria-hidden="true"
      className={`h-5 w-5 ${className}`}
    />
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
      className="relative isolate overflow-hidden bg-[#172338]"
    >
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#FA713A]/10 blur-3xl" />

      <div
        className={`relative ${
          grande ? "p-6 sm:p-10" : "p-5"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-[#344159] bg-[#101A2B] shadow-[0_25px_60px_-25px_rgba(0,0,0,0.6)] transition-transform duration-500 motion-safe:group-hover:rotate-0 motion-safe:group-hover:scale-[1.02]">
          {/* Browser header */}
          <div className="flex items-center gap-1.5 border-b border-[#26344A] bg-[#172237] px-4 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#68768F]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#68768F]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#68768F]" />

            <span className="ml-auto text-[9px] uppercase tracking-[0.15em] text-[#BAC5D6]">
              {proyecto.nombre.toLowerCase().replace(/\s/g, "")} · preview
            </span>
          </div>

          {/* Preview */}
          <div className={grande ? "p-6 sm:p-9" : "p-5"}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-tight text-[#F3F5FA]">
                {proyecto.nombre}
              </span>

              <div className="flex gap-2">
                <span className="h-1 w-5 rounded-full bg-[#344159]" />
                <span className="h-1 w-5 rounded-full bg-[#344159]" />
              </div>
            </div>

            <div className="mt-7 grid grid-cols-5 items-center gap-4">
              <div className="col-span-3">
                <div className="mb-3 h-1.5 w-8 rounded-full bg-[#FA713A]" />

                <p
                  className={`font-semibold leading-tight tracking-tight text-[#F3F5FA] ${
                    grande ? "text-2xl sm:text-3xl" : "text-xl"
                  }`}
                >
                  {proyecto.rubro}
                </p>

                <div className="mt-4 space-y-1.5">
                  <div className="h-1 w-full rounded-full bg-[#26344A]" />
                  <div className="h-1 w-3/4 rounded-full bg-[#26344A]" />
                </div>

                <div className="mt-5 h-6 w-20 rounded-md bg-[#FA713A]" />
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
    </div>
  );
}

function TarjetaProyecto({
  proyecto,
}: {
  proyecto: Proyecto;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#26344A] bg-[#101A2B] transition-colors duration-300 hover:border-[#785040] hover:bg-[#152035]"
    >
      <VistaProyecto proyecto={proyecto} />

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FA713A]">
          {proyecto.categoria}
        </span>

        <h3 className="mt-2 text-xl font-semibold text-[#F3F5FA]">
          {proyecto.nombre}
        </h3>

        <p className="mt-4 text-sm leading-6 text-[#B8C4D5]">
          {proyecto.descripcion}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Características"
        >
          {proyecto.etiquetas.map((etiqueta) => (
            <li
              key={etiqueta}
              className="rounded-lg border border-[#344159] bg-[#172338] px-2.5 py-1 text-[11px] font-medium text-[#B8C4D5]"
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
            className={`mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#FA713A] ${focus}`}
          >
            Ver proyecto

            <Flecha className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Proyectos() {
  const [categoriaActiva, setCategoriaActiva] =
    useState<Categoria>("Todos");

  const reduceMotion = useReducedMotion();

  const proyectosFiltrados =
    categoriaActiva === "Todos"
      ? proyectos
      : proyectos.filter(
          (proyecto) => proyecto.categoria === categoriaActiva
        );

  const destacado = proyectos[0]!;

  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      const elemento = document.getElementById(
        decodeURIComponent(hash.slice(1))
      );

      elemento?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, key, reduceMotion]);

  return (
    <main
      id="Proyectos"
      className="overflow-hidden bg-[#080F1E] font-sans text-[#F3F5FA] selection:bg-[#FA713A]/30"
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#28314B]/20 blur-3xl" />

        <div className="pointer-events-none absolute left-[-180px] top-52 h-[420px] w-[420px] rounded-full bg-[#FA713A]/5 blur-3xl" />

        <div
          className={`${container} grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-16`}
        >
          {/* Texto */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: -28 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
            }}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB297]">
              <Sparkles aria-hidden="true" size={15} />
              Proyectos digitales
            </div>

            <h1 className="max-w-2xl text-[2.6rem] font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[3.5rem] xl:text-[4.3rem]">
              Ideas que toman forma.
              <span className="mt-1 block text-[#FA713A]">
                Proyectos que conectan.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#A1AEC3] sm:text-base">
              Creamos sitios y experiencias digitales que combinan
              diseño, tecnología y una forma más simple de acercarte
              a tus clientes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#proyectos"
                className={`group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064] ${focus}`}
              >
                Explorar proyectos

                <Flecha className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/contacto"
                className={`inline-flex items-center justify-center rounded-xl border border-[#344159] bg-transparent px-6 py-4 text-sm font-medium text-[#E2E8F0] transition-colors hover:border-[#FA713A]/60 hover:bg-white/5 ${focus}`}
              >
                Hablemos de tu idea
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#A1AEC3]">
              {[
                "Diseño a medida",
                "Responsive",
                "Atención cercana",
              ].map((texto) => (
                <span
                  key={texto}
                  className="flex items-center gap-2"
                >
                  <Check
                    size={15}
                    aria-hidden="true"
                    className="text-[#FA713A]"
                  />

                  {texto}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Preview destacado */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
            }}
            className="relative mx-auto w-full max-w-xl py-8 sm:px-3"
          >
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-[#FA713A]/10 blur-[85px]"
            />

            <div className="relative overflow-hidden rounded-2xl border border-[#344159] bg-[#101A2B] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] motion-safe:sm:rotate-2">
              <VistaProyecto proyecto={destacado} grande />
            </div>

            <div className="relative mx-5 -mt-5 flex items-center gap-4 rounded-xl border border-[#344159] bg-[#172338] p-4 shadow-xl sm:ml-10 sm:mr-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">
                <Code2 size={20} aria-hidden="true" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FFB297]">
                  Una experiencia a medida
                </p>

                <p className="mt-1 text-sm font-semibold text-[#F3F5FA]">
                  By Didos · Catálogo digital
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROYECTOS
      ====================================================== */}

      <section
        id="proyectos"
        aria-labelledby="proyectos-titulo"
        className="scroll-mt-24 bg-[#080F1E] py-20 md:py-24 lg:py-28"
      >
        <div className={container}>
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Portfolio
            </span>

            <h2
              id="proyectos-titulo"
              className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl"
            >
              Cada proyecto, una nueva idea.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#A1AEC3]">
              Una selección de propuestas para distintos negocios,
              necesidades y formas de conectar.
            </p>
          </motion.div>

          {/* Filtros */}
          <div className="mb-10 mt-12 flex flex-col justify-between gap-5 border-b border-[#304059] pb-6 lg:flex-row lg:items-center">
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
                    onClick={() =>
                      setCategoriaActiva(categoria)
                    }
                    className={`cursor-pointer rounded-lg border px-4 py-2.5 text-xs font-semibold transition ${focus} ${
                      activa
                        ? "border-[#FA713A] bg-[#FA713A] text-[#14131B]"
                        : "border-[#344159] bg-[#101A2B] text-[#B8C4D5] hover:border-[#FA713A]/60 hover:bg-[#172338] hover:text-[#F3F5FA]"
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
              className="shrink-0 text-xs text-[#8190A6]"
            >
              {proyectosFiltrados.length}{" "}
              {proyectosFiltrados.length === 1
                ? "proyecto"
                : "proyectos"}
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {proyectosFiltrados.map((proyecto) => (
              <TarjetaProyecto
                key={proyecto.id}
                proyecto={proyecto}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CASO DESTACADO
      ====================================================== */}

      <section className="px-5 py-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1184px] rounded-3xl bg-[#E9E7E1] px-6 py-12 text-[#152136] sm:p-10 lg:p-14">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, x: -20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-[#ff4400dc]">
                Proyecto en detalle
              </span>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
                Una identidad dulce.
                <span className="block text-[#ff4400dc]">
                  Una experiencia simple.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#536074]">
                La propuesta para By Didos combina una estética
                delicada con un catálogo fácil de recorrer. Cada
                detalle busca dar protagonismo a los productos y
                simplificar las consultas.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Productos organizados por categorías.",
                  "Una experiencia adaptada a cada pantalla.",
                  "Contenido administrable desde un CMS.",
                ].map((texto) => (
                  <div
                    key={texto}
                    className="flex items-center gap-3 text-sm text-[#334759]"
                  >
                    <Check
                      size={16}
                      aria-hidden="true"
                      className="text-[#ff4400dc]"
                    />

                    {texto}
                  </div>
                ))}
              </div>

              <a
                href="/contacto"
                className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#152136] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#293C57]"
              >
                Consultar proyecto

                <Flecha className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, x: 20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border-[5px] border-[#26344A] bg-[#101A2B] shadow-xl motion-safe:sm:rotate-2">
                <VistaProyecto
                  proyecto={destacado}
                  grande
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESO
      ====================================================== */}

      <section className=" py-20 md:py-24 lg:py-28">
        <div className={container}>
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Cómo trabajamos
            </span>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
              Un proceso claro, de principio a fin.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C4D5]">
              Cada etapa tiene un objetivo concreto para que
              siempre sepas qué estamos haciendo y qué viene
              después.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 m-auto hidden h-px w-9/12  lg:block" />

            {pasos.map((paso, index) => (
              <motion.div
                key={paso.numero}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="relative flex flex-col items-start border-t border-[#ff4400dc] pt-6"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">
                  {index === 0 ? (
                    <Code2 size={18} aria-hidden="true" />
                  ) : index === 3 ? (
                    <Rocket size={18} aria-hidden="true" />
                  ) : (
                    <Sparkles size={18} aria-hidden="true" />
                  )}
                </div>

                <span className="mt-5 block text-xs font-semibold text-[#FA713A]">
                  {paso.numero}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  {paso.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#A1AEC3]">
                  {paso.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="py-20 md:py-24 lg:py-28">
        <div className={container}>
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-[#664234] bg-linear-to-br from-[#572B25] via-[#292339] to-[#152239] px-7 py-12 text-white md:px-10 md:py-14 xl:flex xl:items-center xl:justify-between xl:gap-10"
          >
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#FA713A]/10 blur-3xl" />

            <div className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative max-w-xl">
              <span className="text-sm font-semibold text-[#FFB297]">
                Tu próximo proyecto
              </span>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                Tu idea puede ser
                <br />
                nuestro próximo proyecto.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#B8C4D5]">
                Contanos qué tenés en mente y veamos cómo podemos
                ayudarte a hacerlo realidad.
              </p>
            </div>

            <div className="relative mt-8 shrink-0 xl:mt-0">
              <a
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064]"
              >
                Solicitar presupuesto

                <Flecha className="transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
