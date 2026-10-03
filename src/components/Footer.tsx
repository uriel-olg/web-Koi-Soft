import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Link, NavLink } from "react-router";
import { motion } from "motion/react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Proceso", href: "/proceso" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

const services = [
  "Desarrollo web",
  "Landing pages",
  "Automatizaciones",
  "Optimización",
  "Soporte",
];

const container = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12";

export default function Footer() {
  return (
    <footer className="border-t border-[#26344A] bg-[#071024] text-white">
      {/* =========================================================
          CONTENIDO PRINCIPAL
      ========================================================= */}
      <div className={`${container} py-16 md:py-20 lg:py-24`}>
        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.35fr_0.75fr_0.75fr_1fr]
            lg:gap-10
          "
        >
          {/* =====================================================
              MARCA
          ===================================================== */}
          <div>
            <Link
              to="/"
              aria-label="KoiBite - Inicio"
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#26344A]
                  bg-[#101A2B]
                  transition
                  duration-300
                  group-hover:border-[#FA713A]/40
                  group-hover:bg-[#162338]
                "
              >
                <img
                  src="/KoiBite-log.svg"
                  alt=""
                  className="size-7 transition duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-xl font-semibold tracking-tight text-white">
                Koi
                <span className="text-[#FA713A]">Bite</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Diseñamos sitios web, automatizaciones y soluciones digitales
              pensadas para hacer que tu negocio funcione mejor.
            </p>

            {/* ===================================================
                SOCIAL
            =================================================== */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#26344A]
                  bg-[#101A2B]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#FA713A]/40
                  hover:bg-[#162338]
                "
              >
                <img
                  src="/instagram.png"
                  alt=""
                  className="size-5 opacity-70 transition group-hover:opacity-100"
                />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#26344A]
                  bg-[#101A2B]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#FA713A]/40
                  hover:bg-[#162338]
                "
              >
                <img
                  src="/facebook.png"
                  alt=""
                  className="size-5 opacity-70 transition group-hover:opacity-100"
                />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#26344A]
                  bg-[#101A2B]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#FA713A]/40
                  hover:bg-[#162338]
                "
              >
                <img
                  src="/whatsapp.png"
                  alt=""
                  className="size-5 opacity-70 transition group-hover:opacity-100"
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              NAVEGACIÓN
          ===================================================== */}
          <div>
            <h3 className="text-sm font-semibold text-white">Navegación</h3>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition
                    duration-300
                    hover:text-white
                  "
                >
                  <span className="h-1 w-1 rounded-full bg-transparent transition duration-300 group-hover:bg-[#FA713A]" />

                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* =====================================================
              SERVICIOS
          ===================================================== */}
          <div>
            <h3 className="text-sm font-semibold text-white">Servicios</h3>

            <div className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="text-sm text-slate-400 transition duration-300 hover:text-slate-200"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}
          <div>
            <div
              className="
                rounded-2xl
                border
                border-[#26344A]
                bg-[#101A2B]
                p-6
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FA713A]/10 text-[#FA713A]">
                <Mail size={18} />
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                ¿Tenés un proyecto?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Contanos qué necesitás y vemos juntos la mejor forma de hacerlo.
              </p>

              <motion.div
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="mt-6"
              >
                <Link
                  to="/contacto"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#FA713A]
                    transition
                    duration-300
                    hover:text-[#FFB297]
                  "
                >
                  Empezar proyecto
                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FRASE / DESTACADO
        ========================================================= */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-[#26344A] bg-[#101A2B]">
          <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FA713A]/10 text-[#FA713A]">
                <MessageCircle size={17} />
              </span>

              <p className="text-sm text-slate-300">
                Hablemos de tu próxima idea.
              </p>
            </div>

            <Link
              to="/contacto"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[#FA713A]
                transition
                hover:text-[#FFB297]
              "
            >
              Contactanos
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* =========================================================
            LINEA
        ========================================================= */}
        <div className="my-10 h-px bg-[#26344A]" />

        {/* =========================================================
            FOOTER BOTTOM
        ========================================================= */}
        <div
          className="
            flex
            flex-col
            gap-4
            text-sm
            text-slate-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} KoiBite. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition duration-300 hover:text-slate-300"
            >
              Privacidad
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-slate-300"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
