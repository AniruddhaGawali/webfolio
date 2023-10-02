"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

type Props = {};

type Skill = {
  _id: string;
  skill: string;
  image_url: string;
  stars: number;
};

const SkillsSection = (props: Props) => {
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const apiLink = process.env.NEXT_PUBLIC_API_LINK;

  useEffect(() => {
    fetch(apiLink + "/api/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      });
  }, []);

  return (
    <>
      <section>
        <Marquee>
          <div className="m-5">
            <p className="text-3xl font-bold text-primary">Skills</p>
          </div>

          {skills !== null &&
            skills.map((item, index) => (
              <div
                key={index}
                className="m-5 flex  items-center gap-2 grayscale"
              >
                <Image
                  src={item.image_url}
                  alt={item.skill}
                  width={40}
                  height={40}
                />
                <p className="text-xl font-bold text-primary">{item.skill}</p>
              </div>
            ))}
        </Marquee>
      </section>
    </>
  );
};

export default SkillsSection;
