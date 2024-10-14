"use client";

import { CodeEditor } from "@/modules/codeEditor/CodeEditor";

export const MainEditor = () => {
  return (
    <main className="w-full h-[calc(100vh-110px)] polka flex items-center rounded-2xl">
      <div className="w-full h-full flex items-center justify-center">
        <CodeEditor />
      </div>
    </main>
  );
};
