"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ContentTabProps {
  children: React.ReactNode;
  index: number;
  isActive: number;
  name: string;
  closeContentTab: () => void;
}

export const TabContent = ({
  isActive,
  children,
  index,
  name,
  closeContentTab,
}: ContentTabProps) => {
  return (
    isActive === index && (
      <motion.div
        className="absolute bottom-14 w-full right-0 lg:hidden z-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-full h-full px-2">
          <div className="bg-[#1A1A1A] w-full h-full max-h-80 rounded-md flex items-center justify-center px-4 py-6 overflow-y-auto">
            <div className="w-full">
              <div className="w-full flex items-center justify-between mb-6">
                <h3 className="text-lg lg:text-sm font-semibold tracking-wider">
                  {name}
                </h3>
                <motion.button
                  className="bg-[#252525] rounded-md p-1.5"
                  whileHover={{ scale: 1.1, rotate: 90 }} // Efecto suave al pasar el mouse
                  whileTap={{ scale: 0.95 }} // Efecto al hacer click
                  onClick={closeContentTab}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    )
  );
};
