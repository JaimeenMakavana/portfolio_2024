import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";
import ProjectHeader from "@/UiComponents/ProjectPageComponents/ProjectHeader";
import ProjectIntro from "@/UiComponents/ProjectPageComponents/ProjectIntro";
import ProjectMenus from "@/UiComponents/ProjectPageComponents/ProjectMenus";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row !bg-[--charcoal] text-[--offwhite] relative">
      <AnimationDiv />
      <ProjectHeader />
      <div className="md:flex-1 h-full overflow-y-auto lg:flex lg:overflow-hidden pb-10 md:pb-0">
        <ProjectIntro />
        <ProjectMenus />
      </div>
    </div>
  );
};

export default ProjectsPage;
