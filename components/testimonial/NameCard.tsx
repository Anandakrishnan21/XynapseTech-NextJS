import React from "react";

export default function NameCard({ worker, designation }: any) {
  return (
    <div
      className="w-4/6 md:w-full flex md:h-1/3 flex-col justify-center
    bg-yellow-400 p-3 rounded"
    >
      <h1 className="font-medium">{worker}</h1>
      <p className="font-light text-sm">{designation}</p>
    </div>
  );
}
