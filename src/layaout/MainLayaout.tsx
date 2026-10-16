import { Outlet } from "react-router";
import { Navbar } from "../components/NavBar";
import Footer from "../components/Footer";

export const MainLayaout = () => {
  return (
    <div
      className="
        relative
        isolate
        min-h-screen
        bg-[#080F1E]
        text-white
      "
    >
      {/* =========================================
          BACKGROUND GLOBAL
      ========================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-0
          h-[100lvh]
          w-screen
          overflow-hidden
          bg-[#080F1E]
        "
      >
        <img
          src="/fondo.webp"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="
            block
            h-full
            w-full
            object-cover
            object-[50%_50%]
          "
        />

        {/* Overlay para mejorar contraste */}
        <div
          className="
            absolute
            inset-0
            bg-[#080F1E]/35
          "
        />

        {/* Oscurece un poco el centro */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,15,30,.10)_45%,rgba(8,15,30,.38)_100%)]
          "
        />
      </div>

      {/* =========================================
          CONTENIDO DE LA WEB
      ========================================= */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};