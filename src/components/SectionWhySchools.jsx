"use client";

import { motion } from "framer-motion";

export default function SectionWhySchools() {
  const points = [
    {
      title: "NEP 2020 & NCF 2023 Aligned",
      description:
        "Skill projects are aligned with both NEP standards as well as real-world industry expectations.",
    },
    {
      title: "Stronger Brand Identity",
      description:
        "Stand out as an innovation-driven institution committed to future-ready education.",
    },
    {
      title: "Global Industry Connections",
      description:
        "Gain access to world-class experts, trainers, and industry mentors.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-20" style={{ backgroundColor: "#FF553F" }}>
      <div className="max-w-6xl mx-auto text-left">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-5xl font-semibold mb-10"
        >
          Why Schools Choose Us?
        </motion.h2>

        {/* BULLET LIST */}
        <div className="space-y-10">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="flex items-start gap-5"
            >
              {/* Diamond Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="white"
                className="min-w-[26px] mt-1"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  transform="rotate(45 12 12)"
                />
              </svg>

              {/* TEXT BLOCK */}
              <div className="max-w-2xl">
                <h3 className="text-white text-2xl md:text-3xl font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/90 text-base md:text-lg mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
