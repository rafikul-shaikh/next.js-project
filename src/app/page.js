import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology";
import ProductScroll from "@/components/ProductScroll";
import ContactSection from "@/components/ContactSection";
import Specifications from "@/components/Specifications";
import OurNews from "@/components/OurNews";
import About from "@/components/About";
import OurBarrier from "@/components/OurBarrier";
import Impact from "@/components/Impact";


export default function Home() {
   return (
    <>
      <Hero />
      <ProductScroll />
      <Specifications/>
      <Technology/>
     <Impact/>
     <OurBarrier/>
     <OurNews/>
     <About/>
     <ContactSection/>
      <Footer/>
    </>
  );
}
