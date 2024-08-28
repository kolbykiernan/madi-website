import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import The_Nest from "@/public/The_Nest.png";
import Aora from "@/public/Aora.png";
import Rest_Rant from "@/public/Rest-Rant.png";
import Guitar_Guru from "@/public/Guitar_Guru.png";
import My_Portfolio from "@/public/My_Portfolio.png";
import { StaticImageData } from "next/image";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "San Diego State University",
    location: "San Diego, CA",
    description:
      "Received a bachelor's in Economics. Extracurriculars included: Army ROTC and Sigma Alpha Epsilon fraternity.",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2017",
    url: "https://www.sdsu.edu/",
  },
  {
    title: "Sales Coordinator @ Medikeeper",
    location: "San Diego, CA",
    description:
      "Collaborated with the sales and marketing teams to source new business at a health and wellness SaaS startup.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
    url: "https://www.medikeeper.com/",
  },
  {
    title: "Sales Rep -> District Manager @ Gallo Wine Co.",
    location: "Los Angeles, CA",
    description:
      "Managed the sales and distribution of wine and spirits for a team of 12, covering 200 drug and grocery stores.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
    url: "https://www.gallo.com/",
  },
  {
    title: "Sales Engineer / Account Executive @ Boulevard",
    location: "Los Angeles, CA",
    description:
      "Worked with the sales and engineering teams at a Series C beauty and wellness SaaS company to find and present technical solutions to prospects and customers, increasing retention and reducing turnover.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
    url: "https://joinblvd.com",
  },
  {
    title: "San Diego State University",
    location: "Online",
    description:
      "While at Boulevard, I completed a full-stack Software Development Bootcamp, earning a certificate of completion. However, most of my knowledge comes from self-teaching through books, online courses, podcasts, and YouTube.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
    url: "https://www.sdsu.edu/",
  },
  {
    title: "The Nest",
    location: "Remote",
    description:
      "While completing my program, I began freelance work on 'The Nest,' a wedding-focused app for a stealth startup, which I am currently developing. I am now seeking full-time employment.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
    url: "https://welcome-to-the-nest-irdb.onrender.com/"
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  url?: string;  // Make url optional
};

export const projectsData: Project[] = [
  {
    title: "The Nest",
    description:
      "A web app to create and manage a wedding guest list by categorizing and assigning values for guests, then comparing that to venue capacity and desired attendance.",
    tags: ["React", "Express.js", "Node.js", "PostgreSQL", "React-Bootstrap"],
    imageUrl: The_Nest,
    url: "https://welcome-to-the-nest-irdb.onrender.com/"
  },
  {
    title: "Aora",
    description:
      "A mobile app that allows users to upload and view videos, bookmark favorites, and join a community of digital content sharing.", 

    tags: ["React Native", "Animatable", "Expo", "NativeWind", "Appwrite"],
    imageUrl: Aora,
    url: "https://www.loom.com/share/2893ba797ca94f9cad732159f9fd48ac?sid=a8ca8ed4-1f07-4c4b-b10e-f6084c84470d"
  },
  {
    title: "My Portfolio",
    description:
      "My portfolio was a fun project that I couldn't leave out!",
    tags: ["React", "Next.js", "TypeScript", "Framer-Motion", "Tailwind CSS", "Vercel"],
    imageUrl: My_Portfolio,
  
  },
  {
    title: "Guitar Guru",
    description:
      "A browser-based interactive experience where users learn the basics of music through piano and guitar.",
    tags: ["TypeScript", "Sass", "HTML"],
    imageUrl: Guitar_Guru,
    url: "https://kolbykiernan.github.io/Guitar-Guru/"
  },
  {
    title: "Rest-Rant",
    description:
      "A web app that allows users to share, rank, and comment on their favorite restaurants",
    tags: ["React", "Express.js", "Node.js", "MongoDB", "Bcrypt"],
    imageUrl: Rest_Rant,
    url: "https://rest-rant-27u0.onrender.com/"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "Adobe",
  "Figma",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Expo Go",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "Python3",
  "Flask",
  "MongoDB", 
  "PostgreSQL",
  "Appwrite",
  "AWS",
  "Vercel",
  "Jest",
  "Cybersecurity",
  "OAuth2",
  "JWT",
  "Bcrypt",
  "MVC Frameworks",
  "AJAX",
  "REST Operations",
  "Agile | SCRUM",
  "Jira",
  "Confluence",
  "Salesforce",
  "Data Structures",
  "Algorithms",
  "Object Oriented Programming",
  "Git",
  "Sales",
  "Management",
  "Public Speaking",
] as const;