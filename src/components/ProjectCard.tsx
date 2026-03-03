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
  sourceCode?: string;
  techStack: Icon[];
  featured?: boolean;
  logoUrl?: string;
  accent?: string;
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
  featured,
  logoUrl,
  accent,
}) => {
  const [state, setState] = useState("");
  const [imgError, setImgError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const normalizedImgUrl = imgUrl.startsWith("http") ? imgUrl : imgUrl.startsWith("/") ? imgUrl : `/${imgUrl}`;
  const normalizedLogoUrl = logoUrl ? (logoUrl.startsWith("http") ? logoUrl : logoUrl.startsWith("/") ? logoUrl : `/${logoUrl}`) : null;
  const isOpen = active === id;
  const showLogo = normalizedLogoUrl && !logoError;

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onClick={() => handleClick(id)}
      className={`relative ${
        isOpen ? "lg:flex-[3.5] flex-[10] z-10" : "lg:flex-[0.5] flex-[2]"
        } flex items-center justify-center h-[600px] min-w-[10px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer rounded-[24px] overflow-hidden border border-white/10 shadow-xl`}
    >
      {/* Open: screenshot. Closed: full-bleed logo (same size as screenshot) + rotated title */}
      {isOpen ? (
        <>
          <div className="absolute inset-0 rounded-[24px] overflow-hidden">
            <img
              src={normalizedImgUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover p-[1px]"
              onError={() => setImgError(true)}
            />
            {imgError && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" aria-hidden />
            )}
          </div>
        </>
      ) : showLogo ? (
        <>
          <img
            src={normalizedLogoUrl!}
            alt=""
              className="absolute inset-0 w-full h-full object-cover"
            onError={() => setLogoError(true)}
          />
            {/* Mobile: slight dark overlay so white title is readable */}
            <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none lg:hidden" aria-hidden />
            <h3 className="absolute bottom-10 left-0 right-0 z-[1] overflow-hidden text-ellipsis font-semibold text-[16px] text-white drop-shadow-lg lg:max-h-none text-center lg:rotate-[-90deg] lg:translate-y-0 lg:text-[22px]">
            {title}
          </h3>

          </>
      ) : (
        <>
              <div className={`absolute inset-0 bg-gradient-to-br ${accent ?? "from-slate-800 to-slate-900"}`} aria-hidden />
              {/* Mobile: slight dark overlay so white title is readable */}
              <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none lg:hidden" aria-hidden />
          {techStack[0] && (
            <div className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/10 p-4">
              <StackIcon name={techStack[0]} className="w-16 h-16 sm:w-20 sm:h-20 text-white/95" />
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 z-[1] flex max-h-[200px] w-full flex-col items-center justify-end pb-3 lg:left-0 lg:h-full lg:max-h-none lg:w-[200px] lg:justify-end lg:pb-0 lg:pr-4">
            <h3 className="max-h-[200px] overflow-hidden text-ellipsis font-semibold text-[16px] text-white drop-shadow-lg lg:max-h-none lg:origin-bottom-left lg:rotate-[-90deg] lg:translate-y-0 lg:text-[20px]">
              {title}
            </h3>
          </div>
        </>
      )}

      {isOpen ? (
        <div className="absolute bottom-0 left-0 right-0 flex flex-col w-full md:p-8 p-4 bg-black/80 backdrop-blur-sm border-t border-white/5">
          {featured && (
            <span className="badge-production inline-block mb-2">Production</span>
          )}
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} live site`}
                className={`${styles.flexCenter} w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
                onMouseEnter={() => setState("live")}
                onMouseLeave={() => setState("")}
                onClick={(e) => e.stopPropagation()}
              >
                <MdRemoveRedEye className="w-1/2 h-1/2 object-contain text-white" />
              </a>
              {sourceCode && (
                <a
                  href={sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code`}
                  className={`${styles.flexCenter} w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
                  onMouseEnter={() => setState("code")}
                  onMouseLeave={() => setState("")}
                  onClick={(e) => e.stopPropagation()}
                >
                  <RxGithubLogo className="w-1/2 h-1/2 object-contain text-white" />
                </a>
              )}
            </div>
            <button
              type="button"
              className={`${styles.flexCenter} w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-[24px] glassmorphism mb-[16px] cursor-pointer touch-manipulation border-0 p-0`}
              onMouseEnter={() => setState("stack")}
              onMouseLeave={() => setState("")}
              onClick={(e) => {
                e.stopPropagation();
                setState((prev) => (prev === "stack" ? "" : "stack"));
              }}
              aria-label="Toggle tech stack"
              aria-pressed={state === "stack"}
            >
              <BsStack className="w-1/2 h-1/2 object-contain text-white" />
            </button>
          </div>
          <div className="md:h-[50px] h-[25px] min-h-[25px]">
            {state ? (
              <motion.p
                initial={{ translateY: 20, opacity: 0.5 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="font-normal text-[18px] leading-[32px] text-white"
              >
                {state === "live" && "Live Preview"}
                {state === "code" && "Source Code"}
                {state === "stack" && "Tech Stack"}
              </motion.p>
            ) : null}
          </div>
          <div className="md:h-[50px] h-[125px] overflow-hidden">
            <div className="text-white md:text-[16px] text-[14px] leading-relaxed">
              {state === "stack" ? (
                <motion.div
                  initial={{ translateX: 120, opacity: 0.5 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center gap-5 md:h-[auto] h-[125px] flex-wrap"
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
          <h2 className="font-semibold md:mt-[24px] sm:text-[32px] text-[24px] text-white relative z-[10]">
            {title}
          </h2>
        </div>
      ) : null}
    </motion.div>
  );
};

export default ProjectCard;
