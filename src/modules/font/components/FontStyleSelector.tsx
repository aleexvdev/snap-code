"use client";

import { Select } from '@/components/ui/Select';
import { setFontStyle } from '@/redux/features/fontSlice';
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

const fontStyles = [
  { label: 'Normal', value: 'normal' },
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Bold Italic', value: 'bold italic' },
];

export const FontStyleSelector = () => {

  const { fontStyle } = useSelector((state: RootState) => state.font);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="lineNumbers"
          className="text-sm text-black dark:text-white font-medium w-[50%] lg:w-[70%]"
        >
          Font Style
        </label>
        <div className="w-full h-8">
          <Select options={fontStyles} onChange={setFontStyle} placeholder={fontStyle} />
        </div>
      </div>
    </div>
  );
}
