import React from 'react'
import { FaCog,FaArrowLeft,FaArrowRight } from 'react-icons/fa'
const Tasks = () => {
  return (
    <div className="flex flex-col h-full gap-3">
     <div className="flex justify-between items-center border-b-2 border-b-gray-200 py-2">
       <p className="font-bold text-blue-500">Tasks</p>
       <div className="flex justify-between items-center gap-1">
         <p className="p-1 border-2 border-gray-300 rounded-md text-sm">25 to Do</p>
         <p>|</p>
         <p className="p-1 border-2 border-slate-200 bg-slate-200 rounded-md text-sm">43 done</p>
       </div>
       <p className="p-1 border-2 border-blue-500  bg-blue-500 text-white rounded-md text-sm"> Filters</p>
     </div>
     <div className="flex justify-center items-center gap-2">
        <input type="text" className="h-8 border-2 border-slate-200 p-1 rounded-md" placeholder="Add your task"/>
        <button className="p-1 border-2 border-blue-500  bg-blue-500 text-white rounded-md text-sm">Save task</button>
     </div>
     <div className="flex flex-col justify-center items-center gap-2">
        <div className="h-6 w-full border-2 border-blue-500 flex justify-between items-center rounded-md p-1">
            <p>follow up call needed</p>
            <div className="flex text-blue-500 gap-2">
              <input type="checkbox" className=""/>
              <FaCog size={12}/>
            </div>
        </div>
        <div className="h-6 w-full border-2 border-blue-500 flex justify-between items-center rounded-md p-1">
            <p>Contact local authority</p>
            <div className="flex text-blue-500 gap-2">
              <input type="checkbox" className=""/>
              <FaCog size={12}/>
            </div>
        </div>
        <div className="h-6 w-full border-2 border-blue-500 flex justify-between items-center rounded-md p-1">
            <p>Book in another meeting</p>
            <div className="flex text-blue-500 gap-2">
              <input type="checkbox" className=""/>
              <FaCog size={12}/>
            </div>
        </div>
        <div className="h-6 w-full border-2 border-blue-500 flex justify-between items-center rounded-md p-1">
            <p>Speak to GP about xyz</p>
            <div className="flex text-blue-500 gap-2">
              <input type="checkbox" className=""/>
              <FaCog size={12}/>
            </div>
        </div>
        <div className="h-6 w-full border-2 border-blue-500 flex justify-between items-center rounded-md p-1">
            <p>You need to call her about..</p>
            <div className="flex text-blue-500 gap-2">
              <input type="checkbox" className=""/>
              <FaCog size={12}/>
            </div>
        </div>
        <div className="h-6 w-full border-2 border-blue-500 flex justify-between items-center rounded-md p-1">
            <p>Submission deadline</p>
            <div className="flex text-blue-500 gap-2">
              <input type="checkbox" className=""/>
              <FaCog size={12}/>
            </div>
        </div>
     </div>
     <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center p-1 border-2 border-gray-300 rounded-md">
            <FaArrowLeft size={12}/>
            <p>Previous</p>
            </div>
            <div className="flex justify-center items-center p-1 border-2 border-gray-300 rounded-md bg-blue-500 text-white">
            <p>Next</p>
            <FaArrowRight size={12}/>
            
            </div>
     </div>
    </div>
  )
}

export default Tasks
