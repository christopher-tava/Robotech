"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-[65px] left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 origin-[0%] z-40"
      style={{ scaleX }}
    />
  );
};