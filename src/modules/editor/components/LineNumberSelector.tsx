import { toggleLineNumbers } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

export const LineNumberSelector = () => {
  const { lineNumbers } = useSelector(
    (state: RootState) => state.editor
  );
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
          Line Number
        </label>
        <div className="w-full h-8 bg-[#272727] p-0.5 rounded-sm">
          <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full w-1/2 bg-[#404040] rounded-sm"
              initial={lineNumbers ? "show" : "hide"}
              animate={lineNumbers ? "show" : "hide"}
              variants={sliderVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              className="relative z-10 w-1/2 h-full flex items-center justify-center text-xs py-1 font-semibold"
              onClick={() => dispatch(toggleLineNumbers())}
            >
              Show
            </button>
            <button
              className="relative z-10 w-1/2 h-full flex items-center justify-center text-xs py-1 font-semibold"
              onClick={() => dispatch(toggleLineNumbers())}
            >
              Hide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
