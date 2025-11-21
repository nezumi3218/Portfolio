import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern, animated personal portfolio built with React and Tailwind.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/nezumi3218/Portfolio",
      live: "https://portfolio-self-nu-20.vercel.app",
      img: project1,
    },
    {
      title: "Blog Posting Website",
      desc: "A clean and responsive blog posting website with all the CRUD operations for blogs along with user authentication.",
      tech: ["React", "Tailwind CSS", "Appwrite"],
      github: "https://github.com/nezumi3218/ReactJs/tree/main/BlogPosting",
      live: "https://blog-posting-seven.vercel.app",
      img: project2,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6 sm:p-10 lg:p-16">
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md ring-1 ring-slate-100 overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={p.github}
                  className="flex items-center gap-1 text-sm font-medium hover:text-slate-900"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={p.live}
                  className="flex items-center gap-1 text-sm font-medium hover:text-slate-900"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
