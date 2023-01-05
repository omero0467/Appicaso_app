import React, { useState } from 'react'
import { navLinks } from '../constants'
import {logo} from '../assets'
import { Navigate, NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 absolute z-20 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-8' />
      <ul className={`list-none sm:flex hidden justify-end items-center flex-1`}>
        {navLinks.map((nav,index)=>{
          return <li key={nav.id}>
          <NavLink  className={`font-poppins font-normal cursor-pointer text-white mr-10`} to={nav.id==='home'?'/':`/${nav.id}`}>
                  {nav.title}
          </NavLink>
          </li>
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
  {/* {toggle?<XMarkIcon/>:<Bars3Icon/>} */}
        </div>
    </nav>
  )
}

export default Navbar