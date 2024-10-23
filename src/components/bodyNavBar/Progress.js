import React from 'react';
import { FaPlus } from 'react-icons/fa';


const Progress = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 py-2">
        <div className="flex gap-1 items-center">
          <p className="font-bold">Progress</p>
        </div>
        <p className="text-sm text-blue-500">Go to board</p>
      </div>

      <div className="">
        <ul>
          <li className="h-12 flex justify-between items-center cursor-pointer">
            <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
             
            </div>
            <div className="flex flex-col w-full px-2">
              <p className="bg-inherit text-blue-500 text-sm leading-tight">Are either of your parents living?</p>
              <div className="relative w-full bg-gray-200 rounded-full h-4 mt-1">
                <div className="bg-green-500 h-4 rounded-full relative" style={{ width: '70%' }}>
                  <span className="flex items-center justify-center absolute inset-0 text-xs text-white">
                    7
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-green-500 text-white p-1 rounded-md"><FaPlus size={10} /></div>
          </li>

          <li className="h-12 flex justify-between items-center cursor-pointer">
            <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center">
              
            </div>
            <div className="flex flex-col w-full px-2">
              <p className="bg-inherit text-blue-500 text-sm leading-tight">Do you belong to any groups whi..</p>
              <div className="relative w-full bg-gray-200 rounded-full h-4 mt-1">
                <div className="bg-blue-500 h-4 rounded-full relative" style={{ width: '60%' }}>
                  <span className="flex items-center justify-center absolute inset-0 text-xs text-white">
                    6
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-blue-500 text-white p-1 rounded-md"><FaPlus size={10} /></div>
          </li>

          <li className="h-12 flex justify-between items-center cursor-pointer">
            <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center">
             
            </div>
            <div className="flex flex-col w-full px-2">
              <p className="bg-inherit text-blue-500 text-sm leading-tight">1-2-1 Events</p>
              <div className="relative w-full bg-gray-200 rounded-full h-4 mt-1">
                <div className="bg-red-500 h-4 rounded-full relative" style={{ width: '30%' }}>
                  <span className="flex items-center justify-center absolute inset-0 text-xs text-white">
                    27
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-red-500 text-white p-1 rounded-md"><FaPlus size={10} /></div>
          </li>
        </ul>
      </div>

      <div className="flex justify-end text-blue-500">Show All</div>
    </div>
  );
};

export default Progress;
