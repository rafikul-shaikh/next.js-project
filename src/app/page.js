
"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology";
import ProductMarquee from "@/components/ProductMarquee";
import ContactSection from "@/components/ContactSection";
import Specifications from "@/components/Specifications";
import News from "@/components/News";
import About from "@/components/About";
import OurBarrier from "@/components/OurBarrier";
const Impact = dynamic(() => import("@/components/Impact"), {
  ssr: false,
});
import { useState } from "react";
import ContactDrawer from "@/components/ContactDrawer";


export default function Home() {

  const [isContactOpen, setIsContactOpen] = useState(false);
   return (
    <>
      <Navbar openContact={() => setIsContactOpen(true)} />
      <Hero />
      <ProductMarquee />
      <Specifications/>
      <Technology/>
      <Impact/>
      <OurBarrier/>
      <News/>
      <About/>
      <ContactSection openContact={() => setIsContactOpen(true)} />
     
      <ContactDrawer
        isOpen={isContactOpen}
        closeContact={() => setIsContactOpen(false)}
      />
      <Footer/>
    </>
  );
}
