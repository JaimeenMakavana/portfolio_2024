import BlogHeader from "@/UiComponents/BlogPageComponents/BlogHeader";
import BlogIntro from "@/UiComponents/BlogPageComponents/BlogIntro";
import BlogMenus from "@/UiComponents/BlogPageComponents/BlogMenus";
import React from "react";
import { lightGradients } from "../page";

const BlogPage = () => {
  const randomIndex = Math.floor(Math.random() * lightGradients.length);

  return (
    <div
      style={{
        background: lightGradients[randomIndex].background,
        color: lightGradients[randomIndex].text,
      }}
      className="flex flex-col justify-between h-dvh overflow-y-auto md:overflow-hidden md:flex-row"
    >
      <BlogHeader background={lightGradients[randomIndex].background} />
      <div className="md:flex-1 h-full overflow-y-auto lg:flex lg:overflow-hidden pb-10 md:pb-0">
        <BlogIntro />
        <BlogMenus />
      </div>
    </div>
  );
};

export default BlogPage;
