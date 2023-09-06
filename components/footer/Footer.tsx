import React from "react";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import HorizontalLine from "../common/HorizontalLine";

export default function Footer() {
  return (
    <footer className="w-full bg-secondaryBlue dark:bg-slate-900/50 mt-10 py-6 px-6 md:px-16">
      <div className="flex flex-wrap md:flex-nowrap justify-center sm:justify-between lg:px-16">
        <FooterLogo />
        <FooterLinks />
      </div>
      <HorizontalLine />
      <div>
        <FooterBottom />
      </div>
    </footer>
  );
}
