import Link from "next/link";
import React from "react";

const HomeIntro = () => {
  return (
    <div className="px-10 md:pt-28 lg:max-h-full lg:w-[30%] lg:flex lg:justify-end lg:flex-col lg:pb-20">
      <h1 className="uppercase text-[13px] md:text-[2vw] font-medium tracking-[1.2px] mb-2">
        Jaimeen Makavana
      </h1>
      <p className="text-[12px] md:text-[1vw] mb-5">
        React.js Developer / Next.js Developer and UI/UX developer.
      </p>
      <p className="text-[12px] md:text-[1vw]">
        Currently working full-time as a MERN/Next Developer at
        <Link
          href={"https://key.ai/"}
          target="_blank"
          className="underline underline-offset-2 cursor-pointer"
        >
          {" "}
          Key.AI
        </Link>
      </p>
    </div>
  );
};

export default HomeIntro;
