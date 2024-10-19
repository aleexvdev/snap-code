"use client";

import { Select } from "@/components/ui/Select";
import { customThemes } from "@/lib/themes";
import { setTheme } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export const ThemeSelector = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { theme } = useSelector((state: RootState) => state.editor);

  const THEMES = Object.keys(customThemes);
  const themeOptions: { value: string; label: string; }[] = THEMES.map((theme) => ({
    value: theme,
    label: theme,
  }));
  

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="theme"
          className="text-sm text-muted-foreground w-[70%]"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Theme
        </label>
        <div className="w-full">
        <Select options={themeOptions} onChange={setTheme} placeholder={theme} search={true} />
        </div>
      </div>
    </div>
  )
}
