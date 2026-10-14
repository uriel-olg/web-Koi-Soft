import { Link, useLocation } from "react-router";
import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,

  Check,
  Code2,
  Cpu,
  Gauge,
  Headphones,
  Layers3,
  MonitorCog,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
  Workflow,
} from "lucide-react";

const serviceAreas = [
  {
    eyebrow: "Soluciones digitales",
    title: "Tu negocio también tiene que funcionar online.",
    description:
      "Creamos una presencia digital profesional y herramientas que te ayudan a vender, mostrar y gestionar mejor tu negocio.",
    items: [
      "Landing pages",
      "Sitios institucionales",
      "Catálogos + CMS",
      "Formularios e integraciones",
    ],
    icon: Code2,
    number: "01",
    accent: "digital",
  },
  {
    eyebrow: "Soporte IT",
    title: "Y tus equipos también tienen que funcionar bien.",
    description:
      "Configuramos, actualizamos y mantenemos los equipos y sistemas que necesitás para trabajar todos los días.",
    items: [
      "Armado y actualización de PCs",
      "Windows, software y drivers",
      "Hardware y configuración",
      "Mantenimiento preventivo",
    ],
    icon: MonitorCog,
    number: "02",
    accent: "it",
  },
];

const services = [
  {
    icon: Code2,
    number: "01",
    category: "Digital",
    title: "Desarrollo web",
    description:
      "Landing pages, sitios institucionales y catálogos digitales diseñados para representar tu marca y convertir visitas en consultas.",
  },
  {
    icon: Workflow,
    number: "02",
    category: "Digital",
    title: "Integraciones y automatización",
    description:
      "Conectamos formularios, WhatsApp, correo, CMS y servicios externos para reducir tareas manuales y simplificar procesos.",
  },
  {
    icon: Gauge,
    number: "03",
    category: "Digital",
    title: "Optimización web",
    description:
      "Mejoramos velocidad, experiencia de usuario, estructura responsive y rendimiento de sitios que ya están funcionando.",
  },
  {
    icon: Cpu,
    number: "04",
    category: "IT",
    title: "Armado y actualización de PCs",
    description:
      "Seleccionamos, ensamblamos y actualizamos componentes según el uso real del equipo: oficina, estudio, trabajo o gaming.",
  },
  {
    icon: Settings2,
    number: "05",
    category: "IT",
    title: "Sistemas y software",
    description:
      "Instalación y configuración de Windows, drivers, programas, periféricos y ajustes necesarios para dejar el equipo listo para trabajar.",
  },
  {
    icon: Wrench,
    number: "06",
    category: "IT",
    title: "Diagnóstico y mantenimiento",
    description:
      "Revisión de hardware, limpieza, optimización, mantenimiento preventivo y resolución de problemas de funcionamiento.",
  },
];

const benefits = [
  {
    icon: Layers3,
    title: "Soluciones pensadas para tu caso",
    description:
      "No aplicamos una receta genérica: evaluamos qué necesita tu negocio y proponemos una solución acorde al problema.",
  },
  {
    icon: Headphones,
    title: "Un solo punto de contacto",
    description:
      "Podés resolver web, equipos, sistemas y soporte sin tener que coordinar proveedores diferentes para cada necesidad.",
  },
  {
    icon: ShieldCheck,
    title: "Acompañamiento después de la entrega",
    description:
      "Seguimos disponibles para mantenimiento, ajustes, consultas y nuevas necesidades una vez implementada la solución.",
  },
];

const process = [
  {
    number: "1",
    title: "Entendemos",
    description:
      "Nos contás qué necesitás, qué problema querés resolver y cómo trabajás hoy.",
  },
  {
    number: "2",
    title: "Proponemos",
    description:
      "Definimos una solución clara, su alcance y la mejor forma de implementarla.",
  },
  {
    number: "3",
    title: "Implementamos",
    description:
      "Desarrollamos, configuramos o ponemos a punto la solución acordada.",
  },
  {
    number: "4",
    title: "Acompañamos",
    description:
      "Verificamos que todo funcione correctamente y quedamos disponibles para soporte.",
  },
];

