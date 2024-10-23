import React from 'react'
import { FaFilter, FaQuestion, FaPlus } from 'react-icons/fa';
import logo from '../../logos/makerble_logo2.jpg';

const Contacts = () => {
  return (
    <div className="flex flex-col h-full">
    <div className="flex items-center justify-between border-b-2 border-b-gray-200 py-2">
      <div className="flex gap-1 items-center">
        <p className="font-bold text-blue-500">Contacts</p>
        <div className="flex justify-start items-center text-blue-500 gap-1">
        <FaFilter size={15} />
        <FaQuestion size={15}/>
        </div>
      </div>
      <div className="flex justify-start items-center gap-1  bg-blue-500 text-white p-1 rounded-md ">
      <FaPlus size={15} />
      <p className="text-sm">New Contact</p>
      </div>
    </div>
    <div className="">
      <ul>
            <li className="h-8 flex justify-start items-center cursor-pointer ">
              <img src={logo} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <p className=" bg-inherit px-1 text-blue-500">Herry</p>
            </li>
            <li className="h-8 flex justify-start items-center cursor-pointer ">
              <img src={logo} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <p className=" bg-inherit px-1 text-blue-500">Siyamadit</p>
            </li>
            <li className="h-8 flex justify-start items-center cursor-pointer ">
              <img src={logo} alt="Makerble Logo" className="h-6 w-auto  rounded-md" />
              <p className=" bg-inherit px-1 text-blue-500">Claire</p>
            </li>
      </ul>
    </div>
    <div className="flex justify-end text-blue-500">Show All</div>
  </div>
  )
}

export default Contacts
