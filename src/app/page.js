import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology";
import ProductScroll from "@/components/ProductScroll";
import ContactSection from "@/components/ContactSection";
import Specifications from "@/components/Specifications";
import News from "@/components/News";
import About from "@/components/About";
import OurBarrier from "@/components/OurBarrier";
import Impact from "@/components/Impact";
// import { useState } from "react";


export default function Home() {

  // const [contactOpen, setContactOpen] = useState(false);
   return (
    <>
      <Navbar />
      <Hero />
      <ProductScroll />
      <Specifications/>
      <Technology/>
      <Impact/>
      <OurBarrier/>
      <News/>
      <About/>
      <ContactSection />
      <Footer/>
    </>
  );
}
