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
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

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
            className="text-2xl font-bold gradient-text"
            whileHover={{ 
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            My Portfolio
          </motion.a>

          <motion.nav
            className="hidden md:flex items-center space-x-8"
            variants={navStagger}
            initial="hidden"
            animate="visible"
          >
            {['About', 'Skills', 'Technologies', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-700 dark:text-gray-300 group"
                variants={fadeUp}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sky-600 dark:bg-sky-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              </motion.a>
            ))}

            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 90 }}
              variants={fadeUp}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <FaMoon className="group-hover:rotate-12 transition-transform duration-300" />
              )}
            </motion.button>
          </motion.nav>

          <motion.button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 90 }}
            variants={fadeUp}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;