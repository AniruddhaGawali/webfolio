import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import ProjectSection from "@/components/projectSection";
import SkillsSection from "@/components/skillsSection";

export default function Home() {
  return (
    <main className="p-[20px] pt-[10px] sm:p-[30px]">
      <Navbar />
      <HeroSection />
      <div className="mt-10 h-[2px] w-full bg-primary" />
      <SkillsSection />
      <div className=" h-[2px] w-full bg-primary" />
      <ProjectSection />
    </main>
  );
}
