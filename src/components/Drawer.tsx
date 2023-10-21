import { motion } from "framer-motion";
import { menuItems } from "../constants";
import close from "../../public/close.svg";
import { useEffect, useState, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = drawerRef.current;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.className.includes("drawer-left-side")) {
        onClose();
      }
    };

    if (isOpen) {
      el?.addEventListener("click", handleClick);
    }

    return () => {
      el?.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the thresholds for each section as needed
      const section1Top = document.getElementById("home")?.offsetTop ?? 0;
      const section2Top = document.getElementById("projects")?.offsetTop ?? 0;
      const section3Top = document.getElementById("contact")?.offsetTop ?? 0;

      if (scrollPosition >= section1Top - 50 && scrollPosition < section2Top - 50) {
        setActiveSection("Home");
      } else if (scrollPosition >= section2Top - 50 && scrollPosition < section3Top - 50) {
        setActiveSection("Projects");
      } else if (scrollPosition >= section3Top - 50) {
        setActiveSection("Contact");
      } else {
        setActiveSection("");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isOpen ? (
    <div
      ref={drawerRef}
      className="w-[100vw] h-[100vh] drawer-container  flex-1 z-10 flex absolute inset-0 top-[-20px] "
    >
      <div className="flex-1 drawer-left-side"></div>
      <motion.div
        initial={{ translateX: 120, width: 0 }}
        animate={{ translateX: 0, width: 200 }}
        transition={{ duration: 1 }}
        className=" overflow-hidden drawer h-full relative z-20"
      >
        <div className="flex justify-end p-5">
          <img src={close} alt="menu" className="w-[28px] h-[28px] object-contain p-1" onClick={onClose} />
        </div>
        <ul className="list-none flex-1  justify-start">
          {menuItems.map((nav, index) => (
            <li
              key={index}
              className={`font-poppins font-normal cursor-pointer text-[26px] flex px-5 items-center gap-4 ${
                nav.title === activeSection ? "text-lime-700" : "text-white"
              } `}
            >
              {nav.icon}
              <a onClick={onClose} href={`${nav.href}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  ) : null;
};

export default Drawer;
