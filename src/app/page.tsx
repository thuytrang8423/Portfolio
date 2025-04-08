
import { ContactForm } from "@/components/ui/contact-form";
import { Navbar } from "@/components/ui/navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";

export default function Home() {
  const words = [
    {
      text: "Hi,",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "I'm",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Thuy",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Trang",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen w-full relative overflow-hidden">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="relative z-10 h-full">
          <div className="flex h-full">
            {/* Left Content */}
            <div className="w-1/2 flex flex-col justify-center px-20">
              <div className="space-y-8 max-w-2xl">
                <div>
                  <TypewriterEffect words={words} className="text-blue-500" />
                </div>
                <h1 className="text-6xl md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Front-End Developer
                </h1>
                <p className="text-xl text-neutral-300">
                  Crafting digital experiences with modern technologies and creative solutions.
                </p>
                <div className="flex gap-6">
                  <Button
                    borderRadius="1.75rem"
                    className="bg-slate-900/[0.8] text-white border-0"
                    as={Link}
                    href="#contact"
                  >
                    Get in Touch
                  </Button>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-slate-900/[0.8] text-white border-0"
                    as={Link}
                    href="#projects"
                  >
                    View Projects
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-1/2 flex items-center justify-center relative">
              <div className="relative w-[500px] h-[500px] rounded-full p-2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-500/20 backdrop-blur-sm">
                  <img
                    src="./capy.webp"
                    alt="Capybara illustration"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen w-full py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Work Clock",
                description: "WorkClock is an OT (overtime) management system that helps employees easily register, track, and manage their overtime hours This project was developed by a group of FPT University students during their internship at FPT Software.",
                tech: ["Reactjs", "Tailwind CSS", "TypeScript", "Ant Design" ],
                link: "work-clock-theta.vercel.app"
              },
              {
                title: "Portfolio",
                description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
                tech: ["NextJs", "Tailwind CSS", "TypeScript", "Aceternity UI"],
                link: "#"
              },
              {
                title: "Expense Tracker",
                description: "An AI-powered content generation tool that helps create SEO-optimized articles and social media posts.",
                tech: ["Reactjs", "Tailwindcss", "TypeScript"],
                link: "https://expense-tracker-grp1.vercel.app/"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-black/50 via-black/50 to-purple-500/30 p-8 hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-semibold mb-2 relative z-10">{project.title}</h3>
                <p className="text-gray-300 mb-4 relative z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors relative z-10"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="min-h-screen w-full py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Certificates & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FreeCodeCamp",
                issuer: "Reposive Web Design",
                date: "April 7,2025",
                image: "/certificate1.png",
                link: "https://www.freecodecamp.org/certification/LuongThiThuyTrang/responsive-web-design"
              },
              {
                title: "React Advanced Certification",
                issuer: "Meta",
                date: "2023",
                image: "/react-cert.png",
                link: "#"
              },
              {
                title: "Full Stack Development",
                issuer: "freeCodeCamp",
                date: "2022",
                image: "/fcc-cert.png",
                link: "#"
              }
            ].map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-black/50 via-black/50 to-blue-500/30 p-8 hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="aspect-[4/3] w-full mb-4 bg-black/30 rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                  <a
                    href={cert.link}
                    className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen w-full py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-gray-300">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors">
                    tranglttse170602@fpt.edu.vn
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  <a href="https://github.com/thuytrang8423" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    GitHub 
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
