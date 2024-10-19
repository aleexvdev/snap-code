"use client";

import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BORDERS } from "../../framer/constants/framerConstants";
import { setBorder } from "@/redux/features/windowSlice";
import { Select } from "@/components/ui/Select";

export const BorderSelector = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { border } = useSelector((state: RootState) => state.window);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="border"
          className="text-sm text-muted-foreground w-[70%]"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Border
        </label>
        <div className="w-full">
          <Select options={BORDERS} onChange={setBorder} placeholder={border} />
        </div>
      </div>
    </div>
  );
};
