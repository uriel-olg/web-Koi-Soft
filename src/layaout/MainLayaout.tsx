import { Outlet } from "react-router";
import { Navbar } from "../components/NavBar";
import Footer from "../components/Footer";

export const MainLayaout = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* BACKGROUND GLOBAL */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <img
          src="/fondo.webp"
          alt=""
          className="h-full w-full  object-cover object-left md:object-center"
        />

        {/* Oscurece un poco para mantener legibilidad */}
        <div className="absolute inset-0 bg-[#080F1E]/50" />
      </div>

      {/* TODA LA WEB ENCIMA */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}