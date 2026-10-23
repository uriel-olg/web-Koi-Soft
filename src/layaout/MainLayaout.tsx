import { Outlet } from "react-router";
import { Navbar } from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToLocation from "../components/ScrollToLocation";

export function MainLayaout() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <ScrollToLocation />
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
