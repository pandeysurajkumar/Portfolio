import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useTheme } from "../ThemeContext";

export default function Projects({ projects = [] }) {
  const { theme } = useTheme();

  return (
    <motion.section
      id="projects"
      className={theme === "dark" ? "bg-white/5 py-16" : "bg-slate-50 py-16"}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className={`text-sm uppercase tracking-[0.2em] ${
                theme === "dark" ? "text-indigo-200" : "text-indigo-600"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Work
            </motion.p>

            <motion.h2
              className={`relative inline-block text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Projects

              <motion.span
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.h2>
          </motion.div>

          <motion.a
            href="mailto:pandeysurajkumar265@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            className={`relative hidden rounded-full border px-4 py-2 text-xs font-semibold transition sm:inline-flex ${
              theme === "dark"
                ? "border-white/20 text-slate-200 hover:border-indigo-300 hover:bg-white/5 hover:text-white"
                : "border-slate-300 text-slate-700 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
            }`}
          >
            <motion.span
              className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for freelance
          </motion.a>
        </div>

        {/* Loading State */}
        {projects.length === 0 ? (
          <div className="flex items-center justify-center py-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-12 w-12 rounded-full border-[3px] border-indigo-500 border-t-purple-500"
            />
          </div>
        ) : (
          /* Project Grid */
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}