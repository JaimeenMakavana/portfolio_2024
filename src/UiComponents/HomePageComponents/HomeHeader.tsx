import Link from "next/link";
import React from "react";

interface Option {
  name: string;
  url: string;
}

const OPTION_DATA: Option[] = [
  { name: "LI", url: "https://www.linkedin.com/in/jaimeen-makavana/" },
  { name: "GH", url: "https://github.com/JaimeenMakavana" },
];

const OptionElement = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="hover:underline transition-all duration-300 cursor-pointer"
    >
      {name}
    </Link>
  );
};

const HomeHeader = ({ background }: { background: string }) => {
  return (
    <ul className="flex justify-between items-center px-10 text-[12px] py-5 md:w-[100px] md:flex-col md:h-dvh md:pt-20 md:pb-10 ">
      <li>
        <ul className="flex justify-start items-center gap-5 tracking-widest md:-rotate-90">
          {OPTION_DATA.map((socialMedia) => (
            <OptionElement
              key={socialMedia.name}
              name={socialMedia.name}
              url={socialMedia.url}
            />
          ))}
          <li className="w-[40px] h-[2px]  order-1" style={{ background }}></li>
        </ul>
      </li>

      <li className="md:-rotate-90 whitespace-nowrap tracking-widest">
        © / 2024
      </li>
    </ul>
  );
};

export default HomeHeader;
