import React, { useState } from 'react';

const NavBarSection = ({ change }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme toggling

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle theme state
    change(); // Call parent function to update theme in entire app
  };

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className={`body-font ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} text-TextColor fixed top-0 w-full z-10`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div
          className="flex title-font font-medium items-center text-TextColor mb-4 md:mb-0 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Ice Cream</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div
            className="mr-5 hover:text-TextColor cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Hero
          </div>
          <div
            className="mr-5 hover:text-TextColor cursor-pointer"
            onClick={() => scrollToSection('content')}
          >
            Content
          </div>
          <div
            className="mr-5 hover:text-TextColor cursor-pointer"
            onClick={() => scrollToSection('gallery')}
          >
            Gallery
          </div>
          <div
            className="mr-5 hover:text-TextColor cursor-pointer"
            onClick={() => scrollToSection('hover')}
          >
            Hover
          </div>
          <div
            className="mr-5 hover:text-TextColor cursor-pointer"
            onClick={() => scrollToSection('feature')}
          >
            Feature
          </div>
          <div
            className="mr-5 hover:text-TextColor cursor-pointer"
            onClick={() => scrollToSection('pricing')}
          >
            Pricing
          </div>
          <div
            className="mr-5 hover:text-TextColor cursor-pointer"
            onClick={() => scrollToSection('team')}
          >
            Team
          </div>
          <div
            className="mr-5 hover:text-TextColor cursor-pointer"
            onClick={() => scrollToSection('testimonial')}
          >
            Testimonials
          </div>
          <div
            className="mr-5 hover:text-TextColor cursor-pointer"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </div>
        </nav>
        <button
          className={`inline-flex items-center bg-blue-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black hover:bg-TextColor rounded text-base mt-4 md:mt-0 ${
            isDarkMode ? 'bg-gray-800' : 'bg-indigo-500'
          }`}
          onClick={toggleTheme}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBarSection;
