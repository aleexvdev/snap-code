"use client";

import { LanguageSelector } from "./components/LanguageSelector";
import { LineNumberSelector } from "./components/LineNumberSelector";
import { ThemeSelector } from "./components/ThemeSelector";

export const EditorModule = () => {
  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold mb-2 tracking-wider">Editor</h3>
      <div className="space-y-3 ml-2">
        <LanguageSelector />
        <ThemeSelector />
        <LineNumberSelector />
      </div>
    </div>
  );
};
