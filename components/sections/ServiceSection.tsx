import React from "react";
import { ServiceSectionContent } from "@/lib/data";
import FlagTitle from "../common/FlagTitle";
import SectionTitle from "../common/SectionTitle";
import SectionDesc from "../common/SectionDesc";
import ServiceCard from "../Card/service-cards/ServiceCard";

export default function ServiceSection() {
  let { flagColor, flagTitle, title, description, services } =
    ServiceSectionContent[0];
  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center scroll-mt-28"
    >
      <FlagTitle color={flagColor}>{flagTitle}</FlagTitle>
      <SectionTitle>{title}</SectionTitle>
      <SectionDesc textAlign="text-justify md:text-center">
        {description}
      </SectionDesc>
      <div className="flex flex-wrap justify-center items-center mt-10 ">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
