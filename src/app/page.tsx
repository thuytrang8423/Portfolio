"use client";
import { ContactForm } from "@/components/ui/contact-form";
import { Navbar } from "@/components/ui/navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import Image from "next/image";
import { ColourfulText } from "@/components/ui/colourful-text";
import { TechStackGrid } from "@/components/ui/tech-stack-grid";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add scroll event listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <main className="w-full bg-background relative">
      {/* Background Sparkles for entire page */}
      <div className="fixed inset-0 z-0">
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

      <div className="relative z-10">
        <Navbar activeSection={activeSection} onSectionClick={handleSectionClick} />

        {/* Content Sections */}
        <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
          {/* Hero Section */}
          <section className="h-screen w-full relative overflow-hidden" id="home">
            <div className="relative z-10 h-full">
              <div className="flex flex-col md:flex-row h-full items-center">
                {/* Left Content - with text alignment fixed */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-10 md:py-0 md:pl-16 lg:pl-24">
                  <div className="space-y-8">
                    <TypewriterEffect words={words} className="text-4xl" /> 
                    <div className="space-y-4">
                      <h1 className="text-5xl md:text-6xl font-bold text-gray-200 leading-tight">
                        Front-End
                        <br />
                        <ColourfulText text="Developer" />
                        
                      </h1>
                      <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-lg">
                        Crafting digital experiences with modern technologies and creative solutions.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        borderRadius="1.75rem"
                        className="bg-slate-900/[0.8] text-white border-0 px-6 py-3"
                        as={Link}
                        href="#contact"
                      >
                        Get in Touch
                      </Button>
                      <Button
                        borderRadius="1.75rem"
                        className="bg-slate-900/[0.8] text-white border-0 px-6 py-3"
                        as={Link}
                        href="#portfolio"
                      >
                        View Projects
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full p-2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-500/20 backdrop-blur-sm">
                      <div className="relative w-full h-full">
                        <Image
                          src="/capy.webp"
                          alt="Capybara illustration"
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="h-screen w-full relative flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                <div className="w-full md:w-2/5 flex justify-center">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse blur-xl opacity-50" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src="/avt.jpg"
                        alt="Profile picture"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 256px, 384px"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 hover:opacity-0 transition-opacity duration-500" />
                  </div>
                </div>
                
                <div className="w-full md:w-3/5 text-center md:text-left flex flex-col justify-center">
                  <h3 className="text-3xl font-semibold mb-8">About Me</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      My name is Thuy Trang, a student at FPT University majoring in Front-End Development with 1 year of experience.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Career Objective: I aim to become a skilled front-end developer, creating modern and user-friendly web interfaces.
                    </p>
                    <p className="text-lg text-gray-300">
                     Future Plan: In the next few years, I plan to improve my full-stack skills and work in a professional, dynamic tech environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section 
            id="portfolio" 
            className="min-h-screen w-full relative bg-background/30" 
            style={{ scrollMarginTop: '64px' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
              <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Portfolio Showcase
              </h1>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Explore my journey through projects, certifications, and technical expertise.
              </p>

              {/* Navigation Buttons */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <button
                  onClick={() => handleSectionClick('projects')}
                  className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900/[0.5] backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                    activeSection === 'projects' 
                      ? 'ring-2 ring-purple-500 scale-105 border-purple-500/50' 
                      : ''
                  }`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <svg
                    className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <span className="relative z-10 text-gray-200 group-hover:text-white transition-colors duration-300">Projects</span>
                </button>

                <button
                  onClick={() => handleSectionClick('certificates')}
                  className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900/[0.5] backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                    activeSection === 'certificates' 
                      ? 'ring-2 ring-purple-500 scale-105 border-purple-500/50' 
                      : ''
                  }`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <svg
                    className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="relative z-10 text-gray-200 group-hover:text-white transition-colors duration-300">Certificates</span>
                </button>

                <button
                  onClick={() => handleSectionClick('tech-stack')}
                  className={`group relative flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900/[0.5] backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                    activeSection === 'tech-stack' 
                      ? 'ring-2 ring-purple-500 scale-105 border-purple-500/50' 
                      : ''
                  }`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <svg
                    className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span className="relative z-10 text-gray-200 group-hover:text-white transition-colors duration-300">Tech Stack</span>
                </button>
              </div>
            </div>

            {/* Content Sections */}
            {activeSection === 'projects' && (
              <div className="max-w-7xl mx-auto animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Work Clock",
                      description: "WorkClock is an OT (overtime) management system that helps employees easily register, track, and manage their overtime hours This project was developed by a group of FPT University students during their internship at FPT Software.",
                      image: "/project1.jpg",
                      tech: ["Reactjs", "Tailwind CSS", "TypeScript", "Ant Design" ],
                      demoLink: "https://work-clock-theta.vercel.app/",
                      detailsLink: "https://github.com/thuytrang8423/work-clock"
                    },
                    {
                      title: "Expense Tracker",
                      description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
                      image: "/project2.jpg",
                      tech: ["Reactjs", "Tailwindcss", "TypeScript"],
                      demoLink: "https://expense-tracker-grp1.vercel.app/",
                      detailsLink: "#"
                    },
                    {
                      title: "Portfolio",
                      description: "Website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola catatan dengan mudah.",
                      image: "/project3.png",
                      tech: ["NextJs", "Tailwind CSS", "TypeScript", "Aceternity UI"],
                      demoLink: "",
                      detailsLink: "#"
                    }
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.demoLink}
                            className="text-purple-500 hover:text-purple-400 transition-colors flex items-center gap-2"
                          >
                            Live Demo
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <a
                            href={project.detailsLink}
                            className="text-purple-500 hover:text-purple-400 transition-colors flex items-center gap-2"
                          >
                            Details
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'tech-stack' && (
              <div className="max-w-4xl mx-auto animate-fadeIn">
                <TechStackGrid />
              </div>
            )}

            {activeSection === 'certificates' && (
              <div className="max-w-7xl mx-auto animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "FreeCodeCamp",
                      issuer: "Responsive Web Design",
                      date: "April 7, 2025",
                      image: "/certificate1.png"
                    }
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={600}
                          height={450}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                        <p className="text-gray-400">{cert.issuer}</p>
                        <p className="text-gray-500 text-sm">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Contact Section */}
          <section id="contact" className="h-screen w-full relative flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Let is Connect</h3>
                    <p className="text-gray-300">
                      I am always open to discussing new projects, creative ideas,
                      or opportunities to be part of your visions.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <a
                        href="mailto:your.email@example.com"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        tranglttse170602@fpt.edu.vn
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                      <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      <a
                        href="https://github.com/thuytrang8423"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
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
        </div>
      </div>
    </main>
  );
}
