import React from 'react'
import { ImageInterface } from '../Comps'
import { variate } from '../utils'
const Variation = () => {
  return (
<>
<div className="min-h-screen flex items-center justify-center">    
    <div className="container">
        <ImageInterface sendReqtoEdit={variate} />
    </div>
</div>
</>
  )
}

export default Variation