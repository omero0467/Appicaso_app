import React from 'react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import {me,
    me1,
    me2,
    me3,
    tigerocean,
    tigerrocks,
    tigersavana,
} from '../assets'
import { Link } from 'react-router-dom'
const Alternatives = () => {
  return (
    <div className='grid grid-cols-4 gap-3 max-w-xl'>
         <p className="col-start-1 col-span-full row-start-1">Here are a few attempts of changing the background. In most cases only the mask needed to be sent, in order to completley change the background. On the case of sending both the mask and the original the result response is better "taylored" to the central elements of the picture, However the background merely changes and this result is less desired but still an option.</p>
        <img src={me} alt="" className='object-cover '/>
        <img src={me1} alt="" className='object-cover' />
        <img src={tigerocean} alt="" className='object-cover col-start-1 col-end-3 row-start-2'/>
        <img src={tigerrocks} alt="" className='object-cover'/>
        <img src={tigersavana} alt="" className='object-cover col-start-3 col-span-2 row-start-2' />
        <Link to={'/gallery'}>
          <div className='bg-blue-gradient rounded-lg h-full shadow-xl flex items-center justify-center'><EllipsisHorizontalIcon className='h-16 text-white' /></div>
        </Link>
    </div>
  )
}

export default Alternatives