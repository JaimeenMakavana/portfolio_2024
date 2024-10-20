"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface Option {
  name: string;
  url: string;
}

const OPTION_DATA: Option[] = [
  { name: "About", url: "/about" },
  { name: "Work", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

const OptionElement = ({ name, url }: { name: string; url: string }) => {
  const router = useRouter();

  const handleRouting = () => {
    router.push(url);
  };

  return (
    <li
      className="hover:italic transition-all duration-300 cursor-pointer text-[--charcoal]"
      onClick={handleRouting}
    >
      {name}
    </li>
  );
};

const HomeMenus = () => {
  return (
    <div className="lg:pb-20 md:flex md:items-end pt-10 px-10 lg:h-full lg:overflow-y-auto lg:flex-1">
      <ul className="text-[19vw]  marcellus leading-none  md:text-[14vw] lg:text-[11vw]">
        {OPTION_DATA.map((option) => (
          <OptionElement
            key={option.name}
            name={option.name}
            url={option.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default HomeMenus;
