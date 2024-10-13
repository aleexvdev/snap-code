"use client";

import { FramerModule } from "@/modules/framer/FramerModule";
import { EditorModule } from "@/modules/editor/EditorModule";

export const Sidebar = () => {

  return (
    <aside className="w-72 bg-background p-4 overflow-y-auto h-[calc(100vh-110px)] rounded-2xl">
      <div className="space-y-6 w-full h-full">
        <FramerModule />
        {/* <div className="w-full h-px bg-[#1e1e1e] my-2" /> */}
        <EditorModule />
      </div>
    </aside>
  );
};
