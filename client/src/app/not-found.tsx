import React from "react";

type Props = {};

// 👇 import local font
import localFont from "next/font/local";
import Link from "next/link";
import { Button } from "@/components/ui/button";

//👇 Configure our local font object
const Chomsky = localFont({ src: "../../public/font/Chomsky.ttf" });

const NotFound = (props: Props) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className={`text-6xl font-bold text-gray-700 ${Chomsky.className}`}>
        404 - Page Not Found
      </h1>
      <Link href="/" className=" mt-10 text-2xl font-bold text-gray-700">
        <Button variant="outline" className={`text-lg font-bold`}>
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
