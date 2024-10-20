import AboutHeader from "@/UiComponents/AboutPageComponents/AboutHeader";
import AboutIntro from "@/UiComponents/AboutPageComponents/AboutIntro";
import React from "react";
import Img1 from "@/Statics/Images/img-1 (2).jpg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row">
      <AboutHeader />
      <div className="md:h-full md:overflow-y-auto relative md:flex">
        <AboutIntro />
        <div className="w-[300px] h-[400px] overflow-hidden sticky top-0 shrink-0 md:ml-32 ">
          <div className="size-full relative">
            <Image
              src={Img1}
              alt=""
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
