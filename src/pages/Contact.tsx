import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { useLocation } from "react-router";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";


import {

  ArrowRight,

  ArrowUpRight,

  Check,

  CheckCircle2,

  ChevronDown,

  Code2,

  Cpu,

  Globe2,

  LoaderCircle,

  Mail,

  MessageCircle,

  MonitorCog,

  Send,

  ShieldCheck,

  Sparkles,

  Workflow,

} from "lucide-react";


type ContactoProps = {

  email?: string;

  whatsapp?: string;

};


const servicios = [

  "Desarrollo web",

  "Catálogo digital / CMS",

  "Integraciones y automatización",

  "Optimización / mantenimiento web",

  "Armado o actualización de PC",

  "Windows / software / configuración",

  "Diagnóstico / mantenimiento IT",

  "Otro / Necesito asesoramiento",

];


export const contactoSchema = z.object({

  nombre: z

    .string()

    .trim()

    .min(2, "Ingresá al menos 2 caracteres.")

    .max(100, "Máximo 100 caracteres."),


  email: z

    .string()

    .trim()

    .min(1, "Ingresá tu email.")

    .email("Ingresá un email válido.")

    .max(254, "Máximo 254 caracteres."),


  empresa: z.string().trim().max(150, "Máximo 150 caracteres."),


  servicio: z

    .string()

    .refine((valor) => servicios.includes(valor), "Elegí una opción válida."),


  presupuesto: z

    .string()

    .refine(

      (valor) => ["", "menos-500", "500-1500", "mas-1500"].includes(valor),

      "Elegí un presupuesto válido.",

    ),


  mensaje: z

    .string()

    .trim()

    .min(10, "Contanos un poco más en al menos 10 caracteres.")

    .max(5000, "Máximo 5000 caracteres."),

});


export type DatosContacto = z.infer<typeof contactoSchema>;


const valoresIniciales: DatosContacto = {

  nombre: "",

  email: "",

  empresa: "",

  servicio: "",

  presupuesto: "",

  mensaje: "",

};


const pasos = [

  {

    numero: "01",

    titulo: "Nos contás",

    descripcion:

      "Explicanos qué querés mejorar, crear o solucionar. No hace falta hablar en técnico.",

    icon: MessageCircle,

  },

  {

    numero: "02",

    titulo: "Lo evaluamos",

    descripcion:

      "Revisamos el contexto y definimos qué tipo de solución tiene sentido para tu caso.",

    icon: Workflow,

  },

  {

    numero: "03",

    titulo: "Te proponemos el próximo paso",

    descripcion:

      "Te explicamos el alcance, cómo avanzar y qué necesitás para empezar.",

    icon: ArrowUpRight,

  },

];


const preguntas = [

  {

    pregunta: "¿Necesito saber exactamente qué servicio necesito?",

    respuesta:

      "No. Podés contarnos el problema o el objetivo y nosotros te ayudamos a identificar si conviene resolverlo desde la web, los sistemas, el equipo o una combinación.",

  },

  {

    pregunta: "¿Puedo consultar por un problema puntual de una PC?",

    respuesta:

      "Sí. No hace falta contratar un proyecto completo. Podés consultar por configuración, software, actualización de hardware, diagnóstico o mantenimiento.",

  },

  {

    pregunta: "¿Trabajan de forma remota?",

    respuesta:

      "Los servicios digitales pueden coordinarse de forma remota. Cuando el trabajo requiere acceso físico a un equipo, la coordinación depende del caso.",

  },

  {

    pregunta: "¿Pueden trabajar sobre una web o equipo que ya tengo?",

    respuesta:

      "Sí. Primero revisamos el estado actual y, si tiene sentido, proponemos mejoras o mantenimiento sin rehacer todo desde cero.",

  },

  {

    pregunta: "¿Qué información conviene incluir en el mensaje?",

    respuesta:

      "Con saber qué querés resolver ya podemos empezar. Si además tenés referencias, detalles del equipo, errores, plazos o un presupuesto estimado, mejor.",

  },

];


const container = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12";


const inputClass =

  "w-full rounded-xl border border-[#2B3950] bg-[#0B1424] px-4 py-3.5 text-sm text-white outline-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-[#5E6C82] hover:border-[#40516D] focus:border-[#FA713A]/70 focus:bg-[#0D182A] focus:ring-4 focus:ring-[#FA713A]/10 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-red-500 aria-invalid:focus:ring-red-500/10";


