import Image from "next/image";
import React from "react";
import Footerlogo from "@/public/footerLogo.png";

export default function FooterLogo() {
  return (
    <div>
      <Image src={Footerlogo} height={500} width={230} alt="Footer Logo" />
    </div>
  );
}
