"use client";
import React, { useState } from "react";
import Avatar from "./Avatar";
import NameCard from "./NameCard";
import Comment from "./Comment";
import { TestimonialSectionContent } from "@/lib/data";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const changeActiveIndex = (index) => {
    setAnimate(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimate(false);
    }, 500);
  };

  const testimonial = TestimonialSectionContent[0].testimonials[activeIndex];

  return (
    <div className="w-full md:w-5/6 md:h-80 flex flex-col md:flex-row items-center gap-4">
      <div className="h-full flex flex-col md:flex-row gap-4">
        <div
          className={`md:w-1/4 h-full flex flex-row md:flex-col items-center gap-4 ${
            animate ? "animate-fadeIn" : ""
          }`}
        >
          <Avatar />
          <NameCard
            worker={testimonial.name}
            designation={testimonial.designation}
          />
        </div>
        <div className={`h-full md:w-3/4 ${animate ? "animate-fadeIn" : ""}`}>
          <Comment comment={testimonial.comment} />
        </div>
      </div>
      <div className="flex flex-row md:flex-col gap-2">
        {TestimonialSectionContent[0].testimonials.map((_, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex
                ? "bg-yellow-400 w-9 md:w-4 md:h-9 opacity-100 transition-opacity duration-700"
                : "bg-yellow-400 opacity-50"
            } w-4 h-4 rounded-full`}
            onClick={() => changeActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
