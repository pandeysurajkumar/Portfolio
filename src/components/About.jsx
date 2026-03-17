import { useEffect, useRef, useState } from "react";

function CounterCard({ value, label }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const hasStarted = useRef(false);

  const numericValue = parseInt(value);
  const suffix = isNaN(numericValue)
    ? ""
    : value.replace(numericValue.toString(), "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current || isNaN(numericValue)) {
          return;
        }

        hasStarted.current = true;

        let start = 0;
        const duration = 1500;
        const increment = numericValue / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= numericValue) {
            setCount(numericValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.4 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div
      ref={cardRef}
      className="rounded-2xl border border-white/10 bg-slate-800/70 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-indigo-400/50 hover:shadow-indigo-500/20"
    >
      <h3 className="text-3xl font-bold text-indigo-400">
        {isNaN(numericValue) ? value : `${count}${suffix}`}
      </h3>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}

export default function About() {
  const stats = [
    { value: "10+", label: "Projects" },
    { value: "5+", label: "Certificates" },
    { value: "3★", label: "HackerRank" },
    { value: "2027", label: "Grad Year" },
  ];

  const insightCards = [
    {
      icon: "💻",
      title: "Full Stack Development",
      desc: "Build responsive and user-focused web applications using React, Node.js, Express, and MongoDB with clean design, smooth functionality, and practical implementation.",
    },
    {
      icon: "⚙️",
      title: "Backend Engineering",
      desc: "Develop scalable backend systems, secure authentication flows, REST APIs, and database-driven applications using Java, Spring Boot, MySQL, and MongoDB.",
    },
    {
      icon: "🚀",
      title: "Problem Solving Approach",
      desc: "Focus on writing clean, maintainable, and efficient code to create reliable software solutions for real-world problems, including analytics-driven and real-time platforms.",
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-20 text-center md:text-left"
    >
      <div className="inline-block">
        <h2 className="text-3xl font-bold text-white md:text-4xl">About Me</h2>
        <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      </div>

      <p className="mt-6 leading-8 text-slate-300">
        I&apos;m a Computer Science Engineering undergraduate at Lovely Professional University with a strong interest in{" "}
        <span className="font-semibold text-indigo-400">
        Software Development, Full Stack Development, and Backend Engineering
        </span>
        . Passionate about building practical, scalable, and user-focused applications that solve real-world problems.
      </p>

      <p className="mt-4 leading-8 text-slate-300">
      Hands-on experience with{" "}
        <span className="font-semibold text-indigo-400">
        C++, Java, Python, JavaScript, React, Node.js, Express, MongoDB, MySQL, REST APIs, and Docker
        </span>{" "}
        through projects involving web development, secure authentication, real-time systems, and analytics-driven platforms. Focused on writing clean, maintainable code and developing efficient, reliable solutions.
      </p>

      <p className="mt-4 leading-8 text-slate-300">
        I am actively seeking{" "}
        <span className="font-semibold text-indigo-400">
          Internship or Entry-Level Software Engineer Roles
        </span>{" "}
        where I can contribute to analytics-driven teams, continue learning from
        industry professionals, and grow as a{" "}
        <span className="font-semibold text-indigo-400">
        Software Engineer
        </span>
        .
      </p>

      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <CounterCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {insightCards.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-indigo-400/40"
          >
            <div className="mb-3 text-4xl">{item.icon}</div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm leading-7 text-slate-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}