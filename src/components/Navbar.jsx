import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [display, setDisplay] = useState(false)
  return (
    <nav className='flex justify-around items-center py-[20px] px-[30px] bg-green-400   md:bg-gray-400 text-white'>
        <div>
            <h1 className='font-extrabold text-5xl text-red-400'><span className='text-white'>RAJE </span> Q'</h1>
        </div>

        <ul className={`flex flex-col md:flex-row justify-between  w-full md:w-[500px] bg-gray-500  items-center gap-2 md:bg-transparent text-2xl top-20 py-6 md:py-0   absolute md:static ${display ? 'left-0' : 'left-[-100%]'}`}>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink className="hover:text-[red]" to="/">Home</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink className="hover:text-[red]" to="about">About</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink className="hover:text-[red]" to="contact">Contact</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink className="hover:text-[red]" to="services">Services</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink className="hover:text-[red] bg-green-400 rounded-md py-1 px-3" to="log">Log in</NavLink></li>
        </ul>

        <i className='md:hidden text-4xl' onClick={() => setDisplay(prev => !prev)}><FaBars /></i>
    </nav>
  )
}
