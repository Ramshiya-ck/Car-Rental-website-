import React, { useState } from "react";
import logo from "/images/Heading.png";
import { Menu, X, Home, Info, Phone, User } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className=" w-[60%]" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <Home size={18} /> Home
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <Info size={18} /> About
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <User size={18} /> Services
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <Phone size={18} /> Contact
          </a>
        </nav>

        {/* Login/Register */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300">
            Login / Register
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <Home size={18} /> Home
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <Info size={18} /> About
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <User size={18} /> Services
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <Phone size={18} /> Contact
            </a>
            <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 mt-2">
              Login / Register
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
