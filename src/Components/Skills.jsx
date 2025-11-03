import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiAdobexd } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    level: 95,
    icon: <FaHtml5 className="text-orange-500" />,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "CSS",
    level: 90,
    icon: <FaCss3Alt className="text-blue-500" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "JavaScript",
    level: 85,
    icon: <FaJs className="text-yellow-500" />,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "React",
    level: 85,
    icon: <FaReact className="text-cyan-500" />,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "MongoDB",
    level: 80,
    icon: <SiMongodb className="text-green-500" />,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Node.js",
    level: 70,
    icon: <FaNodeJs className="text-green-600" />,
    color: "from-green-600 to-green-700",
  },
  {
    name: "Git",
    level: 80,
    icon: <FaGitAlt className="text-red-500" />,
    color: "from-red-500 to-red-600",
  },
  {
    name: "UI/UX Design",
    level: 75,
    icon: <FaFigma className="text-purple-500" />,
    color: "from-purple-500 to-purple-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const progressBar = {
  hidden: { width: 0 },
  show: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >

      <div className="relative w-full sm:w-[90%] lg:w-[80%] max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <motion.p
            variants={fadeUp}
            className="text-sky-600 dark:text-sky-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4"
          >
            My Capabilities
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technical Skills
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Skills List */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                <FaReact className="text-sky-600 dark:text-sky-400 text-sm" />
              </div>
              Development Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">{skill.icon}</span>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 px-2 py-1 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      variants={progressBar}
                      custom={skill.level}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Overview */}
          <motion.div variants={fadeUp} className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 border border-sky-100 dark:border-sky-800/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Skills Overview
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                With expertise in modern web technologies, I specialize in
                creating responsive, performant applications that deliver
                exceptional user experiences across all devices and platforms.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                    8+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                    95%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Frontend Mastery
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                    80%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Backend Skills
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                    75%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    UI/UX Design
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide text-sky-600 dark:text-sky-400">
                    Frontend
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      React.js
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      JavaScript (ES6+)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      HTML5 & CSS3
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide text-sky-600 dark:text-sky-400">
                    Backend
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      Node.js
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      Express.js
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      REST APIs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
