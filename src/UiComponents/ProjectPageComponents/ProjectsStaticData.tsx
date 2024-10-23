import Chap1Img1 from '../../Statics/Images/projects/chap1_1.png'
import Chap1Img2 from '../../Statics/Images/projects/chap1_2.png'
import Chap1Img3 from '../../Statics/Images/projects/chap1_3.png'

import TcplImg1 from '../../Statics/Images/projects/tcpl1.png'
import TcplImg2 from '../../Statics/Images/projects/tcpl2.png'
import TcplImg3 from '../../Statics/Images/projects/tcpl3.jpg'

import SSEPLImg1 from '../../Statics/Images/projects/ssepl1.png'
import SSEPLImg2 from '../../Statics/Images/projects/ssepl2.png'
import SSEPLImg3 from '../../Statics/Images/projects/ssepl3.png'

import KoffeeImg1 from '../../Statics/Images/projects/koffee1.png'
import KoffeeImg2 from '../../Statics/Images/projects/koffee2.png'
import KoffeeImg3 from '../../Statics/Images/projects/koffee3.png'

import OmDental1 from '../../Statics/Images/projects/omdental (1).png'
import OmDental2 from '../../Statics/Images/projects/omdental (2).png'
import OmDental3 from '../../Statics/Images/projects/omdental (3).png'

import FashionImg1 from '../../Statics/Images/projects/90s (1).png'
import FashionImg2 from '../../Statics/Images/projects/90s (2).png'
import FashionImg3 from '../../Statics/Images/projects/90s (3).png'

import ArrayVisualizerImg1 from '../../Statics/Images/projects/arr.png'
import ArrayVisualizerImg2 from '../../Statics/Images/projects/arr.png'
import ArrayVisualizerImg3 from '../../Statics/Images/projects/arr.png'


import { StaticImageData } from 'next/image'

