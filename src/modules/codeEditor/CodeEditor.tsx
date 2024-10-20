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
  const { language, theme, lineNumbers, lineStart } = useSelector(
    (state: RootState) => state.editor
  );
  const { radius, padding, opacity, background } = useSelector(
    (state: RootState) => state.framer
  );
  const { border } = useSelector((state: RootState) => state.window);
  const editorRef = useRef(null);
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  console.log(isLoading);

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
          width: "100%",
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
      id="code-editor"
      className="min-w-max h-max flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(45deg, #252525 25%, transparent 0), linear-gradient(-45deg, #252525 25%, transparent 0), linear-gradient(45deg, transparent 75%, #252525 0), linear-gradient(-45deg, transparent 75%, #252525 0)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
        borderRadius: `${radius}px`,
      }}
    >
      <div
        className="min-w-full h-full p-8 relative"
        style={{
          // width: "500px",
          padding: `${padding}px`,
          borderRadius: `${radius}px`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: background,
            opacity: `${opacity}%`,
            borderRadius: radius + "px",
          }}
        />
        <div
          className="relative bg-[#1E1E1E] w-full h-full"
          style={{
            borderRadius: radius + "px",
            boxShadow: `${
              border
                ? "0 0 0 1px rgba(0, 0, 0, .1), 0 0 0 1px rgba(0,0,0,.9), inset 0 0 0 1.5px rgba(255, 255, 255, .4)"
                : ""
            }`,
            padding: `${border ? "3px 2px" : "0px"}`,
          }}
        >
          <div
            className="w-full h-full px-4 py-2 overflow-x-auto"
            style={{
              background: editorTheme?.settings?.background || "transparent",
              borderRadius: radius + "px",
            }}
          >
            <CodeMirror
              value={
                `const enfoque = ["optimización", "mantenibilidad", "escalabilidad", "innovación"];\nconst fortalezas = ["adaptabilidad", "persistencia", "proactividad", "análisis"];\nconst valores = ["comunicación", "eficiencia", "flexibilidad", "integridad"];\n\nconst miMetodo = [...enfoque, ...fortalezas, ...valores];\nconsole.log(` +
                '`Integrando estrategias: ${miMetodo.join(", ")}`' +
                `);\nconsole.log(hacer(trabajo(), miMetodo)); // Listo! 👽`
              }
              extensions={extensions}
              theme={editorTheme}
              basicSetup={basicSetup}
              style={{
                fontSize,
                minWidth: "100%",
                minHeight: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
