import { FC } from "react";
import { SingleTabButtonProps } from "./properties";

const SingleTabButton: FC<SingleTabButtonProps> = ({ text, icon, activeTab, setActiveTab, tab }) => {
  const isActiveTab = activeTab === tab;
  return (
    <button type="button"
      aria-pressed={isActiveTab}
      onClick={() => setActiveTab(tab)}
      className={`flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-pill px-3 py-2 text-left text-sm transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
        isActiveTab ? "bg-brand-50 font-medium text-brand-700" : "text-ink-soft hover:bg-canvas hover:text-ink"
      }`}
    >
      <span className={`h-5 w-5 shrink-0 fill-current ${isActiveTab ? "" : "text-ink-muted"}`}>{icon}</span>
      <span className="truncate">{text}</span>
    </button>
  );
};

export default SingleTabButton;
