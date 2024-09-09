// src/components/TextSplit.tsx
import React from "react";
import { motion } from "framer-motion";

interface TextSplitProps {
  text: string; // The text to be split and animated
}

const TextSplit: React.FC<TextSplitProps> = ({ text }) => {
  const words = text.split(" "); // Split text into words

  // Define container animation
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  // Define child animation for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="text-split-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="word-wrapper"
          style={{ overflow: "hidden" }}
        >
          <motion.span
            variants={child}
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default TextSplit;
