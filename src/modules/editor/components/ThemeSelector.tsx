"use client";

import { customThemes } from "@/lib/themes";
import { setTheme } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ThemeSelector = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { theme } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();  
  const THEMES = Object.keys(customThemes);


  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="theme"
          className="text-sm text-muted-foreground w-[70%]"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Theme
        </label>
        <div className="w-full relative">
          <button
            className="inline-flex items-center justify-between py-0.5 px-3 outline-none w-full appearance-none border border-transparent bg-[#292929] rounded-sm h-8"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="text-sm text-white capitalize">{theme}</span>
            <ChevronsUpDown className="w-3 h-3 text-muted-foreground" />
          </button>
          {showDropdown && (
            <div className="absolute w-full mt-1 right-0 z-50">
              <ul className="bg-[#212121] rounded-md p-2 shadow-lg overflow-y-auto flex flex-col gap-y-1 outline-none max-h-80">
                {THEMES.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between w-full p-0.5 text-[#CCCCCC]/50 hover:text-[#CCCCCC] select-none cursor-pointer capitalize"
                    onClick={() => {
                      setShowDropdown(false);
                      dispatch(setTheme(item));
                    }}
                  >
                    <span
                      className={`ml-2 text-sm ${
                        theme.toString() === item.toString()
                          ? "text-[#CCCCCC]"
                          : ""
                      }`}
                    >
                      {item}
                    </span>
                    {theme.toString() === item.toString() && (
                      <Check className="w-4 h-4 text-[#CCCCCC]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
