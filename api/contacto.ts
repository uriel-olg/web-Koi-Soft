
import "dotenv/config";
import express from "express";
import cors from "cors";
import { Resend } from "resend";
import { z } from "zod";

const app = express();

const { RESEND_API_KEY, CONTACT_EMAIL, RESEND_FROM, FRONTEND_URL } =
  process.env;

if (!RESEND_API_KEY || !CONTACT_EMAIL || !RESEND_FROM || !FRONTEND_URL) {
  throw new Error("Faltan variables de entorno del backend");
}

const resend = new Resend(RESEND_API_KEY);

// const resend = new Resend(process.env.RESEND_API_KEY);


app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json({ limit: "20kb" }));

const contactoSchema = z.object({
  nombre: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  empresa: z.string().trim().max(150),
  servicio: z.enum([
    "Desarrollo web",
    "Landing page",
    "Catálogo digital",
    "E-commerce",
    "Automatizaciones",
    "Otro / Necesito asesoramiento",
  ]),
  presupuesto: z.enum(["", "menos-500", "500-1500", "mas-1500"]),
  mensaje: z.string().trim().min(10).max(5000),
});

type DatosContacto = z.infer<typeof contactoSchema>;

// Función de envío independiente de Express y del hosting.
async function enviarConsulta(datos: DatosContacto) {
  const { error } = await resend.emails.send({
    from: RESEND_FROM!,
    to: CONTACT_EMAIL!,
    replyTo: datos.email,
    subject: "Nueva consulta desde la web",
    text: [
      `Nombre: ${datos.nombre}`,
      `Email: ${datos.email}`,
      `Empresa: ${datos.empresa || "No especificada"}`,
      `Servicio: ${datos.servicio}`,
      `Presupuesto: ${datos.presupuesto || "No definido"}`,
      "",
      "Mensaje:",
      datos.mensaje,
    ].join("\n"),
  });

  if (error) {
    throw new Error("Resend no pudo procesar el envío");
  }
}

// Esta ruta recibe el fetch de React.
app.post("/api/contacto", async (req, res) => {
  const resultado = contactoSchema.safeParse(req.body);

  if (!resultado.success) {
    res.status(400).json({ error: "Revisá los datos del formulario" });
    return;
  }

  try {
    await enviarConsulta(resultado.data);
    res.json({ ok: true });
  } catch {
    res.status(502).json({ error: "No se pudo enviar la consulta" });
  }
});

const puerto = Number(process.env.PORT || 3001);

app.listen(puerto, () => {
  console.log(`Backend escuchando en el puerto ${puerto}`);
});


