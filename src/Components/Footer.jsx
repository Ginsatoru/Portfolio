import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

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
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-gray-800/50 py-12 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={item}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm hover:shadow-md"
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 dark:text-gray-300 text-sm flex items-center justify-center gap-1"
        >
          © {new Date().getFullYear()} Bo Nai. Made with 
          <motion.span 
            className="text-red-500 mx-1"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaHeart />
          </motion.span> 
          using React & Tailwind CSS
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-xs text-gray-500 dark:text-gray-400"
        >
          <p>All rights reserved</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;