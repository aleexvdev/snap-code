"use client";

import { MainEditor } from "@/components/MainEditor";
import { Menu } from "@/components/layout/Menu";

export default function Home() {

  return (
    <main className="flex min-h-screen mx-4 md:mx-6">
      <Menu />
      <div className="w-full h-[calc(100vh-180px)] mt-3 lg:mt-6 grid place-items-center z-10 px-4 py-6 bg-[#E6E6E6] dark:bg-[#0F0F0F] rounded-2xl overflow-auto">
        <MainEditor />
      </div>
    </main>
  );
}
