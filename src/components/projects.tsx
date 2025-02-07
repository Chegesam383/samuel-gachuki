import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function ProjectsSection() {
  return (
    <section className="max-w-6xl mx-auto p-4 my-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold gradient">My Projects</h2>
        <p className="text-muted-foreground mb-6">A few projects i have done</p>

        {[1, 2, 3].map((_, index) => (
          <Project key={index} />
        ))}
      </div>
    </section>
  );
}

const Project = () => (
  <Card className="p-6 pb-0 rounded-lg border my-2">
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="sm:flex"
    >
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
          height={400}
          width={600}
          alt="project"
          src="/fashionsence.jpeg"
          className="w-full h-full object-cover transition-all object-top drop-shadow-lg rounded rounded-br-none rounded-bl-none hover:object-bottom"
        />
      </div>
    </motion.div>
  </Card>
);
