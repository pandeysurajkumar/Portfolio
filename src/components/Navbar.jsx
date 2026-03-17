import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop - 140;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(item.href);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "border-white/10 bg-slate-950/90 shadow-lg shadow-indigo-500/10"
            : "border-black/10 bg-white/90 shadow-lg"
          : theme === "dark"
          ? "border-white/10 bg-slate-950/70"
          : "border-black/10 bg-white/70"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left Side Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative text-xl font-bold tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          Suraj
          <span className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}>
            .
          </span>
        </motion.a>

        {/* Right Side */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Desktop Nav */}
          <nav
            className={`hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium ${
              theme === "dark" ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -2 }}
                className={`relative transition-colors duration-300 ${
                  active === item.href
                    ? "text-indigo-500"
                    : theme === "dark"
                    ? "hover:text-indigo-300"
                    : "hover:text-indigo-600"
                }`}
              >
                {item.label}

                {active === item.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Resume Button */}
          <motion.a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
              theme === "dark"
                ? "border border-purple-400/50 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 hover:border-purple-400 hover:from-purple-500/30 hover:to-pink-500/30"
                : "border border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:border-purple-500"
            }`}
          >
            📄 Resume
          </motion.a>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            className={`inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition ${
              theme === "dark"
                ? "border-white/20 text-white hover:border-indigo-300"
                : "border-slate-300 text-slate-800 hover:border-indigo-500"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className={`inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition md:hidden ${
              theme === "dark"
                ? "border-white/20 text-white hover:border-indigo-300"
                : "border-slate-300 text-slate-800 hover:border-indigo-500"
            }`}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`border-t px-6 py-4 md:hidden ${
            theme === "dark"
              ? "border-white/10 bg-slate-950/95"
              : "border-black/10 bg-white/95"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition ${
                  active === item.href
                    ? "text-indigo-500"
                    : theme === "dark"
                    ? "text-slate-200 hover:text-indigo-300"
                    : "text-slate-700 hover:text-indigo-600"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={`mt-2 inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${
                theme === "dark"
                  ? "border border-purple-400/50 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
                  : "border border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700"
              }`}
            >
              📄 Resume
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}