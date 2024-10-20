"use client";

import { Keyboard } from "lucide-react";
import { ExportModule } from "@/modules/Export/ExportModule";
import { SettingsModule } from "@/modules/Settings/SettingsModule";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center py-4 mx-4 md:mx-6">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800">
          Sn
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
            apCo
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
            de
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-2 relative">
          <button key={"keyboard"} className="hidden lg:flex items-center gap-3 bg-transparent rounded-md py-1.5 px-3 md:py-2 md:px-4 text-white hover:bg-[#252525] transition-colors">
            <Keyboard className="w-5 h-5" />
            <span className="font-semibold text-sm">Help</span>
          </button>
          <ExportModule key={"export"} />
          <SettingsModule key={"settings"} />
        </div>
      </header>
    </>
  );
};
