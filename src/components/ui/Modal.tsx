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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="relative w-full h-max p-6 bg-[#1A1A1A] rounded-lg shadow-lg mx-2"
        variants={modalVariants}
      >
        <div className="w-full flex items-center justify-between mb-6">
          {title && <h3 className="text-xl lg:text-sm font-semibold">{title}</h3>}
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
      </motion.div>
    </motion.div>
  );
};
