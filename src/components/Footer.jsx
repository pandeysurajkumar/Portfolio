import { useTheme } from "../ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=pandeysurajkumar265@gmail.com&su=Portfolio%20Inquiry",
      label: "Email",
      target: "_blank",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/pandeysurajkumar",
      label: "GitHub",
      target: "_blank",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.84c1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/suraj-pandey265/",
      label: "LinkedIn",
      target: "_blank",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76S5.53 3.2 6.5 3.2s1.75.79 1.75 1.77-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.47V19z" />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/suraj_pandey_9973/",
      label: "Instagram",
      target: "_blank",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM17.5 6.75a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 8.5z" />
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/profile.php?id=100010856507466",
      label: "Facebook",
      target: "_blank",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.2 0-1.57.74-1.57 1.5V12h2.67l-.43 2.89h-2.24v6.99A10 10 0 0022 12z" />
        </svg>
      ),
    },
    {
      href: "https://youtube.com/@pandeyvlogs9973?si=0FuTIPDwMtENmERn",
      label: "YouTube",
      target: "_blank",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.5 6.2a3 3 0 00-2.1-2.12C19.56 3.5 12 3.5 12 3.5s-7.56 0-9.4.58A3 3 0 00.5 6.2 31.2 31.2 0 000 12a31.2 31.2 0 00.5 5.8 3 3 0 002.1 2.12c1.84.58 9.4.58 9.4.58s7.56 0 9.4-.58a3 3 0 002.1-2.12A31.2 31.2 0 0024 12a31.2 31.2 0 00-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className={`border-t ${
        theme === "dark"
          ? "border-white/10 bg-slate-950"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Availability */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-indigo-400">
              Available for Immediate Hire
            </h3>

            <div
              className={`mt-3 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              <span>Full Stack Developer</span>
              <span className="text-indigo-400">•</span>
              <span>Frontend Development</span>
              <span className="text-indigo-400">•</span>
              <span>Backend Development</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noreferrer" : undefined}
                title={link.label}
                className={`group flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-indigo-400"
                    : "text-slate-600 hover:text-indigo-600"
                }`}
              >
                <div
                  className={`rounded-full p-3 shadow-sm transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-white/5 group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                      : "bg-slate-100 group-hover:bg-indigo-100 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.18)]"
                  }`}
                >
                  {link.icon}
                </div>
                <span className="text-xs font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            className={`h-px w-full max-w-2xl ${
              theme === "dark" ? "bg-white/10" : "bg-slate-200"
            }`}
          />

          {/* Bottom Text */}
          <div className="space-y-2">
            <p
              className={`text-sm font-medium ${
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Suraj Kumar Pandey
            </p>

            <p
              className={`text-xs ${
                theme === "dark" ? "text-slate-500" : "text-slate-500"
              }`}
            >
              © {new Date().getFullYear()} Suraj Pandey. All rights reserved.
            </p>

            <p
              className={`text-xs ${
                theme === "dark" ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Built with React + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}