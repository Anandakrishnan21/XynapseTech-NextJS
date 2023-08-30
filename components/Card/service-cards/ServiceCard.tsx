import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";

export default function ServiceCard(props: { service: any }) {
  let { service } = props;
  return (
    <>
      <div
        key={service.id}
        className="flex flex-col md:flex-row lg:flex-col justify-center items-center 
       w-full lg:w-96 my-4 md:m-4 p-5 dark:bg-slate-900
        bg-gray-100 rounded border transition-all"
      >
        <CardImage imageUrl={service.imageUrl} iconUrl={service.iconUrl} />
        <div className="md:pl-5 lg:pl-0">
          <CardTitle>{service.title}</CardTitle>
          <CardDesc>{service.description}</CardDesc>
        </div>
      </div>
    </>
  );
}
