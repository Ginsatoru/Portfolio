import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/logo.png";

const Header = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    }
  }, [setDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "technologies",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/60 dark:border-gray-800/60"
            : "bg-transparent"
        }`}
      >
        <div className="w-full lg:w-4/5 mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#home")}
            >
              <img
                src={logo}
                alt="Bo Nai Logo"
                className="w-32 h-32 object-contain"
              />
            </motion.a>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800/70"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 border border-sky-600/20 dark:border-sky-400/20 rounded-xl"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}

              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="ml-4 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-sky-100 dark:hover:bg-sky-900/20 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300 shadow-sm"
                aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaSun className="text-yellow-500 text-lg" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaMoon className="text-gray-700 text-lg" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm"
                aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
              >
                {darkMode ? (
                  <FaSun className="text-yellow-500" />
                ) : (
                  <FaMoon className="text-gray-700" />
                )}
              </motion.button>

              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <FaTimes size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <FaBars size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-lg z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden border-l border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pt-0 pb-0 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <img
                      src={logo}
                      alt="Bo Nai Logo"
                      className="w-24 h-16 object-contain"
                    />
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <FaTimes className="text-gray-700 dark:text-gray-300 text-lg" />
                  </motion.button>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 flex-1">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className={`px-4 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                          isActive
                            ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 border-l-4 border-sky-600 dark:border-sky-400"
                            : "text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800 border-l-4 border-transparent"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            isActive
                              ? "bg-sky-600 dark:bg-sky-400"
                              : "bg-gray-400"
                          }`}
                        />
                        {item.name}
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Footer */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Crafting digital experiences
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
