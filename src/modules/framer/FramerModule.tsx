"use client";

import { BackgroundSelector } from "./components/BackgroundSelector";
import { OpacitySelector } from "./components/OpacitySelector";
import { PaddingSelector } from "./components/PaddingSelector";
import { RadiusSelector } from "./components/RadiusSelector";

export const FramerModule = () => {
  return (
    <div className="w-full">
      <h3 className="hidden lg:block text-lg lg:text-sm font-semibold tracking-wider">
        Framer
      </h3>
      <div className="space-y-4">
        <PaddingSelector />
        <RadiusSelector />
        <BackgroundSelector />
        <OpacitySelector />
      </div>
    </div>
  );
};
