"use client";

import React, { useEffect, useState } from "react";

type Props = {};

type Project = {
  description: string;
  forks: number;
  id: number;
  language: string;
  name: string;
  stars: number;
  topics: string[];
  url: string;
  watchers: number;
};

const ProjectSection = (props: Props) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const apiLink = process.env.NEXT_PUBLIC_API_LINK;

  useEffect(() => {
    fetch(apiLink + "/api/project")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="mt-10 block items-start justify-start gap-5 sm:flex">
      <section className="w-full border-primary pr-5 sm:w-2/3 sm:border-r-2">
        <h2 className="mb-10 block text-3xl font-bold uppercase sm:block sm:text-3xl md:text-4xl lg:text-5xl ">
          New Showcase Projects Gallery Unveiled on{" "}
          <a
            href="https://github.com/AniruddhaGawali"
            target="_blank"
            className="cursor-pointer underline"
          >
            GitHub!
          </a>
        </h2>

        <div className="mt-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 ">
          {projects.map((project) => (
            <div className="flex flex-col">
              <a href={project.url} target="_blank" className="cursor-pointer">
                <div className="flex flex-col p-5 py-2 pl-0">
                  <h3 className="text-lg font-bold ">
                    {project.name.includes("-")
                      ? project.name.split("-").join(" ")
                      : project.name.split("_").join(" ")}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm italic ">
                    - {project.language}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full border-t-2 border-primary pt-10 sm:mt-0 sm:w-1/3  sm:border-0 sm:pt-0 ">
        <h2 className="mb-5 block text-3xl font-bold uppercase sm:block sm:text-3xl md:text-4xl lg:text-5xl ">
          Top HeadLines
        </h2>
        <section className="flex flex-wrap gap-5">
          <div className="w-full">
            <h3 className="text-lg font-bold leading-6 text-gray-900">
              Hackthober is started
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              placeat earum provident iusto, dolorum eaque repellat ab in omnis
              vitae, quibusdam numquam ipsum expedita impedit tempora, suscipit
              praesentium hic minus?
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-lg font-bold leading-6 text-gray-900">
              Hackthober is started
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              placeat earum provident iusto, dolorum eaque repellat ab in omnis
              vitae, quibusdam numquam ipsum expedita impedit tempora, suscipit
              praesentium hic minus?
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-lg font-bold leading-6 text-gray-900">
              Hackthober is started
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              placeat earum provident iusto, dolorum eaque repellat ab in omnis
              vitae, quibusdam numquam ipsum expedita impedit tempora, suscipit
              praesentium hic minus?
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProjectSection;
