
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "react-router";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Globe2,
  LoaderCircle,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

type ContactoProps = {
  email?: string;
  whatsapp?: string;
};

const servicios = [
  "Desarrollo web",
  "Landing page",
  "Catálogo digital",
  "E-commerce",
  "Automatizaciones",
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

  empresa: z
    .string()
    .trim()
    .max(150, "Máximo 150 caracteres."),

  servicio: z
    .string()
    .refine(
      (valor) => servicios.includes(valor),
      "Elegí un servicio válido."
    ),

  presupuesto: z
    .string()
    .refine(
      (valor) =>
        ["", "menos-500", "500-1500", "mas-1500"].includes(valor),
      "Elegí un presupuesto válido."
    ),

  mensaje: z
    .string()
    .trim()
    .min(10, "Contanos tu idea en al menos 10 caracteres.")
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

function ErrorCampo({
  campo,
  mensaje,
}: {
  campo: string;
  mensaje?: string;
}) {
  if (!mensaje) return null;

  return (
    <p
      id={`${campo}-error`}
      role="alert"
      className="mt-2 text-sm leading-5 text-red-400"
    >
      {mensaje}
    </p>
  );
}

const pasos = [
  {
    numero: "01",
    titulo: "Nos contás tu idea",
    descripcion:
      "Compartís qué necesitás, tus objetivos y en qué etapa está tu proyecto.",
  },
  {
    numero: "02",
    titulo: "Revisamos los detalles",
    descripcion:
      "Evaluamos el alcance y conversamos para entender mejor tu negocio.",
  },
  {
    numero: "03",
    titulo: "Armamos una propuesta",
    descripcion:
      "Definimos una solución con entregables, tiempos y presupuesto claros.",
  },
];

const preguntas = [
  {
    pregunta: "¿Necesito tener una idea completamente definida?",
    respuesta:
      "No. Podemos partir de una necesidad o una idea inicial y ayudarte a definir qué tipo de solución tiene sentido para tu negocio.",
  },
  {
    pregunta: "¿Pueden trabajar de forma remota?",
    respuesta:
      "Sí. Podemos coordinar el proyecto mediante mensajes, correo y videollamadas, compartiendo avances durante el proceso.",
  },
  {
    pregunta: "¿Trabajan con emprendimientos pequeños?",
    respuesta:
      "Sí. Podemos definir una primera versión con las funciones esenciales y planificar mejoras a medida que crezca tu negocio.",
  },
  {
    pregunta: "¿Qué información conviene incluir?",
    respuesta:
      "Contanos a qué se dedica tu negocio, qué querés lograr y qué funciones necesitás. Si tenés referencias, un plazo o un presupuesto estimado, también ayudan.",
  },
];

const container = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12";

const inputClass =
  "w-full rounded-xl border border-[#26344A] bg-[#0B1424] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-[#FA713A] focus:bg-[#0D182A] focus:ring-4 focus:ring-[#FA713A]/10 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-red-500 aria-invalid:focus:ring-red-500/10";

const labelClass =
  "mb-2 block text-sm font-medium text-slate-200";

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA713A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080F1E]";

