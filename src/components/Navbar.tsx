import { motion } from "framer-motion";
import styles from "../styles";
import { menuItems } from "../constants";
import { useEffect, useState } from "react";
import menu from "../../public/menu.svg";

import Drawer from "./Drawer";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);
  return (
    <motion.nav
      initial={{ translateY: -30, opacity: 0.5 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${styles.xPaddings} h-fit sticky top-5 z-10`}
    >
      <div className={` mx-auto flex justify-between gap-8`}>
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">RoR9</h2>
        <ul className={`list-none gap-7 text-white md:flex hidden`}>
          {menuItems.map((item, i) => (
            <li key={i} className="cursor-pointer text-white">
              <a className="text-inherit" href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 justify-end items-center sm:hidden">
          <img
            src={menu}
            alt="menu"
            className={`w-[28px]  h-[28px] object-contain ${toggle ? "hidden" : ""}`}
            onClick={() => setToggle((prevToggle) => !prevToggle)}
          />
        </div>
      </div>
      <Drawer isOpen={toggle} onClose={() => setToggle(false)} />
    </motion.nav>
  );
};
export default Navbar;
