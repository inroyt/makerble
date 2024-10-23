import React from 'react'
import { FaFilter, FaCog, FaPlus } from 'react-icons/fa';
import logo from '../../logos/makerble_logo2.jpg';

const Projects = () => {
  return (
    <div className="flex flex-col h-full">
    <div className="flex items-center justify-between border-b-2 border-b-gray-200 py-2">
      <p className="font-bold text-blue-500">Projects</p>
      <div className="flex justify-start items-center gap-1  bg-blue-500 text-white p-1 rounded-md ">
      <FaPlus size={15} />
      <p className="text-sm">New Project</p>
      </div>
    </div>
    <div className="">
      <ul>
            <li className="h-8 flex justify-between items-center cursor-pointer ">
              <div className=" flex justify-start items-center">
              <img src={logo} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <p className=" bg-inherit px-1 text-gray-700">4359 test</p>
              </div>
            <div className="text-blue-500"><FaCog size={10}/></div>
            </li>
            <li className="h-8 flex justify-between items-center cursor-pointer ">
              <div className=" flex justify-start items-center">
              <img src={logo} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <p className=" bg-inherit px-1 text-gray-700">a test 5146</p>
              </div>
            <div className="text-blue-500"><FaCog size={10}/></div>
            </li>
            <li className="h-8 flex justify-between items-center cursor-pointer ">
              <div className=" flex justify-start items-center">
              <img src={logo} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <p className=" bg-inherit px-1 text-gray-700">A training Project</p>
              </div>
            <div className="text-blue-500"><FaCog size={10}/></div>
            </li>
      </ul>
    </div>
    <div className="flex justify-end text-blue-500">Show All</div>
  </div>
  )
}

export default Projects
