"use client";

import { FramerModule } from "@/modules/framer/FramerModule";
import { Code, Layers3, PanelsTopLeft, RemoveFormatting } from "lucide-react";
import { EditorModule } from "@/modules/editor/EditorModule";
import { useState } from "react";
import { motion } from "framer-motion";
import { TabContent } from "../ui/TabContent";
import { FontModule } from "@/modules/font/FontModule";
import { WindowModule } from "@/modules/window/WindowModule";

export const BottomTabNavigator = () => {
  const [isActiveTab, setIsActiveTab] = useState<number>(0);
  const tabs = [
    { id: 1, name: "Framer", icon: <Layers3 className="w-5 h-5" />, content: <FramerModule /> },
    { id: 2, name: "Editor", icon: <Code className="w-5 h-5" />, content: <EditorModule /> },
    { id: 3, name: "Window", icon: <PanelsTopLeft className="w-5 h-5" />, content: <WindowModule /> },
    { id: 4, name: "Font", icon: <RemoveFormatting className="w-5 h-5" />, content: <FontModule /> },
  ];

  const closeContentTab = () => {
    setIsActiveTab(0);
  }

  return (
    <>
      <div className="w-screen fixed bottom-2 right-0 lg:hidden">
        <div className="w-full px-2">
          <div className="relative w-full h-10 bg-[#252525] flex items-center justify-center text-white rounded-md p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`relative w-full h-full rounded-md flex items-center justify-center`}
                onClick={() => setIsActiveTab(tab.id)}
              >
                {tab.icon}
              </button>
            ))}
            {isActiveTab !== 0 && (
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
            )}
          </div>
        </div>
      </div>
      {tabs.map((tab) => (
        <TabContent key={tab.id} isActive={isActiveTab} index={tab.id} name={tab.name} closeContentTab={closeContentTab}>
          {tab.content}
        </TabContent>
      ))}
    </>
  );
};
