import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import QuickRecharge from "../components/QuickRecharge";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";

function Home({ children }) {
  return (
    <div>
      {children}
      <HowItWorks />
      <Services />
      <PricingTable />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;
