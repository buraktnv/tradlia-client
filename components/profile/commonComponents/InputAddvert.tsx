import React, { FC } from "react";
const InputAddvert: FC<any> = ({ placeholder, type, separate }: any) => {
  return (
    <input
      type={type}
      id="search"
      className={`appearance-none ${separate} w-full border border-line bg-surface p-2 text-sm text-ink outline-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none placeholder:font-normal placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 xl:p-3`}
      placeholder={placeholder}
      required
    />
  );
};

export default InputAddvert;
