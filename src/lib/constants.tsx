import { Code, Database, Search, TabletSmartphone } from "lucide-react";
import React from "react";
import {
  SiReact,
  SiTypescript,
  SiShadcnui,
  SiTailwindcss,
  SiNodedotjs,
  SiReactquery,
  SiDrizzle,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const size = 20;

export const frontendTools = [
  {
    icon: <SiNodedotjs size={size} className="text-muted-foreground" />,
    label: "Next js",
  },
  {
    icon: <SiReact size={size} className="text-muted-foreground" />,
    label: "React js",
  },

  {
    icon: <SiTailwindcss size={size} className="text-muted-foreground" />,
    label: "Tailwind css",
  },
  {
    icon: <SiShadcnui className="text-muted-foreground" />,
    label: "Shadcn ui",
  },
];

export const backendTools = [
  {
    icon: <SiNodedotjs size={size} className="text-muted-foreground" />,
    label: "Node.js",
  },

  {
    icon: <SiDrizzle size={size} className="text-muted-foreground" />,
    label: "Drizzle ",
  },

  {
    icon: <SiPostgresql size={size} className="text-muted-foreground" />,
    label: "Postgresql",
  },

  {
    icon: <SiMongodb size={size} className="text-muted-foreground" />,
    label: "Mongo DB",
  },
  { icon: <SiReactquery size={size} />, label: "React query" },
];
export const tools = [
  {
    icon: <SiTypescript size={size} className="text-muted-foreground" />,
    label: "Typescript",
  },
  {
    icon: <SiGit size={size} className="text-muted-foreground" />,
    label: "Git",
  },
  {
    icon: <SiGithub size={size} className="text-muted-foreground" />,
    label: "Github",
  },
];

export const services = [
  {
    title: "Web and App Development",
    description:
      "I create responsive and user-friendly websites using next js and react js.",
    icon: Code,
    bg: "red-500",
  },

  {
    title: "Serch Engine Optimization",
    description:
      "I Optimize website visibility and ranking in search engine results pages.",
    icon: Search,
    bg: "green-500",
  },
  {
    title: "Responsive Design",
    description:
      "I focus using the mobile first front end development aproach to enhance user experience",
    icon: TabletSmartphone,
    bg: "indigo-500",
  },

  {
    title: "Backend Development",
    description:
      "I Build scalable and performant APIs and backend services such as authentication.",
    icon: Database,
    bg: "indigo-500",
  },
];

export const seoKeywords = [
  "samuel gachuki, samuelgachuki",
  "samuel chege",
  "samuelchege",
  "next js developers in toronto",
  "React developers in toronto",
  "top react developers in toronto",
  "top node js developers in toronto",
  "MERN stack developers in toronto",
  "T3 stack developers in toronto",
  "TypeScript developers in toronto",
  "JavaScript developers in toronto",
  "frontend developers in toronto",
  "backend developers in toronto",
  "full stack developers in toronto",
  "Next.js engineers toronto",
  "best Next.js developers toronto",
  "best React.js developers toronto",
  "top web developers in toronto",
  "web application developers toronto",
  "UI/UX designers toronto",
  "Tailwind CSS developers toronto",
  "Chakra UI experts toronto",
  "Material UI developers toronto",
  "Headless UI developers toronto",
  "styled-components experts toronto",
  "software engineers in toronto",
  "senior web developers toronto",
  "best Node.js developers in toronto",
  "Express.js developers in toronto",
  "NestJS developers toronto",
  "Fastify developers toronto",
  "Prisma ORM experts toronto",
  "tRPC developers toronto",
  "GraphQL developers toronto",
  "REST API developers toronto",
  "Vercel deployment specialists",
  "serverless developers toronto",
  "cloud-native developers toronto",
  "web performance optimization toronto",
  "React Native developers toronto",
  "Next.js SEO experts toronto",
  "web animation specialists toronto",
  "Framer Motion developers toronto",
  "Three.js developers toronto",
  "React testing library experts toronto",
  "Jest testing specialists toronto",
  "Cypress automation testing toronto",
  "Vitest developers toronto",
  "best full stack developers toronto",
  "JAMstack developers toronto",
];
