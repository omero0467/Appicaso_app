import React from 'react'
import Skeleton from './Skeleton'

const Preview = ({src}) => {
  return (
    <div className='max-w-[1024]'>
        {src?<img className='object-scale-down max-h-[600px]' src={src} alt="your image" />:<Skeleton/>}
    </div>
  )
}

export default Preview