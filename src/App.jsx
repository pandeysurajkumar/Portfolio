import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./ThemeContext";
const FEATURED_REPOS = [
  "File-System-Recovery-and-Optimization-Tool",
  "Feedback_servey",
  "SupplySenseAI",
  "Weather-Food-Movies_API",
  "Full-Stack-E-Commerce",
];

const PROJECT_DETAILS = {
  "File-System-Recovery-and-Optimization-Tool": {
    title: "File System Recovery & Optimization Tool",
    description:
      "A system-level project that simulates file operations, supports deleted file recovery, tracks storage usage, logs activity, and improves file system performance through optimization features.",
    tech: ["Java", "File Handling", "System Design", "Data Structures"],
    demoLink: "",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
  },

  Feedback_servey: {
    title: "Feedback Survey Platform",
    description:
      "A full-stack collaborative application for collecting, managing, and analyzing user feedback through surveys with an interactive and user-friendly interface.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    demoLink: "",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop",
  },

  SupplySenseAI: {
    title: "SupplySenseAI",
    description:
      "An AI-driven solution for forecasting material requirements and managing inventory efficiently to reduce shortages, lower costs, and streamline supply chain operations.",
    tech: ["Python", "AI", "Machine Learning", "React", "Node.js", "MongoDB"],
    demoLink: "",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
  },

  "Weather-Food-Movies_API": {
    title: "Weather Food Movies API Hub",
    description:
      "A multi-API integration project that combines weather, food, and movie data to deliver a dynamic, engaging, and interactive user experience using more than three APIs.",
    tech: ["React", "API Integration", "JavaScript", "Web Development"],
    demoLink: "https://weather-food-movies-api.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
  },

  "Full-Stack-E-Commerce": {
    title: "Full Stack E-Commerce Platform",
    description:
      "A collaborative full-stack e-commerce application featuring product listings, cart management, user authentication, and order processing for a complete shopping experience.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    demoLink: "https://payment-order-full-stack-ecommerce-q4nq.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
  },
};

export default function App() {
  const [projects, setProjects] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          "https://api.github.com/users/pandeysurajkumar/repos?per_page=50"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const repos = await response.json();

        const filteredProjects = repos
          .filter((repo) => FEATURED_REPOS.includes(repo.name))
          .map((repo) => {
            const customData = PROJECT_DETAILS[repo.name] || {};

            return {
              title: customData.title || repo.name.replace(/-/g, " "),
              description:
                customData.description ||
                repo.description ||
                "Check out this project on GitHub",
              tech: customData.tech || [repo.language || "Project"],
              githubLink: repo.html_url,
              demoLink: customData.demoLink || repo.homepage || repo.html_url,
              image: customData.image || null,
            };
          });

        const sortedProjects = FEATURED_REPOS.map((repoName) =>
          filteredProjects.find((project) =>
            project.githubLink.includes(repoName)
          )
        ).filter(Boolean);

        setProjects(sortedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);

        const fallbackProjects = FEATURED_REPOS.map((repoName) => {
          const customData = PROJECT_DETAILS[repoName] || {};

          return {
            title: customData.title || repoName.replace(/-/g, " "),
            description: customData.description || "GitHub Project",
            tech: customData.tech || ["Project"],
            githubLink: `https://github.com/pandeysurajkumar/${repoName}`,
            demoLink:
              customData.demoLink ||
              `https://github.com/pandeysurajkumar/${repoName}`,
            image: customData.image || null,
          };
        });

        setProjects(fallbackProjects);
      }
    }

    fetchProjects();
  }, []);

  const containerClass =
    theme === "dark"
      ? "relative bg-slate-950 text-slate-100"
      : "relative bg-white text-slate-900";

  return (
    <main className={containerClass}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}