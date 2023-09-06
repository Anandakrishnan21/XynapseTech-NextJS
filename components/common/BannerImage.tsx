import Image from "next/image";
import React from "react";

interface Props {
  imageUrl: any;
}
export default function BannerImage({ imageUrl }: Props) {
  return (
    <Image
      src={imageUrl}
      height={100}
      width={1000}
      alt="banner Image"
      className="mt-7 rounded-lg w-full h-full object-cover"
    />
  );
}
