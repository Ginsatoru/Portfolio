import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import BoImg from "../Images/Bo.png";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="home"
      className="section flex items-center justify-center min-h-screen pt-20"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500"
        >
          <img
            src={BoImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Hi, I'm <span className="gradient-text">Bo Nai</span>
        </motion.h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Web Developer | React Specialist
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-8">
          I build exceptional digital experiences with modern technologies.
          Focused on creating clean, efficient, and user-friendly interfaces and
          functionality.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Work
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Ginsatoru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/bo-nai-601296209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/@NAIBO382461"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:naibo2002@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
          >
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
