import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { Download, Eye, ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ added

const RESUME_DATA = {
  title: "Professional Resume",
  description:
    "Comprehensive resume showcasing professional experience, skills, and educational background.",
  resumeUrl: "/resume.pdf",
  downloadUrl: "/resume.pdf",
};

export default function ResumePage() {
  const { theme } = useTheme();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_DATA.downloadUrl;
    link.download = "Suraj-Kumar-Pandey-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ fallback if iframe fails
  const handleIframeError = () => {
    window.open(RESUME_DATA.resumeUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen px-4 py-12 ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-white via-slate-50 to-white"
      }`}
    >
      {/* Header */}
      <div className="mx-auto mb-8 max-w-4xl">
        
        {/* ✅ FIXED (use Link instead of <a>) */}
        <Link
          to="/"
          className={`mb-6 inline-flex items-center gap-2 text-sm font-semibold ${
            theme === "dark"
              ? "text-indigo-400 hover:text-indigo-300"
              : "text-indigo-600 hover:text-indigo-500"
          }`}
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`mb-3 flex items-center gap-3 text-4xl font-bold ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            <FileText size={40} className="text-purple-500" />
            {RESUME_DATA.title}
          </h1>

          <p
            className={`text-lg ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {RESUME_DATA.description}
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* Resume Preview */}
        <div className="lg:col-span-2">
          <div
            className={`rounded-2xl border shadow-2xl ${
              theme === "dark"
                ? "border-white/10 bg-slate-900/50"
                : "border-slate-200 bg-white"
            }`}
          >
            <iframe
              src={RESUME_DATA.resumeUrl}
              title="Resume Preview"
              className="h-[720px] w-full"
              loading="lazy"
              onError={handleIframeError} // ✅ fallback added
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-6">

          {/* View Button */}
          <a
            href={RESUME_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-6 text-center border"
          >
            <Eye size={32} />
            <h4>View Online</h4>
          </a>

          {/* Download */}
          <button onClick={handleDownload}>
            <Download size={32} />
            Download
          </button>

        </div>
      </div>
    </motion.div>
  );
}