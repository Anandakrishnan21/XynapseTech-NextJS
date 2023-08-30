import Image from "next/image";
import React from "react";
import PointImage from "@/public/bulletpoint.png";

export default function Point(props: { approach: any }) {
  let { approach } = props;
  return (
    <div className="w-full flex items-start mt-5">
      <Image
        src={PointImage}
        height={100}
        width={100}
        alt="Point"
        className="w-10 h-10"
      />
      <div className="ml-5 text-justify">
        <p className="text-xl">{approach.title}</p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{approach.description}</p>
      </div>
    </div>
  );
}
