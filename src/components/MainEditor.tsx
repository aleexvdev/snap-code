"use client";

import { CodeEditor } from "@/modules/codeEditor/CodeEditor";

export const MainEditor = () => {
  return (
    <main className="w-full h-full flex items-center justify-center bg-transparent">
      <CodeEditor />
    </main>
  );
};
