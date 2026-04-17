import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy"; // Import ini
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy /> {/* Muncul setelah Hero */}
      <div id="features"><Features /></div>
      <div id="pricing"><Pricing /></div>
      <Footer />
    </main>
  );
}