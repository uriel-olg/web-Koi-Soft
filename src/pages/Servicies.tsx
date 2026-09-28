import { useLocation } from "react-router";




import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
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
import { Link } from "react-router";
import { useEffect, useEffectEvent } from "react";

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

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

export default function Servicies() {

  const { hash, key } = useLocation();
  
  useEffect(() => {
    if (!hash) return;
  
    const frame = requestAnimationFrame(() => {
      const elemento = document.getElementById(
        decodeURIComponent(hash.slice(1))
      );
  
      elemento?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  
    return () => cancelAnimationFrame(frame);
  }, [hash, key]);

  return (
   
   <main id="Servicios" className="overflow-hidden  text-[#0B1730]">
      
      {/* HERO */}
      <section className="relative overflow-hidden" >
        <div className="pointer-events-none absolute -right-40 -top-40 h-130 w-130 rounded-full  blur-3xl" />
        <div className="pointer-events-none absolute left-[-180px] top-52 h-[420px] w-[420px] rounded-full  blur-3xl" />

        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-600 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500">
              <Sparkles size={15} />
              Servicios digitales
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
              Tecnología para hacer que tu negocio
              <span className="text-orange-500"> funcione mejor.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
              Diseñamos sitios web, landing pages y automatizaciones enfocadas
              en resolver problemas reales, mejorar procesos y crear mejores
              experiencias digitales.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
              >
                Solicitar presupuesto
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition duration-300 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
              >
                Explorar servicios
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              {[
                "Diseño a medida",
                "Responsive",
                "Soporte post-lanzamiento",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-slate-400">
                  <Check size={15} className="text-orange-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="absolute inset-12 rounded-full bg-orange-100/70 blur-[90px]" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-10 z-20 hidden items-center gap-3 rounded-2xl border border-orange-100 bg-white/90 p-3 shadow-xl shadow-blue-950/10 backdrop-blur lg:flex"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
                <Workflow size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">
                  Procesos conectados
                </p>
                <p className="mt-0.5 text-[11px] text-slate-600">
                  Menos tareas manuales
                </p>
              </div>
            </motion.div>

            <div className="relative z-10 overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_30px_80px_-30px_rgba(11,23,48,.18)]">
              <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-orange-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                <div className="ml-3 flex-1 rounded-lg bg-orange-50 px-4 py-2 text-xs text-orange-700">
                  hzsoft.dev/servicios
                </div>
              </div>

              <div className="p-5 md:p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div className="h-3 w-24 rounded-full bg-gradient-to-r from-orange-700 to-orange-400" />
                  <div className="flex gap-2">
                    <span className="h-2 w-8 rounded-full bg-gray-200" />
                    <span className="h-2 w-8 rounded-full bg-gray-200" />
                    <span className="h-2 w-8 rounded-full bg-orange-100" />
                  </div>
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                  Solución digital
                </span>
                <h3 className="mt-3 max-w-sm font-display text-2xl font-semibold tracking-tight">
                  Web + automatización en un mismo ecosistema.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Una estructura pensada para presentar tu negocio, captar
                  consultas y conectar procesos internos.
                </p>

                <div className="mt-7 grid grid-cols-[1.2fr_.8fr] gap-3">
                  <div className="relative min-h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1730] via-[#142B4D] to-[#203D62] p-5">
                    <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-white/15" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <span className="text-xs font-medium text-slate-200">
                          Desarrollo web
                        </span>
                        <p className="mt-2 max-w-[170px] text-xl font-semibold text-white">
                          Experiencias rápidas y claras.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="h-8 w-8 rounded-full bg-white/20" />
                        <span className="h-8 w-20 rounded-full bg-white/15" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <Bot size={22} className="text-orange-700" />
                      <p className="mt-4 text-xs font-semibold">
                        Automatización
                      </p>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Flujos conectados
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <Gauge size={22} className="text-orange-700" />
                      <p className="mt-4 text-xs font-semibold">Performance</p>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Carga optimizada
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["Responsive", "Integrado", "Escalable"].map((metric) => (
                    <div
                      key={metric}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-3"
                    >
                      <strong className="block text-sm text-orange-800">✓</strong>
                      <span className="text-[11px] text-slate-600">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="bg-[#071024] text-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-sm font-semibold text-orange-500">
              Nuestros servicios
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Seis formas de resolver necesidades digitales reales.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
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
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group flex min-h-[310px] flex-col rounded-3xl border border-orange-500/20 bg-[#122440] p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-950/5 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-700 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <span className="font-display text-sm font-medium text-slate-100">
                      {service.number}
                    </span>
                  </div>

                  <div className="mt-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-500">
                      {service.tag}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to="/contacto"
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
                  >
                    Consultar servicio
                    <ArrowRight
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
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-orange-500">
                Cada proyecto
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl text-white">
                Una buena solución necesita una buena base.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-gray-400">
                No importa si empezamos por una landing o por una
                automatización: trabajamos con criterios de rendimiento,
                claridad y mantenimiento.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="grid gap-x-10 md:grid-cols-2">
              {includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-t border-orange-500 py-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-400/20 text-orange-500">
                    <Check size={14} />
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-gray-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-orange-600">
                Servicio destacado
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Landing pages pensadas para convertir.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
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
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <Check size={16} className="text-orange-600" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/contacto"
                className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
              >
                Consultar landing page
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div {...fadeUp} className="relative">
              <div className="absolute inset-12 rounded-full bg-orange-100/60 blur-[85px]" />
              <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-3 shadow-[0_30px_80px_-35px_rgba(11,23,48,.16)]">
                <div className="overflow-hidden rounded-[20px] border border-gray-200 bg-white">
                  <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-orange-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-orange-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <div className="ml-3 h-7 flex-1 rounded-md bg-orange-50" />
                  </div>

                  <div className="relative min-h-[390px] overflow-hidden p-7">
                    <div className="absolute -right-28 -top-24 h-64 w-64 rounded-full bg-orange-100 blur-3xl" />
                    <span className="relative text-xs font-semibold text-orange-700">
                      LANDING PAGE
                    </span>
                    <div className="relative mt-5 h-5 w-[75%] rounded-full bg-orange-800" />
                    <div className="relative mt-3 h-5 w-[55%] rounded-full bg-orange-700" />
                    <div className="relative mt-6 h-2.5 w-[82%] rounded-full bg-gray-200" />
                    <div className="relative mt-2 h-2.5 w-[64%] rounded-full bg-gray-200" />
                    <div className="relative mt-7 h-10 w-36 rounded-xl bg-orange-700" />

                    <div className="relative mt-10 grid grid-cols-3 gap-3">
                      {[0, 1, 2].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-gray-200 bg-gray-50 p-3"
                        >
                          <div
                            className={`h-20 rounded-xl ${item === 1 ? "bg-orange-100" : "bg-white"}`}
                          />
                          <div className="mt-3 h-2 w-[78%] rounded bg-gray-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#071024] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-sm font-semibold text-orange-500">
              Nuestro proceso
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-white">
              De la idea al lanzamiento, sin perder claridad.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Cada etapa tiene un objetivo concreto para que siempre sepas qué
              estamos haciendo y qué viene después.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-px w-9/12 m-auto  lg:block" />

            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex flex-col items-center "
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg shadow-orange-900/15">
                    <Icon size={18} />
                  </div>
                  <span className="mt-5 block text-xs font-semibold text-orange-500">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300 text-center">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-sm font-semibold text-orange-600">
              ¿Para quién?
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Soluciones para negocios que quieren avanzar.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-3">
            {audiences.map((audience, index) => (
              <motion.span
                key={audience}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm"
              >
                {audience}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-sm font-semibold text-orange-500">
              Clientes
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl text-white">
              Proyectos construidos para negocios reales.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-8"
              >
                <p className="font-display text-lg font-medium leading-8 text-gray-900 md:text-xl">
                  “{testimonial.quote}”
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 font-display text-sm font-semibold text-orange-800">
                    {testimonial.initials}
                  </div>
                  <div>
                    <strong className="block text-sm text-gray-900">
                      {testimonial.name}
                    </strong>
                    <span className="text-xs text-gray-600">
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
      <section className="bg-gray-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-10">
          <motion.div {...fadeUp}>
            <span className="text-sm font-semibold text-orange-600">
              Preguntas frecuentes
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Algunas dudas antes de empezar.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
              Si tu proyecto tiene necesidades particulares, lo vemos
              directamente en una primera conversación.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="border-t border-orange-400">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-orange-400 py-5 transition-all duration-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium text-gray-900 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lg text-orange-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-6 text-gray-600 transition-all duration-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[32px] bg-[#0B1730] border border-orange-500/20 px-7 py-14 text-white md:px-12 md:py-16 lg:flex lg:items-center lg:justify-between lg:px-16"
          >
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative max-w-xl">
              <span className="text-sm font-semibold text-orange-300">
                Empecemos
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                ¿Qué parte de tu negocio podríamos mejorar primero?
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Contanos qué necesitás y evaluamos juntos qué solución tiene más
                sentido para tu situación.
              </p>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <Link
                to="/contacto"
                className="
                group inline-flex items-center justify-center gap-3
                rounded-2xl
                border border-white/20
                bg-orange-700
                px-6 py-3.5
                text-sm font-semibold text-white
                shadow-lg shadow-slate-950/10
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:bg-orange-800
                hover:shadow-xl
               focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
              >
                Solicitar presupuesto
                <ArrowRight
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
