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

// Los campos opcionales usan una cadena vacía cuando no se completan.
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
    .refine((valor) => servicios.includes(valor), "Elegí un servicio válido."),
  presupuesto: z
    .string()
    .refine(
      (valor) => ["", "menos-500", "500-1500", "mas-1500"].includes(valor),
      "Elegí un presupuesto válido.",
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

function ErrorCampo({ campo, mensaje }: { campo: string; mensaje?: string }) {
  if (!mensaje) return null;
  return (
    <p id={`${campo}-error`} role="alert" className="mt-2 text-sm text-red-600">
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
  "w-full rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 hover:border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/15 disabled:opacity-60 aria-invalid:border-red-500 aria-invalid:focus:ring-red-500/15";

const labelClass = "mb-2 block text-sm font-medium text-slate-700";

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-4";

export default function Contacto({ email, whatsapp }: ContactoProps) {
  const [estado, setEstado] = useState<"inicial" | "exito" | "error">(
    "inicial",
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

  // Número internacional, únicamente con dígitos.
  const numeroWhatsApp = "2604230590";
  const whatsappUrl = numeroWhatsApp
    ? `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
        "¡Hola! Me gustaría consultar por un proyecto.",
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
        },
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
        decodeURIComponent(hash.slice(1)),
      );
      elemento?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, key]);

  return (
    <main id="Contacto" className="overflow-hidden ">
      {/* HERO */}
      <section className="relative isolate  ">
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-35 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-orange-100/30 blur-3xl"
        /> */}
        <div className={`${container} py-16 text-center lg:py-24`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-600 bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-600">
            <MessageCircle size={14} aria-hidden="true" />
            Empecemos una conversación
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl text-white">
            Tu próximo proyecto
            <span className="block text-orange-600">empieza con un hola.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400">
            Contanos qué tenés en mente. Te ayudamos a encontrar una solución
            digital que tenga sentido para tu negocio.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#formulario-contacto"
              className={`group inline-flex items-center gap-3 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-800 ${focusClass}`}
            >
              Contanos tu idea
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:translate-x-1"
              />
            </a>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 ${focusClass}`}
              >
                <MessageCircle size={17} aria-hidden="true" />
                Hablemos por WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>
      {/* FORMULARIO + INFORMACIÓN */}
      <section className={`${container} py-16 lg:py-24`}>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div
            id="formulario-contacto"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9"
          >
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600"
              >
                <Send size={20} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
                Contanos tu idea
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-[#0B1730]">
              ¿Qué te gustaría crear?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">
              Completá los datos y contanos un poco sobre tu proyecto. Los
              campos con * son obligatorios.
            </p>
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit, () => setEstado("error"))}
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
                    <ErrorCampo campo="email" mensaje={errors.email?.message} />
                  </div>
                </div>
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
                        <option value="" disabled>
                          Elegí un servicio
                        </option>
                        {servicios.map((servicio) => (
                          <option key={servicio} value={servicio}>
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
                          errors.presupuesto ? "presupuesto-error" : undefined
                        }
                        className={`${inputClass} appearance-none pr-10`}
                      >
                        <option value="">Todavía no lo sé</option>
                        <option value="menos-500">Menos de USD 500</option>
                        <option value="500-1500">USD 500 a 1.500</option>
                        <option value="mas-1500">Más de USD 1.500</option>
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
                <div>
                  <label htmlFor="mensaje" className={labelClass}>
                    Un poco sobre tu proyecto *
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
                    placeholder="A qué se dedica tu negocio, qué te gustaría lograr y cualquier detalle que quieras compartir..."
                    className={`${inputClass} min-h-36 resize-y`}
                  />
                  <ErrorCampo
                    campo="mensaje"
                    mensaje={errors.mensaje?.message}
                  />
                </div>
                <button
                  type="submit"
                  disabled={enviando}
                  className={`group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-orange-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-7 00 disabled:cursor-not-allowed disabled:opacity-50 ${focusClass}`}
                >
                  {enviando ? (
                    <>
                      <LoaderCircle
                        size={18}
                        aria-hidden="true"
                        className="motion-safe:animate-spin"
                      />
                      Enviando consulta...
                    </>
                  ) : (
                    <>
                      Enviar consulta
                      <ArrowRight
                        size={18}
                        aria-hidden="true"
                        className="transition-transform motion-safe:group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </fieldset>
              <div role="status" aria-live="polite" aria-atomic="true">
                {estado === "exito" && (
                  <p className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-500/40 p-4 text-sm leading-6 text-emerald-800">
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    ¡Formulario validado con éxito!
                  </p>
                )}
              </div>
              {estado === "error" && (
                <p
                  role="alert"
                  className="mt-4 rounded-xl bg-red-500/400 p-4 text-sm leading-6 text-red-800"
                >
                  Revisá los campos marcados e intentá nuevamente.
                </p>
              )}
            </form>
          </div>
          {/* COLUMNA LATERAL */}
          <aside className="lg:pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-500">
              Contacto directo
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#0B1730]">
              Buenas ideas.
              <span className="block text-orange-100">
                Conversaciones simples.
              </span>
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-400">
              No necesitás tener todo resuelto para escribirnos. Podemos
              ayudarte a ordenar tus ideas y definir el próximo paso.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${email}`}
                className={`group flex items-center gap-4 rounded-2xl border border-slate-100/80 p-5 transition hover:border-orange-200 hover:bg-slate-400/40 ${focusClass}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400">Escribinos</p>
                  <p className="mt-1 break-words text-sm font-semibold text-orange-500">
                    olguriel@gmail.com
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-slate-500 transition group-hover:text-orange-500"
                />
              </a>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 rounded-2xl border border-slate-200/80 p-5 transition hover:border-orange-200 hover:bg-slate-400/40 ${focusClass}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <MessageCircle size={20} aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500">
                      ¿Preferís un mensaje?
                    </p>
                    <p className="mt-1 text-sm font-semibold text-orange-500">
                      Hablemos por WhatsApp
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-slate-500 transition group-hover:text-orange-500"
                  />
                </a>
              )}
              <div className="flex items-center gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <Globe2 size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-orange-500">
                    Cerca, estés donde estés
                  </p>
                  <p className="mt-1 text-xs leading-6 text-slate-400">
                    Trabajamos de forma remota.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-3xl bg-[#0B1730] p-7 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full "
              />
              <Sparkles
                size={23}
                aria-hidden="true"
                className="text-orange-600"
              />
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                No hace falta hablar en técnico.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Contanos qué querés mejorar en tu negocio. Nosotros te ayudamos
                a darle forma.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-orange-500/40 pt-5 text-xs font-medium text-slate-200">
                <Check
                  size={15}
                  aria-hidden="true"
                  className="text-orange-500"
                />
                Comunicación clara en cada etapa
              </div>
            </div>
          </aside>
        </div>
      </section>
      {/* PRÓXIMOS PASOS */}
      <section className=" bg-[#071024] text-white">
        <div className={`${container} py-16 lg:py-20`}>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-500">
              ¿Y después?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Del primer mensaje al próximo paso.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pasos.map((paso) => (
              <article
                key={paso.numero}
                className="rounded-2xl border border-orange-400/30 bg-[#122440]/30 shadow-sm shadow-black/10 p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-400/10 text-sm font-semibold text-orange-500">
                  {paso.numero}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {paso.titulo}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {paso.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* PREGUNTAS FRECUENTES */}
      <section
        className={`${container} grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24`}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-500">
            Antes de escribirnos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
            Algunas dudas,
            <span className="block text-slate-300">respuestas simples.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Si tu pregunta no está acá, podés incluirla en el formulario.
          </p>
          <a
            href="#formulario-contacto"
            className={`mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-orange-500 ${focusClass}`}
          >
            Hacer una consulta
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="space-y-3">
          {preguntas.map(({ pregunta, respuesta }) => (
            <details
              key={pregunta}
              className="group rounded-2xl border border-slate-200/80 bg-white transition-colors open:border-orange-300 open:bg-white/90"
            >
              <summary
                className={`flex cursor-pointer list-none items-center justify-between gap-5 rounded-2xl p-5 text-sm font-semibold text-slate-800 [&::-webkit-details-marker]:hidden ${focusClass}`}
              >
                {pregunta}
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-orange-500 transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="px-5 pb-5 pr-10 text-sm leading-7 text-slate-700">
                {respuesta}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
