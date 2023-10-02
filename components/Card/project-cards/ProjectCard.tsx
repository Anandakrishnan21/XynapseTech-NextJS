import React from "react";
import ProjectButton from "./ProjectButton";

export default function ProjectCard({title,description,brand} : any) {
  return (
    <div
      className="h-full flex flex-col justify-between p-8 rounded-2xl lg:rounded-none border-r border-gray-300
  dark:border-slate-800 hover:border hover:bg-gray-200 dark:hover:bg-slate-800 ease-out duration-500"
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
      <div className="">
        <ProjectButton />
      </div>
    </div>
  );
}
