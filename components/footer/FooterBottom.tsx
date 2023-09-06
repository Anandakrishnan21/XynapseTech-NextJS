import Link from "next/link";
import React from "react";

export default function FooterBottom() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap 
    justify-center text-center lg:justify-between 
    items-center text-xs sm:text-sm text-gray-300
     dark:text-gray-400 gap-2 lg:gap-0">
      <p>
        Copyright &copy; {new Date().getFullYear()} Xynapse Technologies Pvt.
        Ltd. All Rights Reserved.
      </p>
      <div className="flex gap-2 items-center">
        <Link href="" className="hover:text-gray-200">
          Terms & Conditions
        </Link>
        <div className="w-[1.5px] h-3 bg-gray-400"></div>
        <Link href="" className="hover:text-gray-200">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
