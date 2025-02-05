import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold gradient">My Projects</h2>
        <p className="text-muted-foreground mb-6">A few projects i have done</p>

        <div className="p-6 rounded-lg border h-80">
          <div className="flex">
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold mb-2">Ecommerce website</h4>
              <p className="text-muted-foreground my-4">
                A modern ecommerce platform that with Admin dashboard, add to
                cart, checkout and authentication.
              </p>

              <div className="flex flex-wrap gap-1 my-4">
                <Badge>Next js</Badge>
                <Badge>Tailwind css</Badge>
                <Badge>Prisma ORM</Badge>
                <Badge>Next Auth</Badge>
                <Badge>Mongodb</Badge>
              </div>

              <div className="flex gap-3 mt-4">
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

            <div className="w-full h-72 overflow-hidden flex-1.5">
              <img
                src="fashionsence.jpeg"
                className="w-full h-full object-cover transition-all object-top drop-shadow-lg rounded hover:object-bottom -z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
