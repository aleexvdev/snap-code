"use client";

import { RADIUS } from "../constants/framerConstants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setRadius } from "@/redux/features/framerSlice";
import { motion } from "framer-motion";

export const RadiusSelector = () => {
  const { radius } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();

  const selectedIndex = RADIUS.findIndex(
    (option) => option.toString() === radius.toString()
  );
  const sliderVariants = {
    slide: (index: number) => ({
      x: `${index * 100}%`,
    }),
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="radius"
          className="text-sm text-muted-foreground w-[70%]"
        >
          Radius
        </label>
        <div className="w-full h-8 p-0.5 rounded-md bg-[#272727]">
          <div className="relative w-full flex items-center justify-between gap-3 flex-1 px-1 h-full overflow-hidden bg-[#272727] rounded-md">
            {RADIUS.map((item) => (
              <div key={item} className="w-1/4 flex items-center justify-center">
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/4 bg-[#404040] rounded-sm py-1 cursor-pointer"
                  custom={selectedIndex}
                  initial="slide"
                  animate="slide"
                  variants={sliderVariants}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
                <button
                  key={item}
                  className="relative z-10 w-full h-full flex items-center justify-center py-1 px-2 transition-colors cursor-pointer"
                  onClick={() => dispatch(setRadius(Number(item)))}
                >
                  <span className="text-sm text-semibold">{item}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
