import { Code, Database, Search } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    title: "Web Development",
    description:
      "I create responsive and user-friendly websites using next js and react js.",
    icon: Code,
    bg: "indigo-500",
  },
  {
    title: "Backend Development",
    description:
      "I Build scalable and performant APIs and backend services such as authentication.",
    icon: Database,
    bg: "indigo-500",
  },
  {
    title: "SEO Optimization",
    description:
      "I Optimize website visibility and ranking in search engine results pages.",
    icon: Search,
    bg: "indigo-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold gradient">My Services</h2>
        <p className="text-muted-foreground mb-6">
          I offer a wide variety of web development services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-4 rounded-lg transition-transform hover:scale-102"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/70 text-primary-foreground rounded-full mb-4">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
