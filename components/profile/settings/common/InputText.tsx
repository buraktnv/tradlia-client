import { FC } from "react";

interface InputSearchProps {
  placeholder: string;
}

const inputClasses =
  "w-full rounded-card border border-line bg-surface px-4 py-3 pl-10 text-sm text-ink outline-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 xl:py-3.5 xl:font-medium";

const InputText: FC<InputSearchProps> = ({ placeholder }) => (
  <input type="text" className={inputClasses} placeholder={placeholder} />
);

export default InputText;
