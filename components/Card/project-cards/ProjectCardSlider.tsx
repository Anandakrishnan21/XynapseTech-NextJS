"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ProjectsSectionContent } from "@/lib/data";
import ProjectButton from "./ProjectButton";
import ProjectCard from "./ProjectCard";

export default function ProjectCardSlider() {
  return (
    <div className="w-full m-auto">
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          className="w-full h-96 flex justify-center items-center"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 0,
            },
          }}
        >
          {ProjectsSectionContent[0].projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="bg-slate-900 text-white rounded-2xl lg:rounded-none 
              first:rounded-l-2xl 
              "
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                brand={project.brandName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
