import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

import { socials } from "../constants";
import StackIcon, { Icon } from "../components/StackIcon";

const Footer = () => {
  const date = new Date();

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={` mx-auto flex-col flex md:gap-8`}>
        <div className="flex flex-col">
          <div className="md:mb-[50px] mb-[20px] h-[2px] bg-white opacity-10" />
        </div>
        <div className="flex md:flex-row flex-col gap-5  items-center justify-between  text-white">
          <h4 className=" font-extrabold text-[24px] leading-6 ">RoR9</h4>
          <p className="text-[14px] opacity-30 md:text-left text-center leading-[21px]">
            Copyright © {date.getFullYear()}. All rights reserved.
          </p>
          <div className="flex gap-6 items-center">
            {socials.map((social, i) => (
              <a href={social.url} target="_blank" key={i}>
                <StackIcon name={social.name as Icon} className="w-[32px] h-[32px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
