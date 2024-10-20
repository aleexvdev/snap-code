"use client";

import { languageNames } from "@/lib/languages/language-names";
import { setLanguage } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "@/components/ui/Select";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

export const LanguageSelector = () => {

  const { language } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const LANGUAGES: { value: string; label: string; }[] = (Object.keys(languageNames) as LanguageName[]).map((key) => ({
    value: key,
    label: languageNames[key],
  }));

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="language"
          className="text-sm text-black dark:text-white font-medium w-[50%] lg:w-[70%]"
        >
          Language
        </label>
        <div className="w-full">
          <Select options={LANGUAGES} onChange={handleLanguageChange} placeholder={language} search={true} />
        </div>
      </div>
    </div>
  );
};
