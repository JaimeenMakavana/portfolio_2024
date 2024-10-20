import React from "react";

interface Option {
  name: string;
  url: string;
}

const OPTION_DATA: Option[] = [
  { name: "LI", url: "/projects" },
  { name: "TW", url: "/about" },
  { name: "DR", url: "/technical-skills" },
];

const OptionElement = ({ name, url }: { name: string; url?: string }) => {
  console.log("url::: ", url);
  return (
    <li className="hover:underline transition-all duration-300 cursor-pointer">
      {name}
    </li>
  );
};

const HomeHeader = () => {
  return (
    <ul className="flex justify-between items-center px-10 text-[12px] py-5">
      <li>
        <ul className="flex justify-start items-center gap-5 tracking-widest">
          {OPTION_DATA.map((socialMedia) => (
            <OptionElement
              key={socialMedia.name}
              name={socialMedia.name}
              url=""
            />
          ))}
          <li className="w-[40px] h-[2px] bg-black"></li>
        </ul>
      </li>

      <li>© / 2024</li>
    </ul>
  );
};

export default HomeHeader;
