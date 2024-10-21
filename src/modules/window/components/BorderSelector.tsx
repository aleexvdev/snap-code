"use client";

import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toggleBorder } from "@/redux/features/windowSlice";

export const BorderSelector = () => {
  const { border } = useSelector((state: RootState) => state.window);  
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
        className="text-sm text-black dark:text-white font-medium w-[50%] lg:w-[70%]"
      >
        Border
      </label>
      <div className="w-full h-8 bg-[#f0f0f0] dark:bg-[#272727] p-0.5 rounded-lg">
        <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 bg-[#d6d6d6] dark:bg-[#404040] rounded-lg"
            initial={border ? "show" : "hide"}
            animate={border ? "show" : "hide"}
            variants={sliderVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <button
            className="relative z-10 w-1/2 h-full flex items-center justify-center text-xs py-1 font-semibold text-black dark:text-white"
            onClick={() => dispatch(toggleBorder())}
          >
            Glass
          </button>
          <button
            className="relative z-10 w-1/2 h-full flex items-center justify-center text-xs py-1 font-semibold text-black dark:text-white"
            onClick={() => dispatch(toggleBorder())}
          >
            None
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
