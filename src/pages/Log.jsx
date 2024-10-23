import React from 'react'

export default function Log() {
  return (
    <div className="flex justify-center py-12">
    <form action="" className='w-[90%] md:w-[700px]'>
        <h1 className="text-center font-semibold text-2xl mb-5">Log <span className='text-orange-600'>in</span></h1>

        <input type="text" name="" id="" placeholder='Username' className="w-full h-10 border rounded-md mb-3 px-2" />
        <input type="email" name="" id="" placeholder='Email' className="w-full h-10 border rounded-md mb-3 px-2" />
        <input type="password" name="" id="" placeholder='Password' className="w-full h-10 border rounded-md mb-3 px-2" />
        <button className='text-white bg-black block mx-auto mt-8 px-4 py-1 rounded-md hover:scale-105'>Enter</button>
    </form>
</div>
  )
}
