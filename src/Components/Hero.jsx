import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import BoImg from "../Images/Bo.png";

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const imageVariants = {
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hidden: {
      scale: 0.9,
    },
  };

  return (
    <div className="relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(at 71% 77%, hsla(220, 90%, 70%, 0.3) 0px, transparent 50%),
              radial-gradient(at 29% 36%, hsla(300, 90%, 70%, 0.3) 0px, transparent 50%),
              radial-gradient(at 65% 29%, hsla(150, 90%, 70%, 0.3) 0px, transparent 50%),
              radial-gradient(at 35% 65%, hsla(30, 90%, 70%, 0.3) 0px, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          }}
        />
      </motion.div>

      <motion.section
        initial="hidden"
        animate={controls}
        variants={variants}
        id="home"
        className="section flex items-center justify-center min-h-screen pt-20 px-4"
      >
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <motion.div
            variants={imageVariants}
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <img
              src={BoImg}
              alt="Bo's profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hi, I'm <span className="gradient-text hover:bg-gradient-to-r transition-all duration-500">Bo</span>
          </motion.h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Web Developer | React Specialist
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            I'm a full stack developer crafting exceptional digital experiences.
            I specialize in building clean, efficient, and user-friendly
            interfaces and robust backend functionality using modern
            technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 border-2 border-sky-600 text-sky-600 dark:text-sky-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              View Work
            </motion.a>
          </div>
          
          <div className="flex justify-center space-x-6">
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
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-2xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;