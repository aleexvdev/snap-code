"use client";

import { FontSizeSelector } from "./components/FontSizeSelector";
import { FontStyleSelector } from "./components/FontStyleSelector";
import { FontWeightSelector } from "./components/FontWeightSelector";

export const FontModule = () => {
  return (
    <div className="w-full">
      <h3 className="hidden lg:block text-lg lg:text-sm font-semibold tracking-wider">
        Font
      </h3>
      <div className="space-y-4">
        <FontSizeSelector />
        <FontWeightSelector />
        <FontStyleSelector />
      </div>
    </div>
  );
};
