import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiShadcnui,
  SiTailwindcss,
  SiNodedotjs,
  SiReactquery,
  SiDrizzle,
  SiSupabase,
  SiGit,
  SiGithub,
  SiMongodb,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
const size = 20;

export const frontendTools = [
  { icon: <SiNextdotjs size={size} />, label: "Next js" },
  {
    icon: <SiReact size={size} />,
    label: "React js",
  },

  { icon: <SiTailwindcss size={size} />, label: "Tailwind css" },
  { icon: <SiShadcnui />, label: "Shadcn ui" },
];

export const backendTools = [
  { icon: <SiNodedotjs size={size} />, label: "Node.js" },

  { icon: <SiDrizzle size={size} />, label: "Drizzle " },

  { icon: <SiSupabase size={size} />, label: "Supabase" },

  { icon: <SiMongodb size={size} />, label: "Mongo DB" },
  { icon: <SiReactquery size={size} />, label: "Reactquery" },
];
export const tools = [
  { icon: <SiTypescript size={size} color="" />, label: "Typescript" },
  { icon: <SiGit size={size} />, label: "Git" },
  { icon: <SiGithub size={size} />, label: "Github" },

  {
    icon: <VscVscode size={size} className="text-cyan-700" />,
    label: "Vs code",
  },
];
