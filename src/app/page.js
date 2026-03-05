import Image from "next/image";
import Hero from "@/components/Hero";
import ProductCart from "@/components/ProductCart";
import Footer from "@/components/Footer";
import Specifications from "@/components/Specification";

export default function Home() {
   return (
    <>
      <Hero />
      <ProductCart/>
      <Specifications/>
      <Footer/>
    </>
  );
}
