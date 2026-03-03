import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";

export const Hero: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-[95vh] w-full relative flex flex-col z-0"
      >
        <div className="absolute inset-0 w-full z-[-1]">
          <img src={`${import.meta.env.BASE_URL}react-blogpost-min.webp`} alt="" className="w-full object-cover h-full" aria-hidden />
          <div className="absolute inset-0 bg-[#0d2020]/75" aria-hidden />
        </div>
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col justify-center flex-1 items-center flex-shrink-0`}
        >
          <div className="flex justify-center items-center flex-col z-10 text-center">
            <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
              Hey, I'm Valeriu
            </motion.h1>
            <motion.div
              variants={textVariant(1.2)}
              className={`${styles.heroDText} flex flex-row justify-center items-center`}
            >
              a web developer
            </motion.div>
            <motion.p
              variants={textVariant(1.3)}
              className="text-white/90 font-medium mt-4 max-w-xl text-lg sm:text-xl md:text-2xl"
            >
              Building fast, accessible web experiences — from e‑commerce to real-time apps.
            </motion.p>
            <motion.div variants={textVariant(1.4)} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.a
          href="#projects"
          aria-label="Scroll to projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors pt-4 pb-8 mt-auto flex-shrink-0"
        >
          <span className="text-sm font-medium">Scroll to projects</span>
          <span className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-current"
            />
          </span>
        </motion.a>
      </section>
    </>
  );
};
