import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profile from "../assets/profile.jpg";

const capabilities = [
  { label: "Mobile Apps", icon: "📱" },
  { label: "Web Apps", icon: "🌐" },
  { label: "REST APIs", icon: "⚡" },
  { label: "Databases", icon: "🗄️" },
];

const stats = [
  { value: "10+", label: "Projects" },
  { value: "3+", label: "Years Learning" },
  { value: "4+", label: "Tech Stacks" },
];

export default function About() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] rounded-[40px] blur-3xl opacity-30 animate-pulse" />

              {/* Image */}
              <motion.img
                src={profile}
                alt="Razzaq Ahmad"
                className="relative w-[320px] md:w-[420px] rounded-[40px] border border-white/10 shadow-2xl object-cover"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2"
              >
                <div className="glass-card px-6 py-3 rounded-xl">
                  <p className="text-[#6EE7B7] font-semibold">
                    Full-Stack Developer
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-[#6EE7B7] font-mono text-xs tracking-[0.35em] uppercase mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Turning ideas into
              <br />
              <span className="bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] bg-clip-text text-transparent">
                real software
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a versatile full-stack developer with experience building
              cross-platform mobile applications, responsive web applications,
              and scalable backend APIs.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              My primary stack includes Flutter, React.js, Node.js, .NET Core,
              Firebase, Supabase, and SQL Server. I focus on performance,
              scalability, and delivering production-ready solutions.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-card rounded-xl p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.4 + index * 0.1,
                  }}
                >
                  <h3 className="text-3xl font-bold text-[#6EE7B7]">
                    {item.value}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CAPABILITIES */}
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-card rounded-xl p-5 flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.7 + index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                >
                  <span className="text-2xl">
                    {item.icon}
                  </span>

                  <span className="text-gray-300 font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}