"use client";

import { Modal } from "@/components/ui/Modal";
import { RootState } from "@/redux/store";
import { Download, ImageDown } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as htmlToImage from "html-to-image";
import {
  ExportFormat,
  ExportScale,
  setExportFormat,
  setExportScale,
} from "@/redux/features/exportSlice";
import { motion } from "framer-motion";

const formats = ["png", "svg", "jpeg"];
const scales = ["1", "2", "3"];

export const ExportModule = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  const selectedIndexFormat = formats.findIndex((item) => item === format);
  const sliderVariantsFormat = {
    slide: (index: number) => ({
      x: `${index * 100}%`,
    }),
  };

  const selectedIndexScale = scales.findIndex((item) => item === scale);
  const sliderVariantsScale = {
    slide: (index: number) => ({
      x: `${index * 100}%`,
    }),
  };

  return (
    <>
      <button
        className="flex items-center gap-x-1 bg-blue-800 rounded-md py-1.5 px-3 md:py-2 md:px-4 text-white hover:bg-blue-700 transition-colors"
        title="Exportar"
        onClick={() => setIsOpen(true)}
      >
        <ImageDown className="w-5 h-5" />
        <span className="block font-semibold text-sm">Exportar</span>
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        title="Exportar"
      >
        <div className="w-full flex flex-col items-center justify-start gap-y-10">
          <div className="w-full flex flex-col items-center gap-y-6">
            <div className="w-full flex flex-col items-center justify-start">
              <label
                htmlFor="format"
                className="text-lg text-muted-foreground w-full mb-1"
              >
                Format
              </label>
              <div className="w-full h-max p-1 rounded-md bg-[#272727]">
                <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden bg-[#272727]">
                  {formats.map((item) => (
                    <>
                      <motion.div
                        className="absolute top-0 left-0 h-full w-1/3 bg-[#404040] rounded-sm py-1"
                        custom={selectedIndexFormat}
                        initial="slide"
                        animate="slide"
                        variants={sliderVariantsFormat}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                      <button
                        key={item}
                        className="relative z-10 w-1/3 h-full flex items-center justify-center gap-x-2 py-2"
                        onClick={() =>
                          dispatch(setExportFormat(item as ExportFormat))
                        }
                      >
                        <span className="text-base text-semibold">.{item}</span>
                      </button>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-start">
              <label
                htmlFor="scale"
                className="text-lg text-muted-foreground w-full mb-1"
              >
                Escala
              </label>
              <div className="w-full h-max p-1 rounded-md bg-[#272727]">
                <div className="relative w-full flex gap-3 flex-1 h-full overflow-hidden bg-[#272727]">
                  {scales.map((item) => (
                    <>
                      <motion.div
                        className="absolute top-0 left-0 h-full w-1/3 bg-[#404040] rounded-sm py-1"
                        custom={selectedIndexScale}
                        initial="slide"
                        animate="slide"
                        variants={sliderVariantsScale}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                      <button
                        key={item}
                        className="relative z-10 w-1/3 h-full flex items-center justify-center gap-x-2 py-2"
                        onClick={() =>
                          dispatch(setExportScale(item as ExportScale))
                        }
                      >
                        <span className="text-base text-semibold">{item}x</span>
                      </button>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <button
              className="w-full flex items-center justify-center gap-x-2 bg-blue-800 hover:bg-blue-700 transition-colors rounded-sm py-2"
              onClick={handleExport}
            >
              <Download className="w-5 h-5" />
              <span className="text-base text-white">Descargar</span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
