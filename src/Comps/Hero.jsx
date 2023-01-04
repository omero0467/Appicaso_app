import React from 'react'
import { backgroundXL, liquid, logo } from '../assets'
import {ArrowDownIcon} from '@heroicons/react/24/solid'
const Hero = () => {
  return (
    <div className='flex relative min-h-screen items-center flex-col justify-center'>
      <img src={logo} className='h-32 xs:h-40' alt="" />
      <div className=' font-mono font-semibold text-lg text-yellow-300 mt-1 capitalize'>reimagine your photos...</div>
      <div>
        {/* <div id="animation"></div> */}
      </div>
      <div className='relative '>
        <img src={liquid} alt="" className='h-40'/>
        <span className='absolute top-1/2  font-poppins drop-shadow-xl	 text-gradient  text-[20px] whitespace-nowrap uppercase text-white font-extrabold left-1/2 -translate-x-1/2'> click me</span>
      </div>
      <div id="arrow-animation" className='absolute bottom-0'>
          <a href="#showcase">
            <ArrowDownIcon className='h-10 text-white font-bold ' />
          </a>
        </div>
    </div>

  )
}

export default Hero