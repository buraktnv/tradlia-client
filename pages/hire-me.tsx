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
      <main className="w-full max-w-2xl rounded-card border border-line bg-surface p-6 shadow-pop sm:p-10">
        <div className="flex flex-col items-center text-center">
          <p className="flex items-center gap-2 font-display text-xs uppercase tracking-wider text-ink-muted">
            <span className="pulse-dot bg-success" aria-hidden="true" />
            AVAILABLE FOR FREELANCE
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Hi, I&apos;m {DEV.name}
          </h1>
          <p className="mt-1 text-sm font-medium text-brand-600 sm:text-base">
            {DEV.role}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
            I build fast, accessible web applications end to end with Next.js, React, and
            Node.js — and I use Python automation to keep the repetitive parts out of the
            way. From e-commerce experiences like this demo to internal tooling, I care
            about clean architecture and pixel-perfect detail.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-pill border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-600"
              >
                {tech}
              </li>
            ))}
          </ul>
          <Link
            href={DEV.upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-pill bg-brand-400 px-8 text-sm font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 active:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
          >
            Let&apos;s build something great
          </Link>
          <Link
            href="/"
            className="mt-4 inline-flex h-9 items-center justify-center rounded-pill px-4 text-xs font-medium text-ink-muted transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
          >
            ← Back to demo
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HireMe;
