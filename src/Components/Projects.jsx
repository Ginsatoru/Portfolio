import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiUser, FiTarget, FiTrendingUp } from "react-icons/fi";
import diamondBayImg from "../Images/ecommerce.png";
import IT from "../Images/IT.png";
import Hotel from "../Images/Hotel.png";

const projects = [
  {
    title: "Business Website",
    description:
      "A modern, responsive website for a community bowling club featuring elegant design, smooth animations, and intuitive navigation that showcases their facilities, services, and membership options.",
    role: "Frontend Developer & UI Designer",
    challenge: "Club needed a professional online presence to attract new members, promote barefoot bowls bookings, and showcase their venue for functions and events.",
    result: "Fully responsive design with AOS animations, interactive mobile sidebar navigation, Google Maps integration, and optimized performance for seamless user experience.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "AOS"],
    image: diamondBayImg,
    demoLink: "https://diamondbaybowlingclub.netlify.app/",
    codeLink: "https://github.com/Ginsatoru/diamondbay",
    businessImpact: "Enhanced online visibility & bookings",
  },
  {
    title: "IT Services Platform",
    description:
      "Enterprise-grade support platform with real-time ticket tracking, team collaboration tools, and automated workflows that transform customer service operations.",
    role: "Lead Developer",
    challenge: "Support team struggled with delayed responses and lost tickets causing customer dissatisfaction.",
    result: "35% faster system response, 50% reduction in ticket resolution time, leading to 4.8/5 client satisfaction rating.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: IT,
    demoLink: "https://www.wvsupportservices.com/",
    codeLink: "https://github.com/Ginsatoru/wvsupport",
    businessImpact: "Cut support costs by 40%",
  },
  {
    title: "Library Management System",
    description:
      "Intuitive library management solution with real-time book availability tracking, automated notifications, and smart search that makes library operations effortless.",
    role: "Full-stack Developer",
    challenge: "Manual processes led to inefficiencies, overdue books, and poor user experience for both staff and patrons.",
    result: "40% increase in staff productivity, 60% reduction in overdue books, and seamless digital experience for 1,000+ active users.",
    technologies: ["React", "Tailwind CSS", "ASP.NET", "SQL Server"],
    image: Hotel,
    demoLink: "https://bbu-e-library.netlify.app/",
    codeLink: "https://github.com/Ginsatoru/library-system",
    businessImpact: "Saved 15 hours per week",
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
            Real Results
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Projects That Drive Business Growth
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6"
          >
            Every project tells a story of transformation, from outdated websites to high-performing digital assets that deliver measurable results
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
                    
                    {/* Business Impact Badge */}
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800/30">
                      <span className="text-green-600 dark:text-green-400 text-lg">💰</span>
                      <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                        {project.businessImpact}
                      </span>
                    </div>

                    {/* Enhanced Project Details */}
                    <div className="mt-4 p-3 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/10 dark:to-blue-900/10 rounded-lg border border-sky-100 dark:border-sky-800/30">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <FiUser className="text-sky-600 dark:text-sky-400 text-xs mt-0.5 flex-shrink-0" />
                          <p className="text-[11px] leading-snug">
                            <strong className="text-sky-700 dark:text-sky-400 font-semibold">Role:</strong>{" "}
                            <span className="text-gray-700 dark:text-gray-300">{project.role}</span>
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <FiTarget className="text-sky-600 dark:text-sky-400 text-xs mt-0.5 flex-shrink-0" />
                          <p className="text-[11px] leading-snug">
                            <strong className="text-sky-700 dark:text-sky-400 font-semibold">Challenge:</strong>{" "}
                            <span className="text-gray-700 dark:text-gray-300">{project.challenge}</span>
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <FiTrendingUp className="text-sky-600 dark:text-sky-400 text-xs mt-0.5 flex-shrink-0" />
                          <p className="text-[11px] leading-snug">
                            <strong className="text-sky-700 dark:text-sky-400 font-semibold">Result:</strong>{" "}
                            <span className="text-gray-700 dark:text-gray-300">{project.result}</span>
                          </p>
                        </div>
                      </div>
                    </div>
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

        {/* Enhanced Footer CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/10 dark:to-blue-900/10 rounded-2xl border border-sky-100 dark:border-sky-800/30"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Want to See Your Website Transformed?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
            I'll create a free demo redesign of your website. No commitment required, just real results you can see and evaluate.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Request Your Free Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;