'use client'
import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";
import SpecificProjectHeader from "@/UiComponents/ProjectPageComponents/Project/SpecificProjectHeader";
import SpecificProjectIntro from "@/UiComponents/ProjectPageComponents/Project/SpecificProjectIntro";
import { Suspense } from "react";

const ChapterOnePage = () => {
    return (
        <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row relative">
            <AnimationDiv />
            <SpecificProjectHeader />
            <div className="md:h-full md:overflow-y-auto scrollBar relative w-full">
                <Suspense>
                    <SpecificProjectIntro />
                </Suspense>
            </div>
        </div>
    );
};

export default ChapterOnePage;
