import { useState } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Advanced Computer Networks",
    organization: "NPTEL",
    issueDate: "April 2025",
    credentialId: "NPTEL25CS02S647501080",
    image: "/certificates/advanced-computer-networks.png",
    certificateUrl: "https://pandeysurajkumar.github.io/certificate-page/acn_certificate.png",
    verified: true,
    skills: ["Computer Networks", "Networking Concepts", "Protocols", "Communication Systems"],
  },
  {
    id: 2,
    title: "Computer Communications",
    organization: "University of Colorado | Coursera",
    issueDate: "August 2024",
    credentialId: "P1ZJOLW6J88X",
    image: "/certificates/computer-communications.png",
    certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/P1ZJOLW6J88X",
    verified: true,
    skills: ["Computer Communications", "Networking", "Data Transmission", "Protocols"],
  },
  {
    id: 3,
    title: "The Bits and Bytes of Computer Networking",
    organization: "Google | Coursera",
    issueDate: "September 2024",
    credentialId: "M0OVFZ39OS81",
    image: "/certificates/bits-and-bytes-networking.png",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/M0OVFZ39OS81",
    verified: true,
    skills: ["Computer Networking", "Network Models", "Internet Basics", "Troubleshooting"],
  },
  {
    id: 4,
    title: "Introduction to Hardware and Operating Systems",
    organization: "IBM",
    issueDate: "September 2024",
    credentialId: "SR8RTWQVR30I",
    image: "/certificates/hardware-operating-systems.png",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/SR8RTWQVR30I",
    verified: true,
    skills: ["Hardware", "Operating Systems", "System Basics", "Computer Architecture"],
  },
];

function CertificationCard({ cert, onPreview }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/20">
      <div className="relative h-56 overflow-hidden bg-white">
        <img
          src={cert.image}
          alt={cert.title}
          className="h-full w-full object-contain p-2"
          loading="lazy"
        />

        {cert.verified && (
          <div className="absolute right-3 top-3 rounded-full bg-green-500 p-2 text-white">
            <Award size={18} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white transition group-hover:text-cyan-300">
          {cert.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-slate-400">
          {cert.organization}
        </p>

        <div className="mt-3 space-y-1 text-xs text-slate-400">
          <p>📅 Issued: {cert.issueDate}</p>
          {cert.credentialId && <p>🔐 ID: {cert.credentialId}</p>}
        </div>

        {cert.skills && cert.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="rounded border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row">
          <button
            onClick={() => onPreview(cert)}
            className="flex-1 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-2.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            👁️ Preview
          </button>

          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-2.5 text-center text-xs font-semibold text-white transition hover:from-indigo-400 hover:to-purple-400"
          >
            📥 View
          </a>
        </div>
      </div>
    </div>
  );
}

function PreviewModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-slate-900"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-red-500 p-2 text-white transition hover:bg-red-600"
        >
          ✕
        </button>

        <img
          src={cert.image}
          alt={cert.title}
          className="h-auto w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="bg-slate-950/50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Achievements
          </p>

          <h2 className="relative inline-block text-3xl font-bold text-white">
          Certificates
            <span className="absolute -bottom-2 left-0 h-1 w-[70%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              onPreview={setSelectedCert}
            />
          ))}
        </div>
      </div>

      <PreviewModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}