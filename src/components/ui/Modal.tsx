"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1 },
};
export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#4f4f4f] dark:bg-[#0F0F0F] bg-opacity-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="relative w-full h-max p-6 md:p-8 bg-[#fafcff] dark:bg-[#1A1A1A] rounded-3xl shadow-lg mx-2 md:max-w-md lg:max-w-lg"
        variants={modalVariants}
      >
        <div className="w-full flex items-center justify-between mb-6">
          {title && <h3 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{title}</h3>}
          <motion.button
            className="bg-[#d6d6d6] dark:bg-[#252525] rounded-lg p-1.5"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
          >
            <X className="w-5 h-5 text-black/80 dark:text-white/80" />
          </motion.button>
        </div>
        <div className="my-6">{children}</div>
      </motion.div>
    </motion.div>
  );
};
