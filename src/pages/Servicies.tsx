import { Link, useLocation } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Layers3,
  Lightbulb,
  Rocket,
  Search,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect } from "react";
const services = [
  {
    icon: Code2,
    number: "01",
    title: "Desarrollo web",
    description:
      "Sitios a medida, rápidos y pensados para transformar visitas en oportunidades reales para tu negocio.",
    tag: "Web",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Landing pages",
    description:
      "Páginas enfocadas en campañas, lanzamientos y validación de ideas con una experiencia clara y directa.",
    tag: "Conversión",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Automatizaciones",
    description:
      "Conectamos herramientas y procesos para reducir tareas repetitivas y mejorar tu operación diaria.",
    tag: "Automatización",
  },
  {
    icon: Gauge,
    number: "04",
    title: "Optimización y soporte",
    description:
      "Mejoramos velocidad, estructura y estabilidad de sitios que ya están funcionando.",
    tag: "Rendimiento",
  },
  {
    icon: ShoppingBag,
    number: "05",
    title: "E-commerce",
    description:
      "Tiendas digitales modernas, seguras y preparadas para acompañar el crecimiento de tu negocio.",
    tag: "Ventas",
  },
  {
    icon: Lightbulb,
    number: "06",
    title: "Consultoría digital",
    description:
      "Analizamos tu situación y definimos qué solución digital tiene sentido implementar primero.",
    tag: "Estrategia",
  },
];
const includes = [
  "Estrategia digital",
  "Diseño responsive",
  "Optimización de velocidad",
  "Integraciones con herramientas",
  "Analítica y medición",
  "SEO técnico",
  "Seguridad y buenas prácticas",
  "Capacitación y documentación",
  "Soporte continuo",
];
const process = [
  {
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, tus objetivos y lo que realmente necesita el proyecto.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estrategia",
    description:
      "Definimos alcance, estructura, prioridades y una dirección clara antes de construir.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Diseño y desarrollo",
    description:
      "Diseñamos, construimos, probamos y ajustamos cada parte de la solución.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Publicamos el proyecto y seguimos acompañando su funcionamiento y evolución.",
  },
];
const audiences = [
  "Negocios y pymes",
  "Emprendimientos",
  "Marcas personales",
  "Tiendas online",
  "Empresas que automatizan procesos",
];
const testimonials = [
  {
    initials: "BD",
    name: "By Didos",
    role: "Pastelería gourmet",
    quote:
      "El proyecto nos permitió ordenar mejor la presencia digital y simplificar la forma de mostrar nuestros productos.",
  },
  {
    initials: "SB",
    name: "San Blass",
    role: "Ferretería",
    quote:
      "La propuesta fue clara desde el comienzo y encontramos una solución práctica para llevar el catálogo al entorno digital.",
  },
];
const faqs = [
  {
    question: "¿Cuánto tiempo lleva un proyecto?",
    answer:
      "Depende del alcance. Una landing puede resolverse más rápido, mientras que un sitio con integraciones o automatizaciones requiere más etapas de diseño, desarrollo y pruebas.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "Con una idea clara del objetivo del proyecto es suficiente para la primera conversación. Luego ordenamos contenido, referencias y requerimientos juntos.",
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Sí. Podemos continuar con mantenimiento, ajustes, mejoras y soporte según las necesidades del proyecto.",
  },
  {
    question: "¿Pueden integrarse herramientas que ya uso?",
    answer:
      "Sí. Evaluamos las herramientas actuales y buscamos la forma más simple de conectarlas con la nueva solución.",
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
      className="overflow-hidden bg-[#080F1E] font-sans text-[#F3F5FA] selection:bg-[#FA713A]/30 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-[#FFB297] [&_section[id]]:scroll-mt-28"
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 h-130 w-130 rounded-full bg-[#28314B]/20 blur-3xl" />
        <div className="pointer-events-none absolute left-[-180px] top-52 h-[420px] w-[420px] rounded-full bg-[#FA713A]/5 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB297]">
              <Sparkles aria-hidden="true" size={15} />
              Servicios digitales
            </div>
            <h1 className="max-w-2xl text-[2.6rem] font-medium leading-[1.08] tracking-[-0.055em] text-[#F3F5FA] sm:text-6xl lg:text-[3.5rem] xl:text-[4.3rem]">
              Tecnología para hacer que tu negocio
              <span className="mt-1 block text-[#FA713A]">funcione mejor.</span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-8 text-[#A1AEC3] sm:text-base">
              Diseñamos sitios web, landing pages y automatizaciones enfocadas
              en resolver problemas reales, mejorar procesos y crear mejores
              experiencias digitales.
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
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-xl border border-[#344159] bg-transparent px-6 py-4 text-sm font-medium text-[#E2E8F0] transition-colors hover:border-[#FA713A]/60 hover:bg-white/5"
              >
                Explorar servicios
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#A1AEC3]">
              {[
                "Diseño a medida",
                "Responsive",
                "Soporte post-lanzamiento",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-[#A1AEC3]"
                >
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
          {/* Ilustración del servicio: no representa un panel real. */}
          <motion.div
            {...fadeUp}
            className="relative mx-auto w-full max-w-xl py-8 sm:px-3"
          >
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-[#FA713A]/10 blur-[85px]"
            />
            <div className="relative overflow-hidden rounded-2xl border border-[#344159] bg-[#101A2B] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] motion-safe:sm:-rotate-2">
              <div className="flex items-center gap-1.5 border-b border-[#26344A] bg-[#172237] px-5 py-4">
                {[1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#68768F]"
                  />
                ))}
                <span className="mx-auto text-[10px] uppercase tracking-[0.16em] text-[#BAC5D6]">
                  KoiBite / soluciones digitales
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#FFB297]">
                  <Sparkles size={14} aria-hidden="true" />
                  Una idea. Todo conectado.
                </div>
                <h2 className="mt-5 max-w-sm text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                  Tu web puede ser
                  <br />
                  el comienzo de algo más.
                </h2>
                <p className="mt-4 text-xs leading-6 text-[#A1AEC3]">
                  Una estructura pensada para presentar tu negocio, captar
                  consultas y conectar procesos internos.
                </p>
                <div className="mt-7 grid gap-3">
                  {[
                    {
                      icon: Code2,
                      title: "Tu presencia digital",
                      detail: "Una experiencia clara para tus clientes.",
                    },
                    {
                      icon: Workflow,
                      title: "Tus herramientas conectadas",
                      detail: "Información que llega a donde la necesitás.",
                    },
                    {
                      icon: Gauge,
                      title: "Más simple, más eficiente",
                      detail: "Menos tareas manuales en tu día a día.",
                    },
                  ].map(({ icon: Icon, title, detail }, index) => (
                    <div
                      key={title}
                      className={`flex items-center gap-4 rounded-xl border p-4 ${index === 2 ? "border-[#FA713A] bg-[#FA713A] text-[#14131B]" : "border-[#344159] bg-[#172338] text-[#F3F5FA]"}`}
                    >
                      <Icon
                        size={21}
                        aria-hidden="true"
                        className={`shrink-0 ${index === 2 ? "text-[#14131B]" : "text-[#FA713A]"}`}
                      />
                      <div>
                        <p className="text-sm font-medium">{title}</p>
                        <p
                          className={`mt-1 text-[11px] leading-5 ${index === 2 ? "text-[#3D281F]" : "text-[#A1AEC3]"}`}
                        >
                          {detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#26344A] pt-5 text-[10px] text-[#A1AEC3]">
                  {["Responsive", "Integrado", "Escalable"].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <Check
                        size={12}
                        aria-hidden="true"
                        className="text-[#FFB297]"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* SERVICES */}
      <section
        id="servicios"
        className="bg-[#080F1E] text-white py-20 md:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Nuestros servicios
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
              Seis formas de resolver necesidades digitales reales.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#A1AEC3]">
              Cada servicio parte de un objetivo concreto. No buscamos sumar
              funciones porque sí, sino construir lo que aporta valor.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.07,
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
                  <div className="mt-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FA713A]">
                      {service.tag}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#B8C4D5]">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    to="/contacto"
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-[#FA713A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
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
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <motion.div {...fadeUp}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                Cada proyecto
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl text-white">
                Una buena solución necesita una buena base.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#A1AEC3]">
                No importa si empezamos por una landing o por una
                automatización: trabajamos con criterios de rendimiento,
                claridad y mantenimiento.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="grid gap-x-10 md:grid-cols-2">
              {includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-t border-[#304059] py-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FA713A]/10 text-[#FA713A]">
                    <Check aria-hidden="true" size={14} />
                  </span>
                  <span className="text-sm font-medium text-[#B8C4D5]">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* FEATURED */}
      <section id="landing-pages" className="px-5 py-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1184px] rounded-3xl bg-[#E9E7E1] px-6 py-12 text-[#152136] sm:p-10 lg:p-14">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-[#974526]">
                Servicio destacado
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
                Landing pages pensadas para convertir.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#536074]">
                Ideales para campañas, lanzamientos o validación de una
                propuesta. Reducimos distracciones y construimos una experiencia
                enfocada en una acción principal.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Diseño enfocado en conversión",
                  "Carga rápida",
                  "Integraciones de marketing",
                  "Analítica y medición",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-[#334759]"
                  >
                    <Check
                      aria-hidden="true"
                      size={16}
                      className="text-[#974526]"
                    />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                to="/contacto"
                className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#152136] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#293C57]"
              >
                Consultar landing page
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <div className="overflow-hidden rounded-2xl border-[5px] border-[#26344A] bg-[#101A2B] shadow-xl motion-safe:sm:rotate-2">
                <div className="flex items-center gap-1.5 bg-[#172237] px-4 py-3">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#68768F]"
                    />
                  ))}
                  <span className="ml-auto text-[9px] tracking-widest text-[#BAC5D6]">
                    CONCEPTO / LANDING
                  </span>
                </div>
                <div className="relative overflow-hidden px-6 py-9 sm:px-8 sm:py-12">
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#FA713A]/15 blur-3xl"
                  />
                  <span className="relative text-[10px] uppercase tracking-[0.18em] text-[#FFB297]">
                    Tu próximo lanzamiento
                  </span>
                  <p className="relative mt-5 text-3xl font-medium leading-tight tracking-tight text-[#F3F5FA] sm:text-4xl">
                    Una propuesta.
                    <br />
                    Un mensaje claro.
                    <br />
                    <span className="text-[#FA713A]">Una acción.</span>
                  </p>
                  <p className="relative mt-5 max-w-xs text-xs leading-6 text-[#A1AEC3]">
                    Todo lo que tu cliente necesita entender para dar el
                    siguiente paso.
                  </p>
                  <span className="relative mt-7 inline-flex items-center gap-3 rounded-lg bg-[#FA713A] px-4 py-3 text-xs font-semibold text-[#14131B]">
                    Quiero saber más <ArrowRight size={14} aria-hidden="true" />
                  </span>
                  <div className="relative mt-9 grid grid-cols-3 gap-3 border-t border-[#344159] pt-5">
                    {["Claridad", "Diseño", "Enfoque"].map((item) => (
                      <span key={item} className="text-[10px] text-[#B8C4D5]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
              De la idea al lanzamiento, sin perder claridad.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#B8C4D5]">
              Cada etapa tiene un objetivo concreto para que siempre sepas qué
              estamos haciendo y qué viene después.
            </p>
          </motion.div>
          <div className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-px w-9/12 m-auto lg:block" />
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
                  className="flex flex-col items-start border-t border-[#304059] pt-6"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">
                    <Icon aria-hidden="true" size={18} />
                  </div>
                  <span className="mt-5 block text-xs font-semibold text-[#FA713A]">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#A1AEC3] text-left">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* AUDIENCE */}
      <section id="para-quien" className="bg-[#080F1E] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              ¿Para quién?
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
              Soluciones para negocios que quieren avanzar.
            </h2>
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-3">
            {audiences.map((audience, index) => (
              <motion.span
                key={audience}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="rounded-lg border border-[#344159] bg-[#101A2B] px-5 py-3 text-sm font-medium text-[#B8C4D5]"
              >
                {audience}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section id="clientes" className="py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Clientes
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl text-white">
              Proyectos construidos para negocios reales.
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
      </section>
      {/* FAQ */}
      <section
        id="preguntas-frecuentes"
        className="bg-[#080F1E] py-20 md:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-12">
          <motion.div {...fadeUp}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Preguntas frecuentes
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
              Algunas dudas antes de empezar.
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
                ¿Qué parte de tu negocio podríamos mejorar primero?
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
