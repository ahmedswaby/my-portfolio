import React from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import logo from '../assets/ahmed-logo-white.png';
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  toggleDarkMode, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    // { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm dark:shadow-gray-800/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-xl max-w-20 font-bold text-blue-600 dark:text-blue-400 flex items-center">
            <img src={logo} className='img-fluid ' alt="logo"/>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href="/ahmed-cv.pdf" 
            download
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 text-sm font-medium"
          >
            <Download size={16} className="mr-2" />
            Download CV
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/95 dark:bg-black/95 pt-20">
          <nav className="container mx-auto px-6">
            <ul className="flex flex-col space-y-6 text-xl text-center">
              {navLinks.map((link) => (
                <li key={link.id} className="border-b border-gray-800 pb-4">
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-blue-400 transition-colors w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <a 
                  href="/ahmed-cv.pdf" 
                  download
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-base font-medium"
                >
                  <Download size={18} className="mr-2" />
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;