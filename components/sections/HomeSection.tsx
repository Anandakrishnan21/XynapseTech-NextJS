"use client";
import BannerLottie from "@/components/common/BannerLottie";
import FlagTitle from "@/components/common/FlagTitle";
import SectionDesc from "@/components/common/SectionDesc";
import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { HeroSectionContent } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

export default function HomeSection() {
  let { flagColor, flagTitle, title, description, bannerLottie } =
    HeroSectionContent[0];
  return (
    <section className="flex flex-wrap justify-center lg:justify-between items-center scroll-mt-28">
      <div className="flex flex-col items-center md:items-start lg:w-2/4">
        <FlagTitle color={flagColor}>{flagTitle}</FlagTitle>
        <SectionTitle>{title}</SectionTitle>
        <SectionDesc textAlign="text-justify">{description}</SectionDesc>
        <div className="mt-5 flex flex-wrap flex-col md:flex-row items-center md:items-start">
          <Button variant="blueBg" size="big">
            Get Started
            <BsArrowRight />
          </Button>
          <Button variant="blueBorder" size="big">
            Watch Demo
            <BsArrowRight />
          </Button>
        </div>
      </div>

      <BannerLottie animationData={bannerLottie} />
    </section>
  );
}
