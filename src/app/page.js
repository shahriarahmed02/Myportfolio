import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/About";
import SkillsSection from "@/components/Skills";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
// আগে তৈরি করা প্রজেক্ট সেকশন

export default function Home() {
  return (
    <main className="min-h-screen bg-[#021526]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}