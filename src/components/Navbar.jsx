import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo'
import logo from '../assets/logo.png'
import SideBar from './SideBar';
function Navbar({scrollFunction}) {
  const [isOpacity,setOpacity] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const scroll = window.scrollY;
      if(scroll>100){
        setOpacity(true);
      }
      else{
        setOpacity(false);
      }
      return(()=>{
        setOpacity(false);
      })
    })
  },[])
  return (
<>
<div className={`hidden fixed w-full md:flex  justify-around z-40  items-center bg-slate-900 ${isOpacity?'bg-opacity-100':'bg-opacity-50'}`} >
       <div> <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={logo} className='w-24 h-24' alt="" />
      <span class="ml-3 text-xl text-white">TastyBites</span>
    </a></div>
     <nav className='text-white' >
          
            <div className='flex'>
              <Link onClick={(e)=>{scrollFunction("home")}} className='mx-3  body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>Home</Link>
              <Link onClick={(e)=>{scrollFunction("menu")}} className='mx-3 body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>Menu</Link>
              <Link onClick={(e)=>{scrollFunction("book")}} className='mx-3 body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>Book Now</Link>
              <Link onClick={(e)=>{scrollFunction("contact")}} className='mx-3 body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>Contact</Link>
              <Link onClick={(e)=>{scrollFunction("about")}} className='mx-3 body-font hover:text-teal-500 transition-color ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 '>About</Link>
            </div>
            </nav>
            <div><button onClick={(e)=>{scrollFunction("book")}} className='bg-green-400 p-3 hover:bg-green-700'>Book Now</button></div>
      
  </div>
  <SideBar scrollFunction={scrollFunction}></SideBar>
</>
   

  )
}

export default Navbar