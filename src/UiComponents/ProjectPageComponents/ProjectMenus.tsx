"use client";
import Link from "next/link";
import React from "react";

interface Option {
  name: string;
  url: string;
  desc: string;
}

const OPTION_DATA: Option[] = [
  {
    name: "CHAPTER 01",
    url: "/projects/project?id=1",
    desc: "FRONT LEAD DEVELOPER",
  },
  {
    name: "TCPL",
    url: "/projects/project?id=2",
    desc: "FRONT LEAD DEVELOPER",
  },
  {
    name: "SSEPL",
    url: "/projects/project?id=3",
    desc: "FRONT LEAD DEVELOPER",
  },
  {
    name: "KOFFEEKODES",
    url: "/projects/project?id=4",
    desc: "FRONTEND DEVELOPER",
  },
  {
    name: "OM DENTAL CARE",
    url: "/projects/project?id=5",
    desc: "-",
  },
  { name: "90s FASHION", url: "/projects/project?id=6", desc: "-" },
  {
    name: "ARRAY VISUALIZER",
    url: "/projects/project?id=7",
    desc: "-",
  },
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
  return (
    <Link
      className="hover:italic transition-all duration-300 cursor-pointer text-[10vw] md:text-[6vw]"
      href={url}
    >
      {name}
      <p className="text-[16px] uppercase">{desc}</p>
    </Link>
  );
};

const ProjectMenus = () => {
  return (
    <div className="marcellus flex flex-col gap-5 leading-none pt-10 px-10   lg:h-full lg:overflow-y-auto lg:flex-1 scrollBar lg:text-[11vw] md:pb-20">
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
