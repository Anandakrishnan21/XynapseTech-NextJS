import Image from "next/image";
import React from "react";

export default function CardImage(props: any) {
  let { imageUrl, iconUrl } = props;
  return (
    <>
      <Image
        src={imageUrl}
        alt="service image"
        width={300}
        height={100}
        className="hidden md:block md:w-60 lg:w-80 rounded"
      />
      <Image
        src={iconUrl}
        alt="service icon"
        width={100}
        height={100}
        className="md:hidden w-8 rounded"
      />
    </>
  );
}
