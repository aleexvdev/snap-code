"use client";

import { RootState } from "@/redux/store";
import { Extension } from "@codemirror/state";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import createTheme from "@uiw/codemirror-themes";
import { customThemes } from "@/lib/themes";
import { color } from "@uiw/codemirror-extensions-color";

const fontSize = 16;
const lineWrapping = false;
const readOnly = false;

export const CodeEditor = () => {
  // const dispatch = useDispatch();
  const { language, theme, lineNumbers, lineStart } = useSelector(
    (state: RootState) => state.editor
  );
  const { border, radius, padding, opacity } = useSelector(
    (state: RootState) => state.framer
  );
  const editorRef = useRef(null);
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Configuración
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
    const options = customThemes[theme]?.options;
    if (options) {
      const createdTheme = createTheme({
        ...options,
        settings: {
          ...options.settings,
          background: "transparent",
          gutterBackground: "transparent",
          gutterBorder: "transparent",
        },
      });

      return {
        extension: createdTheme,
        settings: options.settings,
      };
    }
    return undefined;
  }, [theme]);

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

  useEffect(() => {
    setExtensions([
      ...baseExtensions,
      color,
      langs[language as keyof typeof langs](),
      ...(lineWrapping ? [EditorView.lineWrapping] : []),
      EditorView.editable.of(!readOnly),
    ]);
  }, [language, baseExtensions]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={editorRef}
      className="flex items-center justify-center"
      id="code-editor"
    >
      <div
        className="h-max px-4 py-2"
        style={{
          borderRadius: `${radius}px`,
          background: editorTheme?.settings?.background || "transparent",
        }}
      >
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
    </div>
  );
};
