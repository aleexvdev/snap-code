"use client";

import { Select } from "@/components/ui/Select";
import { setFontSize } from "@/redux/features/fontSlice";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const fontSizes = [
  { value: "12px", label: "12px" },
  { value: "14px", label: "14px" },
  { value: "16px", label: "16px" },
  { value: "18px", label: "18px" },
  { value: "20px", label: "20px" },
  { value: "22px", label: "22px" },
  { value: "24px", label: "24px" },
  { value: "26px", label: "26px" },
  { value: "28px", label: "28px" },
  { value: "30px", label: "30px" },
];

export const FontSizeSelector = () => {

  const { fontSize } = useSelector((state: RootState) => state.font);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="lineNumbers"
          className="text-sm text-black dark:text-white font-medium w-[50%] lg:w-[70%]"
        >
          Font Size
        </label>
        <div className="w-full h-8">
          <Select options={fontSizes} onChange={setFontSize} placeholder={fontSize} search={true} />
        </div>
      </div>
    </div>
  );
}
