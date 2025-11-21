import React from "react";
import { Mail, Download, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImage from "/src/assets/about.jpg";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* left: photo + social */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <img
              src={aboutImage}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="mt-6 text-2xl font-extrabold">Muskan Yadav</h1>
          <p className="mt-1 text-sm text-slate-500">
            Frontend developer • React • UI/UX
          </p>
          <p className="mt-1 text-sm text-slate-500">ymuskan3218@gmail.com</p>

          <div className="mt-6 flex space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm bg-gradient-to-r from-rose-400 to-red-400 text-white text-sm font-medium"
            >
              <Mail size={16} /> Contact
            </Link>

            <a
              href="src\assets\Resume_Muskan_Yadav.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-slate-600">
            <a
              href="https://github.com/nezumi3218"
              aria-label="GitHub"
              className="hover:text-slate-900"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muskan-yadav-9120922b6"
              aria-label="LinkedIn"
              className="hover:text-slate-900"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-2"
        >
          <div className="bg-white/60 p-6 rounded-2xl shadow-sm ring-1 ring-slate-100">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
              About me
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I'm a B.Tech student passionate about building thoughtful and
              accessible web experiences. I focus on frontend development with
              React and love turning ideas into clean, responsive interfaces. I
              enjoy learning new tools, contributing to open-source projects,
              and building things that help people.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-slate-500">
                  Core skills
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• React, Next.js, Tailwind CSS</li>
                  <li>• JavaScript (ES6+), TypeScript</li>
                  <li>• HTML5, CSS3, Responsive Design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-500">
                  Tools & workflow
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Git, GitHub</li>
                  <li>• Figma, VS Code</li>
                  <li>• Testing (Jest), Basic CI/CD</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-slate-500">
                Selected stats
              </h3>
              <div className="mt-3 flex flex-wrap gap-4">
                <Stat label="Projects" value="8+" />
                <Stat label="LeetCode Problems" value="100+" />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-slate-500">Education</h3>

              <ol className="mt-4 border-l-2 border-slate-200">
                <li className="pl-4 mb-4">
                  <span className="text-sm font-semibold">
                    B.Tech in Computer Science
                  </span>
                  <div className="text-xs text-slate-500">
                    Dr. APJ Abdul Kalam Technical University • 2023 - 2027
                  </div>
                  <div className="mt-2 text-sm text-slate-700">
                    Currently Pursuing with a CGPA of 8.8.
                  </div>
                </li>
              </ol>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-slate-500">
                Achievements
              </h3>

              <ol className="mt-4 border-l-2 border-slate-200">
                <li className="pl-4 mb-4">
                  <span className="text-sm font-semibold">
                    College-level coding competition Winner
                  </span>
                  <div className="text-xs text-slate-500">First Runner Up</div>
                  <div className="mt-2 text-sm text-slate-700">
                    Won the first runner up award for Codeathon 2025.
                  </div>
                </li>

                <li className="pl-4 mb-4">
                  <span className="text-sm font-semibold">LeetCode Badges</span>
                  <div className="text-xs text-slate-500">50+ & 100+ days</div>
                  <div className="mt-2 text-sm text-slate-700">
                    Got the 50+ and 100+ days milestone badges on leetcode and
                    solved 100+ questions.
                  </div>
                </li>
              </ol>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-slate-500">Hobbies</h3>

              <ol className="mt-4 border-l-2 border-slate-200">
                <li className="pl-4 mb-4">
                  <span className="text-sm font-semibold">
                    Solving DSA problems and learning new tech.
                  </span>
                </li>

                <li className="pl-4 mb-4">
                  <span className="text-sm font-semibold">
                    Digital illustration and creative artwork/character designs.
                  </span>
                </li>

                <li className="pl-4 mb-4">
                  <span className="text-sm font-semibold">
                    Public speaking.
                  </span>
                </li>

                <li className="pl-4 mb-4">
                  <span className="text-sm font-semibold">
                    Reading & Self-Development.
                  </span>
                </li>
              </ol>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-sm font-medium text-slate-600">
                  Looking for internships / freelance
                </h4>
                <p className="text-sm text-slate-700">
                  I'm actively looking for a frontend/web development
                  internship. I love turning ideas into interactive, responsive
                  interfaces and want to grow by working on real projects,
                  collaborating with teams, and improving my problem-solving
                  skils. Available for full-time remote internships.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm bg-gradient-to-r from-rose-400 to-red-400 text-white text-sm font-medium"
                >
                  View projects
                </Link>
              </div>
            </div>
          </div>

          {/* contact card */}
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="min-w-[120px] p-3 bg-white rounded-xl shadow-sm text-center ring-1 ring-slate-100">
      <div className="text-xl font-semibold">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}
