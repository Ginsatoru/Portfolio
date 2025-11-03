import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ecommerceImg from "../Images/ecommerce.png";
import IT from "../Images/IT.png";
import Hotel from "../Images/Hotel.png";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: ecommerceImg,
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "IT Services Platform",
    description:
      "A customer support and IT service management platform with real-time ticket tracking, task assignment, and efficient team collaboration.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: IT,
    demoLink: "https://www.wvsupportservices.com/",
    codeLink: "https://github.com/Ginsatoru/wvsupport",
  },
  {
    title: "Library Management System",
    description:
      "Manage library resources effortlessly with real-time book availability and automated due-date reminders.",
    technologies: ["React", "Tailwind", "ASP.NET", "SQL Server"],
    image: Hotel,
    demoLink: "https://bbu-e-library.netlify.app/",
    codeLink: "https://github.com/Ginsatoru/library-system",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
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
            My Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6"
          >
            Here are some of my featured projects built with modern technologies
            and best practices
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative h-full"
            >
              <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Image with overlay effect */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-colors duration-300 shadow-sm hover:shadow-md text-sm font-medium"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiExternalLink className="text-base" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiGithub className="text-base" />
                        Code
                      </motion.a>
                    </div>
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
          className="text-center mt-16"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Interested in working together? Feel free to reach out!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;