import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diensten from "@/components/Diensten";
import Portfolio from "@/components/Portfolio";
import Instagram from "@/components/Instagram";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diensten />
        <Portfolio />
        <Instagram />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