export type Project = {
    id: number;
    project_name: string;
    desc: string;
    role: string;
    responsibility: string;
    url: string;
    image1: StaticImageData | string;
    image2: StaticImageData | string;
    image3: StaticImageData | string;
    desc2: string;
    desc3: string;
};

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        project_name: "Chapter 01",
        desc: "A robust accounting platform built using Next.js, Zustand, and Formik, delivering a seamless user interface for managing financial operations and reports.",
        role: "Lead frontend developer",
        responsibility: "Led the frontend development, integrating state management with Zustand, form handling with Formik, and building reusable components in Next.js. Collaborated with the design and backend teams to ensure smooth user experience and optimized performance.",
        url: "https://chapter-umber.vercel.app/login",
        image1: Chap1Img1,
        image2: Chap1Img2,
        image3: Chap1Img3,
        desc2: "Implemented responsive and dynamic UI components to enhance the user experience for financial management. The platform allows users to track transactions, generate reports, and manage budgets effectively.",
        desc3: "Optimized the platform for performance and scalability, ensuring efficient handling of large financial datasets. Incorporated best practices for code maintenance and deployed features that boosted the overall UX.",
    },
    {
        id: 2,
        project_name: "TCPL - Retailer",
        desc: "A retailer management platform developed to streamline distributor-retailer payment processing, leveraging Next.js and react-hook-form for efficient form handling and user interaction.",
        role: "Lead Frontend Developer",
        responsibility: "Led the development of the frontend architecture, implementing dynamic forms using react-hook-form and ensuring seamless payment processing workflows. Worked closely with backend developers to integrate APIs and optimize the overall user experience.",
        url: "https://tapipe-admin-rho.vercel.app/login",
        image1: TcplImg1,
        image2: TcplImg2,
        image3: TcplImg3,
        desc2: "Enhanced payment processing functionality for distributors and retailers, with a focus on reducing friction in transactions and increasing overall efficiency. Developed reusable components to scale across the platform.",
        desc3: "Optimized form validation and state management, resulting in a faster and more intuitive user experience. Collaborated with the design team to ensure UI consistency and smooth user interactions.",
    },
    {
        id: 3,
        project_name: "SSEPL - Distributor Onboarding Platform",
        desc: "A platform built for distributor onboarding and financial management, integrating multiple payment services and streamlining commission-based models using Next.js and react-hook-form.",
        role: "Lead Frontend Developer",
        responsibility: "Led the development of the frontend architecture, integrating various payment gateways, and creating a seamless onboarding experience for distributors. Managed form handling with react-hook-form to ensure smooth user input validation and interaction across the platform.",
        url: "https://ssepl-admin.vercel.app",
        image1: SSEPLImg1,
        image2: SSEPLImg2,
        image3: SSEPLImg3,
        desc2: "Developed a scalable solution for managing distributor commissions and financial reports. The platform allows distributors to onboard, manage their profiles, and track financial data efficiently.",
        desc3: "Integrated multiple payment services, improving the flexibility and accessibility of financial transactions. Optimized form validations and error handling, enhancing the overall user experience.",
    },
    {
        id: 4,
        project_name: "KoffeeKodes Website Revamp",
        desc: "A complete website revamp for KoffeeKodes, focusing on advanced animations and enhancing user experience using Next.js and GSAP.",
        role: "Frontend Developer, Animation Implementation",
        responsibility: "Led the frontend redevelopment of the website using Next.js, with a focus on implementing smooth and interactive animations using GSAP. Collaborated with the design team to ensure that the animation and transitions align with the overall user experience goals.",
        url: "https://koffeekodes.in/",
        image1: KoffeeImg1,
        image2: KoffeeImg2,
        image3: KoffeeImg3,
        desc2: "Revamped the website to improve navigation and engagement, using GSAP to create animations that enhance the user experience. The website is optimized for performance, with fluid transitions and interactions.",
        desc3: "Integrated advanced animation techniques using GSAP, ensuring seamless transitions and interactive elements. Focused on optimizing the website's responsiveness and load times to enhance the overall user experience.",
    },


    {
        id: 5,
        project_name: "OM DENTAL CARE",
        desc: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        role: "Lead frontend developer",
        responsibility: "Consultation, Webflow Setup, Image Saving & Optimisation, Webflow Development, Custom CSS, Animation, SEO, Launch",
        url: "https://omdentalcare.vercel.app/",
        image1: OmDental1,
        image2: OmDental2,
        image3: OmDental3,
        desc2: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
        desc3: "A lego-inspired website I built in Webflow for Okalpha, a Cape Town based animation studio with a heart of gold.r.",
    },

    {
        id: 6,
        project_name: "90s Fashion",
        desc: "A visually engaging fashion platform showcasing 90s trends, developed using Next.js and Context API, focusing on responsiveness and high-performance user experience.",
        role: "Lead Frontend Developer",
        responsibility: "Led the development of a responsive fashion platform using Next.js, implementing state management with Context API. Optimized for performance, creating a fast and visually appealing user interface with responsive design across devices.",
        url: "https://90s-fashion.vercel.app",
        image1: FashionImg1,
        image2: FashionImg2,
        image3: FashionImg3,
        desc2: "The platform showcases iconic 90s fashion trends with a modern twist, ensuring seamless navigation and a fluid user experience across all devices. Focused on implementing dynamic components to enhance the shopping and browsing experience.",
        desc3: "Optimized for high performance, using Next.js features such as static generation and image optimization. Integrated Context API for efficient state management and improved data flow across the application.",
    },

    {
        id: 7,
        project_name: "Array Visualizer",
        desc: "An interactive educational tool built using Next.js and Redux Toolkit, designed to help users visualize and understand various JavaScript array methods in real time.",
        role: "Lead Frontend Developer",
        responsibility: "Developed an interactive array visualizer tool using Next.js and Redux Toolkit, focused on providing an educational experience for users to explore JavaScript array methods. Managed state efficiently and ensured seamless performance across different devices.",
        url: "https://array-visualizer.vercel.app",
        image1: ArrayVisualizerImg1,
        image2: ArrayVisualizerImg2,
        image3: ArrayVisualizerImg3,
        desc2: "The tool allows users to input arrays and visualize how various array methods, such as map, filter, and reduce, work in real-time. Designed with an intuitive user interface to make learning JavaScript array methods interactive and fun.",
        desc3: "Optimized for performance and user engagement with Next.js features like static generation and dynamic routing. The use of Redux Toolkit ensures smooth state management and real-time updates as users interact with the tool.",
    }


]