import CareerForm from "@/components/career-form/CareerForm";
import SectionTitle from "@/components/common/SectionTitle";
import React from "react";

export default function page() {
  return (
    <div className="bg-gray-100 dark:bg-slate-950 flex flex-col justify-center items-center mt-16 py-14 px-6 lg:px-28">
      <div className="mb-5 md:mb-8 font-medium">
        <SectionTitle>Internship Registration Form</SectionTitle>
      </div>
      <CareerForm />
    </div>
  );
}
