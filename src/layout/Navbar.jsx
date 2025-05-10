import React, { useState } from 'react';
import logo from '../uploads/logo2.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Workout's", href: "/workouts" },
    { name: "Events", href: "/events" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact", current: true },
  ];

  return (
    <nav className="bg-white shadow py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
            <img
              className="h-20 w-70"
              src={logo}
              alt="Your Company"
            />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex   space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
               to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  link.current
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-white hover:bg-gray-700 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="block lg:hidden flex justify-end bg-transparent px-4">
          <div className="px-2 pt-2 pb-3 space-y-1 text-right">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-black inline-block"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
