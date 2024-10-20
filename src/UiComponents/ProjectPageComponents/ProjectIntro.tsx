import React from "react";

const ProjectIntro = () => {
  return (
    <div className="pt-10 px-10 md:pt-28 lg:max-h-full lg:w-[30%] lg:flex lg:justify-end lg:flex-col lg:pb-20  *:text-[--offwhite]">
      <h1 className="uppercase text-[13px] font-medium tracking-[1.2px] mb-2">
        WORK
      </h1>

      <p className="text-[12px] text-[--charcoal] mb-5">
        This portfolio showcases my best projects in web development, focusing
        on React.js, Next.js, full-stack development, and frontend architecture.
      </p>

      <p className="text-[12px] text-[--charcoal]">
        The landscape of web development is ever-changing, and so is my
        approach. From mastering modern frontend frameworks to staying current
        with new tools and technologies, I&apos;m constantly evolving and
        refining my skills with each project.
      </p>
    </div>
  );
};

export default ProjectIntro;
