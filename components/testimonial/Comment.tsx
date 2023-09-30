import React from "react";
import { Quote } from "lucide-react";

export default function Comment({ comment }: any) {
  return (
    <div className="h-full flex-col bg-slate-100 dark:bg-slate-900 flex justify-center items-center rounded p-4 gap-2">
      <p className="w-11/12 text-justify font-medium text-sm md:text-lg opacity-80">{comment}</p>
      <Quote className="w-1/12"/>
    </div>
  );
}
