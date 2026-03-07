import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Specification from "@/components/Specification";
import Technology from "@/components/Technology";
import Impact from "@/components/Impact";
import ProductScroll from "@/components/ProductScroll";
import ContactSection from "@/components/ContactSection";

export default function Home() {
   return (
    <>
      <Hero />
      <ProductScroll />
      <Specification/>
      <Technology/>
      <Impact/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
