"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FAQ_DATA } from "@/constants";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

const FAQItem = ({ question, answer, isOpen, onToggle, index }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="border border-[#2A0E61] rounded-lg bg-[rgba(3,0,20,0.37)] backdrop-blur-md overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[rgba(112,66,248,0.1)] transition-colors duration-300"
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#b49bff] flex-shrink-0 ml-4"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-gray-200 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <div className="space-y-4">
        {FAQ_DATA.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};