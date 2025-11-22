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

<div className="space-y-6">
  {/* GOLD TIER SPONSOR - TRACTIAN */}
  <div className="mb-8">
    <div className="text-center mb-4">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
        Gold Tier Sponsor
      </h2>
    </div>
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-yellow-500/20 via-yellow-600/10 to-yellow-700/20 rounded-lg border-2 border-yellow-500/50 shadow-xl shadow-yellow-500/20 max-w-md">
        <img
          src="/tractian.png"
          alt="Tractian logo"
          className="h-32 w-auto mb-3 object-contain"
        />
        <p className="text-center text-yellow-300 text-lg font-semibold">Tractian</p>
      </div>
    </div>
  </div>

  {/* NEW SPONSORS SECTION WITH KLEMIS KITCHEN */}
  <div>
    <div className="text-center mb-4">
      <h2 className="text-xl font-semibold text-gray-300">
        Sponsors & Community Partners
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {/* KLEMIS KITCHEN - COMMUNITY PARTNER */}
      <div className="flex flex-col items-center justify-center p-4 bg-[rgba(112,66,248,0.1)] rounded-lg border border-[rgba(112,66,248,0.3)]">
        <img
          src="/klemis.png"
          alt="klemis kitchen logo"
          className="h-24 w-auto mb-2 object-contain"
        />
        <p className="text-center text-gray-300 text-sm">Klemis Kitchen</p>
      </div>
      {/* NORTHROP GRUMMAN */}
      <div className="flex flex-col items-center justify-center p-4 bg-[rgba(112,66,248,0.1)] rounded-lg border border-[rgba(112,66,248,0.3)]">
        <img
          src="/northrop-grumman.png"
          alt="Northrop Grumman logo"
          className="h-24 w-auto mb-2 object-contain"
        />
        <p className="text-center text-gray-300 text-sm">Northrop Grumman</p>
      </div>

      {/* GENERAL MOTORS (GM) */}
      <div className="flex flex-col items-center justify-center p-4 bg-[rgba(112,66,248,0.1)] rounded-lg border border-[rgba(112,66,248,0.3)]">
        <img
          src="/general-motors.png"
          alt="General Motors (GM) logo"
          className="h-24 w-auto mb-2 object-contain"
        />
        <p className="text-center text-gray-300 text-sm">General Motors</p>
      </div>

      {/* JOHN DEERE */}
      <div className="flex flex-col items-center justify-center p-4 bg-[rgba(112,66,248,0.1)] rounded-lg border border-[rgba(112,66,248,0.3)]">
        <img
          src="/john-deere.png"
          alt="John Deere logo"
          className="h-24 w-auto mb-2 object-contain"
        />
        <p className="text-center text-gray-300 text-sm">John Deere</p>
      </div>
    </div>

    {/* GOOGLE - SECOND ROW */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="flex flex-col items-center justify-center p-4 bg-[rgba(112,66,248,0.1)] rounded-lg border border-[rgba(112,66,248,0.3)]">
        <img
          src="/google.png"
          alt="Google logo"
          className="h-24 w-auto mb-2 object-contain"
        />
        <p className="text-center text-gray-300 text-sm">Google</p>
      </div>
    </div>

    {/* KLEMIS KITCHEN DESCRIPTION - FULL WIDTH */}
    <div className="bg-[rgba(112,66,248,0.05)] border border-[rgba(112,66,248,0.2)] rounded-lg p-4 mb-6">
      <p className="text-white text-lg">
        <a
          href="https://star.studentlife.gatech.edu/klemis-kitchen"
          className="text-blue-400 hover:text-blue-300 hover:underline font-semibold"
        >
          Klemis Kitchen:
        </a>{" "}
        A GT food pantry through STAR Services in the Student Engagement and Well-Being
        Office. Following hackathon meals, we will donate all leftover food to Klemis
        Kitchen to help support food-insecure students on campus.
      </p>
    </div>
  </div>
  </div>
    </div>
  );
};
