"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { FramerModule } from "@/modules/framer/FramerModule";
import { EditorModule } from "@/modules/editor/EditorModule";

export const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <aside className="w-64 bg-background p-4 overflow-y-auto h-[calc(100vh-60px)] fixed">
      <div className="flex items-center justify-start mb-4">
        <Search className="h-5 w-5 text-muted-foreground mr-2" />
        <input
          id="search"
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border-none outline-none focus:border-none bg-background text-base text-white font-medium placeholder:text-muted-foreground"
        />
      </div>
      <div className="space-y-6">
        <FramerModule />
        <div className="w-full h-px bg-[#1e1e1e] my-2" />
        <EditorModule />
      </div>
    </aside>
  );
};
