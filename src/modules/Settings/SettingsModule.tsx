"use client";

import { Drawer } from "@/components/ui/Drawer";
import { Computer, Languages, Menu, Moon, Palette, Sun } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";


const themesPage = [
  { id: 1, name: "Claro", setTheme: "light", icon: <Sun className="w-5 h-5" /> },
  { id: 2, name: "Oscuro", setTheme: "dark", icon: <Moon className="w-5 h-5" /> },
  { id: 3, name: "Sistema", setTheme: "system", icon: <Computer className="w-5 h-5" /> },
];

const languagesPage = [
  { id: 1, name: "Español" },
  { id: 2, name: "Inglés" },
];

export const SettingsModule = () => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isLanguage, setIsLanguage] = useState<string>("Español");
  const { theme, setTheme } = useTheme();

  const selectedIndexTheme = themesPage.findIndex(
    (option) => option.setTheme === theme
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
              <Palette className="w-5 h-5 text-[#2c2c2c] dark:text-[#dddddd]" />
              <span className="text-lg text-[#2c2c2c] dark:text-[#dddddd]">Tema</span>
            </label>
            <div className="w-full h-max p-1 rounded-lg bg-[#EEEEEE] dark:bg-[#272727]">
              <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden">
                {themesPage.map((item) => (
                  <div key={item.name} className="w-1/3 flex items-center justify-center">
                    <motion.div
                      className="absolute top-0 left-0 h-full w-1/3 bg-[#d6d6d6] dark:bg-[#404040] rounded-lg py-1 cursor-pointer"
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
                      onClick={() =>setTheme(item.setTheme)}
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
              <Languages className="w-5 h-5 text-[#2c2c2c] dark:text-[#dddddd]" />
              <span className="text-lg text-[#2c2c2c] dark:text-[#dddddd]">Idioma</span>
            </label>
            <div className="w-full h-max p-1 rounded-lg bg-[#EEEEEE] dark:bg-[#272727]">
              <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden">
                {languagesPage.map((item) => (
                  <div key={item.name} className="w-1/2 flex items-center justify-center">
                    <motion.div
                      className="absolute top-0 left-0 h-full w-1/2 bg-[#d6d6d6] dark:bg-[#404040] rounded-lg py-1 cursor-pointer"
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
