import React from 'react'

function Booking() {
  return (
    <div className="bg-slate-900 min-h-screen  items-center px-48 py-12">
        <h1 className='text-center text-3xl text-orange-100 mb-12'>Book Your Table</h1>
    <form className="bg-white  p-8 rounded-lg shadow-md w-full">
    
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-green-500"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4  flex justify-around">
     <div className='grid w-3/6 mx-4'>
     <label className="text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          className="border border-gray-300 rounded-md px-3 py-2  focus:outline-none focus:border-green-500"
          placeholder="you@example.com"
        />
     </div>
     <div className='grid w-3/6 mx-4'>
     <label className=" text-sm font-medium text-gray-700 mb-1">
         Phone Number
        </label>
        <input
          type="tel"
          
          className="border border-gray-300 rounded-md  p-3 focus:outline-none focus:border-green-500"
          placeholder="Your Phone Number" required
        />
     </div>
    
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Number of Guests
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-green-500"
          placeholder="Number of Guests"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date and Time
        </label>
        <input
          type="datetime-local"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-green-500"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
      >
        Reserve Now
      </button>
      <p className='text-lg text-center text-black'>We will Call you within 30 minutes after you submit the form </p>
    </form>
  </div>
  )
}

export default Booking