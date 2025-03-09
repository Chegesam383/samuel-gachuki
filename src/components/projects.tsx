import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import * as motion from "motion/react-client";
interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
  gitUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: "E commerce Webapp",
    image: "/fashionsence.jpeg",
    description:
      "A modern ecommerce platform with add to cart,checkout and authentication and authintication.",
    url: "https://fashioncom.vercel.app/",
    gitUrl: "https://github.com/Chegesam383/Fashionsence",

    technologies: [
      "Next js",
      "Tailwind css",
      "Drizzle ORM",
      "Clerk auth",
      "Neon Db",
      "Zustand",
      "Shadcn",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="mt-1 lg:mt-16 bg-slate-50 dark:bg-background/40 py-4 lg:py-16"
      id="projects"
    >
      <div className="container max-w-6xl  mx-auto p-4">
        <h2 className="text-3xl font-bold gradient">My Projects</h2>
        <p className="text-muted-foreground mb-6">
          A few of my selected projects
        </p>

        {projects.map((project, index) => (
          <Project project={project} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

const Project = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: index == 1 ? 1 : 0, y: index == 1 ? 0 : 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    viewport={{ once: true }}
  >
    <Card className="p-6 pb-0 herocard border my-4">
      <div className="sm:flex  gap-8">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
          <p className="text-muted-foreground my-4">{project.description}</p>

          <div className="flex flex-wrap gap-1 my-4">
            {project.technologies.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>

          <div className="flex gap-3 my-4">
            <Link href={project.url} target="_blank">
              <ExternalLink />
            </Link>
            <Link href={project.gitUrl} target="_blank">
              <Github />
            </Link>
          </div>
        </div>

        <div className=" w-full h-72 overflow-hidden mb-0">
          <Image
            height={300}
            width={400}
            alt="project"
            src={project.image}
            className="w-full h-full object-cover transition-all object-top drop-shadow-lg rounded rounded-br-none rounded-bl-none hover:object-bottom"
          />
        </div>
      </div>
    </Card>
  </motion.div>
);
