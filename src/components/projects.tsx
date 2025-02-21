import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function ProjectsSection() {
  return (
    <section className=" mt-16 bg-slate-50 dark:bg-background/40 py-16">
      <div className="container max-w-6xl  mx-auto p-4">
        <h2 className="text-3xl font-bold gradient">My Projects</h2>
        <p className="text-muted-foreground mb-6">
          A few of my selected projects
        </p>

        {[1, 2, 3].map((_, index) => (
          <Project key={index} index={index + 1} />
        ))}
      </div>
    </section>
  );
}

const Project = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: index == 1 ? 1 : 0, y: index == 1 ? 0 : 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    viewport={{ once: true }}
  >
    <Card className="p-6 pb-0 rounded-lg border my-2">
      <div className="sm:flex  gap-8">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold mb-2">Ecommerce website</h4>
          <p className="text-muted-foreground my-4">
            A modern ecommerce platform that with Admin dashboard, add to cart,
            checkout and authentication.
          </p>

          <div className="flex flex-wrap gap-1 my-4">
            <Badge>Next js</Badge>
            <Badge>Tailwind css</Badge>
            <Badge>Prisma ORM</Badge>
            <Badge>Next Auth</Badge>
            <Badge>Mongodb</Badge>
          </div>

          <div className="flex gap-3 my-4">
            <Link href="https://fashionsence.vercel.app/" target="_blank">
              <ExternalLink />
            </Link>
            <Link
              href="https://github.com/Chegesam383/Fashionsence"
              target="_blank"
            >
              <Github />
            </Link>
          </div>
        </div>

        <div className=" w-full h-72 overflow-hidden mb-0">
          <Image
            height={300}
            width={400}
            alt="project"
            src="/fashionsence.jpeg"
            className="w-full h-full object-cover transition-all object-top drop-shadow-lg rounded rounded-br-none rounded-bl-none hover:object-bottom"
          />
        </div>
      </div>
    </Card>
  </motion.div>
);
