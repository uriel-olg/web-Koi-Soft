import { ArrowUpRight } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* CONTENIDO PRINCIPAL */}

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 lg:px-10">

        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.4fr_.7fr_.7fr_1fr]
          "
        >
          {/* MARCA */}

          <div>
            <Link
              to="/"
              className="
                font-display
                text-2xl
                font-bold
                tracking-tight
              "
            >
              <span className="text-orange-500">Koi</span>Bite
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Diseñamos sitios web, automatizaciones y soluciones digitales
              pensadas para hacer que tu negocio funcione mejor.
            </p>

            {/* SOCIAL */}

            <div className="mt-7 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  size-8
                  items-center
                  justify-center
                  rounded-xl
                  
                  text-gray-400
                  transition
                  duration-300
                  hover:border-blue-500
                  hover:bg-gray-500
                  hover:text-white
                "
              >
                <img src="/instagram.png" alt="" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  size-8
                  items-center
                  justify-center
                  rounded-4xl
                  
                  text-gray-400
                  transition
                  duration-300
                  hover:border-blue-500
                  hover:bg-gray-500
                  hover:text-white
                "
              >
                    <img src="/facebook.png" alt="" />
              </a>
                
              <a
                href="#"
                aria-label="GitHub"
                className="
                  flex
                  size-8
                  items-center
                  justify-center
                  rounded-4xl
                  text-gray-400
                  transition
                  duration-300
                  hover:border-blue-500
                  hover:bg-gray-500
                  hover:text-white
                "
              >
               <img src="/whatsapp.png" alt="" />
              </a>

            </div>
          </div>

          {/* NAVEGACIÓN */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Navegación
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="
                    text-sm
                    text-gray-400
                    transition
                    duration-200
                    hover:text-blue-400
                  "
                >
                  {item.name}
                </NavLink>
              ))}

            </div>
          </div>

          {/* SERVICIOS */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Servicios
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {services.map((service) => (
                <span
                  key={service}
                  className="text-sm text-gray-400"
                >
                  {service}
                </span>
              ))}

            </div>
          </div>

          {/* CTA */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              ¿Tenés un proyecto?
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Contanos qué necesitás y vemos juntos la mejor forma de hacerlo.
            </p>

            <motion.div
              whileHover={{ x: 3 }}
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
                  text-orange-500
                  transition
                  hover:text-blue-300
                "
              >
                Empezar proyecto

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </motion.div>
          </div>

        </div>

        {/* LINEA */}

        <div className="my-12 h-px bg-gray-800" />

        {/* FOOTER BOTTOM */}

        <div
          className="
            flex
            flex-col
            gap-4
            text-sm
            text-gray-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} HZ Soft. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition hover:text-gray-300"
            >
              Privacidad
            </a>

            <a
              href="#"
              className="transition hover:text-gray-300"
            >
              Términos
            </a>

          </div>
        </div>

      </div>

    </footer>
  );
}