import React from 'react'
import { FaCog } from 'react-icons/fa';
import logo from '../../logos/makerble_logo2.jpg';
import ypl from '../../logos/ypl.png';
import oak from '../../logos/oak.jpg';
const Organization = () => {
  return (
    <div className="flex flex-col h-full space-y-2">
    <div className="flex items-center justify-start border-b-2 border-b-gray-200 py-2">
      <p className="font-bold text-blue-500">Organizations</p>
    </div>
    <div className="">
      <ul>
            <li className="h-12 flex justify-between items-center cursor-pointer ">
              <div className=" flex justify-start items-center">
              <img src={ypl} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
             <div className="flex flex-col">
             <p className=" bg-inherit px-1 text-blue-500 text-sm  leading-tight">An Organization Demo</p>
             <p className=" bg-inherit px-1 text-sm text-gray-700 leading-tight">Member</p>
             </div>
              </div>
            <div className="text-blue-500"><FaCog size={10}/></div>
            </li>
            <li className="h-12 flex justify-between items-center cursor-pointer ">
              <div className=" flex justify-start items-center">
              <img src={logo} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <div className="flex flex-col">
             <p className=" bg-inherit px-1 text-blue-500 text-sm leading-tight">A Showcase Inetrnational Development Education Charity</p>
             <p className=" bg-inherit px-1 text-sm text-gray-700 leading-tight">Member</p>
             </div>
              </div>
            </li>
            <li className="h-12 flex justify-between items-center cursor-pointer ">
              <div className=" flex justify-start items-center">
              <img src={oak} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <div className="flex flex-col">
             <p className=" bg-inherit px-1 text-blue-500 leading-tight">Oak Tree Secondary School</p>
             <p className=" bg-inherit px-1 text-sm text-gray-700 leading-tight">Admin</p>
             </div>
              </div>
            <div className="text-blue-500"><FaCog size={10}/></div>
            </li>
      </ul>
    </div>
    <div className="flex justify-end text-blue-500">Show All</div>
  </div>
  )
}

export default Organization;
