import { motion } from "framer-motion";
import styles from "../styles";
import { menuItems } from "../constants";
import { useEffect, useState } from "react";

import Drawer from "./Drawer";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`${styles.xPaddings} h-fit sticky top-0 z-20 w-full transition-all duration-300 ${
        scrolled ? "bg-[#0a1818]/95 backdrop-blur-md shadow-lg py-3" : "bg-[#0d2020]/90 py-4"
      }`}
    >
      <div className="mx-auto flex justify-between gap-8">
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">RoR9</h2>
        <ul className="list-none gap-7 text-white md:flex hidden">
          {menuItems.map((item, i) => (
            <li key={i} className="cursor-pointer text-white">
              <a className="text-inherit hover:opacity-80 transition-opacity" href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 justify-end items-center sm:hidden">
          <img
            src="/menu.svg"
            alt="menu"
            className={`w-[28px] h-[28px] object-contain ${toggle ? "hidden" : ""}`}
            onClick={() => setToggle((prevToggle) => !prevToggle)}
          />
        </div>
      </div>
      <Drawer isOpen={toggle} onClose={() => setToggle(false)} />
    </motion.nav>
  );
};
export default Navbar;
