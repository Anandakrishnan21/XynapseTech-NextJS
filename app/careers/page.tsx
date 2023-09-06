import React from "react";
import { CareerPageContent } from "@/lib/data";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubTitle from "@/components/common/SectionSubTitle";
import { Button } from "@/components/ui/button";
import SectionDesc from "@/components/common/SectionDesc";
import { BsArrowRight } from "react-icons/bs";
import BannerImage from "@/components/common/BannerImage";

export default function page() {
  let { title, subtitle, description, bannerImage } = CareerPageContent[0];
  return (
    <div className="flex flex-col justify-center items-center mt-28 md:mt-36 px-10 lg:px-28">
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center">
        <SectionTitle>{title}</SectionTitle>
        <div className="flex flex-col items-center md:items-start md:w-2/4">
          <SectionSubTitle>{subtitle}</SectionSubTitle>
          <SectionDesc textAlign="text-justify">{description}</SectionDesc>
          <Button variant="blueBg" size="big" className="mt-7 mx-0">
            Register Now <BsArrowRight />
          </Button>
        </div>
      </div>
      <div className="w-full h-96 mb-16">
        <BannerImage imageUrl={bannerImage} />
      </div>
    </div>
  );
}
