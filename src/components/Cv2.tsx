"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import CvContent from "./cv";
import { ArrowRight, Download, X } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
export default function CV() {
  const { theme, setTheme } = useTheme();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="group lg:mt-10 sm:flex justify-center"
          variant="outline"
          size="sm"
        >
          View My CV
          <ArrowRight
            className=" -me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 max-w-[95vw]  max-h[95vh] md:max-w-[760px] lg:max-w-[1000px] [&>button:last-child]:hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Samuel Gachuki cv</DialogTitle>
          <DialogDescription>
            Discover my education and work achievements
          </DialogDescription>
        </DialogHeader>
        {/* Dark Mode Toggle */}
        <div className="flex justify-between ">
          <div>
            <DialogClose className="p-4 font-bold">
              <X />
            </DialogClose>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="flex items-center space-x-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </Button>
            <Button variant="ghost">
              <a
                href="samuel-chege-cv.pdf"
                download
                className="flex items-center gap-2"
              >
                <Download /> Download{" "}
              </a>
            </Button>
          </div>
        </div>

        <ScrollArea className="flex max-h-full flex-col">
          <CvContent />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
