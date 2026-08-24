import Link from "next/link";
import type { NextPage } from "next";
import { DEV } from "../helpers/config";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python Automation",
  "Tailwind CSS",
  "REST APIs",
];

const HireMe: NextPage = () => {
  return (
    <div className="flex justify-center px-4 py-10 xl:py-16">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-[#E5E5E5] drop-shadow-brand p-6 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-ubuntu font-bold tracking-widest text-[#4CBEC5]">
            AVAILABLE FOR FREELANCE
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-ubuntu font-bold text-[#5327A8]">
            Hi, I&apos;m {DEV.name}
          </h1>
          <p className="mt-1 text-sm sm:text-base font-ubuntu font-medium text-[#4CBEC5]">
            {DEV.role}
          </p>
          <p className="mt-4 text-sm font-ubuntu text-[#6B7280] leading-relaxed">
            I build fast, accessible web applications end to end with Next.js, React, and
            Node.js — and I use Python automation to keep the repetitive parts out of the
            way. From e-commerce experiences like this demo to internal tooling, I care
            about clean architecture and pixel-perfect detail.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-[#F2F2F2] border border-[#4CBEC5]/30 text-xs font-ubuntu font-medium text-[#5327A8]"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={DEV.upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 px-8 py-3 rounded-full bg-[#5327A8] text-white text-sm font-ubuntu font-bold hover:bg-[#431F8C] transition-colors"
          >
            Let&apos;s build something great
          </Link>
          <Link
            href="/"
            className="mt-4 text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] transition-colors"
          >
            ← Back to demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
