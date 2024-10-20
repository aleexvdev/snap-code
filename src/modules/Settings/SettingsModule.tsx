"use client";

import { Drawer } from "@/components/ui/Drawer";
import { Computer, Languages, Menu, Moon, Palette, Sun } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const themesPage = [
  { id: 1, name: "Claro", icon: <Sun className="w-5 h-5" /> },
  { id: 2, name: "Oscuro", icon: <Moon className="w-5 h-5" /> },
  { id: 3, name: "Sistema", icon: <Computer className="w-5 h-5" /> },
];

const languagesPage = [
  { id: 1, name: "Español" },
  { id: 2, name: "Inglés" },
];

export const SettingsModule = () => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isLanguage, setIsLanguage] = useState<string>("Español");
  const { theme, toggleTheme } = useTheme();

  const selectedIndexTheme = themesPage.findIndex(
    (option) => option.name === theme
  );
  const sliderVariantsTheme = {
    slide: (index: number) => ({
      x: `${index * 100}%`,
    }),
  };

  const selectedIndexLanguage = languagesPage.findIndex(
    (option) => option.name === isLanguage
  );
  const sliderVariantsLanguage = {
    slide: (index: number) => ({
      x: `${index * 100}%`,
    }),
  };

  return (
    <>
      <button
        className="flex items-center gap-3 bg-[#252525] rounded-md py-1.5 px-3 md:py-2 md:px-4 text-white hover:bg-stone-700 transition-colors"
        onClick={() => setDrawerOpen(true)}
      >
        <Menu className="w-5 h-5" />
      </button>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Configuración"
      >
        <div className="mt-4 w-full flex flex-col items-center justify-start gap-y-6">
          <div className="w-full flex flex-col items-center justify-start">
            <label
              htmlFor="format"
              className="w-full mb-2 flex items-center gap-x-2"
            >
              <Palette />
              <span className="text-lg text-muted-foreground">Tema</span>
            </label>
            <div className="w-full h-max p-1 rounded-md bg-[#272727]">
              <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden bg-[#272727]">
                {themesPage.map((item) => (
                  <div key={item.name} className="w-1/3 flex items-center justify-center">
                    <motion.div
                      className="absolute top-0 left-0 h-full w-1/3 bg-[#404040] rounded-sm py-1 cursor-pointer"
                      custom={selectedIndexTheme}
                      initial="slide"
                      animate="slide"
                      variants={sliderVariantsTheme}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                    <button
                      key={item.id}
                      className="relative z-10 w-full h-full flex items-center justify-center gap-x-2 py-2 cursor-pointer"
                      onClick={toggleTheme}
                    >
                      {item.icon}
                      <span className="text-sm text-semibold">{item.name}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-start">
            <label
              htmlFor="format"
              className="w-full mb-2 flex items-center gap-x-2"
            >
              <Languages className="w-5 h-5" />
              <span className="text-lg text-muted-foreground">Idioma</span>
            </label>
            <div className="w-full h-max p-1 rounded-md bg-[#272727]">
              <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden bg-[#272727]">
                {languagesPage.map((item) => (
                  <div key={item.name} className="w-1/2 flex items-center justify-center">
                    <motion.div
                      className="absolute top-0 left-0 h-full w-1/2 bg-[#404040] rounded-sm py-1 cursor-pointer"
                      custom={selectedIndexLanguage}
                      initial="slide"
                      animate="slide"
                      variants={sliderVariantsLanguage}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                    <button
                      key={item.id}
                      className="relative z-10 w-full h-full flex items-center justify-center py-2 cursor-pointer"
                      onClick={() => setIsLanguage(item.name)}
                    >
                      <span className="text-sm text-semibold">{item.name}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
