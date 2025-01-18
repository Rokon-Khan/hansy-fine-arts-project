import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";

const MainLayout = () => {
  return (
    <div>
      <TopNavbar></TopNavbar>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Hero */}
      <div className="min-h-[calc(100vh-300px)]">
        {/* Dynamic Contents */}
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
