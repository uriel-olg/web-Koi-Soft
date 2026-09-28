
import { useLocation } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Code2,
  Gauge,
  Headphones,
  Layers3,
  Workflow,
  Check,
} from "lucide-react";
import { Link } from "react-router";

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

const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: 0.55,
  },
};



export default function Home() {
  
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
    <main
      id="Hero" className="overflow-hidden text-[#0B1730]" 
    >
      {/* HERO */}

      <section className="relative overflow-hidden " >
        {/* decoraciones */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-50 h-[350px] w-[350px] -translate-x-1/2 rounded-full  blur-3xl" />

        <div
          className="
            mx-auto
            grid
            min-h-[calc(100vh-80px)]
            max-w-7xl
            items-center
            gap-14
            px-5
            py-20
            md:px-8
            md:py-24
            lg:grid-cols-2
            lg:gap-20
            lg:px-10
          "
        >
          {/* HERO LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10"
          >
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-500
                bg-orange-400/10
                px-4
                py-2
                text-sm 
                font-medium
                text-orange-500
              "
            >
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Web · Automatización · Optimización
            </div>

            <h1
              className="
                max-w-3xl
                font-display
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                lg:text-6xl
                xl:text-[4.3rem]
              "
            >
              Hacemos que tu negocio
              <span className="text-orange-500"> funcione mejor online.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-slate-400
                md:text-lg
                md:leading-8
              "
            >
              Diseñamos sitios web modernos y automatizamos procesos para
              negocios que buscan una presencia profesional, más eficiencia y
              menos tareas manuales.
            </p>

            {/* CTAS */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contacto"
                className="
                  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-orange-900/15
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-orange-800
                "
              >
                Solicitar presupuesto
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/proyectos"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-gray-900
                  transition
                  duration-300
                  hover:border-orange-200
                  hover:bg-orange-50
                  hover:text-orange-800
                "
              >
                Ver proyectos
              </Link>
            </div>

            {/* pequeños beneficios */}

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-orange-700" />
                Diseño personalizado
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-orange-700" />
                Responsive
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-orange-700" />
                Soporte
              </span>
            </div>
          </motion.div>

          {/* HERO RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* glow */}

            <div className="absolute inset-10 rounded-full bg-orange-100/70 blur-[80px]" />

            {/* floating card */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-4
                top-12
                z-20
                hidden
                rounded-2xl
                border
                border-orange-100
                bg-white
                p-3
                shadow-xl
                shadow-blue-950/10
                lg:flex
                lg:items-center
                lg:gap-3
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
                <Workflow size={20} />
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-900">
                  Automatización activa
                </p>

                <p className="mt-0.5 text-[11px] text-slate-600">
                  Procesos sincronizados
                </p>
              </div>
            </motion.div>

            {/* MOCKUP */}

            <div
              className="
                relative
                z-10
                overflow-hidden
                rounded-[28px]
                border
                border-gray-200
                bg-white
                shadow-[0_30px_80px_-30px_rgba(11,23,48,0.18)]
              "
            >
              {/* browser top */}

              <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-orange-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />

                <div
                  className="
                    ml-3
                    flex-1
                    rounded-lg
                    bg-orange-50
                    px-4
                    py-2
                    text-xs
                    text-orange-700
                  "
                >
                  negocio.com
                </div>
              </div>

              <div className="p-5 md:p-7">
                {/* mock nav */}

                <div className="mb-7 flex items-center justify-between">
                  <div className="h-3 w-24 rounded-full bg-gradient-to-r from-orange-700 to-orange-400" />

                  <div className="flex gap-2">
                    <span className="h-2 w-8 rounded-full bg-gray-200" />
                    <span className="h-2 w-8 rounded-full bg-gray-200" />
                    <span className="h-2 w-8 rounded-full bg-orange-100" />
                  </div>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-orange-700">
                  Caso de proyecto
                </span>

                <h3 className="mt-3 max-w-sm font-display text-2xl font-semibold tracking-tight">
                  Una experiencia digital simple y efectiva.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Catálogo conectado con procesos internos y una experiencia
                  rápida para los clientes.
                </p>

                {/* visual */}

                <div className="mt-7 grid grid-cols-[1.3fr_.7fr] gap-3">
                  <div
                    className="
                      relative
                      min-h-44
                      overflow-hidden
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#0B1730]
                      via-[#142B4D]
                      to-[#203D62]
                      p-5
                    "
                  >
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />

                    <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-white/10" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <span className="text-xs font-medium text-slate-200">
                          Catálogo digital
                        </span>

                        <p className="mt-2 max-w-[180px] text-xl font-semibold text-white">
                          Productos siempre disponibles.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-8 w-8 rounded-full bg-white/20" />
                        <span className="h-2 w-20 rounded-full bg-white/30" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                      <Workflow size={22} className="text-orange-600" />

                      <p className="mt-4 text-xs font-semibold">Automatizado</p>

                      <p className="mt-1 text-[11px] text-slate-600">
                        Flujo conectado
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <Gauge size={22} className="text-orange-600" />

                      <p className="mt-4 text-xs font-semibold">Rendimiento</p>

                      <p className="mt-1 text-[11px] text-slate-600">
                        Optimizado
                      </p>
                    </div>
                  </div>
                </div>

                {/* metrics */}

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <strong className="block text-sm text-orange-600">
                      100%
                    </strong>

                    <span className="text-[11px] text-slate-600">
                      Responsive
                    </span>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <strong className="block text-sm text-orange-600">
                      24/7
                    </strong>

                    <span className="text-[11px] text-slate-600">
                      Disponible
                    </span>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <strong className="block text-sm text-orange-600">
                      +UX
                    </strong>

                    <span className="text-[11px] text-slate-600">
                      Experiencia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="bg-[#071024] text-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-sm font-semibold text-orange-500">
              Servicios
            </span>

            <h2
              className="
                mt-3
                font-display
                text-3xl
                font-semibold
                tracking-tight
                md:text-4xl
                lg:text-5xl
              "
            >
              Tecnología aplicada a problemas reales.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="
                    group
                    rounded-3xl
                    border
                    border-orange-500/30
                    bg-[#122440]
                    p-7
                    transition-shadow
                    duration-300
                    hover:shadow-xl
                    hover:shadow-blue-950/5
                    md:p-8
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex h-12 w-12
                        items-center justify-center
                        rounded-2xl
                        bg-orange-300/10
                        text-orange-500
                        transition
                        group-hover:bg-orange-700
                        group-hover:text-white
                      "
                    >
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-medium text-orange-500 bg-white/5 px-3 py-2 rounded-4xl">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {service.description}
                  </p>

                  <Link
                    to="/servicios"
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-orange-400
                    "
                  >
                    Ver servicio
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

      {/* BENEFITS */}

      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-orange-500">
                Por qué KoiBite
              </span>

              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl text-white">
                Menos complicaciones.
                <br />
                Más soluciones.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-slate-400">
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
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="
                      grid
                      gap-4
                      border-t
                      border-orange-600/50
                      py-7
                      sm:grid-cols-[60px_1fr]
                    "
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
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

      <section className="bg-gray-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <motion.div
            {...fadeUp}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-orange-600">
                Proyectos
              </span>

              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Ideas convertidas en productos digitales.
              </h2>
            </div>

            <Link
              to="/proyectos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600"
            >
              Todos los proyectos
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            {/* SAN BLASS */}

            <motion.article
              {...fadeUp}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white"
            >
              <div
                className="
                  relative
                  flex
                  aspect-[16/10]
                  items-end
                  overflow-hidden
                  bg-gradient-to-br
                  from-blue-950
                  via-blue-800
                  to-blue-600
                  p-7
                "
              >
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />

                <div className="absolute right-8 top-8 w-[55%] rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <div className="h-2 w-20 rounded bg-white/50" />

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-20 rounded-lg bg-white/15" />
                    <div className="h-20 rounded-lg bg-white/15" />
                    <div className="h-20 rounded-lg bg-white/15" />
                  </div>
                </div>

                <span className="relative font-display text-2xl font-semibold text-white">
                  San Blass
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">
                  Catálogo digital para ferretería
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Desarrollo · Catálogo · Automatización
                </p>
              </div>
            </motion.article>

            <div className="grid gap-5">
              <motion.article
                {...fadeUp}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white"
              >
                <div className="flex aspect-[16/7] items-end bg-gradient-to-br from-blue-200 to-blue-50 p-6">
                  <span className="font-display text-xl font-semibold text-blue-950">
                    By Didos
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold">
                    Sitio para pastelería gourmet
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Diseño · Desarrollo
                  </p>
                </div>
              </motion.article>

              <motion.article
                {...fadeUp}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white"
              >
                <div className="flex aspect-[16/7] items-end bg-gradient-to-br from-gray-950 to-blue-950 p-6">
                  <span className="font-display text-xl font-semibold text-white">
                    Lume
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold">Landing page de lanzamiento</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Diseño · Branding
                  </p>
                </div>
              </motion.article>
            </div>
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
              De una idea a un producto funcionando.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Un proceso claro para que siempre sepas qué estamos haciendo y por
              qué.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            
           

            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative flex flex-col justify-center items-center text-center"
              >
                <span
                  className="
                    relative
                    
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-600
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-orange-900/20
                    
                  "
                >
                  {step.number}
                </span>

                <h3 className="mt-6 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}

      <section className="border-y border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <p className="text-center text-sm font-medium text-orange-600">
            Tecnologías que utilizamos
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  font-display
                  text-base
                  font-semibold
                  text-gray-500
                  transition
                  hover:text-orange-600
                  hover:cursor-pointer
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <motion.div
            {...fadeUp}
            className="
              relative
              overflow-hidden
              rounded-4xl
              border border-orange-500/20
              bg-[#0B1730]
              px-7
              py-14
              text-white
              md:px-12
              md:py-16
              lg:flex
              lg:items-center
              lg:justify-between
              lg:px-16
            "
          >
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-orange-300/5 blur-3xl" />

            <div className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative max-w-xl">
              <span className="text-sm font-semibold text-orange-500">
                ¿Tenés una idea?
              </span>

              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Construyamos algo que realmente le sirva a tu negocio.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Contanos qué necesitás y evaluamos juntos la mejor forma de
                llevarlo adelante.
              </p>
            </div>

            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                to="/contacto"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-orange-700
                "
              >
                Empezar proyecto
                <ArrowRight size={16} />
              </Link>

              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/25
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-orange-400
                  transition
                  hover:bg-white/10
                "
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
