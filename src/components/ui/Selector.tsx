"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface SelectorProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
  label: string;
}

export const Selector = ({ options, selected, onSelect, label }: SelectorProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  // Hook para detectar clics fuera del dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  // Variantes para la animación del dropdown
  const dropdownVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: { height: "auto", opacity: 1, overflow: "hidden" },
    exit: { height: 0, opacity: 0, overflow: "hidden" }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label
        className="text-sm text-muted-foreground"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {label}
      </label>
      <button
        className="inline-flex items-center justify-between py-0.5 px-3 outline-none w-full appearance-none border border-transparent bg-[#292929] rounded-sm h-8"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="text-sm text-white capitalize">{selected}</span>
      </button>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            className="absolute w-full mt-1 right-0 z-40"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-[#212121] rounded-md p-2 shadow-lg flex flex-col gap-y-1">
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search..."
                className="px-2 py-1 mb-2 text-sm text-white bg-[#292929] rounded-sm outline-none"
              />
              <ul className="bg-[#212121] rounded-md shadow-lg overflow-y-auto flex flex-col gap-y-1 outline-none max-h-52 custom-scrollbar">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between w-full p-0.5 text-[#CCCCCC]/50 hover:text-[#CCCCCC] select-none cursor-pointer capitalize"
                      onClick={() => {
                        setShowDropdown(false);
                        onSelect(item);
                      }}
                    >
                      <span
                        className={`ml-2 text-sm ${
                          selected === item ? "text-[#CCCCCC]" : ""
                        }`}
                      >
                        {item}
                      </span>
                      {selected === item && <Check className="w-4 h-4 text-[#CCCCCC]" />}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-white text-center p-1">
                    No options found
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
