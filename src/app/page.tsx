import HomeHeader from "@/UiComponents/HomePageComponents/HomeHeader";
import HomeIntro from "@/UiComponents/HomePageComponents/HomeIntro";
import HomeMenus from "@/UiComponents/HomePageComponents/HomeMenus";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row">
      {/* md: header is vertical and other two are scrollable vertically */}
      <HomeHeader />
      <div className="md:flex-1 md:h-full md:overflow-y-auto lg:flex lg:overflow-hidden">
        <HomeIntro />
        <HomeMenus />
      </div>
    </div>
  );
}
