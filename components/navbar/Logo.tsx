import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderLogo from "@/public/headerLogo.png";
const logoString = " Xynapse Tech";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex justify-center items-center font-medium text-gray-700 dark:text-gray-200 text-lg sm:text-xl md:text-2xl  cursor-default"
    >
      <Image src={HeaderLogo} height={100} width={100} alt="Logo" className="w-16 sm:w-20 mr-2"/>
      {logoString}
    </Link>
  );
}
