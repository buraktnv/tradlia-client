import Link from "next/link";
import type { NextPage } from "next";
import { DEV, HIRE_ME_COPY } from "../helpers/config";

const NotFound: NextPage = () => {
  return (
    <div className="flex items-center justify-center bg-canvas px-4 py-16">
      <div className="w-full max-w-lg rounded-card border border-line bg-surface p-10 text-center shadow-card sm:p-12">
        <p className="font-display text-6xl font-bold text-brand-400 sm:text-7xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{HIRE_ME_COPY.notFound}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={DEV.upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-pill bg-brand-400 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 sm:w-auto"
          >
            Hire me
          </Link>
          <Link
            href="/"
            className="w-full rounded-pill border border-line px-6 py-2.5 text-sm font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:bg-brand-50/40 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:w-auto"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
