import Link from "next/link";
import React from "react";

const HomeIntro = () => {
  return (
    <div className="pt-10 px-10 md:pt-28 lg:max-h-full lg:w-[30%] lg:flex lg:justify-end lg:flex-col lg:pb-20">
      <h1 className="uppercase text-[13px] font-medium tracking-[1.2px] mb-2">
        Jaimeen Makavana
      </h1>
      <p className="text-[12px] mb-5 text-[--charcoal]">
        React.js Developer / Next.js Developer / Frontend Lead and UI/UX
        developer.
      </p>
      <p className="text-[12px] text-[--charcoal]">
        Currently working full-time as a MERN/Next Developer at
        <Link
          href={"https://koffeekodes.in/"}
          target="_blank"
          className="underline underline-offset-2 cursor-pointer"
        >
          {" "}
          KoffeeKodes Pvt. Ltd.
        </Link>
      </p>
    </div>
  );
};

export default HomeIntro;
