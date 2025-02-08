import React from "react";
import { Card } from "./ui/card";
import { MapPin } from "lucide-react";
import { backendTools, frontendTools, tools, services } from "@/lib/constants";
import CV from "./Cv2";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Badge } from "./ui/badge";

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
        className="flex flex-col gap-4  h-full mx-auto lg:grid lg:gap-2 grid-cols-10 grid-rows-5"
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
  <Card className="col-span-5 row-span-3 p-4 flex flex-col justify-between">
    <div className="flex gap-4 flex-col items-center md:flex-row flex-wrap">
      <div className="flex-1">
        <h1 className="text-lg mb-3 text-muted-foreground text-center md:text-left">
          Hi <span className="text-4xl inline-block animate-wave ">👋</span> I
          am <b className="gradient">Samuel</b> a
        </h1>
        <h6 className="text-5xl font-bold text-wrap tracking-tight my-5 gradient text-center md:text-left">
          Fullstack Web Developer
        </h6>
        <p className="mb-2 tracking-wide text-md text-muted-foreground text-center md:text-left md:max-w-[350px]">
          Let’s build that idea.
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
  <Card className="col-span-3 row-span-1 flex flex-col p-2 justify-center">
    <small className="text-muted-foreground mb-2 block text-center md:text-left">
      Availability status
    </small>
    <div className="flex items-center gap-2 justify-center md:justify-start">
      <span className="h-3 w-3 animate-pulse bg-green-600 rounded-full"></span>
      <p className="text-nowrap">Available for work and new projects</p>
    </div>
  </Card>
);

const LocationCard = () => {
  function getFormattedTime(gmtOffset: number): string {
    try {
      if (!Number.isInteger(gmtOffset)) {
        throw new Error("Invalid GMT offset. Please enter an integer.");
      }

      const now = new Date();
      const utcTime = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours() + gmtOffset,
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );

      // Get day with ordinal suffix
      const day = utcTime.getDate();
      const ordinalSuffix = (d: number) =>
        ["th", "st", "nd", "rd"][
          d % 10 > 3 || [11, 12, 13].includes(d % 100) ? 0 : d % 10
        ] || "th";

      // Get month name
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = monthNames[utcTime.getMonth()];

      // Get formatted time (12-hour format)
      let hours = utcTime.getHours();
      const minutes = utcTime.getMinutes().toString().padStart(2, "0");
      const amPm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;

      return `${day}${ordinalSuffix(day)} ${month} ${hours}:${minutes} ${amPm}`;
    } catch (error) {
      return (error as Error).message;
    }
  }

  return (
    <Card className="col-span-2 row-span-1 flex flex-col p-2 justify-center ">
      <small className="text-muted-foreground mb-2 block text-center md:text-left">
        Based in
      </small>
      <div className="flex justify-center md:justify-start">
        <div className="flex items-center">
          <div className="flex flex-col">
            <p className="text-nowrap flex justify-center">
              <MapPin className="mr-2 text-red-900" /> Toronto, Canada
            </p>
            <small className="text-sm text-muted-foreground text-[10px] text-nowrap text-center ">
              &nbsp; &nbsp; {getFormattedTime(-5)} &nbsp;( -5 UTC)
            </small>
          </div>
        </div>
      </div>
    </Card>
  );
};

const TechStackCard = () => (
  <Card className="col-span-3 row-span-4 flex flex-col p-4">
    <h3 className="text-xl font-semibold">My Tech Stack</h3>
    <hr className="mt-2" />
    <div className="flex w-full flex-col items-stretch justify-between">
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

const About = () => (
  <Card className="col-span-2 row-span-4 p-2">
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
  <Card className="col-span-5 row-span-2 p-4 w-full">
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
  <Badge
    className="flex items-center gap-2 p-1 px-2 rounded"
    variant={"outline"}
  >
    {Icon}
    <small className="text-muted-foreground">{label}</small>
  </Badge>
);
