import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";
import HomeHeader from "@/UiComponents/HomePageComponents/HomeHeader";
import HomeIntro from "@/UiComponents/HomePageComponents/HomeIntro";
import HomeMenus from "@/UiComponents/HomePageComponents/HomeMenus";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row relative">
      <AnimationDiv />
      <HomeHeader />
      <div className="pb-10 md:pb-0 md:flex-1 md:h-full md:overflow-y-auto scrollBar lg:flex lg:overflow-hidden">
        <HomeIntro />
        <HomeMenus />
      </div>
    </div>
  );
}
