import HomeSection from "@/components/sections/HomeSection";
import ServiceSection from "@/components/sections/ServiceSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-28 lg:mt-20 px-10 lg:px-28">
      <HomeSection />
      <ServiceSection/>
    </div>
  );
}
