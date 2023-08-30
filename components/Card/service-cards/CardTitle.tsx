import React from "react";

export default function CardTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-center text-xl  lg:mt-4">{children}</p>;
}
