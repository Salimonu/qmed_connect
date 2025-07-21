import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import QuickRecharge from "./components/QuickRecharge";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";

function App() {
  const [wallet, setWallet] = useState(100000);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Home>
        <NavBar sideBar={sideBar} setSideBar={setSideBar} />
        <Hero />
        <QuickRecharge wallet={wallet} setWallet={setWallet} />
      </Home>
      {sideBar && <SideBar />}
    </div>
  );
}

export default App;
