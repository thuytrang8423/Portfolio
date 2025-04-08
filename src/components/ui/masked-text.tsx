"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

export const MaskedText = ({
  children,
  className,
  revealText = true,
}: {
  children: React.ReactNode;
  className?: string;
  revealText?: boolean;
}) => {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: revealText ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-900 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-900 mix-blend-multiply" />
        {children}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: revealText ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </div>
  );
}; 