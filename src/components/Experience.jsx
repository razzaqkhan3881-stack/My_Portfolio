import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const workItems = [
  'Delivered production-ready mobile & web apps using Flutter, React.js, and Node.js.',
  'Integrated Firebase, Supabase, and payment gateways into live applications.',
  'Developed and secured .NET Core Web APIs with JWT-based authentication.',
  'Optimized SQL Server queries, reducing processing time significantly.',
  'Collaborated with design teams on accessible, responsive user interfaces.',
];

const certItems = [
  'Hands-on projects building Web APIs with .NET Core framework.',
  'Middleware, request pipelines, and API security with auth mechanisms.',
];

const listVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const itemVariant = {
  hidden: { opacity: 0, x: -14 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

function TimelineBlock({ dotColor, children }) {
  return (
    <div className="relative pl-6 border-l border-white/10">
      <motion.div
        className="absolute -left-1.5 top-1 w-3 h-3 rounded-full"
        style={{ background: dotColor }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      />
      {children}
    </div>
  );
}

export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 px-6 bg-[#0D0D14]" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#6EE7B7] font-mono text-xs tracking-[0.3em] uppercase mb-3">Background</p>
          <h2 className="text-4xl font-bold">Experience & Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Work */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xs font-mono text-[#6EE7B7] tracking-[0.25em] uppercase mb-6">Work</h3>
            <TimelineBlock dotColor="#6EE7B7">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-white">Full-Stack Developer</h4>
                  <p className="text-sm text-gray-500 mt-0.5">Freelance & Academic · Pakistan</p>
                </div>
                <span className="text-xs font-mono text-[#6EE7B7] bg-[#6EE7B7]/10 px-3 py-1 rounded-full shrink-0 ml-4">
                  2022 – Present
                </span>
              </div>
              <motion.ul
                className="mt-4 space-y-2"
                variants={listVariant}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
              >
                {workItems.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariant}
                    className="flex gap-3 text-sm text-gray-500"
                  >
                    <span className="text-[#6EE7B7] mt-0.5 shrink-0">▸</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </TimelineBlock>
          </motion.div>

          {/* Education + Certificate */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <h3 className="text-xs font-mono text-[#6EE7B7] tracking-[0.25em] uppercase mb-6">Education</h3>
            <div className="mb-10">
              <TimelineBlock dotColor="#60A5FA">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-white">BSCS — Computer Science</h4>
                    <p className="text-sm text-gray-500 mt-0.5">Ravian Public Boys Higher Secondary School</p>
                    <p className="text-xs text-gray-600 mt-0.5">Kammar Mushani, Mianwali</p>
                  </div>
                  <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full shrink-0 ml-4">
                    2021 – 2023
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  Studied algorithms, data structures, software design principles, and computer programming fundamentals.
                </p>
              </TimelineBlock>
            </div>

            <h3 className="text-xs font-mono text-[#6EE7B7] tracking-[0.25em] uppercase mb-6">Certificate</h3>
            <TimelineBlock dotColor="#C084FC">
              <h4 className="font-semibold text-white">.NET Core Web API Development</h4>
              <motion.ul
                className="mt-3 space-y-2"
                variants={listVariant}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
              >
                {certItems.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariant}
                    className="flex gap-3 text-sm text-gray-500"
                  >
                    <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </TimelineBlock>
          </motion.div>
        </div>
      </div>
    </section>
  );
}