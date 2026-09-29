import { Link, useLocation } from "react-router";
import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Code2,
  Gauge,
  Headphones,
  Layers3,
  Workflow,
  Check,
  ArrowUpRight,
  Smartphone,
  Leaf,
} from "lucide-react";


const services = [
  {
    icon: Code2,
    number: "01",
    title: "Desarrollo web",
    description:
      "Landing pages, sitios institucionales y catálogos digitales diseñados para representar tu marca y convertir visitas en clientes.",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Automatizaciones",
    description:
      "Conectamos herramientas y procesos para reducir tareas manuales y hacer que tu negocio trabaje de forma más eficiente.",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Optimización",
    description:
      "Mejoramos velocidad, experiencia de usuario, estructura y rendimiento de sitios que ya están funcionando.",
  },
];
const benefits = [
  {
    icon: Layers3,
    title: "Diseño a medida",
    description:
      "Cada proyecto se construye alrededor de tu marca y tus objetivos.",
  },
  {
    icon: Bot,
    title: "Automatización real",
    description:
      "Creamos procesos que eliminan tareas repetitivas y ahorran tiempo.",
  },
  {
    icon: Headphones,
    title: "Soporte cercano",
    description:
      "Seguimos disponibles incluso después de publicar tu proyecto.",
  },
];
const process = [
  {
    number: "1",
    title: "Descubrimiento",
    description: "Entendemos tu negocio, objetivos, necesidades y referencias.",
  },
  {
    number: "2",
    title: "Diseño",
    description:
      "Definimos estructura, experiencia y dirección visual del proyecto.",
  },
  {
    number: "3",
    title: "Desarrollo",
    description:
      "Transformamos el diseño en una solución rápida, responsive y funcional.",
  },
  {
    number: "4",
    title: "Lanzamiento",
    description:
      "Publicamos, verificamos el funcionamiento y acompañamos la puesta en marcha.",
  },
];
const technologies = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "n8n",
  "Vercel",
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
    ? `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent("¡Hola! Me gustaría consultar por un proyecto.")}`
    : undefined;
  const { hash, key } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      let id = hash.slice(1);
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
      className="overflow-hidden font-sans text-[#F3F5FA] selection:bg-[#FA713A]/30 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-[#FFB297]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* decoraciones */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#28314B]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-48 h-80 w-80 rounded-full bg-[#FA713A]/5 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-12">
          {/* HERO LEFT */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55 }}
            className="relative z-10"
          >
            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFB297] sm:text-xs">
              <span className="h-px w-7 shrink-0 bg-[#FA713A]" />
              Web · Automatización · Optimización
            </div>
            <h1 className="max-w-2xl text-[2.6rem] font-medium leading-[1.08] tracking-[-0.055em] text-[#F3F5FA] sm:text-6xl lg:text-[3.65rem] xl:text-[4.5rem]">
              Hacemos que tu negocio
              <span className="mt-1 block text-[#FA713A]">
                funcione mejor online.
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-8 text-[#A1AEC3] sm:text-base">
              Diseñamos sitios web modernos y automatizamos procesos para
              negocios que buscan una presencia profesional, más eficiencia y
              menos tareas manuales.
            </p>
            {/* CTAS */}
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
                to="/proyectos"
                className="inline-flex items-center justify-center rounded-xl border border-[#344159] bg-transparent px-6 py-4 text-sm font-medium text-[#E2E8F0] transition-colors hover:border-[#FA713A]/60 hover:bg-white/5"
              >
                Ver proyectos
              </Link>
            </div>
            {/* pequeños beneficios */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#A1AEC3]">
              <span className="flex items-center gap-2">
                <Check
                  aria-hidden="true"
                  size={15}
                  className="text-[#FA713A]"
                />
                Diseño personalizado
              </span>
              <span className="flex items-center gap-2">
                <Check
                  aria-hidden="true"
                  size={15}
                  className="text-[#FA713A]"
                />
                Responsive
              </span>
              <span className="flex items-center gap-2">
                <Check
                  aria-hidden="true"
                  size={15}
                  className="text-[#FA713A]"
                />
                Soporte
              </span>
            </div>
          </motion.div>
          {/* Muestra visual ilustrativa; no depende de imágenes externas. */}
          <motion.div
            {...fadeUp}
            className="relative mx-auto w-full max-w-xl py-10 sm:px-4 lg:px-0"
          >
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-full bg-[#FA713A]/10 blur-[85px]"
            />
            <div className="relative overflow-hidden rounded-2xl border-[5px] bod bg-[#F4F1EA] text-[#202821] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)] motion-safe:sm:-rotate-3">
              <div className="flex items-center gap-1.5 bg-[#172237] rounded-xl mt-0.75 mx-1 px-4 py-3">
                {[1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#68768F]"
                  />
                ))}
                <span className="mx-auto text-[10px] tracking-[0.12em] text-[#BAC5D6]">
                  UNA IDEA, HECHA WEB
                </span>
              </div>
              <div className="p-5 sm:p-7">
                <div className="mb-8 flex items-center justify-between gap-3">
                  <span className="font-serif text-2xl font-medium tracking-[-0.035em]">
                    raíz.
                  </span>
                  <span className="text-[10px] text-[#526451]">
                    Colección · Nuestra historia ↗
                  </span>
                </div>
                <div className="grid grid-cols-[1.1fr_.9fr] items-center gap-3 sm:gap-5">
                  <div>
                    <p className="text-[9px] font-medium tracking-[0.15em] text-[#657566]">
                      OBJETOS CON ALMA
                    </p>
                    <p className="mt-3 font-serif text-[1.65rem] leading-[1.08] tracking-[-0.045em] sm:text-[2.5rem]">
                      Lo simple también es extraordinario.
                    </p>
                    <p className="mt-4 text-[11px] leading-5 text-[#536451]">
                      Piezas que acompañan tu espacio. Diseñadas para quedarse.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 rounded bg-[#344D39] px-3 py-2 text-[10px] text-white">
                      Conocé la colección{" "}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="relative h-48 overflow-hidden rounded-t-full rounded-b-lg bg-[#DCE0CB] sm:h-60"
                  >
                    <div className="absolute bottom-0 left-1/2 h-28 w-20 -translate-x-1/2 rounded-b-3xl rounded-t bg-linear-to-r from-[#BD7555] via-[#EDB087] to-[#C78B65] sm:h-32 sm:w-24" />
                    <Leaf
                      className="absolute bottom-24 left-1/2 h-24 w-24 -translate-x-1/2 -rotate-12 fill-[#718367] text-[#4F6648] sm:bottom-28 sm:h-28 sm:w-28"
                      strokeWidth={1}
                    />
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap justify-between gap-2 border-t border-[#CDD3C3] pt-4 text-[9px] tracking-wider text-[#536451]">
                  <span>DISEÑO CONSCIENTE</span>
                  <span>DETALLES QUE IMPORTAN</span>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 flex items-center gap-3 rounded-xl border border-[#3B465A] bg-[#172338] px-4 py-3 shadow-xl sm:-right-2">
              <Workflow
                size={20}
                aria-hidden="true"
                className="text-[#FA713A]"
              />
              <div>
                <p className="text-xs font-medium text-white">
                  Herramientas conectadas
                </p>
                <p className="mt-1 text-[11px] text-[#A1AEC3]">
                  Procesos más simples.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-xl border border-[#3B465A] bg-[#172338] px-4 py-3 shadow-xl sm:-left-3">
              <Smartphone
                size={20}
                aria-hidden="true"
                className="text-[#FA713A]"
              />
              <div>
                <p className="text-xs font-medium text-white">
                  Tu marca, en cada pantalla.
                </p>
                <p className="mt-1 text-[11px] text-[#A1AEC3]">
                  Diseño que se adapta.
                </p>
              </div>
            </div>
            <p className="mt-4 text-right text-[10px] text-[#A1AEC3]">
              Concepto visual ilustrativo · Raíz
            </p>
          </motion.div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
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
            Comunicación directa
          </span>
          <span className="flex items-center gap-3">
            <Workflow size={16} aria-hidden="true" className="text-[#FA713A]" />
            Procesos más simples
          </span>
        </div>
      </div>
      {/* SERVICES */}
      <section
        id="servicios"
        className="bg-[#080F1E] text-white py-20 md:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Servicios
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
              Tecnología aplicada a problemas reales.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#A1AEC3]">
              Diseñamos soluciones digitales que mejoran cómo tu negocio se
              presenta, trabaja y conecta con sus clientes.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="group flex h-full flex-col rounded-2xl border border-[#26344A] bg-[#101A2B] p-7 transition-colors duration-300 hover:border-[#785040] hover:bg-[#152035] md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                    <span className="font-mono text-xs text-[#8190A6]">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#B8C4D5]">
                    {service.description}
                  </p>
                  <Link
                    to="/servicios"
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-[#FFB297]"
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
        <div className="mx-auto max-w-[1184px] rounded-3xl bg-[#E9E7E1] px-6 py-12 text-[#152136] sm:p-10 lg:p-14">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <motion.div {...fadeUp}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d04e1f]">
                Por qué KoiBite
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl text-[#152136]">
                Menos complicaciones.
                <br />
                Más soluciones.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#536074]">
                No se trata solamente de construir una web. Buscamos crear una
                herramienta útil para tu negocio.
              </p>
            </motion.div>
            <div>
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
                    className="grid gap-4 border-t border-[#BFC4C6] py-7 sm:grid-cols-[60px_1fr]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DCDDD5] text-[#d04e1f]">
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
      {/* PROJECTS */}
      <section id="proyectos" className="bg-[#080F1E] py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            {...fadeUp}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-orange-600">
                Proyectos
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
                Ideas convertidas en productos digitales.
              </h2>
            </div>
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600"
            >
              Todos los proyectos
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </motion.div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            {/* SAN BLASS */}
            <motion.article
              {...fadeUp}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group overflow-hidden rounded-3xl border border-[#26344A] bg-[#101A2B]"
            >
              <div className="relative flex aspect-[16/10] items-end overflow-hidden bg-gradient-to-br from-[#122440] via-[#1C3859] to-[#315170] p-7">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
                <div className="absolute right-8 top-8 w-[55%] rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <div className="h-2 w-20 rounded bg-white/50" />
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-20 rounded-lg bg-white/15" />
                    <div className="h-20 rounded-lg bg-white/15" />
                    <div className="h-20 rounded-lg bg-white/15" />
                  </div>
                </div>
                <span className="relative text-2xl font-semibold text-white">
                  San Blass
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  Catálogo digital para ferretería
                </h3>
                <p className="mt-2 text-sm text-[#A1AEC3]">
                  Desarrollo · Catálogo · Automatización
                </p>
              </div>
            </motion.article>
            <div className="grid gap-5">
              <motion.article
                {...fadeUp}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="overflow-hidden rounded-3xl border border-[#26344A] bg-[#101A2B]"
              >
                <div className="flex aspect-[16/7] items-end bg-gradient-to-br from-blue-200 to-blue-50 p-6">
                  <span className="text-xl font-semibold text-blue-950">
                    By Didos
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">
                    Sitio para pastelería gourmet
                  </h3>
                  <p className="mt-1 text-sm text-[#A1AEC3]">
                    Diseño · Desarrollo
                  </p>
                </div>
              </motion.article>
              <motion.article
                {...fadeUp}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="overflow-hidden rounded-3xl border border-[#26344A] bg-[#101A2B]"
              >
                <div className="flex aspect-[16/7] items-end bg-gradient-to-br from-[#242238] to-[#4B3040] p-6">
                  <span className="text-xl font-semibold text-white">Lume</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">Landing page de lanzamiento</h3>
                  <p className="mt-1 text-sm text-[#A1AEC3]">
                    Diseño · Branding
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section id="proceso" className="bg-[#080F1E] py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Nuestro proceso
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl text-white">
              De una idea a un producto funcionando.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A1AEC3]">
              Un proceso claro para que siempre sepas qué estamos haciendo y por
              qué.
            </p>
          </motion.div>
          <div className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <motion.div
                key={step.number.padStart(2, "0")}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="relative border-t border-[#304059] pt-6 text-left"
              >
                <span className="font-mono text-sm text-[#FA713A]">
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
      {/* TECHNOLOGIES */}
      <section
        id="tecnologias"
        className="border-y border-[#233149] bg-[#080F1E] py-12"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#A1AEC3]">
            Tecnologías que utilizamos
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {technologies.map((tech) => (
              <span key={tech} className="text-sm font-medium text-[#B8C4D5]">
                {tech}
              </span>
            ))}
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
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-orange-300/5 blur-3xl" />
            <div className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="relative max-w-xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                ¿Tenés una idea?
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                Construyamos algo que realmente le sirva a tu negocio.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#A1AEC3]">
                Contanos qué necesitás y evaluamos juntos la mejor forma de
                llevarlo adelante.
              </p>
            </div>
            <div className="relative mt-8 flex shrink-0 flex-col gap-3 sm:flex-row xl:mt-0 xl:flex-col">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064]"
              >
                Empezar proyecto
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-[#FFB297] transition hover:bg-white/10"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
