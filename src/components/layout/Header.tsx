"use client";

import React from "react";
import { Menu, ImageDown } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-background mx-4">
      <div className="text-2xl font-bold text-white">
        Sn<span className="text-orange-400">apCo</span>
        <span className="text-orange-600">de</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center gap-3 bg-blue-800 rounded-md py-2 px-5 text-white hover:bg-blue-700 transition-colors">
          <ImageDown className="w-5 h-5" />
          <span className="font-semibold text-sm">Export</span>
        </button>
        <button className="flex items-center gap-3 bg-[#252525] rounded-md py-2 px-4 text-white hover:bg-[#252525] transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
