import BlogHeader from "@/UiComponents/BlogPageComponents/BlogHeader";
import BlogIntro from "@/UiComponents/BlogPageComponents/BlogIntro";
import BlogMenus from "@/UiComponents/BlogPageComponents/BlogMenus";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row !bg-[--charcoal] text-[--offwhite]">
      <BlogHeader />
      <div className="md:flex-1 h-full overflow-y-auto lg:flex lg:overflow-hidden pb-10 md:pb-0">
        <BlogIntro />
        <BlogMenus />
      </div>
    </div>
  );
};

export default BlogPage;
