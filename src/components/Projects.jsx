import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'Hostel Management System',
    description: 'Complete hostel management app with room allocation, resident registration, and fee tracking. Real-time data sync across admin and student panels.',
    stack: ['Flutter', 'Firebase', 'Node.js'],
    color: 'from-[#6EE7B7] to-teal-500',
    github: 'https://github.com/RazzaqAhmad/hostel',
    highlights: ['Firebase Auth & Firestore', 'Real-time sync', 'Admin & Student panels'],
    emoji: '🏠',
  },
  {
    title: 'Real Estate App',
    description: 'Cross-platform real estate browsing app with property listings, search filters, and detail views. Supports multiple screen sizes with smooth navigation.',
    stack: ['Flutter', 'Supabase', 'REST APIs'],
    color: 'from-blue-400 to-indigo-500',
    github: 'https://github.com/RazzaqAhmad/Real-Estate-Apps-flutter',
    highlights: ['Supabase backend', 'User auth & storage', 'Responsive UI'],
    emoji: '🏡',
  },
  {
    title: 'Fit Tracker',
    description: 'Fitness tracking web app with workout logging, progress charts, and goal setting. Component-based React frontend connected to a Node.js REST API.',
    stack: ['React.js', 'Node.js', 'REST APIs'],
    color: 'from-purple-400 to-pink-500',
    github: 'https://github.com/RazzaqAhmad/Fit-Tracker-React',
    highlights: ['Progress charts', 'Goal tracking', 'Dynamic state mgmt'],
    emoji: '💪',
  },
  {
    title: 'Super Market Management System',
    description: 'End-to-end system for product management, inventory tracking, billing, and automated stock reordering with role-based authentication.',
    stack: ['.NET Core', 'SQL Server'],
    color: 'from-orange-400 to-red-400',
    github: null,
    highlights: ['Role-based auth', 'Auto stock reorder', 'Sales dashboard'],
    emoji: '🛒',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#6EE7B7] font-mono text-xs tracking-[0.3em] uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl font-bold">Projects</h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              className="bg-[#0D0D14] border border-white/5 rounded-2xl p-6 flex flex-col group relative overflow-hidden"
              whileHover={{ borderColor: 'rgba(255,255,255,0.1)', y: -4 }}
              transition={{ duration: 0.25 }}
            >
              {/* Shimmer overlay on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(110,231,183,0.04) 0%, transparent 60%)',
                }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}
                  whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.emoji}
                </motion.div>

                {project.github ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 font-mono flex items-center gap-1 text-sm"
                    whileHover={{ color: '#6EE7B7', x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>GitHub</span>
                    <span>→</span>
                  </motion.a>
                ) : (
                  <span className="text-xs text-gray-700 font-mono">Academic</span>
                )}
              </div>

              <h3 className="text-lg font-semibold mb-3 group-hover:text-[#6EE7B7] transition-colors duration-300 relative z-10">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 relative z-10">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-5 relative z-10">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-gray-500">
                    <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.color}`} />
                    {h}
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 relative z-10">
                {project.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400"
                    whileHover={{ backgroundColor: 'rgba(110,231,183,0.1)', color: '#6EE7B7' }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}