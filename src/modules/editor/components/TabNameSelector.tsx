"use client";

import React from "react";
import { setTabName } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { AppWindow } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export const TabNameSelector = () => {

  const { tabName } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const handleTabNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTabName(e.target.value));
  };

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
            <div className="w-full flex items-center justify-start px-2 py-0.5 bg-[#272727] rounded-sm text-white">
              <AppWindow className="w-5 h-5 mr-2" />
              <input
                type="text"
                name="tabname"
                id="tabname"
                placeholder={tabName}
                className="w-full h-full text-xs py-1 bg-transparent rounded-sm outline-none placeholder:text-white font-medium"
                autoComplete="off"
                value={tabName}
                onChange={handleTabNameChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
