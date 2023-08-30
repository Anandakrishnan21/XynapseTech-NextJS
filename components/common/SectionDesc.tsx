import React from "react";

interface Props {
  textAlign: string;
  children: React.ReactNode;
}

export default function SectionDesc({ textAlign, children }: Props) {
  return (
    <p className={`text-sm sm:text-base text-gray-500 dark:text-gray-300 ${textAlign} w-full mt-5`}>
      {children}
    </p>
  );
}
