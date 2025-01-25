import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";
import ProjectHeader from "@/UiComponents/ProjectPageComponents/ProjectHeader";
import ProjectIntro from "@/UiComponents/ProjectPageComponents/ProjectIntro";
import ProjectMenus from "@/UiComponents/ProjectPageComponents/ProjectMenus";
import React from "react";
import { lightGradients } from "../page";

const ProjectsPage = () => {
  const randomIndex = Math.floor(Math.random() * lightGradients.length);

  return (
    <div
      style={{
        background: lightGradients[randomIndex].background,
        color: lightGradients[randomIndex].text,
      }}
      className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row  relative"
    >
      <AnimationDiv
        background={lightGradients[randomIndex].background}
        color={lightGradients[randomIndex].text}
      />
      <ProjectHeader  background={lightGradients[randomIndex].background}/>
      <div className="md:flex-1 h-full overflow-y-auto lg:flex lg:overflow-hidden pb-10 md:pb-0">
        <ProjectIntro />
        <ProjectMenus />
      </div>
    </div>
  );
};

export default ProjectsPage;
