"use client";

import CodeMirror, { EditorView, Extension } from "@uiw/react-codemirror";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import createTheme, { CreateThemeOptions } from "@uiw/codemirror-themes";
import { langs } from "@uiw/codemirror-extensions-langs";
import { customThemes } from "@/lib/themes";
import * as themes from '@uiw/codemirror-themes-all';

export const CodeEditor = () => {
  const [code, setCode] = useState('console.log("Hello, SnapCode!");');
  const {  language, theme, lineNumbers, lineStart, lineWrapping } = useSelector((state: RootState) => state.editor);
  const [ extensions, setExtensions ] = useState<Extension[]>([]);

  const baseExtensions: Extension[] = useMemo(() => [
    EditorView.lineWrapping,
    EditorView.theme({
      "&": {
        height: "100%",
        width: "500px",
      }
    })
  ], []);

  const basicSetup = useMemo(() => ({
    foldGutter: false,
    foldKeymap: false,
    searchKeymap: false,
    highlightActiveLine: false,
    highlightActiveLineGutter: false,
    drawSelection: false,
    rectangularSelection: false,
    highlightSelectionMatches: false,
    allowMultipleSelections: false,
    bracketMatching: false,
    highlightSpecialChars: false,
    syntaxHighlighting: true,
    autocompletion: true,
    lineNumbers: lineNumbers,
    firstLineNumber: lineStart,
  }), [lineNumbers, lineStart]);

  /* const editorTheme = useMemo(() => {
    const baseTheme = themes[theme as keyof typeof themes] || customThemes[theme as keyof typeof customThemes] || themes.vscodeDark;
    const options = baseTheme.options;

    if (options) {
      return createTheme({
        ...options,
        settings: {
          ...options.settings,
          background: "transparent",
          gutterBackground: "transparent",
          gutterBorder: "transparent",
        },
      });
    }
    return undefined;
  }, [theme]); */
  const editorTheme = useMemo(() => {
    let themeOptions: CreateThemeOptions;

    if (theme in customThemes) {
      themeOptions = customThemes[theme].options;
    } else if (theme in themes) {
      const builtInTheme = themes[theme as keyof typeof themes];
      if (typeof builtInTheme === 'function') {
        return builtInTheme();
      } else if ('extension' in builtInTheme) {
        return builtInTheme.extension;
      } else {
        themeOptions = builtInTheme as unknown as CreateThemeOptions;
      }
    } else {
      // Fallback to a default theme
      themeOptions = customThemes.atomone.options;
    }

    return createTheme({
      ...themeOptions,
      settings: {
        ...themeOptions.settings,
        background: "transparent",
        gutterBackground: "transparent",
        gutterBorder: "transparent",
      },
    });
  }, [theme]);

  useEffect(() => {
    setExtensions([
      ...baseExtensions,
      // color,
      langs[language as keyof typeof langs](),
      ...(lineWrapping ? [EditorView.lineWrapping] : []),
      // EditorView.editable.of(!readOnly),
    ]);
  }, [language, lineWrapping, baseExtensions]);

  return (
    <div className="w-[calc(100vw-36rem)] h-[calc(100vh-110px)] px-6 flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <CodeMirror
          value={code}
          theme={editorTheme}
          extensions={extensions}
          basicSetup={basicSetup}
          onChange={(value) => setCode(value)}
        />
      </div>
    </div>
  );
};
