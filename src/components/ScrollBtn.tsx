// components/ScrollButtons.tsx
"use client";

import  ArrowDown  from "@/assets/icons/arrow-down.svg";
import Link from "next/link";

export const ScrollButtons = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
      <Link 
        href="#projects" 
        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-all"
      >
        <span className="font-semibold">Explore My Work</span>
        <ArrowDown className="size-4" />
      </Link>
      <Link 
        href="#contact" 
        className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-white/90 transition-all"
      >
        <span>😀</span>
        <span className="font-semibold">Let&apos;s Connect</span>
      </Link>
    </div>
  );
};