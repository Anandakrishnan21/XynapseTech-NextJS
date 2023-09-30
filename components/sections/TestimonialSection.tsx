
import { TestimonialSectionContent } from "@/lib/data";
import React from "react";
import FlagTitle from "../common/FlagTitle";
import SectionTitle from "../common/SectionTitle";
import SectionDesc from "../common/SectionDesc";
import Testimonial from "../testimonial/Testimonial";

export default function TestimonialSection() {
  let { flagColor, flagTitle, title, description} =
    TestimonialSectionContent[0];
  return (
    <section
      id="testimonials"
      className="flex flex-col justify-center items-center mt-28 gap-4"
    >
      <FlagTitle color={flagColor}>{flagTitle}</FlagTitle>
      <SectionTitle>{title}</SectionTitle>
      <SectionDesc textAlign="text-justify md:text-center">
        {description}
      </SectionDesc>
      <Testimonial />
    </section>
  );
}
