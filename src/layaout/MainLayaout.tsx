import { Navbar } from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

export const MainLayaout = () => {
  return (
    <>
      <div className="min-h-screen bg-[#080F1E]">
        <Navbar></Navbar>

        <main className="flex-1 ">


          <Outlet></Outlet>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
};
