import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import BoImg from "../Images/Bo.png";

const Hero = () => {
  // Stagger animation for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth effect
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-900"
    >
      {/* Centered container with 80% width */}
      <div className="w-full sm:w-[90%] lg:w-[78%] max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center justify-items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-5 lg:space-y-6 w-full"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-2 sm:space-y-3"
            >
              <p className="text-sky-600 dark:text-sky-400 font-medium tracking-wide uppercase text-xs sm:text-sm">
                Web Developer
              </p>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight">
                Building digital{" "}
                <span className="text-sky-600 dark:text-sky-400">products</span>
                , brands and{" "}
                <span className="text-sky-600 dark:text-sky-400">
                  experiences
                </span>
                .
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Hi, I'm Bo Nai, a developer crafting exceptional web experiences
              with clean code and modern design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 px-6 xs:px-8 py-3 xs:py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-lg xs:rounded-xl font-medium transition-all duration-300 text-base xs:text-lg"
              >
                View Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-base xs:text-lg" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-6 xs:px-8 py-3 xs:py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg xs:rounded-xl font-medium hover:border-sky-600 dark:hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300 text-base xs:text-lg"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 xs:gap-4 pt-4"
            >
              {[
                {
                  icon: <FaGithub />,
                  href: "https://github.com/Ginsatoru",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://linkedin.com/in/bo-nai-601296209",
                  label: "LinkedIn",
                },
                {
                  icon: <FaTwitter />,
                  href: "https://twitter.com/@NAIBO382461",
                  label: "Twitter",
                },
                {
                  icon: <HiOutlineMail />,
                  href: "mailto:naibo2002@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 xs:p-3.5 text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg xs:rounded-xl transition-all duration-300"
                >
                  <span className="text-xl xs:text-2xl">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-md lg:justify-self-end"
          >
            <div className="relative w-full mx-auto">
              {/* Main image container with light border */}
              <div className="relative rounded-2xl xs:rounded-3xl overflow-hidden dark:border-gray-700">
                <img
                  src={BoImg}
                  alt="Bo Nai"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;