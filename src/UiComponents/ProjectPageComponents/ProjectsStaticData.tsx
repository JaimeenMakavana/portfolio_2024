import Chap1Img1 from '../../Statics/Images/projects/chap1_1.png'
import Chap1Img2 from '../../Statics/Images/projects/chap1_2.png'
import Chap1Img3 from '../../Statics/Images/projects/chap1_3.png'

import TcplImg1 from '../../Statics/Images/projects/tcpl1.png'
import TcplImg2 from '../../Statics/Images/projects/tcpl2.png'
import TcplImg3 from '../../Statics/Images/projects//tcpl3.jpg'
import { StaticImageData } from 'next/image'

export type Project = {
    id: number;
    project_name: string;
    desc: string;
    role: string;
    responsibility: string;
    url: string;
    image1: StaticImageData;
    image2: StaticImageData;
    image3: StaticImageData;
    desc2: string;
    desc3: string;
};

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        project_name: "Chapter 01",
        desc: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        role: "Lead frontend developer",
        responsibility: "Consultation, Webflow Setup, Image Saving & Optimisation, Webflow Development, Custom CSS, Animation, SEO, Launch",
        url: "https://chapter-umber.vercel.app/login",
        image1: Chap1Img1,
        image2: Chap1Img2,
        image3: Chap1Img3,
        desc2: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        desc3: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
    },
    {
        id: 2,
        project_name: "TCPL",
        desc: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        role: "Lead frontend developer",
        responsibility: "Consultation, Webflow Setup, Image Saving & Optimisation, Webflow Development, Custom CSS, Animation, SEO, Launch",
        url: "https://tapipe-admin-rho.vercel.app/login",
        image1: TcplImg1,
        image2: TcplImg2,
        image3: TcplImg2,
        desc2: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        desc3: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
    },

    {
        id: 3,
        project_name: "SSEPL",
        desc: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        role: "Lead frontend developer",
        responsibility: "Consultation, Webflow Setup, Image Saving & Optimisation, Webflow Development, Custom CSS, Animation, SEO, Launch",
        url: "https://tapipe-admin-rho.vercel.app/login",
        image1: TcplImg1,
        image2: TcplImg2,
        image3: TcplImg3,
        desc2: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        desc3: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
    },

    {
        id: 4,
        project_name: "KOFFEEKODES",
        desc: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        role: "Lead frontend developer",
        responsibility: "Consultation, Webflow Setup, Image Saving & Optimisation, Webflow Development, Custom CSS, Animation, SEO, Launch",
        url: "https://tapipe-admin-rho.vercel.app/login",
        image1: TcplImg1,
        image2: TcplImg2,
        image3: TcplImg2,
        desc2: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        desc3: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
    },

    {
        id: 5,
        project_name: "OM DENTAL CARE",
        desc: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        role: "Lead frontend developer",
        responsibility: "Consultation, Webflow Setup, Image Saving & Optimisation, Webflow Development, Custom CSS, Animation, SEO, Launch",
        url: "https://tapipe-admin-rho.vercel.app/login",
        image1: TcplImg1,
        image2: TcplImg2,
        image3: TcplImg2,
        desc2: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        desc3: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
    },

    {
        id: 6,
        project_name: "90s Fashion",
        desc: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        role: "Lead frontend developer",
        responsibility: "Consultation, Webflow Setup, Image Saving & Optimisation, Webflow Development, Custom CSS, Animation, SEO, Launch",
        url: "https://tapipe-admin-rho.vercel.app/login",
        image1: TcplImg1,
        image2: TcplImg2,
        image3: TcplImg2,
        desc2: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        desc3: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
    },


    {
        id: 7,
        project_name: "Array Visualizer",
        desc: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        role: "Lead frontend developer",
        responsibility: "Consultation, Webflow Setup, Image Saving & Optimisation, Webflow Development, Custom CSS, Animation, SEO, Launch",
        url: "https://tapipe-admin-rho.vercel.app/login",
        image1: TcplImg1,
        image2: TcplImg2,
        image3: TcplImg2,
        desc2: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        desc3: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
    },

]