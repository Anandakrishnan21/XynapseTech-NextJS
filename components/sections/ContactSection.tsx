import React from "react";
import { ContactSectionContent } from "@/lib/data";
import FlagTitle from "../common/FlagTitle";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../contact/ContactForm";
import BannerImage from "../common/BannerImage";

export default function ContactSection() {
  let { flagTitle, flagColor, title, bannerImage } = ContactSectionContent[0];
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center md:items-start scroll-mt-28 mt-14 mb-12"
    >
      <FlagTitle color={flagColor}>{flagTitle}</FlagTitle>
      <SectionTitle>{title}</SectionTitle>
      <div className="w-full flex flex-wrap-reverse md:flex-nowrap justify-center md:justify-between items-center gap-10 mt-5">
        <ContactForm />
        <div className="w-[350px] sm:w-[500px] lg:w-[600px]">
          <BannerImage imageUrl={bannerImage} />
        </div>
      </div>
    </section>
  );
}
