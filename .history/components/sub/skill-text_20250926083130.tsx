"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Proudly Managed by IEEE @ GT
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[60px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Robotech Hackathon Sponsors and Community Partners...To be Announced!
      </motion.div>
    <div className="flex items-start gap-4">
        <img src="klemis.png" alt="Example" className="w-40 h-auto object-cover" />
          <p className="text-gray-700">
          This is the description for the image. Tailwind makes it easy to style flex layouts.
           </p>
</div>
    </div>
  );
};
