import React from "react";
import { Menu, ImageDown, Keyboard } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-background mx-4">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
        Sn
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
          apCo
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          de
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center gap-3 bg-transparent rounded-md py-2 px-5 text-white hover:bg-[#252525] transition-colors">
          <Keyboard className="w-5 h-5" />
          <span className="font-semibold text-sm">Help</span>
        </button>
        <button className="flex items-center gap-3 bg-blue-800 rounded-md py-2 px-5 text-white hover:bg-blue-700 transition-colors">
          <ImageDown className="w-5 h-5" />
          <span className="font-semibold text-sm">Export</span>
        </button>
        <button className="flex items-center gap-3 bg-[#252525] rounded-md py-2 px-4 text-white hover:bg-stone-700 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
