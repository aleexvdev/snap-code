"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronsUpDown } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
  search?: boolean;
}

export const Select = ({
  options,
  onChange,
  placeholder,
  search = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState<"top" | "bottom">("bottom");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [widthCbx, setWidthCbx] = useState("0px");
  const [leftCbx, setLeftCbx] = useState("0px");
  // const [bottomCbx, setBottomCbx] = useState("0px");
  // const [topCbx, setTopCbx] = useState("0px");

  useClickOutside(containerRef, () => setIsOpen(false));

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setPosition(
        spaceBelow > 200 || spaceBelow > spaceAbove ? "bottom" : "top"
      );
      setWidthCbx(`${rect.width}px`);
      setLeftCbx(`${rect.left}px`);
      // setBottomCbx(`${window.innerHeight - rect.bottom}px`);
      // setTopCbx(`${window.innerHeight - rect.top}px`);
    }
  }, [isOpen]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  // console.log(position);
  // console.log(position === "top" ? "top-full" : "bottom-full")
  // console.log("topppp", topCbx);
  // console.log("bottomttt", bottomCbx);
  // console.log('T1: ', window.innerHeight - Number(topCbx.split("px")[0]));
  // console.log('T2: ', window.innerHeight - Number(bottomCbx.split("px")[0]));

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        className="inline-flex items-center justify-between py-0.5 px-3 outline-none w-full appearance-none border border-transparent bg-[#f0f0f0] dark:bg-[#272727] rounded-lg h-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm text-foreground capitalize">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronsUpDown className="w-3 h-3 text-muted-foreground" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: position === "bottom" ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === "bottom" ? 10 : -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed my-1 rounded-md shadow-lg z-50`}
            style={{
              width: widthCbx,
              left: leftCbx,
            }}
          >
            <div className="bg-[#f0f0f0] dark:bg-[#272727] rounded-lg p-1 shadow-lg overflow-hidden flex flex-col gap-y-1 border-none">
              {search && (
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 bg-[#e2e1e1] dark:bg-[#161616] rounded-lg mb-1 text-sm outline-none border-none placeholder:text-[#121111c2] placeholder:dark:text-[#ccccccc2] text-[#121111] dark:text-[#CCCCCC]"
                />
              )}
              <ul className="max-h-24 lg:max-h-32 overflow-y-auto">
                {filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    className="flex items-center justify-between w-full px-0.5 py-px text-[#121111] hover:text-[#121111]/80 dark:text-[#CCCCCC]/50 hover:dark:text-[#CCCCCC] select-none cursor-pointer capitalize"
                    onClick={() => handleSelect(option)}
                  >
                    <span
                      className={`ml-2 text-sm ${
                        selectedOption?.value === option.value
                          ? "text-[#CCCCCC]"
                          : ""
                      }`}
                    >
                      {option.label}
                    </span>
                    {selectedOption?.value === option.value && (
                      <Check className="w-4 h-4 text-[#CCCCCC] mr-2" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
