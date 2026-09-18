import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import Roots from "./section/Roots";
import WhatSetsUsApart from "./section/WhatSetsUsApart";
import Oceans from "./section/Oceans";
import OurImpact from "./section/OurImpact";
import Partners from "./section/Partners";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import Cargoes from "./section/Cargoes";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Roots />
      <WhatSetsUsApart />
      <Oceans />
      <OurImpact />
      <Partners />
      <Cargoes />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
