import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-xl" />,
      url: 'https://github.com/Ginsatoru',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-xl" />,
      url: 'https://linkedin.com/in/bo-nai-601296209',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="text-xl" />,
      url: 'https://twitter.com/@NAIBO382461',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      y: -3,
      scale: 1.05,
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
      className="relative bg-gray-50 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="w-[85%] max-w-6xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {/* Main Section: All content in one row on desktop */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-200 dark:border-gray-800">
            {/* Logo/Name */}
            <motion.div variants={item} className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Bo Nai
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Web Developer
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row items-center gap-3 text-sm"
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FaEnvelope className="text-sky-600 dark:text-sky-400 text-xs" />
                <a 
                  href="mailto:naibo2002@gmail.com"
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
                >
                  naibo2002@gmail.com
                </a>
              </div>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
              <div className="text-gray-600 dark:text-gray-400">
                Siem Reap, Cambodia
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={item}
              className="flex items-center gap-3"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  variants={socialVariants}
                  whileHover="hover"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 flex items-center justify-center transition-colors duration-300 border border-gray-200 dark:border-gray-700"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Bottom Section: Copyright & Credits */}
          <motion.div 
            variants={item}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
              {/* Copyright */}
              <div className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Bo Nai. All rights reserved.
              </div>

              {/* Made with love */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span>Crafted with</span>
                <motion.span 
                  className="text-red-500"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <FaHeart className="text-sm" />
                </motion.span> 
                <span>using React & Tailwind</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;