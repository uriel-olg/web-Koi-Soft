import { Link, useLocation } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Cpu,
  Gauge,
  
  Headphones,
  Layers3,
  Lightbulb,
  MonitorCog,
  Search,
  Settings2,
  ShieldCheck,

  Wrench,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    category: "Digital",
    title: "Desarrollo web",
    description:
      "Landing pages, sitios institucionales y catálogos digitales pensados para representar tu marca, generar consultas y funcionar bien en cualquier pantalla.",
    tag: "Web",
  },
  {
    icon: Workflow,
    number: "02",
    category: "Digital",
    title: "Integraciones y automatización",
    description:
      "Conectamos formularios, WhatsApp, correo, CMS y herramientas externas para reducir tareas manuales y ordenar mejor tus procesos.",
    tag: "Procesos",
  },
  {
    icon: Gauge,
    number: "03",
    category: "Digital",
    title: "Optimización y mantenimiento web",
    description:
      "Mejoramos velocidad, experiencia responsive, estructura, estabilidad y mantenimiento de sitios que ya están funcionando.",
    tag: "Rendimiento",
  },
  {
    icon: Cpu,
    number: "04",
    category: "IT",
    title: "Armado y actualización de PCs",
    description:
      "Seleccionamos, ensamblamos y actualizamos componentes según el uso real del equipo, buscando rendimiento, compatibilidad y una configuración equilibrada.",
    tag: "Hardware",
  },
  {
    icon: Settings2,
    number: "05",
    category: "IT",
    title: "Sistemas, software y configuración",
    description:
      "Instalación y configuración de Windows, drivers, programas, periféricos y ajustes necesarios para dejar el equipo listo para trabajar.",
    tag: "Sistemas",
  },
  {
    icon: Wrench,
    number: "06",
    category: "IT",
    title: "Diagnóstico y mantenimiento",
    description:
      "Revisión de hardware, limpieza, optimización, mantenimiento preventivo y resolución de problemas de funcionamiento.",
    tag: "Soporte",
  },
];

const digitalIncludes = [
  "Diseño responsive",
  "Estructura clara y accesible",
  "Optimización de velocidad",
  "Integraciones necesarias",
  "SEO técnico básico",
  "Buenas prácticas de seguridad",
];

const itIncludes = [
  "Revisión inicial del equipo",
  "Compatibilidad de componentes",
  "Instalación y configuración",
  "Drivers y periféricos",
  "Pruebas de funcionamiento",
  "Recomendaciones de mantenimiento",
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Entendemos",
    description:
      "Nos contás qué necesitás, qué problema querés resolver y cómo trabajás hoy.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Proponemos",
    description:
      "Definimos una solución clara, su alcance y la mejor forma de implementarla.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Implementamos",
    description:
      "Desarrollamos, configuramos, instalamos o ponemos a punto la solución acordada.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Acompañamos",
    description:
      "Verificamos que todo funcione correctamente y quedamos disponibles para soporte.",
  },
];

const audiences = [
  "Negocios y pymes",
  "Profesionales",
  "Emprendimientos",
  "Comercios",
  "Equipos de trabajo",
  "Particulares",
];



const faqs = [
  {
    question: "¿Puedo contratar solamente un servicio?",
    answer:
      "Sí. No necesitás contratar un paquete completo. Podemos trabajar sobre una necesidad puntual, como una landing page, una actualización de PC, instalación de software o mantenimiento.",
  },
  {
    question: "¿Cómo sé si necesito una solución digital o soporte IT?",
    answer:
      "No hace falta que lo definas antes de escribirnos. Nos contás el problema u objetivo y evaluamos si conviene resolverlo desde la web, los sistemas, el equipo o una combinación de varias áreas.",
  },
  {
    question: "¿Ofrecen soporte después de la entrega?",
    answer:
      "Sí. Podemos continuar con mantenimiento, ajustes, mejoras y soporte según las necesidades de cada proyecto o equipo.",
  },
  {
    question: "¿Pueden trabajar con una web o equipo que ya tengo?",
    answer:
      "Sí. Primero revisamos el estado actual y, si tiene sentido continuar sobre esa base, proponemos mejoras, actualizaciones o mantenimiento sin rehacer todo desde cero.",
  },
  {
    question: "¿Instalan Windows y programas?",
    answer:
      "Sí. Podemos realizar instalación y configuración del sistema, drivers y software necesario, utilizando licencias legítimas cuando corresponda.",
  },
];

