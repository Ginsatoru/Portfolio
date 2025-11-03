import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "frontend",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "frontend",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "backend",
  },
  {
    name: "MongoDB",
    logo: "https://images.icon-icons.com/2415/PNG/512/mongodb_original_logo_icon_146424.png",
    category: "backend",
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
    category: "frontend",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "backend",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "tools",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "tools",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "design",
  },
  {
    name: "Express",
    logo: "https://img.icons8.com/color/512/express-js.png",
    category: "backend",
  },
  {
    name: "VPS",
    logo: "https://images.seeklogo.com/logo-png/15/2/vps-logo-png_seeklogo-150796.png",
    category: "tools",
  },
  {
    name: "Postman",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-3030217.png?f=webp",
    category: "tools",
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
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Technologies = () => {
  const categories = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    design: "Design",
  };

  return (
    <section
      id="technologies"
      className="relative py-20 bg-gray-50 dark:bg-gray-800/50 overflow-hidden"
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
            My Toolkit
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technologies & Tools
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6"
          >
            A curated collection of technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-300 shadow-sm"
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                  />
                </motion.div>

                <div className="text-center">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                    {tech.name}
                  </span>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize">
                    {tech.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Always learning and exploring new technologies to stay at the forefront of web development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;