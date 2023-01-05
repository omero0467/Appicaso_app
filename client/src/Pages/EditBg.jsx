import React from 'react'
import { ImageInterface,Footer } from '../Comps'
import { editBg } from '../utils'
const EditBg = () => {
  return (  
    <>
    <div className="min-h-screen flex items-center justify-center">    
    <div className="container my-20">
        <ImageInterface Type={'edit'} sendReqtoEdit={editBg} />
    </div>
</div>
<Footer></Footer>
    </>
  )
}

export default EditBg