import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Git', level: 80 },
  { name: 'UI/UX Design', level: 75 },
];

const tools = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'Git',
  'Figma',
  'VS Code',
  'Jest',
  'Webpack',
  'Firebase',
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeUp}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Technical Skills */}
        <motion.div variants={fadeUp}>
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeUp}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div variants={fadeUp}>
          <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-4" variants={container}>
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="skill-item bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex items-center justify-center"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className="text-gray-700 dark:text-gray-300">{tool}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
