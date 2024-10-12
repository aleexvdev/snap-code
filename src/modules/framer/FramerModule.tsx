"use client";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export const FramerModule = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2 tracking-wider">Framer</h3>
      <div className="space-y-2 ml-2">
        <div className="w-full flex items-center justify-start">
          <Label
            htmlFor="padding"
            className="w-[120px] text-sm text-muted-foreground"
          >
            Padding
          </Label>
          <Select>
            <SelectTrigger id="radius" value={"0"}>
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="32">32</SelectItem>
              <SelectItem value="64">64</SelectItem>
              <SelectItem value="128">128</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex items-center justify-start">
          <Label
            htmlFor="radius"
            className="w-[120px] text-sm text-muted-foreground"
          >
            Radius
          </Label>
          <Select>
            <SelectTrigger id="radius" value={"0"}>
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="24">24</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex items-center justify-start">
          <Label
            htmlFor="opacity"
            className="w-[120px] text-sm text-muted-foreground"
          >
            Opacity
          </Label>
          <Slider
            id="opacity"
            min={0}
            max={100}
            step={1}
            className="w-full bg-muted-foreground"
          />
        </div>
      </div>
    </div>
  );
};
