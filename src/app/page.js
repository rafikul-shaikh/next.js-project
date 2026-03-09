import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology";
import ProductScroll from "@/components/ProductScroll";
import ContactSection from "@/components/ContactSection";
import Specifications from "@/components/Specifications";
import OrbitImpact from "@/components/OrbitImpact";
import OurNews from "@/components/OurNews";
import About from "@/components/About";


export default function Home() {
   return (
    <>
      <Hero />
      <ProductScroll />
      <Specifications/>
      <Technology/>
     <OrbitImpact/>
     <OurNews/>
     <About/>
     <ContactSection/>
      <Footer/>
    </>
  );
}
