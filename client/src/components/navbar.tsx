'use client';

import React, { useEffect, useState } from 'react';

// 👇 import local font
import localFont from 'next/font/local';

//👇 Configure our local font object
const Chomsky = localFont({ src: '../../public/font/Chomsky.ttf' });

type Props = {};

type Weather = {
  name: string;
  temp: number;
  wind: number;
  desc: string;
};

function getDate() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const date = new Date();

  const day = days[date.getDay()];
  const date_ = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}, ${month} ${date_}, ${year}`;
}

const Navbar = (props: Props) => {
  const [weather, setWeather] = useState({
    name: 'Localhost City',
    temp: 293.15,
    wind: 2,
    desc: 'Sunny Day',
  } as Weather);
  const key = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

        console.log(api);
        // fetch(api)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data);
        //     const weather = {
        //       name: data.name,
        //       temp: data.main.temp,
        //       wind: data.wind.speed,
        //       desc: data.weather[0].description,
        //     };
        //     setWeather(weather);
        //   });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <header>
      <section className="flex sm:flex-row flex-col gap-3 justify-between items-center">
        <h1
          className={`text-4xl sm:hidden flex font-bold cursor-pointer ${Chomsky.className}`}>
          The Dev Daily Bugle
        </h1>

        <p className="xl:w-[200px] sm:w-[180px] w-fit px-5 py-2 xl:text-xl lg:text-lg text-sm border-primary font-medium text-center border">
          All the news that fit to print
        </p>

        <h1
          className={`xl:text-7xl lg:text-6xl md:text-[2.5rem] sm:text-2xl sm:flex hidden font-bold cursor-pointer ${Chomsky.className}`}>
          The Dev Daily Bugle
        </h1>

        <p className="xl:w-[220px] sm:w-[180px] w-fit xl:text-xl lg:text-lg text-sm text-center border-primary px-5 sm:py-2 py-0 sm:border">
          {weather.name ? (
            <>
              <span className="font-medium capitalize">{weather.desc},</span>
              <br className="hidden sm:flex" />{' '}
              <span className="font-light whitespace-nowrap">
                Temperature: {Math.round(weather.temp - 273.15)}°C
              </span>
              <br className="hidden sm:flex" />{' '}
              <span className="font-light">
                Wind: {Math.round(weather.wind)} m/s
              </span>
            </>
          ) : (
            'Loading...'
          )}
        </p>
      </section>
      <section className="mt-5 ">
        <div className="w-full h-[2px] bg-primary" />
        <div className="w-full h-[2px] bg-primary mt-[2px]" />

        <section className="flex justify-between items-center md:px-24 mt-2 md:text-lg text-sm">
          <a className="font-bold text-center  underline cursor-pointer">
            Menu
          </a>
          <h4 className="font-bold text-center ">
            {weather.name}, {getDate()}
          </h4>
          <span className="ext-center sm:flex hidden">One Cent</span>
        </section>

        <div className="w-full h-[2px] bg-primary mt-2" />
        <div className="w-full h-[2px] bg-primary mt-[2px]" />
      </section>
    </header>
  );
};

export default Navbar;