export default function Contacto({
  email = "olguriel@gmail.com",
  whatsapp,
}: ContactoProps) {
  const [estado, setEstado] = useState<"inicial" | "exito" | "error">(
    "inicial"
  );

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

  const numeroWhatsApp = whatsapp ?? "2604230590";

  const whatsappUrl = numeroWhatsApp
    ? `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
        "¡Hola! Me gustaría consultar por un proyecto."
      )}`
    : undefined;

  async function onSubmit(datos: DatosContacto) {
    setEstado("inicial");

    try {
      const respuesta = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contacto`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        }
      );

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
      id="Contacto"
      className="min-h-screen overflow-hidden bg-[#080F1E] text-white"
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden">
        {/* Decoración */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FA713A]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#FA713A]/5 blur-3xl"
        />

        <div
          className={`${container} relative py-20 text-center sm:py-24 lg:py-32`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FA713A]/30 bg-[#FA713A]/10 px-4 py-2 text-xs font-semibold text-[#FA713A]">
            <MessageCircle size={14} aria-hidden="true" />
            Empecemos una conversación
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Tu próximo proyecto
            <span className="block bg-gradient-to-r from-[#FA713A] to-[#FFB297] bg-clip-text text-transparent">
              empieza con un hola.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Contanos qué tenés en mente. Te ayudamos a encontrar una solución
            digital que tenga sentido para tu negocio.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#formulario-contacto"
              className={`group inline-flex items-center gap-3 rounded-xl bg-[#FA713A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E85F2D] hover:shadow-[#FA713A]/20 ${focusClass}`}
            >
              Contanos tu idea

              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl border border-[#26344A] bg-[#101A2B] px-6 py-3.5 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-[#FA713A]/40 hover:bg-[#162338] ${focusClass}`}
              >
                <MessageCircle
                  size={17}
                  aria-hidden="true"
                  className="text-[#FA713A]"
                />
                Hablemos por WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          FORMULARIO + INFORMACIÓN
      ========================================================= */}
      <section
        className={`${container} py-16 lg:py-24`}
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* FORMULARIO */}
          <div
            id="formulario-contacto"
            className="scroll-mt-28 rounded-3xl border border-[#26344A] bg-[#101A2B] p-6 shadow-2xl shadow-black/20 sm:p-9"
          >
            <div className="mb-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-[#FA713A]"
              >
                <Send size={20} />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
                Contanos tu idea
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              ¿Qué te gustaría crear?
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
              Completá los datos y contanos un poco sobre tu proyecto. Los
              campos con * son obligatorios.
            </p>

            <form
              noValidate
              onSubmit={handleSubmit(
                onSubmit,
                () => setEstado("error")
              )}
              onChange={() => {
                setEstado("inicial");
              }}
              aria-busy={enviando}
              className="mt-8"
            >
              <fieldset disabled={enviando} className="space-y-5">
                <legend className="sr-only">
                  Datos de contacto y del proyecto
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
                        errors.nombre
                          ? "nombre-error"
                          : undefined
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
                        errors.email
                          ? "email-error"
                          : undefined
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

                    <span className="ml-2 text-xs font-normal text-slate-500">
                      Opcional
                    </span>
                  </label>

                  <input
                    id="empresa"
                    {...register("empresa")}
                    aria-invalid={!!errors.empresa}
                    aria-describedby={
                      errors.empresa
                        ? "empresa-error"
                        : undefined
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
                          errors.servicio
                            ? "servicio-error"
                            : undefined
                        }
                        required
                        className={`${inputClass} appearance-none pr-10`}
                      >
                        <option
                          value=""
                          disabled
                          className="bg-[#101A2B] text-slate-400"
                        >
                          Elegí un servicio
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
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                    </div>

                    <ErrorCampo
                      campo="servicio"
                      mensaje={errors.servicio?.message}
                    />
                  </div>

                  <div>
                    <label htmlFor="presupuesto" className={labelClass}>
                      Presupuesto estimado
                    </label>

                    <div className="relative">
                      <select
                        id="presupuesto"
                        {...register("presupuesto")}
                        aria-invalid={!!errors.presupuesto}
                        aria-describedby={
                          errors.presupuesto
                            ? "presupuesto-error"
                            : undefined
                        }
                        className={`${inputClass} appearance-none pr-10`}
                      >
                        <option
                          value=""
                          className="bg-[#101A2B] text-white"
                        >
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
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
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
                    Un poco sobre tu proyecto *
                  </label>

                  <textarea
                    id="mensaje"
                    {...register("mensaje")}
                    aria-invalid={!!errors.mensaje}
                    aria-describedby={
                      errors.mensaje
                        ? "mensaje-error"
                        : undefined
                    }
                    rows={5}
                    required
                    minLength={10}
                    maxLength={5000}
                    placeholder="A qué se dedica tu negocio, qué te gustaría lograr y cualquier detalle que quieras compartir..."
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
                  className={`group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#FA713A] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:bg-[#E85F2D] hover:shadow-[#FA713A]/20 disabled:cursor-not-allowed disabled:opacity-50 ${focusClass}`}
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
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </fieldset>

              {/* ESTADO ÉXITO */}
              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                {estado === "exito" && (
                  <p className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-300">
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    ¡Formulario validado con éxito!
                  </p>
                )}
              </div>

              {/* ESTADO ERROR */}
              {estado === "error" && (
                <p
                  role="alert"
                  className="mt-4 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-6 text-red-300"
                >
                  Revisá los campos marcados e intentá nuevamente.
                </p>
              )}
            </form>
          </div>

          {/* =====================================================
              COLUMNA LATERAL
          ===================================================== */}
          <aside className="lg:pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
              Contacto directo
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Buenas ideas.
              <span className="block bg-gradient-to-r from-[#FA713A] to-[#FFB297] bg-clip-text text-transparent">
                Conversaciones simples.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-400">
              No necesitás tener todo resuelto para escribirnos. Podemos
              ayudarte a ordenar tus ideas y definir el próximo paso.
            </p>

            <div className="mt-8 space-y-3">
              {/* EMAIL */}
              <a
                href={`mailto:${email}`}
                className={`group flex items-center gap-4 rounded-2xl border border-[#26344A] bg-[#101A2B] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#FA713A]/40 hover:bg-[#162338] ${focusClass}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-[#FA713A]">
                  <Mail size={20} aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">
                    Escribinos
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-slate-100">
                    {email}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-slate-500 transition group-hover:text-[#FA713A]"
                />
              </a>

              {/* WHATSAPP */}
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 rounded-2xl border border-[#26344A] bg-[#101A2B] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#FA713A]/40 hover:bg-[#162338] ${focusClass}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-[#FA713A]">
                    <MessageCircle
                      size={20}
                      aria-hidden="true"
                    />
                  </span>

                  <div className="flex-1">
                    <p className="text-xs text-slate-500">
                      ¿Preferís un mensaje?
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-100">
                      Hablemos por WhatsApp
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-slate-500 transition group-hover:text-[#FA713A]"
                  />
                </a>
              )}

              {/* REMOTO */}
              <div className="flex items-center gap-4 rounded-2xl border border-[#26344A] bg-[#101A2B] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-[#FA713A]">
                  <Globe2 size={20} aria-hidden="true" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    Cerca, estés donde estés
                  </p>

                  <p className="mt-1 text-xs leading-6 text-slate-400">
                    Trabajamos de forma remota.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD DESTACADA */}
            <div className="relative isolate mt-6 overflow-hidden rounded-3xl border border-[#26344A] bg-[#101A2B] p-7 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full bg-[#FA713A]/10 blur-2xl"
              />

              <Sparkles
                size={23}
                aria-hidden="true"
                className="text-[#FA713A]"
              />

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                No hace falta hablar en técnico.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Contanos qué querés mejorar en tu negocio. Nosotros te
                ayudamos a darle forma.
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-[#26344A] pt-5 text-xs font-medium text-slate-300">
                <Check
                  size={15}
                  aria-hidden="true"
                  className="text-[#FA713A]"
                />
                Comunicación clara en cada etapa
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          PRÓXIMOS PASOS
      ========================================================= */}
      <section className="border-y border-[#26344A] bg-[#071024] text-white">
        <div className={`${container} py-16 lg:py-20`}>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
              ¿Y después?
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Del primer mensaje al próximo paso.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pasos.map((paso) => (
              <article
                key={paso.numero}
                className="group rounded-2xl border border-[#26344A] bg-[#101A2B] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FA713A]/40 hover:bg-[#121F33]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#FA713A]/20 bg-[#FA713A]/10 text-sm font-semibold text-[#FA713A]">
                  {paso.numero}
                </span>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                  {paso.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {paso.descripcion}
                </p>

                <div className="mt-6 h-px w-0 bg-[#FA713A] transition-all duration-300 group-hover:w-10" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section
        className={`${container} grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24`}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FA713A]">
            Antes de escribirnos
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Algunas dudas,
            <span className="block text-slate-400">
              respuestas simples.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Si tu pregunta no está acá, podés incluirla en el formulario.
          </p>

          <a
            href="#formulario-contacto"
            className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FA713A] transition hover:text-[#FFB297] ${focusClass}`}
          >
            Hacer una consulta

            <ArrowRight
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="space-y-3">
          {preguntas.map(({ pregunta, respuesta }) => (
            <details
              key={pregunta}
              className="group overflow-hidden rounded-2xl border border-[#26344A] bg-[#101A2B] transition duration-300 open:border-[#FA713A]/40 open:bg-[#121F33]"
            >
              <summary
                className={`flex cursor-pointer list-none items-center justify-between gap-5 rounded-2xl p-5 text-sm font-semibold text-slate-100 transition-colors hover:text-white [&::-webkit-details-marker]:hidden ${focusClass}`}
              >
                {pregunta}

                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-[#FA713A] transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>

              <p className="px-5 pb-5 pr-10 text-sm leading-7 text-slate-400">
                {respuesta}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
