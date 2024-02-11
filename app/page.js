import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Announcement from "@/components/ui/announcement";
import ThemeProvider from "@/context/ThemeProvider";


export default function Home() {
  return (
    <>
      <Announcement />  
    <section className="md:px-20 w-full">
      <ThemeProvider>
        <Navbar />
        <Hero />
        <Skills />
        <Projects/>
        <Services />
        <Footer />
      </ThemeProvider>
    </section>
    </>
  );
}
