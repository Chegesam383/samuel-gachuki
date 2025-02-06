"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

const CvContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-slate-950 text-gray-800 dark:text-gray-100 p-8">
      <div className="w-full max-w-4xl">
        {/* CV Content */}
        <Card className="shadow-lg dark:bg-gray-800">
          <CardContent className="p-6">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold">Samuel Gachuki</h1>
              <p className="text-lg mt-2">
                905 924 5608 | Toronto, Ontario M1V 1V6
              </p>
              <p className="text-lg">
                <a
                  href="mailto:samuel.gachuki@dcmail.ca"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  samuel.gachuki@dcmail.ca
                </a>{" "}
                |{" "}
                <a
                  href="https://www.linkedin.com/in/samuel-chege-560567149/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>

            <Separator className="my-6" />

            {/* Summary */}
            <section>
              <h2 className="text-2xl font-semibold">Summary</h2>
              <p className="mt-2">
                A creative T3 (Next.js, Prisma ORM, Tailwind CSS, and
                TypeScript) software engineer with two years of hands-on
                experience. Skilled in writing clean, maintainable code and
                creating performance-optimized, secure applications.
              </p>
            </section>

            <Separator className="my-6" />

            {/* Employment History */}
            <section>
              <h2 className="text-2xl font-semibold">Employment History</h2>
              <div className="mt-4">
                <h3 className="text-xl font-bold">
                  Cloudhub Solutions, Nairobi, Kenya
                </h3>
                <p className="italic">Sept 2021 - April 2023</p>
                <p className="mt-2">
                  Developed and maintained web applications using React.js and
                  Node.js. Built cross-platform mobile apps with React Native.
                </p>

                <h3 className="font-semibold mt-4">Achievements:</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Developed UI with React.js, Next.js, and Tailwind CSS.
                  </li>
                  <li>Used TypeScript for enhanced bug detection.</li>
                  <li>
                    Built REST APIs using Express.js, MongoDB, and GraphQL.
                  </li>
                  <li>Worked closely with the development team.</li>
                </ul>
              </div>
            </section>

            <Separator className="my-6" />

            {/* Education */}
            <section>
              <h2 className="text-2xl font-semibold">Education</h2>
              <div className="mt-4">
                <h3 className="text-xl font-bold">
                  Jomo Kenyatta University of Agriculture and Technology, Kenya
                </h3>
                <p className="italic">Jan 2015 - Apr 2021</p>
                <p>Bachelor of Science in Information Technology</p>

                <h3 className="font-semibold mt-4">Achievements:</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Learned programming in C, Python, C++, Java.</li>
                  <li>
                    Worked with frontend (HTML, CSS, JS) & backend (PHP, MySQL,
                    ASP.NET).
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold">
                  Durham College, Oshawa, Ontario, Canada
                </h3>
                <p className="italic">Jan 2024 - Aug 2024</p>
                <p>Graduate Certificate in Cyber Security</p>
              </div>
            </section>

            <Separator className="my-6" />

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-semibold">Languages</h2>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>English (Fluent)</li>
                <li>Swahili (Fluent)</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CvContent;