export default function Servicies() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: reduceMotion ? (false as const) : { opacity: 0, y: 20 },

    whileInView: { opacity: 1, y: 0 },

    viewport: { once: true, amount: 0.15 },

    transition: { duration: reduceMotion ? 0 : 0.5 },
  };

  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      let id = hash.slice(1);

      try {
        id = decodeURIComponent(id);
      } catch {
        /* Conserva el hash literal. */
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
      id="Servicios"
      className="overflow-hidden  font-sans text-[#F3F5FA] selection:bg-[#FA713A]/30 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-[#FFB297] [&_section[id]]:scroll-mt-28"
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:52px_52px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#28314B]/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-180px] top-52 h-[420px] w-[420px] rounded-full bg-[#FA713A]/6 blur-3xl"
        />

        <div className="mx-auto mt-10 grid max-w-7xl items-center gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="relative z-10"
          >
            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB297]">
              <span className="h-px w-7 bg-[#FA713A]" />
              Soluciones digitales + soporte IT
            </div>

            <h1 className="max-w-3xl text-[2.6rem] font-medium leading-[1.05] tracking-[-0.055em] text-[#F3F5FA] sm:text-6xl lg:text-[3.6rem] xl:text-[4.5rem]">
              Soluciones para la tecnología que
              <span className="mt-1 block text-[#FA713A]">
                mueve tu negocio.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#A1AEC3] sm:text-base">
              Desde tu presencia online hasta los equipos con los que trabajás.
              Diseñamos, configuramos y mantenemos soluciones tecnológicas
              pensadas para resolver necesidades concretas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064]"
              >
                Contanos qué necesitás
                <ArrowRight
                  aria-hidden="true"
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-xl border border-[#344159] bg-white/[0.02] px-6 py-4 text-sm font-medium text-[#E2E8F0] transition-colors hover:border-[#FA713A]/60 hover:bg-white/5"
              >
                Explorar servicios
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#A1AEC3]">
              {[
                "Soluciones a medida",
                "Atención directa",
                "Soporte continuo",
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

          <motion.div
            {...fadeUp}
            className="relative mx-auto w-full max-w-xl py-8 sm:px-3"
          >
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-[#FA713A]/10 blur-[90px]"
            />

            <div className="relative overflow-hidden rounded-[26px] border border-[#344159] bg-[#0D1728] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)]">
              {/* top bar */}
              <div className="flex items-center gap-1.5 border-b border-[#26344A] bg-[#111D30] px-5 py-4">
                {[1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#68768F]"
                  />
                ))}

                <span className="mx-auto -translate-x-3 text-[9px] uppercase tracking-[0.16em] text-[#8190A6]">
                  KoiBite / servicios
                </span>
              </div>

              <div className="relative min-h-[430px] overflow-hidden p-6 sm:p-8">
                {/* fondos decorativos */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
                />

                {/* líneas conectoras */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-[28%] h-[22%] w-px -translate-x-1/2 bg-linear-to-b from-[#7DB3FF]/40 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-[28%] top-1/2 h-px w-[22%] -translate-y-1/2 bg-linear-to-r from-[#7DB3FF]/40 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-[28%] top-1/2 h-px w-[22%] -translate-y-1/2 bg-linear-to-l from-[#FA713A]/50 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 bottom-[28%] h-[22%] w-px -translate-x-1/2 bg-linear-to-t from-[#FA713A]/45 to-transparent"
                />

                {/* núcleo central */}
                <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#FA713A]/25 bg-[#141F31] shadow-[0_0_0_10px_rgba(250,113,58,0.04)]">
                  
                  <p className="mt-3 text-sm font-semibold text-white">
                    KoiBite
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#8190A6]">
                    Digital + IT
                  </p>
                </div>

                {/* nodo arriba */}
                <div className="absolute left-1/2 top-8 z-10 w-[148px] -translate-x-1/2 rounded-2xl border border-[#29405F] bg-[#111D30] p-4 text-center">
                  <Code2
                    size={18}
                    aria-hidden="true"
                    className="mx-auto text-[#7DB3FF]"
                  />
                  <p className="mt-3 text-xs font-semibold text-white">Web</p>
                </div>

                {/* nodo izquierda */}
                <div className="absolute left-4 top-1/2 z-10 w-[150px] -translate-y-1/2 rounded-2xl border border-[#29405F] bg-[#101B2D] p-4 text-center">
                  <Workflow
                    size={18}
                    aria-hidden="true"
                    className="mx-auto text-[#7DB3FF]"
                  />
                  <p className="mt-3 text-xs font-semibold text-white">
                    Integraciones
                  </p>
                </div>

                {/* nodo derecha */}
                <div className="absolute right-4 top-1/2 z-10 w-[150px] -translate-y-1/2 rounded-2xl border border-[#44353A] bg-[#171A27] p-4 text-center">
                  <MonitorCog
                    size={18}
                    aria-hidden="true"
                    className="mx-auto text-[#FA713A]"
                  />
                  <p className="mt-3 text-xs font-semibold text-white">
                    Soporte IT
                  </p>
                </div>

                {/* nodo abajo */}
                <div className="absolute bottom-8 left-1/2 z-10 w-[148px] -translate-x-1/2 rounded-2xl border border-[#44353A] bg-[#171A27] p-4 text-center">
                  <Cpu
                    size={18}
                    aria-hidden="true"
                    className="mx-auto text-[#FA713A]"
                  />
                  <p className="mt-3 text-xs font-semibold text-white">
                    Hardware
                  </p>
                </div>

                {/* mini cards flotantes */}
                <div className="absolute left-6 top-10 hidden rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[10px] text-[#9CB0C8] sm:block">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7DB3FF]" />
                    Responsive
                  </span>
                </div>

                <div className="absolute bottom-10 right-6 hidden rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[10px] text-[#9CB0C8] sm:block">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FA713A]" />
                    Mantenimiento
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                Nuestros servicios
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
                Dos áreas. Seis formas de ayudarte.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#A1AEC3]">
                No buscamos vender tecnología porque sí. Cada servicio parte de
                una necesidad concreta y se adapta al contexto de tu negocio,
                proyecto o equipo.
              </p>
            </div>

            <div className="flex w-fit items-center gap-1 rounded-full border border-[#2B3A53] bg-[#101A2B] p-1 text-[10px] font-semibold uppercase tracking-[0.14em]">
              <span className="rounded-full bg-[#17243A] px-3 py-2 text-[#8DBBFF]">
                Digital
              </span>
              <span className="rounded-full px-3 py-2 text-[#FFB297]">IT</span>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-[#26344A] bg-[#0D1727] p-3 sm:grid-cols-2">
            <a
              href="#digital"
              className="group flex items-center justify-between rounded-xl border border-[#29405F] bg-[#101B2D] px-5 py-4 transition hover:border-[#45658E]"
            >
              <div className="flex items-center gap-3">
                <Code2
                  size={18}
                  aria-hidden="true"
                  className="text-[#7DB3FF]"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Soluciones digitales
                  </p>
                  <p className="mt-1 text-[10px] text-[#7E8DA2]">
                    Web · Integraciones · Optimización
                  </p>
                </div>
              </div>
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="text-[#7DB3FF] transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#it"
              className="group flex items-center justify-between rounded-xl border border-[#44353A] bg-[#151722] px-5 py-4 transition hover:border-[#785040]"
            >
              <div className="flex items-center gap-3">
                <MonitorCog
                  size={18}
                  aria-hidden="true"
                  className="text-[#FA713A]"
                />
                <div>
                  <p className="text-sm font-semibold text-white">Soporte IT</p>
                  <p className="mt-1 text-[10px] text-[#8F8388]">
                    PCs · Sistemas · Hardware
                  </p>
                </div>
              </div>
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="text-[#FA713A] transition group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isIT = service.category === "IT";

              return (
                <motion.article
                  key={service.title}
                  id={index === 0 ? "digital" : index === 3 ? "it" : undefined}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-[#26344A] bg-[#101A2B] p-7 transition-colors duration-300 hover:border-[#785040] hover:bg-[#152035] md:p-8"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-px ${
                      isIT
                        ? "bg-linear-to-r from-transparent via-[#FA713A]/65 to-transparent"
                        : "bg-linear-to-r from-transparent via-[#7DB3FF]/60 to-transparent"
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

                  <div className="mt-8">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
                        isIT ? "text-[#FFB297]" : "text-[#8DBBFF]"
                      }`}
                    >
                      {service.tag}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#B8C4D5]">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to="/contacto"
                    className={`mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold ${
                      isIT ? "text-[#FFB297]" : "text-[#8DBBFF]"
                    }`}
                  >
                    Consultar servicio
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

      {/* INCLUDES */}
      <section id="incluye" className="py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <motion.div {...fadeUp}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                Cómo trabajamos
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] text-white md:text-4xl">
                Una buena solución necesita una buena base.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#A1AEC3]">
                El resultado cambia según el servicio, pero siempre buscamos
                claridad, funcionamiento, buenas prácticas y una solución que
                puedas mantener en el tiempo.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#344159] bg-[#101A2B] px-4 py-3">
                <ShieldCheck
                  size={18}
                  aria-hidden="true"
                  className="text-[#FA713A]"
                />
                <span className="text-xs text-[#B8C4D5]">
                  Sin agregar complejidad innecesaria.
                </span>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-[#29405F] bg-[#0D192B]">
                <div className="flex items-center gap-3 border-b border-[#29405F] px-5 py-4">
                  <Code2
                    size={17}
                    aria-hidden="true"
                    className="text-[#7DB3FF]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">Digital</p>
                    <p className="mt-0.5 text-[10px] text-[#71839B]">
                      Base para proyectos web
                    </p>
                  </div>
                </div>

                <div className="px-5">
                  {digitalIncludes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-t border-[#263851] py-4 first:border-t-0"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-[#7DB3FF]">
                        <Check aria-hidden="true" size={13} />
                      </span>
                      <span className="text-sm text-[#B8C4D5]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#44353A] bg-[#151722]">
                <div className="flex items-center gap-3 border-b border-[#44353A] px-5 py-4">
                  <MonitorCog
                    size={17}
                    aria-hidden="true"
                    className="text-[#FA713A]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Soporte IT
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#8A7A80]">
                      Base para equipos y sistemas
                    </p>
                  </div>
                </div>

                <div className="px-5">
                  {itIncludes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-t border-[#3A3034] py-4 first:border-t-0"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FA713A]/10 text-[#FA713A]">
                        <Check aria-hidden="true" size={13} />
                      </span>
                      <span className="text-sm text-[#B8C4D5]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="solucion-integral" className="px-5 py-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1184px] overflow-hidden rounded-3xl bg-[#E9E7E1] text-[#152136]">
          <div className="grid items-stretch lg:grid-cols-[1fr_.95fr]">
            <motion.div {...fadeUp} className="px-6 py-12 sm:p-10 lg:p-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D04E1F]">
                Una sola relación
              </span>
              <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
                Tu negocio no termina en la web.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#536074]">
                Podés necesitar una página para conseguir clientes, pero también
                equipos configurados, software funcionando y soporte cuando algo
                falla. KoiBite busca cubrir ambos lados de esa tecnología.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Presencia digital profesional",
                  "Equipos configurados",
                  "Herramientas conectadas",
                  "Mantenimiento y soporte",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-[#334759]"
                  >
                    <Check
                      aria-hidden="true"
                      size={16}
                      className="text-[#D04E1F]"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/contacto"
                className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#152136] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#293C57]"
              >
                Contarnos tu situación
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative min-h-[420px] overflow-hidden  p-6 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#FA713A]/10 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
              />

              <div className="relative flex h-full flex-col justify-center">
                <div className="rounded-2xl border border-[#344159] bg-[#0D1728] p-5 shadow-xl">
                  <div className="flex items-center justify-between border-b border-[#26344A] pb-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8190A6]">
                        KoiBite
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Tecnología del negocio
                      </p>
                    </div>
                    <span className="rounded-full border border-[#FA713A]/20 bg-[#FA713A]/10 px-2.5 py-1 text-[9px] font-semibold text-[#FFB297]">
                      Digital + IT
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <div className="rounded-xl border border-[#29405F] bg-[#111D30] p-4 text-center">
                      <Code2
                        size={21}
                        aria-hidden="true"
                        className="mx-auto text-[#7DB3FF]"
                      />
                      <p className="mt-3 text-xs font-semibold text-white">
                        Presencia digital
                      </p>
                      <p className="mt-1 text-[9px] text-[#7E8DA2]">
                        Web · Integraciones
                      </p>
                    </div>

                    <span className="text-[#607088]">+</span>

                    <div className="rounded-xl border border-[#44353A] bg-[#171A27] p-4 text-center">
                      <MonitorCog
                        size={21}
                        aria-hidden="true"
                        className="mx-auto text-[#FA713A]"
                      />
                      <p className="mt-3 text-xs font-semibold text-white">
                        Infraestructura IT
                      </p>
                      <p className="mt-1 text-[9px] text-[#8F8388]">
                        Equipos · Sistemas
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#8190A6]">
                      Resultado
                    </p>
                    <p className="mt-2 text-base font-medium text-white">
                      Menos proveedores. Más continuidad.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { icon: Layers3, text: "Implementar" },
                    { icon: Gauge, text: "Optimizar" },
                    { icon: ShieldCheck, text: "Mantener" },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="rounded-xl border border-[#304059] bg-[#172338] px-3 py-3 text-center"
                    >
                      <Icon
                        size={15}
                        aria-hidden="true"
                        className="mx-auto text-[#FA713A]"
                      />
                      <span className="mt-2 block text-[9px] text-[#A1AEC3]">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className=" py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Nuestro proceso
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] text-white md:text-4xl lg:text-5xl">
              Primero entendemos. Después resolvemos.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#B8C4D5]">
              El proceso se adapta al servicio, pero siempre buscamos que sepas
              qué estamos haciendo, por qué y cuál es el siguiente paso.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-10 grid-cols-2 lg:grid-cols-4">
            

            <div
              aria-hidden="true"
              className="absolute w-9/12 m-auto left-0 right-0 top-1 hidden h-px bg-linear-to-r from-[#FA713A]/40 via-[#304059] to-[#304059] lg:block"
            />
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="relative flex flex-col items-center text-center border-t border-[#304059] pt-6 lg:border-t-0"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-[#FA713A]/15 bg-[#101A2B] text-[#FA713A] lg:-mt-10">
                    <Icon aria-hidden="true" size={18} />
                  </div>
                  <span className="mt-5 block font-mono text-xs text-[#FA713A]">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#A1AEC3]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="para-quien" className=" py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <motion.div {...fadeUp}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                ¿Para quién?
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                Tecnología para distintas etapas y necesidades.
              </h2>
            </motion.div>

            <motion.div {...fadeUp} className="grid gap-3 sm:grid-cols-2">
              {audiences.map((audience, index) => (
                <div
                  key={audience}
                  className="group flex items-center justify-between rounded-xl border border-[#304059] bg-[#101A2B] px-5 py-4 transition hover:border-[#785040] hover:bg-[#152035]"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-[#5F718A]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-[#C0CAD8]">
                      {audience}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="text-[#FA713A] opacity-40 transition group-hover:opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      {/* <section id="clientes" className="py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Clientes
            </span>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl text-white">
              Soluciones aplicadas a negocios reales.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,

                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="rounded-2xl border border-[#26344A] bg-[#101A2B] p-7 md:p-8"
              >
                <p className="text-lg font-medium leading-8 text-[#F3F5FA] md:text-xl">
                  “{testimonial.quote}”
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FA713A]/10 text-sm font-semibold text-[#FFB297]">
                    {testimonial.initials}
                  </div>

                  <div>
                    <strong className="block text-sm text-[#F3F5FA]">
                      {testimonial.name}
                    </strong>

                    <span className="text-xs text-[#A1AEC3]">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ */}

      <section
        id="preguntas-frecuentes"
        className=" py-20 md:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-12">
          <motion.div {...fadeUp}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Preguntas frecuentes
            </span>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
              Antes de empezar.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[#A1AEC3]">
              Si tu proyecto tiene necesidades particulares, lo vemos
              directamente en una primera conversación.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="border-t border-[#304059]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[#304059] py-5 transition-all duration-300"
              >
                <summary className="flex cursor-pointer list-none [&::-webkit-details-marker]:hidden items-center justify-between gap-6 font-medium text-[#F3F5FA] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
                  {faq.question}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#172338] text-lg text-[#FFB297] transition-transform motion-reduce:transition-none group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-2xl pt-4 text-sm leading-6 text-[#A1AEC3] transition-all duration-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}

      <section id="contacto-servicios" className="py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-[#664234] bg-linear-to-br from-[#572B25] via-[#292339] to-[#152239] px-7 py-12 text-white md:px-10 md:py-14 xl:flex xl:items-center xl:justify-between xl:gap-10"
          >
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative max-w-xl">
              <span className="text-sm font-semibold text-[#FFB297]">
                Empecemos
              </span>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                ¿Qué necesitás que funcione mejor?
              </h2>

              <p className="mt-5 text-base leading-7 text-[#B8C4D5]">
                Contanos qué necesitás y evaluamos juntos qué solución tiene más
                sentido para tu situación.
              </p>
            </div>

            <div className="relative mt-8 shrink-0 xl:mt-0">
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064]"
              >
                Solicitar presupuesto
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
