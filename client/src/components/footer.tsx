import React from "react";

// 👇 import local font
import localFont from "next/font/local";

//👇 Configure our local font object
const Chomsky = localFont({ src: "../../public/font/Chomsky.ttf" });

const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
      <div className={`${Chomsky.className} text-xl font-bold`}>
        The Dev Daily Bulge
      </div>
      <div className={`${Chomsky.className} hidden text-xl font-bold sm:flex`}>
        Page 1
      </div>
      <div>
        <p className=" text-center text-sm capitalize italic">
          LinkedIn | Twitter | Instagram | Mail{" "}
        </p>
      </div>
      <div className={`${Chomsky.className} flex text-xl font-bold sm:hidden`}>
        Page 1
      </div>
    </footer>
  );
};

export default Footer;
