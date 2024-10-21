"use client";

import { Select } from '@/components/ui/Select';
import { setFontWeight } from '@/redux/features/fontSlice';
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

const fontWeights = [
  { value: 'normal', label: 'Normal' },
  { value: 'bold', label: 'Bold' },
  { value: 'bolder', label: 'Bolder' },
  { value: 'lighter', label: 'Lighter' },
];

export const FontWeightSelector = () => {

  const { fontWeight } = useSelector((state: RootState) => state.font);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-start">
        <label
          htmlFor="lineNumbers"
          className="text-sm text-black dark:text-white font-medium w-[50%] lg:w-[70%]"
        >
          Font Weight
        </label>
        <div className="w-full h-8">
          <Select options={fontWeights} onChange={setFontWeight} placeholder={fontWeight} />
        </div>
      </div>
    </div>
  );
}
