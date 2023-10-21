import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "../components/CustomTexts";
import { projectItems } from "../constants";
import ProjectCard from "../components/ProjectCard";
import type { Icon } from "../components/StackIcon";

const Projects: React.FC = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section id="projects" className={`${styles.paddings} `}>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Projects" textStyles="text-center" />
        <div className="flex lg:flex-row flex-col min-h-[80vh] md:min-h-full gap-5 mt-[50px]">
          {projectItems.map((projectItem, i) => (
            <ProjectCard
              key={projectItem.id}
              index={i}
              active={active}
              handleClick={setActive}
              sourceCode={projectItem.source_code}
              techStack={projectItem.tech_stack as Icon[]}
              {...projectItem}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
