import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WorkSection from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-28 lg:mt-20 px-10 lg:px-28">
      <HomeSection />
      <ServiceSection />
      <WorkSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
