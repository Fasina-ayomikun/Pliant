import CardBenefits from "./components/CardBenefits";
import Contact from "./components/Contact";
import Customers from "./components/Customers";
import DigitalCard from "./components/DigitalCard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Pricing from "./components/Pricing";
import Transactions from "./components/Transactions";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Customers />
      <Works />
      <Contact />
      <DigitalCard />
      <Transactions />
      <Partner />
      <CardBenefits />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
