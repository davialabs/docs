import React from "react";

export const PublishIcon = () => {
  return (
    <div className="inline-flex items-center gap-2 px-2 py-1 text-sm text-zinc-600 dark:text-zinc-400">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline drop-shadow-sm"
        style={{
          filter:
            "drop-shadow(0 0 2px rgba(0,0,0,0.15)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))",
        }}
      >
        {/* Tray */}
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        {/* Arrow up */}
        <path d="M17 8l-5-5-5 5" />
        <path d="M12 3v12" />
      </svg>
      <span className="font-medium">Publish</span>
    </div>
  );
};
