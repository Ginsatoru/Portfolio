import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  // Animation variants
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
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Happy Clients" },
    { value: "3", label: "Awards Won" },
  ];

  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={item}>
          <motion.h3
            className="text-2xl font-semibold mb-4 flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            <FaUser className="text-blue-500" />
            Who am I?
          </motion.h3>

          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
          >
            I'm a passionate web developer with 3 years of experience building
            modern web applications. I specialize in React.js and enjoy
            developing end-to-end solutions that provide exceptional user
            experiences.
          </motion.p>

          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My journey in web development started when I was in college, and
            I've been hooked ever since. I love the challenge of turning complex
            problems into simple, beautiful solutions.
          </motion.p>

          <motion.div className="space-y-4" variants={container}>
            <motion.div
              className="flex items-center gap-3"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <FaUser className="text-blue-500 min-w-[20px]" />
              <div>
                <span className="font-medium">Name:</span>
                <span className="text-gray-700 dark:text-gray-300 ml-2">
                  Bo Nai
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-blue-500 min-w-[20px]" />
              <div>
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:naibo2002@gmail.com"
                  className="text-gray-700 dark:text-gray-300 ml-2 hover:text-blue-500 transition-colors"
                >
                  naibo2002@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <FaMapMarkerAlt className="text-blue-500 min-w-[20px]" />
              <div>
                <span className="font-medium">Location:</span>
                <span className="text-gray-700 dark:text-gray-300 ml-2">
                  Siem Reap, Cambodia
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="grid grid-cols-2 gap-4" variants={container}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <motion.h4
                className="text-2xl font-bold mb-2 gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                {stat.value}
              </motion.h4>
              <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
