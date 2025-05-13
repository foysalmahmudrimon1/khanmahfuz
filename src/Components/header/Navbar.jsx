import React, { useState } from "react";
import logoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom"; // ✅ Fix this line

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <img className="w-12 md:w-16" src={logoImg} alt="Logo" />
            <h3 className="text-xl md:text-3xl font-black text-dark">
              <span className="text-orange-800">M.Khan & Associates</span>
            </h3>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 items-center">
            <NavLink to="/" className="text-gray-600 hover:text-green-600 font-medium text-lg">
              Home
            </NavLink>
            <NavLink to="/my-bookings" className="text-gray-600 hover:text-green-600 font-medium text-lg">
              My Bookings
            </NavLink>
            <NavLink to="/blogs" className="text-gray-600 hover:text-green-600 font-medium text-lg">
              Blogs
            </NavLink>
            <NavLink to="/contact" className="text-gray-600 hover:text-green-600 font-medium text-lg">
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden lg:inline-block px-6 py-2 bg-orange-800 text-white font-semibold rounded-full hover:bg-green-600 transition">
              Emergency
            </button>

            {/* Mobile toggle */}
            <button onClick={toggleMenu} className="lg:hidden focus:outline-none text-3xl text-gray-700">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-lg shadow-md p-4 transition-all duration-300">
            <nav className="flex flex-col gap-3">
              <NavLink to="/" onClick={toggleMenu} className="text-gray-700 hover:text-green-600">
                Home
              </NavLink>
              <NavLink to="/my-bookings" onClick={toggleMenu} className="text-gray-700 hover:text-green-600">
                My Bookings
              </NavLink>
              <NavLink to="/blogs" onClick={toggleMenu} className="text-gray-700 hover:text-green-600">
                Blogs
              </NavLink>
              <NavLink to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-green-600">
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
