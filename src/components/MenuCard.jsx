import React from 'react'

function MenuCard({title,image,description}) {
  return (
    <div className="bg-slate-900 max-w-md mx-auto text-orange-100  rounded-xl  overflow-hidden md:max-w-2xl">
    <div className="">
      <div className="">
        <img
          className=" w-full object-cover "
          src={image}
          alt="Card"
        />
      </div>
      <div className="p-8">
       
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium  hover:underline"
        >
         {title}
        </a>
        <p className="mt-2  flex flex-wrap">
{description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default MenuCard