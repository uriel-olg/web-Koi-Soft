import { Outlet } from "react-router";
import { Navbar } from "../components/NavBar";
import Footer from "../components/Footer";
export const MainLayaout = () => (
  <>
    <a className="skip-link" href="#contenido">
      Saltar al contenido
    </a>
    <Navbar />
    <main id="contenido" tabIndex={-1}>
      <Outlet />
    </main>
    <Footer />
  </>
);
