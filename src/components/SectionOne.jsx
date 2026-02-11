"use client";
import { motion } from "framer-motion";
import SectionOneSlideshow from "../components/SectionOneSlideshow";


export default function SectionOne() {
  return (
    <section
      className="w-full px-6 md:px-16 pt-8 pb-6"
      style={{ backgroundColor: "#FF553F" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* LEFT — TEXT CONTENT */}
        <div className="max-w-4xl flex-1">

          {/* Small Top Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white text-lg md:text-3xl mb-6 tracking-tight"
          >
            21’st Century Skills That Are Required In Global Industries -
          </motion.p>

          {/* SKILLS LIST */}
          <div className="text-white text-4xl md:text-5xl font-medium leading-[1] space-y-5">
            {[
              "Global Thinking",
              "Creativity & Innovation",
              "Digital & AI Skills",
              "Collaboration & Communication",
              "Storytelling",
              "Problem Solving",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.10,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                {/* Diamond Bullet */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    transform="rotate(45 12 12)"
                  />
                </svg>

                <p className="leading-tight">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — TALL WINDOW FRAME */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            hidden md:block
            w-[380px] h-[600px]
            rounded-3xl overflow-hidden
            shadow-xl border border-white/30
            bg-white/10 backdrop-blur-md
          "
        >
          <SectionOneSlideshow
  images={[
  `${process.env.NODE_ENV === "production" ? "/FPSkillsWebWork" : ""}/slideshow/SlideImage1.png`,
  `${process.env.NODE_ENV === "production" ? "/FPSkillsWebWork" : ""}/slideshow/SlideImage2.png`,
  `${process.env.NODE_ENV === "production" ? "/FPSkillsWebWork" : ""}/slideshow/SlideImage3.png`,
  `${process.env.NODE_ENV === "production" ? "/FPSkillsWebWork" : ""}/slideshow/SlideImage4.png`,
]}

    interval={4500}
  />
        </motion.div>

      </div>
    </section>
  );
}
