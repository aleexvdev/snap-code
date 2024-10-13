"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  setBorder,
  setOpacity,
  setPadding,
  setRadius,
} from "@/redux/features/framerSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const FramerModule = () => {
  const dispatch = useDispatch();
  const { padding, radius, opacity, border } = useSelector(
    (state: RootState) => state.framer
  );

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
          <Select
            value={padding.toString()}
            onValueChange={(value) => dispatch(setPadding(Number(value)))}
          >
            <SelectTrigger id="padding">
              <SelectValue>{padding.toString()}</SelectValue>
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
          <Select
            value={radius.toString()}
            onValueChange={(value) => dispatch(setRadius(Number(value)))}
          >
            <SelectTrigger id="radius" value={radius.toString()}>
              <SelectValue>{radius.toString()}</SelectValue>
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
            value={[opacity]}
            onValueChange={(value) => dispatch(setOpacity(Number(value)))}
          />
        </div>
        <div className="w-full flex items-center justify-start">
          <Label htmlFor="border" className="w-[120px] text-sm text-muted-foreground">
            Border
          </Label>
          <Select
            value={border}
            onValueChange={(value) => dispatch(setBorder(value))}
          >
            <SelectTrigger id="border">
              <SelectValue>{border}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="solid">Solid</SelectItem>
              <SelectItem value="dashed">Dashed</SelectItem>
              <SelectItem value="dotted">Dotted</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};