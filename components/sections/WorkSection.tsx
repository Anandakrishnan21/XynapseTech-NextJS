"use client";
import { WorkSectioncontent } from "@/lib/data";
import React from "react";
import FlagTitle from "../common/FlagTitle";
import BannerLottie from "../common/BannerLottie";
import SectionTitle from "../common/SectionTitle";
import SectionSubTitle from "../common/SectionSubTitle";
import Point from "../common/Point";

export default function WorkSection() {
  let { flagTitle, flagColor, title, approaches, bannerLottie } =
    WorkSectioncontent[0];
  return (
    <section className="w-full flex flex-wrap justify-center lg:justify-between items-center scroll-mt-28">
      <BannerLottie animationData={bannerLottie} />
      <div className="w-full lg:w-2/4 flex flex-col items-center">
        <FlagTitle color={flagColor}>{flagTitle}</FlagTitle>
        <SectionTitle>{title}</SectionTitle>
        {approaches.map((approach)=>(
            <Point key={approach.id} approach={approach}/>
        ))}
        
      </div>
    </section>
  );
}
