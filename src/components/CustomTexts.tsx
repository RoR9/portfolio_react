import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

type Props = {
  title: string;
  textStyles: string;
};

export const TypingText: React.FC<Props> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles} font-normal text-[44px]  text-secondary-white`}
  >
    {Array.from(title).map((letter, i) => (
      <motion.span variants={textVariant2} key={i}>
        {letter}
      </motion.span>
    ))}
  </motion.p>
);
