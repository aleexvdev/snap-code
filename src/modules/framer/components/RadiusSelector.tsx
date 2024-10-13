"use client";

import { RADIUS } from "../constants/framerConstants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setRadius } from "@/redux/features/framerSlice";

export const RadiusSelector = () => {
  const { radius } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="radius"
          className="text-sm text-muted-foreground w-[70%]"
        >
          Radius
        </label>
        <div className="w-full h-8">
          <div className="flex gap-3 flex-1 h-full">
            <div className="w-full flex items-center px-0.5 py-0.5 bg-[#292929] rounded-sm">
              {RADIUS.map((item) => (
                <button
                  key={item}
                  className={`h-full flex items-center justify-center px-1 py-1 w-full rounded-sm text-sm ${
                    radius.toString() === item.toString() ? "bg-[#404040]" : ""
                  }`}
                  onClick={() => dispatch(setRadius(Number(item)))}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
