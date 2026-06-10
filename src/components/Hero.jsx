import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '4+', label: 'Projects Shipped' },
  { value: '4',  label: 'Tech Stacks' },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#6EE7B7 1px, transparent 1px), linear-gradient(90deg, #6EE7B7 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow — animated */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.07) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ── Text ── */}
        <div className="order-2 md:order-1">
          <motion.p
            className="text-[#6EE7B7] font-mono text-sm tracking-[0.3em] mb-4 uppercase"
            {...fadeUp(0.1)}
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
            {...fadeUp(0.2)}
          >
            Razzaq
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6]">
              Ahmad
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md"
            {...fadeUp(0.3)}
          >
            Building cross-platform apps and scalable backends with Flutter, React.js, Node.js &amp; .NET Core.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" {...fadeUp(0.4)}>
            <motion.a
              href="mailto:razzaqkhan3881@gmail.com"
              className="px-6 py-3 bg-[#6EE7B7] text-[#0A0A0F] font-semibold rounded-lg text-sm tracking-wide"
              whileHover={{ scale: 1.04, backgroundColor: '#4dd4a0' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://github.com/RazzaqAhmad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/10 text-gray-300 rounded-lg text-sm tracking-wide"
              whileHover={{ borderColor: 'rgba(110,231,183,0.5)', color: '#6EE7B7', scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              GitHub →
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div className="flex gap-10 mt-14" {...fadeUp(0.55)}>
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-[#6EE7B7]">{value}</div>
                <div className="text-xs text-gray-500 mt-1 tracking-wide">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Photo ── */}
        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="relative">
            {/* Spinning decorative ring */}
            <motion.div
              className="absolute -inset-6 rounded-2xl border border-[#6EE7B7]/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-3 rounded-2xl border border-[#6EE7B7]/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            <motion.img
              src={profilePhoto}
              alt="Razzaq Ahmad"
              className="w-64 h-80 md:w-80 md:h-96 object-cover object-top rounded-2xl relative z-10 grayscale"
              whileHover={{ filter: 'grayscale(0)', scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 z-20 bg-[#0D0D14] border border-white/10 rounded-xl px-4 py-3 shadow-2xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-[#6EE7B7] rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs text-gray-300 font-mono">Available for work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent"
          animate={{ scaleY: [1, 0.6, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}