import { motion } from 'framer-motion';
import ecommerceImg from "../Images/ecommerce.png";
import IT from "../Images/IT.png";
import Hotel from "../Images/Hotel.png";

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: ecommerceImg,
    link: '#',
  },
  {
    title: 'IT Services Platform',
    description: 'A task management tool for IT teams with drag-and-drop features and real-time collaboration.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Emailjs'],
    image: IT,
    link: '#',
  },
  {
    title: 'Hotel Reservation',
    description: 'Book hotels easily with real-time weather updates and 5-day location-based forecasts.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: Hotel,
    link: '#',
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="project-card group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-6">
              <motion.h3
                className="text-xl font-bold mb-2 text-gray-800 dark:text-white"
                whileHover={{ x: 3 }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {project.description}
              </motion.p>

              <motion.div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.a
                href={project.link}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
