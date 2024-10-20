import React from "react";

const HomeIntro = () => {
  return (
    <div className="pt-10 px-10 md:pt-28">
      <h1 className="uppercase text-[13px] font-medium tracking-[1.2px] mb-2">
        Lauren Waller
      </h1>
      <p className="text-[12px] mb-5 text-[--charcoal]">
        Product Designer / Webflow Developer / Framer Developer and Partner.
      </p>
      <p className="text-[12px] text-[--charcoal]">
        Currently working full-time as a Senior Product Designer at
        <span className="underline underline-offset-2 cursor-pointer">
          {" "}
          Detail Technologies
        </span>
      </p>
    </div>
  );
};

export default HomeIntro;
