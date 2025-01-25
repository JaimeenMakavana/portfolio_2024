"use client";
import useStore from "@/store/store";
import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";
import HomeHeader from "@/UiComponents/HomePageComponents/HomeHeader";
import HomeIntro from "@/UiComponents/HomePageComponents/HomeIntro";
import HomeMenus from "@/UiComponents/HomePageComponents/HomeMenus";

export default function Home() {
  const { lightGradients, randomIndex } = useStore();

  return (
    <div
      className={`flex flex-col justify-start h-dvh md:h-dvh md:overflow-hidden md:flex-row relative `}
      style={{
        background: lightGradients[randomIndex].background,
        color: lightGradients[randomIndex].text,
      }}
    >
      <AnimationDiv
        background={lightGradients[randomIndex].background}
        color={lightGradients[randomIndex].text}
      />
      <HomeHeader background={lightGradients[randomIndex].background} />
      <div className="pb-10 h-[calc(100%-60px)] pt-10 md:pb-0 md:flex-1 md:h-full md:overflow-y-auto scrollBar lg:flex">
        <HomeIntro />
        <HomeMenus />
      </div>
    </div>
  );
}
