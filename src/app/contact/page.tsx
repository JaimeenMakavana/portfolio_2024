import ContactHeader from "@/UiComponents/ContactPageComponents/ContactHeader";
import ContactIntro from "@/UiComponents/ContactPageComponents/ContactIntro";

import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-between h-dvh md:overflow-hidden md:flex-row !bg-[--charcoal] text-[--offwhite]">
      <ContactHeader />
      <div className="md:flex-1 md:h-full md:overflow-y-auto lg:flex lg:overflow-hidden">
        <ContactIntro />
      </div>
    </div>
  );
};

export default ContactPage;