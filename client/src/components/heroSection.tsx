import { getDate, getShortMonth, getYear } from "@/utils/getDates";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

import { HiDocumentText } from "react-icons/hi";

type Props = {};

const HeroSection = (props: Props) => {
  var d = new Date();
  d.setDate(d.getDate() - 1);

  return (
    <>
      <div className="mt-10 items-start justify-center gap-5 sm:flex sm:flex-row lg:items-center">
        <h2 className="mb-2 block text-3xl font-bold uppercase sm:hidden">
          Aniruddha Gawali Takes the Tech World by Storm: A Rising Star in
          Computer World
        </h2>
        <span className="block text-base capitalize italic text-gray-600 sm:hidden">
          - J. Jonah Jameson,{" "}
          {getDate(d) + " " + getShortMonth(d) + " " + getYear(d)}
        </span>

        <section className="flex h-full flex-col items-center justify-center border text-center sm:w-1/2 md:w-1/3">
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

        <section className="sm:w-1/2  md:w-2/3">
          <h2 className="mb-2 hidden font-bold uppercase sm:block sm:text-3xl md:text-4xl lg:text-5xl">
            Aniruddha Gawali Takes the Tech World by Storm: A Rising Star in
            Computer World
          </h2>
          <span className="hidden text-base capitalize italic  sm:block ">
            - J. Jonah Jameson,{" "}
            {getDate(d) + " " + getShortMonth(d) + " " + getYear(d)}
          </span>

          <article className="block sm:hidden">
            <br />
            <p>
              Aniruddha Gawali, an exceptional undergraduate, shares his
              remarkable path in the world of computer science. His fascination
              with computers ignited during his childhood, leading him to
              explore ethical hacking during high school. By 12th grade, he had
              mastered an impressive range of programming languages, including
              C/C++, Python, HTML, CSS, and JavaScript, along with various
              frameworks like Angular, ReactJS, and TKinter.
            </p>
            <br />
            <p>
              Gawali's dedication to his craft shines through his Python and web
              development projects, showcasing his profound understanding of the
              digital realm. Currently, he's set on a new challenge: mobile app
              development using Flutter and React Native. Beyond academics, he
              finds joy in chess and football, highlighting the importance of a
              balanced life. To connect or collaborate, reach out through his
              various communication channels.
            </p>
          </article>

          <article className="mt-5 hidden leading-relaxed  sm:block lg:text-lg">
            <div className="gap-2 md:flex">
              <p>
                By the time he reached 12th grade, Gawali had already embarked
                on a thrilling adventure into the realm of programming. Armed
                with determination and an insatiable curiosity, he honed his
                skills in an impressive array of programming languages,
                including C/C++, Python, HTML, CSS, and JavaScript. His journey
                didn't stop there; he explored various frameworks, such as
                Angular, ReactJS, and TKinter, solidifying his status as a
                versatile developer.
              </p>
              <br />
              <p>
                In an exclusive interview with Aniruddha Gawali, the promising
                undergraduate student reveals his extraordinary journey into the
                world of computer science. From a young age, Gawali's
                fascination with computers ignited a passion that would shape
                his future. It was during his high school years that he first
                dipped his toes into the intriguing world of ethical hacking, a
                pivotal moment that set him on a path of discovery.
              </p>
            </div>
            <br />
            <p className="hidden text-base leading-relaxed md:block lg:hidden lg:text-lg">
              Aniruddha Gawali's dedication to his craft has not gone unnoticed.
              He has undertaken exciting projects in Python and web development,
              demonstrating a deep understanding of the digital landscape.
              Currently, he's set his sights on expanding his horizons further
              by venturing into mobile app development using Flutter and React
              Native, marking a new chapter in his impressive journey. Beyond
              his academic pursuits, Gawali finds solace in the worlds of chess
              and football, demonstrating that even in the fast-paced realm of
              technology, a well-rounded passion for life remains vital. If
              you're interested in collaboration or simply want to connect with
              this rising star, you'll find him accessible through various
              communication channels.
            </p>
            <p className="hidden text-base leading-relaxed lg:block lg:text-lg">
              Aniruddha Gawali's dedication to his craft has not gone unnoticed.
              His passion for software development and coding shines through in
              his work, where he has undertaken exciting projects in Python and
              web development. His ability to write clean, efficient code and
              solve complex problems demonstrates a deep understanding of the
              digital landscape.
              <br />
              Currently, Aniruddha is not resting on his laurels but is instead
              setting his sights on expanding his horizons further. He's
              embarking on a new journey into mobile app development using
              technologies like Flutter and React Native. This marks a new
              chapter in his already impressive career, showcasing his
              adaptability and willingness to stay at the forefront of
              technology trends.
              <br />
              <br />
              Beyond his academic pursuits and coding adventures, Gawali finds
              solace in the worlds of chess and football. This demonstrates that
              even in the fast-paced realm of technology, a well-rounded passion
              for life remains vital. These interests not only provide balance
              but also stimulate creativity and strategic thinking, which are
              valuable assets in the world of software development.
              <br />
              If you're interested in collaborating with or simply want to
              connect with this rising star in the software development world,
              you'll find Aniruddha Gawali accessible through various
              communication channels. His dedication to his craft, combined with
              his openness to new challenges and diverse interests, make him an
              exciting professional to engage with in the ever-evolving field of
              technology.
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

      <p className="hidden text-base sm:block  md:hidden">
        Aniruddha Gawali's dedication to his craft has not gone unnoticed. He
        has undertaken exciting projects in Python and web development,
        demonstrating a deep understanding of the digital landscape. Currently,
        he's set his sights on expanding his horizons further by venturing into
        mobile app development using Flutter and React Native, marking a new
        chapter in his impressive journey. Beyond his academic pursuits, Gawali
        finds solace in the worlds of chess and football, demonstrating that
        even in the fast-paced realm of technology, a well-rounded passion for
        life remains vital. If you're interested in collaboration or simply want
        to connect with this rising star, you'll find him accessible through
        various communication channels.
      </p>
    </>
  );
};

export default HeroSection;
