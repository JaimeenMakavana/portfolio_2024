"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface Option {
  name: string;
  url: string;
  desc: string;
}

const OPTION_DATA: Option[] = [
  { name: "OKALPHA", url: "/about", desc: "WEBFLOW DEVELOPMENT" },
  { name: "SUPERLINK", url: "/projects", desc: "FRAMER DEVELOPMENT" },
  { name: "KAROO", url: "/technical-skills", desc: "WEBFLOW DEVELOPMENT" },
  { name: "WARD", url: "/", desc: "WEBFLOW DEVELOPMENT" },
  { name: "STUDIO", url: "/", desc: "WEBFLOW DEVELOPMENT" },
  { name: "MARGRAVINE", url: "/", desc: "WEBFLOW DEVELOPMENT" },
  { name: "CSSCO", url: "/", desc: "WEBFLOW DEVELOPMENT" },
  { name: "YUMMYUCK", url: "/", desc: "WEBFLOW DEVELOPMENT" },
];

const OptionElement = ({
  name,
  url,
  desc,
}: {
  name: string;
  url: string;
  desc: string;
}) => {
  const router = useRouter();

  const handleRouting = () => {
    router.push(url);
  };

  return (
    <div
      className="hover:italic transition-all duration-300 cursor-pointer text-[--charcoal] text-[19vw] md:text-[8vw]"
      onClick={handleRouting}
    >
      {name}
      <p className="text-[16px] uppercase">{desc}</p>
    </div>
  );
};

const ProjectMenus = () => {
  return (
    <div className=" marcellus leading-none pt-10 px-10  lg:h-full lg:overflow-y-auto lg:flex-1 lg:text-[11vw]  *:text-[--offwhite] space-y-5 md:pb-20">
      {OPTION_DATA.map((option) => (
        <OptionElement
          key={option.name}
          name={option.name}
          url={option.url}
          desc={option.desc}
        />
      ))}
    </div>
  );
};

export default ProjectMenus;
