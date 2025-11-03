import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-lg" />,
      url: 'https://github.com/Ginsatoru',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-lg" />,
      url: 'https://linkedin.com/in/bo-nai-601296209',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="text-lg" />,
      url: 'https://twitter.com/@NAIBO382461',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -4,
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white dark:bg-gray-900 py-16 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="w-full sm:w-[90%] lg:w-[80%] max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex justify-center space-x-4 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={socialVariants}
                whileHover="hover"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Main Text */}
          <motion.p 
            variants={item}
            className="text-gray-700 dark:text-gray-300 text-base mb-4 flex items-center justify-center gap-2"
          >
            © {new Date().getFullYear()} Bo Nai. Crafted with 
            <motion.span 
              className="text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart />
            </motion.span> 
            using React & Tailwind CSS
          </motion.p>

          {/* Sub Text */}
          <motion.div
            variants={item}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            <p>Building the future, one line of code at a time</p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={item}
            className="mt-6 text-xs text-gray-400 dark:text-gray-500"
          >
            <p>All rights reserved • Made with passion</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;