import { useState } from "react";
import { NavLink } from "react-router";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowRight,
  Code2,
  Menu,
  MonitorCog,
  X,
} from "lucide-react";

const links = [
  {
    nombre: "Inicio",
    ruta: "/#Hero",
  },
  {
    nombre: "Servicios",
    ruta: "/servicios#Servicios",
  },
  {
    nombre: "Proyectos",
    ruta: "/proyectos#Proyectos",
  },
  {
    nombre: "Nosotros",
    ruta: "/nosotros#Nosotros",
  },
  {
    nombre: "Contacto",
    ruta: "/contacto#Contacto",
  },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const reduceMotion = useReducedMotion();

  const numeroWhatsApp = "2604230590".replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    "¡Hola! Me gustaría consultar por un proyecto o soporte técnico.",
  )}`;

  return (
    <header
      className="
        w-10/12
        fixed
        
        left-1/12
        top-5
        z-50
        px-4
        sm:px-6
        lg:px-8
        
       
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* =====================================================
            NAV WRAPPER
        ===================================================== */}

        <nav className="relative">
          {/* =====================================================
              NAVBAR PRINCIPAL
          ===================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border border-[#293850]
              bg-[#0C1627]/92
              shadow-[0_20px_55px_-20px_rgba(0,0,0,.75)]
              backdrop-blur-md
            "
          >
            {/* línea superior */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-12
                top-0
                h-px
                bg-linear-to-r
                from-transparent
                via-[#FA713A]/50
                to-transparent
              "
            />

            {/* glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-[#FA713A]/6
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                h-[68px]
                items-center
                justify-between
                px-4
                sm:px-5
                lg:px-6
              "
            >
              {/* =================================================
                  LOGO
              ================================================= */}

              <NavLink
                to="/"
                aria-label="Ir al inicio"
                className="
                  group
                  flex
                  shrink-0
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    transition
                    duration-300
                  "
                >
                  {/* glow logo */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-[#FA713A]/0
                      opacity-0
                      blur-xl
                      transition
                      duration-300
                      group-hover:bg-[#FA713A]/20
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

                <div className="hidden sm:block">
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        text-sm
                        font-semibold
                        tracking-tight
                        text-white
                      "
                    >
                      KoiBite
                    </span>

                    <span
                      className="
                        hidden
                        rounded-full
                        border border-[#FA713A]/20
                        bg-[#FA713A]/8
                        px-2
                        py-0.5
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#FFB297]
                        lg:inline-flex
                      "
                    >
                      Tech
                    </span>
                  </div>

                  <span
                    className="
                      mt-0.5
                      block
                      text-[9px]
                      tracking-[0.08em]
                      text-[#73839A]
                    "
                  >
                    Digital + IT
                  </span>
                </div>
              </NavLink>

              {/* =================================================
                  LINKS DESKTOP
              ================================================= */}

              <div className="hidden items-center md:flex">
                <div
                  className="
                    flex
                    items-center
                    gap-0.5
                    rounded-xl
                    p-1
                  "
                >
                  {links.map((link) => (
                    <NavLink
                      key={link.ruta}
                      to={link.ruta}
                      end={link.ruta === "/#Hero"}
                      className={({ isActive }) => `
                        relative
                        isolate
                        flex
                        items-center
                        rounded-lg
                        px-3.5
                        py-2.5
                        text-[13px]
                        font-medium
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-[#93A1B5] hover:text-white"
                        }
                      `}
                    >
                      {({ isActive }) => (
                        <>
                          {/* background activo */}
                          {isActive && (
                            <motion.span
                              layoutId="navbar-active"
                              className="
                                absolute
                                inset-0
                                -z-10
                                rounded-lg
                                border
                                border-[#FA713A]/15
                                bg-white/[0.055]
                              "
                              transition={
                                reduceMotion
                                  ? {
                                      duration: 0,
                                    }
                                  : {
                                      type: "spring",
                                      stiffness: 450,
                                      damping: 35,
                                    }
                              }
                            />
                          )}

                          <span className="relative flex items-center gap-2">
                            {/* dot activo */}
                            {isActive && (
                              <motion.span
                                layoutId="navbar-dot"
                                className="
                                  h-1.5
                                  w-1.5
                                  rounded-full
                                  bg-[#FA713A]
                                "
                              />
                            )}

                            {link.nombre}
                          </span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* =================================================
                  CTA DESKTOP
              ================================================= */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  hidden
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#FA713A]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#14131B]
                  shadow-[0_10px_30px_-12px_rgba(250,113,58,.65)]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#FF9064]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#FA713A]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#080F1E]
                  md:inline-flex
                "
              >
                Hablemos

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* =================================================
                  BOTÓN MOBILE
              ================================================= */}

              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={
                  menuOpen
                    ? "Cerrar menú"
                    : "Abrir menú"
                }
                aria-expanded={menuOpen}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#293850]
                  bg-[#111D30]
                  text-[#C2CCDA]
                  transition
                  duration-200
                  hover:border-[#FA713A]/40
                  hover:bg-[#162338]
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#FA713A]
                  md:hidden
                "
              >
                <AnimatePresence initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              rotate: -60,
                              scale: 0.85,
                            }
                      }
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              rotate: 60,
                              scale: 0.85,
                            }
                      }
                      transition={{
                        duration: reduceMotion
                          ? 0
                          : 0.14,
                      }}
                      className="absolute flex items-center justify-center"
                    >
                      <X
                        size={20}
                        aria-hidden="true"
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              rotate: 60,
                              scale: 0.85,
                            }
                      }
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              rotate: -60,
                              scale: 0.85,
                            }
                      }
                      transition={{
                        duration: reduceMotion
                          ? 0
                          : 0.14,
                      }}
                      className="absolute flex items-center justify-center"
                    >
                      <Menu
                        size={20}
                        aria-hidden="true"
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* =====================================================
              MENÚ MOBILE

              IMPORTANTE:
              Está fuera del contenedor con overflow-hidden.

              NO animamos height.
              Sólo opacity + y + scale.
          ===================================================== */}

          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: -8,
                        scale: 0.985,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        y: -6,
                        scale: 0.985,
                      }
                }
                transition={{
                  duration: reduceMotion
                    ? 0
                    : 0.18,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  absolute
                  left-0
                  right-0
                  top-[calc(100%+8px)]
                  z-50
                  origin-top
                  will-change-transform
                  md:hidden
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#293850]
                    bg-[#0C1627]/97
                    shadow-[0_25px_65px_-20px_rgba(0,0,0,.85)]
                    backdrop-blur-md
                  "
                >
                  {/* línea superior */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-x-16
                      top-0
                      h-px
                      bg-linear-to-r
                      from-transparent
                      via-[#FA713A]/40
                      to-transparent
                    "
                  />

                  <div className="px-4 pb-4 pt-3">
                    {/* =========================================
                        LINKS MOBILE
                    ========================================= */}

                    <div className="flex flex-col gap-1">
                      {links.map((link) => (
                        <NavLink
                          key={link.ruta}
                          to={link.ruta}
                          end={
                            link.ruta === "/#Hero"
                          }
                          onClick={() =>
                            setMenuOpen(false)
                          }
                          className={({
                            isActive,
                          }) => `
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            px-4
                            py-3.5
                            text-sm
                            font-medium
                            transition-colors
                            duration-200
                            ${
                              isActive
                                ? "border-[#FA713A]/20 bg-[#FA713A]/8 text-white"
                                : "border-transparent text-[#A1AEC3] hover:bg-white/[0.04] hover:text-white"
                            }
                          `}
                        >
                          {({ isActive }) => (
                            <>
                              <span className="flex items-center gap-3">
                                <span
                                  className={`
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    transition-colors
                                    ${
                                      isActive
                                        ? "bg-[#FA713A]"
                                        : "bg-[#42506A]"
                                    }
                                  `}
                                />

                                {link.nombre}
                              </span>

                              {isActive && (
                                <span
                                  className="
                                    text-[9px]
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#FFB297]
                                  "
                                >
                                  actual
                                </span>
                              )}
                            </>
                          )}
                        </NavLink>
                      ))}
                    </div>

                    {/* =========================================
                        DIGITAL / IT
                    ========================================= */}

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {/* DIGITAL */}
                      <NavLink
                        to="/servicios"
                        onClick={() =>
                          setMenuOpen(false)
                        }
                        className="
                          group
                          rounded-xl
                          border
                          border-[#263A58]
                          bg-[#101A2B]
                          p-3.5
                          transition-colors
                          duration-200
                          hover:border-[#42638D]
                          hover:bg-[#122037]
                        "
                      >
                        <Code2
                          size={17}
                          aria-hidden="true"
                          className="text-[#7DB3FF]"
                        />

                        <p className="mt-3 text-xs font-semibold text-white">
                          Digital
                        </p>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            leading-4
                            text-[#7E8DA2]
                          "
                        >
                          Web · CMS · Integraciones
                        </p>
                      </NavLink>

                      {/* SOPORTE IT */}
                      <NavLink
                        to="/servicios"
                        onClick={() =>
                          setMenuOpen(false)
                        }
                        className="
                          group
                          rounded-xl
                          border
                          border-[#3C3031]
                          bg-[#151722]
                          p-3.5
                          transition-colors
                          duration-200
                          hover:border-[#785040]
                          hover:bg-[#1B1B28]
                        "
                      >
                        <MonitorCog
                          size={17}
                          aria-hidden="true"
                          className="text-[#FA713A]"
                        />

                        <p className="mt-3 text-xs font-semibold text-white">
                          Soporte IT
                        </p>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            leading-4
                            text-[#8F8388]
                          "
                        >
                          PCs · Sistemas · Hardware
                        </p>
                      </NavLink>
                    </div>

                    {/* =========================================
                        CTA MOBILE
                    ========================================= */}

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        setMenuOpen(false)
                      }
                      className="
                        group
                        mt-3
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        bg-[#FA713A]
                        px-5
                        py-3.5
                        text-sm
                        font-semibold
                        text-[#14131B]
                        transition-colors
                        duration-200
                        hover:bg-[#FF9064]
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#FA713A]
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-[#0C1627]
                      "
                    >
                      <span>
                        Hablemos de lo que necesitás
                      </span>

                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                        className="
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                        "
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};