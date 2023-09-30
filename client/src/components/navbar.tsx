'use client';

import React, { useEffect, useState } from 'react';

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

  console.log(date);
  const day = days[date.getDay()];
  const date_ = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}, ${month} ${date_}, ${year}`;
}

const Navbar = (props: Props) => {
  const [weather, setWeather] = useState({} as Weather);
  const key = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            const weather = {
              name: data.name,
              temp: data.main.temp,
              wind: data.wind.speed,
              desc: data.weather[0].description,
            };
            console.log(weather);
            setWeather(weather);
          });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <header>
      <section className="flex justify-between items-center">
        <p className="w-[200px] px-5 py-2 text-xl border-primary font-medium text-center border">
          All the news that fit to print
        </p>
        <h1 className="text-7xl font-bold cursor-pointer font-chomsky">
          The Dev Daily Bugle
        </h1>
        <p className="w-[200px] text-lg text-center border-primary px-5 py-2 border">
          {weather.name ? (
            <>
              <span className="font-medium capitalize">{weather.desc},</span>
              <br />
              <span className="font-light">
                Temperature: {Math.round(weather.temp - 273.15)}°C
              </span>
              <br />
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

        <section className="flex justify-between items-center px-24 mt-2">
          <a className="text-lg font-bold text-center  underline cursor-pointer">
            Menu
          </a>
          <h4 className="text-lg font-bold text-center ">
            {weather.name}, {getDate()}
          </h4>
          <span className="text-lg text-center">One Cent</span>
        </section>

        <div className="w-full h-[2px] bg-primary mt-2" />
        <div className="w-full h-[2px] bg-primary mt-[2px]" />
      </section>
    </header>
  );
};

export default Navbar;
