import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaCalendarAlt,
  FaProjectDiagram,
  FaSmile,
  FaAward,
  FaCode,
  FaRocket,
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Enhanced Count-up animation hook
const useCountUp = (end, duration = 2) => {
  const nodeRef = useRef();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 120,
    mass: 0.8,
  });
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [motionValue, isInView, end]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return nodeRef;
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      y: -4,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const StatCard = ({ stat, index }) => {
    const countRef = useCountUp(parseInt(stat.value));

    return (
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex flex-col items-start">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-14 h-14 mb-5 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:shadow transition-all duration-300"
          >
            <span className="text-xl">{stat.icon}</span>
          </motion.div>
          <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">
            <span ref={countRef}>0</span>
            {stat.suffix}
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wide">
            {stat.label}
          </p>
        </div>
      </motion.div>
    );
  };

  const stats = [
    {
      value: "3",
      suffix: "+",
      label: "Years Experience",
      icon: <FaCalendarAlt />,
    },
    {
      value: "10",
      suffix: "+",
      label: "Projects Completed",
      icon: <FaProjectDiagram />,
    },
    { value: "5", suffix: "+", label: "Happy Clients", icon: <FaSmile /> },
    { value: "5", suffix: "+", label: "Freelance Clients", icon: <FaAward /> },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gray-50 dark:bg-gray-800/50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-100/40 dark:bg-sky-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
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
            Get to Know Me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6"
          >
            Passionate developer crafting digital experiences that make a difference
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            {/* Who I Am */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <FaUser className="text-sky-600 dark:text-sky-400 text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Who I Am
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer dedicated to crafting modern web applications 
                that are not just functional, but delightful to use. With over three years of 
                hands-on experience, I focus on writing scalable, maintainable code and creating 
                intuitive user experiences that feel seamless and engaging.
              </p>
            </motion.div>

            {/* My Journey */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <FaRocket className="text-sky-600 dark:text-sky-400 text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Journey
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My coding journey began in college where I discovered the thrill of solving 
                real-world problems through technology. Since then, I've evolved from building 
                simple scripts to developing complex SaaS platforms and e-commerce solutions, 
                always prioritizing clean architecture and user-centric design principles.
              </p>
            </motion.div>

            {/* What I Do */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <FaCode className="text-sky-600 dark:text-sky-400 text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  What I Do
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in building full-stack applications using modern technologies like 
                React, Node.js, and cloud platforms. From initial concept to final deployment, 
                I manage the entire development lifecycle, transforming ideas into polished, 
                high-performance digital products that exceed expectations.
              </p>
            </motion.div>

            {/* Personal Info Card */}
            <motion.div
              variants={itemVariants}
              className="pt-6 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                    <FaUser className="text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white block">Name:</span>
                    <span className="text-gray-600 dark:text-gray-300">Bo Nai</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                    <FaUser className="text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white block">Email:</span>
                    <a
                      href="mailto:naibo2002@gmail.com"
                      className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-300"
                    >
                      naibo2002@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white block">Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">Siem Reap, Cambodia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;