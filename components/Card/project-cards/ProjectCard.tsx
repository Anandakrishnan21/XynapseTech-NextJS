import React from "react";
import ProjectButton from "./ProjectButton";

export default function ProjectCard({title,description,brand} : any) {
  return (
    <div
      className="h-full flex flex-col justify-between p-8 rounded-2xl lg:rounded-none hover:text-black 
  hover:border hover:bg-gray-100 ease-out duration-700"
    >
      <div>
        <h1 className="uppercase text-3xl font-light">{title}</h1>
      </div>
      <div>
        <p className="text-lg font-extralight">{description}</p>
        <span className="uppercase text-base text-stone-500 font-light">
          {brand}
        </span>
      </div>
      <div>
        <ProjectButton />
      </div>
    </div>
  );
}
