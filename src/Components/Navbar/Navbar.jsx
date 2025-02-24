import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <React.Fragment>
      <nav className="w-full fixed top-0 right-0 bg-[#2C3E50] left-0  border-b border-[#2C3E50] shadow-sm ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="text-white flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">START FRAMEWORK</span>
          </NavLink>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 "
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

        
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#2C3E50] rounded-lg bg-[#2C3E50] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-bg-[#2C3E50]">
              <li>
            <NavLink  to="/about" className={({ isActive }) =>  `block  text-white mx-4 rounded-lg p-2    ${isActive ? "bg-[#1ABC9C] " : "bg-transparent"}`} >
        About
      </NavLink>

              </li>
              <li>
              <NavLink  to="/portfolio" className={({ isActive }) =>  `block py-2 px-3 text-white mx-4 rounded-lg p-2  ${isActive ? "bg-[#1ABC9C]" : "bg-transparent"}`} >
                  Portfolio
                </NavLink>
              </li>
              <li>
              <NavLink  to="/contact" className={({ isActive }) =>  `block py-2 px-3 text-white mx-4 rounded-lg p-2  ${isActive ? "bg-[#1ABC9C]" : "bg-transparent"}`} >
              Contact </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </React.Fragment>
    </div>
  
    
    );
}
