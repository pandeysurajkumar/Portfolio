import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  const floatY1 = useTransform(scrollY, [0, 500], [0, -40]);
  const floatY2 = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-between gap-12 overflow-hidden px-6 pb-24 pt-32 md:flex-row"
    >
      {/* Background Orbs */}
      <motion.div
        className="absolute right-20 top-20 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl"
        style={{ y: floatY1 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"
        style={{ y: floatY2 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Left Content */}
      <div className="relative z-10 flex flex-1 flex-col gap-6 text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`text-sm uppercase tracking-[0.25em] ${
            theme === "dark" ? "text-indigo-300" : "text-indigo-600"
          }`}
        >
          Full Stack Developer • Web Application Builder
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span
            className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === "dark"
                ? "from-white via-slate-100 to-slate-300"
                : "from-slate-900 via-slate-800 to-slate-700"
            }`}
          >
            Suraj Kumar Pandey
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className={`text-xl font-semibold md:text-2xl ${
            theme === "dark" ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          Full Stack Developer | Frontend & Backend Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${
            theme === "dark" ? "text-slate-300" : "text-slate-700"
          }`}
        >
          I build modern, responsive, and scalable web applications with clean
          UI and efficient backend systems. Skilled in{" "}
          <span className="font-semibold text-indigo-500">
            React, JavaScript, Node.js, Express, MongoDB, and REST APIs
          </span>
          . I enjoy turning ideas into real-world digital products that are
          fast, functional, and user-friendly.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/40"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Contact Me</span>
          </motion.a>

          {/* Projects Button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ${
              theme === "dark"
                ? "border-indigo-300 text-indigo-200 hover:border-indigo-200 hover:bg-white/5 hover:text-white"
                : "border-indigo-500 text-indigo-700 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
            }`}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">View Projects</span>
          </motion.a>

          {/* Resume Button */}
          <motion.a
            href="/resume.docx"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ${
              theme === "dark"
                ? "border-purple-300 text-purple-200 hover:border-purple-200 hover:bg-white/5 hover:text-white"
                : "border-purple-500 text-purple-700 hover:border-purple-600 hover:bg-purple-600 hover:text-white"
            }`}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Download Resume</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10"
      >
        <div className="relative">
          <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-indigo-400 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-indigo-500/50 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <img
              src="/profile.jpg"
              alt="Suraj Pandey"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-indigo-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute -inset-8 rounded-full border-2 border-purple-400/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}