import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import dogLogo from '../../assets/logoDog.svg'
import Darkmode from '../DarkMood/DarkMode';



export default function Header() {
    return (
        <header className="shadow-lg sticky z-50 top-0  shadow-slate-300 ">
            <nav className=" dark:bg-slate-900 bg-orange-300   border-gray-200 lg:px-6 py-2.5 shad ">
                <div className="flex flex-wrap justify-between items-center mx-auto ">
                    <Link to="/" className="flex items-center">
                        <img
                            src={dogLogo}
                            className=""
                            alt="Logo"
                        />
                        <h1 className="md:text-4xl text-2xl font-extrabold text  dark:text-orange-300 text-white">Purrfect PawSitters</h1>
                    </Link>
                   
                    <div className="flex items-center lg:order-2 gap-4">

                        <Link
                            to="/"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-7 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Login/Sign up
                        </Link>

                         {/* theme changer button */}
                     <div className=" ">
                        <Darkmode/>
                    </div>
                    </div>
                    
                    
                   
                    
                    <div
                        className=" justify-between   items-end "
                        id="mobile-menu-2"
                    >
                        <ul className=" flex  font-semibold md:flex-row space-x-8  items-center text-lg ">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700 underline   " :"text-white"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/service"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700  underline  " :"text-white"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/help"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700  underline " :"text-white"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Help
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700  underline " :"text-white"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div> 
                     
                     

                    
                </div>
            </nav>
        </header>
    );
}