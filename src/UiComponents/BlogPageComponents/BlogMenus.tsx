"use client";
import Link from "next/link";
import React from "react";

interface Option {
  name: string;
  url: string;
}

const OPTION_DATA: Option[] = [
  {
    name: "Next.js Middleware",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7241664787816845312/",
  },
  {
    name: "useActionState",
    url: "https://www.linkedin.com/posts/jaimeen-makavana_react-19-very-powerfull-hook-useactionstate-activity-7213584351068880896-N_mG?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Caching in next.js",
    url: "https://www.linkedin.com/posts/jaimeen-makavana_%F0%9D%90%87%F0%9D%90%A8%F0%9D%90%B0-%F0%9D%90%A9%F0%9D%90%A8%F0%9D%90%B0%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%9F%F0%9D%90%AE%F0%9D%90%A5-%F0%9D%90%9C%F0%9D%90%9A%F0%9D%90%9C%F0%9D%90%A1%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0-%F0%9D%90%A6-activity-7198719527516303360-6qVD?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "layout.tsx(next.js)",
    url: "https://www.linkedin.com/posts/activity-7194741259041681410-gTy9?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Redux",
    url: "https://www.linkedin.com/posts/activity-7058037805737816064-ZPDC?utm_source=share&utm_medium=member_desktop",
  },
];

const OptionElement = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link
      className="hover:italic transition-all duration-300 cursor-pointer text-[--charcoal] text-[10vw] md:text-[6vw]"
      href={url}
      target="_blank"
    >
      {name}
    </Link>
  );
};

const BlogMenus = () => {
  return (
    <div className="marcellus flex flex-col gap-5 leading-none pt-10 px-10   lg:h-full lg:overflow-y-auto lg:flex-1 lg:text-[11vw]  *:text-[--offwhite]  md:pb-20">
      {OPTION_DATA.map((option) => (
        <OptionElement key={option.name} name={option.name} url={option.url} />
      ))}
    </div>
  );
};

export default BlogMenus;
