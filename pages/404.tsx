import Link from "next/link";
import type { NextPage } from "next";
import { DEV, HIRE_ME_COPY } from "../helpers/config";

const NotFound: NextPage = () => {
  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg text-center">
        <p className="text-6xl sm:text-7xl font-bold text-[#4CBEC5]">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-ubuntu font-bold text-[#5327A8]">
          Page not found
        </h1>
        <p className="mt-3 text-sm font-ubuntu text-[#6B7280] leading-relaxed">
          {HIRE_ME_COPY.notFound}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={DEV.upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#5327A8] text-white text-sm font-ubuntu font-bold hover:bg-[#431F8C] transition-colors"
          >
            Hire me
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#4CBEC5] text-[#4CBEC5] text-sm font-ubuntu font-bold hover:bg-[#4CBEC5]/10 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
