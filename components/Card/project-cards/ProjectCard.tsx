"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ProjectsSectionContent } from "@/lib/data";
import ProjectButton from "./ProjectButton";

export default function ProjectCard() {
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
              className="bg-custom text-white rounded-2xl lg:rounded-none 
              first:rounded-l-2xl 
              "
            >
              <div
                className="h-full flex flex-col justify-between p-8 rounded-2xl lg:rounded-none hover:text-black 
              hover:border hover:bg-gray-100 ease-out duration-700"
              >
                <div>
                  <h1 className="uppercase text-3xl font-light">
                    {project.title}
                  </h1>
                </div>
                <div>
                  <p className="text-lg font-extralight">
                    {project.description}
                  </p>
                  <span className="uppercase text-base text-stone-500 font-light">
                    {project.brandName}
                  </span>
                </div>
                <div>
                  <ProjectButton />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
