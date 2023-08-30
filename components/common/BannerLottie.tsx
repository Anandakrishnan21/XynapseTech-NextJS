import React from "react";
import Lottie from "lottie-react";

interface Props {
  animationData: any;
}

export default function BannerLottie({ animationData }: Props) {
  return (
    <Lottie
      animationData={animationData}
      className="w-[20rem] sm:w-[30rem] md:w-[30rem] lg:w-[35rem] lg:-mr-20"
    />
  );
}
