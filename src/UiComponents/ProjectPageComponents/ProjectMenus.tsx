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
    name: "CHAP 01",
    url: "https://chapter-umber.vercel.app/login",
    desc: "FRONT LEAD DEVELOPER",
  },
  {
    name: "TCPL",
    url: "https://tapipe-admin-rho.vercel.app/login",
    desc: "FRONT LEAD DEVELOPER",
  },
  {
    name: "SSEPL",
    url: "https://ssepl-nine.vercel.app/login",
    desc: "FRONT LEAD DEVELOPER",
  },
  {
    name: "KOFFEEKODES",
    url: "https://koffeekodes.in/",
    desc: "FRONTEND DEVELOPER",
  },
  {
    name: "OM DENTAL CARE",
    url: "https://omdentalcare.vercel.app/",
    desc: "-",
  },
  { name: "90s FASHION", url: "https://90s-fashion.vercel.app", desc: "-" },
  {
    name: "ARRAY VISUALIZER",
    url: "https://array-visulizer.vercel.app/",
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
      className="hover:italic transition-all duration-300 cursor-pointer text-[--charcoal] text-[19vw] md:text-[6vw]"
      href={url}
      target="_blank"
    >
      {name}
      <p className="text-[16px] uppercase">{desc}</p>
    </Link>
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
