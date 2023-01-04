import React from 'react'


const Preview = ({src, className,onLoad}) => {
  return (
    <div className={`max-w-[512px] ${className}`}>
        {src&&<img onLoad={onLoad} className='object-scale-down max-h-[600px]' src={src} alt="your image" />}
    </div>
  )
}

export default Preview