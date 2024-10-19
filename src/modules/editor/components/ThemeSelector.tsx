"use client";

import { Select } from "@/components/ui/Select";
import { customThemes } from "@/lib/themes";
import { setTheme } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const ThemeSelector = () => {

  const { theme } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const THEMES = Object.keys(customThemes);
  const themeOptions: { value: string; label: string; }[] = THEMES.map((theme) => ({
    value: theme,
    label: theme,
  }));
  
  const handleThemeChange = (value: string) => {
    dispatch(setTheme(value));
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="theme"
          className="text-sm text-muted-foreground w-[70%]"
        >
          Theme
        </label>
        <div className="w-full">
        <Select options={themeOptions} onChange={handleThemeChange} placeholder={theme} search={true} />
        </div>
      </div>
    </div>
  )
}
