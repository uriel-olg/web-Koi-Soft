import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import {
  contactSchema,
  contactServices,
  legacyContactServices,
} from "../shared/contact.ts";
import { projects, services } from "../src/data/site.ts";

const validContact = {
  nombre: "Ana Pérez",
  email: "ana@example.com",
  empresa: "",
  servicio: "Desarrollo web",
  presupuesto: "",
  mensaje: "Quiero consultar por una web para mi negocio.",
};

test("every service and project can be submitted to the shared API schema", () => {
  for (const { contactService } of [...services, ...projects]) {
    assert.equal(
      contactSchema.safeParse({ ...validContact, servicio: contactService })
        .success,
      true,
      contactService,
    );
  }
});

test("PHP endpoint accepts the same contact service names", () => {
  const php = readFileSync(
    new URL("../api/contacto.php", import.meta.url),
    "utf8",
  );
  for (const service of contactServices)
    assert.ok(php.includes(`'${service}'`), service);
});

test("contact validation rejects empty, invalid, and unsupported fields", () => {
  for (const changes of [
    { nombre: " " },
    { email: "incorrecto" },
    { servicio: "Servicio inexistente" },
    { mensaje: "Muy corto" },
    { presupuesto: "gratis" },
  ]) {
    assert.equal(
      contactSchema.safeParse({ ...validContact, ...changes }).success,
      false,
    );
  }
});

test("contact validation trims inputs and accepts optional fields left empty", () => {
  const result = contactSchema.parse({
    ...validContact,
    nombre: "  Ana Pérez  ",
    mensaje: "  Necesito soporte para mi equipo.  ",
  });
  assert.equal(result.nombre, "Ana Pérez");
  assert.equal(result.mensaje, "Necesito soporte para mi equipo.");
  assert.equal(result.empresa, "");
  assert.equal(result.presupuesto, "");
});

test("contact validation enforces maximum lengths", () => {
  for (const [field, length] of [
    ["nombre", 101],
    ["email", 255],
    ["empresa", 151],
    ["mensaje", 5001],
  ] as const) {
    assert.equal(
      contactSchema.safeParse({ ...validContact, [field]: "a".repeat(length) })
        .success,
      false,
      field,
    );
  }
});

test("legacy service identifiers remain compatible with the restored form", () => {
  const php = readFileSync(new URL("../api/contacto.php", import.meta.url), "utf8");
  for (const [slug, label] of Object.entries(legacyContactServices)) {
    assert.ok(php.includes(`'${slug}' => '${label}'`), slug);
    assert.equal(
      contactSchema.parse({ ...validContact, servicio: slug }).servicio,
      label,
    );
  }
});
