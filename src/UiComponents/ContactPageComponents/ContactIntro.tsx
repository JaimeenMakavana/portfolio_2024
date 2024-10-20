import Link from "next/link";
import React from "react";

const ContactDetails = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="text-[14px] text-[--charcoal] flex justify-start items-center">
      <p className="min-w-[70px]">{name} : </p>
      <p className="underline">{value}</p>
    </div>
  );
};

const ContactIntro = () => {
  return (
    <div className="pt-10 pb-20 px-10 md:pt-28 lg:max-h-full lg:w-[30%] lg:flex lg:justify-end lg:flex-col lg:pb-20  *:text-[--offwhite]">
      <h1 className="text-[12vw] marcellus font-medium tracking-[1.2px] mb-2">
        Hello,
      </h1>

      <p className="text-[14px] text-[--charcoal] mb-5">
        Looking for a dynamic, high-performance web application with a focus on
        user experience and cutting-edge technologies? Let&apos;s connect and
        bring your ideas to life.
      </p>

      <ContactDetails name="Email" value="jaimeen.makavana@gmail.com" />
      <ContactDetails name="Contact" value="+91 9737114083" />

      <div className="text-[12px] text-[--charcoal] flex">
        <p className="min-w-[110px]">On the internet:</p>
        <Link
          href={"https://github.com/JaimeenMakavana"}
          target="_blank"
          className="underline cursor-pointer mr-3"
        >
          GitHub
        </Link>{" "}
        /
        <Link
          href={"https://github.com/JaimeenMakavana"}
          target="_blank"
          className="underline cursor-pointer ml-3"
        >
          LinkedIn
        </Link>{" "}
      </div>
    </div>
  );
};

export default ContactIntro;
