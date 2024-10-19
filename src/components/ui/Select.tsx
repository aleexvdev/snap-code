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
}

export const Select = ({ options, onChange, placeholder }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState<"top" | "bottom">("bottom");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setPosition(
        spaceBelow > 200 || spaceBelow > spaceAbove ? "bottom" : "top"
      );
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

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        className="inline-flex items-center justify-between py-0.5 px-3 outline-none w-full appearance-none border border-transparent bg-[#292929] rounded-sm h-8"
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
            className={`fixed ${
              position === "bottom" ? "top-full" : "bottom-12"
            } left-0 w-full my-1 bg-popover border border-border rounded-md shadow-lg z-[99999]`}
          >
            <div className="bg-[#212121] rounded-md p-1 shadow-lg overflow-hidden flex flex-col gap-y-1">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 bg-[#292929] text-foreground rounded-sm mb-1 text-sm outline-none"
              />
              <ul className="max-h-32 overflow-y-auto">
                {filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    className="flex items-center justify-between w-full px-0.5 py-px text-[#CCCCCC]/50 hover:text-[#CCCCCC] select-none cursor-pointer capitalize"
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
                      <Check className="w-4 h-4 text-[#CCCCCC]" />
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
