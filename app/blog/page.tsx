import SectionTitle from "@/components/common/SectionTitle";
import React from "react";
import { BlogPageContent } from "@/lib/data";
import SectionDesc from "@/components/common/SectionDesc";

export default function page() {
  let { title, description } = BlogPageContent[0];
  return (
    <div className="flex flex-col justify-center items-center mt-28 mb-16 px-10 lg:px-44">
      <SectionTitle>{title}</SectionTitle>
      {description.map((desc, index) => (
        <SectionDesc key={index} textAlign="text-justify">
          {desc}
        </SectionDesc>
      ))}
    </div>
  );
}
