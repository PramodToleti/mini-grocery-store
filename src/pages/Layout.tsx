import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ minHeight: "75vh", padding: "10px" }}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
