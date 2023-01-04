import React from 'react'
import { navLinks } from '../constants'
import {logo} from '../assets'
import { Navigate, NavLink } from 'react-router-dom'
const Navbar = () => {
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
    </nav>
  )
}

export default Navbar