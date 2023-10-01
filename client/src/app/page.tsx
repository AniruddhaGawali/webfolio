import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="p-[20px] pt-[10px] sm:p-[30px]">
      <Navbar />
      <HeroSection />
    </main>
  );
}
