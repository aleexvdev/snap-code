"use client";

import { Menu, ImageDown, Keyboard } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  ExportFormat,
  ExportScale,
  setExportFormat,
  setExportScale,
} from "@/redux/features/exportSlice";
import { useState } from "react";
import * as htmlToImage from "html-to-image";

const formats = ["png", "svg", "jpeg"];
const scales = ["1", "2", "3"];

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { format, scale } = useSelector((state: RootState) => state.export);
  const dispatch = useDispatch();

  const handleExport = async () => {
    const node = document.getElementById("code-editor");
    if (!node) return;

    try {
      let dataUrl;
      switch (format) {
        case "png":
          dataUrl = await htmlToImage.toPng(node, {
            pixelRatio: parseInt(scale),
          });
          break;
        case "jpeg":
          dataUrl = await htmlToImage.toJpeg(node, {
            pixelRatio: parseInt(scale),
          });
          break;
        case "svg":
          dataUrl = await htmlToImage.toSvg(node, {
            pixelRatio: parseInt(scale),
          });
          break;
        default:
          throw new Error("Unsupported format");
      }

      const link = document.createElement("a");
      link.download = `snapcode-export.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Export failed:", error);
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-1 md:px-4 bg-background mx-1 md:mx-4">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
        Sn
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
          apCo
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          de
        </span>
      </div>
      <div className="flex items-center justify-between gap-x-2 relative">
        <button className="hidden lg:flex items-center gap-3 bg-transparent rounded-md py-1.5 px-3 md:py-2 md:px-4 text-white hover:bg-[#252525] transition-colors">
          <Keyboard className="w-5 h-5" />
          <span className="font-semibold text-sm">Help</span>
        </button>
        <button
          className="flex items-center gap-x-1 bg-blue-800 rounded-md py-1.5 px-3 md:py-2 md:px-4 text-white hover:bg-blue-700 transition-colors"
          title="Exportar"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <ImageDown className="w-5 h-5" />
          <span className="block font-semibold text-sm">Exportar</span>
        </button>
        <button className="flex items-center gap-3 bg-[#252525] rounded-md py-1.5 px-3 md:py-2 md:px-4 text-white hover:bg-stone-700 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        {showDropdown && (
          <div className="absolute w-max top-11 right-16 z-50 bg-[#212121] px-4 py-3 rounded-md shadow-lg space-y-4">
            <div className="w-full">
              <div className="w-full flex flex-col items-center justify-start gap-x-5">
                <label
                  htmlFor="format"
                  className="text-sm text-muted-foreground w-full mb-1"
                >
                  Format
                </label>
                <div className="w-full h-8">
                  <div className="flex gap-3 flex-1 h-full">
                    <div className="w-full flex items-center px-0.5 py-0.5 bg-[#292929] rounded-sm">
                      {formats.map((item) => (
                        <button
                          key={item}
                          className={`h-full flex items-center justify-center px-4 py-1 w-full rounded-sm text-sm ${
                            format.toString() === item.toString()
                              ? "bg-[#404040]"
                              : ""
                          }`}
                          onClick={() =>
                            dispatch(setExportFormat(item as ExportFormat))
                          }
                        >
                          .{item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-col items-center justify-start gap-x-5">
                <label
                  htmlFor="scale"
                  className="text-sm text-muted-foreground w-full mb-1"
                >
                  Scale
                </label>
                <div className="w-full h-8">
                  <div className="flex gap-3 flex-1 h-full">
                    <div className="w-full flex items-center px-0.5 py-0.5 bg-[#292929] rounded-sm">
                      {scales.map((item) => (
                        <button
                          key={item}
                          className={`h-full flex items-center justify-center px-4 py-1 w-full rounded-sm text-sm ${
                            scale.toString() === item.toString()
                              ? "bg-[#404040]"
                              : ""
                          }`}
                          onClick={() =>
                            dispatch(setExportScale(item as ExportScale))
                          }
                        >
                          {item}x
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <button
                className="w-full h-8 flex items-center justify-center bg-[#000000] rounded-sm text-sm"
                onClick={handleExport}
              >
                <span className="text-sm text-white">Export</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
