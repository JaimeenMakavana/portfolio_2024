import React from "react";

const AboutIntro = () => {
  return (
    <div className="pt-10 px-10 md:pt-28">
      <div className="flex justify-start items-center gap-5">
        <div>
          <h1 className="header !text-[50px]">About</h1>
          <h1 className="header mb-5">
            I&apos;m Lauren. A designer, maker and problem solver
          </h1>
        </div>
        <div className="size-[100px] bg-green-200 md:hidden shrink-0"></div>
      </div>
      <p className="about-paragraph">
        The cusp of art and technology has always fascinated me and I&apos;ve never
        been afraid to just jump in and give it a go, whether it&apos;s Paint,
        Photoshop, Sketch or CSS. I&apos;ve been designing with computers since
        the day I first opened Microsoft Paint.
      </p>

      <p className="about-paragraph">
        Fast forward to 2023 and I&apos;ve tried it all, from Digital Campaign
        Design and Flash Actionscript to Web Design, Animation, HTML/CSS,
        No-Code Web Development, Product Design and Product Management.
        Everything I have done, small or big, has been a vital stepping stone
        for where I am today.
      </p>

      <p className="about-paragraph">
        What excites me most about being a Product Designer is being able to
        design and create things that have purpose and solve real problems. It
        goes beyond designing buttons and websites and involves having a passion
        for designing experiences and solutions that help people, whether
        it&apos;s helping them make better videos, market themselves online, or
        buy something online. Leaning into customer insight and understanding
        their needs, finding the right problems to solve, delivering solutions
        as quickly as possible, learning from those and then iterating and
        improving that value over time is the key to great product design.
      </p>

      <p className="about-paragraph">
        This is one of my favourite quotes (by Peter Drucker):
      </p>

      <h1 className="header mb-5">
        “There is nothing so useless as doing efficiently that which should not
        be done at all.”
      </h1>

      <p className="about-paragraph">
        This resonates so deeply with me because I have no desire to make pretty
        things just for the sake of it. Some people love that! But it&apos;s not
        for me. I only want to make, design or build ideas and products that are
        real, that matter and have an impact in the world.
      </p>

      <h1 className="header mb-5">Experience</h1>

      <ul className="about-paragraph">
        <li>- Degree in Brand Communications</li>
        <li>
          - 15 years experience in Digital Design, Web Development, Advertising
          and Product Development ‍
        </li>
        <li className="my-5">Within those 15 years, I have: </li>
        <li>- 12 years experience in Web Design</li>
        <li>- 10 years experience in Software Design</li>
        <li>- 3 years experience in Front-end Web Development</li>
        <li>- 5 years experience in Webflow Development</li>
        <li>- 1 year experience in Framer Development </li>
        <li>- 4 years experience in Product Management</li>
      </ul>

      <h1 className="header mb-5">SKILLS</h1>

      <p className="about-paragraph">
        UI/UX Design / Strategy / Product Management / User Research / Agile
        Methodologies / Collaboration / Design Sprints / Design Systems / HTML
        and CSS / CMS Design & Architecture / Webflow Development / Framer
        Development / Photography / Graphic Design
      </p>

      <button className="btn-black mb-10">MY CV</button>

      <h1 className="header mb-5">KUDOS</h1>

      <p className="about-paragraph">
        Most of what is in this portfolio is team work, it&apos;s very rare
        these days to make anything great all on your own. I have only included
        work that I had a large contribution to, but whether it&apos;s design,
        ideas, UX, process, engineering, mentorship, advice or creative
        direction, the following people have influenced my growth and career
        path in a massive way: Shawn Roos, Wayne Berry, Daniel Klopper, Michael
        Thorne, Kobus Brummer, Pascal Righini, Jade Scully. THANK YOU.
      </p>

      <button className="btn-black mb-10">CONTACT ME</button>
    </div>
  );
};

export default AboutIntro;
