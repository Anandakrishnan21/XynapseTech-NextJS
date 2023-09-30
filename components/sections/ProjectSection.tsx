import { ProjectsSectionContent } from "@/lib/data";
import React from "react";
import FlagTitle from "../common/FlagTitle";
import SectionTitle from "../common/SectionTitle";
import SectionDesc from "../common/SectionDesc";
import ProjectCardSlider from "../Card/project-cards/ProjectCardSlider";

export default function ProjectSection() {
  let { flagTitle, flagColor, title, description } = ProjectsSectionContent[0];
  return (
    <section
      id="work"
      className="w-full flex flex-col justify-center items-center scroll-mt-28 mt-14 m-auto gap-10"
    >
      <div className="w-full flex flex-wrap items-start">
        <div className="flex flex-col items-center md:items-start w-full md:w-2/4">
          <FlagTitle color={flagColor}>{flagTitle}</FlagTitle>
          <SectionTitle>{title}</SectionTitle>
        </div>
        <div className="md:w-2/4 md:mt-7">
          <SectionDesc textAlign="text-justify">{description}</SectionDesc>
        </div>
      </div>
      <ProjectCardSlider />
    </section>
  );
}
