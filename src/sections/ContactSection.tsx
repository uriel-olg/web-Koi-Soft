import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  contactSchema,
  contactServices,
  normalizeContactService,
} from "../../shared/contact";
import type { ContactData } from "../../shared/contact";
import { contactEmail, whatsappUrl } from "../data/site";

const initialValues: ContactData = {
  nombre: "",
  email: "",
  empresa: "",
  servicio: "",
  presupuesto: "",
  mensaje: "",
};
type Submission = {
  state: "idle" | "sending" | "success" | "error";
  message: string;
};

export default function ContactSection({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  const [search] = useSearchParams();
  const [submission, setSubmission] = useState<Submission>({
    state: "idle",
    message: "",
  });
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: initialValues,
    mode: "onTouched",
  });
  const selectedService = normalizeContactService(search.get("servicio") || "");
  useEffect(() => {
    if (
      selectedService &&
      contactServices.some((service) => service === selectedService)
    )
      setValue("servicio", selectedService);
  }, [selectedService, setValue]);

  async function onSubmit(data: ContactData) {
    setSubmission({ state: "sending", message: "" });
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const apiBase = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
      const endpoint =
        import.meta.env.VITE_CONTACT_ENDPOINT || `${apiBase}/api/contacto`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const result: unknown = await response.json().catch(() => null);
      if (
        !response.ok ||
        typeof result !== "object" ||
        result === null ||
        !("ok" in result) ||
        result.ok !== true
      ) {
        throw new Error("No se confirmó el envío");
      }
      reset(initialValues);
      setSubmission({
        state: "success",
        message:
          "¡Consulta enviada! El servicio aceptó tu mensaje. Gracias por escribirnos.",
      });
    } catch {
      setSubmission({
        state: "error",
        message:
          "No pudimos confirmar el envío. Tus datos siguen acá: podés reintentar o escribirnos por WhatsApp o email.",
      });
    } finally {
      clearTimeout(timer);
    }
  }

  const fieldError = (name: keyof ContactData) =>
    errors[name] ? (
      <span className="field-error" id={`${name}-error`}>
        {errors[name]?.message}
      </span>
    ) : null;
  const a11y = (name: keyof ContactData) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  return (
    <section
      className="section contact-section"
      id="contacto"
      aria-label="Contactanos"
    >
      <div className="container contact-grid">
        <div className="contact-copy">
          <Heading>
            Las buenas soluciones empiezan con una conversación.
          </Heading>
          <p>
            Contanos qué tenés en mente o qué dejó de funcionar. Busquemos
            juntos una forma de resolverlo.
          </p>
          <ul className="contact-points">
            <li>
              <CheckCircle2 size={17} aria-hidden="true" /> Desarrollo web,
              sistemas y automatizaciones
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" /> Armado,
              mantenimiento y soporte de PC
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" /> Asesoramiento claro
              y personalizado
            </li>
          </ul>
          <div className="contact-direct">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              <span>
                ¿Preferís charlar?<strong>Escribinos por WhatsApp</strong>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href={`mailto:${contactEmail}`}>
              <Mail size={20} aria-hidden="true" />
              <span>
                También por email<strong>{contactEmail}</strong>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label="Formulario de consulta"
          aria-busy={isSubmitting}
        >
          <div className="form-intro">
            <h3>¿Qué necesitás que funcione mejor?</h3>
            <p>Los campos con * son obligatorios.</p>
          </div>
          <fieldset disabled={isSubmitting} className="form-fields">
            <div>
              <label htmlFor="nombre">Tu nombre *</label>
              <input
                id="nombre"
                {...register("nombre")}
                {...a11y("nombre")}
                autoComplete="name"
                placeholder="¿Cómo te llamás?"
                maxLength={100}
                required
              />
              {fieldError("nombre")}
            </div>
            <div>
              <label htmlFor="email">Tu email *</label>
              <input
                id="email"
                {...register("email")}
                {...a11y("email")}
                type="email"
                autoComplete="email"
                placeholder="vos@ejemplo.com"
                maxLength={254}
                required
              />
              {fieldError("email")}
            </div>
            <div className="field-full">
              <label htmlFor="empresa">
                Empresa o emprendimiento <span>(opcional)</span>
              </label>
              <input
                id="empresa"
                {...register("empresa")}
                {...a11y("empresa")}
                autoComplete="organization"
                placeholder="El nombre de tu proyecto"
                maxLength={150}
              />
              {fieldError("empresa")}
            </div>
            <div className="field-full">
              <label htmlFor="servicio">¿En qué podemos ayudarte? *</label>
              <select
                id="servicio"
                {...register("servicio")}
                {...a11y("servicio")}
                required
              >
                <option value="">Seleccioná un servicio</option>
                {contactServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {fieldError("servicio")}
            </div>
            <div className="field-full">
              <label htmlFor="presupuesto">
                Presupuesto estimado <span>(opcional)</span>
              </label>
              <select
                id="presupuesto"
                {...register("presupuesto")}
                {...a11y("presupuesto")}
              >
                <option value="">Prefiero conversarlo</option>
                <option value="menos-500">Menos de USD 500</option>
                <option value="500-1500">Entre USD 500 y USD 1.500</option>
                <option value="mas-1500">Más de USD 1.500</option>
              </select>
              {fieldError("presupuesto")}
            </div>
            <div className="field-full">
              <label htmlFor="mensaje">Contanos un poco más *</label>
              <textarea
                id="mensaje"
                {...register("mensaje")}
                {...a11y("mensaje")}
                placeholder="Tu idea, tu proyecto o el problema que querés resolver…"
                rows={4}
                maxLength={5000}
                required
              />
              {fieldError("mensaje")}
            </div>
          </fieldset>
          <button
            className="button submit-button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderCircle
                  className="spinner"
                  size={18}
                  aria-hidden="true"
                />{" "}
                Enviando consulta…
              </>
            ) : (
              <>
                Enviar consulta <Send size={17} aria-hidden="true" />
              </>
            )}
          </button>
          <p className="form-privacy">
            Usamos los datos de tu consulta para responderte y evaluar lo que
            necesitás.
          </p>
          <div aria-live="polite" aria-atomic="true">
            {submission.message && (
              <p
                className={`form-status status-${submission.state}`}
                role={submission.state === "error" ? "alert" : "status"}
              >
                {submission.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
