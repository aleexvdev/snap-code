"use client";

import { RootState } from "@/redux/store";
import { Extension } from "@codemirror/state";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import createTheme, { CreateThemeOptions } from "@uiw/codemirror-themes";
import { customThemes } from "@/lib/themes";
import * as themes from "@uiw/codemirror-themes-all";
import { color } from "@uiw/codemirror-extensions-color";

const fontSize = 16;
const lineWrapping = false;
const readOnly = false;

export const CodeEditor = () => {
  // const dispatch = useDispatch();
  const { language, theme, lineNumbers, lineStart } = useSelector(
    (state: RootState) => state.editor
  );
  const editorRef = useRef(null);
  const [extensions, setExtensions] = useState<Extension[]>([]);

  const baseExtensions: Extension[] = useMemo(
    () => [
      EditorView.lineWrapping,
      EditorView.theme({
        "&": {
          height: "100%",
          width: "500px",
        },
      }),
    ],
    []
  );

  const basicSetup = useMemo(
    () => ({
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
    }),
    [lineNumbers, lineStart]
  );

  const editorTheme = useMemo(() => {
    let themeOptions: CreateThemeOptions;

    if (theme in customThemes) {
      themeOptions = customThemes[theme].options;
    } else if (theme in themes) {
      const builtInTheme = themes[theme as keyof typeof themes];
      if (typeof builtInTheme === "function") {
        return builtInTheme();
      } else if ("extension" in builtInTheme) {
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
        // background: "transparent",
        // gutterBackground: "transparent",
        // gutterBorder: "transparent",
      },
    });
  }, [theme]);

  useEffect(() => {
    setExtensions([
      ...baseExtensions,
      color,
      langs[language as keyof typeof langs](),
      ...(lineWrapping ? [EditorView.lineWrapping] : []),
      EditorView.editable.of(!readOnly),
    ]);
  }, [language, baseExtensions]);

  return (
    <div ref={editorRef} className="flex items-center justify-center" id="code-editor">
      <div
            className="h-auto bg-white"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #252525 25%, transparent 0), linear-gradient(-45deg, #252525 25%, transparent 0), linear-gradient(45deg, transparent 75%, #252525 0), linear-gradient(-45deg, transparent 75%, #252525 0)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
              borderRadius: radius + "px",
            }}
          ></div>
      <CodeMirror
        value={`function Counter() {\n  const [count, setCount] = createSignal(0);\n  setInterval(\n      () => setCount(count() + 1),\n      1000\n  );\n  return <div>The count is {count()}</div>\n}\n`}
        extensions={extensions}
        theme={editorTheme}
        basicSetup={basicSetup}
        style={{
          fontSize,
        }}
      />
    </div>
  );
};
