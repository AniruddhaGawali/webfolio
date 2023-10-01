"use client";

import React, { useEffect, useState } from "react";

// 👇 import local font
import localFont from "next/font/local";
import { getFullDate } from "@/utils/getDates";
import Link from "next/link";

//👇 Configure our local font object
const Chomsky = localFont({ src: "../../public/font/Chomsky.ttf" });

type Props = {};

type Weather = {
  name: string;
  temp: number;
  wind: number;
  desc: string;
};

const Navbar = (props: Props) => {
  const [weather, setWeather] = useState({
    name: "Localhost City",
    temp: 293.15,
    wind: 2,
    desc: "Sunny Day",
  } as Weather);
  const key = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const weather = {
              name: data.name,
              temp: data.main.temp,
              wind: data.wind.speed,
              desc: data.weather[0].description,
            };
            setWeather(weather);
          });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <header className="relative z-20 bg-white pt-[20px]">
        <section className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <h1
            className={`flex cursor-pointer text-4xl font-bold sm:hidden ${Chomsky.className}`}
          >
            The Dev Daily Bugle
          </h1>

          <p className="w-fit border border-primary px-5 py-2 text-center text-sm font-medium sm:w-[180px] lg:text-lg xl:w-[200px] xl:text-xl">
            All the news that fit to print
          </p>

          <h1
            className={`hidden cursor-pointer font-bold sm:flex sm:text-2xl md:text-[2.5rem] lg:text-6xl xl:text-7xl ${Chomsky.className}`}
          >
            The Dev Daily Bugle
          </h1>

          <p className="w-fit border-primary px-5 py-0 text-center text-sm sm:w-[180px] sm:border sm:py-2 lg:text-lg xl:w-[220px] xl:text-xl">
            {weather.name ? (
              <>
                <span className="font-medium capitalize">{weather.desc},</span>
                <br className="hidden sm:flex" />{" "}
                <span className="whitespace-nowrap font-light">
                  Temperature: {Math.round(weather.temp - 273.15)}°C
                </span>
                <br className="hidden sm:flex" />{" "}
                <span className="font-light">
                  Wind: {Math.round(weather.wind)} m/s
                </span>
              </>
            ) : (
              "Loading..."
            )}
          </p>
        </section>
        <section className="mt-5 ">
          <div className="h-[2px] w-full bg-primary" />
          <div className="mt-[2px] h-[2px] w-full bg-primary" />

          <section className="mt-2 flex items-center justify-between text-sm md:px-24 md:text-lg">
            <a
              className="cursor-pointer text-center  font-bold underline"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </a>
            <h4 className="text-center font-bold ">
              {weather.name}, {getFullDate(new Date())}
            </h4>
            <span className="ext-center hidden sm:flex">One Cent</span>
          </section>

          <div className="mt-2 h-[2px] w-full bg-primary" />
          <div className="mt-[2px] h-[2px] w-full bg-primary" />
        </section>
      </header>
      <nav
        className={`fixed left-0 top-0 z-10 ${
          isMenuOpen ? "h-full" : "h-0"
        } w-full bg-white `}
      >
        <div
          className={`flex ${
            isMenuOpen ? "h-[100vh]" : "h-0"
          } w-full flex-col items-center justify-center overflow-hidden bg-white transition-all duration-500`}
        >
          <ul
            className={`flex flex-col items-center justify-center gap-10 text-5xl font-bold`}
          >
            <li className={`cursor-pointer hover:underline `}>
              <Link
                href={"/"}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className={`cursor-pointer hover:underline`}>
              <Link
                href={"/blogs"}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
