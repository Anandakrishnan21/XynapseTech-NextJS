import React from "react";

export default function SectionTitle({children}: {children: React.ReactNode}) 
{
  return <p className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl">{children}</p>;
}
