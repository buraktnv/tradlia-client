import React, { FC } from "react";

const SubmitButton: FC<any> = ({ text }: any) => {
  return <button type="button" className="rounded-pill bg-brand-400 px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1">{text}</button>;
};

export default SubmitButton;
