import React from "react";
import { Card } from "./ui/card";

import { MapPin } from "lucide-react";
import { backendTools, frontendTools, tools } from "@/lib/constants";
import CV from "./Cv2";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <div className=" flex flex-col gap-4 h-full mx-auto lg:grid grid-cols-4 grid-rows-4">
        <Card className="col-span-2 row-span-4 py-8 px-4 flex flex-col justify-between">
          <div className="flex gap-4 flex-col items-center md:flex-row flex-wrap">
            <div className="flex-1">
              <h6 className="text-5xl font-bold text-wrap tracking-tight mb-3 gradient text-center md:text-left">
                Fullstack Web Developer
              </h6>
              <p className="text-muted-foreground flex-1 text-center md:text-left md:max-w-[350px]">
                Lets transform your idea into a fully functional modern and user
                oriented web application utilizing the best technologies in the
                market.
              </p>
            </div>
            <div className="">
              <Image
                src="/sam2.jpg"
                alt="Samuelgachuki"
                height={200}
                width={200}
                className="h-32 w-32 lg:h-40 lg:w-40 aspect-square rounded-full"
              />
            </div>
          </div>
          <div className="flex  justify-center  md:justify-start mt-6">
            <CV />
          </div>
        </Card>
        <Card className=" col-span-1 row-span-1 flex px-2 items-center justify-centerp-4 gap-4  py-4">
          <div className="h-3 w-3 animate-pulse bg-green-600 rounded-full "></div>
          <p>Available for work and projects</p>
        </Card>
        <Card className="col-span-1 row-span-1 flex items-center px-2 py-4">
          <MapPin className="mr-3 text-red-900" /> Toronto, Canada
          <span className="text-muted-foreground text-sm">
            &nbsp;&nbsp;-5 GMT
          </span>
        </Card>

        <Card className="col-span-2 row-span-3 flex flex-col py-2 px-4 ">
          <h3 className="text-xl font-semibold "> My Tech Stack </h3>
          <hr className="mt-2" />
          <h4 className="font-bold my-2 text-muted-foreground ">Frontend</h4>
          <div className="flex gap-1 flex-wrap">
            {frontendTools.map((Item, index) => {
              return (
                <Technology icon={Item.icon} label={Item.label} key={index} />
              );
            })}
          </div>

          <h4 className="font-bold my-2 text-muted-foreground ">Backend</h4>
          <div className="flex gap-1 flex-wrap">
            {backendTools.map((Item, index) => {
              return (
                <Technology icon={Item.icon} label={Item.label} key={index} />
              );
            })}
          </div>

          <h4 className="font-bold my-2 text-muted-foreground ">Tools</h4>
          <div className="flex gap-1 flex-wrap mb-2">
            {tools.map((Item, index) => {
              return (
                <Technology icon={Item.icon} label={Item.label} key={index} />
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};

const Technology = ({
  icon: Icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-2 p-1 px-2   rounded">
      {Icon}
      <small className="text-muted-foreground ">{label}</small>
    </div>
  );
};
export default Hero;
