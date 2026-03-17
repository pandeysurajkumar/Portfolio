import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../ThemeContext";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Youtube,
  Copy,
  CheckCircle,
  Send,
  MessageSquare,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";

export default function Contact() {
  const { theme } = useTheme();

  const [status, setStatus] = useState({
    loading: false,
    ok: null,
    message: "",
  });

  const [charCount, setCharCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pandeysurajkumar265@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMessageChange = (e) => {
    setCharCount(e.target.value.length);
  };

  async function onSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      setStatus({
        loading: true,
        ok: null,
        message: "",
      });

      const apiUrl = import.meta.env.VITE_API_URL || "/api";

      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({ ok: res.ok }));

      setStatus({
        loading: false,
        ok: res.ok,
        message:
          data?.message ||
          (res.ok
            ? "Message sent successfully! I'll get back to you soon."
            : "Failed to send"),
      });

      if (res.ok) {
        e.currentTarget.reset();
        setCharCount(0);
      }
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        message: "Network error",
      });
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "pandeysurajkumar265@gmail.com",
      description: "Respond within 24 hours",
      color: "from-blue-500 to-cyan-500",
      bgColor:
        theme === "dark"
          ? "from-blue-900/20 to-cyan-900/20"
          : "from-blue-50 to-cyan-50",
      borderColor:
        theme === "dark" ? "border-blue-500/30" : "border-blue-200/50",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9508470164",
      description: "Call or WhatsApp anytime",
      color: "from-green-500 to-emerald-500",
      bgColor:
        theme === "dark"
          ? "from-green-900/20 to-emerald-900/20"
          : "from-green-50 to-emerald-50",
      borderColor:
        theme === "dark" ? "border-green-500/30" : "border-green-200/50",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      description: "Open to remote opportunities",
      color: "from-purple-500 to-pink-500",
      bgColor:
        theme === "dark"
          ? "from-purple-900/20 to-pink-900/20"
          : "from-purple-50 to-pink-50",
      borderColor:
        theme === "dark" ? "border-purple-500/30" : "border-purple-200/50",
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Immediate",
      description: "Ready to start new projects",
      color: "from-emerald-500 to-teal-500",
      bgColor:
        theme === "dark"
          ? "from-emerald-900/20 to-teal-900/20"
          : "from-emerald-50 to-teal-50",
      borderColor:
        theme === "dark" ? "border-emerald-500/30" : "border-emerald-200/50",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/suraj-pandey265/",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      href: "https://github.com/pandeysurajkumar",
      label: "GitHub",
      color: "from-slate-700 to-slate-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/suraj_pandey_9973/",
      label: "Instagram",
      color: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100010856507466",
      label: "Facebook",
      color: "from-blue-700 to-blue-500",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@pandeyvlogs9973?si=0FuTIPDwMtENmERn",
      label: "YouTube",
      color: "from-red-600 to-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden px-4 py-10 sm:px-6 sm:py-16 ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
          : "bg-gradient-to-b from-white via-slate-50 to-white"
      }`}
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute -right-40 -top-40 h-80 w-80 rounded-full blur-3xl ${
            theme === "dark" ? "bg-blue-600/20" : "bg-blue-400/20"
          }`}
        />

        <motion.div
          animate={{ y: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className={`absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-purple-600/20" : "bg-purple-400/20"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-md"
            style={{
              borderColor:
                theme === "dark"
                  ? "rgba(59, 130, 246, 0.4)"
                  : "rgba(59, 130, 246, 0.3)",
              background:
                theme === "dark"
                  ? "rgba(59, 130, 246, 0.08)"
                  : "rgba(59, 130, 246, 0.05)",
            }}
          >
            <MessageSquare className="h-4 w-4 text-blue-500" />
            <span
              className={`text-xs font-bold uppercase tracking-wider sm:text-sm ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={`mb-6 text-5xl font-black sm:text-6xl ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Let&apos;s Create Something{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Amazing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className={`mx-auto mb-4 max-w-3xl text-lg sm:text-xl ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Whether you have a project in mind, an opportunity to discuss, or simply want to connect, I'd love to hear from you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mx-auto max-w-2xl text-base sm:text-lg ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            I'm currently open to full-time roles and internships in Software Development, Full Stack Development, and Backend Engineering.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className={`mx-auto mt-4 max-w-2xl text-base sm:text-lg ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            If you're looking for a developer who can turn ideas into responsive, scalable, and efficient web applications, let's connect. I'm excited to bring value to meaningful projects and teams.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="mb-10 grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-md sm:p-8 ${
                  info.borderColor
                } ${info.bgColor}`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />

                <div className="relative z-10 flex flex-1 flex-col">
                  <motion.div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${info.color} p-1`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div
                      className={`flex h-full w-full items-center justify-center rounded-lg ${
                        theme === "dark" ? "bg-slate-900" : "bg-white"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </motion.div>

                  <h3
                    className={`mb-2 text-xl font-bold ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {info.title}
                  </h3>

                  <p
                    className={`mb-2 bg-gradient-to-r ${info.color} bg-clip-text font-semibold text-transparent`}
                  >
                    {info.value}
                  </p>

                  <p
                    className={`mb-6 flex-1 text-sm ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {info.description}
                  </p>

                  {info.title === "Email" && (
                    <motion.button
                      onClick={handleCopyEmail}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                        copied
                          ? `bg-gradient-to-r ${info.color} text-white`
                          : theme === "dark"
                          ? "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                          : "bg-slate-200/50 text-slate-700 hover:bg-slate-300/50"
                      }`}
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy Email
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Contact Area */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div
              className={`relative h-full overflow-hidden rounded-2xl border p-6 backdrop-blur-md sm:p-8 ${
                theme === "dark"
                  ? "border-slate-700/50 bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-950/40"
                  : "border-slate-200/60 bg-gradient-to-br from-white/60 via-slate-50/40 to-white/40"
              }`}
            >
              <div className="mb-6">
                <h3
                  className={`mb-1 text-2xl font-bold sm:text-3xl ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Send me a message
                </h3>
                <p
                  className={`mb-3 text-xs sm:text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Please enter your details below and I&apos;ll get back to you
                  soon.
                </p>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>

              <form onSubmit={onSubmit} className="space-y-3">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className={`mb-2 block text-sm font-semibold ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Enter your name"
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-lg border-2 px-5 py-3 transition-all duration-300 focus:outline-none ${
                        focusedField === "name"
                          ? theme === "dark"
                            ? "border-blue-500 bg-slate-800 shadow-lg shadow-blue-500/20"
                            : "border-blue-500 bg-white shadow-lg shadow-blue-500/20"
                          : theme === "dark"
                          ? "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                          : "border-slate-300 bg-white/50 hover:border-slate-400"
                      } ${
                        theme === "dark"
                          ? "text-white placeholder:text-slate-500"
                          : "text-slate-900 placeholder:text-slate-400"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      className={`mb-2 block text-sm font-semibold ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-lg border-2 px-5 py-3 transition-all duration-300 focus:outline-none ${
                        focusedField === "email"
                          ? theme === "dark"
                            ? "border-blue-500 bg-slate-800 shadow-lg shadow-blue-500/20"
                            : "border-blue-500 bg-white shadow-lg shadow-blue-500/20"
                          : theme === "dark"
                          ? "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                          : "border-slate-300 bg-white/50 hover:border-slate-400"
                      } ${
                        theme === "dark"
                          ? "text-white placeholder:text-slate-500"
                          : "text-slate-900 placeholder:text-slate-400"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`mb-2 block text-sm font-semibold ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    placeholder="Enter subject"
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full rounded-lg border-2 px-5 py-3 transition-all duration-300 focus:outline-none ${
                      focusedField === "subject"
                        ? theme === "dark"
                          ? "border-blue-500 bg-slate-800 shadow-lg shadow-blue-500/20"
                          : "border-blue-500 bg-white shadow-lg shadow-blue-500/20"
                        : theme === "dark"
                        ? "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                        : "border-slate-300 bg-white/50 hover:border-slate-400"
                    } ${
                      theme === "dark"
                        ? "text-white placeholder:text-slate-500"
                        : "text-slate-900 placeholder:text-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      className={`block text-sm font-semibold ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Message
                    </label>
                    <span
                      className={`text-xs font-semibold ${
                        charCount > 450
                          ? "text-red-500"
                          : charCount > 400
                          ? "text-yellow-500"
                          : theme === "dark"
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      {charCount}/500
                    </span>
                  </div>

                  <textarea
                    name="message"
                    required
                    rows={4}
                    maxLength={500}
                    placeholder="Enter your message"
                    onChange={handleMessageChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full resize-none rounded-lg border-2 px-5 py-3 transition-all duration-300 focus:outline-none ${
                      focusedField === "message"
                        ? theme === "dark"
                          ? "border-blue-500 bg-slate-800 shadow-lg shadow-blue-500/20"
                          : "border-blue-500 bg-white shadow-lg shadow-blue-500/20"
                        : theme === "dark"
                        ? "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                        : "border-slate-300 bg-white/50 hover:border-slate-400"
                    } ${
                      theme === "dark"
                        ? "text-white placeholder:text-slate-500"
                        : "text-slate-900 placeholder:text-slate-400"
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status.loading}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-1 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 sm:py-4 sm:text-base ${
                    status.loading
                      ? "cursor-wait bg-slate-500/50"
                      : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg shadow-blue-500/30 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 hover:shadow-blue-500/50"
                  } disabled:opacity-70`}
                >
                  {status.loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Send className="h-5 w-5" />
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`flex items-center gap-3 rounded-lg border p-5 text-sm font-medium ${
                      status.ok
                        ? theme === "dark"
                          ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-300"
                          : "border-emerald-300 bg-emerald-100/80 text-emerald-700"
                        : theme === "dark"
                        ? "border-red-500/50 bg-red-500/20 text-red-300"
                        : "border-red-300 bg-red-100/80 text-red-700"
                    }`}
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div
              className={`rounded-2xl border p-6 backdrop-blur-md sm:p-8 ${
                theme === "dark"
                  ? "border-slate-700/50 bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-950/40"
                  : "border-slate-200/60 bg-gradient-to-br from-white/60 via-slate-50/40 to-white/40"
              }`}
            >
              <h4
                className={`mb-6 text-lg font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                Connect With Me
              </h4>

              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45 + index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className={`flex items-center gap-4 rounded-lg border p-4 transition-all ${
                        theme === "dark"
                          ? "border-slate-600 bg-slate-700/20 hover:border-slate-500 hover:bg-slate-700/40"
                          : "border-slate-300 bg-slate-200/20 hover:border-slate-400 hover:bg-slate-200/40"
                      }`}
                    >
                      <motion.div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${social.color}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </motion.div>

                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            theme === "dark" ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {social.label}
                        </p>
                        <p
                          className={`text-xs ${
                            theme === "dark"
                              ? "text-slate-400"
                              : "text-slate-600"
                          }`}
                        >
                          Connect & Follow
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}