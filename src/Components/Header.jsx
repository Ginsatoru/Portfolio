import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const navStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const Header = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            My Portfolio
          </motion.a>

          <motion.nav
            className="hidden md:flex items-center space-x-8"
            variants={navStagger}
            initial="hidden"
            animate="visible"
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                variants={fadeUp}
                whileHover={{ x: 1 }}
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              whileTap={{ rotate: 90 }}
              variants={fadeUp}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
          </motion.nav>

          <motion.button
            className="md:hidden p-2"
            onClick={() => setDarkMode(!darkMode)}
            whileTap={{ scale: 0.9, rotate: 90 }}
            variants={fadeUp}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
