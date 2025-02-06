import React from "react";
import { Card } from "./ui/card";

import { MapPin } from "lucide-react";
import { backendTools, frontendTools, tools } from "@/lib/constants";
import CV from "./Cv2";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="mt-24 max-w-7xl mx-auto">
        <div className="px-4 flex flex-col gap-4 lg:grid  grid-cols-4 w-full h-full grid-rows-4 mt-3 container mx-auto">
          <Card className="col-span-2 row-span-4 py-8 px-4">
            <div className="flex gap-4 flex-wrap sm:flex-nowrap justify-center">
              <div>
                <h6 className="text-5xl font-bold tracking-tight mb-3 gradient text-center md:text-left">
                  Fullstack Web Developer
                </h6>
                <p className="text-muted-foreground mt-4 text-center md:text-left max-w-sm">
                  Lets transform your idea into a fully functional modern and
                  user oriented web application utilizing the best technologies
                  in the market.
                </p>
              </div>
              <Image
                src="/sam2.jpg"
                alt="Samuelgachuki"
                height={200}
                width={200}
                className="h-32 w-32 lg:h-40 lg:w-40 aspect-square rounded-full"
              />
            </div>
            <div className="flex  justify-center  md:block mt-6">
              <CV />
            </div>
          </Card>
          <Card className=" col-span-1 row-span-1 flex px-4 items-center justify-centerp-4 gap-4  p-4">
            <div className="h-3 w-3 animate-pulse bg-green-600 rounded-full "></div>
            <p>Available for work and projects</p>
          </Card>
          <Card className="col-span-1 row-span-1 flex items-center p-4">
            <MapPin className="mr-3 text-red-900" /> Toronto, Canada
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
            <div className="flex gap-1 flex-wrap">
              {tools.map((Item, index) => {
                return (
                  <Technology icon={Item.icon} label={Item.label} key={index} />
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Technology = ({
  icon: Icon,
  label,
}: {
  icon: React.FC<{ className?: string }>;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-2 p-1 px-2   rounded">
      <Icon className="h-5 w-5" />
      <small className="text-muted-foreground ">{label}</small>
    </div>
  );
};
export default Hero;
