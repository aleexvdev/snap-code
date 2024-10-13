"use client";

import { RootState } from "@/redux/store";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PADDINGS } from "../constants/framerConstants";
import { setPadding } from "@/redux/features/framerSlice";

export const PaddingSelector = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { padding } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="padding"
          className="text-sm text-muted-foreground w-[70%]"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Padding
        </label>
        <div className="w-full relative">
          <button
            className="inline-flex items-center justify-between py-0.5 px-3 outline-none w-full appearance-none border border-transparent bg-[#292929] rounded-sm h-8"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="text-sm text-white">{padding}</span>
            <ChevronsUpDown className="w-3 h-3 text-muted-foreground" />
          </button>
          {showDropdown && (
            <div className="absolute w-full mt-1 right-0 z-50">
              <ul className="bg-[#212121] rounded-md p-2 shadow-lg overflow-auto flex flex-col gap-y-1 outline-none max-h-80">
                {PADDINGS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between w-full p-0.5 text-[#CCCCCC]/50 hover:text-[#CCCCCC] select-none cursor-pointer"
                    onClick={() => {
                      setShowDropdown(false);
                      dispatch(setPadding(Number(item)));
                    }}
                  >
                    <span
                      className={`ml-2 text-sm ${
                        padding.toString() === item.toString()
                          ? "text-[#CCCCCC]"
                          : ""
                      }`}
                    >
                      {item}
                    </span>
                    {padding.toString() === item.toString() && (
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
  );
};
