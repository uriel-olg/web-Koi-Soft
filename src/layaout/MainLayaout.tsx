import { Navbar } from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

export const MainLayaout = () => {
  return (
    <>
      <div className="bg-[#0B1730]">
        <Navbar></Navbar>

        <main >
          <Outlet></Outlet>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
};
