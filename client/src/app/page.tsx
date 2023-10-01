"use client";

import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import ProjectSection from "@/components/projectSection";
import SkillsSection from "@/components/skillsSection";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    var timeline = gsap.timeline();

    timeline.to(mainRef.current, {
      y: "100vh",
      scale: 0.6,
      duration: 0,
      border: "5px solid black",
      borderRadius: "15px",
    });
    timeline.to(mainRef.current, {
      y: "30vh",
      duration: 1,
      delay: 1,
      border: "5px solid black",
    });
    timeline.to(mainRef.current, {
      y: "0vh",
      rotate: 360,
      scale: 1,
      duration: 0.7,
      border: "5px solid black",
    });

    timeline.to(mainRef.current, {
      border: "none",
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <main className="  p-[20px]  !pt-0 sm:p-[30px]" ref={mainRef}>
      <div>
        <Navbar />
        <HeroSection />

        <div className="mt-10 h-[2px] w-full bg-primary" />
        <SkillsSection />

        <div className=" h-[2px] w-full bg-primary" />
        <ProjectSection />

        <div className="mt-10 h-[2px] w-full bg-primary" />
        <div className="mt-[2px] h-[2px] w-full bg-primary" />

        <Footer />
      </div>
    </main>
  );
}
