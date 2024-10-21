"use client";

import { CodeEditor } from "@/modules/codeEditor/CodeEditor";

export const MainEditor = () => {
  return (
    <main className="w-full h-full flex items-center justify-center bg-[#E6E6E6] dark:bg-[#0F0F0F]">
      <CodeEditor />
    </main>
  );
};
