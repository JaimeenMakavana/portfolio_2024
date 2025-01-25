import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";
import HomeHeader from "@/UiComponents/HomePageComponents/HomeHeader";
import HomeIntro from "@/UiComponents/HomePageComponents/HomeIntro";
import HomeMenus from "@/UiComponents/HomePageComponents/HomeMenus";

export const lightGradients = [
  {
    background:
      "linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 50%, #FBC2EB 100%)", // Blush sunset
    text: "#FFFFFF", // Pure white
  },
  {
    background:
      "linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 50%, #D4FCFC 100%)", // Frosted sky
    text: "#0C4A6E", // Deep navy
  },
  {
    background:
      "linear-gradient(135deg, #84FAB0 0%, #8FD3F4 50%, #A6C1EE 100%)", // Tropical lagoon
    text: "#14532D", // Emerald green
  },
  {
    background:
      "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 50%, #F6D365 100%)", // Candy dream
    text: "#9D174D", // Deep pink
  },
  {
    background:
      "linear-gradient(135deg, #F6D365 0%, #FDA085 50%, #FF6F61 100%)", // Golden sunrise
    text: "#78350F", // Rich brown
  },
  {
    background:
      "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 50%, #A8D8FF 100%)", // Mystic aurora
    text: "#4C1D95", // Deep purple
  },
  {
    background:
      "linear-gradient(135deg, #F9F7F7 0%, #DBE2EF 50%, #3F72AF 100%)", // Arctic frost
    text: "#1F2937", // Charcoal
  },
  {
    background:
      "linear-gradient(135deg, #FEE140 0%, #FA709A 50%, #FF9A9E 100%)", // Neon glow
    text: "#831843", // Deep magenta
  },
  {
    background:
      "linear-gradient(135deg, #43CBFF 0%, #9708CC 50%, #F97794 100%)", // Electric vibe
    text: "#FFFFFF", // Pure white
  },
  {
    background:
      "linear-gradient(135deg, #F4D03F 0%, #16A085 50%, #2ECC71 100%)", // Golden jungle
    text: "#14532D", // Emerald green
  },
  {
    background:
      "linear-gradient(135deg, #FF6F61 0%, #FFD700 50%, #FFA500 100%)", // Citrus burst
    text: "#7C2D12", // Chocolate
  },
  {
    background:
      "linear-gradient(135deg, #6A11CB 0%, #2575FC 50%, #48B1BF 100%)", // Cosmic wave
    text: "#FFFFFF", // Pure white
  },
  {
    background:
      "linear-gradient(135deg, #FF9A9E 0%, #FBC2EB 50%, #A6C1EE 100%)", // Pastel galaxy
    text: "#4C1D95", // Deep purple
  },
  {
    background:
      "linear-gradient(135deg, #FAD961 0%, #F76B1C 50%, #FF4E50 100%)", // Fiery sunset
    text: "#78350F", // Rich brown
  },
  {
    background:
      "linear-gradient(135deg, #A8E063 0%, #56AB2F 50%, #A8E063 100%)", // Fresh lime
    text: "#14532D", // Emerald green
  },
  {
    background:
      "linear-gradient(135deg, #FF7E5F 0%, #FEB47B 50%, #FFD700 100%)", // Tropical punch
    text: "#7C2D12", // Chocolate
  },
  {
    background:
      "linear-gradient(135deg, #FFC3A0 0%, #FFAFBD 50%, #FF9A9E 100%)", // Blush crush
    text: "#831843", // Deep magenta
  },
  {
    background:
      "linear-gradient(135deg, #00DBDE 0%, #FC00FF 50%, #FF9A9E 100%)", // Neon dream
    text: "#FFFFFF", // Pure white
  },
  {
    background:
      "linear-gradient(135deg, #FEE140 0%, #FA709A 50%, #FF9A9E 100%)", // Sunset glow
    text: "#831843", // Deep magenta
  },
];

export default function Home() {
  const randomIndex = Math.floor(Math.random() * lightGradients.length);

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
      <HomeHeader background={lightGradients[randomIndex].background}/>
      <div className="pb-10 h-[calc(100%-60px)] pt-10 md:pb-0 md:flex-1 md:h-full md:overflow-y-auto scrollBar lg:flex">
        <HomeIntro />
        <HomeMenus
          bg={lightGradients[randomIndex].background}
          txt={lightGradients[randomIndex].text}
        />
      </div>
    </div>
  );
}
