"use client";

import { LanguageSelector } from "./components/LanguageSelector";
import { LineNumberSelector } from "./components/LineNumberSelector";
import { ThemeSelector } from "./components/ThemeSelector";
import { TabNameSelector } from "./components/TabNameSelector";

export const EditorModule = () => {
  return (
    <div className="w-full">
      <h3 className="hidden lg:block text-lg lg:text-sm font-semibold tracking-wider">
        Editor
      </h3>
      <div className="space-y-4">
        <LanguageSelector />
        <ThemeSelector />
        <LineNumberSelector />
        <TabNameSelector />
      </div>
    </div>
  );
};
