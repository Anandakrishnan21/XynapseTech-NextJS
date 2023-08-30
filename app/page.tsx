import HomeSection from "@/components/sections/HomeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ServiceSection from "@/components/sections/ServiceSection";
import WorkSection from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-28 lg:mt-20 px-10 lg:px-28">
      <HomeSection />
      <ServiceSection/>
      <WorkSection/>
      <ProjectSection/>
    </div>
  );
}
