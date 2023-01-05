import React from 'react'
import { ImageInterface,Footer } from '../Comps'
import { variate } from '../utils'
const Variation = () => {
  return (
<>
<div className="min-h-screen flex items-center justify-center">    
    <div className="container my-20">
        <ImageInterface sendReqtoEdit={variate} />
    </div>
</div>
    <Footer></Footer>
</>
  )
}

export default Variation