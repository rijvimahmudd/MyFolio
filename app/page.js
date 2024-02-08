import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import ThemeProvider from "@/context/ThemeProvider";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <ThemeProvider>
          <Navbar />
          <Hero />
          <Footer />
      </ThemeProvider>
    </section>
  );
}
