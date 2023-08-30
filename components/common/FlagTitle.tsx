import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  color: string;
  children: React.ReactNode;
}

export default function FlagTitle({ color, children }: Props) {
  return (
    <div className="w-fit border-2 rounded px-3 py-1 flex space-x-2 justify-center items-center shadow-sm mb-3">
      <div
        className="rounded-full h-4 w-4"
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-gray-400 font-medium">{children}</p>
    </div>
  );
}
