import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Home from "./pages/Home";
import QuickRecharge from "./components/QuickRecharge";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
import FaqPage from "./pages/FaqPage";
import Footer from "./components/Footer";
import Services from "./components/Services";
import PricingTable from "./components/PricingTable";
import Cta from "./components/Cta";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <NavBar sideBar={sideBar} setSideBar={setSideBar} />
      {sideBar && <SideBar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="pricing" element={<PricingTable />} />
        <Route path="cta" element={<Cta />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
