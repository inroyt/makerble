import React, { useState } from "react";
import logo from '../logos/makerble_logo1.png';
import ProfilePic from '../logos/myPic.jpg';
import { FaBell,FaEnvelope,FaBolt,FaPlus,FaStar,FaList } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="container shadow-md py-3 px-3 lg:px-5  flex gap-4 justify-start items-center bg-white min-w-full ml-auto sticky top-0 z-50">
       {/* Logo */}
      <img src={logo} alt="Makerble Logo" className="h-10 w-auto mr-6" />

      
      {/* Links for larger screens (left)*/}

        <ul className="lg:flex gap-6 hidden justify-start items-center">

            <li>
                <a href="#about" id="about-link" className="hover:text-blue-500">
                 MyApps
                </a>
            </li>
            <li>
                <a href="#projects" id="projects-link" className="hover:text-blue-500">
                  Home
                </a>
            </li>
            <li>
                <a href="#contact" id="contact-link" className="hover:text-blue-500">
                  Explore
                </a>
            </li>
        </ul>
      
    
     
      {/*Search input */}
      <input type="search" 
      id="search"
      placeHolder="Search for contacts and followers..." 
      className="bg-slate-100 shadow-inner  min-w-[15%] h-8 rounded-md flex justify-between items-center p-2 outline-none "/>
      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden px-3 py-2 text-gray-700 relative z-50 ml-auto"
        onClick={toggleNavbar}
      >
        <div className={`menu-icon flex flex-col justify-center items-center w-6 h-6 cursor-pointer relative`}>
          <div
            className={`line line1 absolute w-6 h-[2px] bg-gray-700 transition-all duration-300 ease-linear ${
              navOpen ? "rotate-45 top-2.5 bg-white" : "top-0.5"
            }`}
          ></div>
          <div
            className={`line line2 absolute w-6 h-[2px] bg-gray-700 transition-all duration-300 ease-linear ${
              navOpen ? "-rotate-45 top-2.5 bg-white" : "bottom-0.5"
            }`}
          ></div>
        </div>
      </button>

     {/* Links for larger screens (right) */}
      <ul className="lg:flex gap-6 hidden justify-start items-center ml-auto">
            <li title="Notifications" className="relative flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-500 text-gray-700 hover:text-white p-1 rounded-md">
            <FaBell size={20}  />
            {/* Notification number badge */}
             <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-slate-600 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
              11
            </span>
            </li>
            <li title="Inbox" className="flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-500 text-gray-700 hover:text-white p-1 rounded-md">
            <FaEnvelope size={20}  />
            </li>
            <li title="Trending" className="relative flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-500 text-gray-700 hover:text-white p-1 rounded-md">
            <FaBolt size={20}  />
            {/* Trending number badge */}
             <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-slate-600 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
             14
            </span>
            </li>
            <li title="Profile" className="h-8 flex justify-center items-center cursor-pointer ">
            <img src={ProfilePic} alt="Makerble Logo" className="h-6 w-auto mr-2 rounded-md"  />
            <p className=" text-gray-700 bg-inherit px-1 border-r-2 border-r-gray-200 hover:text-blue-500">Prabin Roy</p>
            </li>
            <li className="h-8 flex justify-center items-center gap-2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg cursor-pointer">
            <FaPlus size={15}  />
            <p>Create</p>
            </li>
            <li className="h-8 flex justify-center items-center gap-2 bg-inherit hover:bg-slate-50 text-gray-700 border-2 border-blue-500 p-2 rounded-lg cursor-pointer">
            <FaStar size={15}  />
            <p>Upgrade</p>
            </li>
            <li className="h-8 flex justify-center items-center gap-2 bg-inherit hover:bg-slate-50 text-gray-700 border-2 border-green-500 p-2 rounded-lg cursor-pointer">
            <FaList size={15}  />
            <p>More</p>
            </li>
        </ul>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-40 w-1/2 transform ${
          navOpen ? "translate-x-full" : "translate-x-[200%]"
        } transition-transform duration-300 flex flex-col items-center justify-center lg:hidden`}
      >
        <ul className="space-y-6 text-white text-xl">
          <li>
            <a href="#about" id="mobile-about-link" className="hover:text-blue-500" onClick={toggleNavbar}>
              MyApps
            </a>
          </li>
          <li>
            <a href="#projects" id="mobile-projects-link" className="hover:text-blue-500" onClick={toggleNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="#contact" id="mobile-contact-link" className="hover:text-blue-500" onClick={toggleNavbar}>
              Explore
            </a>
          </li>
          <li title="Profile" className="h-8 flex justify-center items-center cursor-pointer ">
            <img src={ProfilePic} alt="Makerble Logo" className="h-6 w-auto mr-2 rounded-md"  />
            <p className=" text-white bg-inherit px-1  hover:text-blue-500">Prabin Roy</p>
            </li>
            <li className="h-8 flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg cursor-pointer">
            <FaPlus size={15} color='white' />
            <p className="text-white">Create</p>
            </li>
            <li className="h-8 flex justify-center items-center gap-2 bg-inherit hover:bg-slate-50 text-gray-700 border-2 border-blue-500 p-2 rounded-lg cursor-pointer">
            <FaStar size={15} color='white' />
            <p className="text-white">Upgrade</p>
            </li>
            <li className="h-8 flex justify-center items-center gap-2 bg-inherit hover:bg-slate-50 text-gray-700 border-2 border-green-500 p-2 rounded-lg cursor-pointer">
            <FaList size={15} color='white' />
            <p className="text-white" >More</p>
            </li>
          <li title="Notifications" className="relative flex justify-center items-center  cursor-pointer hover:bg-blue-500 text-white p-1 rounded-md">
            <FaBell size={20}  />
            {/* Notification number badge */}
             <span className="absolute  transform translate-x-4  -translate-y-2 bg-slate-600 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
              11
            </span>
            </li>
            <li title="Inbox" className="flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-500 text-white p-1 rounded-md">
            <FaEnvelope size={20}  />
            </li>
            <li title="Trending" className="relative flex justify-center items-center  cursor-pointer hover:bg-blue-500 text-white p-1 rounded-md">
            <FaBolt size={20}  />
            {/* Trending number badge */}
             <span className="absolute  transform translate-x-4 -translate-y-2 bg-slate-600 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
             14
            </span>
            </li>
 
        </ul>
        
      </div>
    </div>
  );
};

export default Header;

