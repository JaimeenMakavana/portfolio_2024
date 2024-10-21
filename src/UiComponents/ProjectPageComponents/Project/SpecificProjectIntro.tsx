"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Project, PROJECTS_DATA } from '@/UiComponents/ProjectPageComponents/ProjectsStaticData'
import Image from "next/image";

const SpecificProjectIntro = () => {
  const search = useSearchParams()
  const id = Number(search.get('id'));

  const ProjectData = PROJECTS_DATA?.find((project) => project.id === id);

  return (
    <div className="px-10  md:!pb-10  ">
      <div className="h-dvh ">
        <div className="text-[--offwhite] !bg-[--charcoal] h-[90%]  marcellus flex justify-center items-center md:">
          <h1 className="text-[10vw]">{ProjectData?.project_name}</h1>
        </div>
      </div>
      <div className="flex justify-start items-center gap-5 mb-10">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="header mb-5 max-w-lg text-start  ">
            {ProjectData?.desc}
          </h1>
          <div className="max-w-lg flex flex-col md:flex-row  justify-between items-start gap-5">
            <div>
              <h1 className="underline !text-[14px]">
                ROLE
              </h1>
              <p className="text-[--charcoal] font-light text-[12px]">
                {ProjectData?.role}
              </p>
            </div>

            <div>
              <h1 className="underline !text-[14px]">
                RESPONSIBILITIES
              </h1>
              <p className="text-[--charcoal] font-light text-[12px]">
                {ProjectData?.responsibility}
              </p>
            </div>
            <div>
              <h1 className="underline !text-[14px]">
                URL
              </h1>
              <p className="text-[--charcoal] font-light text-[12px]">
                {ProjectData?.url}
              </p>
            </div>

          </div>
        </div>

      </div>
      <div className="h-dvh mb-10">
        <div className="!bg-[--offwhite] h-full  marcellus flex justify-center relative items-center ">
          <Image src={ProjectData?.image1} alt={''} width={1000} height={1000} className="object-cover object-center max-h-full max-w-full" />
        </div>
      </div>

      <div className="flex justify-start items-center gap-5 mb-10">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="max-w-lg flex justify-between items-start gap-5">
            <div>
              <p className="text-[--charcoal] font-light text-[12px] mb-5">
                {ProjectData?.desc2}
              </p>
              <p className="text-[--charcoal] font-light text-[12px] mb-5">
                {ProjectData?.desc3}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="h-dvh mb-10">
        <div className="!bg-[--offwhite] h-full  marcellus flex justify-center relative items-center ">
          <Image src={ProjectData?.image2} alt={''} width={1000} height={1000} className="object-cover object-center max-h-full max-w-full" />
        </div>
      </div>

      <div className="h-dvh mb-10">
        <div className="!bg-[--offwhite] h-full  marcellus flex justify-center relative items-center ">
          <Image src={ProjectData?.image3} alt={''} width={1000} height={1000} className="object-cover object-center max-h-full max-w-full" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <h1 className="header">Check it out.</h1>
        <button
          className="btn-black mb-10"
          onClick={() => window.open(ProjectData?.url, "_blank")}
        >
          {ProjectData?.url}
        </button>
      </div>


    </div >
  );
};

export default SpecificProjectIntro;
