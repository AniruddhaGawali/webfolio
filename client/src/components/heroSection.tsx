import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { HeroSectionData } from "@/config/heroSection";

import { HiDocumentText } from "react-icons/hi";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <div className="mt-10 items-start justify-start gap-5 sm:flex sm:flex-row ">
        <h2 className="mb-2 block text-3xl font-bold uppercase sm:hidden">
          {HeroSectionData.title}
        </h2>
        <span className="block text-base capitalize italic text-gray-600 sm:hidden">
          - {HeroSectionData.writer}, {HeroSectionData.date}
        </span>

        <section className="flex h-full flex-col items-center justify-center  text-center sm:w-1/2 md:w-1/3">
          <div className=" relative mt-10 aspect-video w-full bg-top grayscale sm:mt-0 sm:aspect-square lg:h-[400px] lg:w-[400px]">
            <Image
              src={"/images/hero_mobile.jpeg"}
              alt="Aniruddha Gawali"
              layout="fill"
              objectFit="cover"
              className=" block bg-top  sm:hidden"
            />
            <Image
              src={"/images/hero.jpg"}
              alt="Aniruddha Gawali"
              layout="fill"
              objectFit="cover"
              className="hidden bg-top  sm:block"
            />
          </div>
          <h3 className="mt-5 text-2xl font-bold uppercase">
            Aniruddha Gawali
          </h3>
          <h4 className="text-sm capitalize italic text-gray-600">
            Student | Web Developer
          </h4>
          <p className="mt-5 text-left text-base font-semibold capitalize italic">
            "In tech, curiosity is the compass that guides us to the future.
            Every line of code I write is an opportunity to make a difference."
          </p>
          <div className="hidden w-full sm:block">
            <Button
              variant="default"
              className="mt-5 w-full max-w-[400px] font-bold uppercase"
            >
              <span className="mr-2 text-2xl">
                <HiDocumentText />{" "}
              </span>
              <span> Download Resume</span>
            </Button>
            <p className="mt-5 text-center text-sm capitalize italic">
              LinkedIn | Twitter | Instagram | Mail{" "}
            </p>
          </div>
        </section>

        <section className="sm:w-1/2  md:w-2/3">
          <h2 className="mb-2 hidden font-bold uppercase sm:block sm:text-3xl md:text-4xl lg:text-5xl">
            {HeroSectionData.title}
          </h2>
          <span className="hidden text-base capitalize italic  sm:block ">
            - {HeroSectionData.writer}, {HeroSectionData.date}
          </span>

          <article className="block sm:hidden">
            <br />
            <p>{HeroSectionData.articleMobile[0]}</p>
            <br />
            <p>{HeroSectionData.articleMobile[1]}</p>
          </article>

          <article className="mt-5 hidden leading-relaxed  sm:block lg:text-lg">
            <div className="gap-2 md:flex">
              <p>{HeroSectionData.article[0]}</p>
              <br />
              <p>{HeroSectionData.article[1]}</p>
            </div>
            <br />

            <p className="hidden text-base leading-relaxed lg:block lg:text-lg">
              {HeroSectionData.article[2]}
              <br />
              {HeroSectionData.article[3]}
              <br />
              <br />
              {HeroSectionData.article[4]}
              <br />
              {HeroSectionData.article[5]}
            </p>
          </article>
          <div className="block sm:hidden">
            <Button
              variant="default"
              className="mt-5 w-full font-bold uppercase"
            >
              <span className="mr-2 text-2xl">
                <HiDocumentText />{" "}
              </span>
              <span> Download Resume</span>
            </Button>
            <p className="mt-5 text-center text-sm capitalize italic">
              LinkedIn | Twitter | Instagram | Mail{" "}
            </p>
          </div>
        </section>
      </div>

      <p className="hidden text-base md:block  lg:hidden">
        {HeroSectionData.article[6]}
      </p>
    </>
  );
};

export default HeroSection;
