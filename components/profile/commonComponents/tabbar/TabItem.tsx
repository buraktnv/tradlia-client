import React, { FC } from "react";

const TabItem: FC<any> = ({ tab, activeTab, setActiveTab, text, icon }) => {
  const isActive = activeTab === tab;
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={() => setActiveTab(tab)}
      className={`flex w-full select-none items-center gap-2.5 rounded-card border px-3 py-2.5 text-left transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
        isActive
          ? "border-brand-300 bg-brand-50 text-brand-700"
          : "border-line bg-surface text-ink-soft hover:border-brand-200 hover:bg-brand-50/40 hover:text-ink"
      }`}
    >
      <span className={`h-5 w-5 shrink-0 fill-current ${isActive ? "" : "text-ink-muted"}`}>{icon}</span>
      <span className={`truncate text-sm ${isActive ? "font-medium" : ""}`}>{text}</span>
    </button>
  );
};

export default TabItem;
