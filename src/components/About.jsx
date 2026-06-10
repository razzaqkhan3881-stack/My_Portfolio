import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const config = [
  { key: 'name',      value: '"Razzaq Ahmad"',                 color: 'text-[#6EE7B7]' },
  { key: 'role',      value: '"Full-Stack Developer"',          color: 'text-[#6EE7B7]' },
  { key: 'location',  value: '"Mianwali, Punjab, Pakistan"',    color: 'text-yellow-400' },
  { key: 'email',     value: '"razzaqkhan3881@gmail.com"',      color: 'text-blue-400' },
  { key: 'phone',     value: '"03467513244"',                   color: 'text-purple-400' },
  { key: 'github',    value: '"github.com/RazzaqAhmad"',        color: 'text-pink-400' },
  { key: 'available', value: 'true',                            color: 'text-[#6EE7B7]' },
  { key: 'languages', value: '["Urdu", "English"]',             color: 'text-orange-400' },
];

const capabilities = [
  { label: 'Mobile Apps', icon: '📱' },
  { label: 'Web Apps',    icon: '🌐' },
  { label: 'REST APIs',   icon: '⚡' },
  { label: 'Databases',   icon: '🗄️' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Terminal card */}
          <motion.div
            className="bg-[#0D0D14] border border-white/5 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Window bar */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5">
              {['#FF5F57','#FEBC2E','#28C840'].map((c) => (
                <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
              <span className="ml-3 text-xs font-mono text-gray-600">razzaq.config.js</span>
            </div>

            <div className="p-6 font-mono text-sm space-y-2">
              {config.map(({ key, value, color }, i) => (
                <motion.div
                  key={key}
                  className="flex gap-2 flex-wrap"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                >
                  <span className="text-gray-600">const</span>
                  <span className="text-blue-300">{key}</span>
                  <span className="text-gray-500">=</span>
                  <span className={color}>{value}</span>
                  <span className="text-gray-600">;</span>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <div className="flex items-center gap-1 pt-1">
                <span className="text-gray-600 font-mono text-sm">▸</span>
                <motion.span
                  className="w-2 h-4 bg-[#6EE7B7] rounded-sm"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <p className="text-[#6EE7B7] font-mono text-xs tracking-[0.3em] uppercase mb-3">About Me</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Turning ideas into<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6]">
                real software
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a versatile full-stack developer with experience building cross-platform mobile apps, responsive web applications, and scalable backend APIs. My stack spans Flutter, React.js, Node.js, and .NET Core.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I care about clean architecture, performance optimization, and delivering software that actually works in the real world — not just on localhost.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map(({ label, icon }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-3 bg-[#0D0D14] border border-white/5 rounded-xl p-4 cursor-default"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  whileHover={{ borderColor: 'rgba(110,231,183,0.3)', y: -3 }}
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm text-gray-300">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}