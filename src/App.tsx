import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { MainLayaout } from "./layaout/MainLayaout";
import Home from "./pages/Home";
import RouteEffects from "./components/RouteEffects";
import { ButtonLink } from "./components/ui";
import "./App.css";
const Services = lazy(() => import("./pages/Servicies"));
const Projects = lazy(() => import("./pages/Proyectos"));
const About = lazy(() => import("./pages/Nosotros"));
const Contact = lazy(() => import("./pages/Contact"));
export default function App() {
  return (
    <Suspense
      fallback={
        <div className="route-loading container" role="status">
          Cargando…
        </div>
      }
    >
      <RouteEffects />
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
              <section className="container not-found">
                <p className="eyebrow">ERROR 404</p>
                <h1>
                  Por acá no era.
                  <br />
                  <span className="accent">Volvamos al inicio.</span>
                </h1>
                <p>La página que buscás no existe o cambió de lugar.</p>
                <ButtonLink to="/">Volver al inicio</ButtonLink>
              </section>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
