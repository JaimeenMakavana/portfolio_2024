"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OPTION_DATA = [
  { name: "Work", url: "/projects" },
  { name: "About", url: "/about" },
  { name: "Shop", url: "/technical-skills" },
  { name: "Contact", url: "/" },
];

const OptionElement = ({ name, url }: { name: string; url: string }) => {
  const router = useRouter();

  const handleRouting = () => {
    router.push(url);
  };

  return (
    <li
      className="hover:italic transition-all duration-300 cursor-pointer"
      onClick={handleRouting}
    >
      {name}
    </li>
  );
};

const HomeMenus = () => {
  return (
    <ul className="text-[19vw] marcellus leading-none pt-10 px-10 ">
      {OPTION_DATA.map((option: any) => (
        <OptionElement name={option.name} url={option.url} />
      ))}
    </ul>
  );
};

export default HomeMenus;
