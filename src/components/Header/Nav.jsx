import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:flex lg:justify-between lg:items-end">
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <button onClick={toggleMenu} className="text-black">
         menu
        </button>
        <ul className="flex flex-col space-y-4 items-center">
          <li>
            <NavLink
              to="/"
              className="text-orange-700 underline text-white"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="text-orange-700 underline text-white"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className="text-orange-700 underline text-white"
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-orange-700 underline text-white"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="md:flex md:space-x-8 md:items-center hidden">
        <NavLink
          to="/"
          className="text-white hover:text-orange-700"
        >
          Home
        </NavLink>
        <NavLink
          to="/service"
          className="text-white hover:text-orange-700"
        >
          Services
        </NavLink>
        <NavLink
          to="/help"
          className="text-white hover:text-orange-700"
        >
          Help
        </NavLink>
        <NavLink
          to="/about"
          className="text-white hover:text-orange-700"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