const digitalTechnologies = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Sanity",
  "Resend",
  "Vercel",
];

const itCapabilities = [
  "Windows",
  "Hardware",
  "PC Build",
  "Drivers",
  "Mantenimiento",
  "Periféricos",
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: reduceMotion ? (false as const) : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.5 },
  };

  const numeroWhatsApp = "2604230590".replace(/\D/g, "");
  const whatsappUrl = numeroWhatsApp
    ? `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
        "¡Hola! Me gustaría consultar por un proyecto o soporte técnico.",
      )}`
    : undefined;

  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      let id = hash.slice(0);

      try {
        id = decodeURIComponent(id);
      } catch {
        /* Conserva un hash literal inválido. */
      }

      const elemento = document.getElementById(id);
      elemento?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, key, reduceMotion]);

  return (
    <main
      id="Hero"
      className="overflow-hidden font-sans  text-[#F3F5FA] selection:bg-[#FA713A]/30 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-[#FFB297]"
    >
      {/* HERO */}
      <section className=" relative overflow-hidden"
      
      >
        
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:52px_52px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-40 h-[520px] w-[520px] rounded-full blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[20%] top-36 h-72 w-72 rounded-full bg-[#FA713A]/[0.07] blur-3xl"
        />

        <div className=" mx-auto mt-10 grid max-w-7xl items-center gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.04fr_.96fr] lg:gap-16 lg:px-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className="relative z-10 "
          >
            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFB297] sm:text-xs">
              <span className="h-px w-7 shrink-0 bg-[#FA713A]" />
              Web · Soporte IT · Optimización
            </div>

            <h1 className="max-w-3xl text-[2.6rem] font-medium leading-[1.04] tracking-[-0.055em] text-[#F3F5FA] sm:text-6xl lg:text-[3.75rem] xl:text-[4.7rem]">
              Tecnología para hacer funcionar y
              <span className="mt-1 block text-[#FA713A]">
                crecer tu negocio.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-gray-300 sm:text-base">
              Creamos sitios web profesionales y nos ocupamos de los equipos,
              sistemas y soporte tecnológico que necesitás para trabajar sin
              complicaciones.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064]"
              >
                Solicitar presupuesto
                <ArrowRight
                  aria-hidden="true"
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/servicios"
                className="inline-flex items-center justify-center rounded-xl border border-[#FA713A] bg-white/[0.02] px-6 py-4 text-sm font-medium text-[#E2E8F0] transition-colors  hover:bg-white/5"
              >
                Ver servicios
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#A1AEC3]">
              {[
                "Soluciones a medida",
                "Soporte técnico",
                "Atención directa",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check
                    aria-hidden="true"
                    size={15}
                    className="text-[#FA713A]"
                  />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* HERO VISUAL */}

          <motion.div
            {...fadeUp}
            className="relative mx-auto w-full max-w-xl py-8 sm:px-4 lg:px-0"
          >
            {/* glow exterior */}
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-[#3178FF]/10 blur-[100px]"
            />

            <div
              className="
      relative
      overflow-hidden
      rounded-[28px]
      border border-[#3B5272]
      bg-[#091426]
      shadow-[0_40px_100px_-30px_rgba(0,0,0,.85)]
    "
            >
              {/* =====================================================
        TOP BAR
    ===================================================== */}
              <div className="relative z-30 flex items-center border-b border-white/[0.08] bg-[#101D31] px-4 py-3.5">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FA713A]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5B342]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4FD1A5]" />
                </div>

                <span className="mx-auto -translate-x-3 text-[8px] font-medium uppercase tracking-[0.18em] text-[#8190A6]">
                  KoiBite · Digital + IT
                </span>
              </div>

              {/* =====================================================
        CONTENIDO
    ===================================================== */}
              <div className="relative min-h-[470px] overflow-hidden p-5 sm:min-h-[520px] sm:p-7">
                {/* grid */}
                <div
                  aria-hidden="true"
                  className="
          absolute inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.65)_1px,transparent_1px)]
          [background-size:34px_34px]
        "
                />

                {/* glow azul */}
                <div
                  aria-hidden="true"
                  className="
          absolute
          -left-24 top-12
          h-72 w-72
          rounded-full
          bg-[#287BFF]/10
          blur-[80px]
        "
                />

                {/* glow naranja */}
                <div
                  aria-hidden="true"
                  className="
          absolute
          -right-24 bottom-8
          h-72 w-72
          rounded-full
          bg-[#FA713A]/10
          blur-[90px]
        "
                />

                {/* =====================================================
          CURVAS / ONDAS
      ===================================================== */}

                <div
                  aria-hidden="true"
                  className="
          absolute
          -right-28
          top-[125px]
          h-[260px]
          w-[470px]
          rotate-[-18deg]
          rounded-[50%]
          border-[22px]
          border-[#176BFF]/10
        "
                />

                <div
                  aria-hidden="true"
                  className="
          absolute
          -right-32
          top-[180px]
          h-[200px]
          w-[430px]
          rotate-[-15deg]
          rounded-[50%]
          border-[18px]
          border-[#FA713A]/12
        "
                />

                {/* =====================================================
          COPY IZQUIERDA
      ===================================================== */}

                <div className="relative z-20 max-w-[49%] pt-4 sm:pt-6 md">
                  <p
                    className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.24em]
            text-[#63A4FF]
          "
                  >
                    Digital solutions
                  </p>

                  <h3
                    className="
            mt-4
            text-[1.65rem]
            font-medium
            leading-[1.05]
            tracking-[-0.045em]
            text-white
            sm:text-[2rem]
          "
                  >
                    Tecnología que
                    <span className="block text-[#7DB3FF]">
                      impulsa tu negocio.
                    </span>
                  </h3>

                  <p
                    className="
            mt-5
            max-w-[220px]
            text-[11px]
            leading-5
            text-[#8F9DB1]
            sm:text-xs
          "
                  >
                    Web, sistemas y soporte trabajando como una sola solución.
                  </p>

                  <a
                    href="#servicios"
                    className="
            group
            mt-6
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-[#7DB3FF]
            px-4 py-3
            text-[11px]
            font-semibold
            text-[#07101F]
            shadow-[0_8px_30px_rgba(74,144,255,.25)]
            transition
            hover:bg-[#A1C8FF]
          "
                  >
                    Ver soluciones
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>

                {/* =====================================================
          MOCKUP WEB
      ===================================================== */}

                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 30,
                          y: 15,
                          rotate: 4,
                        }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 4,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : 0.2,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -5,
                          rotate: 2,
                        }
                  }
                  className="
          absolute
          right-[-35px]
          top-[82px]
          z-10
          w-[67%]
          sm:right-[-25px]
          sm:top-[86px]
        "
                >
                  <div
                    className="
            overflow-hidden
            rounded-[20px]
            border border-[#4676B8]/70
            bg-[#0D1728]
            shadow-[0_30px_70px_-20px_rgba(0,0,0,.8),0_0_35px_rgba(37,115,255,.12)]
          "
                  >
                    {/* browser */}
                    <div className="flex items-center border-b border-[#263B58] bg-[#13223A] px-3 py-2">
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FA713A]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E8A23A]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3ED5AC]" />
                      </div>

                      <div className="mx-auto h-3 w-[35%] rounded bg-white/[0.04]" />
                    </div>

                    {/* fake dashboard */}
                    <div className="grid grid-cols-[.28fr_.72fr]">
                      {/* sidebar */}
                      <div className="border-r border-[#253650] bg-[#101A2B] p-3">
                        <div className="flex items-center gap-1.5">
                          <img
                            src="/KoiBite-log.svg"
                            alt=""
                            className="h-4 w-4"
                          />

                          <div className="h-1.5 w-9 rounded bg-white/25" />
                        </div>

                        <div className="mt-6 space-y-3">
                          {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="h-4 w-4 rounded bg-[#7DB3FF]/10" />
                              <div className="h-1.5 flex-1 rounded bg-white/[0.08]" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* contenido */}
                      <div className="relative overflow-hidden bg-[#0D1728] p-3 sm:p-4">
                        <div
                          aria-hidden="true"
                          className="
                  absolute
                  -right-10 -top-10
                  h-28 w-28
                  rounded-full
                  bg-[#287BFF]/10
                  blur-2xl
                "
                        />

                        {/* nav */}
                        <div className="relative flex items-center justify-between">
                          <div>
                            <div className="h-1.5 w-14 rounded bg-white/20" />
                            <div className="mt-2 h-1 w-9 rounded bg-white/[0.07]" />
                          </div>

                          <div className="h-6 w-6 rounded-lg bg-[#FA713A]/10" />
                        </div>

                        {/* banner */}
                        <div
                          className="
                  relative
                  mt-4
                  overflow-hidden
                  rounded-xl
                  border border-[#304B70]
                  bg-linear-to-br
                  from-[#1B3A66]
                  via-[#172B4A]
                  to-[#0F1D33]
                  p-4
                "
                        >
                          <div
                            aria-hidden="true"
                            className="
                    absolute
                    -right-7 -top-7
                    h-24 w-24
                    rounded-full
                    bg-[#7DB3FF]/12
                  "
                          />

                          <div className="relative">
                            <div className="h-1.5 w-10 rounded bg-[#7DB3FF]" />

                            <div className="mt-3 h-2.5 w-[70%] rounded bg-white/20" />

                            <div className="mt-2 h-2.5 w-[48%] rounded bg-white/20" />

                            <div className="mt-4 h-5 w-14 rounded-md bg-[#FA713A]" />
                          </div>
                        </div>

                        {/* stats */}
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="rounded-lg border border-[#263A57] bg-[#111D30] p-3">
                            <div className="flex items-center justify-between">
                              <div className="h-5 w-5 rounded-md bg-[#FA713A]/15" />

                              <span className="text-[7px] text-[#8291A7]">
                                +42%
                              </span>
                            </div>

                            <div className="mt-3 h-1.5 w-9 rounded bg-white/15" />
                          </div>

                          <div className="rounded-lg border border-[#263A57] bg-[#111D30] p-3">
                            <div className="flex items-center justify-between">
                              <div className="h-5 w-5 rounded-md bg-[#7DB3FF]/15" />

                              <span className="text-[7px] text-[#8291A7]">
                                12.8k
                              </span>
                            </div>

                            <div className="mt-3 h-1.5 w-9 rounded bg-white/15" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* =====================================================
          PHONE
      ===================================================== */}

                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 25,
                          rotate: 7,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: 7,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : 0.4,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                          rotate: 4,
                        }
                  }
                  className="
          absolute
          right-5
          top-[195px]
          z-30
          hidden
          w-[93px]
          rounded-[20px]
          border border-[#517CB8]
          bg-[#101A2B]
          p-1.5
          shadow-[0_25px_50px_-15px_rgba(0,0,0,.8),0_0_24px_rgba(250,113,58,.12)]
          sm:block
        "
                >
                  <div
                    className="
            relative
            aspect-[9/17]
            overflow-hidden
            rounded-[15px]
            bg-[#0D1728]
            p-2.5
          "
                  >
                    {/* notch */}
                    <div className="mx-auto h-1 w-5 rounded-full bg-white/10" />

                    {/* mini logo */}
                    <div className="mt-4 flex items-center gap-1.5">
                      <img src="/KoiBite-log.svg" alt="" className="h-4 w-4" />

                      <span className="text-[7px] font-semibold text-white">
                        KoiBite
                      </span>
                    </div>

                    {/* image */}
                    <div
                      className="
              mt-4
              flex
              aspect-[4/3]
              items-center
              justify-center
              rounded-lg
              bg-linear-to-br
              from-[#254D7B]
              to-[#13253F]
            "
                    >
                      <Code2
                        size={18}
                        aria-hidden="true"
                        className="text-[#7DB3FF]"
                      />
                    </div>

                    <div className="mt-4 space-y-1.5">
                      <div className="h-2 w-full rounded bg-white/20" />
                      <div className="h-2 w-[75%] rounded bg-white/20" />
                    </div>

                    <div className="mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#FA713A] text-[#15131A]">
                      <ArrowRight size={12} aria-hidden="true" />
                    </div>
                  </div>
                </motion.div>

                {/* =====================================================
          CODE FLOATING ICON
      ===================================================== */}

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -7, 0],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
          absolute
          right-[18%]
          top-8
          z-30
          flex
          h-12 w-12
          items-center
          justify-center
          rounded-xl
          border border-[#65A7FF]/40
          bg-[#1E6FE4]/40
          text-[#9CC7FF]
          shadow-[0_0_28px_rgba(48,132,255,.25)]
          backdrop-blur
          sm:h-14 sm:w-14
        "
                >
                  <Code2 size={23} aria-hidden="true" />
                </motion.div>

                {/* =====================================================
          FRANJA INFERIOR
      ===================================================== */}

                <div
                  className="
          absolute
          bottom-5
          left-5
          right-5
          z-40
          grid
          grid-cols-3
          divide-x divide-[#304059]
          rounded-2xl
          border border-[#304059]
          bg-[#0D1728]/95
          px-2 py-3
          shadow-xl
          backdrop-blur
          sm:bottom-6
          sm:left-7
          sm:right-7
          sm:px-4
        "
                >
                  {/* estrategia */}
                  <div className="flex items-center justify-center gap-2 px-2">
                    <div
                      className="
              hidden
              h-8 w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              border border-[#29405F]
              bg-[#7DB3FF]/10
              text-[#7DB3FF]
              sm:flex
            "
                    >
                      <Sparkles size={14} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold text-white sm:text-[9px]">
                        Estrategia
                      </p>

                      <p className="mt-0.5 hidden text-[7px] text-[#718096] sm:block">
                        Diseño
                      </p>
                    </div>
                  </div>

                  {/* desarrollo */}
                  <div className="flex items-center justify-center gap-2 px-2">
                    <div
                      className="
              hidden
              h-8 w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              border border-[#29405F]
              bg-[#7DB3FF]/10
              text-[#7DB3FF]
              sm:flex
            "
                    >
                      <Code2 size={14} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold text-white sm:text-[9px]">
                        Desarrollo
                      </p>

                      <p className="mt-0.5 hidden text-[7px] text-[#718096] sm:block">
                        Integración
                      </p>
                    </div>
                  </div>

                  {/* soporte */}
                  <div className="flex items-center justify-center gap-2 px-2">
                    <div
                      className="
              hidden
              h-8 w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              border border-[#44353A]
              bg-[#FA713A]/10
              text-[#FA713A]
              sm:flex
            "
                    >
                      <MonitorCog size={14} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold text-white sm:text-[9px]">
                        Soporte
                      </p>

                      <p className="mt-0.5 hidden text-[7px] text-[#718096] sm:block">
                        IT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ÁREAS PRINCIPALES */}
      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-2">
            {serviceAreas.map((area, index) => {
              const Icon = area.icon;
              const isDigital = area.accent === "digital";

              return (
                <motion.article
                  key={area.eyebrow}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className={`group relative overflow-hidden rounded-3xl border p-7 md:p-8 ${
                    isDigital
                      ? "border-[#263A58] bg-[#0D192B]"
                      : "border-[#3C3031] bg-[#151722]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute -right-20 -top-24 h-56 w-56 rounded-full blur-3xl ${
                      isDigital ? "bg-blue-400/[0.08]" : "bg-[#FA713A]/[0.08]"
                    }`}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          isDigital
                            ? "bg-blue-400/10 text-[#7DB3FF]"
                            : "bg-[#FA713A]/10 text-[#FA713A]"
                        }`}
                      >
                        <Icon size={22} aria-hidden="true" />
                      </div>

                      <span className="font-mono text-xs text-[#66758D]">
                        {area.number}
                      </span>
                    </div>

                    <p
                      className={`mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        isDigital ? "text-[#7DB3FF]" : "text-[#FFB297]"
                      }`}
                    >
                      {area.eyebrow}
                    </p>

                    <h2 className="mt-3 max-w-xl text-2xl font-medium leading-tight tracking-[-0.035em] text-white md:text-[1.75rem]">
                      {area.title}
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-[#A1AEC3]">
                      {area.description}
                    </p>

                    <div className="mt-7 grid gap-2 sm:grid-cols-2">
                      {area.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 text-xs text-[#C2CBD9]"
                        >
                          <Check
                            size={13}
                            aria-hidden="true"
                            className={
                              isDigital ? "text-[#7DB3FF]" : "text-[#FA713A]"
                            }
                          />
                          {item}
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/servicios"
                      className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold ${
                        isDigital ? "text-[#8DBBFF]" : "text-[#FFB297]"
                      }`}
                    >
                      Ver soluciones
                      <ArrowRight
                        size={15}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="mx-auto max-w-7xl mt-20 px-5 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-between gap-5 border-y border-[#233149] py-6 text-[10px] uppercase tracking-[0.16em] text-[#BAC7D8] sm:text-xs">
          <span className="flex items-center gap-3">
            <Code2 size={16} aria-hidden="true" className="text-[#FA713A]" />
            Desarrollo a medida
          </span>
          <span className="flex items-center gap-3">
            <Headphones
              size={16}
              aria-hidden="true"
              className="text-[#FA713A]"
            />
            Atención y soporte directo
          </span>
          <span className="flex items-center gap-3">
            <ShieldCheck
              size={16}
              aria-hidden="true"
              className="text-[#FA713A]"
            />
            Web + IT en un solo lugar
          </span>
        </div>
      </div>

      {/* SERVICES */}
      <section
        id="servicios"
        className=" py-20 text-white md:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            {...fadeUp}
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                Servicios
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
                Tecnología aplicada a problemas reales.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#A1AEC3]">
                Desde tu presencia online hasta los equipos con los que
                trabajás: resolvemos necesidades digitales y técnicas con una
                misma mirada.
              </p>
            </div>

            <div className="flex w-fit rounded-full border border-[#2B3A53] bg-[#101A2B] p-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#97A6BB]">
              <span className="rounded-full bg-[#17243A] px-3 py-2 text-[#8DBBFF]">
                Digital
              </span>
              <span className="px-3 py-2 text-[#FFB297]">IT</span>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isIT = service.category === "IT";

              return (
                <motion.article
                  key={service.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#26344A] bg-[#101A2B] p-7 transition-colors duration-300 hover:border-[#785040] hover:bg-[#152035] md:p-8"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-px ${
                      isIT
                        ? "bg-linear-to-r from-transparent via-[#FA713A]/60 to-transparent"
                        : "bg-linear-to-r from-transparent via-blue-400/50 to-transparent"
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        isIT
                          ? "bg-[#FA713A]/10 text-[#FA713A]"
                          : "bg-blue-400/10 text-[#7DB3FF]"
                      }`}
                    >
                      <Icon aria-hidden="true" size={22} />
                    </div>

                    <div className="text-right">
                      <span
                        className={`block text-[9px] font-semibold uppercase tracking-[0.16em] ${
                          isIT ? "text-[#FFB297]" : "text-[#8DBBFF]"
                        }`}
                      >
                        {service.category}
                      </span>
                      <span className="mt-1 block font-mono text-xs text-[#66758D]">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#B8C4D5]">
                    {service.description}
                  </p>

                  <Link
                    to="/servicios"
                    className={`mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium ${
                      isIT ? "text-[#FFB297]" : "text-[#8DBBFF]"
                    }`}
                  >
                    Ver servicio
                    <ArrowRight
                      aria-hidden="true"
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="beneficios" className="px-5 py-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1184px] overflow-hidden rounded-3xl bg-[#e9e7e1] text-[#152136]">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <motion.div
              {...fadeUp}
              className="relative overflow-hidden px-6 py-12 sm:p-10 lg:p-14"
            >
              <div
                aria-hidden="true"
                className="absolute -left-24 -top-20 h-56 w-56 rounded-full border-[36px] border-[#D9D7D0]"
              />
              <div className="relative">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D04E1F]">
                  Por qué KoiBite
                </span>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] text-[#152136] md:text-4xl">
                  Menos proveedores.
                  <br />
                  Más soluciones.
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-[#536074]">
                  Queremos que la tecnología sea una herramienta para tu
                  negocio, no otra cosa que tengas que estar resolviendo.
                </p>

                <div className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-[#152136] px-4 py-3 text-white">
                  <div className="flex -space-x-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#152136] bg-[#26486D] text-[10px]">
                      WEB
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#152136] bg-[#A74C2D] text-[10px]">
                      IT
                    </span>
                  </div>
                  <span className="text-xs text-[#CFD6DF]">
                    Una relación, dos áreas de soporte.
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="border-t border-[#C9C9C3] px-6 py-5 sm:px-10 lg:border-l lg:border-t-0 lg:px-12 lg:py-10">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion ? 0 : index * 0.08,
                    }}
                    className="grid gap-4 border-t border-[#BFC4C6] py-7 first:border-t-0 sm:grid-cols-[60px_1fr]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DCDDD5] text-[#D04E1F]">
                      <Icon aria-hidden="true" size={20} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#152136]">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-[#536074]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS
      <section id="proyectos" className="bg-[#080F1E] py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            {...fadeUp}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                Proyectos
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
                Ideas convertidas en soluciones reales.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#A1AEC3]">
                Algunos proyectos donde combinamos diseño, desarrollo y
                herramientas pensadas para el negocio.
              </p>
            </div>

            <Link
              to="/proyectos"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#FFB297]"
            >
              Todos los proyectos
              <ArrowRight
                aria-hidden="true"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <motion.article
              {...fadeUp}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group overflow-hidden rounded-3xl border border-[#26344A] bg-[#101A2B]"
            >
              <div className="relative flex aspect-[16/10] items-end overflow-hidden bg-linear-to-br from-[#122440] via-[#1C3859] to-[#315170] p-7">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

                <div className="absolute right-7 top-7 w-[58%] rounded-2xl border border-white/20 bg-[#0D2038]/70 p-4 shadow-2xl backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-20 rounded bg-white/50" />
                    <div className="h-5 w-5 rounded-full bg-[#FA713A]/[0.07]0" />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/10 p-2"
                      >
                        <div className="h-14 rounded-md bg-white/10" />
                        <div className="mt-2 h-1.5 w-2/3 rounded bg-white/25" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-200">
                    Catálogo digital
                  </span>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    San Blass
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-5 p-6">
                <div>
                  <h3 className="text-xl font-semibold">
                    Catálogo digital para ferretería
                  </h3>
                  <p className="mt-2 text-sm text-[#A1AEC3]">
                    Desarrollo · Catálogo · WhatsApp
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 text-[#FA713A] opacity-60 transition group-hover:opacity-100"
                />
              </div>
            </motion.article>

            <div className="grid gap-5">
              <motion.article
                {...fadeUp}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group overflow-hidden rounded-3xl border border-[#26344A] bg-[#101A2B]"
              >
                <div className="relative flex aspect-[16/7] items-end overflow-hidden bg-linear-to-br from-[#C8E4EF] via-[#EFF8FC] to-white p-6">
                  <div
                    aria-hidden="true"
                    className="absolute right-8 top-5 h-32 w-24 rounded-t-full rounded-b-2xl bg-[#8DB6C8]/30"
                  />
                  <span className="relative text-xl font-semibold text-[#294A59]">
                    By Didos
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-semibold">
                      Sitio para pastelería gourmet
                    </h3>
                    <p className="mt-1 text-sm text-[#A1AEC3]">
                      Diseño · Desarrollo · CMS
                    </p>
                  </div>
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="text-[#FA713A] opacity-60 transition group-hover:opacity-100"
                  />
                </div>
              </motion.article>

              <motion.article
                {...fadeUp}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group overflow-hidden rounded-3xl border border-[#26344A] bg-[#101A2B]"
              >
                <div className="relative flex aspect-[16/7] items-end overflow-hidden bg-linear-to-br from-[#242238] to-[#4B3040] p-6">
                  <div className="absolute right-8 top-6 grid h-24 w-36 grid-cols-3 gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-white/10"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="relative text-xl font-semibold text-white">
                    Lume
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-semibold">
                      Landing page de lanzamiento
                    </h3>
                    <p className="mt-1 text-sm text-[#A1AEC3]">
                      Diseño · Branding
                    </p>
                  </div>
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="text-[#FA713A] opacity-60 transition group-hover:opacity-100"
                  />
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section> */}

      {/* PROCESS */}
      <section
        id="proceso"
        className="relative  py-20 md:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Nuestro proceso
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] text-white md:text-4xl lg:text-5xl">
              Primero entendemos. Después resolvemos.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A1AEC3]">
              El proceso se adapta al servicio, pero la idea es siempre la
              misma: saber qué se va a hacer, por qué y cuál es el siguiente
              paso.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-10 grid-cols-2 lg:grid-cols-4">
            
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="relative border-t border-[#304059] items-center pt-6 text-center lg:border-t-0"
              >
                

                <span className="block font-mono text-sm text-[#FA713A]">
                  {step.number.padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A1AEC3]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES / TECHNOLOGIES */}
      <section
        id="tecnologias"
        className="  py-12"
      >
        <div className="mx-auto grid max-w-7xl gap-9 px-5 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <div className="flex items-center gap-3">
              <Code2 size={20} aria-hidden="true" className="text-[#2f85fe]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#cfd5e0]">
                Stack digital
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {digitalTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#5780b9] bg-[#00225d82] px-3 py-2 text-xs font-medium text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[#233149] pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
            <div className="flex items-center gap-3">
              <MonitorCog
                size={20}
                aria-hidden="true"
                className="text-[#FA713A]"
              />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#ffffff]">
                Capacidades IT
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {itCapabilities.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#a53001] bg-[#6b1e0095] px-3 py-2 text-xs font-medium text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto-home" className="py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-[#664234] bg-linear-to-br from-[#572B25] via-[#292339] to-[#152239] px-7 py-12 text-white md:px-10 md:py-14 xl:flex xl:items-center xl:justify-between xl:gap-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-orange-300/5 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            />

            <div className="relative max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                ¿Qué necesitás resolver?
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                Un proyecto digital o un problema técnico. Hablemos.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#BBC4D2]">
                Contanos qué necesitás y evaluamos si la mejor solución pasa por
                una web, una integración, tus equipos o soporte técnico.
              </p>
            </div>

            <div className="relative mt-8 flex shrink-0 flex-col gap-3 sm:flex-row xl:mt-0 xl:flex-col">
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064]"
              >
                Solicitar presupuesto
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-[#FFB297] transition hover:bg-white/10"
                >
                  Consultar por WhatsApp
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
