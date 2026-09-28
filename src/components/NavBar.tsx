import { useState } from "react";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { nombre: "Inicio", ruta: "/#Hero"  },
  { nombre: "Servicios", ruta: "/servicios#Servicios" },
  { nombre: "Proyectos", ruta: "/proyectos#Proyectos" },
  // { nombre: "Nosotros", ruta: "/nosotros#" },
  { nombre: "Contacto", ruta: "/contacto#Contacto" },

];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        w-8/12
        m-auto
        sticky top-5
         z-50
        bg-blue-950/10         
        rounded-3xl
        backdrop-blur-xl
      "
    >
      <nav
        className="
          mx-auto
          flex h-15
          max-w-7xl
          items-center
          justify-between
          px-5
          md:px-8
          lg:px-10
        "
      >
        {/* LOGO */}

        <NavLink
          to="/"
          className="
            font-display
            text-xl
            font-bold
            tracking-tight
            text-gray-950
          "
        >
          <img src="/KoiBite-log.svg" alt=""  className="size-8"/>
        </NavLink>

        {/* LINKS DESKTOP */}

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.ruta}
              to={link.ruta}
              end={link.ruta === "/"}
              className={({ isActive }) =>
                `
                  relative
                  py-2
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  {link.nombre}

                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="
                        absolute
                        -bottom-1
                        left-0
                        h-[2px]
                        w-full
                        rounded-full
                        bg-blue-600
                      "
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA DESKTOP */}

        <div className="hidden md:block">
          <NavLink
            to="/contacto"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-orange-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-orange-700
            "
          >
            Hablemos
          </NavLink>
        </div>

        {/* MOBILE */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex h-10 w-10
            flex-col
            items-center
            justify-center
            gap-1.5
            rounded-lg
            
            md:hidden
          "
          aria-label="Abrir menú"
        >
          <span
            className={`
              h-[2px] w-5 bg-white
              transition
              ${menuOpen ? "translate-y-2 rotate-45" : ""}
            `}
          />

          <span
            className={`
              h-[2px] w-5 bg-white
              transition
              ${menuOpen ? "opacity-0" : ""}
            `}
          />

          <span
            className={`
              h-[2px] w-5 bg-white
              transition
              ${menuOpen ? "-translate-y-2 -rotate-45" : ""}
            `}
          />
        </button>
      </nav>

      {/* MENU MOBILE */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden  md:hidden"
          >
            <div className="px-5 py-6">
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <NavLink
                    key={link.ruta}
                    to={link.ruta}
                    end={link.ruta === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                        rounded-xl
                        px-4 py-3
                        text-base
                        font-medium
                        transition
                        ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-gray-400 hover:bg-gray-50 hover:text-gray-950"
                        }
                      `
                    }
                  >
                    {link.nombre}
                  </NavLink>
                ))}
              </div>

              <NavLink
                to="/contacto"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-5
                  flex w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Solicitar Presupuesto
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};