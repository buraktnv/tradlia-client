import { FC, ReactNode } from "react";

interface InputSelectProps {
  children: ReactNode;
}
const InputSelect: FC<InputSelectProps> = ({ children }) => (
  <div className="relative group">
    <select className="peer h-full w-full appearance-none rounded-card border border-line bg-surface px-5 py-3 pl-10 text-sm text-ink outline-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 xl:py-3.5 xl:font-medium">
      {children}
    </select>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 26.883 15.423"
      fill="currentColor"
      className="pointer-events-none absolute right-4 top-4 mr-2 h-4 w-4 rotate-180 text-brand-500 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0 xl:top-5"
    >
      <path
        d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
        transform="translate(-1630.656 -746.402)"
      />
    </svg>
  </div>
);

export default InputSelect;
