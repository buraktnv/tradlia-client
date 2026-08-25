import React, { FC } from "react";

const TabItemWithNumbers: FC<any> = ({ tab, activeTab, setActiveTab, text, icon, number }) => {
  const isActive = activeTab === tab;
  const hasNumber = number !== undefined && number !== null && String(number).length > 0;
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={() => setActiveTab(tab)}
      className={`flex w-full select-none items-center gap-2.5 rounded-card border px-3 py-2.5 text-left transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
        isActive
          ? "border-brand-300 bg-brand-50 text-brand-700 shadow-card"
          : "border-line bg-surface text-ink-soft hover:border-brand-200 hover:bg-brand-50/40 hover:text-ink"
      }`}
    >
      <span className={`h-5 w-5 shrink-0 fill-current ${isActive ? "" : "text-ink-muted"}`}>{icon}</span>
      <span className={`flex-1 truncate text-sm ${isActive ? "font-medium" : ""}`}>{text}</span>
      {hasNumber && (
        <span
          className={`inline-flex min-w-[1.75rem] items-center justify-center rounded-pill px-1.5 py-0.5 font-display text-xs tabular-nums ${
            isActive ? "bg-brand-100 text-brand-700" : "bg-canvas text-ink-muted"
          }`}
        >
          {number}
        </span>
      )}
    </button>
  );
};

export default TabItemWithNumbers;
