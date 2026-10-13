import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  Code2,
  Cpu,
  HardDrive,
  Lightbulb,
  MonitorCog,
  Network,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

const valores = [
  {
    icono: Lightbulb,
    numero: "01",
    titulo: "Entender antes de resolver",
    descripcion:
      "Primero buscamos comprender el problema, el contexto y el objetivo. La herramienta viene después.",
    area: "neutral",
  },
  {
    icono: Target,
    numero: "02",
    titulo: "Tecnología con propósito",
    descripcion:
      "Cada decisión tiene que aportar algo concreto: claridad, eficiencia, presencia, estabilidad o crecimiento.",
    area: "digital",
  },
  {
    icono: Users,
    numero: "03",
    titulo: "Comunicación simple",
    descripcion:
      "Explicamos las opciones sin vueltas y mantenemos claro qué estamos haciendo, por qué y qué sigue.",
    area: "neutral",
  },
  {
    icono: ShieldCheck,
    numero: "04",
    titulo: "Pensar en continuidad",
    descripcion:
      "Buscamos soluciones mantenibles, ordenadas y preparadas para acompañar las próximas etapas del negocio.",
    area: "it",
  },
];

const proceso = [
  {
    numero: "01",
    titulo: "Entendemos",
    descripcion:
      "Conocemos tu negocio, cómo trabajás hoy y qué necesitás resolver.",
    icono: Lightbulb,
  },
  {
    numero: "02",
    titulo: "Definimos",
    descripcion:
      "Elegimos una solución proporcional al problema y dejamos claro el alcance.",
    icono: Target,
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
      "Probamos el resultado, hacemos ajustes y dejamos una base lista para seguir.",
    icono: Rocket,
  },
];

const digital = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "CMS",
  "APIs",
  "Automatizaciones",
];

const it = [
  "Windows",
  "Hardware",
  "Drivers",
  "Periféricos",
  "Diagnóstico",
  "Mantenimiento",
];

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA713A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080F1E]";

