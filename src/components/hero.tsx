import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { tools } from "@/lib/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="grid gap-4 grid-cols-4 w-full h-full grid-rows-4 mt-3 container mx-auto">
          <Card className="col-span-2 row-span-4 py-8 px-4">
            <div className="flex gap-4 justify-center">
              <div>
                <h6 className="text-5xl font-bold tracking-tight mb-3 gradient">
                  Full stack web developer
                </h6>
                <p className="text-muted-foreground mb-3">
                  Lets transform your idea into a fully functional modern and
                  user oriented web application utilizing the best technologies
                  in the market.
                </p>
              </div>
              <img
                src="sam2.jpg"
                alt="Samuel gachuki"
                height={20}
                width={20}
                className="h-40 w-40 aspect-square rounded-full"
              />
            </div>

            <Button className="group" size="sm" variant={"outline"}>
              Download Cv
              <ArrowRight
                className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </Card>
          <Card className=" col-span-1 row-span-1 flex gap-4 items-center justify-center">
            <div className="h-3 w-3 animate-pulse bg-green-600 rounded-full"></div>
            <p>Available for work and projects</p>
          </Card>
          <Card className="col-span-1 row-span-1 flex items-center p-4">
            <MapPin className="mr-3 text-red-900" /> Toronto, canada
          </Card>

          <Card className="col-span-2 row-span-3 flex flex-col p-4 ">
            <h6 className="text-3xl font-bold py-4">Tech Stack</h6>
            <div className="flex gap-6">
              {tools.map((item, index) => {
                if (index == 3)
                  return (
                    <div
                      key={item.name}
                      className="flex items-center flex-col justify-center h-10"
                    >
                      <Image
                        height={20}
                        width={40}
                        alt={item.name}
                        src={item.src}
                      />
                      <small className="text-muted-foreground">
                        {item.name}
                      </small>
                    </div>
                  );
                return (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center h-10"
                  >
                    <Image
                      height={30}
                      width={30}
                      alt={item.name}
                      src={item.src}
                    />
                    <small className="text-muted-foreground">{item.name}</small>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
