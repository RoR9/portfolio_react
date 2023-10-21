import { motion } from "framer-motion";
import { menuItems } from "../constants";
import close from "../../public/close.svg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer: React.FC<Props> = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="w-[100vw] h-[100vh] drawer-container  flex-1 z-10 flex absolute inset-0 top-[-20px]">
      <div className="flex-1"></div>
      <motion.div
        initial={{ translateX: 120, width: 0 }}
        animate={{ translateX: 0, width: 200 }}
        transition={{ duration: 1 }}
        className=" overflow-hidden drawer h-full relative z-20"
      >
        <div className="flex justify-end p-5">
          <img src={close} alt="menu" className="w-[28px] h-[28px] object-contain p-1" onClick={onClose} />
        </div>
        <ul className="list-none flex-1 items-center justify-start">
          {menuItems.map((nav, index) => (
            <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
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
