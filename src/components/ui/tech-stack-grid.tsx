"use client";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiGit } from 'react-icons/si';

const technologies = [
  { icon: SiReact, name: "React", color: "hover:text-[#61DAFB]" },
  { icon: SiNextdotjs, name: "Next.js", color: "hover:text-white" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "hover:text-[#06B6D4]" },
  { icon: SiTypescript, name: "TypeScript", color: "hover:text-[#3178C6]" },
  { icon: SiJavascript, name: "JavaScript", color: "hover:text-[#F7DF1E]" },
  { icon: SiHtml5, name: "HTML5", color: "hover:text-[#E34F26]" },
  { icon: SiCss3, name: "CSS3", color: "hover:text-[#1572B6]" },
  { icon: SiGit, name: "Git", color: "hover:text-[#F05032]" }
];

export const TechStackGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {technologies.map((tech) => (
        <div key={tech.name} className="group flex flex-col items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
          <tech.icon className={`w-12 h-12 mb-2 ${tech.color} transition-colors duration-300`} />
          <span className="text-sm text-gray-300 group-hover:text-white">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}; 