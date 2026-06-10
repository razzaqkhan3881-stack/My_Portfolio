import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    category: 'Mobile',
    color: 'from-[#6EE7B7] to-teal-400',
    icon: '📱',
    skills: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'REST APIs', 'Local Notifications', 'State Management'],
  },
  {
    category: 'Frontend',
    color: 'from-blue-400 to-indigo-500',
    icon: '🖥️',
    skills: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Responsive UI Design'],
  },
  {
    category: 'Backend',
    color: 'from-purple-400 to-pink-500',
    icon: '⚙️',
    skills: ['Node.js', '.NET Core', 'Web APIs', 'Middleware', 'Authentication & Authorization'],
  },
  {
    category: 'Database',
    color: 'from-orange-400 to-red-400',
    icon: '🗄️',
    skills: ['SQL Server', 'Firebase Firestore', 'Supabase', 'Query Optimization'],
  },
  {
    category: 'DevOps / Tools',
    color: 'from-yellow-400 to-orange-400',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Payment Gateway Integration', 'Automated Backup & Recovery'],
  },
  {
    category: 'Soft Skills',
    color: 'from-[#6EE7B7] to-blue-400',
    icon: '🧠',
    skills: ['Critical Thinking', 'Team Leadership', 'Problem Solving', 'Time Management'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const tagVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1,  transition: { duration: 0.3 } },
};

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 px-6 bg-[#0D0D14]" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#6EE7B7] font-mono text-xs tracking-[0.3em] uppercase mb-3">What I Work With</p>
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {skillGroups.map(({ category, color, icon, skills }) => (
            <motion.div
              key={category}
              variants={cardVariant}
              className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-6 group"
              whileHover={{ borderColor: 'rgba(255,255,255,0.12)', y: -4, transition: { duration: 0.25 } }}
            >
              <motion.div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg mb-4`}
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {icon}
              </motion.div>

              <h3 className={`font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
                {category}
              </h3>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariant}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-mono hover:bg-white/10 hover:text-gray-200 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}