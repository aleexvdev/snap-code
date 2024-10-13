import { toggleLineNumbers } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const LineNumberSelector = () => {
  const { lineNumbers } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="lineNumbers"
          className="text-sm text-muted-foreground w-[70%]"
        >
          Line Number
        </label>
        <div className="w-full h-8">
          <div className="flex gap-3 flex-1 h-full">
            <div className="w-full flex items-center px-0.5 py-0.5 bg-[#292929] rounded-sm">
              <button
                className={`w-1/2 h-full flex items-center justify-center text-xs py-1 font-semibold ${
                  lineNumbers ? "bg-[#404040]" : "bg-none"
                } rounded-sm`}
                onClick={() => dispatch(toggleLineNumbers())}
              >
                Show
              </button>
              <button
                className={`w-1/2 h-full flex items-center justify-center text-xs py-1 font-semibold ${
                  !lineNumbers ? "bg-[#404040]" : "bg-none"
                } rounded-sm`}
                onClick={() => dispatch(toggleLineNumbers())}
              >
                Hide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
