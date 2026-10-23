import { useState } from "react";
import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MessageCircle,
} from "lucide-react";
import { contact, contactServices, whatsappUrl } from "../data/site";
import { contactoSchema, serviceLabels } from "../schemas/contact";
import type { DatosContacto } from "../schemas/contact";
import { FAQSection, PageIntro } from "../components/ui";

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={`${id}-error`} className="field-error" role="alert">
      {message}
    </p>
  ) : null;
}

export default function Contact() {
  const [params] = useSearchParams();
  const requestedService = params.get("servicio") || "";
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [failure, setFailure] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DatosContacto>({
    resolver: zodResolver(contactoSchema),
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      servicio: Object.hasOwn(serviceLabels, requestedService)
        ? requestedService
        : "",
      presupuesto: "",
      mensaje: "",
    },
    mode: "onTouched",
  });

  async function onSubmit(data: DatosContacto) {
    setStatus("idle");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const base = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
      const endpoint =
        import.meta.env.VITE_CONTACT_ENDPOINT || `${base}/api/contacto`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true)
        throw new Error(
          "No se pudo enviar la consulta. Tus datos siguen acá: podés reintentar o escribirnos por email o WhatsApp.",
        );
      reset();
      setStatus("success");
    } catch (error) {
      setFailure(
        error instanceof Error && error.name === "AbortError"
          ? "La conexión tardó demasiado. Conservamos tus datos para que puedas reintentar."
          : "No se pudo enviar la consulta. Conservamos tus datos. Reintentá o escribinos directamente por email o WhatsApp.",
      );
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  const invalid = (name: keyof DatosContacto) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  return (
    <>
      <PageIntro
        eyebrow="CONTACTO"
        title={
          <>
            Contanos qué necesitás
            <br />
            <span className="accent">resolver.</span>
          </>
        }
      >
        Una nueva web, un equipo que necesita atención o una idea que todavía
        está tomando forma. Empecemos por entenderla.
      </PageIntro>
      <section className="container contact-layout">
        <div className="contact-form-panel">
          <div className="form-heading">
            <span className="eyebrow">HAGAMOS LUGAR A TU IDEA</span>
            <p>Los campos con * son obligatorios.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <fieldset disabled={isSubmitting}>
              <legend className="sr-only">Datos de tu consulta</legend>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="nombre">Tu nombre *</label>
                  <input
                    id="nombre"
                    autoComplete="name"
                    placeholder="¿Cómo te llamás?"
                    required
                    maxLength={100}
                    {...register("nombre")}
                    {...invalid("nombre")}
                  />
                  <FieldError id="nombre" message={errors.nombre?.message} />
                </div>
                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="vos@tuempresa.com"
                    required
                    maxLength={254}
                    {...register("email")}
                    {...invalid("email")}
                  />
                  <FieldError id="email" message={errors.email?.message} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="empresa">
                  Empresa o proyecto <span>Opcional</span>
                </label>
                <input
                  id="empresa"
                  autoComplete="organization"
                  placeholder="El nombre de tu negocio o proyecto"
                  maxLength={150}
                  {...register("empresa")}
                  {...invalid("empresa")}
                />
                <FieldError id="empresa" message={errors.empresa?.message} />
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="servicio">¿En qué podemos ayudarte? *</label>
                  <select
                    id="servicio"
                    required
                    {...register("servicio")}
                    {...invalid("servicio")}
                  >
                    <option value="">Elegí una opción</option>
                    {contactServices.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <FieldError
                    id="servicio"
                    message={errors.servicio?.message}
                  />
                </div>
                <div className="field">
                  <label htmlFor="presupuesto">
                    Presupuesto estimado <span>Opcional</span>
                  </label>
                  <select
                    id="presupuesto"
                    {...register("presupuesto")}
                    {...invalid("presupuesto")}
                  >
                    <option value="">Todavía no lo sé</option>
                    <option value="menos-500">Menos de USD 500</option>
                    <option value="500-1500">USD 500 a 1.500</option>
                    <option value="mas-1500">Más de USD 1.500</option>
                  </select>
                  <FieldError
                    id="presupuesto"
                    message={errors.presupuesto?.message}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="mensaje">
                  Un poco sobre lo que necesitás *
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  placeholder="Qué te gustaría crear, qué problema tenés o qué necesitás mejorar…"
                  required
                  minLength={10}
                  maxLength={5000}
                  {...register("mensaje")}
                  {...invalid("mensaje")}
                />
                <FieldError id="mensaje" message={errors.mensaje?.message} />
              </div>
              <button
                type="submit"
                className="button button-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle
                      size={18}
                      className="spinner"
                      aria-hidden="true"
                    />
                    Enviando consulta…
                  </>
                ) : (
                  <>
                    Enviar consulta
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </>
                )}
              </button>
            </fieldset>
            <div role="status" aria-live="polite" aria-atomic="true">
              {status === "success" && (
                <p className="form-success">
                  <CheckCircle2 size={20} aria-hidden="true" />
                  Tu consulta fue aceptada para envío. Gracias por escribirnos.
                </p>
              )}
            </div>
            {status === "error" && (
              <p className="form-failure" role="alert">
                {failure}
              </p>
            )}
            <p className="form-privacy">
              Usaremos estos datos para responder a tu consulta.
            </p>
          </form>
        </div>
        <aside className="contact-aside">
          <p className="eyebrow">TAMBIÉN, DE FORMA DIRECTA</p>
          <h2>
            La conversación
            <br />
            empieza como
            <br />
            <span className="muted">te quede más cómodo.</span>
          </h2>
          <a
            className="contact-method"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={23} aria-hidden="true" />
            <span>
              <strong>WhatsApp</strong>
              <span>Escribinos un mensaje</span>
            </span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a className="contact-method" href={`mailto:${contact.email}`}>
            <Mail size={23} aria-hidden="true" />
            <span>
              <strong>Email</strong>
              <span>{contact.email}</span>
            </span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <div className="contact-reassurance">
            <span className="status-dot" />
            <h3>No hace falta hablar en técnico.</h3>
            <p>
              «Mi PC está lenta» o «necesito una web para mi negocio» también
              son una buena manera de empezar.
            </p>
          </div>
          <div className="contact-next">
            <span className="eyebrow">¿Y DESPUÉS?</span>
            <ol>
              <li>Leemos tu consulta.</li>
              <li>Entendemos el contexto.</li>
              <li>Te proponemos el próximo paso.</li>
            </ol>
          </div>
        </aside>
      </section>
      <FAQSection />
    </>
  );
}
