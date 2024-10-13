"use client";

import { FramerModule } from "@/modules/framer/FramerModule";
import { Search } from "lucide-react";
import { Separator } from "../Separator";
import { EditorModule } from "@/modules/editor/EditorModule";

export const Sidebar = () => {
  return (
    <aside className="w-72 h-[calc(100vh-110px)] bg-[#1A1A1A] rounded-2xl px-4 py-5 flex flex-col justify-start items-start fixed overflow-y-auto space-y-4">
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
  )
}
