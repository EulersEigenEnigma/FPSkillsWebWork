"use client";

import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <motion.div
      className="p-4 bg-blue-500 text-white rounded-xl w-fit"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hello Motion 👋
    </motion.div>
  );
}
