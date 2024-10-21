'use client'
import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";
import SpecificProjectIntro from "@/UiComponents/ProjectPageComponents/Project/SpecificProjectIntro";
import SpecificProjectHeader from "@/UiComponents/AboutPageComponents/AboutHeader";

const ChapterOnePage = () => {


    return (
        <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row relative">
            <AnimationDiv />
            <SpecificProjectHeader />
            <div className="md:h-full md:overflow-y-auto scrollBar relative ">
                <SpecificProjectIntro />
            </div>
        </div>
    );
};

export default ChapterOnePage;
