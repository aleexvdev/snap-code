"use client";

import { AppWindow } from "lucide-react";

export const TabNameSelector = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="lineNumbers"
          className="text-sm text-muted-foreground w-[70%]"
        >
          Tab Name
        </label>
        <div className="w-full h-8">
          <div className="flex gap-3 flex-1 h-full">
            <div className="w-full flex items-center justify-start px-2 py-0.5 bg-[#292929] rounded-sm">
              <AppWindow className="w-5 h-5 mr-2" />
              <input
                type="text"
                name="tabname"
                id="tabname"
                placeholder="Untitled"
                className="w-full h-full text-xs py-1 font-semibold bg-transparent rounded-sm outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
