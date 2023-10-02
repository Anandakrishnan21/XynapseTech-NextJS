import { Button } from "@/components/ui/button";
import React from "react";

export default function ProjectButton() {
  return (
    <Button
      className="flex justify-center items-center bg-gray-100 dark:bg-slate-900 border border-primaryBlue text-secondaryBlue 
      w-full gap-5 p-2 px-3 hover:bg-secondaryBlue dark:hover:bg-secondaryBlue hover:text-white
    rounded-lg ease-out duration-300"
    >
      <p className="text-base">View Details</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </Button>
  );
}
