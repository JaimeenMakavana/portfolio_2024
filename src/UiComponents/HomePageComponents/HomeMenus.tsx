"use client";
import { useRouter } from "next/navigation";

interface Option {
  name: string;
  url: string;
}

const OPTION_DATA: Option[] = [
  { name: "About", url: "/about" },
  { name: "Work", url: "/projects" },
  { name: "Contact", url: "/contact" },
  { name: "Blog", url: "/blog" },
];

const OptionElement = ({ name, url }: { name: string; url: string }) => {
  const router = useRouter();

  const handleRouting = () => {
    router.push(url);
  };

  return (
    <li
      className="hover:italic transition-all duration-300 cursor-pointer relative group"
      onClick={handleRouting}
    >
      <div
        className={`w-0 group-hover:w-full transition-all duration-500  absolute bottom-0 inset-x-0 h-[1px] md:h-[2px] xl:h-[3px] rounded-full`}
      ></div>
      {name}
    </li>
  );
};

const HomeMenus = () => {
  return (
    <div className="lg:pb-20 md:flex md:items-end pt-10 px-10 lg:h-full lg:overflow-y-auto scrollBar lg:flex-1">
      <ul className="text-[19vw]  marcellus leading-none space-y-3  md:text-[11vw] my-auto">
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