export default function Nosotros() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: reduceMotion ? (false as const) : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.5 },
  };

  return (
    <main
      id="Nosotros"
      className="min-h-screen overflow-hidden  text-white selection:bg-[#FA713A]/30 [&_section[id]]:scroll-mt-[88px]"
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:52px_52px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-44 -top-40 h-[520px] w-[520px] rounded-full bg-[#28314B]/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-40 top-60 h-[420px] w-[420px] rounded-full bg-[#FA713A]/6 blur-3xl"
        />

        <div
          className={`${container} relative grid items-center gap-14 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:grid-cols-[1.04fr_.96fr] lg:gap-16 lg:pb-28 lg:pt-40`}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="relative z-10"
          >
            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB297]">
              <span className="h-px w-7 bg-[#FA713A]" />
              Sobre KoiBite
            </div>

            <h1 className="max-w-3xl text-[2.7rem] font-medium leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-[3.7rem] xl:text-[4.6rem]">
              Tecnología pensada
              <span className="mt-1 block text-[#FA713A]">
                para resolver mejor.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#A1AEC3] sm:text-base">
              KoiBite combina soluciones digitales y soporte IT para ayudar a
              negocios y profesionales a trabajar con una tecnología más clara,
              útil y confiable.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#historia"
                className={`group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064] ${focus}`}
              >
                Conocé nuestra forma de pensar
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#valores"
                className={`inline-flex items-center justify-center rounded-xl border border-[#344159] bg-white/[0.02] px-6 py-4 text-sm font-medium text-[#E2E8F0] transition hover:border-[#FA713A]/50 hover:bg-white/5 ${focus}`}
              >
                Nuestros principios
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#A1AEC3]">
              {[
                "Digital + IT",
                "Soluciones proporcionales",
                "Comunicación clara",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check
                    size={14}
                    aria-hidden="true"
                    className="text-[#FA713A]"
                  />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.08,
            }}
            className="relative mx-auto w-full max-w-xl py-8 sm:px-3"
          >
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-full bg-[#FA713A]/10 blur-[100px]"
            />

            <div className="relative overflow-hidden rounded-[28px] border border-[#39475E] bg-[#0C1627] shadow-[0_40px_100px_-30px_rgba(0,0,0,.8)]">
              <div className="flex items-center border-b border-white/[0.08] bg-[#111D30] px-4 py-3.5">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#68768F]"
                    />
                  ))}
                </div>

                <div className="mx-auto flex -translate-x-3 items-center gap-2">
                  <img src="/KoiBite-log.svg" alt="" className="h-4 w-4" />
                  <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#8190A6]">
                    KoiBite / approach
                  </span>
                </div>
              </div>

              <div className="relative min-h-[430px] overflow-hidden p-5 sm:min-h-[460px] sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:34px_34px]"
                />
                <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-[#7DB3FF]/[0.07] blur-3xl" />
                <div className="absolute -right-20 bottom-8 h-60 w-60 rounded-full bg-[#FA713A]/[0.08] blur-3xl" />

                <div className="absolute left-1/2 top-[45%] z-20 flex h-[122px] w-[122px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[30px] border border-[#FA713A]/25 bg-[#131E30] shadow-[0_0_0_12px_rgba(250,113,58,.025),0_18px_45px_rgba(0,0,0,.4)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FA713A]/20 bg-[#FA713A]/10">
                    <img
                      src="/KoiBite-log.svg"
                      alt=""
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-white">
                    KoiBite
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#8190A6]">
                    Digital + IT
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute left-[20%] right-[20%] top-[45%] h-px bg-linear-to-r from-[#7DB3FF]/40 via-white/10 to-[#FA713A]/40"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-[19%] left-1/2 top-[45%] w-px -translate-x-1/2 bg-linear-to-b from-white/15 to-transparent"
                />

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="absolute left-4 top-[31%] z-10 w-[130px] rounded-2xl border border-[#29405F] bg-[#101B2D]/95 p-4 shadow-xl backdrop-blur sm:left-7 sm:w-[145px]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7DB3FF]/10 text-[#7DB3FF]">
                    <Code2 size={17} aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#8DBBFF]">
                    Digital
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                    <div className="h-1.5 w-2/3 rounded-full bg-white/[0.06]" />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="absolute right-4 top-[31%] z-10 w-[130px] rounded-2xl border border-[#44353A] bg-[#171A27]/95 p-4 shadow-xl backdrop-blur sm:right-7 sm:w-[145px]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">
                    <MonitorCog size={17} aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#FFB297]">
                    IT
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                    <div className="h-1.5 w-2/3 rounded-full bg-white/[0.06]" />
                  </div>
                </motion.div>

                <div className="absolute left-1/2 top-7 z-10 -translate-x-1/2 rounded-full border border-[#304059] bg-[#101A2B]/90 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#A7B4C6] backdrop-blur">
                  Problema real
                </div>

                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-[60px] h-[90px] w-px -translate-x-1/2 bg-linear-to-b from-[#A7B4C6]/20 to-transparent"
                />

                <div className="absolute bottom-6 left-5 right-5 z-20 rounded-2xl border border-[#304059] bg-[#101A2B]/95 p-4 shadow-xl backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">
                        <Target size={16} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.13em] text-[#73839A]">
                          Resultado
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          Una solución que tenga sentido.
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="text-[#FA713A]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HISTORIA */}
      <section
        id="historia"
        className=""
      >
        <div className={`${container} py-20 lg:py-24`}>
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                Por qué KoiBite
              </p>

              <h2 className="mt-3 max-w-md text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                La tecnología debería ayudarte.
                <span className="mt-1 block text-[#8D9AAF]">
                  No complicarte.
                </span>
              </h2>

              <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#304059] bg-[#101A2B] px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FA713A]/10 text-[#FA713A]">
                  <Target size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Una sola mirada
                  </p>
                  <p className="mt-1 text-[10px] text-[#74849A]">
                    Digital + equipos + soporte
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="grid gap-5 text-sm leading-8 text-[#9AA8BA] sm:text-base"
            >
              <p>
                KoiBite nace con una idea simple: hacer que la tecnología sea
                más fácil de entender, implementar y mantener para negocios,
                profesionales y emprendimientos.
              </p>

              <p>
                Una web puede ser importante, pero no es toda la tecnología de
                un negocio. También están los equipos, el software, las
                configuraciones y los pequeños problemas que todos los días
                pueden frenar el trabajo.
              </p>

              <p>
                Por eso buscamos trabajar desde una mirada más completa:
                construir presencia digital cuando hace falta y resolver el
                entorno técnico cuando el problema está del otro lado de la
                pantalla.
              </p>

              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#29405F] bg-[#0D192B] p-5">
                  <Code2
                    size={18}
                    aria-hidden="true"
                    className="text-[#7DB3FF]"
                  />
                  <p className="mt-4 text-sm font-semibold text-white">
                    Presencia digital
                  </p>
                  <p className="mt-2 text-xs leading-6 text-[#7F8EA3]">
                    Web, CMS, integraciones y automatización.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#44353A] bg-[#171A27] p-5">
                  <Wrench
                    size={18}
                    aria-hidden="true"
                    className="text-[#FA713A]"
                  />
                  <p className="mt-4 text-sm font-semibold text-white">
                    Entorno de trabajo
                  </p>
                  <p className="mt-2 text-xs leading-6 text-[#8F8388]">
                    PCs, sistemas, hardware y mantenimiento.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section id="valores" className={` ${container} py-20 lg:py-28 `}>
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
            Lo que nos representa
          </p>

          <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Menos complejidad.
            <span className="block text-[#8D9AAF]">
              Más criterio.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#8F9DB1] sm:text-base">
            Estos principios guían tanto un proyecto digital como una consulta
            técnica.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor, index) => {
            const Icono = valor.icono;

            const accent =
              valor.area === "digital"
                ? "text-[#7DB3FF] bg-[#7DB3FF]/10 border-[#29405F]"
                : valor.area === "it"
                  ? "text-[#FA713A] bg-[#FA713A]/10 border-[#44353A]"
                  : "text-[#FFB297] bg-[#FA713A]/8 border-[#3A3D4D]";

            return (
              <motion.article
                key={valor.titulo}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-[#26344A] bg-[#101A2B] p-6 transition-colors duration-300 hover:border-[#4A4050] hover:bg-[#121F33]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#FA713A]/5 blur-2xl"
                />

                <div className="relative flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${accent}`}
                  >
                    <Icono size={19} aria-hidden="true" />
                  </div>

                  <span className="font-mono text-[10px] text-[#596980]">
                    {valor.numero}
                  </span>
                </div>

                <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-white">
                  {valor.titulo}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-[#8998AC]">
                  {valor.descripcion}
                </p>

                <div className="relative mt-6 h-px bg-linear-to-r from-[#FA713A]/50 to-transparent opacity-30 transition-opacity group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* MANERA DE TRABAJAR */}
      <section className="">
        <div className={`${container} py-20 lg:py-24`}>
          <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                Nuestra forma de trabajar
              </p>

              <h2 className="mt-3 max-w-md text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                El problema primero.
                <span className="mt-1 block text-[#FA713A]">
                  La tecnología después.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#8F9DB1]">
                No empezamos eligiendo una herramienta. Empezamos entendiendo
                qué necesitás que funcione mejor.
              </p>
            </motion.div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-8 left-[21px] top-8 hidden w-px bg-linear-to-b from-[#7DB3FF]/40 via-[#304059] to-[#FA713A]/40 sm:block"
              />

              <div className="space-y-3">
                {proceso.map((item, index) => {
                  const Icono = item.icono;

                  return (
                    <motion.article
                      key={item.numero}
                      initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        delay: reduceMotion ? 0 : index * 0.07,
                      }}
                      className="group relative flex gap-4 rounded-2xl border border-[#26344A] bg-[#101A2B] p-5 transition-colors hover:border-[#4A4050] hover:bg-[#121F33] sm:gap-5 sm:p-6"
                    >
                      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FA713A]/15 bg-[#111D30] text-[#FA713A]">
                        <Icono size={18} aria-hidden="true" />
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[9px] text-[#FA713A]">
                            {item.numero}
                          </span>
                          <h3 className="text-base font-semibold text-white sm:text-lg">
                            {item.titulo}
                          </h3>
                        </div>

                        <p className="mt-2 text-sm leading-7 text-[#8998AC]">
                          {item.descripcion}
                        </p>
                      </div>

                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                        className="ml-auto mt-1 hidden shrink-0 text-[#5D6D83] transition-transform group-hover:translate-x-1 group-hover:text-[#FA713A] sm:block"
                      />
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className={`${container} py-20 lg:py-28`}>
        <motion.div
          {...fadeUp}
          className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
              Herramientas y capacidades
            </p>

            <h2 className="mt-3 max-w-lg text-3xl font-medium tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Elegimos la tecnología
              <span className="block text-[#8D9AAF]">
                según lo que hay que resolver.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#8F9DB1]">
              No queremos que KoiBite se defina sólo por un stack. Lo importante
              es combinar herramientas digitales y conocimientos técnicos de
              forma útil.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-[#29405F] bg-[#0D192B] p-6">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#7DB3FF]/8 blur-3xl"
              />

              <div className="relative flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7DB3FF]/10 text-[#7DB3FF]">
                  <Code2 size={20} aria-hidden="true" />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#7DB3FF]">
                  Digital
                </span>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {digital.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className="rounded-lg border border-[#304766] bg-[#111D30] px-3 py-2 text-[10px] font-medium text-[#A9BAD0]"
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex items-center gap-3 border-t border-[#29405F] pt-5">
                <Network
                  size={15}
                  aria-hidden="true"
                  className="text-[#7DB3FF]"
                />
                <span className="text-xs text-[#7E8DA2]">
                  Web · contenido · integraciones
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#44353A] bg-[#171A27] p-6">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#FA713A]/8 blur-3xl"
              />

              <div className="relative flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">
                  <Cpu size={20} aria-hidden="true" />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#FFB297]">
                  IT
                </span>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {it.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className="rounded-lg border border-[#4A383D] bg-[#14151E] px-3 py-2 text-[10px] font-medium text-[#B9A5AA]"
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex items-center gap-3 border-t border-[#44353A] pt-5">
                <HardDrive
                  size={15}
                  aria-hidden="true"
                  className="text-[#FA713A]"
                />
                <span className="text-xs text-[#8F8388]">
                  Equipos · sistemas · mantenimiento
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-[#664234] bg-linear-to-br from-[#572B25] via-[#292339] to-[#152239] px-7 py-12 text-white md:px-10 md:py-14 xl:flex xl:items-center xl:justify-between xl:gap-12"
          >
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#FA713A]/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-[#7DB3FF]/5 blur-3xl"
            />

            <div className="relative max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">
                Hablemos
              </span>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
                ¿Qué necesitás que funcione mejor?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#B8C4D5] sm:text-base">
                Puede ser una web, un proceso, una PC o todo el entorno
                tecnológico de tu negocio. Empecemos por entender el problema.
              </p>
            </div>

            <div className="relative mt-8 shrink-0 xl:mt-0">
              <Link
                to="/contacto#Contacto"
                className={`group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064] ${focus}`}
              >
                Hacer una consulta
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
