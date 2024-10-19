"use client";

import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { PADDINGS } from "../constants/framerConstants";
import { setPadding } from "@/redux/features/framerSlice";
import { Select } from "@/components/ui/Select";

export const PaddingSelector = () => {

  const { padding } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();

  const handlePaddingChange = (value: string) => {
    dispatch(setPadding(value));
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="padding"
          className="text-sm text-muted-foreground w-[70%]"
        >
          Padding
        </label>
        <div className="w-full">
          <Select options={PADDINGS} onChange={handlePaddingChange} placeholder={padding.toString()} />
        </div>
      </div>
    </div>
  );
};
