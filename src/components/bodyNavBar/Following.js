import React from 'react'

import logo from '../../logos/makerble_logo2.jpg';
import myPic from '../../logos/myPic.jpg';
import ypl from '../../logos/ypl.png';
import oak from '../../logos/oak.jpg';
const Following = () => {
  return (
    <div className="flex flex-col h-full">
    <div className="flex items-center justify-between border-b-2 border-b-gray-200 py-2">
      <div className="flex gap-1 items-center">
        <p className="font-bold text-blue-500">People you Follow</p>
      </div>
    </div>
    <div className="flex justify-evenly items-center gap-1 my-1">
     <img className="img-responsive h-8 w-auto rounded-full" src={myPic}/>
     <img className="img-responsive h-8 w-auto rounded-full" src={logo}/>
     <img className="img-responsive h-8 w-auto rounded-full" src={ypl}/>
     <img className="img-responsive h-8 w-auto rounded-full" src={oak}/>
     <img className="img-responsive h-8 w-auto rounded-full" src={myPic}/>
     <img className="img-responsive h-8 w-auto rounded-full" src={myPic}/>
    </div>
    <div className="flex justify-end text-blue-500">Show All</div>
  </div>
  )
}

export default Following;
