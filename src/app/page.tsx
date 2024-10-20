"use client";

import { MainEditor } from "@/components/MainEditor";
import { Menu } from "@/components/layout/Menu";

export default function Home() {

  return (
    <main className="flex min-h-screen mx-4">
      <Menu />
      <div className="w-full h-[calc(100vh-130px)] grid place-items-center z-10 px-4 py-6 bg-black rounded-2xl overflow-auto">
        <MainEditor />
      </div>
    </main>
  );
}
