"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const EditorModule = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2 tracking-wider">Editor</h3>
      <div className="space-y-2 ml-2">
        <div className="w-full flex items-center justify-start">
          <Label
            htmlFor="language"
            className="w-[120px] text-sm text-muted-foreground"
          >
            Language
          </Label>
          <Select>
            <SelectTrigger id="language" value={"javascript"}>
              <SelectValue placeholder="Javascript" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="csharp">C#</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex items-center justify-start">
          <Label
            htmlFor="theme"
            className="w-[120px] text-sm text-muted-foreground"
          >
            Theme
          </Label>
          <Select>
            <SelectTrigger id="theme" value={"vscode"}>
              <SelectValue placeholder="VSCode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vscode">VSCode</SelectItem>
              <SelectItem value="github">GitHub</SelectItem>
              <SelectItem value="monokai">Monokai</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
