import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaProjectDiagram,
  FaSmile,
  FaAward,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const stats = [
    { value: "3+", label: "Years Experience", icon: <FaCalendarAlt /> },
    { value: "10+", label: "Projects Completed", icon: <FaProjectDiagram /> },
    { value: "5+", label: "Happy Clients", icon: <FaSmile /> },
    { value: "3", label: "Awards Won", icon: <FaAward /> },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block text-sky-400">
            About Me
            <motion.span
              className="absolute bottom-0 left-0"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my experience, skills, and professional journey
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column */}
          <motion.div variants={item} className="space-y-8">
            <motion.div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-xl text-sky-500 dark:text-sky-400">
                  <FaUser className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Personal Info</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a passionate full-stack developer specializing in modern web technologies.
                    With 3+ years of experience, I create efficient, scalable solutions with
                    exceptional user experiences.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700"
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start gap-5">
                <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-xl text-sky-500 dark:text-sky-400">
                  <FaProjectDiagram className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">My Journey</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Started coding in college, fell in love with problem-solving through programming.
                    I've worked on diverse projects from SaaS platforms to e-commerce solutions,
                    always focusing on clean code and user-centric design.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={container}>
              {/* Info Cards */}
              {[
                {
                  icon: <FaUser />,
                  label: "Name",
                  value: "Bo Nai",
                },
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  value: (
                    <a
                      href="mailto:naibo2002@gmail.com"
                      className="font-medium hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                    >
                      naibo2002@gmail.com
                    </a>
                  ),
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  value: "Siem Reap, Cambodia",
                },
              ].map((info, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:bg-sky-50 dark:hover:bg-gray-700/50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg text-sky-500 dark:text-sky-400">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div className="grid grid-cols-2 gap-5" variants={container}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative h-full"
              >
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/10 dark:to-sky-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="w-14 h-14 mb-4 rounded-full flex items-center justify-center border-2 border-sky-200 dark:border-sky-900 group-hover:border-sky-500 dark:group-hover:border-sky-400 transition-all duration-300 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/20">
                    <div className="text-sky-500 dark:text-sky-400 text-2xl transition-transform group-hover:scale-110">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {stat.value}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-sky-500 w-0 group-hover:w-full transition-all duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
