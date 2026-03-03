import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../constants";
import { useEffect, useRef, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const id = requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const drawerContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="drawer"
          className="fixed inset-0 z-[100] flex flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal
          aria-label="Navigation menu"
        >
          {/* Backdrop - tap to close */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            aria-hidden
          />
          {/* Panel - slides in from right */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-[280px] max-w-[85vw] bg-[#0d2020] shadow-xl flex flex-col overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex justify-end items-center p-4 border-b border-white/10 shrink-0">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0d2020] transition-colors"
                aria-label="Close menu"
              >
                <img src={`${import.meta.env.BASE_URL}close.svg`} alt="" className="w-6 h-6 pointer-events-none" />
              </button>
            </div>
            <nav className="flex-1 overflow-auto py-4">
              <ul className="list-none flex flex-col">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-4 px-5 py-4 text-lg font-medium transition-colors min-h-[48px] ${
                        activeSection === item.title
                          ? "text-lime-400 bg-white/5"
                          : "text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="text-xl text-white/80" aria-hidden>
                        {item.icon}
                      </span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(drawerContent, document.body);
};

export default Drawer;
