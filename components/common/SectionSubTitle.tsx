import React from "react";

export default function SectionSubTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-center md:text-left text-lg md:text-xl lg:text-2xl">
      {children}
    </p>
  );
}
