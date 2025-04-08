"use client";
import Link from "next/link";

interface NavbarProps {
  activeSection: string | null;
  onSectionClick: (section: string) => void;
}

export function Navbar({ activeSection, onSectionClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Miru</span>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"> {"//"} UwU {"//"}</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['home', 'about', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => onSectionClick(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative
                    ${activeSection === section ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left animate-slideRight" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}