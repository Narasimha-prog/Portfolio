import { motion } from "framer-motion";
import { DiAngularSimple, DiCss3, DiHtml5, DiJava, DiJavascript } from "react-icons/di";
import { FaReact, FaNodeJs, FaJava, FaAngular } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { SiJavascript, SiSpringboot, SiSpringsecurity, SiTailwindcss } from "react-icons/si";

const skills = [
   { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} className="text-green-500" /> },
  { name: "Spring Security", icon: <SiSpringsecurity size={40} className="text-green-700" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "HTML5", icon: <DiHtml5 size={40} className="text-orange-500" /> },
  { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
   { name: "Java", icon: <FaAngular size={40} className="text-red-500" /> },
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
