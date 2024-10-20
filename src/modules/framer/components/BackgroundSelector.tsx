import { Popover } from "@/components/ui/Popover";
import { setBackground } from "@/redux/features/framerSlice";
import { RootState } from "@/redux/store";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { BACKGROUNDS, COLORS } from "../constants/framerConstants";

const tabsPallette = [
  { id: 1, name: "Gradientes" },
  { id: 2, name: "Colores" },
];

export const BackgroundSelector = () => {
  const [isTab, setIsTab] = useState<string>("Gradientes");
  const { background } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleBackgroundChange = (value: string) => {
    dispatch(setBackground(value));
  };

  const selectedIndexTab = tabsPallette.findIndex(
    (option) => option.name === isTab
  );
  const sliderVariantsTab = {
    slide: (index: number) => ({
      x: `${index * 100}%`,
    }),
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="padding"
          className="text-sm text-muted-foreground w-[70%]"
        >
          Background
        </label>
        <Popover
          title="Background Color"
          position="bottom"
          triggerElement={
            <div className="w-full h-8">
              <div className="flex gap-3 flex-1 h-full">
                <button
                  ref={buttonRef}
                  className="w-full flex items-center px-2 py-0.5 bg-[#272727] rounded-md"
                >
                  <span
                    className="rounded-md w-full h-5"
                    style={{ background: background }}
                  />
                </button>
              </div>
            </div>
          }
        >
          <div className="w-full bg-[#272727] p-1 rounded-md">
            <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden bg-[#272727] rounded-md">
              {tabsPallette.map((item) => (
                <div
                  key={item.name}
                  className="w-full flex items-center justify-center rounded-md"
                >
                  <motion.div
                    className="absolute top-0 left-0 h-full w-1/2 bg-[#404040] rounded-md py-1 cursor-pointer"
                    custom={selectedIndexTab}
                    initial="slide"
                    animate="slide"
                    variants={sliderVariantsTab}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                  <button
                    key={item.id}
                    className="relative z-10 w-full h-full rounded-md flex items-center justify-center gap-x-2 py-2 cursor-pointer"
                    onClick={() => setIsTab(item.name)}
                  >
                    <span className="text-sm text-semibold text-white">
                      {item.name}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full flex items-center overflow-hidden bg-[#272727] rounded-md my-4">
            <div className="w-full grid grid-cols-4 place-items-center gap-4 mt-6 mb-3">
              {isTab === "Gradientes"
                ? BACKGROUNDS.map((background, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-full w-max"
                      onClick={() => handleBackgroundChange(background)}
                    >
                      <div
                        className="w-10 h-10 rounded-full"
                        style={{ background: background }}
                      />
                    </div>
                  ))
                : COLORS.map((color, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-full w-max"
                      onClick={() => handleBackgroundChange(color)}
                    >
                      <div
                        className="rounded-full w-10 h-10"
                        style={{ background: color }}
                      />
                    </div>
                  ))}
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};
