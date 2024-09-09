// src/components/TextSplitHover.tsx
import React from "react";
import { motion } from "framer-motion";

interface TextSplitHoverProps {
  text: string;
}

const TextSplitHover: React.FC<TextSplitHoverProps> = ({ text }) => {
  const characters = text.split(""); // Split text into characters

  // Hover animation for individual characters
  const hoverEffect = {
    initial: {
      color: "#000", // Original color
    },
    hover: {
      scale: 1.3,
      color: "rgb(254, 255, 254)", // Color on hover
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div className="text-split-container">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="char-wrapper"
          initial="initial"
          whileHover="hover"
          variants={hoverEffect}
          style={{ display: "inline-block", marginRight: "2px" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextSplitHover;
