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
        Robotech Hackathon Sponsors and Community Partners ... More to be Announced!
      </motion.div>
    <div className="flex items-start gap-4">
        <img src="/klemis.png" alt="klemis kitchen logo" className="w-40 h-auto object-cover" />
          <p className="text-gray-700">
          <a
  href="https://star.studentlife.gatech.edu/klemis-kitchen"
  className="text-blue-500 hover:text-blue-700 hover:underline"
>
  Klemis Kitchen:
</a> A GT food pantry through STAR Services in the Student Engagement and Well-Being Office. Following hackathon meals, we will donate all leftover food to Klemis Kitchen to help support food-insecure students on campus.
           </p>
</div>
    </div>
  );
};
