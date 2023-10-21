import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";
import imgUrl from "../../public/react-blogpost-min.png";

export const Hero: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className={`${styles.yPaddings} sm:pl-16 pl-6 h-[103vh] w-full relative flex flex-col z-0 top-[-40px]`}
      >
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col justify-center h-full items-center`}
        >
          <div className="flex justify-center items-center flex-col  z-10 ">
            <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
              Hey I am Valeriu
            </motion.h1>
            <motion.div
              variants={textVariant(1.2)}
              className={`${styles.heroDText} flex flex-row justify-center items-center `}
            >
              a web developer
            </motion.div>
          </div>
        </motion.div>
        <div className=" absolute inset-0 w-full md:-mt-[30px] z-[-1] bg-[#000] opacity-40 ">
          <img src={imgUrl} alt="cover" className="w-full  object-cover z-10 h-full" />
        </div>
      </section>
    </>
  );
};
