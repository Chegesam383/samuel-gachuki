import * as React from "react";
import { tools } from "../lib/constants";
import { Card } from "@/components/ui/card";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import ServicesSection from "@/components/services";
import ProjectsSection from "@/components/projects";
import { ContactMe } from "@/components/contact-me";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <ContactMe />
    </>
  );
}
