"use client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About data
const about = {
  title: "A Glimpse Into My Journey",
  description:
    "Hello! I'm Fatima, an innovative Full-Stack Web Developer with a passion for crafting seamless, dynamic web experiences. From building engaging front-end interfaces to robust back-end systems, I specialize in HTML5, CSS3, TypeScript, React.js, Next.js, and Tailwind CSS. I'm also diving deep into the exciting fields of Generative AI and Cloud Computing to stay ahead in the rapidly evolving tech world.",
  info: [
    { fieldName: "Name", fieldValue: "Fatima" },
    { fieldName: "Phone", fieldValue: "(+92) 3489078669" },
    { fieldName: "Nationality", fieldValue: "Pakistani" },
    { fieldName: "Email", fieldValue: "designerfatii@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Urdu" },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Professional Experience",
  description:
    "As a passionate web developer, I have had the opportunity to work with diverse teams and clients, creating scalable and visually captivating web applications. My expertise includes front-end development with React.js, Next.js, and styling with Tailwind CSS, as well as back-end development with Node.js. I've consistently delivered clean code, optimized performance, and exceptional user experiences.",
  items: [
    {
      company: "CodSoft Technologies",
      position: "Front-End Developer",
      duration: "2022 - 2023",
    },
    {
      company: "Freelance Web Developer",
      position: "Freelancer",
      duration: "2023 - Present",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Educational Background",
  description:
    "I am pursuing a Bachelor's degree in Computer Science, while also expanding my knowledge through specialized certifications in Full Stack Web Development and Cloud Computing.",
  items: [
    {
      institution: "Governor Intaitive For Ai and Cloud Computing",
      degree: "Cloud Applied Agentic Ai Engineer Diploma",
      duration: "2023 - 2025",
    },
    {
      institution: "SMIT",
      degree: "Web Development Diploma",
      duration: "2024 - 2025",
    },
  ],
};

// Skills data
const skills = {
  title: "Skills & Expertise",
  description:
    "I possess a versatile set of skills in both front-end and back-end technologies. Below are the core tools and technologies that I leverage to build modern, scalable, and user-friendly applications:",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className=" mt-5 w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 mt-5">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger>
                            <li className="text-center hover:scale-105 transition-all ease-in-out duration-300">
                              <div className="text-5xl">{skill.icon}</div>
                              <p className="text-lg mt-3">{skill.name}</p>
                            </li>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name} Skill</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="flex flex-col gap-[15px] mt-6">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-between text-white/60"
                      >
                        <span className="font-semibold">{info.fieldName}:</span>
                        <span>{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
