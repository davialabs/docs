import React from "react";

export const ChatIcon = () => {
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
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
      <span className="font-medium">Chat</span>
    </div>
  );
};
