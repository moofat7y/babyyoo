import NavBar from "./components/NavBar";
import Chart from "./sections/Chart";
import Frequently from "./sections/Frequently";
import Hero from "./sections/Hero";
import HowToBuy from "./sections/HowToBuy";
import RoadMap from "./sections/RoadMap";
import TaxFee from "./sections/TaxFee";
import Tokenomics from "./sections/Tokenomics";
import Footer from "./sections/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Tokenomics />
      <HowToBuy />
      <RoadMap />
      <TaxFee />
      <Chart />
      <Frequently />
      <Footer />
    </main>
  );
}

export default App;
