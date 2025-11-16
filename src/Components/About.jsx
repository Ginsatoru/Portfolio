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
  FaLightbulb,
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
        className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300"
      >
        <div className="flex flex-col items-start">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-14 h-14 mb-5 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400 transition-all duration-300"
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
      value: "15",
      suffix: "+",
      label: "Projects Delivered",
      icon: <FaProjectDiagram />,
    },
    { 
      value: "10", 
      suffix: "+", 
      label: "Happy Clients", 
      icon: <FaSmile /> 
    },
    { 
      value: "100", 
      suffix: "%", 
      label: "Client Satisfaction", 
      icon: <FaAward /> 
    },
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
            Why Work With Me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Your Success Is My Priority
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6"
          >
            A freelance developer who puts your business goals first and delivers websites that convert visitors into customers
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
            {/* My Approach */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <FaLightbulb className="text-sky-600 dark:text-sky-400 text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Unique Approach
                </h3>
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in showing, not telling. When you reach out, I'll create a <strong>live demo redesign</strong> of your website completely free with no strings attached. You'll see exactly what your new site could look like before making any commitment. This way, you can make an informed decision based on real results, not promises.
              </p>
            </motion.div>

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
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a full-stack developer with 3+ years of experience specializing in <strong>website redesigns that drive business growth</strong>. I combine clean, modern design with performance optimization and conversion-focused features. Every line of code I write serves one purpose: helping your business succeed online.
              </p>
            </motion.div>

            {/* What I Do */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <FaCode className="text-sky-600 dark:text-sky-400 text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  What I Deliver
                </h3>
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Fast-loading, mobile-responsive websites built with React, Node.js, and modern best practices. From complete redesigns to custom features, I handle everything: design, development, testing, and deployment. You get a polished, professional website that looks great and performs even better.
              </p>
            </motion.div>

            {/* My Promise */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <FaRocket className="text-sky-600 dark:text-sky-400 text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Promise
                </h3>
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Clear communication, transparent pricing, and on-time delivery. I'll keep you updated throughout the project, explain technical decisions in plain language, and ensure you're 100% satisfied with the final result. Your success is my success.
              </p>
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