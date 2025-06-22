import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'Git', level: 80 },
  { name: 'UI/UX Design', level: 75 },
];

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
    <section
      id="skills"
      className="section bg-gray-50 dark:bg-gray-800/50 rounded-xl mb-20 py-0.5 px-80"

    >
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
        className="grid md:grid-cols-1 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
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
                    className="bg-gradient-to-r from-blue-500 to-sky-400 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
