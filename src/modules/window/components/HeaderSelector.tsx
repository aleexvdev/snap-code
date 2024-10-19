"use client";

import { toggleHeader } from "@/redux/features/windowSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

export const HeaderSelector = () => {
  const { header } = useSelector((state: RootState) => state.window);
  const dispatch = useDispatch();

  const sliderVariants = {
    show: { x: 0 },
    hide: { x: "100%" },
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="lineNumbers"
          className="text-sm text-muted-foreground w-[70%]"
        >
          Header
        </label>
        <div className="w-full h-8 bg-[#292929] p-0.5 rounded-sm">
          <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full w-1/2 bg-[#404040] rounded-sm"
              initial={header ? "show" : "hide"}
              animate={header ? "show" : "hide"}
              variants={sliderVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              className="relative z-10 w-1/2 h-full flex items-center justify-center text-xs py-1 font-semibold"
              onClick={() => dispatch(toggleHeader())}
            >
              Show
            </button>
            <button
              className="relative z-10 w-1/2 h-full flex items-center justify-center text-xs py-1 font-semibold"
              onClick={() => dispatch(toggleHeader())}
            >
              Hide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
