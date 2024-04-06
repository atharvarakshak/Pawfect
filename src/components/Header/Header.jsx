import React from 'react'

import Darkmode from '../DarkMood/Darkmode';

import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon,SunIcon } from '@heroicons/react/24/solid'
// import {Link} from react-router-dom

import logo from '../../assets/logoDog.svg'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      if (response.data === 'Logged in successfully.') {
        setIsLoggedIn(true);
        history('/', { state: { id: email } });
      } else if (response.data === 'User not found.') {
        alert('User not found. Please sign up.');
      }
    } catch (error) {
      alert('Wrong details');
      console.error(error);
    }
  };
  

  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "Help", link: "/help" },
    { name: "ABOUT", link: "/about" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="navbar shadow-md w-full  fixed z-50 top-0 left-0  "> 
      <div className="md:flex items-center justify-between bg-[#FFBB7A] dark:bg-slate-900 py-4 md:px-10 px-7 ">
        {/* Logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <a href="/">
            <img className='' src={logo} alt="" />
          </a>
          <span className="text-white ">    Pawfect</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-10 cursor-pointer md:hidden w-7 h-7 "
          style={{ zIndex: 100 }}
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Link items */}
        <ul
          className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#FFBB7A] dark:bg-slate-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-0 ease-out ${
            open ? "top-20 z-[-1]" : "top-[-490px]"
          }`}
          style={{ zIndex: 90 }}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <a
                href={link.link}
                className="text-white hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
         
         <div className="flex md:flex-row flex-col gap-3">
         <NavLink to="/signup">
          <button className="btn bg-[#B95A00] hover:bg-[#ea9f59] text-white md:ml-8 font-semibold px-3 py-2 rounded duration-300 md:static">
          {!isLoggedIn ? (
          <NavLink to="/signup">
            <button className="btn bg-[#B95A00] hover:bg-[#ea9f59] text-white md:ml-8 font-semibold px-3 py-2 rounded duration-300 md:static">
              SignUp
            </button>
          </NavLink>
          ) : (
            <button
              className="btn bg-[#B95A00] hover:bg-[#ea9f59] text-white md:ml-8 font-semibold px-3 py-2 rounded duration-300 md:static"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          )}

          </button>
          </NavLink>
          <div className='ml-2'>
            <Darkmode/>
          </div>
         </div>

        </ul>
        
      </div>
    </div>
  );
};

export default Nav;
