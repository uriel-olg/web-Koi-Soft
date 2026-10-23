import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router";
import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import { MainLayaout } from "./layaout/MainLayaout";
import Home from "./pages/Home";
import "./App.css";

const Services = lazy(() => import("./pages/Servicies"));
const Projects = lazy(() => import("./pages/Proyectos"));
const About = lazy(() => import("./pages/Nosotros"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Suspense
          fallback={
            <div className="route-loading" role="status">
              Cargando KoiBite…
            </div>
          }
        >
          <Routes>
            <Route element={<MainLayaout />}>
              <Route index element={<Home />} />
              <Route path="servicios" element={<Services />} />
              <Route path="proyectos" element={<Projects />} />
              <Route path="nosotros" element={<About />} />
              <Route path="contacto" element={<Contact />} />
              <Route
                path="*"
                element={
                  <section className="section container not-found">
                    <h1>Por acá no era.</h1>
                    <p>No encontramos esta página. Podemos volver a empezar.</p>
                    <Link className="button" to="/">
                      Volver al inicio
                    </Link>
                  </section>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </MotionConfig>
    </LazyMotion>
  );
}
