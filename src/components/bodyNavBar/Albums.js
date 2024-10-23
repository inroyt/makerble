import React from 'react'
import { FaFilter, FaCog, FaPlus } from 'react-icons/fa';
import logo from '../../logos/makerble_logo2.jpg';
import blf from '../../logos/blf.png';
const Albums = () => {
  return (
    <div className="flex flex-col h-full">
    <div className="flex items-center justify-between border-b-2 border-b-gray-200 py-2">
      <p className="font-bold text-blue-500">Albums</p>
      <div className="flex justify-start items-center gap-1  bg-blue-500 text-white p-1 rounded-md ">
      <FaPlus size={15} />
      <p className="text-sm">New Album</p>
      </div>
    </div>
    <div className="">
      <ul>
            <li className="h-8 flex justify-between items-center cursor-pointer ">
              <div className=" flex justify-start items-center">
              <img src={logo} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <p className=" bg-inherit px-1 text-gray-700">2021 Portfolio</p>
              </div>
            <div className="text-blue-500"><FaCog size={10}/></div>
            </li>
            <li className="h-8 flex justify-between items-center cursor-pointer ">
              <div className=" flex justify-start items-center">
              <img src={logo} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <p className=" bg-inherit px-1 text-gray-700">All Partners</p>
              </div>
            <div className="text-blue-500"><FaCog size={10}/></div>
            </li>
            <li className="h-8 flex justify-between items-center cursor-pointer ">
              <div className=" flex justify-start items-center">
              <img src={blf} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <p className=" bg-inherit px-1 text-gray-700">Big Lottery Fund</p>
              </div>
            <div className="text-blue-500"><FaCog size={10}/></div>
            </li>
      </ul>
    </div>
    <div className="flex justify-end text-blue-500">Show All</div>
  </div>
  )
}

export default Albums
