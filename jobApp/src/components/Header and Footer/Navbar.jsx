import React, { useState, useEffect } from "react";
import { FaArrowRight, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = ["Home", "About", "Jobs", "Pages", "Contact"];
  const pagesDropdown = ["Employee Profile", "Employer Profile"];

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav className="px-6 lg:px-[100px] py-5 bg-[#0f172a] shadow-md sticky top-0 z-50 border-b border-white/10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-[#e2e8f0] text-2xl font-bold">
          JobStack
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#e2e8f0] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) =>
            item === "Pages" ? (
              <div key={index} className="relative dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="text-gray-300 hover:text-[#38bdf8] transition duration-300 text-lg flex items-center"
                >
                  {item} <FaChevronDown className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-10 left-0 bg-[#1b233d] shadow-lg rounded-lg py-2 w-40">
                    {pagesDropdown.map((subItem, idx) => (
                      <NavLink
                        key={idx}
                        to={`/${subItem.toLowerCase()}`}
                        className={({ isActive }) =>
                          `block px-4 py-2 ${
                            isActive
                              ? "text-cyan-600 font-bold"
                              : "text-gray-300 hover:bg-[#222b48] hover:text-white"
                          }`
                        }
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {subItem}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg ${
                    isActive
                      ? "text-cyan-600 font-bold"
                      : "text-gray-300 hover:text-[#38bdf8] transition duration-300"
                  }`
                }
              >
                {item}
              </NavLink>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink
            to="/login"
            className="text-gray-300 hover:text-white transition"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-cyan-600 text-white py-2 px-6 rounded-lg shadow-lg transition hover:bg-cyan-500"
          >
            Sign Up
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-3xl text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        {menuItems.map((item, index) =>
          item === "Pages" ? (
            <div key={index} className="relative text-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white text-2xl py-3 flex items-center"
              >
                {item} <FaChevronDown className="ml-2" />
              </button>
              {isDropdownOpen && (
                <div className="bg-[#1b233d] shadow-lg rounded-lg py-2 mt-2 w-40">
                  {pagesDropdown.map((subItem, idx) => (
                    <NavLink
                      key={idx}
                      to={`/${subItem.toLowerCase()}`}
                      className={({ isActive }) =>
                        `block px-4 py-2 ${
                          isActive
                            ? "text-cyan-600 font-bold"
                            : "text-gray-300 hover:bg-[#222b48] hover:text-white"
                        }`
                      }
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {subItem}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-white text-2xl py-3 ${
                  isActive
                    ? "text-cyan-500 font-bold"
                    : "hover:text-cyan-400"
                } transition-all`
              }
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          )
        )}

        {/* Mobile Buttons */}
        <NavLink
          to="/login"
          className="mt-6 text-gray-300 hover:text-white transition text-xl"
          onClick={() => setIsOpen(false)}
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="mt-3 bg-cyan-600 text-white py-3 px-8 rounded-lg shadow-lg transition-all hover:bg-cyan-500 text-xl"
          onClick={() => setIsOpen(false)}
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
}
