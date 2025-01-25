import ContactHeader from "@/UiComponents/ContactPageComponents/ContactHeader";
import ContactIntro from "@/UiComponents/ContactPageComponents/ContactIntro";
import AnimationDiv from "@/UiComponents/GlobalComponent/AnimationDiv";

import React from "react";
import { lightGradients } from "../page";

const ContactPage = () => {
  const randomIndex = Math.floor(Math.random() * lightGradients.length);

  return (
    <div
      style={{
        background: lightGradients[randomIndex].background,
        color: lightGradients[randomIndex].text,
      }}
      className="flex flex-col justify-between h-dvh overflow-y-auto md:overflow-hidden md:flex-row relative"
    >
      <AnimationDiv
        background={lightGradients[randomIndex].background}
        color={lightGradients[randomIndex].text}
      />
      <ContactHeader background={lightGradients[randomIndex].background} />
      <div className="md:flex-1 md:h-full md:overflow-y-auto lg:flex lg:overflow-hidden">
        <ContactIntro />
      </div>
    </div>
  );
};

export default ContactPage;
