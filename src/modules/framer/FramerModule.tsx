"use client";

import { BorderSelector } from "./components/BorderSelector";
import { OpacitySelector } from "./components/OpacitySelector";
import { PaddingSelector } from "./components/PaddingSelector";
import { RadiusSelector } from "./components/RadiusSelector";

export const FramerModule = () => {

  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold mb-2 tracking-wider">Framer</h3>
      <div className="space-y-3 ml-2">
        <PaddingSelector />
        <RadiusSelector />
        <OpacitySelector />
        <BorderSelector />
      </div>
    </div>
  );
};
