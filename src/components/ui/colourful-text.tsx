"use client";
import React from "react";
import { motion } from "framer-motion";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "#A855F7", // purple-500
    "#9333EA", // purple-600
    "#8B5CF6", // violet-500
    "#7C3AED", // violet-600
    "#6366F1", // indigo-500
    "#4F46E5", // indigo-600
    "#3B82F6", // blue-500
    "#2563EB", // blue-600
    "#8B5CF6", // back to violet-500
    "#A855F7", // back to purple-500
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
