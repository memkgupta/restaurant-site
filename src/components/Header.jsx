import React from 'react'

function Header() {
  return (
    <div  className=' w-full md:flex flex-row-reverse  justify-around bg-cover bg-center bg-[url("/src/assets/header_img.jpg")]'
    style={{ height: "auto",minHeight:'100vh' }}>
<div className="bg-slate-900 bg-opacity-60 w-full  grid content-center" style={{minHeight:'100vh'}} >
  <div className='mt-auto mb-auto' >
  <h1 className='drop-shadow-2xl tracking-wide text-orange-100 text-center text-8xl antialiased '>"Embrace the Royal Flavors"</h1>
   <h4 className='mt-2 tracking-wide text-orange-100 text-center text-3xl antialised'>~Tasty Bites: Essence of Rajasthan on Your Plate!</h4>
  </div>
  <div className="flex justify-center mt-12">
    <button className='animate-bounce drop-shadow-2xl p-5 rounded-full bg-green-400 hover:bg-green-500 transition-color ease-in-out duration-300'>Book Now</button>
  </div>
</div>
    </div>
  )
}

export default Header