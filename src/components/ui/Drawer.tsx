"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer = ({ isOpen, onClose, children, title }: DrawerProps) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const variants = {
    hidden: {
      x: isLargeScreen ? "-100%" : 0,
      y: isLargeScreen ? 0 : "100%",
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className={`fixed bg-[#1A1A1A] z-50 ${
              isLargeScreen
                ? "top-0 left-0 h-full w-80"
                : "bottom-0 left-0 right-0 min-h-max rounded-t-3xl"
            }`}
          >
            <div className="mx-2 p-6">
              <div className="w-full flex items-center justify-between mb-6">
                {title && (
                  <h3 className="text-xl lg:text-sm font-semibold">
                    {title}
                  </h3>
                )}
                <motion.button
                  className="bg-[#252525] rounded-md p-1.5"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="my-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
