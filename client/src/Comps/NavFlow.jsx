import React from 'react'
import { Navbar } from 'flowbite-react'
import { logo } from '../assets'
import { navLinks } from '../constants'
import { NavLink } from 'react-router-dom'
const NavFlow = () => {
  return (
<Navbar
  fluid={true}
  className='bg-transparent w-full absolute z-20'
//   rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src={logo}
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
  </Navbar.Brand>
  <Navbar.Toggle className='' />
  <Navbar.Collapse className=''>
{navLinks.map((link)=><NavLink   
      to={link.id==='home'?'/':`/${link.id}`}
      key={link.id}
      className='font-poppins font-normal cursor-pointer sm:text-lg text-white'
      activeclassname='glass py-2'
>{link.title}</NavLink>)}
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavFlow