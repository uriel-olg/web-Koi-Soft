import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Cpu,
  HardDrive,
  MonitorCog,
  Rocket,
  Search,
  Settings2,
  ShoppingBag,
  Sparkles,
  Store,
  UserRound,
  Workflow,
} from "lucide-react";

type Area = "Todos" | "Digital" | "IT" | "Híbrido";

type CasoUso = {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  area: Exclude<Area, "Todos">;
  tipo: "Caso de uso" | "Concepto" | "Proyecto propio";
  soluciones: string[];
  icono: typeof Code2;
  visual:
    | "commerce"
    | "professional"
    | "startup"
    | "office"
    | "catalog"
    | "workstation";
};

const categorias: Area[] = ["Todos", "Digital", "IT", "Híbrido"];

const casos: CasoUso[] = [
  {
    id: 1,
    titulo: "Comercio local",
    subtitulo: "Más consultas y una operación más simple.",
    descripcion:
      "Una solución pensada para negocios que necesitan mostrar productos, recibir consultas y mantener sus equipos de trabajo funcionando correctamente.",
    area: "Híbrido",
    tipo: "Caso de uso",
    soluciones: [
      "Catálogo digital",
      "WhatsApp",
      "PC administrativa",
      "Mantenimiento",
    ],
    icono: Store,
    visual: "commerce",
  },
  {
    id: 2,
    titulo: "Profesional independiente",
    subtitulo: "Presencia profesional y herramientas listas para trabajar.",
    descripcion:
      "Ideal para profesionales que necesitan una web clara, formularios de contacto, correo y un equipo correctamente configurado.",
    area: "Híbrido",
    tipo: "Caso de uso",
    soluciones: [
      "Sitio web",
      "Formulario",
      "Correo",
      "Configuración de equipo",
    ],
    icono: UserRound,
    visual: "professional",
  },
  {
    id: 3,
    titulo: "Negocio nuevo",
    subtitulo: "La base tecnológica para empezar bien.",
    descripcion:
      "Una combinación de presencia digital, dominio, herramientas y configuración inicial para empezar a operar con una estructura ordenada.",
    area: "Híbrido",
    tipo: "Concepto",
    soluciones: [
      "Landing page",
      "Dominio",
      "Software",
      "Configuración inicial",
    ],
    icono: Rocket,
    visual: "startup",
  },
  {
    id: 4,
    titulo: "Equipo de oficina",
    subtitulo: "Menos interrupciones en el trabajo diario.",
    descripcion:
      "Configuración, mantenimiento y actualización de equipos para que las herramientas de trabajo sean confiables y estén listas cuando se necesitan.",
    area: "IT",
    tipo: "Caso de uso",
    soluciones: ["Windows", "Drivers", "Periféricos", "Mantenimiento"],
    icono: MonitorCog,
    visual: "office",
  },
  {
    id: 5,
    titulo: "Catálogo digital",
    subtitulo: "Productos organizados y consultas más directas.",
    descripcion:
      "Un concepto de catálogo administrable para pequeños comercios, con categorías, contenido editable y contacto directo por WhatsApp.",
    area: "Digital",
    tipo: "Concepto",
    soluciones: ["React", "CMS", "Responsive", "WhatsApp"],
    icono: ShoppingBag,
    visual: "catalog",
  },
  {
    id: 6,
    titulo: "PC para trabajo",
    subtitulo: "Un equipo equilibrado según el uso real.",
    descripcion:
      "Selección de componentes, armado, instalación y puesta a punto de una PC enfocada en productividad, estudio o tareas profesionales.",
    area: "IT",
    tipo: "Caso de uso",
    soluciones: ["Selección de hardware", "Armado", "Windows", "Pruebas"],
    icono: Cpu,
    visual: "workstation",
  },
];

const pasos = [
  {
    numero: "01",
    titulo: "Entendemos",
    descripcion:
      "Nos contás qué necesitás resolver, cómo trabajás hoy y cuál es el objetivo.",
    icono: Search,
  },
  {
    numero: "02",
    titulo: "Definimos",
    descripcion:
      "Elegimos qué solución tiene sentido y dejamos claro el alcance antes de avanzar.",
    icono: Sparkles,
  },
  {
    numero: "03",
    titulo: "Implementamos",
    descripcion:
      "Diseñamos, desarrollamos, instalamos o configuramos lo necesario.",
    icono: Workflow,
  },
  {
    numero: "04",
    titulo: "Acompañamos",
    descripcion:
      "Probamos el resultado, hacemos ajustes y quedamos disponibles para soporte.",
    icono: ArrowUpRight,
  },
];

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB297]";

function VisualCaso({
  caso,
  grande = false,
}: {
  caso: CasoUso;
  grande?: boolean;
}) {
  const isDigital = caso.area === "Digital";
  const isIT = caso.area === "IT";
  const accent = isDigital ? "#7DB3FF" : isIT ? "#FA713A" : "#FFB297";

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-[#0D1728] ${
        grande ? "min-h-[330px]" : "min-h-[230px]"
      }`}
    >
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FA713A]/8 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-400/[0.07] blur-3xl mt-10" />

      <div className={`relative h-full ${grande ? "p-7 sm:p-9" : "p-5"} `}>
        <div className="flex items-center justify-between">
          <span
            className="rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em]"
            style={{
              color: accent,
              borderColor: `${accent}35`,
              backgroundColor: `${accent}10`,
            }}
          >
            {caso.area}
          </span>

          <span className="font-mono text-[9px] text-[#617087]">
            {String(caso.id).padStart(2, "0")}
          </span>
        </div>

        {caso.visual === "commerce" && (
          <div className="mt-8 grid grid-cols-[1.1fr_.9fr] gap-4">
            <div className="rounded-2xl border border-[#29405F] bg-[#111D30] p-4">
              <div className="h-2 w-20 rounded bg-[#7DB3FF]/40" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.035] p-2"
                  >
                    <div className="h-10 rounded-md bg-white/[0.05]" />
                    <div className="mt-2 h-1.5 w-2/3 rounded bg-white/15" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-1 items-center justify-center rounded-2xl border border-[#44353A] bg-[#171A27]">
                <MonitorCog
                  className="text-[#FA713A]"
                  size={grande ? 34 : 28}
                />
              </div>
              <div className="rounded-xl border border-[#44353A] bg-[#171A27] p-3">
                <div className="h-1.5 w-full rounded bg-[#FA713A]/30" />
                <div className="mt-2 h-1.5 w-2/3 rounded bg-white/10" />
              </div>
            </div>
          </div>
        )}

        {caso.visual === "professional" && (
          <div className="mt-8 flex items-center justify-center">
            <div
              className={`grid w-full max-w-sm grid-cols-[.8fr_1.2fr] gap-3 ${grande ? "scale-100" : "scale-95"}`}
            >
              <div className="rounded-2xl border border-[#29405F] bg-[#111D30] p-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-400/10">
                  <UserRound className="text-[#7DB3FF]" size={24} />
                </div>
                <div className="mx-auto mt-4 h-1.5 w-2/3 rounded bg-white/15" />
                <div className="mx-auto mt-2 h-1.5 w-1/2 rounded bg-white/10" />
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#304059] bg-[#172338] p-3"
                  >
                    <div className="h-1.5 w-20 rounded bg-white/15" />
                    <div className="mt-2 h-1.5 w-full rounded bg-white/[0.07]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {caso.visual === "startup" && (
          <div className="mt-9 flex items-center justify-center gap-4">
            <div className="rounded-2xl border border-[#29405F] bg-[#111D30] p-5">
              <Code2 className="mx-auto text-[#7DB3FF]" size={28} />
              <div className="mt-4 h-1.5 w-16 rounded bg-[#7DB3FF]/25" />
            </div>
            <span className="text-[#5D6B80]">+</span>
            <div className="rounded-2xl border border-[#44353A] bg-[#171A27] p-5">
              <Settings2 className="mx-auto text-[#FA713A]" size={28} />
              <div className="mt-4 h-1.5 w-16 rounded bg-[#FA713A]/25" />
            </div>
          </div>
        )}

        {caso.visual === "office" && (
          <div className="mt-8 flex items-center justify-center">
            <div className="relative w-full max-w-sm rounded-2xl border border-[#44353A] bg-[#151722] p-5">
              <div className="mx-auto aspect-[16/9] rounded-xl border border-[#304059] bg-[#101A2B] p-4">
                <div className="flex h-full items-center justify-center rounded-lg bg-[#172338]">
                  <MonitorCog
                    className="text-[#FA713A]"
                    size={grande ? 36 : 30}
                  />
                </div>
              </div>
              <div className="mx-auto h-5 w-1 bg-[#4A3B3E]" />
              <div className="mx-auto h-2 w-20 rounded-full bg-[#4A3B3E]" />
            </div>
          </div>
        )}

        {caso.visual === "catalog" && (
          <div className="mt-7 rounded-2xl border border-[#29405F] bg-[#111D30] p-4">
            <div className="flex items-center justify-between">
              <div className="h-2 w-20 rounded bg-[#7DB3FF]/40" />
              <div className="h-6 w-6 rounded-full bg-[#7DB3FF]/10" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2"
                >
                  <div className="aspect-square rounded-md bg-white/[0.05]" />
                  <div className="mt-2 h-1.5 w-2/3 rounded bg-white/15" />
                </div>
              ))}
            </div>
          </div>
        )}

        {caso.visual === "workstation" && (
          <div className="mt-8 grid grid-cols-[1fr_.7fr] items-center gap-4">
            <div className="rounded-2xl border border-[#44353A] bg-[#171A27] p-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square rounded-xl border border-[#4A3A40] bg-[#101A2B] p-3">
                  <Cpu
                    className="h-full w-full text-[#FA713A]/70"
                    strokeWidth={1.2}
                  />
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-5 rounded-md bg-white/[0.05]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <HardDrive className="mx-auto text-[#FA713A]" size={28} />
              <div className="h-1.5 rounded bg-[#FA713A]/25" />
              <div className="h-1.5 w-3/4 rounded bg-white/10" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TarjetaCaso({
  caso,
  reduceMotion,
}: {
  caso: CasoUso;
  reduceMotion: boolean | null;
}) {
  const Icon = caso.icono;
  const isIT = caso.area === "IT";
  const isDigital = caso.area === "Digital";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#26344A] bg-[#101A2B] transition-colors duration-300 hover:border-[#785040] hover:bg-[#152035]"
    >
      <VisualCaso caso={caso} />

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
              isIT
                ? "text-[#FFB297]"
                : isDigital
                  ? "text-[#8DBBFF]"
                  : "text-[#D7B3A4]"
            }`}
          >
            {caso.tipo}
          </span>

          <Icon
            size={17}
            aria-hidden="true"
            className={
              isIT
                ? "text-[#FA713A]"
                : isDigital
                  ? "text-[#7DB3FF]"
                  : "text-[#FFB297]"
            }
          />
        </div>

        <h3 className="mt-3 text-xl font-semibold text-[#F3F5FA]">
          {caso.titulo}
        </h3>

        <p className="mt-2 text-sm font-medium text-[#A8B6C8]">
          {caso.subtitulo}
        </p>

        <p className="mt-4 text-sm leading-6 text-[#8797AD]">
          {caso.descripcion}
        </p>

        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Soluciones incluidas"
        >
          {caso.soluciones.map((solucion) => (
            <li
              key={solucion}
              className="rounded-lg border border-[#344159] bg-[#172338] px-2.5 py-1 text-[10px] font-medium text-[#B8C4D5]"
            >
              {solucion}
            </li>
          ))}
        </ul>

        <Link
          to="/contacto"
          className={`mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold ${
            isIT
              ? "text-[#FFB297]"
              : isDigital
                ? "text-[#8DBBFF]"
                : "text-[#FFB297]"
          } ${focus}`}
        >
          Consultar una solución así
          <ArrowRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Proyectos() {
  const [categoriaActiva, setCategoriaActiva] = useState<Area>("Todos");
  const reduceMotion = useReducedMotion();

  const casosFiltrados =
    categoriaActiva === "Todos"
      ? casos
      : casos.filter((caso) => caso.area === categoriaActiva);

  const destacado = casos[0];

  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      const elemento = document.getElementById(
        decodeURIComponent(hash.slice(1)),
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
      className="overflow-hidden bg-[#080F1E] font-sans text-[#F3F5FA] selection:bg-[#FA713A]/30 [&_section[id]]:scroll-mt-28"
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:52px_52px]"
        />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#28314B]/25 blur-3xl" />
        <div className="pointer-events-none absolute left-[-180px] top-52 h-[420px] w-[420px] rounded-full bg-[#FA713A]/5 blur-3xl" />

        <div
          className={`${container} grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-16`}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="relative z-10 mt-10"
          >
            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB297]">
              <span className="h-px w-7 bg-[#FA713A]" />
              Soluciones en acción
            </div>

            <h1 className="max-w-3xl text-[2.6rem] font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-[3.6rem] xl:text-[4.5rem]">
              Distintas necesidades.
              <span className="mt-1 block text-[#FA713A]">
                Una forma clara de resolverlas.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#A1AEC3] sm:text-base">
              Mientras construimos nuestro portfolio, mostramos casos de uso y
              conceptos que representan cómo aplicaríamos soluciones digitales y
              soporte IT a situaciones reales.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#casos"
                className={`group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064] ${focus}`}
              >
                Explorar soluciones
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/contacto"
                className={`inline-flex items-center justify-center rounded-xl border border-[#344159] bg-white/[0.02] px-6 py-4 text-sm font-medium text-[#E2E8F0] transition-colors hover:border-[#FA713A]/60 hover:bg-white/5 ${focus}`}
              >
                Contanos tu caso
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#A1AEC3]">
              {[
                "Casos conceptuales",
                "Digital + IT",
                "Sin soluciones genéricas",
              ].map((texto) => (
                <span key={texto} className="flex items-center gap-2">
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

          {/* HERO VISUAL */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="relative mx-auto w-full max-w-xl py-8 sm:px-3"
          >
            {/* glow exterior */}
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-full bg-[#FA713A]/10 blur-[100px]"
            />

            <div
              className="
      relative
      overflow-hidden
      rounded-[26px]
      border border-[#344159]
      bg-[#0D1728]
      shadow-[0_35px_80px_-25px_rgba(0,0,0,.7)]
    "
            >
              {/* =====================================================
        TOP BAR
    ===================================================== */}

              <div className="flex items-center gap-1.5 border-b border-[#26344A] bg-[#111D30] px-5 py-4">
                {[1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#68768F]"
                  />
                ))}

                <span
                  className="
          mx-auto
          -translate-x-3
          text-[9px]
          font-medium
          uppercase
          tracking-[0.17em]
          text-[#8190A6]
        "
                >
                  KoiBite / workspace
                </span>
              </div>

              {/* =====================================================
        VISUAL
    ===================================================== */}

              <div className="relative min-h-[410px] overflow-hidden p-5 sm:min-h-[450px] sm:p-8">
                {/* grid */}
                <div
                  aria-hidden="true"
                  className="
          absolute inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
                />

                {/* glow digital */}
                <div
                  aria-hidden="true"
                  className="
          absolute
          -left-20 top-10
          h-64 w-64
          rounded-full
          bg-blue-400/[0.07]
          blur-3xl
        "
                />

                {/* glow IT */}
                <div
                  aria-hidden="true"
                  className="
          absolute
          -right-20 bottom-5
          h-64 w-64
          rounded-full
          bg-[#FA713A]/[0.08]
          blur-3xl
        "
                />

                {/* =====================================================
          MONITOR / WEB
      ===================================================== */}

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : 0.15,
                  }}
                  className="
          absolute
          left-5
          top-16
          z-10
          w-[68%]
          sm:left-8
          sm:w-[67%]
        "
                >
                  {/* monitor */}
                  <div
                    className="
            overflow-hidden
            rounded-2xl
            border border-[#334966]
            bg-[#111D30]
            shadow-[0_25px_50px_-20px_rgba(0,0,0,.7)]
          "
                  >
                    {/* browser header */}
                    <div className="flex items-center gap-1.5 border-b border-[#263B58] bg-[#152238] px-3 py-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#526783]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#526783]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#526783]" />

                      <div className="ml-3 h-1.5 w-20 rounded-full bg-white/[0.08]" />
                    </div>

                    {/* website preview */}
                    <div className="relative overflow-hidden p-4 sm:p-5">
                      <div
                        aria-hidden="true"
                        className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#7DB3FF]/10 blur-2xl"
                      />

                      {/* mini nav */}
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-md bg-[#FA713A]" />

                          <div className="h-1.5 w-12 rounded-full bg-white/25" />
                        </div>

                        <div className="flex gap-2">
                          <span className="h-1 w-5 rounded-full bg-white/10" />
                          <span className="h-1 w-5 rounded-full bg-white/10" />
                          <span className="h-1 w-5 rounded-full bg-white/10" />
                        </div>
                      </div>

                      {/* hero preview */}
                      <div className="relative mt-6 grid grid-cols-[1.15fr_.85fr] items-center gap-4">
                        <div>
                          <span className="block h-1.5 w-12 rounded-full bg-[#7DB3FF]/70" />

                          <div className="mt-4 space-y-2">
                            <div className="h-3 w-full rounded bg-white/20" />
                            <div className="h-3 w-[86%] rounded bg-white/20" />
                          </div>

                          <div className="mt-4 space-y-1.5">
                            <div className="h-1.5 w-full rounded bg-white/[0.07]" />
                            <div className="h-1.5 w-4/5 rounded bg-white/[0.07]" />
                          </div>

                          <div className="mt-5 flex gap-2">
                            <span className="h-6 w-16 rounded-md bg-[#FA713A]" />

                            <span className="h-6 w-12 rounded-md border border-white/10 bg-white/[0.03]" />
                          </div>
                        </div>

                        {/* visual fake */}
                        <div
                          className="
                  relative
                  flex
                  aspect-[4/5]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-t-full
                  rounded-b-xl
                  border border-[#334966]
                  bg-linear-to-b
                  from-[#233D5D]
                  to-[#172338]
                "
                        >
                          <div className="absolute bottom-0 h-[55%] w-[55%] rounded-t-full bg-[#7DB3FF]/10" />

                          <Code2
                            aria-hidden="true"
                            size={30}
                            className="relative text-[#7DB3FF]"
                          />
                        </div>
                      </div>

                      {/* cards inferiores */}
                      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#26344A] pt-4">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="rounded-lg border border-white/[0.05] bg-white/[0.025] p-2"
                          >
                            <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
                            <div className="mt-2 h-5 rounded bg-white/[0.04]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* monitor stand */}
                  <div className="mx-auto h-6 w-1.5 bg-[#344159]" />

                  <div className="mx-auto h-2 w-20 rounded-full bg-[#344159]" />
                </motion.div>

                {/* =====================================================
          PC / HARDWARE
      ===================================================== */}

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : 0.3,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                        }
                  }
                  className="
          absolute
          right-4
          top-[110px]
          z-20
          w-[31%]
          sm:right-7
          sm:top-[118px]
          sm:w-[29%]
        "
                >
                  <div
                    className="
            relative
            overflow-hidden
            rounded-2xl
            border border-[#513A3A]
            bg-[#171A27]
            p-3
            shadow-[0_25px_50px_-20px_rgba(0,0,0,.7)]
            sm:p-4
          "
                  >
                    <div
                      aria-hidden="true"
                      className="
              absolute
              -right-12
              -top-12
              h-28 w-28
              rounded-full
              bg-[#FA713A]/10
              blur-2xl
            "
                    />

                    {/* status */}
                    <div className="relative flex items-center justify-between">
                      <span className="h-1.5 w-6 rounded-full bg-[#FA713A]/50" />

                      <span className="flex items-center gap-1 text-[7px] uppercase tracking-[0.13em] text-[#917D82]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        ready
                      </span>
                    </div>

                    {/* CPU visual */}
                    <div
                      className="
              relative
              mt-5
              aspect-[4/5]
              rounded-xl
              border border-[#45373C]
              bg-[#10141F]
              p-3
            "
                    >
                      {/* fan */}
                      <div
                        className="
                absolute
                left-1/2
                top-6
                flex
                h-[54px]
                w-[54px]
                -translate-x-1/2
                items-center
                justify-center
                rounded-full
                border border-[#FA713A]/20
                bg-[#FA713A]/5
              "
                      >
                        <div
                          className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border border-dashed
                  border-[#FA713A]/30
                "
                        >
                          <Cpu
                            size={18}
                            aria-hidden="true"
                            className="text-[#FA713A]"
                          />
                        </div>
                      </div>

                      {/* components */}
                      <div className="absolute bottom-4 left-3 right-3 space-y-2">
                        <div className="flex gap-2">
                          <div className="h-5 flex-1 rounded bg-[#FA713A]/10" />
                          <div className="h-5 w-5 rounded bg-[#FA713A]/20" />
                        </div>

                        <div className="h-3 rounded bg-white/[0.05]" />

                        <div className="flex gap-1">
                          <div className="h-2 flex-1 rounded bg-white/[0.05]" />
                          <div className="h-2 flex-1 rounded bg-white/[0.05]" />
                          <div className="h-2 flex-1 rounded bg-white/[0.05]" />
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-4 flex items-center justify-between">
                      <span className="text-[9px] font-semibold text-white">
                        Workstation
                      </span>

                      <span className="h-2 w-2 rounded-full bg-[#FA713A]" />
                    </div>
                  </div>
                </motion.div>

                {/* =====================================================
          BASE / CONEXIÓN
      ===================================================== */}

                <div
                  className="
          absolute
          bottom-5
          left-5
          right-5
          z-30
          sm:bottom-7
          sm:left-8
          sm:right-8
        "
                >
                  <div
                    className="
            flex
            items-center
            justify-between
            gap-4
            rounded-xl
            border border-[#304059]
            bg-[#101A2B]/95
            px-4 py-3
            shadow-xl
            backdrop-blur
          "
                  >
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        {!reduceMotion && (
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FA713A]/50" />
                        )}

                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FA713A]" />
                      </span>

                      <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#9AA9BC]">
                        Ecosistema conectado
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden text-[9px] text-[#65758C] sm:inline">
                        Digital
                      </span>

                      <span className="h-px w-5 bg-linear-to-r from-[#7DB3FF] to-[#FA713A]" />

                      <span className="hidden text-[9px] text-[#65758C] sm:inline">
                        IT
                      </span>
                    </div>
                  </div>
                </div>

                {/* =====================================================
          MICRO ELEMENTOS
      ===================================================== */}

                <div className="absolute left-5 top-5 hidden sm:block">
                  <span
                    className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border border-[#29405F]
            bg-[#111D30]/80
            px-3 py-1.5
            text-[9px]
            uppercase
            tracking-[0.12em]
            text-[#7DB3FF]
            backdrop-blur
          "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7DB3FF]" />
                    Digital
                  </span>
                </div>

                <div className="absolute right-5 top-5 hidden sm:block">
                  <span
                    className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border border-[#44353A]
            bg-[#171A27]/80
            px-3 py-1.5
            text-[9px]
            uppercase
            tracking-[0.12em]
            text-[#FFB297]
            backdrop-blur
          "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FA713A]" />
                    IT
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="pb-5">
        <div className={container}>
          <div className="flex flex-col gap-4 rounded-2xl border border-[#304059] bg-[#0D1727] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">
                <Sparkles size={16} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Transparencia primero.
                </p>
                <p className="mt-1 max-w-2xl text-xs leading-5 text-[#8190A6]">
                  Los casos marcados como “Concepto” o “Caso de uso” muestran
                  cómo abordaríamos una necesidad; no se presentan como trabajos
                  realizados para clientes.
                </p>
              </div>
            </div>

            <Link
              to="/contacto"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-[#FFB297]"
            >
              Consultar una necesidad
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section
        id="casos"
        aria-labelledby="casos-titulo"
        className="bg-[#080F1E] py-20 md:py-24 lg:py-28"
      >
        <div className={container}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Casos de uso
            </span>

            <h2
              id="casos-titulo"
              className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl"
            >
              ¿Qué podríamos resolver?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#A1AEC3]">
              Ejemplos concretos de cómo combinar web, sistemas, equipos y
              soporte según distintos tipos de clientes y necesidades.
            </p>
          </motion.div>

          <div className="mb-10 mt-12 flex flex-col justify-between gap-5 border-b border-[#304059] pb-6 lg:flex-row lg:items-center">
            <div
              role="group"
              aria-label="Filtrar casos por área"
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
              {casosFiltrados.length}{" "}
              {casosFiltrados.length === 1 ? "caso" : "casos"}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {casosFiltrados.map((caso) => (
              <TarjetaCaso
                key={caso.id}
                caso={caso}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-5 py-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1184px] overflow-hidden rounded-3xl bg-[#E9E7E1] text-[#152136]">
          <div className="grid lg:grid-cols-[1fr_.95fr]">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5 }}
              className="px-6 py-12 sm:p-10 lg:p-14"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D04E1F]">
                Ejemplo de solución
              </span>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
                Un comercio necesita más que una web.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#536074]">
                Puede necesitar mostrar productos, recibir consultas, tener una
                PC administrativa bien configurada y reducir interrupciones por
                problemas técnicos. Ahí es donde Digital + IT empieza a tener
                sentido como una sola propuesta.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Catálogo administrable",
                  "Contacto por WhatsApp",
                  "Equipo configurado",
                  "Mantenimiento periódico",
                ].map((texto) => (
                  <div
                    key={texto}
                    className="flex items-center gap-3 text-sm text-[#334759]"
                  >
                    <Check
                      size={16}
                      aria-hidden="true"
                      className="text-[#D04E1F]"
                    />
                    {texto}
                  </div>
                ))}
              </div>

              <Link
                to="/contacto"
                className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#152136] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#293C57]"
              >
                Quiero una solución así
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5 }}
              className="relative min-h-[430px] overflow-hidden bg-[#101A2B] p-7 sm:p-9"
            >
              <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#FA713A]/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="relative flex h-full flex-col justify-center">
                <VisualCaso caso={destacado} grande />

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { icon: Code2, label: "Digital" },
                    { icon: BriefcaseBusiness, label: "Negocio" },
                    { icon: MonitorCog, label: "IT" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-[#304059] bg-[#172338] px-3 py-3 text-center"
                    >
                      <Icon
                        size={15}
                        aria-hidden="true"
                        className="mx-auto text-[#FA713A]"
                      />
                      <span className="mt-2 block text-[9px] text-[#A1AEC3]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-20 md:py-24 lg:py-28">
        <div className={container}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Cómo trabajamos
            </span>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
              El problema primero. La tecnología después.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#B8C4D5]">
              Antes de elegir herramientas, entendemos qué necesitás resolver y
              buscamos una solución proporcional al problema.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-5 hidden h-px bg-linear-to-r from-[#FA713A]/40 via-[#304059] to-[#304059] lg:block"
            />

            {pasos.map((paso, index) => {
              const Icon = paso.icono;

              return (
                <motion.div
                  key={paso.numero}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="relative flex flex-col items-start border-t border-[#304059] pt-6 lg:border-t-0"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-[#FA713A]/15 bg-[#101A2B] text-[#FA713A] lg:-mt-10">
                    <Icon size={18} aria-hidden="true" />
                  </div>

                  <span className="mt-5 block font-mono text-xs text-[#FA713A]">
                    {paso.numero}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {paso.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A1AEC3]">
                    {paso.descripcion}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 lg:py-28">
        <div className={container}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-[#664234] bg-linear-to-br from-[#572B25] via-[#292339] to-[#152239] px-7 py-12 text-white md:px-10 md:py-14 xl:flex xl:items-center xl:justify-between xl:gap-10"
          >
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#FA713A]/10 blur-3xl" />
            <div className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-blue-400/5 blur-3xl" />

            <div className="relative max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                Tu caso puede ser distinto
              </span>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                Contanos qué necesitás resolver.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#B8C4D5]">
                No hace falta que sepas qué servicio necesitás. Nos contás la
                situación y evaluamos si la solución pasa por una web, tus
                equipos, tus sistemas o una combinación.
              </p>
            </div>

            <div className="relative mt-8 shrink-0 xl:mt-0">
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064]"
              >
                Hacer una consulta
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
