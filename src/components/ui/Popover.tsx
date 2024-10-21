"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon, X } from "lucide-react";

interface PopoverProps {
  children: React.ReactNode;
  title: string;
  icon?: LucideIcon;
  position?: "top" | "bottom";
  triggerElement: React.ReactNode;
}

export const Popover = ({
  children,
  title,
  icon: Icon,
  position = "top",
  triggerElement,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopover = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full">
      <div onClick={togglePopover}>{triggerElement}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, y: position === "top" ? -10 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === "top" ? -10 : 10 }}
            transition={{ duration: 0.2 }}
            className="fixed w-full h-max right-6 bottom-28 z-50 flex flex-col items-center justify-center p-4 bg-[#e6e5e5] dark:bg-[#2e2e2e] rounded-lg shadow-2xl max-w-xs"
          >
            <div className="w-full flex items-center justify-between mb-6">
              <div className="w-full flex items-center justify-start">
                {Icon && <Icon className="w-5 h-5 mr-2" />}
                <h3 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">
                  {title}
                </h3>
              </div>

              <motion.button
                className="bg-[#d6d6d6] dark:bg-[#252525] rounded-lg p-1.5"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5 text-black/80 dark:text-white/80" />
              </motion.button>
            </div>
            <div className="w-full">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
