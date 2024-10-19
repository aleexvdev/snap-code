"use client";

import { BorderSelector } from "./components/BorderSelector";
import { HeaderSelector } from "./components/HeaderSelector";

export const WindowModule = () => {
  return (
    <div className="w-full">
      <h3 className="hidden lg:block text-lg lg:text-sm font-semibold tracking-wider">
        Window
      </h3>
      <div className="space-y-4">
        <HeaderSelector />
        <BorderSelector />
      </div>
    </div>
  );
};
