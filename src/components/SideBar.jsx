import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import 'animate.css';

import { Link } from 'react-router-dom';
function SideBar({scrollFunction}) {
  const [isSideBarOpen,setSideBarOpen]=useState(false);
  return (
   
 <>
 <button className={`absolute top-5 left-5 text-white md:hidden ${!isSideBarOpen?'':'hidden'}`} onClick={(e)=>{setSideBarOpen(true)}}><FaBars></FaBars></button>
    <div className={`${isSideBarOpen?'':'hidden'} w-64 bg-gray-900 absolute h-full z-50 shadow-lg bg-opacity-75 md:hidden`}>
      {/* Sidebar content */}
      
      <div className="p-4">
        <button className="text-white text-lg font-semibold transition duration-200 ease-in-out" onClick={(e)=>{setSideBarOpen(false)}}><FaTimes></FaTimes></button>
        <ul className="mt-4 grid text-orange-100 animate__animated animate__slideInLeft">
        <Link onClick={(e)=>{scrollFunction("home");setSideBarOpen(false)}} className='mx-3  my-3 body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>Home</Link>
              <Link  onClick={(e)=>{scrollFunction("menu");setSideBarOpen(false)}} className='mx-3 my-3 body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>Menu</Link>
              <Link onClick={(e)=>{scrollFunction("book");setSideBarOpen(false)}} className='mx-3 my-3 body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>Book Now</Link>
              <Link onClick={(e)=>{scrollFunction("contact");setSideBarOpen(false)}} className='mx-3 my-3 body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>Contact</Link>
              <Link onClick={(e)=>{scrollFunction("about");setSideBarOpen(false)}} className='mx-3  my-3 body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>About</Link>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
 </>
  

  )
}

export default SideBar