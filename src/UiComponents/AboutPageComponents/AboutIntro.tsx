"use client";
import Image from "next/image";
import React from "react";
import Img1 from "@/Statics/Images/img-1 (1).jpg";
import Link from "next/link";

const AboutIntro = () => {
  return (
    <div className="py-10 px-10 md:py-28  ">
      <div className="flex justify-start items-center gap-5">
        <div>
          <h1 className="header !text-[50px]">About</h1>
          <h1 className="header mb-5">
            I&apos;m Jaimeen, a passionate React.js and Next.js Developer.
          </h1>
        </div>
        <div className="size-[100px] bg-green-200 md:hidden shrink-0">
          <div className="size-full relative">
            <Image
              src={Img1}
              alt=""
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <p className="about-paragraph text-inherit">
        Technology has always intrigued me, and I&apos;ve never hesitated to
        dive into learning new tools and frameworks, from JavaScript and
        TypeScript to cloud services like Google Cloud Platform. My journey
        began with frontend development, and over time, I&apos;ve gained deep
        expertise in building dynamic, high-performance web applications.
      </p>

      <p className="about-paragraph text-inherit">
        Fast forward to now, I&apos;ve worked across the full stack using the
        MERN stack (MongoDB, Express, React, Node), along with experience in
        state management (Redux, Zustand) and deploying on cloud platforms like
        Vercel and Netlify. My focus is not just on writing efficient code, but
        on creating intuitive user interfaces that enhance the user experience
        and solve real-world problems.
      </p>

      <p className="about-paragraph text-inherit">
        What excites me most about being a developer is the ability to build
        solutions that make an impact. It’s not just about writing code, but
        understanding the end-user, identifying the right problems to solve, and
        delivering a product that is both functional and enjoyable to use. By
        constantly iterating and improving on the initial ideas, I strive to
        ensure that the solutions I build bring real value.
      </p>

      <p className="about-paragraph text-inherit">
        This is one of my favourite quotes (by Peter Drucker):
      </p>

      <h1 className="header mb-5">
        “There is nothing so useless as doing efficiently that which should not
        be done at all.”
      </h1>

      <p className="about-paragraph">
        This resonates with me deeply because I’m not interested in building
        flashy apps for the sake of aesthetics. My drive is to build products
        that truly matter, that solve real problems, and make a lasting impact.
      </p>

      <h1 className="header mb-5">Experience</h1>

      <ul className="about-paragraph text-inherit">
        <li>- Bachelor of Technology in Chemical Engineering</li>
        <li>
          - Extensive experience in Full-Stack Development and Frontend
          Leadership ‍
        </li>
        <li className="my-5">In my career, I’ve gained expertise in: </li>
        <li>- 3+ years of experience in React.js and Next.js Development</li>
        <li>- 1+ years of experience with MongoDB, Express, and Node.js</li>
        <li>- State Management with Redux, Zustand, and Context API</li>
        <li>
          - Styling & Animation using Tailwind CSS, GSAP, and Framer Motion
        </li>
        <li>
          - Cloud deployment using Google Cloud Platform, Vercel, and Netlify
        </li>
        <li>- Database management using MongoDB and PostgreSQL</li>
      </ul>

      <h1 className="header mb-5">SKILLS</h1>

      <p className="about-paragraph text-inherit">
        JavaScript / TypeScript / React.js / Next.js / UI Development / State
        Management / API Integration / Responsive Design / GSAP Animations /
        Cloud Services (GCP, Vercel, Netlify) / Frontend Architecture / Git &
        Version Control / Agile Methodologies / Web Deployment
      </p>

      <button
        className="btn-black mb-10 text-inherit bg-inherit border border-black"
        onClick={() => window.open("/jaimeen_2024.pdf", "_blank")}
      >
        MY CV
      </button>

      <h1 className="header mb-5">KUDOS</h1>

      <p className="about-paragraph">
        I referenced the
        <Link
          href={"https://www.lauren-waller.com/"}
          target="_blank"
          className="underline cursor-pointer "
        >
          {" "}
          Lauren Waller portfolio{" "}
        </Link>{" "}
        while developing this.
      </p>

      <Link
        href="/contact"
        className="btn-black !mb-10 text-inherit text-inherit bg-inherit border border-black"
      >
        CONTACT ME
      </Link>
    </div>
  );
};

export default AboutIntro;
