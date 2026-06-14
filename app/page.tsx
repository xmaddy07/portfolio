import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <main className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Workflow />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
