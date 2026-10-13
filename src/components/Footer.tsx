import { ArrowRight, Code2, MessageCircle, MonitorCog } from "lucide-react";

import { Link, NavLink } from "react-router";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Proceso", href: "/proceso" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

const digitalServices = [
  "Desarrollo web",
  "Landing pages",
  "Catálogos + CMS",
  "Integraciones",
  "Optimización web",
];

const itServices = [
  "Armado de PCs",
  "Windows y software",
  "Hardware",
  "Configuración de equipos",
  "Mantenimiento",
];

const container = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-0";

export default function Footer() {
  const numeroWhatsApp = "2604230590".replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    "¡Hola! Me gustaría consultar por un proyecto o soporte técnico.",
  )}`;

  return (
    <footer className="relative overflow-hidden border-t border-[#26344A] bg-[#060D1A] text-white">
      {/* DECORACIÓN */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-32 top-20
          h-72 w-72
          rounded-full
          bg-blue-500/[0.04]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 top-10
          h-72 w-72
          rounded-full
          bg-[#FA713A]/[0.05]
          blur-3xl
        "
      />

      {/* =========================================================
          CONTENIDO PRINCIPAL
      ========================================================= */}

      <div className={`${container} relative py-16 md:py-20 lg:py-24`}>
        <div
          className="
            grid
            gap-12
            md:flex
            md:justify-between
            
            lg:grid-cols-[1.25fr_.65fr_1.1fr_.9fr]
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
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#2C3A50]
                  bg-[#101A2B]
                  transition
                  duration-300
                  group-hover:border-[#FA713A]/40
                  group-hover:bg-[#162338]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-[#FA713A]/10
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <img
                  src="/KoiBite-log.svg"
                  alt=""
                  className="
                    relative
                    size-7
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold tracking-tight text-white">
                    Koi
                    <span className="text-[#FA713A]">Bite</span>
                  </span>

                  <span
                    className="
                      rounded-full
                      border border-[#FA713A]/20
                      bg-[#FA713A]/8
                      px-2
                      py-0.5
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#FFB297]
                    "
                  >
                    Tech
                  </span>
                </div>

                <span className="mt-0.5 block text-[9px] tracking-[0.1em] text-[#73839A]">
                  DIGITAL + IT
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#96A4B7]">
              Soluciones tecnológicas para negocios y profesionales.
              Desarrollamos tu presencia digital y mantenemos funcionando los
              equipos y sistemas que usás todos los días.
            </p>

            {/* SOCIAL */}
            <div className="mt-7 flex gap-2">
              {[
                {
                  name: "Instagram",
                  icon: "/instagram.png",
                  href: "#",
                },
                {
                  name: "Facebook",
                  icon: "/facebook.png",
                  href: "#",
                },
                {
                  name: "WhatsApp",
                  icon: "/whatsapp.png",
                  href: whatsappUrl,
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "WhatsApp" ? "_blank" : undefined}
                  rel={
                    social.name === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.name}
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
                    src={social.icon}
                    alt=""
                    className="
                      size-[18px]
                      opacity-60
                      transition
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              SERVICIOS
          ===================================================== */}

          <div>
            <div className="hidden md:grid md:gap-8  lg:grid-cols-2 ">
              {/* DIGITAL */}
              <div>
                <div className="flex items-center gap-2">
                  <Code2
                    size={15}
                    aria-hidden="true"
                    className="text-[#7DB3FF]"
                  />

                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    Digital
                  </h3>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  {digitalServices.map((service) => (
                    <Link
                      key={service}
                      to="/servicios"
                      className="
                        w-fit
                        text-sm
                        text-[#8D9AAF]
                        transition
                        duration-300
                        hover:text-[#AFCFFF]
                      "
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT */}
              <div className=" ">
                <div className="flex items-center gap-2">
                  <MonitorCog
                    size={15}
                    aria-hidden="true"
                    className="text-[#FA713A]"
                  />

                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    Soporte IT
                  </h3>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  {itServices.map((service) => (
                    <Link
                      key={service}
                      to="/servicios"
                      className="
                        w-fit
                        text-sm
                        text-[#8D9AAF]
                        transition
                        duration-300
                        hover:text-[#FFB297]
                      "
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
                NAVEGACIÓN
            ===================================================== */}

          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FA713A]" />

              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Navegación
              </h3>
            </div>

            <div className="mt-6 flex flex-col gap-3.5">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="
                      group
                      inline-flex
                      w-fit
                      items-center
                      gap-2.5
                      text-sm
                      text-[#8D9AAF]
                      transition
                      duration-300
                      hover:translate-x-1
                      hover:text-white
                    "
                >
                  <span
                    className="
                        h-1
                        w-1
                        rounded-full
                        bg-[#44526A]
                        transition
                        duration-300
                        group-hover:bg-[#FA713A]
                      "
                  />

                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            FRANJA FINAL
        ========================================================= */}

        <div
          className="
            relative
            mt-14
            overflow-hidden
            rounded-2xl
            border
            border-[#29364B]
            bg-[#0D1727]
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              inset-y-0 left-0
              w-px
              bg-[#FA713A]
            "
          />

          <div
            className="
              flex
              flex-col
              gap-5
              px-6
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
            "
          >
            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#FA713A]/10
                  text-[#FA713A]
                "
              >
                <MessageCircle size={17} aria-hidden="true" />
              </span>

              <div>
                <p className="text-sm font-medium text-white">
                  Web, sistemas, equipos y soporte.
                </p>

                <p className="mt-1 text-xs text-[#78889E]">
                  Tecnología simple y funcional para tu negocio.
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[#FFB297]
                transition
                hover:text-white
              "
            >
              Consultar por WhatsApp
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>

        {/* SEPARADOR */}
        <div className="my-10 h-px bg-linear-to-r from-transparent via-[#26344A] to-transparent" />

        {/* =========================================================
            FOOTER BOTTOM
        ========================================================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            text-xs
            text-[#66758A]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} KoiBite. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Disponible para nuevos proyectos
            </span>

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
