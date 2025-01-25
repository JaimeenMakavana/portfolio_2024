"use client";
import AboutHeader from "@/UiComponents/AboutPageComponents/AboutHeader";
import AboutIntro from "@/UiComponents/AboutPageComponents/AboutIntro";
import Img1 from "@/Statics/Images/img-1 (2).jpg";
import Image from "next/image";
import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";
import { lightGradients } from "../page";
const AboutPage = () => {
  const randomIndex = Math.floor(Math.random() * lightGradients.length);

  return (
    <div
      className="flex flex-col h-dvh justify-between overflow-y-auto md:overflow-hidden md:flex-row relative"
      style={{
        background: lightGradients[randomIndex].background,
        color: lightGradients[randomIndex].text,
      }}
    >
      <AnimationDiv
        background={lightGradients[randomIndex].background}
        color={lightGradients[randomIndex].text}
      />
      <AboutHeader background={lightGradients[randomIndex].background} />
      <div className="md:h-full md:overflow-y-auto scrollBar relative md:flex">
        <AboutIntro />
        <div className="hidden md:block w-[300px] h-[400px] overflow-hidden sticky top-0 shrink-0 md:ml-32 xl:w-[500px] ">
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
