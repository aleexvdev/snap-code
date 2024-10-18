"use client";

import { FramerModule } from "@/modules/framer/FramerModule";
import { Code, Layers3, PanelsTopLeft, Search } from "lucide-react";
import { Separator } from "./Separator";
import { EditorModule } from "@/modules/editor/EditorModule";
import { useState } from "react";
import { motion } from "framer-motion";

export const Sidebar = () => {
  const [isActiveTab, setIsActiveTab] = useState<number>(0);
  const tabs = [
    { id: 1, icon: <Layers3 className="w-5 h-5" /> },
    { id: 2, icon: <Code className="w-5 h-5" /> },
    { id: 3, icon: <PanelsTopLeft className="w-5 h-5" /> },
  ];

  return (
    <>
      <aside className="hidden lg:flex w-72 h-[calc(100vh-110px)] bg-[#1A1A1A] rounded-2xl px-4 py-5 flex-col justify-start items-start overflow-y-auto space-y-4">
        <div className="w-full h-max mb-2">
          <div className="flex items-center justify-between h-10 bg-transparent w-full border-b border-[#292929]">
            <Search className="w-5 h-5 text-white" />
            <input
              className="w-full h-8 mx-2 pl-2 text-white outline-none bg-transparent"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <FramerModule />
        <Separator />
        <EditorModule />
      </aside>
      <div className="w-screen fixed bottom-2 right-0 lg:hidden">
        <div className="w-full px-2">
          <div className="relative w-full h-10 bg-[#252525] px-1 flex items-center justify-center text-white rounded-md p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`relative w-full h-full rounded-md flex items-center justify-center`}
                onClick={() => setIsActiveTab(tab.id)}
              >
                {tab.icon}
              </button>
            ))}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-white"
              layout
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{
                width: `${100 / tabs.length}%`,
                left: `${(isActiveTab - 1) * (100 / tabs.length)}%`,
              }}
            />
          </div>
        </div>
      </div>
      {isActiveTab === 1 && (
        <motion.div
          className="absolute bottom-14 w-full right-0 lg:hidden"
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          exit={{ y: 300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="w-full h-full px-2">
            <div className="bg-[#1A1A1A] w-full h-full max-h-60 rounded-md flex items-center justify-center px-4 py-6 overflow-y-auto">
              <FramerModule />
            </div>
          </div>
        </motion.div>
      )}
      {isActiveTab === 2 && (
        <motion.div
          className="absolute bottom-14 w-full right-0 lg:hidden"
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          exit={{ y: 300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="w-full h-full px-2">
            <div className="bg-[#1A1A1A] w-full h-full max-h-60 rounded-md flex items-center justify-center px-4 py-6 overflow-y-auto">
              <EditorModule />
            </div>
          </div>
        </motion.div>
      )}
      {isActiveTab === 3 && (
        <motion.div
          className="absolute bottom-14 w-full right-0 lg:hidden"
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          exit={{ y: 300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="w-full h-full px-2">
            <div className="bg-[#1A1A1A] w-full h-full max-h-60 rounded-md flex items-center justify-center px-4 py-6 overflow-y-auto">
              <FramerModule />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
