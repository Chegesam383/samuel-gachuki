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