const labelClass =

  "mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#AEB9CA]";


const focusClass =

  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA713A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080F1E]";


const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
const MOTION_DURATION = 0.42;


function ErrorCampo({ campo, mensaje }: { campo: string; mensaje?: string }) {

  if (!mensaje) return null;


  return (

    <p

      id={`${campo}-error`}

      role="alert"

      className="mt-2 text-xs leading-5 text-red-400"

    >

      {mensaje}

    </p>

  );

}


export default function Contacto({

  email = "olguriel@gmail.com",

  whatsapp,

}: ContactoProps) {

  const [estado, setEstado] = useState<"inicial" | "exito" | "error">(

    "inicial",

  );


  const reduceMotion = useReducedMotion();


  const fadeUp = {
    initial: reduceMotion ? (false as const) : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reduceMotion ? 0 : MOTION_DURATION,
      ease: MOTION_EASE,
    },
  };


  const {

    register,

    handleSubmit,

    reset,

    formState: { errors, isSubmitting: enviando },

  } = useForm<DatosContacto>({

    resolver: zodResolver(contactoSchema),

    defaultValues: valoresIniciales,

    mode: "onTouched",

    reValidateMode: "onChange",

  });


  const numeroWhatsApp = (whatsapp ?? "2604230590").replace(/\D/g, "");


  const whatsappUrl = numeroWhatsApp

    ? `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(

        "¡Hola! Me gustaría consultar por un proyecto o soporte técnico.",

      )}`

    : undefined;


  async function onSubmit(datos: DatosContacto) {

    setEstado("inicial");


    try {

      const respuesta = await fetch("/api/contacto", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(datos),

      });


      if (!respuesta.ok) {

        throw new Error("No se pudo enviar");

      }


      reset();

      setEstado("exito");

    } catch {

      setEstado("error");

    }

  }


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
    <LazyMotion features={domAnimation}>
      <main

      id="Contacto"

      className="min-h-screen overflow-hidden  text-white selection:bg-[#FA713A]/30 [&_section[id]]:scroll-mt-28"

    >

      {/* =========================================================

          HERO

      ========================================================= */}

      <section className="relative isolate overflow-hidden">

        <div

          aria-hidden="true"

          className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:52px_52px]"

        />


        <div

          aria-hidden="true"

          className="pointer-events-none absolute -right-40 -top-40 hidden h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(40,49,75,.22)_0%,rgba(40,49,75,0)_70%)] sm:block"

        />


        <div

          aria-hidden="true"

          className="pointer-events-none absolute -left-40 top-52 hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(250,113,58,.07)_0%,rgba(250,113,58,0)_70%)] sm:block"

        />


        <div

          className={`${container} relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-28`}

        >

          {/* texto */}

          <m.div

            initial={reduceMotion ? false : { opacity: 0, x: -16 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: reduceMotion ? 0 : 0.45, ease: MOTION_EASE }}

            className="relative z-10 mt-10 transform-gpu"

          >

            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB297]">

              <span className="h-px w-7 bg-[#FA713A]" />

              Contacto

            </div>


            <h1 className="max-w-3xl text-[2.7rem] font-medium leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-[3.7rem] xl:text-[4.6rem]">

              Contanos qué necesitás

              <span className="mt-1 block text-[#FA713A]">resolver.</span>

            </h1>


            <p className="mt-7 max-w-xl text-sm leading-8 text-gray-300 sm:text-base">

              Una nueva web, un equipo que necesita atención o simplemente una

              idea que todavía no sabés cómo encarar. Empecemos por entender el

              problema.

            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a

                href="#formulario-contacto"

                className={`group inline-flex items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors hover:bg-[#FF9064] ${focusClass}`}

              >

                Hacer una consulta

                <ArrowRight

                  size={17}

                  aria-hidden="true"

                  className="transition-transform group-hover:translate-x-1"

                />

              </a>


              {whatsappUrl && (

                <a

                  href={whatsappUrl}

                  target="_blank"

                  rel="noopener noreferrer"

                  className={`inline-flex items-center justify-center gap-2 rounded-xl border border-[#344159] bg-white/[0.02] px-6 py-4 text-sm font-medium text-[#E2E8F0] transition-colors duration-200 hover:border-[#FA713A]/50 hover:bg-white/5 ${focusClass}`}

                >

                  <MessageCircle

                    size={17}

                    aria-hidden="true"

                    className="text-[#FA713A]"

                  />

                  WhatsApp

                </a>

              )}

            </div>


            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#A1AEC3]">

              {[

                "No necesitás hablar en técnico",

                "Digital + IT",

                "Atención directa",

              ].map((item) => (

                <span key={item} className="flex items-center gap-2">

                  <Check

                    aria-hidden="true"

                    size={14}

                    className="text-[#FA713A]"

                  />

                  {item}

                </span>

              ))}

            </div>

          </m.div>


          {/* visual */}

          <m.div

            initial={reduceMotion ? false : { opacity: 0, y: 14 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{

              duration: reduceMotion ? 0 : 0.6,

              delay: reduceMotion ? 0 : 0.08,

            }}

            className="relative mx-auto w-full max-w-xl transform-gpu py-8 sm:px-3"

          >

            <div

              aria-hidden="true"

              className="pointer-events-none absolute inset-10 hidden rounded-full bg-[radial-gradient(circle,rgba(250,113,58,.10)_0%,rgba(250,113,58,0)_68%)] sm:block"

            />


            <div className="relative overflow-hidden rounded-[28px] border border-[#39475E] bg-[#0C1627] shadow-[0_40px_100px_-30px_rgba(0,0,0,.8)]">

              {/* topbar */}

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

                    KoiBite / inbox

                  </span>

                </div>

              </div>


              <div className="relative min-h-[410px] overflow-hidden p-5 sm:min-h-[440px] sm:p-7">

                <div

                  aria-hidden="true"

                  className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:34px_34px]"

                />


                <div className="pointer-events-none absolute -left-20 top-8 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(125,179,255,.08)_0%,rgba(125,179,255,0)_70%)] sm:block" />

                <div className="pointer-events-none absolute -right-20 bottom-4 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(250,113,58,.09)_0%,rgba(250,113,58,0)_70%)] sm:block" />


                {/* mensaje entrante */}

                <div className="relative z-10 max-w-[82%] rounded-2xl rounded-tl-md border border-[#304059] bg-[#111D30]/95 p-4 shadow-xl">

                  <div className="flex items-center gap-3">

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-[#AFC0D4]">

                      <MessageCircle size={17} aria-hidden="true" />

                    </span>


                    <div className="flex-1">

                      <div className="h-1.5 w-20 rounded-full bg-white/20" />

                      <div className="mt-2 h-1.5 w-12 rounded-full bg-white/[0.08]" />

                    </div>


                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  </div>


                  <div className="mt-5 space-y-2">

                    <div className="h-2 w-full rounded-full bg-white/[0.09]" />

                    <div className="h-2 w-[88%] rounded-full bg-white/[0.09]" />

                    <div className="h-2 w-[58%] rounded-full bg-white/[0.09]" />

                  </div>

                </div>


                {/* interpretación KoiBite */}

                <div className="relative z-10 ml-auto mt-5 max-w-[88%] rounded-2xl rounded-tr-md border border-[#4A3840] bg-[#171A27]/95 p-4 shadow-xl">

                  <div className="flex items-center gap-3">

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#FA713A]/20 bg-[#FA713A]/10">

                      <img src="/KoiBite-log.svg" alt="" className="h-5 w-5" />

                    </span>


                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#FFB297]">

                        KoiBite

                      </p>

                      <p className="mt-1 text-xs font-medium text-white">

                        Entendemos la necesidad

                      </p>

                    </div>

                  </div>


                  <div className="mt-5 grid grid-cols-2 gap-2">

                    <div className="rounded-xl border border-[#29405F] bg-[#111D30] p-3">

                      <Code2

                        size={16}

                        aria-hidden="true"

                        className="text-[#7DB3FF]"

                      />

                      <div className="mt-3 h-1.5 w-12 rounded bg-[#7DB3FF]/30" />

                    </div>


                    <div className="rounded-xl border border-[#44353A] bg-[#14151E] p-3">

                      <MonitorCog

                        size={16}

                        aria-hidden="true"

                        className="text-[#FA713A]"

                      />

                      <div className="mt-3 h-1.5 w-12 rounded bg-[#FA713A]/30" />

                    </div>

                  </div>

                </div>


                {/* flujo */}

                <div className="relative z-10 mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">

                  <div className="rounded-xl border border-[#29405F] bg-[#101B2D] px-3 py-3 text-center">

                    <Code2

                      size={16}

                      aria-hidden="true"

                      className="mx-auto text-[#7DB3FF]"

                    />

                    <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8DBBFF]">

                      Digital

                    </span>

                  </div>


                  <div className="flex items-center">

                    <span className="h-px w-4 bg-[#7DB3FF]/50" />

                    <span className="h-1.5 w-1.5 rounded-full bg-[#FA713A]" />

                    <span className="h-px w-4 bg-[#FA713A]/50" />

                  </div>


                  <div className="rounded-xl border border-[#44353A] bg-[#171A27] px-3 py-3 text-center">

                    <Cpu

                      size={16}

                      aria-hidden="true"

                      className="mx-auto text-[#FA713A]"

                    />

                    <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#FFB297]">

                      IT

                    </span>

                  </div>

                </div>


                {/* composer */}

                <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center gap-3 rounded-2xl border border-[#304059] bg-[#101A2B]/95 p-3 shadow-xl">

                  <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">

                    <div className="h-1.5 w-2/3 rounded-full bg-white/10" />

                  </div>


                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FA713A] text-[#14131B]">

                    <Send size={16} aria-hidden="true" />

                  </div>

                </div>

              </div>

            </div>

          </m.div>

        </div>

      </section>


      {/* =========================================================

          FORMULARIO + CONTACTO

      ========================================================= */}

      <section className={`${container} py-16 lg:py-24`}>

        <div className="grid items-start gap-8 lg:grid-cols-[1.18fr_.82fr] lg:gap-12">

          {/* FORM */}

          <m.div

            {...fadeUp}

            id="formulario-contacto"

            className="scroll-mt-28 overflow-hidden rounded-3xl border border-[#2B3950] bg-[#0D1727] shadow-[0_30px_80px_-35px_rgba(0,0,0,.8)]"

          >

            <div className="border-b border-[#26344A] px-6 py-6 sm:px-8">

              <div className="flex items-center justify-between gap-5">

                <div className="flex items-center gap-3">

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-[#FA713A]">

                    <Send size={18} aria-hidden="true" />

                  </span>


                  <div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FFB297]">

                      Nueva consulta

                    </p>

                    <p className="mt-1 text-xs text-[#718197]">

                      Contanos lo esencial para empezar.

                    </p>

                  </div>

                </div>


                <span className="hidden items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-emerald-300 sm:inline-flex">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  Disponible

                </span>

              </div>

            </div>


            <div className="p-6 sm:p-8">

              <h2 className="text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl">

                ¿Qué necesitás resolver?

              </h2>


              <p className="mt-3 max-w-xl text-sm leading-7 text-[#8F9DB1]">

                No hace falta que tengas la solución definida. Los campos con *

                son obligatorios.

              </p>


              <form

                noValidate

                onSubmit={handleSubmit(onSubmit)}

                onChange={() => setEstado("inicial")}

                aria-busy={enviando}

                className="mt-8"

              >

                <fieldset disabled={enviando} className="space-y-5">

                  <legend className="sr-only">

                    Datos de contacto y consulta

                  </legend>


                  {/* NOMBRE + EMAIL */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label htmlFor="nombre" className={labelClass}>

                        Nombre *

                      </label>


                      <input

                        id="nombre"

                        {...register("nombre")}

                        aria-invalid={!!errors.nombre}

                        aria-describedby={

                          errors.nombre ? "nombre-error" : undefined

                        }

                        autoComplete="name"

                        placeholder="Tu nombre"

                        required

                        maxLength={100}

                        className={inputClass}

                      />


                      <ErrorCampo

                        campo="nombre"

                        mensaje={errors.nombre?.message}

                      />

                    </div>


                    <div>

                      <label htmlFor="email" className={labelClass}>

                        Email *

                      </label>


                      <input

                        id="email"

                        {...register("email")}

                        aria-invalid={!!errors.email}

                        aria-describedby={

                          errors.email ? "email-error" : undefined

                        }

                        type="email"

                        autoComplete="email"

                        placeholder="vos@empresa.com"

                        required

                        maxLength={254}

                        className={inputClass}

                      />


                      <ErrorCampo

                        campo="email"

                        mensaje={errors.email?.message}

                      />

                    </div>

                  </div>


                  {/* EMPRESA */}

                  <div>

                    <label htmlFor="empresa" className={labelClass}>

                      Empresa o emprendimiento

                      <span className="ml-2 text-[10px] font-normal normal-case tracking-normal text-[#607087]">

                        Opcional

                      </span>

                    </label>


                    <input

                      id="empresa"

                      {...register("empresa")}

                      aria-invalid={!!errors.empresa}

                      aria-describedby={

                        errors.empresa ? "empresa-error" : undefined

                      }

                      autoComplete="organization"

                      placeholder="¿Cómo se llama tu negocio?"

                      maxLength={150}

                      className={inputClass}

                    />


                    <ErrorCampo

                      campo="empresa"

                      mensaje={errors.empresa?.message}

                    />

                  </div>


                  {/* SERVICIO + PRESUPUESTO */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label htmlFor="servicio" className={labelClass}>

                        ¿Qué necesitás? *

                      </label>


                      <div className="relative">

                        <select

                          id="servicio"

                          {...register("servicio")}

                          aria-invalid={!!errors.servicio}

                          aria-describedby={

                            errors.servicio ? "servicio-error" : undefined

                          }

                          required

                          className={`${inputClass} appearance-none pr-10`}

                        >

                          <option

                            value=""

                            disabled

                            className="bg-[#101A2B] text-slate-400"

                          >

                            Elegí una opción

                          </option>


                          {servicios.map((servicio) => (

                            <option

                              key={servicio}

                              value={servicio}

                              className="bg-[#101A2B] text-white"

                            >

                              {servicio}

                            </option>

                          ))}

                        </select>


                        <ChevronDown

                          size={16}

                          aria-hidden="true"

                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#66758B]"

                        />

                      </div>


                      <ErrorCampo

                        campo="servicio"

                        mensaje={errors.servicio?.message}

                      />

                    </div>


                    <div>

                      <label htmlFor="presupuesto" className={labelClass}>

                        Presupuesto

                        <span className="ml-2 text-[10px] font-normal normal-case tracking-normal text-[#607087]">

                          Si aplica

                        </span>

                      </label>


                      <div className="relative">

                        <select

                          id="presupuesto"

                          {...register("presupuesto")}

                          aria-invalid={!!errors.presupuesto}

                          aria-describedby={

                            errors.presupuesto ? "presupuesto-error" : undefined

                          }

                          className={`${inputClass} appearance-none pr-10`}

                        >

                          <option value="" className="bg-[#101A2B] text-white">

                            Todavía no lo sé

                          </option>


                          <option

                            value="menos-500"

                            className="bg-[#101A2B] text-white"

                          >

                            Menos de USD 500

                          </option>


                          <option

                            value="500-1500"

                            className="bg-[#101A2B] text-white"

                          >

                            USD 500 a 1.500

                          </option>


                          <option

                            value="mas-1500"

                            className="bg-[#101A2B] text-white"

                          >

                            Más de USD 1.500

                          </option>

                        </select>


                        <ChevronDown

                          size={16}

                          aria-hidden="true"

                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#66758B]"

                        />

                      </div>


                      <ErrorCampo

                        campo="presupuesto"

                        mensaje={errors.presupuesto?.message}

                      />

                    </div>

                  </div>


                  {/* MENSAJE */}

                  <div>

                    <label htmlFor="mensaje" className={labelClass}>

                      Contanos un poco más *

                    </label>


                    <textarea

                      id="mensaje"

                      {...register("mensaje")}

                      aria-invalid={!!errors.mensaje}

                      aria-describedby={

                        errors.mensaje ? "mensaje-error" : undefined

                      }

                      rows={5}

                      required

                      minLength={10}

                      maxLength={5000}

                      placeholder="Por ejemplo: qué querés mejorar, qué problema tiene el equipo, qué estás usando actualmente o cuál es el objetivo..."

                      className={`${inputClass} min-h-36 resize-y`}

                    />


                    <ErrorCampo

                      campo="mensaje"

                      mensaje={errors.mensaje?.message}

                    />

                  </div>


                  {/* BOTÓN */}

                  <button

                    type="submit"

                    disabled={enviando}

                    className={`group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-[#14131B] transition-colors duration-200 hover:bg-[#FF9064] disabled:cursor-not-allowed disabled:opacity-50 ${focusClass}`}

                  >

                    {enviando ? (

                      <>

                        <LoaderCircle

                          size={18}

                          aria-hidden="true"

                          className="animate-spin"

                        />

                        Enviando consulta...

                      </>

                    ) : (

                      <>

                        Enviar consulta

                        <ArrowRight

                          size={18}

                          aria-hidden="true"

                          className="transition-transform duration-200 group-hover:translate-x-1"

                        />

                      </>

                    )}

                  </button>

                </fieldset>


                <div role="status" aria-live="polite" aria-atomic="true">

                  {estado === "exito" && (

                    <p className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-300">

                      <CheckCircle2

                        size={18}

                        aria-hidden="true"

                        className="mt-0.5 shrink-0"

                      />

                      ¡Consulta enviada! Recibimos tu mensaje correctamente.

                    </p>

                  )}

                </div>


                {estado === "error" && (

                  <p

                    role="alert"

                    className="mt-4 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-6 text-red-300"

                  >

                    No pudimos enviar la consulta. Intentá nuevamente o

                    escribinos por WhatsApp.

                  </p>

                )}

              </form>

            </div>

          </m.div>


          {/* ASIDE */}

          <m.aside {...fadeUp} className="lg:pt-3">

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">

              Contacto directo

            </p>


            <h2 className="mt-3 max-w-md text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl">

              Elegí la forma más simple de empezar.

            </h2>


            <p className="mt-5 max-w-md text-sm leading-7 text-[#91A0B4]">

              Si preferís no completar el formulario, también podés escribirnos

              directamente. Lo importante es entender qué necesitás.

            </p>


            <div className="mt-8 space-y-3">

              {/* EMAIL */}

              <a

                href={`mailto:${email}`}

                className={`group flex items-center gap-4 rounded-2xl border border-[#29405F] bg-[#0D192B] p-5 transition-[transform,border-color,background-color] duration-200 md:hover:-translate-y-0.5 hover:border-[#49698F] hover:bg-[#101E33] ${focusClass}`}

              >

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-[#7DB3FF]">

                  <Mail size={19} aria-hidden="true" />

                </span>


                <div className="min-w-0 flex-1">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#70819A]">

                    Email

                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-white">

                    {email}

                  </p>

                </div>


                <ArrowUpRight

                  size={17}

                  aria-hidden="true"

                  className="shrink-0 text-[#5D6E86] transition-colors duration-200 group-hover:text-[#7DB3FF]"

                />

              </a>


              {/* WHATSAPP */}

              {whatsappUrl && (

                <a

                  href={whatsappUrl}

                  target="_blank"

                  rel="noopener noreferrer"

                  className={`group flex items-center gap-4 rounded-2xl border border-[#44353A] bg-[#171A27] p-5 transition-[transform,border-color,background-color] duration-200 md:hover:-translate-y-0.5 hover:border-[#785040] hover:bg-[#1B1D2B] ${focusClass}`}

                >

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">

                    <MessageCircle size={19} aria-hidden="true" />

                  </span>


                  <div className="flex-1">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8F7D83]">

                      WhatsApp

                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">

                      Enviar un mensaje

                    </p>

                  </div>


                  <ArrowUpRight

                    size={17}

                    aria-hidden="true"

                    className="shrink-0 text-[#76676D] transition-colors duration-200 group-hover:text-[#FA713A]"

                  />

                </a>

              )}


              {/* MODALIDAD */}

              <div className="flex items-center gap-4 rounded-2xl border border-[#304059] bg-[#101A2B] p-5">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-[#A8B6C8]">

                  <Globe2 size={19} aria-hidden="true" />

                </span>


                <div>

                  <p className="text-sm font-semibold text-white">

                    Digital + soporte

                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#7F8EA3]">

                    Coordinamos cada consulta según el tipo de trabajo.

                  </p>

                </div>

              </div>

            </div>


            {/* CARD DESTACADA */}

            <div className="relative isolate mt-6 overflow-hidden rounded-3xl border border-[#3D3540] bg-linear-to-br from-[#171A29] to-[#101828] p-7 sm:p-8">

              <div

                aria-hidden="true"

                className="pointer-events-none absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(250,113,58,.10)_0%,rgba(250,113,58,0)_72%)]"

              />


              <div className="flex items-center gap-3">

                <Sparkles

                  size={20}

                  aria-hidden="true"

                  className="text-[#FA713A]"

                />


                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#FFB297]">

                  Sin vueltas

                </span>

              </div>


              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">

                No hace falta hablar en técnico.

              </h3>


              <p className="mt-3 text-sm leading-7 text-[#909EB1]">

                Podés decirnos simplemente “mi PC está lenta” o “necesito una

                web para mostrar mis productos”. Nosotros nos ocupamos de bajar

                eso a una solución concreta.

              </p>


              <div className="mt-6 flex items-center gap-2 border-t border-[#304059] pt-5 text-xs font-medium text-[#B8C4D5]">

                <ShieldCheck

                  size={15}

                  aria-hidden="true"

                  className="text-[#FA713A]"

                />

                Comunicación clara desde el primer mensaje

              </div>

            </div>

          </m.aside>

        </div>

      </section>


      {/* =========================================================

          PRÓXIMOS PASOS

      ========================================================= */}

      <section className="border-y border-[#26344A]  text-white">

        <div className={`${container} py-16 lg:py-20`}>

          <m.div {...fadeUp} className="max-w-2xl">

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">

              ¿Qué pasa después?

            </p>


            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">

              Del primer mensaje a una solución clara.

            </h2>


            <p className="mt-4 max-w-xl text-sm leading-7 text-[#8F9DB1]">

              Un proceso simple para que sepas desde el principio qué podemos

              hacer y cuál es el próximo paso.

            </p>

          </m.div>


          <div className="relative mt-12 grid gap-5 md:grid-cols-3">

            <div

              aria-hidden="true"

              className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-linear-to-r from-[#7DB3FF]/30 via-[#304059] to-[#FA713A]/40 md:block"

            />


            {pasos.map((paso, index) => {

              const Icon = paso.icon;


              return (

                <m.article

                  key={paso.numero}

                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true }}

                  transition={{

                    duration: reduceMotion ? 0 : 0.45,

                    delay: reduceMotion ? 0 : index * 0.08,

                  }}

                  className="relative rounded-2xl border border-[#26344A] bg-[#101A2B] p-7 transition-colors duration-200 hover:border-[#785040] hover:bg-[#121F33]"

                >

                  <div className="flex items-center justify-between">

                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FA713A]/15 bg-[#FA713A]/10 text-[#FA713A]">

                      <Icon size={17} aria-hidden="true" />

                    </span>


                    <span className="font-mono text-[10px] text-[#627189]">

                      {paso.numero}

                    </span>

                  </div>


                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">

                    {paso.titulo}

                  </h3>


                  <p className="mt-3 text-sm leading-7 text-[#8F9DB1]">

                    {paso.descripcion}

                  </p>

                </m.article>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================

          FAQ

      ========================================================= */}

      <section

        className={`${container} grid gap-10 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-24`}

      >

        <m.div {...fadeUp}>

          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB297]">

            Antes de escribirnos

          </p>


          <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] text-white sm:text-4xl">

            Algunas dudas.

            <span className="block text-[#8C9AAF]">Respuestas simples.</span>

          </h2>


          <p className="mt-5 max-w-md text-sm leading-7 text-[#8F9DB1]">

            Si tu pregunta no aparece acá, incluíla directamente en el

            formulario o escribinos por WhatsApp.

          </p>


          <a

            href="#formulario-contacto"

            className={`group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#FFB297] transition hover:text-white ${focusClass}`}

          >

            Hacer una consulta

            <ArrowRight

              size={15}

              aria-hidden="true"

              className="transition-transform duration-200 group-hover:translate-x-1"

            />

          </a>

        </m.div>


        <m.div {...fadeUp} className="border-t border-[#304059]">

          {preguntas.map(({ pregunta, respuesta }) => (

            <details

              key={pregunta}

              className="group border-b border-[#304059] py-5"

            >

              <summary

                className={`flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-[#F3F5FA] transition-colors hover:text-white [&::-webkit-details-marker]:hidden ${focusClass}`}

              >

                {pregunta}


                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#304059] bg-[#172338] text-[#FFB297] transition-transform duration-200 group-open:rotate-180">

                  <ChevronDown size={15} aria-hidden="true" />

                </span>

              </summary>


              <p className="max-w-2xl pt-4 pr-10 text-sm leading-7 text-[#8F9DB1]">

                {respuesta}

              </p>

            </details>

          ))}

        </m.div>

      </section>

      </main>
    </LazyMotion>

  );

}
