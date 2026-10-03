import { useState } from "react";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { nombre: "Inicio", ruta: "/#Hero" },
  { nombre: "Servicios", ruta: "/servicios#Servicios" },
  { nombre: "Proyectos", ruta: "/proyectos#Proyectos" },
  { nombre: "Nosotros", ruta: "/nosotros#Nosotros" },
  { nombre: "Contacto", ruta: "/contacto#Contacto" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <nav
          className="
            relative
            rounded-3xl
            border border-[#26344A]
             bg-[#101A2B]/60
            shadow-2xl
            shadow-black/20
            backdrop-blur-2xl
          "
        >
          <div
            className="
              flex
              h-[68px]
              items-center
              justify-between
              px-4
              sm:px-6
              lg:px-7
            "
          >
            {/* =====================================================
                LOGO
            ===================================================== */}
            <NavLink
              to="/"
              className="group flex items-center gap-3"
              aria-label="Ir al inicio"
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
                  group-hover:border-[#FA713A]/40
                  group-hover:bg-[#162338]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-[#FA713A]/5
                    opacity-0
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <img
                  src="/KoiBite-log.svg"
                  alt=""
                  className="relative size-7 transition duration-300 group-hover:scale-105"
                />
              </div>

              <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
                KoiBite
              </span>
            </NavLink>

            {/* =====================================================
                LINKS DESKTOP
            ===================================================== */}
            <div className="hidden items-center md:flex">
              <div className="flex items-center gap-1 rounded-xl p-1">
                {links.map((link) => (
                  <NavLink
                    key={link.ruta}
                    to={link.ruta}
                    end={link.ruta === "/#Hero"}
                    className={({ isActive }) =>
                      `
                        relative
                        rounded-lg
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        transition
                        duration-300
                        ${
                          isActive
                            ? "bg-[#FA713A]/10 text-white"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }
                      `
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative z-10 flex items-center gap-2">
                        {isActive && (
                          <motion.span
                            layoutId="nav-active-dot"
                            className="h-1.5 w-1.5 rounded-full bg-[#FA713A]"
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}

                        {link.nombre}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* =====================================================
                CTA DESKTOP
            ===================================================== */}
            <a className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#FA713A]/20
                  bg-[#FA713A]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-black/20
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#E85F2D]
                  hover:shadow-[#FA713A]/20
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#FA713A]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#080F1E]
                " href={`https://wa.me/${2604230590}?text=${encodeURIComponent(
                    "¡Hola! Me gustaría consultar por un proyecto.",
                  )}`}
                >
                
                  
                  Hablemos
                
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"></ArrowRight>
                
            </a>

            {/* =====================================================
                MOBILE BUTTON
            ===================================================== */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                
                bg-[#101A2B]
                text-slate-300
                transition
                duration-300
                hover:border-[#FA713A]/40
                hover:bg-[#162338]
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#FA713A]
                md:hidden
              "
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={21} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={21} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* =====================================================
              MENU MOBILE
          ===================================================== */}
          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="overflow-hidden md:hidden"
              >
                <div className="border-t border-[#26344A] px-4 pb-5 pt-3">
                  <div className="flex flex-col gap-1">
                    {links.map((link) => (
                      <NavLink
                        key={link.ruta}
                        to={link.ruta}
                        end={link.ruta === "/#Hero"}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            px-4
                            py-3.5
                            text-sm
                            font-medium
                            transition
                            duration-300
                            ${
                              isActive
                                ? "border border-[#FA713A]/20 bg-[#FA713A]/10 text-white"
                                : "border border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
                            }
                          `
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={`
                                h-1.5
                                w-1.5
                                rounded-full
                                transition
                                ${isActive ? "bg-[#FA713A]" : "bg-slate-700"}
                              `}
                            />

                            {link.nombre}
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>

                  {/* CTA MOBILE */}
                  <NavLink
                    to="/contacto"
                    onClick={() => setMenuOpen(false)}
                    className="
                      group
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#FA713A]
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-black/20
                      transition
                      duration-300
                      hover:bg-[#E85F2D]
                    "
                  >
                    Hablemos de tu proyecto
                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};
