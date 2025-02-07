import React from "react";
import { Card } from "./ui/card";
import { MapPin } from "lucide-react";
import { backendTools, frontendTools, tools } from "@/lib/constants";
import CV from "./Cv2";
import Image from "next/image";
import * as motion from "motion/react-client";

export type tool = {
  icon: React.ReactNode;
  label: string;
};

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-20">
      <motion.div
        className="flex flex-col gap-4  h-full mx-auto lg:grid lg:gap-2 grid-cols-4 grid-rows-6"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <ProfileCard />
        <AvailabilityCard />
        <LocationCard />
        <TechStackCard />
      </motion.div>
    </section>
  );
};

export default Hero;

const ProfileCard = () => (
  <Card className="col-span-2 row-span-6 p-4 flex flex-col justify-between">
    <div className="flex gap-4 flex-col items-center md:flex-row flex-wrap">
      <div className="flex-1">
        <h1 className="text-lg mb-3 text-muted-foreground text-center md:text-left">
          Hi <span className="text-4xl inline-block animate-wave ">👋</span> I
          am <b className="gradient">Samuel</b> a
        </h1>
        <h6 className="text-5xl font-bold text-wrap tracking-tight mb-2 gradient text-center md:text-left">
          Fullstack Web Developer
        </h6>
        <p className="mb-2 tracking-wide text-md text-muted-foreground text-center md:text-left md:max-w-[350px]">
          Let’s transform your idea into a fully functional modern and
          user-oriented web application utilizing the best technologies in the
          market.
        </p>
      </div>
      <div>
        <Image
          src="/sam2.jpg"
          alt="Samuelgachuki"
          height={200}
          width={200}
          className="h-32 w-32 lg:h-40 lg:w-40 aspect-square rounded-full"
        />
      </div>
    </div>
    <div className="flex justify-center md:justify-start">
      <CV />
    </div>
  </Card>
);

const AvailabilityCard = () => (
  <Card className="col-span-1 row-span-1 flex p-2 items-center justify-center  gap-2">
    <div className="h-3 w-3 animate-pulse bg-green-600 rounded-full"></div>
    <p className="text-nowrap">Available for work & projects</p>
  </Card>
);

const LocationCard = () => (
  <Card className="col-span-1 row-span-1 flex items-center justify-center   p-2">
    <MapPin className="mr-3 text-red-900" /> Toronto, Canada
    <span className="text-muted-foreground text-sm">
      {" "}
      &nbsp;&nbsp;-5 hrs GMT
    </span>
  </Card>
);

const TechStackCard = () => (
  <Card className="col-span-2 row-span-5 flex flex-col p-4">
    <h3 className="text-xl font-semibold">My Tech Stack</h3>
    <hr className="mt-2" />
    <div className="flex w-full flex-col justify-between">
      <TechCategory title="Frontend" tools={frontendTools} />
      <TechCategory title="Backend" tools={backendTools} />
      <TechCategory title="Tools" tools={tools} />
    </div>
  </Card>
);

const TechCategory = ({ title, tools }: { title: string; tools: tool[] }) => (
  <motion.div>
    <h4 className="font-bold my-2 text-muted-foreground">{title}</h4>
    <div className="flex gap-1 flex-wrap">
      {tools.map((Item: { icon: React.ReactNode; label: string }) => (
        <Technology icon={Item.icon} label={Item.label} key={Item.label} />
      ))}
    </div>
  </motion.div>
);

const Technology = ({ icon: Icon, label }: tool) => (
  <div className="flex items-center gap-2 p-1 px-2 rounded">
    {Icon}
    <small className="text-muted-foreground">{label}</small>
  </div>
);
