"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setOpacity } from "@/redux/features/framerSlice";
import React from "react";

export const OpacitySelector = () => {
  const dispatch = useDispatch();
  const { opacity } = useSelector((state: RootState) => state.framer);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="opacity"
          className="text-sm text-muted-foreground w-[70%]"
        >
          Opacity
        </label>
        <div className="w-full h-8">
          <div className="flex gap-3 flex-1 h-full">
            <div className="w-full flex items-center px-2 py-0.5 bg-[#f0f0f0] dark:bg-[#272727] rounded-lg">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                className="w-full h-0.5 rounded-sm border-none outline-none text-xs"
                value={opacity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setOpacity(Number(e.target.value)))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
