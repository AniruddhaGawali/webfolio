"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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

type News = {
  _id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  url: string;
  publishedAt: string;
};

const ProjectSection = (props: Props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const randomNews =
    news.length > 0
      ? [
          news[Math.floor(Math.random() * news.length)],
          news[Math.floor(Math.random() * news.length)],
        ]
      : null;

  const apiLink = process.env.NEXT_PUBLIC_API_LINK;

  useEffect(() => {
    fetch(apiLink + "/api/project")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });

    fetch(apiLink + "/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
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
            <div className="group flex flex-col" key={project.id}>
              <a href={project.url} target="_blank" className="cursor-pointer">
                <div className="flex flex-col p-5 py-2 pl-0">
                  <h3 className="text-lg font-bold group-hover:underline">
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
              <hr />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full border-t-2 border-primary pt-10 sm:mt-0 sm:w-1/3  sm:border-0 sm:pt-0 ">
        <h2 className="mb-5 block text-3xl font-bold uppercase sm:block sm:text-3xl md:text-4xl lg:text-5xl ">
          Top HeadLines
        </h2>

        <section className=" flex  flex-wrap gap-8">
          {randomNews &&
            randomNews.map((news) => (
              <a href={news.url} className="group">
                <div className="w-full">
                  <h3 className="text-lg font-bold leading-6 text-gray-900 group-hover:underline">
                    {news.title}
                  </h3>
                  <div className="mt-3 flex gap-3">
                    <img src={news.image} className="h-1/3 w-1/3 grayscale" />
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {news.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}

          <div className="group w-full">
            <h3 className="text-lg font-bold leading-6 text-gray-900 group-hover:underline">
              Police seek Spiderman: citywide search for a bug
            </h3>
            <div className="mt-3 flex gap-3">
              <img
                src="/images/spiderman.jpeg"
                className="h-1/3 w-1/3 grayscale"
              />
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                In a citywide hunt reminiscent, police are on the lookout for
                the elusive figure known as Spider-Man. J. Jonah Jameson, the
                city's renowned newsman, has raised the alarm, leaving citizens
                intrigued by the unfolding drama. As the search intensifies,
                questions arise about the true identity of this web-slinging
                vigilante.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProjectSection;
