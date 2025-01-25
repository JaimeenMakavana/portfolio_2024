"use client";
import useStore from "@/store/store";
import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";
import SpecificProjectHeader from "@/UiComponents/ProjectPageComponents/Project/SpecificProjectHeader";
import SpecificProjectIntro from "@/UiComponents/ProjectPageComponents/Project/SpecificProjectIntro";
import { Suspense } from "react";

const ChapterOnePage = () => {
  const { lightGradients, randomIndex } = useStore();

  return (
    <div
      style={{
        background: lightGradients[randomIndex].background,
        color: lightGradients[randomIndex].text,
      }}
      className="flex flex-col justify-between h-dvh overflow-y-auto md:overflow-hidden md:flex-row relative"
    >
      <AnimationDiv
        background={lightGradients[randomIndex].background}
        color={lightGradients[randomIndex].text}
      />
      <SpecificProjectHeader
        background={lightGradients[randomIndex].background}
      />
      <div className="md:h-full md:overflow-y-auto scrollBar relative w-full">
        <Suspense>
          <SpecificProjectIntro />
        </Suspense>
      </div>
    </div>
  );
};

export default ChapterOnePage;
