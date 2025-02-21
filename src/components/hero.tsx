import React from "react";
import { Card } from "./ui/card";
import { MapPin } from "lucide-react";
import { backendTools, frontendTools, tools, services } from "@/lib/constants";
import CV from "./Cv2";
import Image from "next/image";
import * as motion from "motion/react-client";
import TimeDisplay from "./timedisplay";

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
    <section className="max-w-6xl mx-auto lg:flex justify-center  px-4 mt-24 lg:mt-28">
      <motion.div
        className="flex flex-col gap-4 h-full mx-auto lg:grid lg:gap-2 grid-cols-10 grid-rows-5"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <ProfileCard />
        <LocationCard />
        <AvailabilityCard />
        <TechStackCard />
        <About />
        <Services />
      </motion.div>
    </section>
  );
};

export default Hero;

const ProfileCard = () => (
  <Card className="col-span-5 bg-muted/30 row-span-3 p-4 flex flex-col justify-between">
    <div className="flex gap-4 flex-col items-center md:flex-row flex-wrap">
      <div className="flex-1">
        <h1 className="text-lg mb-3 text-muted-foreground text-center md:text-left">
          Hi <span className=" inline-block animate-wave ">👋</span> I am{" "}
          <b className="gradient">Samuel</b> a,
        </h1>

        <p className="mb-2 gradient font-semibold tracking-wide text-xl text-center md:text-left md:max-w-[350px]">
          Fullstack Web Developer
        </p>
        <h6 className="text-5xl font-bold text-wrap tracking-tight my-5  text-center md:text-left">
          Let’s build that idea!
        </h6>
      </div>
      <div>
        <Image
          src="/sam2.jpg"
          alt="Samuelgachuki"
          height={200}
          width={200}
          className="h-28 w-28 lg:h-40 lg:w-40 aspect-square rounded-full border"
        />
      </div>
    </div>
    <div className="flex justify-center md:justify-start">
      <CV />
    </div>
  </Card>
);

const AvailabilityCard = () => (
  <Card className="col-span-3 row-span-1 bg-muted/35 flex flex-col p-2 justify-center">
    <small className="text-muted-foreground mb-2 block text-center lg:text-left">
      My Availability Status,
    </small>
    <div className="flex items-center gap-2 justify-center lg:justify-start">
      <span className="h-3 w-3 animate-pulse bg-green-600 rounded-full"></span>
      <p className="text-nowrap">Available For Work And New Projects.</p>
    </div>
  </Card>
);

const LocationCard = () => {
  return (
    <Card className="col-span-2 bg-muted/35  row-span-1 flex flex-col p-2 justify-center ">
      <small className="text-muted-foreground mb-2 block text-center lg:text-left">
        I&apos;m Based In,
      </small>
      <div className="flex justify-center lg:justify-start">
        <p className="text-nowrap flex justify-center items-center">
          <MapPin className="mr-2 text-red-900" /> Toronto, CA
          <TimeDisplay gmtOffset={-5} />
        </p>
      </div>
    </Card>
  );
};

const TechStackCard = () => (
  <Card className="col-span-3 bg-muted/40 row-span-4 flex flex-col p-2 px-4 ">
    <h3 className="text-xl font-semibold">My Tech Stack</h3>

    <div className="flex w-full h-full  flex-col justify-around ">
      <TechCategory title="Frontend tools" tools={frontendTools} />
      <TechCategory title="Backend tools" tools={backendTools} />
      <TechCategory title="Tools & productivity" tools={tools} />
    </div>
  </Card>
);

const TechCategory = ({ title, tools }: { title: string; tools: tool[] }) => (
  <motion.div>
    <h4 className="font-semibold mt-2 text-muted-foreground">{title}</h4>
    <div className="flex gap-2 flex-wrap">
      {tools.map((Item: { icon: React.ReactNode; label: string }) => (
        <Technology icon={Item.icon} label={Item.label} key={Item.label} />
      ))}
    </div>
  </motion.div>
);

const About = () => (
  <Card className="col-span-2 bg-muted/40 row-span-4 p-2">
    <h3 className="text-xl font-semibold">About Me</h3>
    <p className="tracking-widest leading-relaxed text-muted-foreground p-4 px-2">
      I am a passionate <span className="font-bold text-primary">Node.js</span>{" "}
      developer focused on building user friendly{" "}
      <span className="font-bold text-primary">
        web and mobile applications
      </span>
      . As a<span className="font-bold text-primary">&nbsp;cybersecurity</span>{" "}
      graduate, I follow a well outlined{" "}
      <span className="font-bold text-primary">
        &nbsp;secure software development life cycle.
      </span>{" "}
    </p>
  </Card>
);

const Services = () => (
  <Card className="col-span-5 bg-muted/40 row-span-2 p-4 w-full">
    <h3 className="text-xl font-semibold mb-2">My Services</h3>
    <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
      {services.map((service, index) => (
        <div
          key={index}
          className={`border-r [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r last:border-0`}
        >
          <div className="p-1 my-2 rounded-lg space-y-3">
            <div className="flex items-center justify-center w-7 h-7 bg-primary/70 text-primary-foreground rounded-full mb-4">
              <service.icon className="w-4 h-4" />
            </div>
            <h3 className="text-sm text-muted-foreground">{service.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </Card>
);
const Technology = ({ icon: Icon, label }: tool) => (
  <div className="flex items-center gap-1 p-1 px-2 rounded">
    {Icon}
    <small className="text-sm text-muted-foreground">{label}</small>
  </div>
);
