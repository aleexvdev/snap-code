"use client";

import { languageNames } from "@/lib/languages/language-names";
import { setLanguage } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

export const LanguageSelector = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const { language } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const LANGUAGES = Object.keys(languageNames);
  const filteredLanguages = LANGUAGES.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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

  const dropdownVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: { height: "auto", opacity: 1, overflow: "hidden" },
    exit: { height: 0, opacity: 0, overflow: "hidden" },
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="language"
          className="text-sm text-muted-foreground w-[70%]"
          onClick={() => {
            setShowDropdown(!showDropdown);
            setFilter("");
          }}
        >
          Language
        </label>
        <div className="w-full relative" ref={dropdownRef}>
          <button
            className="inline-flex items-center justify-between py-0.5 px-3 outline-none w-full appearance-none border border-transparent bg-[#292929] rounded-sm h-8"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setFilter("");
            }}
          >
            <span className="text-sm text-white capitalize">{language}</span>
            <ChevronsUpDown className="w-3 h-3 text-muted-foreground" />
          </button>
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                className="absolute w-full mt-1 right-0 z-50"
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
                  <ul className="bg-[#212121] rounded-md overflow-y-auto flex flex-col gap-y-1 outline-none max-h-36 custom-scrollbar">
                    {filteredLanguages.length > 0 ? (
                      filteredLanguages.map((item) => (
                        <li
                          key={item}
                          className="flex items-center justify-between w-full p-0.5 text-[#CCCCCC]/50 hover:text-[#CCCCCC] select-none cursor-pointer capitalize"
                          onClick={() => {
                            setShowDropdown(false);
                            dispatch(setLanguage(item.toString()));
                          }}
                        >
                          <span
                            className={`ml-2 text-sm ${
                              language.toString() === item.toString()
                                ? "text-[#CCCCCC]"
                                : ""
                            }`}
                          >
                            {item}
                          </span>
                          {language.toString() === item.toString() && (
                            <Check className="w-4 h-4 text-[#CCCCCC]" />
                          )}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-white text-center p-1">
                        No languages found
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
