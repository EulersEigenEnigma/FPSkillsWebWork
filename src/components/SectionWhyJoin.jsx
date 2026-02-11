"use client";

import { motion } from "framer-motion";

export default function SectionWhyJoin() {
  const points = [
    {
      title: "World Class Industrial Trainers",
      description:
        "Our projects are designed and conceptualized by world-class industrial leaders.",
    },
    {
      title: "Multidisciplinary Approach",
      description:
        "Our projects combine aspects of science, arts, commerce, and technology.",
    },
    {
      title: "Unique Project Methodology",
      description:
        "Our methodology focuses on deep problem analysis, rigorous research, and crafting powerful storytelling.",
    },
    {
      title: "Fail & Rise Up Fast Culture",
      description:
        "We promote failing early and building long-lasting, impactful solutions.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-right">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-black text-4xl md:text-5xl font-semibold mb-10"
        >
          Why Join Us?
        </motion.h2>

        {/* BULLET LIST */}
        <div className="space-y-10">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="flex items-start gap-5 justify-end"
            >
              {/* TEXT BLOCK */}
              <div className="max-w-2xl">
                <h3 className="text-black text-2xl md:text-3xl font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-800 text-base md:text-lg mt-2">
                  {item.description}
                </p>
              </div>

              {/* Diamond Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="black"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
