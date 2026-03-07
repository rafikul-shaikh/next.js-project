import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology";
import Impact from "@/components/Impact";
import ProductScroll from "@/components/ProductScroll";
import ContactSection from "@/components/ContactSection";
import Specifications from "@/components/Specifications";


export default function Home() {
   return (
    <>
      <Hero />
      <ProductScroll />
      <Specifications/>
      <Technology/>
      <Impact/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
