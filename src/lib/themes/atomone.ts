import { ThemeType } from "@/types";
import { tags as t } from "@lezer/highlight";

export const atomone: ThemeType = {
  name: "Atomone",
  options: {
    theme: "dark",
    settings: {
      background: "#272C35",
      foreground: "#9d9b97",
      caret: "#797977",
      selection: "#ffffff30",
      selectionMatch: "#2B323D",
      gutterBackground: "#272C35",
      gutterForeground: "#465063",
      gutterBorder: "transparent",
      lineHighlight: "#2B323D",
    },
    styles: [
      {
        tag: [
          t.function(t.variableName),
          t.function(t.propertyName),
          t.url,
          t.processingInstruction,
        ],
        color: "hsl(207, 82%, 66%)",
      },
      { tag: [t.tagName, t.heading], color: "#e06c75" },
      { tag: t.comment, color: "#54636D" },
      { tag: [t.propertyName], color: "hsl(220, 14%, 71%)" },
      { tag: [t.attributeName, t.number], color: "hsl( 29, 54%, 61%)" },
      { tag: t.className, color: "hsl( 39, 67%, 69%)" },
      { tag: t.keyword, color: "hsl(286, 60%, 67%)" },
      {
        tag: [t.string, t.regexp, t.special(t.propertyName)],
        color: "#98c379",
      },
    ],
  },
};
