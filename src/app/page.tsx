"use client";

// import { MainEditor } from "@/components/MainEditor";
import { Menu } from "@/components/layout/Menu";
// import { useRef } from "react";

export default function Home() {
  // const editorRef = useRef(null);

  return (
    <main className="flex min-h-screen mx-4 space-x-5">
      <Menu />
      {/* <div className="w-full flex-1">
        <MainEditor />
      </div> */}
    </main>
  );
}
