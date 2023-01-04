import React from 'react'


const Preview = ({src, className,onLoad}) => {
  return (
    <div className={`max-w-[800px] ml-auto ${className}`}>
        <h1 className='text-center text-6xl font-poppins font-bold my-8 text-white'>Your Image</h1>
        {src&&<img onLoad={onLoad} className='object-scale-down max-h-[600px]' src={src} alt="your image" />}
    </div>
  )
}

export default Preview