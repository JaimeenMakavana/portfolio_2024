import AboutHeader from "@/UiComponents/AboutPageComponents/AboutHeader";
import AboutIntro from "@/UiComponents/AboutPageComponents/AboutIntro";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row">
      <AboutHeader />
      <div className="md:h-full md:overflow-y-auto relative md:flex">
        <AboutIntro />
        <div className="w-[300px] h-[400px] bg-gray-300 sticky top-0 shrink-0 md:ml-32"></div>
      </div>
    </div>
  );
};

export default AboutPage;
