import React from "react";
import { CareerPageContent } from "@/lib/data";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubTitle from "@/components/common/SectionSubTitle";
import SectionDesc from "@/components/common/SectionDesc";
import BannerImage from "@/components/common/BannerImage";
import CareerRegisterButton from "@/components/common/CareerRegisterButton";

export default function page() {
  let { title, subtitle, description, bannerImage } = CareerPageContent[0];
  return (
    <div className="flex flex-col justify-center items-center mt-28 md:mt-36 mb-10 px-10 lg:px-28">
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center gap-9">
        <SectionTitle>{title}</SectionTitle>
        <div className="flex flex-col items-center md:items-start md:w-2/4">
          <SectionSubTitle>{subtitle}</SectionSubTitle>
          <SectionDesc textAlign="text-justify">{description}</SectionDesc>
          <CareerRegisterButton/>
        </div>
      </div>
      <div className="w-full h-96 mb-16">
        <BannerImage imageUrl={bannerImage} />
      </div>
    </div>
  );
}
