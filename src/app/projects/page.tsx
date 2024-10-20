import ProjectHeader from "@/UiComponents/ProjectPageComponents/ProjectHeader";
import ProjectIntro from "@/UiComponents/ProjectPageComponents/ProjectIntro";
import ProjectMenus from "@/UiComponents/ProjectPageComponents/ProjectMenus";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row !bg-[--charcoal] text-[--offwhite]">
      <ProjectHeader />
      <div className="md:flex-1 md:h-full md:overflow-y-auto lg:flex lg:overflow-hidden">
        <ProjectIntro />
        <ProjectMenus />
      </div>
    </div>
  );
};

export default ProjectsPage;
