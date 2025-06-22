import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', logo: 'https://images.icon-icons.com/2415/PNG/512/mongodb_original_logo_icon_146424.png' },
  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { name: 'Webpack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
  { name: 'Postman', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-3030217.png?f=webp' },
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

const Technologies = () => {
  return (
    <section id="technologies" className="section bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeUp}
      >
        Tools & Technologies
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="tech-item bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow"
            variants={fadeUp}
            whileHover={{ 
              scale: 1.05,
              transition: { type: 'spring', stiffness: 200 }
            }}
          >
            <img 
              src={tech.logo} 
              alt={tech.name} 
              className="w-12 h-12 object-contain"
              loading="lazy"
            />
            <span className="text-gray-700 dark:text-gray-300 text-sm text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;