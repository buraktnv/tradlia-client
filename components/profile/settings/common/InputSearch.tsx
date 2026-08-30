import { FC } from "react";

interface InputSearchProps {
  placeholder: string;
}

const InputSearch: FC<InputSearchProps> = ({ placeholder }) => (
  <input
    type="search"
    className="w-full rounded-card border border-line bg-surface px-3 py-4 pl-10 font-medium text-ink outline-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30"
    placeholder={placeholder}
  />
);

export default InputSearch;
