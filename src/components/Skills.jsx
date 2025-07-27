import { motion } from "framer-motion";
import { DiAngularSimple, DiCss3, DiHtml5, DiJava, DiJavascript } from "react-icons/di";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { SiJavascript, SiSpringboot, SiSpringsecurity, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
  { name: "Node.js", icon: <SiSpringboot size={40} className="text-green-500" /> },
  { name: "JS", icon: <SiSpringsecurity size={40} className="text-yellow-400" /> }, 
   { name: "JS", icon: <SiJavascript size={40} className="text-yellow-400" /> }, 
    { name: "JS", icon: <DiHtml5 size={40} className="text-yellow-400" /> }, 
     { name: "JS", icon: <FaJava size={40} className="text-yellow-400" /> }, 
  // example extra
];

export const Skills = () => {
  const radius = 120; // circle radius

  return (
    <motion.div
      className="relative w-[300px] h-[300px] mx-auto"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `50%`,
              top: `50%`,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {skill.icon}
          </div>
        );
      })}
    </motion.div>
  );
};
