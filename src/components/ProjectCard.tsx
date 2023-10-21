import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { RxGithubLogo } from "react-icons/rx";
import { BsStack } from "react-icons/bs";
import type { Icon } from "./StackIcon";
import StackIcon from "./StackIcon";

type Props = {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
  description: string;
  live: string;
  sourceCode: string;
  techStack: Icon[];
};

const ProjectCard: React.FC<Props> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  description,
  live,
  sourceCode,
  techStack,
}) => {
  const [state, setState] = useState("");
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onClick={() => handleClick(id)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2] "
      } flex items-center justify-center  h-[600px] min-w-[130px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    >
      <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-[24px] " />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-[90px] lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 md:p-8 p-4 justify-start w-full flex-col bg-black opacity-80 rounded-b-[24px] ">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <a href={live} target="_blank">
                <div
                  className={`${styles.flexCenter} w-[50px] md:w-[60px] h-[50px] md:h-[60px ] rounded-[24px] glassmorphism mb-[16px]`}
                  onMouseEnter={() => setState("live")}
                  onMouseLeave={() => setState("")}
                >
                  <MdRemoveRedEye className="w-1/2 h-1/2 object-contain" />
                </div>
              </a>
              <a href={sourceCode} target="_blank">
                <div
                  className={`${styles.flexCenter}  w-[50px] md:w-[60px] h-[50px] md:h-[60px ] rounded-[24px] glassmorphism mb-[16px]`}
                  onMouseEnter={() => setState("code")}
                  onMouseLeave={() => setState("")}
                >
                  <RxGithubLogo className="w-1/2 h-1/2 object-contain" />
                </div>
              </a>
            </div>

            <div
              className={`${styles.flexCenter} w-[50px] md:w-[60px] h-[50px] md:h-[60px ] rounded-[24px] glassmorphism mb-[16px]`}
              onMouseEnter={() => setState("stack")}
              onMouseLeave={() => setState("")}
            >
              <BsStack className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <div className="md:h-[50px] h-[25px]">
            {state ? (
              <motion.p
                initial={{ translateY: 20, opacity: 0.5 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="font-normal text-[18px] leading-[32px] text-white"
              >
                {state === "live" && "Live Preview"}
                {state === "code" && "Source Code"}
                {state === "stack" && "Tech Stack"}
              </motion.p>
            ) : null}
          </div>
          <div className="md:h-[50px] h-[125px] overflow-hidden ">
            <div className="text-white md:text-[16px] text-[14px]">
              {state === "stack" ? (
                <motion.div
                  initial={{ translateX: 120, opacity: 0.5 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="flex items-center justify-center gap-5 md:h-[auto] h-[125px]"
                >
                  {techStack.map((el, i) => (
                    <StackIcon key={i} name={el} className="w-[42px] h-[42px]" />
                  ))}
                </motion.div>
              ) : (
                description
              )}
            </div>
          </div>
          <h2 className="font-semibold md:mt-[24px] sm:text-[32px] text-[24px] text-white relative z-[10] ">{title}</h2>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
