import React from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mynerve } from "next/font/google";
import { ModeToggle } from "./ui/theme-toggle";

const mynerve = Mynerve({
  variable: "--font-mynerve",
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  return (
    <header>
      <nav className="border-foreground-muted  fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-between py-2  items-center container mx-auto">
          <Link
            href="/"
            className={`text-2xl font-extrabold gradient ${mynerve.className}`}
          >
            Samuel Gachuki
          </Link>

          <div className="flex items-center">
            <Button
              className="rounded-full"
              size="icon"
              variant="ghost"
              asChild
            >
              <Link href="">
                <Github />
              </Link>
            </Button>
            <Button
              className="rounded-full"
              size="icon"
              variant="ghost"
              asChild
            >
              <Link href="">
                <Linkedin />
              </Link>
            </Button>
            <Link href="#contact-me">
              <Button className="ml-4 group" size="sm">
                Contact Me
                <ArrowRight
                  className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
