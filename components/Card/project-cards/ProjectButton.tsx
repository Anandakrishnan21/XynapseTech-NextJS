import React from "react";

export default function ProjectButton() {
  return (
    <button
      className="flex justify-around items-center bg-primaryBlue text-white w-full p-2 
    rounded-lg hover:bg-secondaryBlue ease-out duration-700"
    >
      <p className="text-base md:text-lg font-light">View More</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  );
}
